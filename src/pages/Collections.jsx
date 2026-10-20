import React, { useState } from 'react';
import { Heart, X, Sparkles, MapPin, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { PRODUCT_DATABASE, PRODUCT_CATEGORIES, getRelatedProducts } from '../data/products';

export default function Collections({ setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = PRODUCT_CATEGORIES;

  const filteredProducts = PRODUCT_DATABASE
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setActiveImageIndex(0);
  };

  const handleInquire = (product) => {
    // Navigate to Contact page for luxury inquiry
    setSelectedProduct(null);
    setActivePage('contact');
  };

  const recommendations = selectedProduct ? getRelatedProducts(selectedProduct, 3) : [];

  return (
    <div 
      className="fade-in" 
      style={{ 
        paddingTop: 'calc(var(--header-height) + 2rem)',
        position: selectedProduct ? 'relative' : 'static',
        zIndex: selectedProduct ? 1200 : 'auto'
      }}
    >
      
      {/* 1. EDITORIAL HEADER STATEMENT (Document Section 3) */}
      <section style={{ padding: '4rem 0 2rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="editorial-subtitle">The Curated Catalogue</span>
          <h1 className="editorial-title" style={{ fontSize: '3.4rem', marginBottom: '1.25rem' }}>
            Jewellery, Fashion & Home Décor
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            A unified expression of individuality. Each creation is developed in collaboration with independent artisans, honoring generational techniques and tactile luxury.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY SELECTION TABS */}
      <section style={{ borderBottom: '1px solid rgba(26,26,26,0.06)', paddingBottom: '1.5rem', marginBottom: '3.5rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                padding: '0.5rem 0',
                cursor: 'pointer',
                fontWeight: selectedCategory === cat ? '600' : '400',
                color: selectedCategory === cat ? 'var(--color-text-dark)' : 'var(--color-text-muted)',
                borderBottom: selectedCategory === cat ? '2px solid var(--color-accent-gold)' : '2px solid transparent',
                transition: 'var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. PRODUCT GRID — CLEAN & SPACIOUS WITH MINIMAL CARD INFO (Document Section 3) */}
      <section style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="grid-3" style={{ rowGap: '4.5rem', columnGap: '2.5rem' }}>
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="luxury-card"
                onClick={() => handleProductClick(product)}
                style={{ cursor: 'pointer' }}
              >
                {/* Large 3:4 Portrait Image */}
                <div 
                  className="luxury-card-img-wrapper" 
                  style={{ 
                    aspectRatio: '3/4', 
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-bg-warm)',
                    overflow: 'hidden'
                  }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="luxury-card-img" 
                    style={{ transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' }}
                  />
                  <div className="luxury-card-overlay" />
                  
                  {/* Subtle category tag badge on hover */}
                  <span 
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      fontSize: '0.65rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(4px)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '2px',
                      color: 'var(--color-text-dark)',
                      fontWeight: '500'
                    }}
                  >
                    {product.category}
                  </span>
                </div>

                {/* Minimal Card Information per Luxury Guidelines */}
                <div className="luxury-card-content" style={{ padding: '1.25rem 0 0 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span className="luxury-card-subtitle" style={{ fontSize: '0.7rem', color: 'var(--color-accent-gold)' }}>
                      {product.tagline}
                    </span>
                    <span style={{ fontSize: '0.95rem', fontWeight: '400', fontFamily: 'var(--font-serif)', color: 'var(--color-text-dark)' }}>
                      {product.currency}{product.price}
                    </span>
                  </div>
                  <h3 className="luxury-card-title" style={{ fontSize: '1.45rem', marginTop: '0.35rem', fontWeight: '400' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                    {product.origin}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DETAILED PRODUCT PAGE DRAWER (Document Section 3 & RI5 Reference) */}
      {selectedProduct && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(20, 20, 20, 0.55)',
            backdropFilter: 'blur(8px)',
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'flex-end',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setSelectedProduct(null)}
        >
          {/* Drawer Inner Container */}
          <div 
            style={{
              width: '100%',
              maxWidth: '850px',
              height: '100%',
              backgroundColor: 'var(--color-bg-light)',
              overflowY: 'auto',
              padding: '4rem 4rem',
              position: 'relative',
              boxShadow: '-10px 0 40px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              animation: 'slideLeft 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Icon */}
            <button 
              onClick={() => setSelectedProduct(null)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                zIndex: 10,
                color: 'var(--color-text-dark)'
              }}
              title="Close Drawer"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            {/* Product Gallery & Details Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              {/* Category, Title & Price */}
              <div>
                <span className="editorial-subtitle" style={{ color: 'var(--color-accent-gold)' }}>
                  {selectedProduct.category} — {selectedProduct.tagline}
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <h2 style={{ fontSize: '2.8rem', fontFamily: 'var(--font-serif)', fontWeight: '400', lineHeight: '1.1' }}>
                    {selectedProduct.name}
                  </h2>
                  <span style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-dark)', fontWeight: '400' }}>
                    {selectedProduct.currency}{selectedProduct.price}
                  </span>
                </div>
              </div>

              {/* Large Product Imagery + Multi-Image Thumbnail Gallery (Document Section 3: close-ups highlighting textures) */}
              <div>
                <div 
                  style={{ 
                    aspectRatio: '4/3', 
                    borderRadius: '4px', 
                    overflow: 'hidden', 
                    backgroundColor: 'var(--color-bg-warm)',
                    marginBottom: '1rem'
                  }}
                >
                  <img 
                    src={selectedProduct.gallery && selectedProduct.gallery[activeImageIndex] 
                      ? selectedProduct.gallery[activeImageIndex] 
                      : selectedProduct.image} 
                    alt={selectedProduct.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>

                {/* Close-up Texture Thumbnails */}
                {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {selectedProduct.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        style={{
                          width: '70px',
                          height: '70px',
                          borderRadius: '3px',
                          overflow: 'hidden',
                          border: activeImageIndex === idx ? '2px solid var(--color-accent-gold)' : '1px solid var(--color-bg-greige)',
                          cursor: 'pointer',
                          padding: 0,
                          opacity: activeImageIndex === idx ? 1 : 0.65,
                          transition: 'var(--transition-fast)'
                        }}
                      >
                        <img src={img} alt="Texture preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Editorial Description */}
              <div>
                <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.75rem', fontWeight: '600' }}>
                  The Narrative
                </h4>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-dark)', fontWeight: '300' }}>
                  {selectedProduct.desc}
                </p>
              </div>

              {/* Specifications & Craftsmanship Badges */}
              <div 
                style={{ 
                  backgroundColor: 'var(--color-bg-warm)', 
                  padding: '2rem', 
                  borderRadius: '4px',
                  border: '1px solid var(--color-bg-greige)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', display: 'block', marginBottom: '0.25rem' }}>
                    Artisan Origin
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', fontSize: '0.95rem' }}>
                    <MapPin size={16} />
                    <span>{selectedProduct.origin}</span>
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', display: 'block', marginBottom: '0.25rem' }}>
                    Materiality
                  </span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>{selectedProduct.material}</p>
                </div>

                <div>
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', display: 'block', marginBottom: '0.25rem' }}>
                    Specifications & Finishing
                  </span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{selectedProduct.details}</p>
                </div>

                <div>
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', display: 'block', marginBottom: '0.25rem' }}>
                    Care & Longevity
                  </span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{selectedProduct.care}</p>
                </div>
              </div>

              {/* Inquire Action (Editorial luxury concierge inquiry, no checkout) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1rem' }}>
                <button 
                  onClick={() => handleInquire(selectedProduct)}
                  className="btn-primary" 
                  style={{ width: '100%', padding: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
                >
                  <MessageSquare size={18} />
                  <span>Inquire with VanTelle Concierge</span>
                </button>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                  Each piece is handcrafted in limited runs. Inquiries receive personalized advice within 24 hours.
                </p>
              </div>

              {/* Related Curated Pieces */}
              {recommendations.length > 0 && (
                <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(26,26,26,0.06)', paddingTop: '2.5rem' }}>
                  <span className="editorial-subtitle" style={{ marginBottom: '1.5rem', display: 'block' }}>Complementary Pieces</span>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                    {recommendations.map((rec) => (
                      <div 
                        key={rec.id} 
                        onClick={() => handleProductClick(rec)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div style={{ aspectRatio: '3/4', borderRadius: '3px', overflow: 'hidden', backgroundColor: 'var(--color-bg-warm)', marginBottom: '0.5rem' }}>
                          <img src={rec.image} alt={rec.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h5 style={{ fontSize: '0.9rem', fontWeight: '400' }}>{rec.name}</h5>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-serif)' }}>{rec.currency}{rec.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @media (max-width: 900px) {
          div[style*="width: 100%"][style*="maxWidth: 850px"] {
            padding: 3rem 1.5rem !important;
          }
        }
      `}</style>

    </div>
  );
}
