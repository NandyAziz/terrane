import { ParallaxImage } from "@/components/parallax-image";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const materials = [
  {
    title: "Stoneware",
    meta: "Clay",
    copy: "Weight, warmth, a little irregularity. The clay body is left visible at the foot and rim — the places where the hand is most present.",
  },
  {
    title: "Matte glaze",
    meta: "Surface",
    copy: "Low-sheen glazes keep colour close to the clay. A surface that absorbs light reads differently in the morning and again at dusk.",
  },
  {
    title: "Warm light",
    meta: "Glow",
    copy: "Diffused shades and low, indirect sources. Light you can sit beside without squinting — the last hour of the day, held in a room.",
  },
];

export function Materials() {
  return (
    <section
      id="materials"
      className="scroll-mt-24 bg-bone-deep py-24 sm:py-32 lg:py-40"
    >
      <div className="shell">
        <div className="rule flex flex-wrap items-center justify-between gap-4 pt-5">
          <SectionLabel index="05">Materials</SectionLabel>
          <p className="font-mono text-[0.6rem] tracking-[0.18em] text-muted uppercase">
            Three constants
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="display text-[clamp(2.7rem,5.2vw,5.2rem)]">
                Made from three{" "}
                <span className="display-italic text-clay-ink">
                  quiet materials.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="body-copy mt-7 max-w-sm">
                No gloss, no hard shine. The collection is built from a narrow
                set of materials so that every piece can sit next to every
                other piece without a fuss.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              <ParallaxImage
                src="/images/cups-kiln.jpg"
                alt="Speckled ceramic cups with a soft matte glaze."
                className="aspect-[3/4] rounded-[0.9rem] bg-sand"
                sizes="(min-width: 1024px) 12vw, 30vw"
                position="50% 58%"
                strength={4}
              />
              <ParallaxImage
                src="/images/pendant-orbit.jpg"
                alt="Warm pendant shades hanging in a cluster."
                className="aspect-[3/4] rounded-[0.9rem] bg-sand"
                sizes="(min-width: 1024px) 12vw, 30vw"
                position="55% 45%"
                strength={6}
              />
              <ParallaxImage
                src="/images/serving-slate.jpg"
                alt="Stacked ceramic plates and bowls on a wooden surface."
                className="aspect-[3/4] rounded-[0.9rem] bg-sand"
                sizes="(min-width: 1024px) 12vw, 30vw"
                position="55% 50%"
                strength={3}
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <ol className="border-t border-line">
                {materials.map((material, index) => (
                  <li
                    key={material.title}
                    className="grid grid-cols-[auto_1fr] gap-5 border-b border-line py-7 sm:gap-7 sm:py-9"
                  >
                    <span className="mt-2 font-mono text-[0.6rem] tracking-[0.16em] text-clay-ink">
                      0{index + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="display text-3xl text-espresso sm:text-[2.15rem]">
                          {material.title}
                        </h3>
                        <span className="font-mono text-[0.55rem] tracking-[0.16em] text-muted uppercase">
                          {material.meta}
                        </span>
                      </div>
                      <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                        {material.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal
              delay={0.1}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-xs text-xs leading-5 text-muted">
                Colours are approximate. Every screen sees clay a little
                differently.
              </p>
              <a
                href="#collection"
                className="group inline-flex items-center gap-2 text-sm font-medium text-espresso"
              >
                Back to the collection
                <span className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
