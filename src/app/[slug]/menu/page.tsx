import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { db } from "@/lib/prisma";
import { getRestaurantThemeVariables } from "@/lib/theme";

import RestaurantCategories from "./components/categories";
import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
  params: { slug: string };
  searchParams?: { consumptionMethod?: string };
}

const isConsumptionMethodValid = (consumptionMethod?: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(
    (consumptionMethod || "").toUpperCase()
  );
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = params;
  const consumptionMethod = searchParams?.consumptionMethod;

  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }

  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    include: {
      menuCategories: {
        include: {
          products: true,
        },
      },
    },
  });

  if (!restaurant) {
    return notFound();
  }

  const theme = getRestaurantThemeVariables({
    primaryColor: restaurant.primaryColor,
    secondaryColor: restaurant.secondaryColor,
    accentColor: restaurant.accentColor,
    surfaceColor: restaurant.surfaceColor,
  });

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={theme as CSSProperties}
    >
      <RestaurantHeader restaurant={restaurant} />
      <RestaurantCategories restaurant={restaurant} />
    </div>
  );
};

export default RestaurantMenuPage;
