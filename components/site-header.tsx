"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

import { ArrowUpRight, Menu } from "@/components/icons";
import { Modal } from "@/components/ui/modal";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 24;
    if (next !== scrolledRef.current) {
      scrolledRef.current = next;
      setScrolled(next);
    }
  });

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-line bg-bone/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6 lg:h-[5.5rem]">
          <Link
            href="#top"
            className="group flex shrink-0 items-center gap-3"
            aria-label="TERRANE — back to top"
          >
            <BrandMark />
            <span className="flex flex-col leading-none">
              <span className="display text-[1.22rem] tracking-[0.17em]">
                TERRANE
              </span>
              <span className="mt-1 hidden font-mono text-[0.52rem] tracking-[0.33em] text-muted sm:block">
                LIGHT &amp; OBJECTS
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[0.8125rem] font-medium text-espresso/80 transition-colors hover:text-espresso"
              >
                {item.label}
                <span className="absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-espresso transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <WhatsAppButton
              variant="outline"
              className="min-h-10 w-10 px-0 text-[0.78rem] sm:w-auto sm:px-4"
              showIcon
              ariaLabel="Chat on WhatsApp"
            >
              <span className="sr-only sm:not-sr-only">WhatsApp</span>
            </WhatsAppButton>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="flex size-11 items-center justify-center rounded-full border border-line text-espresso transition-colors hover:bg-espresso hover:text-bone lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <Modal
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        labelledBy="mobile-menu-title"
        variant="menu"
        closeLabel="Close navigation menu"
        panelClassName="flex min-h-svh w-full flex-col justify-between bg-bone px-5 pt-24 pb-8 sm:px-8"
      >
        <div>
          <div className="flex items-center gap-3">
            <BrandMark />
            <span className="flex flex-col leading-none">
              <span className="display text-[1.22rem] tracking-[0.17em]">
                TERRANE
              </span>
              <span className="mt-1 font-mono text-[0.52rem] tracking-[0.33em] text-muted">
                LIGHT &amp; OBJECTS
              </span>
            </span>
          </div>

          <p className="eyebrow mt-10 text-clay-ink">Menu</p>
          <h2 id="mobile-menu-title" className="sr-only">
            Site navigation
          </h2>
          <nav aria-label="Mobile" className="mt-5 flex flex-col">
            {siteConfig.navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline justify-between border-b border-line py-4"
              >
                <span className="display text-[clamp(2.4rem,10vw,4.5rem)] text-espresso">
                  {item.label}
                </span>
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[0.65rem] tracking-[0.16em] text-muted">
                    0{index + 1}
                  </span>
                  <ArrowUpRight className="size-5 text-clay-ink transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12">
          <p className="eyebrow text-muted">Enquiries</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton variant="solid" className="w-full sm:w-auto">
              Ask on WhatsApp
            </WhatsAppButton>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-5 text-sm font-medium text-espresso transition-colors hover:bg-bone-deep"
            >
              {siteConfig.email}
            </a>
          </div>
          <p className="mt-5 max-w-sm text-xs leading-5 text-muted">
            Demo catalogue. WhatsApp uses a placeholder number until you connect
            your own.
          </p>
        </div>
      </Modal>
    </>
  );
}

function BrandMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="size-7 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 27V16a11 11 0 0 1 22 0v11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="17.5" r="3.25" fill="var(--clay)" />
    </svg>
  );
}
