/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  TERRANE — site configuration
 * ─────────────────────────────────────────────────────────────────────────────
 *  This is a DEMO catalogue. Replace the values below with your own brand,
 *  products (lib/products.ts) and contact details before publishing.
 *
 *  WhatsApp
 *  --------
 *  The number below is an OBVIOUS PLACEHOLDER and is never presented as a real
 *  contact. To connect a real seller, either:
 *
 *    1. Set NEXT_PUBLIC_WHATSAPP_NUMBER in `.env.local`, e.g.
 *         NEXT_PUBLIC_WHATSAPP_NUMBER=+62 812 3456 7890
 *
 *    2. or replace the fallback string below.
 *
 *  Use the full international format. Spaces, dashes and brackets are stripped
 *  when the wa.me link is generated.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const configuredWhatsAppNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || null;

const PLACEHOLDER_NUMBER = "+00 000 000 0000";

export const siteConfig = {
  name: "TERRANE",
  descriptor: "Light & objects",
  title: "TERRANE — Lighting & Objects",
  description:
    "A small, fictional demo collection of sculptural lighting and quiet ceramic objects. Browse the catalogue and enquire on WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@terrane.example",
  whatsapp: {
    /** Digits-only international number used for wa.me links. */
    number: configuredWhatsAppNumber ?? PLACEHOLDER_NUMBER,
    display:
      configuredWhatsAppNumber?.replace(/(\+\d{1,3})(\d{3})(\d{3,4})(\d{3,4})/, "$1 $2 $3 $4") ??
      PLACEHOLDER_NUMBER,
    /** When true the UI clearly labels the contact as a demo placeholder. */
    isPlaceholder: configuredWhatsAppNumber === null,
    /** Opening line used by header / footer / contact CTAs. */
    defaultMessage:
      "Hi TERRANE — I'd like to ask about a piece in the collection.",
  },
  navigation: [
    { label: "Collection", href: "#collection" },
    { label: "Craft", href: "#craft" },
    { label: "Materials", href: "#materials" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
