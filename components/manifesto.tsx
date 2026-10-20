import { ArrowDown } from "@/components/icons";
import { ParallaxImage } from "@/components/parallax-image";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function Manifesto() {
  return (
    <section id="craft" className="relative scroll-mt-24 py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <div className="rule flex flex-wrap items-center justify-between gap-4 pt-5">
          <SectionLabel index="02">The idea</SectionLabel>
          <p className="font-mono text-[0.6rem] tracking-[0.18em] text-muted uppercase">
            Light as material
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-8">
            <h2 className="display text-[clamp(2.65rem,5.7vw,5.75rem)]">
              Objects for the hours when the world{" "}
              <span className="display-italic text-clay-ink">goes quiet.</span>
            </h2>
          </Reveal>

          <Reveal
            delay={0.16}
            className="lg:col-span-3 lg:col-start-10 lg:self-end"
          >
            <p className="body-copy">
              We imagine pieces that do not compete for attention. A low glow, a
              soft edge, a surface that changes with the day — forms that settle
              into a room rather than perform in it.
            </p>
            <a
              href="#story"
              className="group mt-7 inline-flex items-center gap-2.5 text-sm font-medium text-espresso"
            >
              Three studies in light
              <ArrowDown className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-4 gap-y-4 sm:gap-x-6 lg:mt-24">
          <div className="col-span-12 sm:col-span-8">
            <ParallaxImage
              src="/images/interior-light.jpg"
              alt="A pale, quiet interior with a small table, a vase and a chair in soft daylight."
              className="aspect-[4/3] rounded-[1.25rem] bg-bone-deep"
              sizes="(min-width: 1024px) 64vw, 100vw"
              position="50% 52%"
              strength={4}
            />
            <div className="mt-3 flex items-baseline justify-between gap-4">
              <p className="font-mono text-[0.6rem] tracking-[0.16em] text-muted uppercase">
                Morning, held
              </p>
              <p className="font-mono text-[0.6rem] tracking-[0.16em] text-muted uppercase">
                Study / 01
              </p>
            </div>
          </div>

          <div className="col-span-10 col-start-3 sm:col-span-2 sm:col-start-9 sm:mt-28 lg:col-span-3 lg:col-start-10">
            <ParallaxImage
              src="/images/craft-hands.jpg"
              alt="Hands shaping wet clay on a pottery wheel in a dim workshop."
              className="aspect-[3/4] rounded-t-[999px] rounded-b-[1rem] bg-umber"
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 20vw, 80vw"
              position="52% 45%"
              strength={7}
            />
            <p className="mt-3 font-mono text-[0.6rem] leading-5 tracking-[0.16em] text-muted uppercase">
              The hand remains
              <br />
              in the surface
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
