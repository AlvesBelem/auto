"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type CSSProperties } from "react";

import { Button } from "@/components/ui/button";

type GalleryImage = { imageUrl: string };

interface RestaurantHeaderProps {
  restaurant: Pick<
    Restaurant,
    | "name"
    | "coverImageUrl"
    | "heroTitle"
    | "heroSubtitle"
    | "accentColor"
  > & { galleryImages?: GalleryImage[] };
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
  const images = useMemo(() => {
    const list = (restaurant.galleryImages ?? [])
      .map((g) => g.imageUrl)
      .filter(Boolean);
    if (list.length > 0) return list;
    return restaurant.coverImageUrl ? [restaurant.coverImageUrl] : [];
  }, [restaurant.galleryImages, restaurant.coverImageUrl]);

  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(id);
  }, [images.length]);
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
      {/* Carousel de imagens da galeria */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <Image
            key={`${src}-${i}`}
            src={src}
            alt={restaurant.name}
            fill
            className={`object-cover transition-opacity duration-700 ${index === i ? "opacity-100" : "opacity-0"}`}
            priority={i === 0}
          />
        ))}
      </div>
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
