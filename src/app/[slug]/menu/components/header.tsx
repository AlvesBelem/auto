"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import type { CSSProperties } from "react";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
  restaurant: Pick<
    Restaurant,
    | "name"
    | "coverImageUrl"
    | "heroTitle"
    | "heroSubtitle"
    | "accentColor"
  >;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const handleBackClick = () => router.back();
  const handleOrdersClick = () => router.push(`/${slug}/orders`);
  const overlay: CSSProperties = {
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.7) 70%, rgba(15,23,42,0.85) 100%)",
  } satisfies React.CSSProperties;
  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-b-3xl">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0" style={overlay} />
      <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2 text-white">
        <p className="text-sm uppercase tracking-widest text-white/70">Menu ServeFlow</p>
        <h1 className="text-2xl font-semibold">
          {restaurant.heroTitle ?? `Experimente ${restaurant.name}`}
        </h1>
        <p className="text-sm text-white/80">
          {restaurant.heroSubtitle ?? "Personalize seu pedido diretamente no totem."}
        </p>
      </div>
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
        onClick={handleOrdersClick}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default RestaurantHeader;
