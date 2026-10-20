import { ArrowUpRight } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const [emailUser, emailDomain] = siteConfig.email.split("@");

  return (
    <footer className="on-dark bg-espresso text-bone">
      <div className="shell pt-16 pb-8 sm:pt-20">
        <div className="grid gap-12 border-b border-line-dark pb-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="eyebrow text-clay-light">TERRANE — Light &amp; objects</p>
            <p className="display mt-5 max-w-sm text-[clamp(2.2rem,3.8vw,3.4rem)]">
              Light and objects for{" "}
              <span className="display-italic">quiet rooms.</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-6 text-bone/55">
              A fictional atelier and demo product catalogue. Everything here is
              replaceable — the pieces, the prices, the words and the contact
              details.
            </p>
            <WhatsAppButton
              variant="outline-light"
              className="mt-7 px-5"
              message="Hi TERRANE — I'd like to ask about the collection."
            >
              Ask on WhatsApp
            </WhatsAppButton>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4 lg:col-start-7"
          >
            <div>
              <p className="eyebrow text-bone/60">Explore</p>
              <ul className="mt-4 space-y-3 text-sm">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-bone/70 transition-colors hover:text-bone"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-bone/60">Enquiries</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-bone/70 transition-colors hover:text-bone"
                  >
                    {emailUser}@<wbr />
                    {emailDomain}
                  </a>
                </li>
                <li className="text-bone/60">
                  {siteConfig.whatsapp.display}
                  {siteConfig.whatsapp.isPlaceholder ? " (placeholder)" : ""}
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="eyebrow text-bone/60">Details</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="text-bone/60">Demo catalogue / 2026</li>
                <li>
                  <a
                    href="https://unsplash.com/license"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-bone/70 transition-colors hover:text-bone"
                  >
                    Unsplash license
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#top"
                    className="text-bone/70 transition-colors hover:text-bone"
                  >
                    Back to top
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-b border-line-dark pb-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.58rem] tracking-[0.14em] text-bone/60 uppercase">
            © 2026 TERRANE — demo catalogue
          </p>
          <p className="max-w-md text-[0.6875rem] leading-5 text-bone/60">
            Product names, prices and copy are placeholders. WhatsApp and email
            use obvious placeholder contact details until configured.
          </p>
        </div>

        <div aria-hidden="true" className="mt-2 overflow-hidden">
          <p className="display text-[clamp(4rem,16.5vw,15rem)] leading-[0.78] tracking-[-0.045em] text-bone/90 select-none">
            TERRANE
          </p>
        </div>
      </div>
    </footer>
  );
}
