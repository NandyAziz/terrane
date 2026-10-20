import type { Product } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export function toWhatsAppDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export function buildWhatsAppUrl(message: string): string {
  const digits = toWhatsAppDigits(siteConfig.whatsapp.number);
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function buildProductEnquiry(product: Product, finish: string): string {
  return `Hi TERRANE — I'm interested in the ${product.name} (${product.finishLabel}: ${finish}). Could you share more details?`;
}
