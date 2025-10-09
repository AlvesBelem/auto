"use server";
/* eslint-disable simple-import-sort/imports */

import { db } from "@/lib/prisma";
import { headers } from "next/headers";
import Stripe from "stripe";
import type { ConsumptionMethod, Product } from "@prisma/client";
import { CartProduct } from "../contexts/cart";
import { isValidCpf, removeCpfPunctuation } from "../helpers/cpf";

interface CreateStripeCheckoutInput {
  products: CartProduct[];
  orderId: number;
  slug: string;
  consumptionMethod: ConsumptionMethod;
  cpf: string;
}

export const createStripeCheckout = async ({
  orderId,
  products,
  slug,
  consumptionMethod,
  cpf,
}: CreateStripeCheckoutInput) => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing Stripe secret key");
  }

  if (!products.length) {
    throw new Error("Cannot create a checkout session without products");
  }

  if (!isValidCpf(cpf)) {
    throw new Error("Invalid CPF");
  }

  const headerList = await headers();
  const originHeader =
    headerList.get("origin") ||
    process.env.APP_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
    "http://localhost:3000";

  const baseUrl = originHeader.replace(/\/$/, "");

  // ✅ Busca preços do banco com tipagem segura
  const productsWithPrices = await db.product.findMany({
    where: {
      id: {
        in: products.map((product: CartProduct) => product.id),
      },
    },
  });

  // ✅ Tipagem explícita de Product e conversão numérica segura
  const priceByProductId = new Map<string, number>(
    productsWithPrices.map((product: Product) => [
      product.id,
      Number(product.price),
    ]),
  );

  // ✅ Tipagem explícita no find()
  const missingProduct = products.find(
    (product: CartProduct) => !priceByProductId.has(product.id),
  );

  if (missingProduct) {
    throw new Error(`Product ${missingProduct.id} is no longer available`);
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia",
  });

  const searchParams = new URLSearchParams();
  searchParams.set("consumptionMethod", consumptionMethod);
  const sanitizedCpf = removeCpfPunctuation(cpf);
  searchParams.set("cpf", sanitizedCpf);

  // ✅ Tipagem explícita e Number() no cálculo (corrige TS2362)
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${baseUrl}/${slug}/orders?${searchParams.toString()}`,
    cancel_url: `${baseUrl}/${slug}/orders?${searchParams.toString()}`,
    metadata: {
      orderId: String(orderId),
    },
    line_items: products.map((product: CartProduct) => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: product.name,
          images: product.imageUrl ? [product.imageUrl] : undefined,
        },
        unit_amount: Math.round(Number(priceByProductId.get(product.id)) * 100),
      },
      quantity: product.quantity,
    })),
  });

  return { sessionId: session.id };
};
