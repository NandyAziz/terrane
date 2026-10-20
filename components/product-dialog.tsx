"use client";

import Image from "next/image";
import { useState } from "react";

import { ArrowUpRight, WhatsApp } from "@/components/icons";
import { Modal } from "@/components/ui/modal";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { formatPrice } from "@/lib/products";
import type { Product } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { buildProductEnquiry } from "@/lib/whatsapp";

type ProductDialogProps = {
  product: Product | null;
  onClose: () => void;
};

export function ProductDialog({ product, onClose }: ProductDialogProps) {
  return (
    <Modal
      open={product !== null}
      onClose={onClose}
      labelledBy="product-dialog-title"
      panelClassName="w-full max-w-5xl max-h-[calc(100svh-1.5rem)] overflow-y-auto rounded-[1.75rem] border border-line bg-bone shadow-[0_40px_140px_-30px_rgba(20,16,11,0.6)]"
    >
      {product ? (
        <ProductDialogContent
          key={product.slug}
          product={product}
          onClose={onClose}
        />
      ) : null}
    </Modal>
  );
}

function ProductDialogContent({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const initialFinish = product.finishes?.[0] ?? "";
const [finish, setFinish] = useState(initialFinish);
  const message = buildProductEnquiry(product, finish);

  return (
    <div className="grid lg:grid-cols-[1.02fr_1fr]">
      <div className="relative h-64 overflow-hidden bg-bone-deep sm:h-80 lg:h-auto lg:min-h-[38rem]">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover"
          style={{ objectPosition: product.image.position }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent"
        />
        <div className="absolute bottom-5 left-5 flex items-center gap-3">
          <span className="rounded-full border border-bone/30 bg-espresso/30 px-3 py-1.5 font-mono text-[0.58rem] tracking-[0.16em] text-bone uppercase backdrop-blur">
            {product.categoryLabel}
          </span>
          <span className="font-mono text-[0.58rem] tracking-[0.16em] text-bone/75 uppercase">
            Piece {product.index}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:max-h-[82svh] lg:overflow-y-auto lg:p-10">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow text-clay-ink">The piece</p>
          <p className="font-mono text-sm text-espresso">
            {formatPrice(product.price)}
          </p>
        </div>

        <h2
          id="product-dialog-title"
          className="display mt-4 text-[clamp(2.8rem,5vw,4rem)] text-espresso"
        >
          {product.name}
        </h2>
        <p className="mt-2 font-mono text-[0.62rem] tracking-[0.16em] text-muted uppercase">
          {product.tagline}
        </p>

        <p className="mt-6 text-sm leading-7 text-muted">{product.description}</p>

        <fieldset className="mt-7">
          <legend className="eyebrow text-muted">
            {product.finishLabel}
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.finishes.map((option) => (
              <label key={option} className="cursor-pointer">
                <input
                  type="radio"
                  name={`finish-${product.slug}`}
                  value={option}
                  checked={finish === option}
                  onChange={() => setFinish(option)}
                  className="peer sr-only"
                />
                <span className="flex min-h-10 items-center rounded-full border border-line px-4 text-[0.8125rem] text-espresso transition-colors duration-300 peer-checked:border-espresso peer-checked:bg-espresso peer-checked:text-bone peer-focus-visible:ring-2 peer-focus-visible:ring-clay-ink peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bone">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-8 border-t border-line pt-6">
          <WhatsAppButton
            message={message}
            variant="solid"
            className="w-full"
            showIcon={false}
            ariaLabel={`Enquire about the ${product.name} on WhatsApp`}
          >
            <span className="flex items-center gap-2.5">
              Enquire on WhatsApp
              <ArrowUpRight className="size-4" />
            </span>
          </WhatsAppButton>

          <p className="mt-3 flex items-center justify-center gap-2 font-mono text-[0.58rem] tracking-[0.12em] text-muted uppercase">
            <WhatsApp className="size-3.5 text-clay-ink" />
            {siteConfig.whatsapp.isPlaceholder
              ? "Demo contact — number not connected"
              : "Opens WhatsApp with your piece & finish"}
          </p>

          <p className="mt-5 text-center text-[0.6875rem] leading-5 text-muted">
            No cart, no checkout. Questions, finishes and orders are handled
            directly in a WhatsApp conversation.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-full border border-line px-5 py-3 text-sm font-medium text-espresso transition-colors hover:bg-bone-deep"
        >
          Keep browsing
        </button>
      </div>
    </div>
  );
}
