import type { ReactNode } from "react";

type SectionLabelProps = {
  index: string;
  children: ReactNode;
  tone?: "light" | "dark" | "clay";
  className?: string;
};

export function SectionLabel({
  index,
  children,
  tone = "light",
  className,
}: SectionLabelProps) {
  const labelColor =
    tone === "light"
      ? "text-muted"
      : tone === "clay"
        ? "text-bone/80"
        : "text-bone/60";
  const indexColor =
    tone === "light"
      ? "text-clay-ink"
      : tone === "clay"
        ? "text-sand"
        : "text-clay-light";
  const lineColor = tone === "light" ? "bg-line" : "bg-line-dark";

  return (
    <div
      className={`eyebrow flex items-center gap-3 ${labelColor} ${className ?? ""}`}
    >
      <span className={indexColor}>{index}</span>
      <span aria-hidden="true" className={`h-px w-8 ${lineColor}`} />
      <span>{children}</span>
    </div>
  );
}
