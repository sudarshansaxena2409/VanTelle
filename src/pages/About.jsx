import React from 'react';
import { Compass, Eye, Shield, Users } from 'lucide-react';

export default function About({ setActivePage }) {
  const values = [
    { icon: <Compass size={24} />, title: "Crafted Authenticity", desc: "We source only pure, natural raw materials, working with generational workshops that value heritage over volume." },
    { icon: <Eye size={24} />, title: "Emotional Resonance", desc: "Every design is curated to feel deeply intimate, creating a connection that makes objects feel personal." },
    { icon: <Users size={24} />, title: "Artisan Co-existence", desc: "We pay fair, sustainable wages to local craftsmen, preserving the creative heritage of regional culture." },
    { icon: <Shield size={24} />, title: "Intelligent Transparency", desc: "No opaque supply chains. Our AI profiles map every single hand that touched, styled, or packed your collection." }
  ];

  return (
    <div className="fade-in" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
      
      {/* Brand Story Header */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="editorial-subtitle">The Origins</span>
              <h1 className="editorial-title">
                Crafting the Future of Personal Luxury.
              </h1>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                VanTelle was established to resolve a modern paradox: as digital curation grows increasingly precise, physical luxury has grown increasingly generic. 
              </p>
              <p style={{ marginBottom: '2.5rem', lineHeight: '1.8' }}>
                We believe that the highest luxury is inherently personal. By combining algorithmic personalization with the soulful artistry of human craftsmen, we deliver objects and clothing crafted specifically to your dimensions, preferences, and cultural stories.
              </p>
              <button onClick={() => setActivePage('collections')} className="btn-primary">
                View the Creations
              </button>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div 
                style={{ 
                  aspectRatio: '3/4', 
                  borderRadius: '4px', 
                  overflow: 'hidden', 
                  backgroundColor: 'var(--color-bg-warm)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
                }}
              >
                <img 
                  src="assets/vantelle_hero.png" 
                  alt="VanTelle Studio" 
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
                  padding: '2.5rem',
                  borderRadius: '4px',
                  maxWidth: '240px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
                className="hide-mobile"
              >
                <span style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent-gold)', display: 'block', marginBottom: '0.5rem' }}>100%</span>
                <p style={{ fontSize: '0.8rem', color: '#A6A29E', lineHeight: '1.4' }}>GENERATIONAL ARTISAN NETWORK INVOLVEMENT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy of Modern Luxury */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '5rem' }}>
            <span className="editorial-subtitle">Our Philosophy</span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '300', marginBottom: '1.5rem' }}>
              Emotion Intersected with Intelligence
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Traditional luxury brands rely on historical legacy alone. E-commerce platforms rely strictly on optimization. VanTelle sits at the confluence: honoring the traditional heritage of craftsmanship while using digital intelligence to establish absolute personalization.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '3rem' }}>
            <div style={{ backgroundColor: 'var(--color-bg-light)', padding: '3.5rem', borderRadius: '4px', border: '1px solid var(--color-bg-greige)' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', fontWeight: '500', display: 'block', marginBottom: '1rem' }}>Artisan Network</span>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>The Human Component</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                We partner with master ceramicists, weavers, goldsmiths, and tailors across Italy, France, and the UK. Our collaborators are not assembly lines; they are guardians of cultural heritage who work in local creative clusters.
              </p>
            </div>
            
            <div style={{ backgroundColor: 'var(--color-bg-light)', padding: '3.5rem', borderRadius: '4px', border: '1px solid var(--color-bg-greige)' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', fontWeight: '500', display: 'block', marginBottom: '1rem' }}>Digital Styling Suite</span>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>The Artificial Component</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                Our proprietary digital styling algorithms translate your design taste, physical dimensions, and textural sensitivities into precise crafting parameters, reducing manufacturing waste and creating items tailored specifically to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem and Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="editorial-subtitle">The Ecosystem</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '300' }}>Our Core Pillars</h2>
          </div>

          <div className="grid-4">
            {values.map((v, i) => (
              <div 
                key={i} 
                style={{
                  border: '1px solid var(--color-bg-greige)',
                  padding: '2.5rem 2rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-bg-light)',
                  transition: 'var(--transition-smooth)'
                }}
                className="value-card"
              >
                <div style={{ color: 'var(--color-accent-gold)', marginBottom: '1.5rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '400' }}>{v.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        .value-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-accent-gold);
          box-shadow: 0 15px 30px rgba(0,0,0,0.02);
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
