export type ProductCategory = "lighting" | "objects";

export type Product = {
  slug: string;
  index: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  tagline: string;
  description: string;
  finishLabel: string;
  finishes: string[];
  image: {
    src: string;
    alt: string;
    /** CSS object-position for the 4:5 catalogue crop. */
    position?: string;
  };
};

/**
 * DEMO CATALOGUE
 * --------------
 * Fictional pieces created for this showcase. Names, prices, finishes and copy
 * are placeholders — replace them with a real catalogue before publishing.
 * Images are free-to-use Unsplash photographs (see README for credits).
 */
export const products: Product[] = [
  {
    slug: "orbit-pendant",
    index: "01",
    name: "Orbit Pendant",
    category: "lighting",
    categoryLabel: "Lighting",
    price: 420,
    tagline: "Suspended light, in three parts",
    description:
      "A trio of rounded shades that gather into a single, low pool of light. Designed to sit above a table, a counter or an empty corner that needs a little gravity.",
    finishLabel: "Shade",
    finishes: ["Brushed brass", "Warm oak", "Deep umber"],
    image: {
      src: "/images/pendant-orbit.jpg",
      alt: "Three rounded pendant lights in warm brass and wood tones hanging together.",
      position: "52% 45%",
    },
  },
  {
    slug: "hearth-table-lamp",
    index: "02",
    name: "Hearth Table Lamp",
    category: "lighting",
    categoryLabel: "Lighting",
    price: 380,
    tagline: "The warm centre of a room",
    description:
      "A rounded stoneware body under a generous shade. Hearth is made for side tables and late evenings — a small, steady glow rather than a bright room.",
    finishLabel: "Finish",
    finishes: ["Amber", "Bone", "Ash"],
    image: {
      src: "/images/hero-lamp.jpg",
      alt: "A rounded table lamp with a linen shade glowing warmly in a darkened room.",
      position: "72% 50%",
    },
  },
  {
    slug: "halo-table-lamp",
    index: "03",
    name: "Halo Table Lamp",
    category: "lighting",
    categoryLabel: "Lighting",
    price: 260,
    tagline: "A quiet, portable glow",
    description:
      "An open tripod frame and a simple drum shade. Halo is light enough to move from desk to bedside, with a softness that keeps the room calm.",
    finishLabel: "Finish",
    finishes: ["Natural ash", "Smoked oak", "Pale clay"],
    image: {
      src: "/images/lamp-halo.jpg",
      alt: "A table lamp with a warm drum shade on a slim wooden tripod base.",
      position: "100% 40%",
    },
  },
  {
    slug: "monolith-table-lamp",
    index: "04",
    name: "Monolith Table Lamp",
    category: "lighting",
    categoryLabel: "Lighting",
    price: 310,
    tagline: "A dark line against pale walls",
    description:
      "A matte, angular lamp that reads almost as sculpture when it is switched off. Monolith is for desks, shelves and rooms that prefer a little restraint.",
    finishLabel: "Finish",
    finishes: ["Graphite", "Bone", "Moss"],
    image: {
      src: "/images/lamp-monolith.jpg",
      alt: "A dark matte metal table lamp against a soft pale wall.",
      position: "58% 45%",
    },
  },
  {
    slug: "column-vessel",
    index: "05",
    name: "Column Vessel",
    category: "objects",
    categoryLabel: "Objects",
    price: 120,
    tagline: "For stems, branches or nothing at all",
    description:
      "A tall, softly irregular vessel with a narrow neck. Left empty it holds a shadow; filled with a single branch it becomes the quiet centre of a shelf.",
    finishLabel: "Glaze",
    finishes: ["Pale stone", "Ash", "Clay"],
    image: {
      src: "/images/vessel-column.jpg",
      alt: "Three matte ceramic vessels in pale grey and clay tones against a dark background.",
      position: "50% 55%",
    },
  },
  {
    slug: "kiln-cup-set",
    index: "06",
    name: "Kiln Cup Set",
    category: "objects",
    categoryLabel: "Objects",
    price: 88,
    tagline: "Four cups, no two quite alike",
    description:
      "A small set of speckled cups with an unglazed foot and a soft, matte surface. Made for slow mornings and for hands that notice texture.",
    finishLabel: "Glaze",
    finishes: ["Oat", "Chalk", "Ember"],
    image: {
      src: "/images/cups-kiln.jpg",
      alt: "A group of speckled stoneware cups and a small vessel on a pale table.",
      position: "45% 55%",
    },
  },
  {
    slug: "drift-bowl",
    index: "07",
    name: "Drift Bowl",
    category: "objects",
    categoryLabel: "Objects",
    price: 74,
    tagline: "A bowl with a soft horizon",
    description:
      "An asymmetric bowl with a hand-smoothed rim and a speckled interior. Use it for fruit, keys, or simply as a shape that catches the afternoon light.",
    finishLabel: "Glaze",
    finishes: ["Speckled oat", "Slate", "Clay"],
    image: {
      src: "/images/bowl-drift.jpg",
      alt: "Three speckled ceramic bowls on a dark surface, lit softly from the side.",
      position: "50% 55%",
    },
  },
  {
    slug: "loam-plate-set",
    index: "08",
    name: "Loam Plate Set",
    category: "objects",
    categoryLabel: "Objects",
    price: 96,
    tagline: "Everyday plates with weight",
    description:
      "Warm, cream-toned plates with a low rim and a soft sheen. A set that feels settled in the hand and looks better after a few years of dinners.",
    finishLabel: "Glaze",
    finishes: ["Cream", "Sand", "Olive"],
    image: {
      src: "/images/plates-loam.jpg",
      alt: "A stack of warm cream ceramic plates and bowls on a sunlit table.",
      position: "55% 50%",
    },
  },
];

export const categories: { value: "all" | ProductCategory; label: string }[] = [
  { value: "all", label: "All pieces" },
  { value: "lighting", label: "Lighting" },
  { value: "objects", label: "Objects" },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
