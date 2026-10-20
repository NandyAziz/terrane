"use client";

import { useId, useState } from "react";

import { Check, Copy, WhatsApp } from "@/components/icons";
import { Modal } from "@/components/ui/modal";
import { siteConfig } from "@/lib/site";

type DemoWhatsAppDialogProps = {
  open: boolean;
  message: string;
  onClose: () => void;
};

export function DemoWhatsAppDialog({
  open,
  message,
  onClose,
}: DemoWhatsAppDialogProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const titleId = useId();

  function handleClose() {
    setStatus("idle");
    onClose();
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      labelledBy={titleId}
      panelClassName="w-full max-w-xl rounded-[1.75rem] border border-line bg-bone p-6 shadow-[0_30px_100px_-20px_rgba(20,16,11,0.45)] sm:p-9"
    >
      <PanelBody
        titleId={titleId}
        status={status}
        message={message}
        onCopy={copyMessage}
        onClose={handleClose}
      />
    </Modal>
  );
}

function PanelBody({
  titleId,
  status,
  message,
  onCopy,
  onClose,
}: {
  titleId: string;
  status: "idle" | "copied" | "error";
  message: string;
  onCopy: () => void;
  onClose: () => void;
}) {
  return (
    <>
      <div className="flex size-12 items-center justify-center rounded-full bg-bone-deep text-espresso">
        <WhatsApp className="size-6" />
      </div>

      <p className="eyebrow mt-6 text-clay-ink">WhatsApp · demo mode</p>
      <h2
        id={titleId}
        className="display mt-3 text-4xl text-espresso sm:text-5xl"
      >
        This number is a placeholder.
      </h2>
      <p className="mt-5 text-sm leading-7 text-muted">
        No seller is connected in this demo, so nothing will be sent. To enable
        WhatsApp, set{" "}
        <code className="rounded bg-bone-deep px-1.5 py-0.5 font-mono text-[0.8em] text-espresso">
          NEXT_PUBLIC_WHATSAPP_NUMBER
        </code>{" "}
        in your environment or edit{" "}
        <code className="rounded bg-bone-deep px-1.5 py-0.5 font-mono text-[0.8em] text-espresso">
          lib/site.ts
        </code>
        .
      </p>

      <div className="mt-7 rounded-2xl border border-line bg-bone-soft p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow text-muted">Prefilled message</p>
          <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.14em] text-clay-ink uppercase">
            Not sent
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-espresso">{message}</p>
      </div>

      <p className="mt-4 flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.08em] text-muted">
        <span className="inline-block size-1.5 rounded-full bg-clay" aria-hidden />
        Number on file: {siteConfig.whatsapp.display} (placeholder)
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-espresso px-5 py-3 text-sm font-medium text-bone transition-colors hover:bg-umber"
        >
          {status === "copied" ? (
            <Check className="size-4" />
          ) : (
            <Copy className="size-4" />
          )}
          {status === "copied" ? "Copied" : "Copy message"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-medium text-espresso transition-colors hover:bg-bone-deep"
        >
          Close
        </button>
      </div>

      <p className="mt-3 min-h-5 text-xs text-clay-ink" aria-live="polite">
        {status === "error"
          ? "Clipboard access was blocked — select the message above to copy it manually."
          : ""}
      </p>
    </>
  );
}
