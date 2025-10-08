"use client";

import { Prisma } from "@prisma/client";
import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatCurrency } from "@/helpers/format-currency";

import CartSheet from "../../components/cart-sheet";
import { CartContext } from "../../contexts/cart";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
          avatarImageUrl: true;
        };
      };
    };
  }> & { videoUrl?: string | null };
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { toggleCart, addProduct } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(1);
  const [videoOpen, setVideoOpen] = useState(false);
  const buildEmbedSrc = (url?: string | null) => {
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
  };
  const handleDecreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev - 1;
    });
  };
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleAddToCart = () => {
    addProduct({
      ...product,
      quantity,
    });
    toggleCart();
  };
  return (
    <>
      <div className="relative z-50 mt-[-1.5rem] flex flex-auto flex-col overflow-hidden rounded-t-3xl bg-card p-5">
        <div className="flex-auto overflow-hidden">
          {/* RESTAURANTE */}
          <div className="flex items-center gap-1.5">
            <Image
              src={product.restaurant.avatarImageUrl}
              alt={product.restaurant.name}
              width={16}
              height={16}
              className="rounded-full"
            />
            <p className="text-xs text-muted-foreground">
              {product.restaurant.name}
            </p>
          </div>

          {/* NOME DO PRODUTO */}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">{product.name}</h2>

          {/* PREÃ‡O E QUANTIDADE */}
          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-2xl font-semibold">
              {formatCurrency(product.price)}
            </h3>
            <div className="flex items-center gap-3 text-center">
              <Button
                variant="outline"
                className="h-9 w-9 rounded-xl"
                onClick={handleDecreaseQuantity}
              >
                <ChevronLeftIcon />
              </Button>
              <p className="min-w-[1.5rem] text-base">{quantity}</p>
              <Button
                className="h-9 w-9 rounded-xl"
                onClick={handleIncreaseQuantity}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>

          <ScrollArea className="h-full">
            {/* SOBRE */}
            <div className="mt-6 space-y-3">
              <h4 className="font-semibold">Sobre</h4>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </div>

            {product.videoUrl ? (
              <div className="mt-6">
                <Drawer open={videoOpen} onOpenChange={setVideoOpen}>
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="w-full rounded-xl">Ver vídeo do preparo</Button>
                  </DrawerTrigger>
                  <DrawerContent className="h-[70vh]">
                    <DrawerHeader>
                      <DrawerTitle>vídeo: {product.name}</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4">
                      {(() => {
                        const embed = buildEmbedSrc(product.videoUrl);
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
                      })()}
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            ) : null}

            {/* INGREDIENTS */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-1.5">
                <ChefHatIcon size={18} />
                <h4 className="font-semibold">Ingredientes</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>

        <Button className="w-full rounded-full" onClick={handleAddToCart}>
          Adicionar à sacola
        </Button>
      </div>
      <CartSheet />
    </>
  );
};

export default ProductDetails;


