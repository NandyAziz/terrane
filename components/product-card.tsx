import Image from "next/image";

import { ArrowUpRight } from "@/components/icons";
import { formatPrice } from "@/lib/products";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
};

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article
      className="group relative"
      data-product-card={product.slug}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-bone-deep ring-1 ring-line-soft">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 32vw, (min-width: 640px) 46vw, 92vw"
          className="object-cover transition-transform duration-[1100ms] ease-out-expo group-hover:scale-[1.035]"
          style={{ objectPosition: product.image.position }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-espresso/45 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-espresso/65 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-90"
        />

        <div className="absolute top-4 right-4 left-4 flex items-start justify-between gap-4">
          <span className="font-mono text-[0.58rem] tracking-[0.18em] text-bone uppercase">
            {product.index}
          </span>
          <span className="rounded-full border border-bone/25 bg-espresso/55 px-2.5 py-1 font-mono text-[0.55rem] tracking-[0.14em] text-bone uppercase backdrop-blur">
            {product.categoryLabel}
          </span>
        </div>

        <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between gap-4">
          <p className="font-mono text-[0.6rem] tracking-[0.14em] text-bone/85 uppercase">
            {product.finishes.length} finishes
          </p>
          <span className="flex translate-y-2 items-center gap-2 rounded-full bg-bone px-4 py-2 font-mono text-[0.58rem] tracking-[0.14em] text-espresso uppercase opacity-0 transition-[opacity,transform] duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
            View piece
            <ArrowUpRight className="size-3.5" />
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="display text-[1.55rem] leading-tight text-espresso">
            {product.name}
          </h3>
          <p className="mt-1.5 font-mono text-[0.58rem] leading-4 tracking-[0.13em] text-muted uppercase">
            {product.tagline}
          </p>
        </div>
        <p className="shrink-0 pt-1 font-mono text-sm text-espresso">
          {formatPrice(product.price)}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onSelect(product)}
        className="absolute inset-0 z-10 rounded-[1.1rem]"
        aria-label={`View ${product.name}, ${formatPrice(product.price)}`}
      >
        <span className="sr-only">View details for {product.name}</span>
      </button>
    </article>
  );
}
