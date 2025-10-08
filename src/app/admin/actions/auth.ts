"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { verifyPassword } from "@/lib/auth/password";
import { createAdminSession, destroyAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Informe um e-mail valido"),
  password: z.string().min(1, "Informe sua senha"),
});

type LoginInput = z.infer<typeof loginSchema>;

type LoginResult = { ok: true } | { ok: false; error: string };

export const loginAdmin = async (rawInput: LoginInput): Promise<LoginResult> => {
  const validation = loginSchema.safeParse(rawInput);
  if (!validation.success) {
    return { ok: false, error: validation.error.errors[0]?.message ?? "Dados invalidos" };
  }

  const { email, password } = validation.data;

  const admin = await db.restaurantAdmin.findFirst({
    where: { email },
    include: {
      restaurant: true,
    },
  });

  if (!admin || !verifyPassword(password, admin.passwordHash)) {
    return { ok: false, error: "E-mail ou senha invalidos" };
  }

  if (["PENDING", "CANCELED"].includes(admin.restaurant.subscriptionStatus)) {
    return { ok: false, error: "Ative ou renove o plano para acessar o painel." };
  }

  await createAdminSession({ adminId: admin.id, restaurantId: admin.restaurantId });

  return { ok: true };
};

export const logoutAdmin = async () => {
  await destroyAdminSession();
  redirect("/admin/login");
};
