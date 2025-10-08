import Image from "next/image";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { db } from "@/lib/prisma";
import { getRestaurantThemeVariables } from "@/lib/theme";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: { slug: string };
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = params;
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

  const welcomeTitle = restaurant.menuWelcomeTitle ?? `Bem-vindo ao ${restaurant.name}`;
  const welcomeDescription =
    restaurant.menuWelcomeMessage ?? "Escolha como prefere aproveitar seu pedido.";

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-background px-6 pt-20 text-foreground"
      style={theme as CSSProperties}
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={90}
          height={90}
          className="rounded-full border border-border"
        />
        <h1 className="text-3xl font-semibold">{restaurant.name}</h1>
        <p className="text-sm text-muted-foreground">{restaurant.description}</p>
      </div>
      <div className="mt-12 space-y-3 text-center">
        <h2 className="text-2xl font-semibold text-foreground">{welcomeTitle}</h2>
        <p className="text-sm text-muted-foreground">{welcomeDescription}</p>
      </div>
      <div className="mt-14 grid w-full max-w-xl grid-cols-1 gap-4 md:grid-cols-2">
        <ConsumptionMethodOption
          slug={slug}
          option="DINE_IN"
          buttonText="Quero comer aqui"
          imageAlt="Comer no local"
          imageUrl="/dine_in.png"
        />
        <ConsumptionMethodOption
          slug={slug}
          option="TAKEAWAY"
          buttonText="Quero levar"
          imageAlt="Retirar para levar"
          imageUrl="/takeaway.png"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
