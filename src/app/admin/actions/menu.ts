"use server";

import { z } from "zod";

import { requireAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

const categorySchema = z.object({
  name: z.string().trim().min(3, "Nome muito curto"),
});

const updateCategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string().trim().min(3, "Nome muito curto"),
});

const deleteCategorySchema = z.object({
  id: z.string().uuid(),
});

const isValidImageSource = (value: string) => {
  if (!value || typeof value !== "string") {
    return false;
  }
  if (value.startsWith("data:image/")) {
    return true;
  }
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol);
  } catch {
    return false;
  }
};

const isValidUrl = (value?: string) => {
  if (!value) return true;
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol);
  } catch {
    return false;
  }
};

const productSchema = z.object({
  menuCategoryId: z.string().uuid(),
  name: z.string().trim().min(3, "Nome muito curto"),
  description: z.string().trim().min(10, "Descricao muito curta"),
  price: z.coerce.number().min(0.5, "Informe um valor valido"),
  imageUrl: z
    .string()
    .trim()
    .refine(isValidImageSource, "Informe uma imagem valida"),
  ingredients: z.string().trim().optional(),
  videoUrl: z.string().trim().optional().refine(isValidUrl, "Informe uma URL valida"),
});

const updateProductSchema = productSchema.extend({
  id: z.string().uuid(),
});

const deleteProductSchema = z.object({
  id: z.string().uuid(),
});

type ActionResult = { ok: true } | { ok: false; error: string };

export const createCategory = async (rawInput: z.infer<typeof categorySchema>): Promise<ActionResult> => {
  const session = await requireAdminSession();
  const validation = categorySchema.safeParse(rawInput);
  if (!validation.success) {
    return { ok: false, error: validation.error.errors[0]?.message ?? "Dados invalidos" };
  }

  await db.menuCategory.create({
    data: {
      name: validation.data.name,
      restaurantId: session.restaurantId,
    },
  });

  return { ok: true };
};

export const updateCategory = async (rawInput: z.infer<typeof updateCategorySchema>): Promise<ActionResult> => {
  const session = await requireAdminSession();
  const validation = updateCategorySchema.safeParse(rawInput);
  if (!validation.success) {
    return { ok: false, error: validation.error.errors[0]?.message ?? "Dados invalidos" };
  }

  const category = await db.menuCategory.findUnique({ where: { id: validation.data.id } });
  if (!category || category.restaurantId !== session.restaurantId) {
    return { ok: false, error: "Categoria nao encontrada" };
  }

  await db.menuCategory.update({
    where: { id: category.id },
    data: { name: validation.data.name },
  });

  return { ok: true };
};

export const deleteCategory = async (rawInput: z.infer<typeof deleteCategorySchema>): Promise<ActionResult> => {
  const session = await requireAdminSession();
  const validation = deleteCategorySchema.safeParse(rawInput);
  if (!validation.success) {
    return { ok: false, error: "Categoria nao encontrada" };
  }

  const category = await db.menuCategory.findUnique({ where: { id: validation.data.id } });
  if (!category || category.restaurantId !== session.restaurantId) {
    return { ok: false, error: "Categoria nao encontrada" };
  }

  await db.menuCategory.delete({ where: { id: category.id } });

  return { ok: true };
};

const buildIngredients = (value?: string) =>
  value
    ? value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

export const createProduct = async (rawInput: z.infer<typeof productSchema>): Promise<ActionResult> => {
  const session = await requireAdminSession();
  const validation = productSchema.safeParse(rawInput);
  if (!validation.success) {
    return { ok: false, error: validation.error.errors[0]?.message ?? "Dados invalidos" };
  }

  const category = await db.menuCategory.findUnique({ where: { id: validation.data.menuCategoryId } });
  if (!category || category.restaurantId !== session.restaurantId) {
    return { ok: false, error: "Categoria nao encontrada" };
  }

  await db.product.create({
    data: {
      name: validation.data.name,
      description: validation.data.description,
      price: validation.data.price,
      imageUrl: validation.data.imageUrl,
      videoUrl: validation.data.videoUrl,
      menuCategoryId: category.id,
      restaurantId: session.restaurantId,
      ingredients: buildIngredients(validation.data.ingredients),
    },
  });

  return { ok: true };
};

export const updateProduct = async (rawInput: z.infer<typeof updateProductSchema>): Promise<ActionResult> => {
  const session = await requireAdminSession();
  const validation = updateProductSchema.safeParse(rawInput);
  if (!validation.success) {
    return { ok: false, error: validation.error.errors[0]?.message ?? "Dados invalidos" };
  }

  const product = await db.product.findUnique({ where: { id: validation.data.id } });
  if (!product || product.restaurantId !== session.restaurantId) {
    return { ok: false, error: "Produto nao encontrado" };
  }

  const category = await db.menuCategory.findUnique({ where: { id: validation.data.menuCategoryId } });
  if (!category || category.restaurantId !== session.restaurantId) {
    return { ok: false, error: "Categoria nao encontrada" };
  }

  await db.product.update({
    where: { id: product.id },
    data: {
      name: validation.data.name,
      description: validation.data.description,
      price: validation.data.price,
      imageUrl: validation.data.imageUrl,
      videoUrl: validation.data.videoUrl,
      menuCategoryId: category.id,
      ingredients: buildIngredients(validation.data.ingredients),
    },
  });

  return { ok: true };
};

export const deleteProduct = async (rawInput: z.infer<typeof deleteProductSchema>): Promise<ActionResult> => {
  const session = await requireAdminSession();
  const validation = deleteProductSchema.safeParse(rawInput);
  if (!validation.success) {
    return { ok: false, error: "Produto nao encontrado" };
  }

  const product = await db.product.findUnique({ where: { id: validation.data.id } });
  if (!product || product.restaurantId !== session.restaurantId) {
    return { ok: false, error: "Produto nao encontrado" };
  }

  await db.product.delete({ where: { id: product.id } });

  return { ok: true };
};
