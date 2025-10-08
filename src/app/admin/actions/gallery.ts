"use server";

import { z } from "zod";

import { requireAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

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

const createSchema = z.object({
  imageUrl: z
    .string()
    .trim()
    .refine(isValidImageSource, "Informe uma imagem valida"),
  title: z.string().trim().max(80, "Titulo muito longo").optional(),
  description: z.string().trim().max(160, "Descricao muito longa").optional(),
});

const deleteSchema = z.object({
  id: z.string().uuid(),
});

type CreateInput = z.infer<typeof createSchema>;

type GalleryResult = { ok: true } | { ok: false; error: string };

export const createGalleryImage = async (rawInput: CreateInput): Promise<GalleryResult> => {
  const session = await requireAdminSession();
  const validation = createSchema.safeParse(rawInput);
  if (!validation.success) {
    return { ok: false, error: validation.error.errors[0]?.message ?? "Dados invalidos" };
  }

  const imagesCount = await db.restaurantGalleryImage.count({
    where: { restaurantId: session.restaurantId },
  });

  await db.restaurantGalleryImage.create({
    data: {
      ...validation.data,
      sortOrder: imagesCount + 1,
      restaurantId: session.restaurantId,
    },
  });

  return { ok: true };
};

export const deleteGalleryImage = async (rawInput: z.infer<typeof deleteSchema>): Promise<GalleryResult> => {
  const session = await requireAdminSession();
  const validation = deleteSchema.safeParse(rawInput);
  if (!validation.success) {
    return { ok: false, error: "Imagem nao encontrada" };
  }

  const image = await db.restaurantGalleryImage.findUnique({
    where: { id: validation.data.id },
  });
  if (!image || image.restaurantId !== session.restaurantId) {
    return { ok: false, error: "Imagem nao encontrada" };
  }

  await db.restaurantGalleryImage.delete({ where: { id: image.id } });

  return { ok: true };
};
