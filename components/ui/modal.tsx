"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

import { Close } from "@/components/icons";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  panelClassName?: string;
  closeLabel?: string;
  variant?: "center" | "menu";
};

/**
 * Thin wrapper over the native <dialog> element: focus trapping, Escape,
 * inert background and focus restoration come from the platform.
 */
export function Modal({
  open,
  onClose,
  labelledBy,
  children,
  panelClassName,
  closeLabel = "Close dialog",
  variant = "center",
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={labelledBy}
      onClose={(event) => {
        // Ignore close events from a nested dialog (e.g. a WhatsApp sheet
        // opened from a product dialog); only close this dialog for its own event.
        if (event.target === dialogRef.current) onClose();
      }}
      onClick={(event) => {
        if (!panelRef.current?.contains(event.target as Node)) {
          onClose();
        }
      }}
    >
      <div
        className={
          variant === "center"
            ? "flex min-h-full items-center justify-center p-3 sm:p-6"
            : "min-h-full"
        }
      >
        <div
          ref={panelRef}
          className={`dialog-panel relative ${panelClassName ?? ""}`}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className={
              variant === "menu"
                ? "absolute top-6 right-5 z-10 flex size-11 items-center justify-center rounded-full border border-line text-espresso transition-colors hover:bg-espresso hover:text-bone sm:top-8 sm:right-8"
                : "absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full border border-line bg-bone-soft/90 text-espresso backdrop-blur transition-colors hover:bg-espresso hover:text-bone sm:top-5 sm:right-5"
            }
          >
            <Close className="size-5" />
          </button>
          {children}
        </div>
      </div>
    </dialog>
  );
}
