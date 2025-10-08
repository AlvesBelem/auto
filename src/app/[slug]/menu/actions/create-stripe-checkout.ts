"use server";

import { ConsumptionMethod } from "@prisma/client";
import { headers } from "next/headers";
import Stripe from "stripe";

import { db } from "@/lib/prisma";

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

  const headerList = headers();
  const originHeader = headerList.get("origin") ?? process.env.APP_BASE_URL;
  const baseUrl = originHeader?.replace(/\/$/, "") ?? "http://localhost:3000";

  const productsWithPrices = await db.product.findMany({
    where: {
      id: {
        in: products.map((product) => product.id),
      },
    },
  });
  const priceByProductId = new Map(
    productsWithPrices.map((product) => [product.id, product.price]),
  );

  const missingProduct = products.find(
    (product) => !priceByProductId.has(product.id),
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
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${baseUrl}/${slug}/orders?${searchParams.toString()}`,
    cancel_url: `${baseUrl}/${slug}/orders?${searchParams.toString()}`,
    metadata: {
      orderId,
    },
    line_items: products.map((product) => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: product.name,
          images: product.imageUrl ? [product.imageUrl] : undefined,
        },
        unit_amount: Math.round(priceByProductId.get(product.id)! * 100),
      },
      quantity: product.quantity,
    })),
  });
  return { sessionId: session.id };
};
