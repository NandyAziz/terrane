import { ArrowUpRight, SunMark } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/lib/site";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="on-dark relative scroll-mt-24 overflow-hidden bg-clay-deep text-bone"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(243,238,228,0.14),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-52 size-[38rem] -translate-y-1/2 rounded-full border border-bone/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-36 size-[26rem] -translate-y-1/2 rounded-full border border-bone/10"
      />

      <div className="shell relative py-24 sm:py-32 lg:py-40">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line-dark pt-5">
          <SectionLabel index="06" tone="clay">
            Enquiries
          </SectionLabel>
          <p className="font-mono text-[0.6rem] tracking-[0.18em] text-bone/80 uppercase">
            One conversation
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="display text-[clamp(3rem,7.2vw,7.5rem)]">
                Let&apos;s find the light for{" "}
                <span className="display-italic">your room.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-lg text-[0.95rem] leading-7 text-bone/80">
                Tell us the piece you are drawn to, the finish you have in mind,
                or simply the room that needs it. We will continue the
                conversation on WhatsApp.
              </p>
            </Reveal>
            <Reveal
              delay={0.18}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <WhatsAppButton variant="light" className="px-6">
                Start a WhatsApp conversation
              </WhatsAppButton>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full border border-line-dark px-6 text-sm font-medium text-bone transition-colors duration-300 hover:bg-bone hover:text-clay-deep"
              >
                Email the studio
                <ArrowUpRight className="size-4" />
              </a>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-bone/80">
                <SunMark className="size-3.5 shrink-0" />
                {siteConfig.whatsapp.isPlaceholder
                  ? "Demo contact: WhatsApp uses a placeholder number until you connect your own."
                  : "WhatsApp opens with a message ready to send."}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end gap-6 lg:col-span-3 lg:col-start-10">
            <Reveal delay={0.1} className="border-t border-line-dark pt-4">
              <p className="eyebrow text-bone/80">WhatsApp</p>
              <p className="mt-2 font-mono text-sm">{siteConfig.whatsapp.display}</p>
              {siteConfig.whatsapp.isPlaceholder ? (
                <span className="mt-2 inline-flex rounded-full border border-bone/25 px-2.5 py-1 font-mono text-[0.55rem] tracking-[0.14em] text-bone/85 uppercase">
                  Placeholder
                </span>
              ) : null}
            </Reveal>
            <Reveal delay={0.16} className="border-t border-line-dark pt-4">
              <p className="eyebrow text-bone/80">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-block text-sm text-bone underline decoration-bone/30 underline-offset-4 transition-colors hover:decoration-bone"
              >
                {siteConfig.email}
              </a>
            </Reveal>
            <Reveal delay={0.22} className="border-t border-line-dark pt-4">
              <p className="eyebrow text-bone/80">Catalogue</p>
              <p className="mt-2 text-sm text-bone/80">
                Eight pieces, two categories. Demo content.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
