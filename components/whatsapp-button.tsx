"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import { DemoWhatsAppDialog } from "@/components/demo-whatsapp-dialog";
import { WhatsApp } from "@/components/icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";

type WhatsAppButtonProps = {
  message?: string;
  children?: ReactNode;
  label?: string;
  className?: string;
  variant?: "solid" | "outline" | "light" | "outline-light" | "text";
  showIcon?: boolean;
  ariaLabel?: string;
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full text-sm font-medium transition-[background-color,color,border-color,box-shadow] duration-300";

const variantClasses: Record<
  NonNullable<WhatsAppButtonProps["variant"]>,
  string
> = {
  solid: "bg-espresso px-5 text-bone hover:bg-umber",
  outline:
    "border border-line px-5 text-espresso hover:border-espresso hover:bg-espresso hover:text-bone",
  light: "bg-bone px-5 text-espresso hover:bg-bone-soft",
  "outline-light":
    "border border-line-dark px-5 text-bone hover:border-bone hover:bg-bone hover:text-espresso",
  text: "min-h-0 px-0 text-espresso underline decoration-line underline-offset-4 hover:decoration-espresso",
};

export function WhatsAppButton({
  message = siteConfig.whatsapp.defaultMessage,
  children,
  label = "WhatsApp",
  className,
  variant = "solid",
  showIcon = true,
  ariaLabel,
}: WhatsAppButtonProps) {
  const [demoOpen, setDemoOpen] = useState(false);
  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      {children ?? label}
      {showIcon ? <WhatsApp className="size-[1.05rem] shrink-0" /> : null}
    </>
  );

  if (!siteConfig.whatsapp.isPlaceholder) {
    return (
      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
        data-whatsapp-cta="configured"
      >
        {content}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setDemoOpen(true)}
        className={classes}
        aria-label={ariaLabel}
        title="Demo contact — no WhatsApp number is connected"
        data-whatsapp-cta="demo"
      >
        {content}
      </button>
      <DemoWhatsAppDialog
        open={demoOpen}
        message={message}
        onClose={() => setDemoOpen(false)}
      />
    </>
  );
}
