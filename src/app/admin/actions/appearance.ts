"use server";

import { z } from "zod";

import { requireAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

const hexColorRegex = /^#[0-9a-fA-F]{6}$/;
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

const appearanceSchema = z.object({
  primaryColor: z.string().regex(hexColorRegex, "Cor primaria invalida"),
  secondaryColor: z.string().regex(hexColorRegex, "Cor secundaria invalida"),
  accentColor: z.string().regex(hexColorRegex, "Cor de destaque invalida"),
  surfaceColor: z.string().regex(hexColorRegex, "Cor de fundo invalida"),
  heroTitle: z.string().trim().min(3, "Titulo muito curto"),
  heroSubtitle: z.string().trim().min(10, "Subtitulo muito curto"),
  menuWelcomeTitle: z.string().trim().min(3, "Mensagem muito curta"),
  menuWelcomeMessage: z.string().trim().min(10, "Mensagem muito curta"),
  avatarImageUrl: z
    .string()
    .trim()
    .refine(isValidImageSource, "Informe uma URL valida ou selecione um arquivo"),
  coverImageUrl: z
    .string()
    .trim()
    .refine(isValidImageSource, "Informe uma URL valida ou selecione um arquivo"),
});

type AppearanceInput = z.infer<typeof appearanceSchema>;

type AppearanceResult = { ok: true } | { ok: false; error: string };

export const updateAppearance = async (rawInput: AppearanceInput): Promise<AppearanceResult> => {
  const session = await requireAdminSession();
  const validation = appearanceSchema.safeParse(rawInput);
  if (!validation.success) {
    return { ok: false, error: validation.error.errors[0]?.message ?? "Dados invalidos" };
  }

  const data = validation.data;

  await db.restaurant.update({
    where: { id: session.restaurantId },
    data,
  });

  return { ok: true };
};
