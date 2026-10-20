import React from 'react';
import { Compass, Eye, Shield, Users, Sparkles, Feather } from 'lucide-react';

export default function About({ setActivePage }) {
  // Five Core Themes directly addressing Document Section 4
  const brandPillars = [
    { 
      title: "Individuality & Personal Expression", 
      desc: "Luxury is not uniformity. We reject trend cycles in favour of pieces that resonate intimately with the wearer, allowing personal identity to guide every choice." 
    },
    { 
      title: "Thoughtful Design & Timeless Aesthetics", 
      desc: "Quiet silhouettes designed to endure. We focus on subtle proportion, architectural lines, and neutral palettes that remain relevant across decades." 
    },
    { 
      title: "Craftsmanship & Artisan Heritage", 
      desc: "Collaborating with independent workshops in Italy, France, and the UK. Honoring generational methods of stone carving, hand-weaving, and wax casting." 
    },
    { 
      title: "Fashion, Jewellery & Home Décor Harmony", 
      desc: "Living seamlessly across mediums. We view what we wear, what we touch, and the spaces we dwell in as an interconnected, harmonious daily ritual." 
    },
    { 
      title: "A Modern Interpretation of Luxury", 
      desc: "Moving beyond excess and conspicuous logos. True modern luxury is intentional, transparent, emotionally resonant, and deeply personal." 
    }
  ];

  return (
    <div className="fade-in" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
      
      {/* 1. BRAND STORY HERO (Editorial Narrative) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div>
              <span className="editorial-subtitle">The Philosophy</span>
              <h1 className="editorial-title" style={{ fontSize: '3.6rem', marginBottom: '1.75rem', lineHeight: '1.1' }}>
                A Reflection of Individuality.
              </h1>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text-dark)', fontWeight: '300' }}>
                VanTelle was conceived around a fundamental belief: luxury is not simply what we own, but how we choose to express ourselves.
              </p>
              <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', color: 'var(--color-text-muted)', fontSize: '1rem' }}>
                In an era dominated by rapid mass production and standardized silhouettes, VanTelle creates a thoughtful sanctuary. We explore personal expression through carefully curated jewellery, fashion, and home décor — spaces where craftsmanship, creativity, and individuality come together.
              </p>
              <button onClick={() => setActivePage('collections')} className="btn-primary">
                Explore the Collections
              </button>
            </div>
            
            {/* Editorial Photography Space */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{ 
                  aspectRatio: '3/4', 
                  borderRadius: '4px', 
                  overflow: 'hidden', 
                  backgroundColor: 'var(--color-bg-warm)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
                }}
              >
                <img 
                  src={import.meta.env.BASE_URL + "assets/vantelle_hero.png"} 
                  alt="VanTelle Studio Editorial" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-2rem',
                  left: '-2rem',
                  backgroundColor: 'var(--color-bg-dark)',
                  color: 'var(--color-text-light)',
                  padding: '2rem 2.5rem',
                  borderRadius: '4px',
                  maxWidth: '260px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)'
                }}
                className="hide-mobile"
              >
                <span style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent-gold)', display: 'block', marginBottom: '0.25rem' }}>
                  Slow Luxury
                </span>
                <p style={{ fontSize: '0.75rem', color: '#A6A29E', lineHeight: '1.4', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Independent Artisan Heritage & Thoughtful Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE RELATIONSHIP BETWEEN DISCIPLINES */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '4.5rem' }}>
            <span className="editorial-subtitle">Interconnected Living</span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '300', marginBottom: '1.5rem' }}>
              Fashion, Jewellery & Home Décor
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
              We do not treat clothing, objects, and jewellery as disparate categories. The tactile touch of Belgian linen over the shoulder parallels the unpolished weight of carved Tuscan travertine on a coffee table, and the quiet glimmer of recycled 18k gold at the collarbone. Together, they articulate a cohesive way of living.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '3rem' }}>
            <div style={{ backgroundColor: 'var(--color-bg-light)', padding: '3.5rem', borderRadius: '4px', border: '1px solid var(--color-bg-greige)' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', fontWeight: '600', display: 'block', marginBottom: '1rem' }}>
                Artisan Heritage
              </span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Generational Workshops</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
                Our partners are master ceramicists in Cornwall, stone sculptors in Carrara, and silk weavers in Como. They preserve heritage techniques that cannot be rushed, producing small editions where the hand of the maker remains palpable.
              </p>
            </div>
            
            <div style={{ backgroundColor: 'var(--color-bg-light)', padding: '3.5rem', borderRadius: '4px', border: '1px solid var(--color-bg-greige)' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', fontWeight: '600', display: 'block', marginBottom: '1rem' }}>
                Emotional Connection
              </span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Intelligent Personalisation</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
                By pairing intuitive digital curation with handcrafted objects, we align each piece with your personal lifestyle and aesthetic sensibility. Objects chosen with intention become heirlooms rather than seasonal acquisitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE MAIN THEMES (Document Section 4) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span className="editorial-subtitle">Guiding Principles</span>
            <h2 style={{ fontSize: '2.6rem', fontWeight: '300' }}>The Themes of VanTelle</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {brandPillars.map((pillar, i) => (
              <div 
                key={i} 
                style={{
                  border: '1px solid var(--color-bg-greige)',
                  padding: '2.5rem 1.75rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-bg-light)',
                  transition: 'var(--transition-smooth)'
                }}
                className="pillar-card"
              >
                <div style={{ color: 'var(--color-accent-gold)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', letterSpacing: '0.1em' }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '400', lineHeight: '1.3' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        .pillar-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-accent-gold);
          box-shadow: 0 15px 30px rgba(0,0,0,0.03);
        }
        @media (max-width: 768px) {
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>

    </div>
  );
}
