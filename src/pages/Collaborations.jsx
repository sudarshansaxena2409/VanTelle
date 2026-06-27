import React, { useState } from 'react';
import { Compass, BookOpen, Sparkles, Network, Eye, Heart } from 'lucide-react';

const COLLABORATORS_DATA = [
  {
    id: 'hovo-faber',
    name: 'Hovo Faber',
    subtitle: 'A Collaborative Partnership',
    roleTag: 'Founding Cultural & Creative Partner',
    quote: '"Celebrating craftsmanship, culture, storytelling, and meaningful luxury experiences."',
    aboutTitle: 'Culture. Heritage. Storytelling.',
    aboutDesc: 'Hovo Faber is a cultural curator and creative studio dedicated to preserving heritage, supporting artisans, and crafting stories that transcend time. United by a vision of slow luxury, VanTelle and Hovo Faber collaborate to bridge tactile heritage with intelligent contemporary design.',
    imgMain: import.meta.env.BASE_URL + 'assets/hovofaber_collab.png',
    imgExtra: import.meta.env.BASE_URL + 'assets/collection_jewellery.png',
    roles: [
      {
        title: 'Cultural Curator',
        icon: <Compass size={22} />,
        desc: 'Curating artisan partnerships and historical narratives that root collections in genuine cultural hubs.'
      },
      {
        title: 'Storytelling & Heritage',
        icon: <BookOpen size={22} />,
        desc: 'Documenting the histories and human experiences behind regional craftsmanship through immersive media.'
      },
      {
        title: 'Experience Design',
        icon: <Sparkles size={22} />,
        desc: 'Developing sensory physical events, private VIP viewing salon spaces, and tactile digital platforms.'
      },
      {
        title: 'Artisan Network',
        icon: <Network size={22} />,
        desc: 'Fostering direct relationships with generational workshops in Tuscany, Como, and the UK countryside.'
      },
      {
        title: 'Creative Direction',
        icon: <Eye size={22} />,
        desc: 'Shaping cohesive editorial visuals, material palettes, and timeless structural aesthetics.'
      },
      {
        title: 'Strategic Partnerships',
        icon: <Heart size={22} />,
        desc: 'Forging bridges between global design visionaries, local guilds, and modern software creators.'
      }
    ]
  }
  // Future collaborators can be added here easily as new objects
];

export default function Collaborations({ setActivePage }) {
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);
  const currentPartner = COLLABORATORS_DATA[activePartnerIndex];

  return (
    <div className="fade-in" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
      
      {/* Intro Header */}
      <section style={{ padding: '4rem 0 2rem 0', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="editorial-subtitle">Strategic Partners</span>
          <h1 className="editorial-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
            Crafted Together. Curated for You.
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem' }}>
            We collaborate with visionaries and cultural custodians who share our belief in craftsmanship, authenticity, and timeless luxury.
          </p>
        </div>
      </section>

      {/* Featured Collaborator Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid rgba(26,26,26,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'flex-start' }} className="collab-split-top">
            
            {/* Visual Box Left */}
            <div>
              <div 
                style={{ 
                  border: '1px solid var(--color-bg-greige)', 
                  padding: '2.5rem', 
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-bg-warm)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                    {currentPartner.subtitle}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-gold)', fontWeight: '500' }}>Active</span>
                </div>
                
                <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', letterSpacing: '0.02em' }}>
                  {currentPartner.name}
                </h2>
                
                <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent-gold)', fontWeight: '500', marginBottom: '1.5rem' }}>
                  {currentPartner.roleTag}
                </p>

                <p style={{ fontSize: '0.95rem', fontStyle: 'italic', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                  {currentPartner.quote}
                </p>

                <button 
                  onClick={() => setActivePage('contact')} 
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  Discover Our Journey
                </button>
              </div>

              {/* Detail support image */}
              <div style={{ aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden', marginTop: '2.5rem', backgroundColor: 'var(--color-bg-greige)' }}>
                <img src={currentPartner.imgExtra} alt="Craft Curation Detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Narrative Box Right */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
              
              {/* Partner Story */}
              <div>
                <span className="editorial-subtitle">About Collaborator</span>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
                  {currentPartner.aboutTitle}
                </h3>
                <p style={{ lineHeight: '1.8', fontSize: '1rem', color: 'var(--color-text-muted)' }}>
                  {currentPartner.aboutDesc}
                </p>
              </div>

              {/* Roles Portfolio Grid */}
              <div>
                <span className="editorial-subtitle" style={{ marginBottom: '2rem' }}>Their Strategic Role</span>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }} className="roles-grid">
                  {currentPartner.roles.map((role, idx) => (
                    <div 
                      key={idx} 
                      style={{
                        padding: '1.75rem',
                        border: '1px solid var(--color-bg-greige)',
                        borderRadius: '4px',
                        backgroundColor: 'var(--color-bg-light)'
                      }}
                      className="role-card"
                    >
                      <div style={{ color: 'var(--color-accent-gold)', marginBottom: '1rem' }}>
                        {role.icon}
                      </div>
                      <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-sans)', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--color-text-dark)' }}>
                        {role.title}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                        {role.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-warm)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontStyle: 'italic', fontWeight: '300', lineHeight: '1.5', color: 'var(--color-text-dark)' }}>
              "When technology, culture and craftsmanship unite, luxury becomes an experience that lasts beyond time."
            </h2>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', marginTop: '2rem', fontWeight: '500' }}>
              VanTelle × Hovo Faber
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .role-card {
          transition: var(--transition-smooth);
        }
        .role-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent-gold);
          box-shadow: 0 10px 20px rgba(0,0,0,0.02);
        }
        @media (max-width: 900px) {
          .collab-split-top {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .roles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
}
