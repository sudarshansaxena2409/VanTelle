import React, { useState } from 'react';
import { ArrowRight, Sparkles, ChevronRight, Award, Compass, RefreshCw } from 'lucide-react';

export default function Home({ setActivePage }) {
  // States for interactive AI personalisation concept
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState({ style: '', fabric: '', vibe: '' });
  const [personalStyleCode, setPersonalStyleCode] = useState(null);

  const quizOptions = [
    {
      question: "Which silhouette best defines your personal style?",
      key: "style",
      options: [
        { label: "Relaxed & Structured", desc: "Minimalist tailoring, organic textures" },
        { label: "Sculptural & Bold", desc: "Strong lines, artistic geometries" },
        { label: "Fluid & Sensual", desc: "Draped fabrics, subtle movement" }
      ]
    },
    {
      question: "Select your preferred texture profile:",
      key: "fabric",
      options: [
        { label: "Raw Linen & Cashmere", desc: "Tactile, breathable luxury" },
        { label: "Fluid Silk & Satin", desc: "Lustrous, elegant draping" },
        { label: "Heavy Wool & Soft Leather", desc: "Structured, grounded luxury" }
      ]
    },
    {
      question: "What is your primary design philosophy?",
      key: "vibe",
      options: [
        { label: "The Art of Quiet Luxury", desc: "Unseen details, understatement" },
        { label: "Artisan Heritage & Narrative", desc: "Visible craft, heritage story" },
        { label: "Contemporary Intelligent Tech", desc: "Futuristic lines, bespoke sizing" }
      ]
    }
  ];

  const handleQuizAnswer = (key, value) => {
    const updatedAnswers = { ...answers, [key]: value };
    setAnswers(updatedAnswers);
    if (quizStep < quizOptions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate personal luxury token
      const codes = {
        style: updatedAnswers.style.slice(0, 2).toUpperCase(),
        fabric: updatedAnswers.fabric.slice(0, 2).toUpperCase(),
        vibe: updatedAnswers.vibe.slice(0, 2).toUpperCase()
      };
      setPersonalStyleCode(`VT-${codes.style}${codes.fabric}${codes.vibe}-${Math.floor(100 + Math.random() * 900)}`);
      setQuizStep(3); // Result step
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setAnswers({ style: '', fabric: '', vibe: '' });
    setPersonalStyleCode(null);
  };

  const collections = [
    { id: 'fashion', label: 'Fashion', desc: 'Sartorial ease & refined silhouettes', img: '/assets/vantelle_hero.png' },
    { id: 'jewellery', label: 'Jewellery', desc: 'Sculptured items & pure gold craftsmanship', img: '/assets/collection_jewellery.png' },
    { id: 'homedecor', label: 'Home Décor', desc: 'Natural textures & artisan ceramics', img: '/assets/hovofaber_collab.png' },
    { id: 'lifestyle', label: 'Lifestyle', desc: 'Curated leather details & travel elements', img: '/assets/vip_background.png' }
  ];

  return (
    <div className="fade-in" style={{ paddingBottom: '0' }}>
      
      {/* LUXURY HERO SECTION */}
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
        {/* Background image with visual overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <img 
            src="/assets/vantelle_hero.png" 
            alt="VanTelle Home Editorial" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              background: 'linear-gradient(to right, rgba(247, 245, 242, 0.9) 35%, rgba(247, 245, 242, 0.2) 70%, transparent 100%)' 
            }} 
          />
        </div>

        {/* Hero Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: '620px' }} className="fade-in-up">
            <span className="editorial-subtitle">Emotion & Intelligence</span>
            <h1 
              className="editorial-title" 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '4.5rem', 
                lineHeight: '1.05', 
                marginBottom: '2rem',
                color: 'var(--color-text-dark)'
              }}
            >
              Redefining Luxury<br />
              Through Personal<br />
              Intelligence.
            </h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '3rem', fontWeight: '300', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              VanTelle blends modern technology with raw, timeless craftsmanship. We craft personalized lifestyle experiences that resonate emotionally and endure beautifully.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <button 
                onClick={() => setActivePage('collections')} 
                className="btn-primary"
              >
                Explore Collections
              </button>
              <button 
                onClick={() => setActivePage('about')} 
                className="btn-secondary"
              >
                Our Story
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

      {/* BRAND STATEMENT */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <span className="editorial-subtitle">The Philosophy</span>
            <h2 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '2.8rem', 
                fontWeight: '300', 
                lineHeight: '1.4', 
                marginBottom: '2.5rem',
                color: 'var(--color-text-dark)'
              }}
            >
              "We believe modern luxury is not defined by excess, but by alignment. Connecting the quiet beauty of handcrafted artifacts with the intelligent precision of modern tailoring."
            </h2>
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-accent-gold)', margin: '0 auto 2.5rem auto' }} />
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
              Every item in our ecosystem is born from raw materials, nurtured by authentic human creators, and matched specifically to you using proprietary styling criteria.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <span className="editorial-subtitle">Curated Portfolios</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '300' }}>Featured Collections</h2>
            </div>
            <button onClick={() => setActivePage('collections')} className="btn-accent">
              View All Portfolios <ArrowRight size={14} style={{ marginLeft: '0.5rem' }} />
            </button>
          </div>

          <div className="grid-4">
            {collections.map((col, index) => (
              <div 
                key={col.id} 
                className="luxury-card" 
                onClick={() => setActivePage('collections')}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="luxury-card-img-wrapper">
                  <img src={col.img} alt={col.label} className="luxury-card-img" />
                  <div className="luxury-card-overlay" />
                </div>
                <div className="luxury-card-content">
                  <span className="luxury-card-subtitle">Collection</span>
                  <h3 className="luxury-card-title">{col.label}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>{col.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & PERSONALISATION CONCEPT */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            
            {/* Left Narrative */}
            <div>
              <span className="editorial-subtitle">Intelligent Curation</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '2rem' }}>
                AI + Human Tailoring
              </h2>
              <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
                VanTelle combines cutting-edge machine learning preferences with master artisans. By learning your preferences, silhouette dimensions, and tactile choices, our ecosystem recommends or drafts custom pieces that align with your lifestyle.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(26, 26, 26, 0.03)', borderRadius: '50%', color: 'var(--color-accent-gold)' }}>
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-sans)', fontWeight: '500', marginBottom: '0.25rem', color: 'var(--color-text-dark)' }}>Bespoke Fit Recommendations</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Algorithms optimize fabric, drape, and length based on your structural archetype.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(26, 26, 26, 0.03)', borderRadius: '50%', color: 'var(--color-accent-gold)' }}>
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-sans)', fontWeight: '500', marginBottom: '0.25rem', color: 'var(--color-text-dark)' }}>Artisan Integration</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Bespoke tailoring files are compiled automatically and dispatched directly to local master tailors.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Mockup Container */}
            <div 
              style={{
                borderRadius: '8px',
                padding: '3rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="glass-panel"
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid rgba(26,26,26,0.05)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={16} style={{ color: 'var(--color-accent-gold)' }} />
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500' }}>Personalisation Portal</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  {quizStep < 3 ? `Step ${quizStep + 1} of 3` : 'Curation Ready'}
                </span>
              </div>

              {/* Quiz Body */}
              {quizStep < 3 ? (
                <div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '2rem', height: '70px', lineHeight: '1.3' }}>
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
                        <div style={{ fontWeight: '500', fontSize: '0.9rem', marginBottom: '0.25rem', color: 'var(--color-text-dark)' }}>{opt.label}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Curation output */
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
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Personal Profile Compiled</h3>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    color: 'var(--color-accent-gold)',
                    fontWeight: '500',
                    display: 'block',
                    marginBottom: '2rem'
                  }}>
                    Bespoke Token: {personalStyleCode}
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
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Your Custom Profile:</div>
                    <div style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>• <strong>Archetype:</strong> {answers.style}</div>
                    <div style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>• <strong>Material Preference:</strong> {answers.fabric}</div>
                    <div style={{ fontSize: '0.85rem' }}>• <strong>Luxury Philosophy:</strong> {answers.vibe}</div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button 
                      onClick={() => setActivePage('vip')} 
                      className="btn-primary" 
                      style={{ flex: 1, padding: '0.75rem' }}
                    >
                      Access VIP Room
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
                      title="Reset Quiz"
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

      {/* STRATEGIC COLLABORATION: HOVO FABER TEASER */}
      <section className="section-padding dark-section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background visual cover */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15, zIndex: 1 }}>
          <img src="/assets/hovofaber_collab.png" alt="Craft Detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '650px' }}>
            <span className="editorial-subtitle">Strategic Collaboration</span>
            <h2 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '3.2rem', 
                fontWeight: '300', 
                marginBottom: '1.5rem',
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
            <p style={{ marginBottom: '3rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
              We've partnered with creative director and creative studio Hovo Faber to curate unique artisan networks, develop exclusive lifestyle collections, and craft digital luxury stories that transcend time.
            </p>
            <button 
              onClick={() => setActivePage('collaborations')} 
              className="btn-primary"
            >
              Explore Creative Partnership
            </button>
          </div>
        </div>
      </section>

      {/* VIP MEMBERSHIP CTA */}
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
            <div style={{ maxWidth: '550px' }}>
              <span className="editorial-subtitle">VIP Services</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '1rem', color: 'var(--color-text-dark)' }}>
                The VanTelle Membership
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
                Gain priority reservation rights to upcoming artisan collaborations, private tailoring bookings in Milan & London, and curated lifestyle experiences.
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

      {/* STORYTELLING / JOURNAL PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid rgba(26,26,26,0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <span className="editorial-subtitle">The Journal</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '300' }}>Stories & Inspiration</h2>
            </div>
            <button onClick={() => setActivePage('stories')} className="btn-accent">
              View the Journal <ArrowRight size={14} style={{ marginLeft: '0.5rem' }} />
            </button>
          </div>

          <div className="grid-3">
            {/* Story Card 1 */}
            <div className="luxury-card" onClick={() => setActivePage('stories')}>
              <div className="luxury-card-img-wrapper" style={{ aspectRatio: '16/10' }}>
                <img src="/assets/hovofaber_collab.png" alt="Artisan hands" className="luxury-card-img" />
              </div>
              <div className="luxury-card-content">
                <span className="luxury-card-subtitle">Heritage</span>
                <h3 className="luxury-card-title" style={{ fontSize: '1.4rem' }}>The Art of Quiet Luxury</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>An interview with Italian master embroiderers on preserving centuries-old techniques in a digitized world.</p>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="luxury-card" onClick={() => setActivePage('stories')}>
              <div className="luxury-card-img-wrapper" style={{ aspectRatio: '16/10' }}>
                <img src="/assets/vip_background.png" alt="Luxury interior" className="luxury-card-img" />
              </div>
              <div className="luxury-card-content">
                <span className="luxury-card-subtitle">Architecture</span>
                <h3 className="luxury-card-title" style={{ fontSize: '1.4rem' }}>A Sense of Place</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Exploring the visual dialogues between Brutalist architecture and organic interior materials.</p>
              </div>
            </div>

            {/* Story Card 3 */}
            <div className="luxury-card" onClick={() => setActivePage('stories')}>
              <div className="luxury-card-img-wrapper" style={{ aspectRatio: '16/10' }}>
                <img src="/assets/collection_jewellery.png" alt="Jewellery curation" className="luxury-card-img" />
              </div>
              <div className="luxury-card-content">
                <span className="luxury-card-subtitle">Craftsmanship</span>
                <h3 className="luxury-card-title" style={{ fontSize: '1.4rem' }}>Inspired by Nature</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Crafting precious objects directly inspired by eroded coastlines, pebbles, and shifting sands.</p>
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
