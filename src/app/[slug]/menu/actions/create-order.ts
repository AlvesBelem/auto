"use server";
/* eslint-disable simple-import-sort/imports */

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ConsumptionMethod, Product } from "@prisma/client";
import { isValidCpf, removeCpfPunctuation } from "../helpers/cpf";

interface CreateOrderInput {
  customerName: string;
  customerCpf: string;
  products: Array<{
    id: string;
    quantity: number;
  }>;
  consumptionMethod: ConsumptionMethod;
  slug: string;
}

export const createOrder = async (input: CreateOrderInput) => {
  const trimmedName = input.customerName.trim();

  if (!trimmedName) {
    throw new Error("Customer name is required");
  }

  if (
    !input.consumptionMethod ||
    !Object.values(ConsumptionMethod).includes(input.consumptionMethod)
  ) {
    throw new Error("Invalid consumption method");
  }

  if (!isValidCpf(input.customerCpf)) {
    throw new Error("Invalid CPF");
  }

  if (!input.products.length) {
    throw new Error("Cart is empty");
  }

  // ✅ Tipagem explícita para o parâmetro do .some()
  if (
    input.products.some(
      (product: CreateOrderInput["products"][number]) =>
        product.quantity <= 0,
    )
  ) {
    throw new Error("All products must have quantity greater than zero");
  }

  const restaurant = await db.restaurant.findUnique({
    where: { slug: input.slug },
  });

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  const productsWithPrices = await db.product.findMany({
    where: {
      id: {
        in: input.products.map((product) => product.id),
      },
    },
  });

  // ✅ Tipagem explícita no .map()
  const priceByProductId = new Map<string, number>(
    productsWithPrices.map((product: Product) => [
      product.id,
      Number(product.price),
    ]),
  );

  // ✅ Tipagem explícita no .find()
  const missingProduct = input.products.find(
    (product: CreateOrderInput["products"][number]) =>
      !priceByProductId.has(product.id),
  );

  if (missingProduct) {
    throw new Error(`Product ${missingProduct.id} is no longer available`);
  }

  // ✅ Tipagem explícita no .map()
  const productsWithPricesAndQuantities = input.products.map(
    (product: CreateOrderInput["products"][number]) => ({
      productId: product.id,
      quantity: product.quantity,
      price: priceByProductId.get(product.id)!,
    }),
  );

  const sanitizedCpf = removeCpfPunctuation(input.customerCpf);

  // ✅ Conversão numérica para evitar TS2362
  const orderTotal = productsWithPricesAndQuantities.reduce(
    (acc: number, product) =>
      acc + Number(product.price) * Number(product.quantity),
    0,
  );

  const order = await db.order.create({
    data: {
      status: "PENDING",
      customerName: trimmedName,
      customerCpf: sanitizedCpf,
      orderProducts: {
        createMany: {
          data: productsWithPricesAndQuantities,
        },
      },
      total: orderTotal,
      consumptionMethod: input.consumptionMethod,
      restaurantId: restaurant.id,
    },
  });

  // Atualiza cache da página de pedidos
  revalidatePath(`/${input.slug}/orders`);

  return order;
};
