"use client";


import type { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { formatCurrency } from "@/helpers/format-currency";
import { normalizeImageSrc } from "@/lib/images";
type ProductWithVideo = Product & { videoUrl?: string | null };

interface ProductsProps {
  products: ProductWithVideo[];
}

const Products = ({ products }: ProductsProps) => {
  const { slug } = useParams<{ slug: string }>();
  const searchParams = useSearchParams();
  const consumptionMethod = searchParams.get("consumptionMethod");
  const [videoProduct, setVideoProduct] = useState<ProductWithVideo | null>(null);

  const buildEmbedSrc = useMemo(() => (url?: string | null) => {
    if (!url) return null;
    try {
      const u = new URL(url);
      const host = u.hostname.replace("www.", "");
      if (host.includes("youtube.com")) {
        const id = u.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : url;
      }
      if (host === "youtu.be") {
        const id = u.pathname.slice(1);
        return id ? `https://www.youtube.com/embed/${id}` : url;
      }
      if (host.includes("vimeo.com")) {
        const id = u.pathname.split("/").filter(Boolean).pop();
        return id ? `https://player.vimeo.com/video/${id}` : url;
      }
      return url;
    } catch {
      return url ?? null;
    }
  }, []);
  return (
    <div className="space-y-3 px-5">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/${slug}/menu/${product.id}?consumptionMethod=${consumptionMethod}`}
          className="flex items-center justify-between gap-10 border-b border-border py-3 transition hover:bg-muted/40"
        >
          {/* ESQUERDA */}
          <div>
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {formatCurrency(product.price)}
            </p>
            {product.videoUrl ? (
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    setVideoProduct(product);
                  }}
                >
                  Ver vídeo do preparo
                </Button>
              </div>
            ) : null}
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={normalizeImageSrc(product.imageUrl)}
              alt={product.name}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      ))}

      <Drawer open={!!videoProduct} onOpenChange={(open) => !open && setVideoProduct(null)}>
        <DrawerTrigger asChild></DrawerTrigger>
        <DrawerContent className="h-[70vh]">
          <DrawerHeader>
            <DrawerTitle>
              {videoProduct ? `Vídeo: ${videoProduct.name}` : "Vídeo"}
            </DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            {videoProduct ? (
              (() => {
                const embed = buildEmbedSrc(videoProduct.videoUrl);
                const isMp4 = typeof embed === "string" && embed.endsWith(".mp4");
                if (isMp4) {
                  return (
                    <video src={embed ?? undefined} controls className="h-[50vh] w-full rounded-xl bg-black" />
                  );
                }
                return (
                  <div className="relative mx-auto aspect-video w-full max-w-3xl">
                    <iframe
                      src={embed ?? undefined}
                      className="h-full w-full rounded-xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                );
              })()
            ) : null}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Products;
