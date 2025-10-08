import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { db } from "@/lib/prisma";
import { getRestaurantThemeVariables } from "@/lib/theme";

import { isValidCpf, removeCpfPunctuation } from "../menu/helpers/cpf";
import CpfForm from "./components/cpf-form";
import OrderList from "./components/order-list";

interface OrdersPageProps {
  params: { slug: string };
  searchParams: Promise<{ cpf?: string }>;
}

const OrdersPage = async ({ params, searchParams }: OrdersPageProps) => {
  const { slug } = params;
  const { cpf } = await searchParams;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }

  const theme = getRestaurantThemeVariables({
    primaryColor: restaurant.primaryColor,
    secondaryColor: restaurant.secondaryColor,
    accentColor: restaurant.accentColor,
    surfaceColor: restaurant.surfaceColor,
  });

  if (!cpf || !isValidCpf(cpf)) {
    return (
      <div className="min-h-screen bg-background" style={theme as CSSProperties}>
        <CpfForm />
      </div>
    );
  }

  const sanitizedCpf = removeCpfPunctuation(cpf);
  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      customerCpf: sanitizedCpf,
      restaurant: {
        slug,
      },
    },
    include: {
      restaurant: {
        select: {
          name: true,
          avatarImageUrl: true,
        },
      },
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return (
    <div className="min-h-screen bg-background" style={theme as CSSProperties}>
      <OrderList orders={orders} />
    </div>
  );
};

export default OrdersPage;
