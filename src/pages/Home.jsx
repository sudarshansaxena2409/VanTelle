import React, { useState } from 'react';
import { ArrowRight, Sparkles, ChevronRight, Award, Compass, RefreshCw, Feather } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Home({ setActivePage }) {
  // States for interactive AI personalisation concept
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState({ style: '', aesthetic: '', expression: '' });
  const [personalStyleCode, setPersonalStyleCode] = useState(null);

  // Exact 3 AI Personalisation Questions from Document Section 2
  const quizOptions = [
    {
      question: "How would you describe your personal style?",
      key: "style",
      options: [
        { label: "Minimal & Architectural", desc: "Clean lines, understated tailoring, and sculptural silhouettes." },
        { label: "Timeless & Refined", desc: "Classic proportions, tactile luxury, and effortless elegance." },
        { label: "Organic & Contemporary", desc: "Fluid draping, natural imperfections, and relaxed ease." }
      ]
    },
    {
      question: "Which colours, textures, or aesthetics do you naturally gravitate towards?",
      key: "aesthetic",
      options: [
        { label: "Warm Neutrals & Tactile Fibres", desc: "Cashmere, raw Belgian flax, sand tones, and unbleached silk." },
        { label: "Charcoal, Deep Obsidian & Pure Gold", desc: "Moody mineral tones, satin silk, and warm 18k gold accents." },
        { label: "Earthy Minerals & Raw Stoneware", desc: "Tuscan travertine, porous terracotta, and hand-thrown clay." }
      ]
    },
    {
      question: "What would you like your style to express about you?",
      key: "expression",
      options: [
        { label: "Quiet Confidence & Discernment", desc: "Elegance that whispers, valued for intimacy over ostentation." },
        { label: "Authentic Craft & Heritage", desc: "A profound respect for generational artisan craftsmanship." },
        { label: "Uncompromising Individuality", desc: "A personal signature shaped by curated, meaningful objects." }
      ]
    }
  ];

  const handleQuizAnswer = (key, value) => {
    const updatedAnswers = { ...answers, [key]: value };
    setAnswers(updatedAnswers);
    if (quizStep < quizOptions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Generate unique bespoke personal profile token
      const codes = {
        style: updatedAnswers.style.slice(0, 2).toUpperCase(),
        aesthetic: updatedAnswers.aesthetic.slice(0, 2).toUpperCase(),
        expression: updatedAnswers.expression.slice(0, 2).toUpperCase()
      };
      setPersonalStyleCode(`VT-${codes.style}${codes.aesthetic}${codes.expression}-${Math.floor(100 + Math.random() * 900)}`);
      setQuizStep(3); // Result step
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setAnswers({ style: '', aesthetic: '', expression: '' });
    setPersonalStyleCode(null);
  };

  // Three Main Product Categories per Document Section 3
  const collections = [
    { 
      id: 'jewellery', 
      label: 'Jewellery', 
      desc: 'Sculptural 18k gold forms, organic pearls & ethically mined stones', 
      img: import.meta.env.BASE_URL + 'assets/collection_jewellery.png' 
    },
    { 
      id: 'fashion', 
      label: 'Fashion', 
      desc: 'Italian linen, liquid mulberry silk & generational cashmere tailoring', 
      img: import.meta.env.BASE_URL + 'assets/vantelle_hero.png' 
    },
    { 
      id: 'homedecor', 
      label: 'Home Décor', 
      desc: 'Tuscan travertine, hand-thrown ceramics & tactile Belgian flax', 
      img: import.meta.env.BASE_URL + 'assets/hovofaber_collab.png' 
    }
  ];

  return (
    <div className="fade-in" style={{ paddingBottom: '0' }}>
      
      {/* 1. LUXURY HERO SECTION (Document Section 2) */}
      <section 
        style={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#EDE7DF'
        }}
      >
        {/* Background Editorial Visual with Subtle Cinematic Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <img 
            src={import.meta.env.BASE_URL + "assets/vantelle_hero.png"} 
            alt="VanTelle Editorial Luxury" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              background: 'linear-gradient(to right, rgba(247, 245, 242, 0.92) 38%, rgba(247, 245, 242, 0.35) 75%, transparent 100%)' 
            }} 
          />
        </div>

        {/* Hero Content per Document Exact Copy */}
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: '640px' }} className="fade-in-up">
            <span className="editorial-subtitle">Editorial Portfolio</span>
            <h1 
              className="editorial-title" 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '4.2rem', 
                lineHeight: '1.08', 
                marginBottom: '1.75rem',
                color: 'var(--color-text-dark)',
                letterSpacing: '-0.02em'
              }}
            >
              VanTelle — A Reflection of Individuality.
            </h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', fontWeight: '300', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              An exploration of personal expression through thoughtfully curated fashion, jewellery, and home décor. Where craftsmanship, creativity, and individuality come together.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setActivePage('collections')} 
                className="btn-primary"
              >
                Explore Curated Collections
              </button>
              <button 
                onClick={() => setActivePage('about')} 
                className="btn-secondary"
              >
                Our Brand Story
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            zIndex: 2,
            opacity: 0.7
          }}
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Scroll to discover</span>
          <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--color-accent-gold)', animation: 'pulse 2s infinite' }} />
        </div>
      </section>

      {/* 2. BRAND STATEMENT (Document Section 2) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            <span className="editorial-subtitle">Brand Statement</span>
            <h2 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '2.9rem', 
                fontWeight: '300', 
                lineHeight: '1.35', 
                marginBottom: '2rem',
                color: 'var(--color-text-dark)'
              }}
            >
              "Luxury is not simply what we own, but how we choose to express ourselves."
            </h2>
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-accent-gold)', margin: '0 auto 2rem auto' }} />
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto' }}>
              VanTelle was born from the desire to create a thoughtful sanctuary where craftsmanship, timeless aesthetics, and individual personality converge without excess.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED COLLECTIONS: 3 MAIN CATEGORIES (Document Section 3) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="editorial-subtitle">Curated Categories</span>
              <h2 style={{ fontSize: '2.6rem', fontWeight: '300' }}>The Three Portfolios</h2>
            </div>
            <button onClick={() => setActivePage('collections')} className="btn-accent">
              View All Portfolios <ArrowRight size={14} style={{ marginLeft: '0.5rem' }} />
            </button>
          </div>

          <div className="grid-3">
            {collections.map((col, index) => (
              <div 
                key={col.id} 
                className="luxury-card" 
                onClick={() => setActivePage('collections')}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="luxury-card-img-wrapper" style={{ aspectRatio: '3/4' }}>
                  <img src={col.img} alt={col.label} className="luxury-card-img" />
                  <div className="luxury-card-overlay" />
                </div>
                <div className="luxury-card-content" style={{ padding: '1.5rem 0' }}>
                  <span className="luxury-card-subtitle">Category</span>
                  <h3 className="luxury-card-title" style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>{col.label}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', lineHeight: '1.6' }}>{col.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI PERSONALISATION PORTAL (Document Section 2 & Page 2 Quiz) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            
            {/* Left Narrative */}
            <div>
              <span className="editorial-subtitle">Intelligent Personalisation</span>
              <h2 style={{ fontSize: '2.6rem', fontWeight: '300', marginBottom: '1.75rem' }}>
                AI Personalisation Portal
              </h2>
              <p style={{ marginBottom: '1.75rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
                At VanTelle, personal expression is our compass. Our interactive curation portal engages with your intuitive style, textural sensibilities, and personal narrative to formulate a bespoke aesthetic profile.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(26, 26, 26, 0.04)', borderRadius: '50%', color: 'var(--color-accent-gold)' }}>
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-sans)', fontWeight: '500', marginBottom: '0.25rem', color: 'var(--color-text-dark)' }}>Individuality Over Trends</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Tailored aesthetic curation crafted around who you are, rather than fast seasons or mass algorithms.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(26, 26, 26, 0.04)', borderRadius: '50%', color: 'var(--color-accent-gold)' }}>
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-sans)', fontWeight: '500', marginBottom: '0.25rem', color: 'var(--color-text-dark)' }}>Artisan Alignment</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Match directly with generational Italian workshops, master silversmiths, and local ceramic ateliers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Experience (Page 2 Questions) */}
            <div 
              style={{
                borderRadius: '8px',
                padding: '3rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--color-bg-light)',
                border: '1px solid var(--color-bg-greige)'
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid rgba(26,26,26,0.06)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={16} style={{ color: 'var(--color-accent-gold)' }} />
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500' }}>Personalisation Quiz</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  {quizStep < 3 ? `Question ${quizStep + 1} of 3` : 'Profile Ready'}
                </span>
              </div>

              {/* Quiz Body */}
              {quizStep < 3 ? (
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.75rem', minHeight: '60px', lineHeight: '1.3' }}>
                    {quizOptions[quizStep].question}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {quizOptions[quizStep].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(quizOptions[quizStep].key, opt.label)}
                        style={{
                          width: '100%',
                          padding: '1.25rem',
                          textAlign: 'left',
                          border: '1px solid var(--color-bg-greige)',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          transition: 'var(--transition-fast)',
                          backgroundColor: 'transparent'
                        }}
                        className="quiz-option-btn"
                      >
                        <div style={{ fontWeight: '500', fontSize: '0.95rem', marginBottom: '0.25rem', color: 'var(--color-text-dark)' }}>{opt.label}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Curation Token & Profile Summary */
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(197, 168, 128, 0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    color: 'var(--color-accent-gold)'
                  }}>
                    <Award size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Individuality Profile Compiled</h3>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    color: 'var(--color-accent-gold)',
                    fontWeight: '500',
                    display: 'block',
                    marginBottom: '2rem'
                  }}>
                    Personal Token: {personalStyleCode}
                  </span>
                  
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(26,26,26,0.02)', 
                      border: '1px solid var(--color-bg-greige)',
                      borderRadius: '4px',
                      padding: '1.25rem',
                      textAlign: 'left',
                      marginBottom: '2rem'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Your Aesthetic Blueprint:</div>
                    <div style={{ fontSize: '0.85rem', marginBottom: '0.35rem' }}>• <strong>Style Archetype:</strong> {answers.style}</div>
                    <div style={{ fontSize: '0.85rem', marginBottom: '0.35rem' }}>• <strong>Texture & Aesthetic:</strong> {answers.aesthetic}</div>
                    <div style={{ fontSize: '0.85rem' }}>• <strong>Self Expression:</strong> {answers.expression}</div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button 
                      onClick={() => setActivePage('collections')} 
                      className="btn-primary" 
                      style={{ flex: 1, padding: '0.75rem' }}
                    >
                      Explore Matching Pieces
                    </button>
                    <button 
                      onClick={resetQuiz} 
                      style={{ 
                        padding: '0.75rem', 
                        border: '1px solid var(--color-bg-greige)', 
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer' 
                      }}
                      title="Retake Quiz"
                    >
                      <RefreshCw size={16} />
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
        <style>{`
          .quiz-option-btn:hover {
            border-color: var(--color-accent-gold) !important;
            background-color: rgba(197, 168, 128, 0.05) !important;
            padding-left: 1.5rem !important;
          }
        `}</style>
      </section>

      {/* 5. STRATEGIC COLLABORATION: HOVO FABER (Document Section 5, 6 & Page 9-11) */}
      <section className="section-padding dark-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15, zIndex: 1 }}>
          <img src={import.meta.env.BASE_URL + "assets/hovofaber_collab.png"} alt="Craft Detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '680px' }}>
            <span className="editorial-subtitle" style={{ color: 'var(--color-accent-gold)' }}>Strategic Collaborations</span>
            <h2 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '3.4rem', 
                fontWeight: '300', 
                marginBottom: '1.25rem',
                lineHeight: '1.15'
              }}
            >
              VanTelle × Hovo Faber
            </h2>
            <h3 
              style={{ 
                fontSize: '1.4rem', 
                fontStyle: 'italic', 
                color: 'var(--color-accent-gold)', 
                marginBottom: '2rem', 
                fontWeight: '300',
                fontFamily: 'var(--font-serif)'
              }}
            >
              "Celebrating craftsmanship, culture, storytelling, and meaningful luxury experiences."
            </h3>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.8', color: '#D9D4CD' }}>
              We partner with cultural curators and creative studios to expand our ecosystem beyond conventional retail. Through deep artisan networks and collaborative storytelling, our partnerships honor heritage while redefining contemporary luxury.
            </p>
            <button 
              onClick={() => setActivePage('collaborations')} 
              className="btn-primary"
            >
              Discover the Collaboration
            </button>
          </div>
        </div>
      </section>

      {/* 6. VIP MEMBERSHIP CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div 
            style={{
              border: '1px solid var(--color-bg-greige)',
              padding: '5rem 4rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'var(--color-bg-warm)',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="vip-cta-banner"
          >
            <div style={{ maxWidth: '580px' }}>
              <span className="editorial-subtitle">Private Salon</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '1rem', color: 'var(--color-text-dark)' }}>
                The VanTelle Membership
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.8' }}>
                Gain early access to limited artisan drops, private viewing salons, and direct concierge styling tailored to your personal aesthetic token.
              </p>
            </div>
            
            <button 
              onClick={() => setActivePage('vip')} 
              className="btn-primary"
              style={{ whiteSpace: 'nowrap' }}
            >
              Request Access
            </button>
          </div>
        </div>
      </section>

      {/* 7. JOURNAL & STORIES PREVIEW (Document Section 5) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid rgba(26,26,26,0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="editorial-subtitle">The Journal</span>
              <h2 style={{ fontSize: '2.6rem', fontWeight: '300' }}>Stories & Artisan Narratives</h2>
            </div>
            <button onClick={() => setActivePage('stories')} className="btn-accent">
              View All Stories <ArrowRight size={14} style={{ marginLeft: '0.5rem' }} />
            </button>
          </div>

          <div className="grid-3">
            {/* Story Card 1 */}
            <div className="luxury-card" onClick={() => setActivePage('stories')}>
              <div className="luxury-card-img-wrapper" style={{ aspectRatio: '16/10' }}>
                <img src={import.meta.env.BASE_URL + "assets/hovofaber_collab.png"} alt="Artisan hands weaving" className="luxury-card-img" />
              </div>
              <div className="luxury-card-content" style={{ padding: '1.5rem 0' }}>
                <span className="luxury-card-subtitle">Heritage</span>
                <h3 className="luxury-card-title" style={{ fontSize: '1.4rem' }}>The Art of Quiet Luxury</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Preserving raw hand-weaving techniques in the Lombardy hills with generational master weavers.</p>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="luxury-card" onClick={() => setActivePage('stories')}>
              <div className="luxury-card-img-wrapper" style={{ aspectRatio: '16/10' }}>
                <img src={import.meta.env.BASE_URL + "assets/vip_background.png"} alt="Minimal architecture interior" className="luxury-card-img" />
              </div>
              <div className="luxury-card-content" style={{ padding: '1.5rem 0' }}>
                <span className="luxury-card-subtitle">Architecture</span>
                <h3 className="luxury-card-title" style={{ fontSize: '1.4rem' }}>A Sense of Place</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Exploring visual dialogues between architectural geometry and the tactile textures of modern clothing.</p>
              </div>
            </div>

            {/* Story Card 3 */}
            <div className="luxury-card" onClick={() => setActivePage('stories')}>
              <div className="luxury-card-img-wrapper" style={{ aspectRatio: '16/10' }}>
                <img src={import.meta.env.BASE_URL + "assets/collection_jewellery.png"} alt="Sculptural jewelry" className="luxury-card-img" />
              </div>
              <div className="luxury-card-content" style={{ padding: '1.5rem 0' }}>
                <span className="luxury-card-subtitle">Craftsmanship</span>
                <h3 className="luxury-card-title" style={{ fontSize: '1.4rem' }}>Inspired by Nature</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Drafting jewellery directly from organic eroded coastal shapes and natural stone contours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
        @media (max-width: 900px) {
          .vip-cta-banner {
            flex-direction: column;
            gap: 2.5rem;
            align-items: flex-start !important;
            padding: 3rem 2rem !important;
          }
        }
      `}</style>

    </div>
  );
}
