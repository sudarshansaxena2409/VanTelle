import React, { useState } from 'react';
import { Filter, SlidersHorizontal, Heart, Plus, Minus, X, Check, Star } from 'lucide-react';

const PRODUCT_DATABASE = [
  // Jewellery
  {
    id: 'j1',
    category: 'Jewellery',
    name: 'Aurum Pendant',
    price: 220,
    img: import.meta.env.BASE_URL + 'assets/collection_jewellery.png',
    desc: 'A fluid expression of elegance. The Aurum Pendant symbolizes inner strength and effortless beauty, suspended on a delicate 18k gold chain.',
    material: '18k Gold Plated',
    origin: 'Handcrafted in Florence, Italy',
    details: 'Each pendant is individually cast in solid brass and layered with a thick coating of 18k champagne gold. Designed to rest beautifully on the collarbone.',
    care: 'Avoid contact with moisture, perfumes, and keep in its protective suede bag.'
  },
  {
    id: 'j2',
    category: 'Jewellery',
    name: 'Luna Hoops',
    price: 180,
    img: import.meta.env.BASE_URL + 'assets/collection_jewellery.png',
    desc: 'Inspired by the crescent moon, these hoops present a textured, organic surface that captures light dynamically.',
    material: '18k Gold Plated',
    origin: 'Handcrafted in Vicenza, Italy',
    details: 'Features a secure click-closure. Extremely lightweight despite their sculptural presence, making them suitable for all-day comfort.',
    care: 'Gently polish with a dry microfibre cloth after each wear.'
  },
  {
    id: 'j3',
    category: 'Jewellery',
    name: 'Luxe Chain Bracelet',
    price: 260,
    img: import.meta.env.BASE_URL + 'assets/collection_jewellery.png',
    desc: 'An assembly of custom-cast fluid links, representing connection and fluid luxury. The perfect layering companion.',
    material: '18k Gold Plated & Sterling Silver',
    origin: 'Handcrafted in Milan, Italy',
    details: 'Features an adjustable clasp with our signature VanTelle laser-engraved tag.',
    care: 'Clean with a professional silver cloth to preserve the mixed-metal shine.'
  },
  {
    id: 'j4',
    category: 'Jewellery',
    name: 'Sofia Ring',
    price: 160,
    img: import.meta.env.BASE_URL + 'assets/collection_jewellery.png',
    desc: 'A chunky, hand-sculpted organic band embedded with a single cushion-cut white quartz crystal.',
    material: '18k Gold Plated with Quartz',
    origin: 'Handcrafted in Tuscany, Italy',
    details: 'Each quartz stone is ethically sourced and unique in its natural internal inclusions, making every single Sofia ring completely distinct.',
    care: 'Do not submerge in water or wear during high-impact tasks.'
  },
  {
    id: 'j5',
    category: 'Jewellery',
    name: 'Perla Drops',
    price: 190,
    img: import.meta.env.BASE_URL + 'assets/collection_jewellery.png',
    desc: 'Generous baroque pearls hanging from sculptural organic gold studs. An update to the classic drop earring.',
    material: 'Freshwater Baroque Pearls, 18k Gold',
    origin: 'Handcrafted in Amalfi, Italy',
    details: 'Baroque pearls are selected by hand for their unique, uneven shapes and brilliant luster.',
    care: 'Keep separate from other metals to prevent scratching the pearl surface.'
  },
  {
    id: 'j6',
    category: 'Jewellery',
    name: 'Celestia Necklace',
    price: 240,
    img: import.meta.env.BASE_URL + 'assets/collection_jewellery.png',
    desc: 'Delicate constellation links meeting a central brilliant-cut white sapphire.',
    material: '18k Gold, Sapphire',
    origin: 'Handcrafted in Milan, Italy',
    details: 'Length: 42cm with 3cm adjuster. Sapphire is bezel-set to lay flat against the skin.',
    care: 'Professional dry jewelry cleaning recommended annually.'
  },

  // Clothing / Fashion
  {
    id: 'f1',
    category: 'Fashion',
    name: 'Linen Wrap Dress',
    price: 320,
    img: import.meta.env.BASE_URL + 'assets/vantelle_hero.png',
    desc: 'Crafted from 100% premium Italian linen. A relaxed silhouette with refined tailoring details and an elegant waist tie.',
    material: '100% Organic Linen',
    origin: 'Tailored in Como, Italy',
    details: 'Features side seam pockets, a beautiful structural lapel, and a double-faced linen belt. Breathable, luxury structure that softens with age.',
    care: 'Dry clean only. Cool iron on reverse side.'
  },
  {
    id: 'f2',
    category: 'Fashion',
    name: 'Silk Oversized Shirt',
    price: 290,
    img: import.meta.env.BASE_URL + 'assets/vantelle_hero.png',
    desc: 'Liquid silk georgette that drapes beautifully. Cut for a relaxed, modern fit with extra wide French cuffs.',
    material: '100% Mulberry Silk',
    origin: 'Tailored in Lyon, France',
    details: 'Mother-of-pearl buttons, hidden button placket, drop-shoulder styling, and a clean back box pleat.',
    care: 'Hand wash cold with silk detergent, lay flat to dry in shade.'
  },
  {
    id: 'f3',
    category: 'Fashion',
    name: 'Cashmere Knit Top',
    price: 380,
    img: import.meta.env.BASE_URL + 'assets/vantelle_hero.png',
    desc: 'Sumptuously soft, fine-gauge cashmere knit with a mock turtleneck. Designed as a luxury layer for changing seasons.',
    material: '100% Mongolian Cashmere',
    origin: 'Knit in Hawick, Scotland',
    details: 'Ribbed collar, cuffs, and hem. Sourced sustainably from ethical herder cooperatives.',
    care: 'Hand wash cold or dry clean. Store folded, never hanging.'
  },
  {
    id: 'f4',
    category: 'Fashion',
    name: 'Wool Blend Coat',
    price: 650,
    img: import.meta.env.BASE_URL + 'assets/vantelle_hero.png',
    desc: 'An oversized double-breasted coat made from structural virgin wool and cashmere. The definition of timeless luxury.',
    material: '85% Virgin Wool, 15% Cashmere',
    origin: 'Tailored in London, UK',
    details: 'Fully lined with custom silk satin. Features structured shoulders, back vent, and deep pockets.',
    care: 'Professional dry clean only.'
  },
  {
    id: 'f5',
    category: 'Fashion',
    name: 'Silk Slip Dress',
    price: 420,
    img: import.meta.env.BASE_URL + 'assets/vantelle_hero.png',
    desc: 'Cut on the bias for a fluid, body-skimming fit. An elegant low-back design with delicate cross-straps.',
    material: '100% Sandwashed Silk',
    origin: 'Tailored in Milan, Italy',
    details: 'Finished with fine hand-rolled hems. Beautiful matte finish that reflects light subtly.',
    care: 'Dry clean recommended.'
  },

  // Home Décor
  {
    id: 'h1',
    category: 'Home Décor',
    name: 'Travertine Bowl',
    price: 180,
    img: import.meta.env.BASE_URL + 'assets/hovofaber_collab.png',
    desc: 'A solid block of Tuscan travertine, hand-carved to highlight the raw, porous beauty and organic cream tones of natural stone.',
    material: 'Natural Tuscan Travertine',
    origin: 'Carved in Carrara, Italy',
    details: 'Each bowl features distinct natural cavities, veins, and quartz crystallization. Matte, unpolished exterior.',
    care: 'Wipe with a damp cloth. Do not use acidic cleaners.'
  },
  {
    id: 'h2',
    category: 'Home Décor',
    name: 'Handcrafted Ceramic Vase',
    price: 150,
    img: import.meta.env.BASE_URL + 'assets/hovofaber_collab.png',
    desc: 'An editorial ceramic vessel with a raw sandy texture, finished with a subtle satin white interior glaze.',
    material: 'Local Stoneware Clay',
    origin: 'Hand-thrown in Cornwall, UK',
    details: 'Thrown on a traditional foot-powered kick wheel. Perfect for holding dried botanicals or standing as a sculptural piece.',
    care: 'Hand wash only.'
  },
  {
    id: 'h3',
    category: 'Home Décor',
    name: 'Linen Throw Blanket',
    price: 210,
    img: import.meta.env.BASE_URL + 'assets/hovofaber_collab.png',
    desc: 'Generously sized throw woven from thick, textured flax fibers. Adds organic depth and tactile luxury to any sofa or bed.',
    material: '100% Belgian Flax Linen',
    origin: 'Woven in Ghent, Belgium',
    details: 'Features raw fringed edges. Pre-washed for a soft, tactile touch.',
    care: 'Machine wash gentle, tumble dry low for organic texture.'
  },
  {
    id: 'h4',
    category: 'Home Décor',
    name: 'Scented Candle - Oud',
    price: 95,
    img: import.meta.env.BASE_URL + 'assets/hovofaber_collab.png',
    desc: 'An intoxicating blend of rare agarwood (oud), cedar, black pepper, and warm amber. Poured in a custom ceramic cup.',
    material: 'Soy Wax, Hand-thrown Ceramic Vessel',
    origin: 'Poured in Grasse, France',
    details: 'Burn time: approximately 60 hours. Once finished, the stoneware vessel functions beautifully as a luxury espresso cup.',
    care: 'Trim wick to 5mm before each lighting.'
  },
  {
    id: 'h5',
    category: 'Home Décor',
    name: 'Brass Table Lamp',
    price: 450,
    img: import.meta.env.BASE_URL + 'assets/hovofaber_collab.png',
    desc: 'A minimal table lamp constructed from solid brushed brass, reflecting a warm, indirect glow from its curved dome shade.',
    material: 'Solid Brushed Brass',
    origin: 'Handcrafted in Birmingham, UK',
    details: 'Features a textile cord and an inline dimmer switch. Designed to patina beautifully over time.',
    care: 'Dust with a soft microfiber cloth.'
  }
];

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartQuantity, setCartQuantity] = useState(1);
  const [addedToBag, setAddedToBag] = useState(false);
  const [sortOrder, setSortOrder] = useState('newest');

  const categories = ['All', 'Jewellery', 'Fashion', 'Home Décor'];

  const filteredProducts = PRODUCT_DATABASE
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortOrder === 'price-low') return a.price - b.price;
      if (sortOrder === 'price-high') return b.price - a.price;
      return 0; // Default order
    });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCartQuantity(1);
    setAddedToBag(false);
  };

  const handleAddToBag = () => {
    setAddedToBag(true);
    setTimeout(() => {
      setAddedToBag(false);
    }, 2000);
  };

  // Get similar products for recommendation
  const getRecommendations = (currentProduct) => {
    return PRODUCT_DATABASE
      .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
      .slice(0, 3);
  };

  return (
    <div 
      className="fade-in" 
      style={{ 
        paddingTop: 'calc(var(--header-height) + 2rem)',
        position: selectedProduct ? 'relative' : 'static',
        zIndex: selectedProduct ? 1200 : 'auto'
      }}
    >
      
      {/* HEADER STATEMENT */}
      <section style={{ padding: '4rem 0 2rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="editorial-subtitle">The Catalogue</span>
          <h1 className="editorial-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
            Curated Portfolios
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
            Explore limited runs of premium lifestyle designs. Each piece is hand-crafted and traceable back to the individual workshop.
          </p>
        </div>
      </section>

      {/* FILTER & SORT CONTROLS */}
      <section style={{ borderBottom: '1px solid rgba(26,26,26,0.06)', paddingBottom: '1.5rem', marginBottom: '3rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: selectedCategory === cat ? '500' : '300',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  padding: '0.5rem 0',
                  borderBottom: selectedCategory === cat ? '1px solid var(--color-accent-gold)' : '1px solid transparent',
                  cursor: 'pointer',
                  color: selectedCategory === cat ? 'var(--color-accent-gold)' : 'var(--color-text-dark)',
                  transition: 'var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <SlidersHorizontal size={14} />
              <span>Sort By</span>
            </div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
                padding: '0.4rem 1rem',
                border: '1px solid var(--color-bg-greige)',
                borderRadius: '4px',
                backgroundColor: 'var(--color-bg-light)',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="newest">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>
              {filteredProducts.length} Products
            </span>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          {filteredProducts.length > 0 ? (
            <div className="grid-4">
              {filteredProducts.map(product => (
                <div 
                  key={product.id} 
                  className="luxury-card" 
                  onClick={() => handleProductClick(product)}
                >
                  <div className="luxury-card-img-wrapper">
                    <img src={product.img} alt={product.name} className="luxury-card-img" />
                    <div className="luxury-card-overlay" />
                    {/* Add to wishlist icon shortcut */}
                    <button 
                      style={{ 
                        position: 'absolute', 
                        top: '1rem', 
                        right: '1rem', 
                        backgroundColor: 'rgba(247, 245, 242, 0.9)', 
                        padding: '0.5rem', 
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        zIndex: 3
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`${product.name} added to your wishlist.`);
                      }}
                    >
                      <Heart size={14} />
                    </button>
                  </div>
                  <div className="luxury-card-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <span className="luxury-card-subtitle">{product.category}</span>
                      <h3 className="luxury-card-title" style={{ fontSize: '1.2rem', marginTop: '0.2rem' }}>{product.name}</h3>
                    </div>
                    <span className="luxury-card-price" style={{ fontWeight: '500', fontSize: '0.95rem' }}>€ {product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '6rem 0' }}>
              <p>No products found matching the criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* INTERACTIVE PRODUCT DETAIL DRAWER / SLIDER MODAL */}
      {selectedProduct && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(26, 26, 26, 0.4)',
            backdropFilter: 'blur(5px)',
            zIndex: 1100,
            display: 'flex',
            justifyContent: 'flex-end',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setSelectedProduct(null)}
        >
          {/* Drawer content box */}
          <div 
            style={{
              width: '100%',
              maxWidth: '850px',
              height: '100%',
              backgroundColor: 'var(--color-bg-light)',
              overflowY: 'auto',
              padding: '4rem 3rem',
              position: 'relative',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              animation: 'slideLeft 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProduct(null);
              }}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                zIndex: 100
              }}
            >
              <X size={22} strokeWidth={1.5} />
            </button>

            <div>
              {/* Product Visual Details */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1.2fr 1fr', 
                  gap: '3rem', 
                  marginBottom: '4rem' 
                }}
                className="drawer-split"
              >
                {/* Image Showcase */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ aspectRatio: '3/4', overflow: 'hidden', backgroundColor: 'var(--color-bg-warm)', borderRadius: '4px' }}>
                    <img 
                      src={selectedProduct.img} 
                      alt={selectedProduct.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  {/* Thumbnails grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                    <div style={{ aspectRatio: '1/1', border: '1px solid var(--color-accent-gold)', borderRadius: '2px', overflow: 'hidden', cursor: 'pointer' }}>
                      <img src={selectedProduct.img} alt="Thumb 1" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                    </div>
                    <div style={{ aspectRatio: '1/1', backgroundColor: 'var(--color-bg-warm)', borderRadius: '2px', overflow: 'hidden', cursor: 'pointer', display: 'flex', alignItems: 'center', justify: 'center' }}>
                      <img src={selectedProduct.img} alt="Thumb 2" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', opacity: 0.5 }} />
                    </div>
                    <div style={{ aspectRatio: '1/1', backgroundColor: 'var(--color-bg-warm)', borderRadius: '2px', overflow: 'hidden', cursor: 'pointer', display: 'flex', alignItems: 'center', justify: 'center' }}>
                      <img src={selectedProduct.img} alt="Thumb 3" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(30%)', opacity: 0.5 }} />
                    </div>
                  </div>
                </div>

                {/* Narrative Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent-gold)' }}>
                      {selectedProduct.category}
                    </span>
                    <h2 style={{ fontSize: '2.4rem', marginTop: '0.25rem', marginBottom: '0.5rem', lineHeight: '1.2' }}>
                      {selectedProduct.name}
                    </h2>
                    <span style={{ fontSize: '1.4rem', fontWeight: '400', color: 'var(--color-text-dark)' }}>
                      € {selectedProduct.price}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                    {selectedProduct.desc}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(26,26,26,0.06)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                    <div><strong>Materials:</strong> <span style={{ color: 'var(--color-text-muted)', fontWeight: '300' }}>{selectedProduct.material}</span></div>
                    <div><strong>Provenance:</strong> <span style={{ color: 'var(--color-text-muted)', fontWeight: '300' }}>{selectedProduct.origin}</span></div>
                    <div><strong>Crafting Details:</strong> <span style={{ color: 'var(--color-text-muted)', fontWeight: '300' }}>{selectedProduct.details}</span></div>
                  </div>

                  {/* Quantity selector and checkout buttons */}
                  <div style={{ borderTop: '1px solid rgba(26,26,26,0.06)', paddingTop: '1.5rem', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
                      <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>Quantity</span>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-bg-greige)', borderRadius: '2px' }}>
                        <button 
                          onClick={() => cartQuantity > 1 && setCartQuantity(cartQuantity - 1)}
                          style={{ padding: '0.5rem 0.75rem', cursor: 'pointer' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ padding: '0 1rem', fontSize: '0.85rem', fontWeight: '500' }}>{cartQuantity}</span>
                        <button 
                          onClick={() => setCartQuantity(cartQuantity + 1)}
                          style={{ padding: '0.5rem 0.75rem', cursor: 'pointer' }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button 
                        onClick={handleAddToBag}
                        className="btn-primary"
                        style={{ flex: 1, padding: '1rem' }}
                      >
                        {addedToBag ? (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}><Check size={14} /> Added to Bag</span>
                        ) : 'Add to Bag'}
                      </button>
                      <button 
                        style={{ 
                          padding: '1rem', 
                          border: '1px solid var(--color-bg-greige)', 
                          borderRadius: '2px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                        onClick={() => alert(`${selectedProduct.name} added to your wishlist.`)}
                      >
                        <Heart size={16} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Recommendations */}
              <div style={{ borderTop: '1px solid rgba(26,26,26,0.06)', paddingTop: '3rem', marginTop: '3rem' }}>
                <h4 style={{ 
                  fontSize: '0.8rem', 
                  fontFamily: 'var(--font-sans)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.15em', 
                  color: 'var(--color-accent-gold)',
                  marginBottom: '2rem'
                }}>
                  You May Also Like
                </h4>
                <div className="grid-3">
                  {getRecommendations(selectedProduct).map(rec => (
                    <div 
                      key={rec.id} 
                      className="luxury-card"
                      onClick={() => handleProductClick(rec)}
                    >
                      <div className="luxury-card-img-wrapper" style={{ aspectRatio: '4/5' }}>
                        <img src={rec.img} alt={rec.name} className="luxury-card-img" />
                      </div>
                      <div style={{ padding: '1rem 0 0 0', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                        <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem' }}>{rec.name}</h5>
                        <span>€ {rec.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .drawer-split {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          div[style*="width: 100%"][style*="maxWidth: 850px"] {
            padding: 3rem 1.5rem !important;
          }
        }
      `}</style>

    </div>
  );
}
