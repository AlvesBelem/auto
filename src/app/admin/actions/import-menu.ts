"use server";

import { z } from "zod";

import { requireAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

type ImportResult =
  | { ok: true; categoriesCreated: number; productsCreated: number; productsUpdated: number }
  | { ok: false; error: string };

const rowSchema = z.object({
  category: z.string().trim().min(1, "Categoria obrigatória"),
  name: z.string().trim().min(1, "Nome do produto obrigatório"),
  description: z.string().trim().min(1, "Descrição obrigatória"),
  price: z.union([z.number(), z.string()]).transform((v) => {
    const n = typeof v === "number" ? v : parseFloat(String(v).replace(/\./g, "").replace(/,/, "."));
    if (!isFinite(n)) throw new Error("Preço inválido");
    return n;
  }),
  imageUrl: z.string().trim().url("Imagem inválida"),
  videoUrl: z.string().trim().url().optional().or(z.literal("").transform(() => undefined)),
  ingredients: z
    .string()
    .optional()
    .transform((val) =>
      (val ?? "")
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
    ),
});

const normalizeHeader = (key: string) => {
  const k = key.toLowerCase().trim();
  const map: Record<string, string> = {
    categoria: "category",
    category: "category",
    "nome do produto": "name",
    nome: "name",
    name: "name",
    descricao: "description",
    descrição: "description",
    description: "description",
    preco: "price",
    preço: "price",
    price: "price",
    imagem: "imageUrl",
    image: "imageUrl",
    image_url: "imageUrl",
    video: "videoUrl",
    video_url: "videoUrl",
    ingredientes: "ingredients",
    ingredients: "ingredients",
  };
  return map[k] ?? k;
};

async function parseCsv(buffer: Buffer) {
  const text = buffer.toString("utf8");
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return [] as any[];
  const headers = lines[0].split(/,|;|\t/).map((h) => normalizeHeader(h));
  const rows: any[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(/,|;|\t/);
    const row: any = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = cols[j]?.trim() ?? "";
    }
    rows.push(row);
  }
  return rows;
}

async function parseXlsxOrCsv(file: File): Promise<any[] | { error: string }> {
  const ext = (file.name.split(".").pop() || "").toLowerCase();
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  if (ext === "csv") {
    return parseCsv(buffer);
  }
  try {
    // Try to use sheetjs if available without bundler resolving it eagerly
    // eslint-disable-next-line no-eval
    const req: any = eval("require");
    const XLSX = req("xlsx");
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const json: any[] = XLSX.utils.sheet_to_json(sheet, { defval: "" });
    // Normalize keys
    const normalized = json.map((row) => {
      const out: any = {};
      Object.keys(row).forEach((k) => {
        out[normalizeHeader(k)] = row[k];
      });
      return out;
    });
    return normalized;
  } catch (e) {
    return {
      error:
        "Não foi possível ler .xlsx porque a dependência 'xlsx' não está instalada no projeto. Instale com 'npm i xlsx' ou envie um .csv.",
    };
  }
}

export async function importMenuFromSpreadsheet(formData: FormData): Promise<ImportResult> {
  try {
    const session = await requireAdminSession();
    const file = formData.get("file");
    if (!file || !(file instanceof File)) {
      return { ok: false, error: "Arquivo não enviado" };
    }
    const parsed = await parseXlsxOrCsv(file);
    if ("error" in parsed) {
      return { ok: false, error: parsed.error } as const;
    }
    const rows = parsed;
    if (rows.length === 0) {
      return { ok: false, error: "Planilha vazia" };
    }

    // Validate rows
    const validRows: Array<z.infer<typeof rowSchema>> = [];
    for (const [index, raw] of rows.entries()) {
      const res = rowSchema.safeParse(raw);
      if (!res.success) {
        const msg = res.error.errors[0]?.message ?? "Linha inválida";
        return { ok: false, error: `Erro na linha ${index + 2}: ${msg}` };
      }
      validRows.push(res.data);
    }

    const categoriesByName = new Map<string, string>();
    let categoriesCreated = 0;
    let productsCreated = 0;
    let productsUpdated = 0;

    for (const row of validRows) {
      const key = row.category.trim().toLowerCase();
      let categoryId = categoriesByName.get(key);
      if (!categoryId) {
        const existing = await db.menuCategory.findFirst({
          where: { restaurantId: session.restaurantId, name: row.category },
        });
        if (existing) {
          categoryId = existing.id;
        } else {
          const created = await db.menuCategory.create({
            data: { name: row.category, restaurantId: session.restaurantId },
          });
          categoryId = created.id;
          categoriesCreated++;
        }
        categoriesByName.set(key, categoryId);
      }

      const existingProduct = await db.product.findFirst({
        where: {
          restaurantId: session.restaurantId,
          menuCategoryId: categoryId,
          name: row.name,
        },
      });

      if (existingProduct) {
        await db.product.update({
          where: { id: existingProduct.id },
          data: {
            description: row.description,
            price: row.price,
            imageUrl: row.imageUrl,
            videoUrl: row.videoUrl,
            ingredients: row.ingredients,
          },
        });
        productsUpdated++;
      } else {
        await db.product.create({
          data: {
            name: row.name,
            description: row.description,
            price: row.price,
            imageUrl: row.imageUrl,
            videoUrl: row.videoUrl,
            ingredients: row.ingredients,
            menuCategoryId: categoryId,
            restaurantId: session.restaurantId,
          },
        });
        productsCreated++;
      }
    }

    return { ok: true, categoriesCreated, productsCreated, productsUpdated };
  } catch (e) {
    console.error(e);
    return { ok: false, error: "Falha ao processar a planilha" };
  }
}
