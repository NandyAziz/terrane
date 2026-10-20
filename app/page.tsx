import { Collection } from "@/components/collection";
import { ContactCta } from "@/components/contact-cta";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Marquee } from "@/components/marquee";
import { Materials } from "@/components/materials";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Story } from "@/components/story";

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="fixed top-4 left-4 z-[60] -translate-y-24 rounded-full bg-espresso px-5 py-3 text-sm font-medium text-bone transition-transform duration-300 focus:translate-y-0"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="content" className="flex-1">
        <Hero />
        <Marquee />
        <Manifesto />
        <Story />
        <Collection />
        <Materials />
        <ContactCta />
      </main>

      <SiteFooter />
    </>
  );
}
