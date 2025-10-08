"use client";

import { Prisma } from "@prisma/client";
import { ChevronLeftIcon, ChevronRightIcon,ClockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useContext, useEffect, useMemo, useRef } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../contexts/cart";
import CartSheet from "./cart-sheet";

interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      menuCategories: {
        include: { products: true };
      };
    };
  }>;
}

type MenuCategoriesWithProducts = Prisma.MenuCategoryGetPayload<{
  include: { products: true };
}>;

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
  const { products, total, toggleCart, totalQuantity } = useContext(CartContext);
  const { slug } = useParams<{ slug: string }>();
  const searchParams = useSearchParams();
  const consumptionMethod = searchParams.get("consumptionMethod");

  const buildProductHref = useMemo(
    () => (productId: string) => `/${slug}/menu/${productId}?consumptionMethod=${consumptionMethod}`,
    [slug, consumptionMethod],
  );

  const welcomeTitle = restaurant.menuWelcomeTitle ?? restaurant.name;
  const welcomeMessage = restaurant.menuWelcomeMessage ?? restaurant.description;

  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl bg-card shadow-xl">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3">
          <Image
            src={restaurant.avatarImageUrl}
            alt={restaurant.name}
            height={45}
            width={45}
            className="rounded-full border border-border"
          />
          <div>
            <h2 className="text-lg font-semibold text-foreground">{welcomeTitle}</h2>
            <p className="text-xs text-muted-foreground">{welcomeMessage}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-primary">
          <ClockIcon size={12} />
          <p>Aberto agora</p>
        </div>
      </div>

      <div className="space-y-8">
        {restaurant.menuCategories.map((category) => (
          <CategoryCarousel
            key={category.id}
            category={category}
            buildHref={buildProductHref}
          />
        ))}
      </div>

      {products.length > 0 && (
        <div className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-border bg-card/95 px-5 py-3 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-muted-foreground">Total dos pedidos</p>
              <p className="text-sm font-semibold text-foreground">
                {formatCurrency(total)}
                <span className="text-xs font-normal text-muted-foreground">
                  / {totalQuantity} {totalQuantity > 1 ? "itens" : "item"}
                </span>
              </p>
            </div>
            <Button onClick={toggleCart}>Ver sacola</Button>
            <CartSheet />
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantCategories;

type CategoryWithProducts = Prisma.MenuCategoryGetPayload<{ include: { products: true } }>;

const CategoryCarousel = ({
  category,
  buildHref,
}: {
  category: CategoryWithProducts;
  buildHref: (productId: string) => string;
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollPage = (dir: -1 | 1) => {
    const node = scrollerRef.current;
    if (!node) return;
    const page = node.clientWidth; // largura visÃ­vel
    const max = node.scrollWidth - node.clientWidth; // limite Ã  direita
    const target = Math.max(0, Math.min(max, node.scrollLeft + dir * page));
    node.scrollTo({ left: target, behavior: "smooth" });
  };

  // Garante que o carrossel inicie totalmente à esquerda
  useEffect(() => {
    const node = scrollerRef.current;
    if (node) node.scrollTo({ left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="relative">
      <div className="flex items-center justify-between px-6 md:px-8">
        <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
        <div className="hidden gap-2 md:flex">
          <Button variant="outline" size="icon" className="rounded-xl" onClick={() => scrollPage(-1)}>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-xl" onClick={() => scrollPage(1)}>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="w-full overflow-x-auto snap-x snap-mandatory px-6 md:px-8 scrollbar-on-hover"
        // Alinha o snap com o padding lateral, evitando offset inicial
        style={{ scrollPaddingLeft: "1.5rem", scrollPaddingRight: "1.5rem" }}
      >
        <div className="flex w-max gap-3 md:gap-4 pt-3 pb-5">
          {category.products.map((product) => (
            <Link
              key={product.id}
              href={buildHref(product.id)}
              className="group relative w-[200px] h-[320px] md:w-[220px] md:h-[360px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-[200px] md:h-[220px] w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div className="flex h-[120px] md:h-[140px] flex-col justify-between p-3">
                <div>
                  <p className="line-clamp-2 text-sm font-semibold text-foreground">{product.name}</p>
                  <p className="line-clamp-2 pt-1 text-xs text-muted-foreground">
                    {Array.isArray(product.ingredients) ? product.ingredients.join(", ") : ""}
                  </p>
                </div>
                <p className="text-sm font-semibold text-foreground">{formatCurrency(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

