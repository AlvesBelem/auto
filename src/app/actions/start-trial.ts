"use server";

import { headers } from "next/headers";
import { z } from "zod";

import { hashPassword } from "@/lib/auth/password";
import { db } from "@/lib/prisma";
import { toSlug } from "@/lib/slug";

const DEFAULT_AVATAR = "https://images.unsplash.com/photo-1555992336-cbf068e392e3";
const DEFAULT_COVER = "https://images.unsplash.com/photo-1534939561126-855b8675edd7";

const schema = z.object({
  restaurantName: z.string().trim().min(3, "Informe um nome com pelo menos 3 caracteres"),
  restaurantDescription: z.string().trim().min(10, "Conte rapidamente o que torna seu restaurante especial"),
  ownerName: z.string().trim().min(3, "Informe seu nome completo"),
  ownerEmail: z.string().trim().toLowerCase().email("Digite um e-mail valido"),
  password: z.string().min(8, "Defina uma senha com pelo menos 8 caracteres"),
});

type StartTrialInput = z.infer<typeof schema>;

type StartTrialResult =
  | { ok: true; checkoutUrl: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

const ensureUniqueSlug = async (name: string) => {
  const baseSlug = toSlug(name) || "restaurante";
  let candidate = baseSlug;
  let counter = 1;
  while (await db.restaurant.findUnique({ where: { slug: candidate } })) {
    candidate = `${baseSlug}-${counter}`;
    counter += 1;
  }
  return candidate;
};

const resolveOrigin = () => {
  const originHeader = headers().get("origin");
  if (originHeader) return originHeader;
  if (process.env.APP_BASE_URL) return process.env.APP_BASE_URL;
  return "http://localhost:3000";
};

export const startTrial = async (rawInput: StartTrialInput): Promise<StartTrialResult> => {
  const validation = schema.safeParse(rawInput);
  if (!validation.success) {
    const fieldErrors = Object.fromEntries(
      Object.entries(validation.error.flatten().fieldErrors).map(([key, value]) => [
        key,
        value?.[0] ?? "Campo inválido",
      ]),
    );
    return { ok: false, error: "Revise os campos destacados", fieldErrors };
  }

  const { ownerEmail, ownerName, password, restaurantDescription, restaurantName } = validation.data;

  const existingAdmin = await db.restaurantAdmin.findFirst({ where: { email: ownerEmail } });
  if (existingAdmin) {
    return { ok: false, error: "Este e-mail já está vinculado a um restaurante." };
  }

  const slug = await ensureUniqueSlug(restaurantName);
  const passwordHash = hashPassword(password);

  const restaurant = await db.restaurant.create({
    data: {
      name: restaurantName,
      slug,
      description: restaurantDescription,
      avatarImageUrl: DEFAULT_AVATAR,
      coverImageUrl: DEFAULT_COVER,
      ownerEmail,
      ownerName,
      heroTitle: restaurantName,
      heroSubtitle: restaurantDescription,
      menuWelcomeTitle: "Bem-vindo ao auto-checkout",
      menuWelcomeMessage: "Personalize seu pedido e finalize em poucos cliques.",
      subscriptionStatus: "TRIALING",
      trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      stripePriceId: process.env.STRIPE_RESTAURANT_PRICE_ID,
      admins: {
        create: {
          email: ownerEmail,
          passwordHash,
          displayName: ownerName,
        },
      },
    },
  });

  // Cria sessão do admin e envia ao painel; cobrança será solicitada apenas ao fim do trial
  const admin = await db.restaurantAdmin.findFirst({
    where: { restaurantId: restaurant.id },
    orderBy: { createdAt: "asc" },
  });
  if (admin) {
    const { createAdminSession } = await import("@/lib/auth/session");
    await createAdminSession({ adminId: admin.id, restaurantId: restaurant.id });
  }

  return { ok: true, checkoutUrl: `${resolveOrigin()}/admin` };
};

