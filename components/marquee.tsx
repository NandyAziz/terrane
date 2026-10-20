import { SunMark } from "@/components/icons";

const phrases = [
  "Sculptural lighting",
  "Quiet ceramic objects",
  "Small-batch forms",
  "Warm, low light",
  "Considered details",
];

export function Marquee() {
  return (
    <div
      className="marquee on-dark overflow-hidden border-y border-line-dark bg-espresso py-4 text-bone"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {phrases.map((phrase) => (
              <span
                key={`${copy}-${phrase}`}
                className="flex items-center gap-6 pr-6 font-mono text-[0.65rem] tracking-[0.22em] whitespace-nowrap uppercase"
              >
                {phrase}
                <SunMark className="size-3 text-clay" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
