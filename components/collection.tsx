"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { ProductCard } from "@/components/product-card";
import { ProductDialog } from "@/components/product-dialog";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { categories, products } from "@/lib/products";
import type { Product, ProductCategory } from "@/lib/products";

type Filter = "all" | ProductCategory;

const EASE = [0.16, 1, 0.3, 1] as const;

export function Collection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? products
        : products.filter((product) => product.category === filter),
    [filter],
  );

  const countLabel = `${String(filtered.length).padStart(2, "0")} ${
    filtered.length === 1 ? "piece" : "pieces"
  }`;

  return (
    <section
      id="collection"
      className="relative scroll-mt-24 py-24 sm:py-32 lg:py-40"
    >
      <div className="shell">
        <div className="rule flex flex-wrap items-center justify-between gap-4 pt-5">
          <SectionLabel index="04">The collection</SectionLabel>
          <p className="font-mono text-[0.6rem] tracking-[0.18em] text-muted uppercase">
            Demo catalogue / USD
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-[clamp(2.7rem,5.6vw,5.6rem)]">
              A small catalogue
              <br />
              of <span className="display-italic text-clay-ink">useful things.</span>
            </h2>
          </Reveal>
          <Reveal
            delay={0.14}
            className="lg:col-span-4 lg:col-start-9 lg:pb-2"
          >
            <p className="body-copy max-w-sm">
              Eight pieces for the rooms you actually live in. Open any piece
              to see its finishes and start a WhatsApp conversation — no cart,
              no checkout.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-y border-line py-4 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
          <div
            className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto px-1"
            role="group"
            aria-label="Filter the collection"
          >
            {categories.map((category) => {
              const isActive = filter === category.value;
              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setFilter(category.value)}
                  aria-pressed={isActive}
                  className={`relative flex min-h-10 shrink-0 items-center rounded-full px-4 text-[0.8125rem] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-bone"
                      : "text-muted hover:text-espresso"
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="collection-filter"
                      className="absolute inset-0 rounded-full bg-espresso"
                      transition={{ duration: 0.45, ease: EASE }}
                    />
                  ) : null}
                  <span className="relative z-10">{category.label}</span>
                </button>
              );
            })}
          </div>

          <p className="font-mono text-[0.6rem] tracking-[0.18em] text-muted uppercase">
            {countLabel}
          </p>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {countLabel.toLowerCase()}
          {filter === "all" ? "" : ` in ${filter}`}.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((product) => (
              <motion.div
                key={product.slug}
                layout
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <ProductCard product={product} onSelect={setSelected} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-6 text-muted">
            Not sure where to begin? Tell us about the room and we will suggest
            a piece, a finish and a place to put it.
          </p>
          <WhatsAppButton
            variant="outline"
            message="Hi TERRANE — I'd love a recommendation for a piece. Here's the room I have in mind:"
          >
            Ask for a recommendation
          </WhatsAppButton>
        </Reveal>
      </div>

      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
