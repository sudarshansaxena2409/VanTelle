/**
 * ==============================================================================
 * VANTELLE SINGLE PRODUCT CATALOGUE DATABASE
 * ==============================================================================
 * Centralized Product Repository:
 * Modify, add, or remove products in THIS SINGLE FILE to update the entire website
 * (Collections page, product detail drawers, recommendations, and previews).
 *
 * Supported Main Categories:
 * - 'Jewellery'
 * - 'Fashion'
 * - 'Home Décor'
 *
 * Each product follows the luxury editorial standard:
 * - Clean editorial copy & pricing (EUR)
 * - Material origin & workshop craftsmanship notes
 * - Detailed specifications and care instructions
 * - Primary image and close-up detail gallery
 * ==============================================================================
 */

// Asset resolver utility ensuring correct paths both locally and in production (e.g. GitHub Pages)
const getAssetUrl = (fileName) => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}assets/${fileName}`;
};

export const PRODUCT_CATEGORIES = ['All', 'Jewellery', 'Fashion', 'Home Décor'];

export const PRODUCT_DATABASE = [
  // ---------------------------------------------------------------------------
  // 1. JEWELLERY
  // ---------------------------------------------------------------------------
  {
    id: 'j1',
    category: 'Jewellery',
    name: 'Aurum Pendant',
    tagline: 'Sculptural 18k Fluid Form',
    price: 220,
    currency: '€',
    image: getAssetUrl('collection_jewellery.png'),
    gallery: [
      getAssetUrl('collection_jewellery.png'),
      getAssetUrl('hovofaber_collab.png')
    ],
    desc: 'A fluid expression of elegance. The Aurum Pendant symbolizes inner strength and effortless individuality, suspended gracefully on a delicate 18k gold chain. Designed to catch light with subtle organic contours.',
    material: '18k Champagne Gold Plated Solid Brass',
    origin: 'Handcrafted in Florence, Italy',
    details: 'Pendant dimension: 24mm x 16mm. Chain length: 45cm with 5cm micro-adjuster. Finished with our signature laser-engraved VanTelle brand hallmark.',
    care: 'Avoid direct contact with perfumes, chlorine, and salt water. Store in the complimentary VanTelle suede pouch when not worn.'
  },
  {
    id: 'j2',
    category: 'Jewellery',
    name: 'Luna Hoops',
    tagline: 'Organic Crescent Texture',
    price: 180,
    currency: '€',
    image: getAssetUrl('collection_jewellery.png'),
    gallery: [
      getAssetUrl('collection_jewellery.png'),
      getAssetUrl('hovofaber_collab.png')
    ],
    desc: 'Inspired by the quiet grace of the crescent moon, these hoops present a hand-textured, organic surface that reflects light softly rather than with sharp glare.',
    material: 'Recycled Sterling Silver & 18k Gold Vermeil',
    origin: 'Handcrafted in Vicenza, Italy',
    details: 'Diameter: 22mm. Features an invisible hinge and secure click-lock closure. Ultra-lightweight hollow construction engineered for all-day comfort.',
    care: 'Polish gently with a soft microfibre cloth. Keep away from humidity.'
  },
  {
    id: 'j3',
    category: 'Jewellery',
    name: 'Luxe Chain Bracelet',
    tagline: 'Tactile Mixed-Metal Links',
    price: 260,
    currency: '€',
    image: getAssetUrl('collection_jewellery.png'),
    gallery: [
      getAssetUrl('collection_jewellery.png'),
      getAssetUrl('hovofaber_collab.png')
    ],
    desc: 'An assembly of custom-cast fluid links, representing connection and quiet confidence. Designed to drape naturally across the wrist and layer seamlessly.',
    material: '18k Gold Plated Brass & 925 Sterling Silver',
    origin: 'Handcrafted in Milan, Italy',
    details: 'Length: 18.5cm. Features a sculptural organic toggle closure and custom engraved tag.',
    care: 'Store separately to prevent surface scratches. Clean using a specialized jewelry cloth.'
  },
  {
    id: 'j4',
    category: 'Jewellery',
    name: 'Sofia Ring',
    tagline: 'Raw Cushion-Cut Quartz',
    price: 160,
    currency: '€',
    image: getAssetUrl('collection_jewellery.png'),
    gallery: [
      getAssetUrl('collection_jewellery.png'),
      getAssetUrl('hovofaber_collab.png')
    ],
    desc: 'A substantial, hand-sculpted organic band embedded with a cushion-cut white quartz crystal. Every stone possesses natural internal inclusions, making each Sofia ring entirely unique.',
    material: '18k Gold Plating over Solid Eco-Brass & Natural Quartz',
    origin: 'Handcrafted in Tuscany, Italy',
    details: 'Band width: 6mm tapering to 4mm. Stone size: 8mm x 8mm. Ethically sourced natural quartz.',
    care: 'Remove prior to hand washing or applying skincare formulas.'
  },
  {
    id: 'j5',
    category: 'Jewellery',
    name: 'Perla Drops',
    tagline: 'Baroque Natural Pearl Studs',
    price: 190,
    currency: '€',
    image: getAssetUrl('collection_jewellery.png'),
    gallery: [
      getAssetUrl('collection_jewellery.png'),
      getAssetUrl('hovofaber_collab.png')
    ],
    desc: 'Generous freshwater baroque pearls suspended beneath organic molten gold studs. An editorial elevation of the timeless drop silhouette, celebrating asymmetrical perfection.',
    material: 'Freshwater Baroque Pearls & 18k Solid Gold Posts',
    origin: 'Handcrafted in Amalfi, Italy',
    details: 'Drop length: approximately 32mm. Titanium posts safe for sensitive ears. Butterfly backing.',
    care: 'Apply cosmetics and perfume before putting on pearls. Wipe with a damp soft cloth after wearing.'
  },
  {
    id: 'j6',
    category: 'Jewellery',
    name: 'Celestia Necklace',
    tagline: 'Constellation White Sapphire',
    price: 240,
    currency: '€',
    image: getAssetUrl('collection_jewellery.png'),
    gallery: [
      getAssetUrl('collection_jewellery.png'),
      getAssetUrl('hovofaber_collab.png')
    ],
    desc: 'Delicate constellation links joining a central brilliant-cut white sapphire in a minimal bezel setting. Designed to rest flush against the skin with effortless lightness.',
    material: '18k Solid Gold Vermeil & Ethically Mined White Sapphire',
    origin: 'Handcrafted in Milan, Italy',
    details: 'Chain length: 42cm + 3cm extender. Stone weight: 0.35ct white sapphire.',
    care: 'Clean gently in warm soapy water with a very soft brush, then pat dry.'
  },

  // ---------------------------------------------------------------------------
  // 2. FASHION
  // ---------------------------------------------------------------------------
  {
    id: 'f1',
    category: 'Fashion',
    name: 'Linen Wrap Dress',
    tagline: 'Relaxed Italian Tailoring',
    price: 320,
    currency: '€',
    image: getAssetUrl('vantelle_hero.png'),
    gallery: [
      getAssetUrl('vantelle_hero.png'),
      getAssetUrl('hovofaber_collab.png')
    ],
    desc: 'Crafted from 100% premium Italian linen woven in northern Italy. Features a relaxed silhouette with clean structural lapels, deep in-seam pockets, and an adjustable double-faced tie belt.',
    material: '100% Organic certified Italian Linen',
    origin: 'Tailored in Como, Italy',
    details: 'Unlined for maximum breathability. French seams throughout. Garment-washed for a soft hand-feel that drapes with elegance.',
    care: 'Dry clean or gentle cold cycle with neutral detergent. Line dry in shade; warm iron on reverse.'
  },
  {
    id: 'f2',
    category: 'Fashion',
    name: 'Silk Oversized Shirt',
    tagline: 'Liquid Georgette Draping',
    price: 290,
    currency: '€',
    image: getAssetUrl('vantelle_hero.png'),
    gallery: [
      getAssetUrl('vantelle_hero.png'),
      getAssetUrl('hovofaber_collab.png')
    ],
    desc: 'Pure Mulberry silk georgette offering a luminous matte sheen and fluid drape. Cut with an oversized, modern proportion featuring dropped shoulders and extended French cuffs.',
    material: '100% Mulberry Silk (19mm Sandwashed)',
    origin: 'Tailored in Lyon, France',
    details: 'Concealed mother-of-pearl button placket. Single inverted back box pleat. Curved shirttail hem.',
    care: 'Specialist dry clean or delicate hand wash cold using specialized silk wash. Do not wring.'
  },
  {
    id: 'f3',
    category: 'Fashion',
    name: 'Cashmere Knit Top',
    tagline: 'Fine-Gauge Minimal Mock Neck',
    price: 380,
    currency: '€',
    image: getAssetUrl('vantelle_hero.png'),
    gallery: [
      getAssetUrl('vantelle_hero.png'),
      getAssetUrl('vip_background.png')
    ],
    desc: 'Sumptuously soft, featherlight cashmere knitted at a 16-gauge tension for transitional layering. Features a clean mock neck and finely ribbed trims.',
    material: '100% Grade-A Mongolian Cashmere',
    origin: 'Knit in Hawick, Scotland',
    details: 'Fully fashioned seamless knit construction. Sourced from certified sustainable goat herder cooperatives.',
    care: 'Hand wash cold with wool wash. Lay flat on towel to dry. Store folded, never hung.'
  },
  {
    id: 'f4',
    category: 'Fashion',
    name: 'Wool Blend Coat',
    tagline: 'Double-Breasted Cocoon Structure',
    price: 650,
    currency: '€',
    image: getAssetUrl('vantelle_hero.png'),
    gallery: [
      getAssetUrl('vantelle_hero.png'),
      getAssetUrl('vip_background.png')
    ],
    desc: 'An architectural double-breasted overcoat tailored from heavy virgin wool and cashmere. Designed as a protective, elegant cocoon that elevates any ensemble.',
    material: '85% Virgin Wool, 15% Cashmere, Cupro Silk Lining',
    origin: 'Tailored in London, UK',
    details: 'Horn button fastenings, deep front welt pockets, tailored notch lapel, and generous back walking vent.',
    care: 'Professional dry clean only. Steam gently to refresh fibers.'
  },
  {
    id: 'f5',
    category: 'Fashion',
    name: 'Silk Slip Dress',
    tagline: 'Bias-Cut Fluid Geometry',
    price: 420,
    currency: '€',
    image: getAssetUrl('vantelle_hero.png'),
    gallery: [
      getAssetUrl('vantelle_hero.png'),
      getAssetUrl('collection_jewellery.png')
    ],
    desc: 'Cut on the bias to skim the silhouette naturally without restriction. Features delicate spaghetti cross-straps and a gently scooped back.',
    material: '100% Sandwashed Silk Charmeuse',
    origin: 'Tailored in Milan, Italy',
    details: 'Hand-rolled baby hems. Fully lined bodice. Ankle-grazing length with subtle movement.',
    care: 'Dry clean recommended to preserve original drape and matte luster.'
  },

  // ---------------------------------------------------------------------------
  // 3. HOME DÉCOR
  // ---------------------------------------------------------------------------
  {
    id: 'h1',
    category: 'Home Décor',
    name: 'Travertine Bowl',
    tagline: 'Hand-Carved Tuscan Stone',
    price: 180,
    currency: '€',
    image: getAssetUrl('hovofaber_collab.png'),
    gallery: [
      getAssetUrl('hovofaber_collab.png'),
      getAssetUrl('vip_background.png')
    ],
    desc: 'Carved from a single block of natural Tuscan travertine stone. The unpolished, textured exterior highlights authentic earth cavities and cream tonal striations.',
    material: 'Natural Tuscan Travertine Stone',
    origin: 'Carved in Carrara, Italy',
    details: 'Diameter: 25cm, Height: 7cm. Weight: approximately 2.8kg. Protective felt pads on underside.',
    care: 'Wipe clean with a soft damp cloth. Avoid harsh chemical cleaners or acidic substances.'
  },
  {
    id: 'h2',
    category: 'Home Décor',
    name: 'Handcrafted Ceramic Vase',
    tagline: 'Wheel-Thrown Sandy Stoneware',
    price: 150,
    currency: '€',
    image: getAssetUrl('hovofaber_collab.png'),
    gallery: [
      getAssetUrl('hovofaber_collab.png'),
      getAssetUrl('collection_jewellery.png')
    ],
    desc: 'An editorial stoneware vessel thrown on a traditional kick-wheel. Features a raw sand-textured exterior contrasted with a smooth, waterproof satin white interior glaze.',
    material: 'Local Stoneware Clay & Mineral Glaze',
    origin: 'Hand-thrown in Cornwall, UK',
    details: 'Height: 28cm, Width: 14cm. Suitable for water and fresh florals or standing as a sculptural art piece.',
    care: 'Hand wash with mild dish soap. Allow to air dry completely.'
  },
  {
    id: 'h3',
    category: 'Home Décor',
    name: 'Linen Throw Blanket',
    tagline: 'Heavy Belgian Flax Weave',
    price: 210,
    currency: '€',
    image: getAssetUrl('hovofaber_collab.png'),
    gallery: [
      getAssetUrl('hovofaber_collab.png'),
      getAssetUrl('vantelle_hero.png')
    ],
    desc: 'Generously scaled throw blanket woven from thick, long-staple flax yarns. Finished with tactile eyelash-fringed edges, introducing warmth and organic depth to living spaces.',
    material: '100% Belgian Flax Linen',
    origin: 'Woven in Ghent, Belgium',
    details: 'Dimensions: 140cm x 200cm. Pre-washed for maximum softness and shrinkage resistance.',
    care: 'Machine wash on gentle cycle at 30°C. Tumble dry low to preserve natural crumpled texture.'
  },
  {
    id: 'h4',
    category: 'Home Décor',
    name: 'Scented Candle — Oud & Amber',
    tagline: 'Artisan Ceramic Vessel & Soy Wax',
    price: 95,
    currency: '€',
    image: getAssetUrl('hovofaber_collab.png'),
    gallery: [
      getAssetUrl('hovofaber_collab.png'),
      getAssetUrl('vip_background.png')
    ],
    desc: 'An olfactory journey featuring top notes of smoked black pepper, a heart of rare agarwood (oud), and a lingering base of warm amber and cedar. Hand-poured into a reusable stoneware cup.',
    material: '100% Natural Soy Wax, Cotton Wick & Ceramic Cup',
    origin: 'Poured in Grasse, France',
    details: 'Burn time: ~60 hours. Net weight: 300g. Once finished, vessel repurposes as an espresso cup.',
    care: 'Trim wick to 5mm before every burn. Never leave a burning candle unattended.'
  },
  {
    id: 'h5',
    category: 'Home Décor',
    name: 'Brushed Brass Table Lamp',
    tagline: 'Indirect Warm Ambient Glow',
    price: 450,
    currency: '€',
    image: getAssetUrl('hovofaber_collab.png'),
    gallery: [
      getAssetUrl('hovofaber_collab.png'),
      getAssetUrl('vip_background.png')
    ],
    desc: 'A minimalist architectural table lamp crafted from solid spun brass. The softly curved dome reflects warm, non-glare indirect illumination across tabletops.',
    material: 'Solid Brushed Brass with Protective Matte Lacquer',
    origin: 'Handcrafted in Birmingham, UK',
    details: 'Height: 34cm, Dome Diameter: 26cm. Includes woven textile cord with integrated rotary dimmer.',
    care: 'Dust with a dry microfibre cloth. Do not apply abrasive brass polishes.'
  }
];

// Helper functions for easy querying
export const getProductById = (id) => {
  return PRODUCT_DATABASE.find((p) => p.id === id);
};

export const getProductsByCategory = (category) => {
  if (!category || category === 'All') return PRODUCT_DATABASE;
  return PRODUCT_DATABASE.filter((p) => p.category.toLowerCase() === category.toLowerCase());
};

export const getRelatedProducts = (currentProduct, limit = 3) => {
  return PRODUCT_DATABASE
    .filter((p) => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, limit);
};
