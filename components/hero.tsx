"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { ArrowDown, ArrowUpRight } from "@/components/icons";
import { formatPrice, getProduct } from "@/lib/products";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const line = {
  hidden: { y: "112%" },
  show: {
    y: "0%",
    transition: { duration: 1.05, ease: EASE },
  },
};

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const featured = getProduct("hearth-table-lamp");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden pt-[7.25rem] pb-14 sm:pt-[8rem] lg:flex lg:min-h-svh lg:flex-col lg:justify-center lg:pt-28 lg:pb-20"
    >
      {/* Quiet background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-[6%] -z-10 hidden h-full w-px bg-line-soft lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-32 -z-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(176,90,52,0.09),transparent_65%)] blur-2xl"
      />

      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 lg:col-span-6"
        >
          <motion.div
            variants={fade}
            data-reveal
            className="eyebrow flex items-center gap-4 text-clay-ink"
          >
            <span>Volume 02</span>
            <span className="h-px w-10 bg-clay/50" aria-hidden="true" />
            <span className="text-muted">Light &amp; objects</span>
          </motion.div>

          <h1 className="display mt-6 text-[clamp(3.85rem,10.5vw,9rem)] sm:mt-8">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                variants={line}
                data-reveal
                className="block will-change-transform"
              >
                Light,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                variants={line}
                data-reveal
                className="display-italic block text-clay-ink will-change-transform"
              >
                held still.
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fade}
            data-reveal
            className="body-copy mt-7 max-w-md text-[0.975rem] sm:text-base"
          >
            A small collection of sculptural lamps and quiet ceramic objects,
            made for the slower hours of a room.
          </motion.p>

          <motion.div
            variants={fade}
            data-reveal
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#collection"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-espresso px-6 text-sm font-medium text-bone transition-colors duration-300 hover:bg-umber"
            >
              Explore the collection
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#craft"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-line px-6 text-sm font-medium text-espresso transition-colors duration-300 hover:bg-bone-deep"
            >
              Our approach
              <ArrowDown className="size-4" />
            </a>
          </motion.div>

          <motion.dl
            variants={fade}
            data-reveal
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-5 sm:mt-16"
          >
            <div>
              <dt className="font-mono text-[0.6rem] tracking-[0.16em] text-muted uppercase">
                Pieces
              </dt>
              <dd className="mt-1.5 font-mono text-sm">08</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6rem] tracking-[0.16em] text-muted uppercase">
                Categories
              </dt>
              <dd className="mt-1.5 font-mono text-sm">02</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6rem] tracking-[0.16em] text-muted uppercase">
                Enquiries
              </dt>
              <dd className="mt-1.5 font-mono text-sm">WhatsApp</dd>
            </div>
          </motion.dl>
        </motion.div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto w-full max-w-[32rem] lg:ml-auto lg:max-w-[36rem]">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.25, delay: 0.15, ease: EASE }}
              data-hero-media
              data-reveal
              className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[1.4rem] bg-bone-deep ring-1 ring-line-soft sm:aspect-[5/6] lg:aspect-[4/5]"
            >
              <motion.div
                data-hero-parallax
                className="absolute inset-0"
                style={{ y: imageY, scale: imageScale }}
              >
                <Image
                  src="/images/hero-lamp.jpg"
                  alt="A rounded table lamp with a linen shade glowing warmly in a darkened room."
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover"
                  style={{ objectPosition: "72% 50%" }}
                />
              </motion.div>

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent"
              />

              <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-4 text-bone">
                <div>
                  <p className="font-mono text-[0.6rem] tracking-[0.18em] text-bone/70 uppercase">
                    Flagship piece
                  </p>
                  <p className="display mt-1 text-2xl sm:text-3xl">
                    {featured?.name ?? "Hearth Table Lamp"}
                  </p>
                </div>
                <p className="font-mono text-sm">
                  {featured ? formatPrice(featured.price) : "$380"}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.75, ease: EASE }}
              data-reveal
              className="absolute bottom-16 -left-4 z-10 hidden max-w-[19rem] items-center justify-between gap-4 rounded-2xl border border-line bg-bone-soft/95 px-4 py-3.5 shadow-[0_20px_60px_-30px_rgba(25,20,15,0.55)] backdrop-blur sm:flex"
            >
              <div>
                <p className="font-mono text-[0.58rem] tracking-[0.17em] text-muted uppercase">
                  Now viewing
                </p>
                <p className="mt-1 text-sm font-medium text-espresso">
                  Hand-finished lighting
                </p>
              </div>
              <a
                href="#collection"
                aria-label="Jump to the collection"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-espresso transition-colors hover:bg-espresso hover:text-bone"
              >
                <ArrowUpRight className="size-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="shell mt-14 hidden items-center justify-between lg:mt-20 lg:flex">
        <a
          href="#craft"
          className="group flex items-center gap-3 font-mono text-[0.62rem] tracking-[0.18em] text-muted uppercase"
        >
          <span
            aria-hidden="true"
            className="scroll-cue-line block h-9 w-px bg-clay"
          />
          Scroll to explore
        </a>
        <p className="font-mono text-[0.62rem] tracking-[0.18em] text-muted uppercase">
          Demo collection — 2026
        </p>
      </div>
    </section>
  );
}
