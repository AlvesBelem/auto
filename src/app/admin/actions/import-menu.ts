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
  videoUrl: z
    .string()
    .trim()
    .url()
    .optional()
    .or(z.literal("").transform(() => undefined)),
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

type RowData = z.infer<typeof rowSchema>;

const normalizeHeader = (key: string): keyof RowData | string => {
  const k = key.toLowerCase().trim();
  const map: Record<string, keyof RowData> = {
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

async function parseCsv(buffer: Buffer): Promise<RowData[]> {
  const text = buffer.toString("utf8");
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return [];

  const headers = lines[0].split(/,|;|\t/).map((h) => normalizeHeader(h));
  const rows: RowData[] = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(/,|;|\t/);
    const row: Partial<RowData> = {};
    for (let j = 0; j < headers.length; j++) {
      const key = headers[j] as keyof RowData;
      const value = cols[j]?.trim();

      if (value !== "" && value !== undefined && value !== null) {
        if (key === "ingredients") {
          row[key] = String(value)
            .split(",")
            .map((i) => i.trim()) as RowData[typeof key];
        } else if (key === "price") {
          row[key] = typeof value === "string"
            ? parseFloat(value.replace(/\./g, "").replace(",", "."))
            : value as RowData[typeof key];
        } else {
          row[key] = String(value) as RowData[typeof key];
        }
      }
    }
    rows.push(row as RowData);
  }

  return rows;
}

async function parseXlsxOrCsv(file: File): Promise<RowData[] | { error: string }> {
  const ext = (file.name.split(".").pop() || "").toLowerCase();
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  if (ext === "csv") {
    return parseCsv(buffer);
  }

  try {
    const req = eval("require") as NodeRequire;
    const XLSX = req("xlsx");
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const json = XLSX.utils.sheet_to_json(sheet, { defval: "" }) as Record<string, string | number>[];

    const normalized: RowData[] = json.map((row: Record<string, string | number>) => {
      const out: Partial<RowData> = {};
      Object.keys(row).forEach((k: string) => {
        const key = normalizeHeader(k) as keyof RowData;
        const value = row[k];

        if (value !== "" && value !== undefined && value !== null) {
          if (key === "ingredients") {
            out[key] = String(value)
              .split(",")
              .map((i) => i.trim()) as RowData[typeof key];
          } else if (key === "price") {
            out[key] = typeof value === "string"
              ? parseFloat(value.replace(/\./g, "").replace(",", "."))
              : value as RowData[typeof key];
          } else {
            out[key] = String(value) as RowData[typeof key];
          }
        }
      });

      return out as RowData;
    });

    return normalized;
  } catch {
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
    if ("error" in parsed) return { ok: false, error: parsed.error };

    const rows = parsed;
    if (rows.length === 0) {
      return { ok: false, error: "Planilha vazia" };
    }

    const validRows: RowData[] = [];

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

      const commonData = {
        description: row.description,
        price: row.price,
        imageUrl: row.imageUrl,
        videoUrl: typeof row.videoUrl === "string" ? row.videoUrl || undefined : undefined,
        ingredients: Array.isArray(row.ingredients) ? row.ingredients : [],
      };

      if (existingProduct) {
        await db.product.update({
          where: { id: existingProduct.id },
          data: commonData,
        });
        productsUpdated++;
      } else {
        await db.product.create({
          data: {
            name: row.name,
            menuCategoryId: categoryId,
            restaurantId: session.restaurantId,
            ...commonData,
          },
        });
        productsCreated++;
      }
    }

    return { ok: true, categoriesCreated, productsCreated, productsUpdated };
  } catch (error: unknown) {
    console.error(error);
    return { ok: false, error: "Falha ao processar a planilha" };
  }
}
