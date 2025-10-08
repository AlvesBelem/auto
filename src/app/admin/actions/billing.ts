"use server";

import Stripe from "stripe";

import { requireAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

type Result = { ok: true; url: string } | { ok: false; error: string };

const resolveOrigin = () => {
  if (process.env.APP_BASE_URL) {
    return process.env.APP_BASE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, "");
  }
  return "http://localhost:3000";
};

export const createSubscriptionCheckout = async (): Promise<Result> => {
  const session = await requireAdminSession();
  const restaurant = await db.restaurant.findUnique({ where: { id: session.restaurantId } });
  if (!restaurant) return { ok: false, error: "Restaurante não encontrado" };

  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_RESTAURANT_PRICE_ID) {
    return { ok: false, error: "Stripe não configurado" };
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2025-02-24.acacia" });

  const checkout = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: restaurant.stripeCustomerId || undefined,
    customer_email: restaurant.ownerEmail || undefined,
    line_items: [{ price: process.env.STRIPE_RESTAURANT_PRICE_ID, quantity: 1 }],
    subscription_data: {
      metadata: { restaurantId: restaurant.id },
    },
    metadata: { restaurantId: restaurant.id },
    success_url: `${resolveOrigin()}/admin`,
    cancel_url: `${resolveOrigin()}/admin/assinatura`,
  });

  if (!checkout.url) return { ok: false, error: "Não foi possível abrir o checkout" };
  return { ok: true, url: checkout.url };
};
