"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

import { ArrowRight } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";

const EASE = [0.16, 1, 0.3, 1] as const;

const studies = [
  {
    title: "Form",
    kicker: "Thrown, turned, smoothed",
    copy: "Every piece begins as a silhouette in the hand. We keep the line simple and let the profile do the talking — a curve that feels inevitable from across the room.",
    image: "/images/vessel-column.jpg",
    alt: "Three pale and grey ceramic vessels against a dark studio wall.",
    position: "50% 55%",
  },
  {
    title: "Surface",
    kicker: "Matte glaze, open pore",
    copy: "Our glazes are left a little quiet. A matte surface catches the light instead of reflecting it, so the colour shifts as the day moves across the room.",
    image: "/images/cups-kiln.jpg",
    alt: "A set of speckled stoneware cups with a soft matte finish on a pale table.",
    position: "44% 55%",
  },
  {
    title: "Glow",
    kicker: "Low, warm, indirect",
    copy: "A shade is a room's volume control. We tune ours for the end of the day — a small, steady pool of light rather than a bright, even wash.",
    image: "/images/hero-lamp.jpg",
    alt: "A warm table lamp glowing under a linen shade in a dark room.",
    position: "72% 50%",
  },
];

export function Story() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = value < 0.31 ? 0 : value < 0.66 ? 1 : 2;
    setActive((current) => (current === next ? current : next));
  });

  return (
    <section
      id="story"
      className="on-dark relative scroll-mt-24 bg-espresso py-24 text-bone sm:py-32 lg:py-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/3 -right-40 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(176,90,52,0.16),transparent_68%)] blur-3xl" />
      </div>

      <div className="shell relative pt-24 sm:pt-32 lg:pt-36">
        <div className="rule-dark flex flex-wrap items-center justify-between gap-4 pt-5">
          <SectionLabel index="03" tone="dark">
            Three studies
          </SectionLabel>
          <p className="font-mono text-[0.6rem] tracking-[0.18em] text-bone/50 uppercase">
            Scroll through
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12">
          <h2 className="display text-[clamp(2.7rem,5.4vw,5.4rem)] lg:col-span-7">
            How a piece comes to{" "}
            <span className="display-italic text-clay-light">glow.</span>
          </h2>
          <p className="max-w-sm self-end text-sm leading-7 text-bone/65 lg:col-span-4 lg:col-start-9">
            Three moves shape every object in the collection. The rest is
            patience, and the particular light of the room it ends up in.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="shell relative mt-14 grid gap-10 pb-24 sm:mt-20 lg:mt-16 lg:grid-cols-12 lg:gap-12 lg:pb-32"
      >
        {/* Sticky visual — desktop only */}
        <div className="hidden lg:col-span-6 lg:block">
          <div className="sticky top-28">
            <div className="relative h-[clamp(30rem,64svh,44rem)] overflow-hidden rounded-t-[999px] rounded-b-[1.4rem] bg-umber ring-1 ring-line-dark-soft">
              {studies.map((study, index) => (
                <motion.div
                  key={study.title}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: active === index ? 1 : 0,
                    scale: active === index ? 1 : 1.035,
                  }}
                  transition={{ duration: 0.85, ease: EASE }}
                >
                  <Image
                    src={study.image}
                    alt={study.alt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    className="object-cover"
                    style={{ objectPosition: study.position }}
                  />
                </motion.div>
              ))}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-espresso/65 via-transparent to-transparent"
              />
              <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.6rem] tracking-[0.18em] text-bone/60 uppercase">
                    Study 0{active + 1}
                  </p>
                  <p className="display mt-1 text-3xl">{studies[active].title}</p>
                </div>
                <p className="max-w-[12rem] text-right font-mono text-[0.58rem] tracking-[0.14em] text-bone/60 uppercase">
                  {studies[active].kicker}
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2" aria-hidden="true">
              {studies.map((study, index) => (
                <span
                  key={study.title}
                  className={`h-px flex-1 transition-colors duration-500 ${
                    active === index ? "bg-clay" : "bg-line-dark"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className="lg:col-span-6">
          {studies.map((study, index) => (
            <article
              key={study.title}
              className="flex flex-col justify-center border-t border-line-dark-soft py-12 first:border-t-0 first:pt-0 lg:min-h-[72vh] lg:border-t-0 lg:py-0"
            >
              <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-umber lg:hidden">
                <Image
                  src={study.image}
                  alt={study.alt}
                  fill
                  sizes="92vw"
                  className="object-cover"
                  style={{ objectPosition: study.position }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-espresso/55 to-transparent"
                />
                <p className="absolute bottom-4 left-4 font-mono text-[0.6rem] tracking-[0.18em] text-bone/75 uppercase">
                  Study 0{index + 1} — {study.kicker}
                </p>
              </div>

              <div className="flex items-start gap-5 sm:gap-7">
                <span className="mt-2 font-mono text-[0.65rem] tracking-[0.16em] text-clay-light">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="display text-[clamp(2.7rem,5vw,4.5rem)]">
                    {study.title}
                  </h3>
                  <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-bone/65">
                    {study.copy}
                  </p>
                  <p className="mt-6 font-mono text-[0.6rem] tracking-[0.16em] text-bone/60 uppercase">
                    {study.kicker}
                  </p>
                </div>
              </div>
            </article>
          ))}

          <div className="flex items-center justify-between border-t border-line-dark pt-6 lg:mt-0 lg:border-t-0">
            <p className="max-w-xs text-xs leading-5 text-bone/60">
              The catalogue follows the same three moves.
            </p>
            <a
              href="#collection"
              className="group inline-flex items-center gap-2 text-sm font-medium text-bone"
            >
              See the collection
              <ArrowRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
