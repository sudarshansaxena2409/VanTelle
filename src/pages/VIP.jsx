import React, { useState } from 'react';
import { Shield, Sparkles, User, Mail, Award, Landmark, Check } from 'lucide-react';

export default function VIP() {
  const [formData, setFormData] = useState({ name: '', email: '', note: '' });
  const [preferences, setPreferences] = useState({ texture: '', fit: '', frequency: '' });
  const [vipRegistered, setVipRegistered] = useState(false);
  const [membershipToken, setMembershipToken] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePreferenceChange = (key, val) => {
    setPreferences({ ...preferences, [key]: val });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      const code = `VT-VIP-${Math.floor(1000 + Math.random() * 9000)}-${formData.name.slice(0, 3).toUpperCase()}`;
      setMembershipToken(code);
      setVipRegistered(true);
    }
  };

  return (
    <div 
      className="fade-in dark-section" 
      style={{ 
        paddingTop: 'var(--header-height)', 
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-dark)'
      }}
    >
      
      {/* Hero Header */}
      <section 
        style={{ 
          position: 'relative', 
          padding: '6rem 0 3rem 0',
          backgroundImage: 'linear-gradient(to bottom, rgba(26,26,26,0.9) 60%, var(--color-bg-dark) 100%), url("/assets/vip_background.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <span className="editorial-subtitle" style={{ color: 'var(--color-accent-gold)' }}>Exclusive Access</span>
            <h1 className="editorial-title" style={{ fontSize: '3.5rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
              The VanTelle VIP Room
            </h1>
            <p style={{ color: '#A6A29E', fontSize: '1rem', lineHeight: '1.8' }}>
              Welcome to the private sanctuary of VanTelle. As a VIP member, you receive bespoke custom sizing recommendations, early access to artisan capsule collections, and private event notifications.
            </p>
          </div>
        </div>
      </section>

      {/* Main interactive section */}
      <section className="section-padding" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }} className="vip-split">
            
            {/* Left Narrative details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <span className="editorial-subtitle">The Club Benefits</span>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                  Member Privileges
                </h2>
                <p style={{ lineHeight: '1.8' }}>
                  VanTelle membership is fully complimentary yet selective. It operates on an invite-only curation framework, matching you with items that reflect your personal luxury choices.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--color-accent-gold)', padding: '0.25rem 0' }}><Landmark size={20} /></div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', fontWeight: '400', marginBottom: '0.25rem' }}>Milan & London Private Salons</h3>
                    <p style={{ fontSize: '0.85rem' }}>Book fitting appointments at our private design studios, complete with concierge support and custom fabric archives.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--color-accent-gold)', padding: '0.25rem 0' }}><Shield size={20} /></div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', fontWeight: '400', marginBottom: '0.25rem' }}>Artisan Reservation Rights</h3>
                    <p style={{ fontSize: '0.85rem' }}>Reserve pieces from collaborations (like Hovo Faber) 72 hours prior to public release. Items are guaranteed in your sizing.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--color-accent-gold)', padding: '0.25rem 0' }}><Sparkles size={20} /></div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', fontWeight: '400', marginBottom: '0.25rem' }}>Algorithmic Wardrobe Matching</h3>
                    <p style={{ fontSize: '0.85rem' }}>Receive personalized quarterly style lookbooks matching your fabric preferences, compiled directly by our creative team.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form Panel */}
            <div 
              style={{
                padding: '3.5rem',
                borderRadius: '8px',
                position: 'relative'
              }}
              className="dark-glass-panel"
            >
              {!vipRegistered ? (
                <form onSubmit={handleRegister}>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', fontFamily: 'var(--font-serif)' }}>
                    Request VIP Membership
                  </h3>

                  {/* Text Fields */}
                  <div className="luxury-input-group">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder=" "
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      className="luxury-input" 
                    />
                    <label className="luxury-label">FULL NAME</label>
                  </div>

                  <div className="luxury-input-group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder=" "
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      className="luxury-input" 
                    />
                    <label className="luxury-label">EMAIL ADDRESS</label>
                  </div>

                  {/* Preference Selectors */}
                  <div style={{ marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', marginBottom: '1rem' }}>
                      Preferred Texture Profile
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {['Raw Linen & Cashmere', 'Fluid Silk', 'Heavy Structured Wool'].map(opt => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handlePreferenceChange('texture', opt)}
                          style={{
                            padding: '0.5rem 1rem',
                            fontSize: '0.75rem',
                            border: `1px solid ${preferences.texture === opt ? 'var(--color-accent-gold)' : '#403D3A'}`,
                            color: preferences.texture === opt ? 'var(--color-accent-gold)' : 'var(--color-text-light)',
                            cursor: 'pointer',
                            borderRadius: '20px',
                            transition: 'var(--transition-fast)'
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '2.5rem' }}>
                    <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', marginBottom: '1rem' }}>
                      Fit Style Silhouette
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {['Relaxed & Oversized', 'Classic Tailored', 'Bespoke Architectural'].map(opt => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handlePreferenceChange('fit', opt)}
                          style={{
                            padding: '0.5rem 1rem',
                            fontSize: '0.75rem',
                            border: `1px solid ${preferences.fit === opt ? 'var(--color-accent-gold)' : '#403D3A'}`,
                            color: preferences.fit === opt ? 'var(--color-accent-gold)' : 'var(--color-text-light)',
                            cursor: 'pointer',
                            borderRadius: '20px',
                            transition: 'var(--transition-fast)'
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary" 
                    style={{ width: '100%', padding: '1.1rem' }}
                  >
                    Submit Application
                  </button>
                </form>
              ) : (
                /* VIP Membership Card Output */
                <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s ease' }}>
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
                    <Check size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>
                    Welcome to the Circle
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#A6A29E', marginBottom: '2.5rem' }}>
                    Your application has been processed. Your digital membership profile is active.
                  </p>

                  {/* Interactive Card */}
                  <div 
                    style={{ 
                      border: '1px solid var(--color-accent-gold)', 
                      borderRadius: '8px', 
                      padding: '2.5rem',
                      textAlign: 'left',
                      background: 'linear-gradient(135deg, #2B2825 0%, #1A1A1A 100%)',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                      marginBottom: '2.5rem'
                    }}
                  >
                    {/* Watermark brand tag */}
                    <div style={{ position: 'absolute', right: '-1rem', bottom: '-1rem', fontSize: '6rem', fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.02)', pointerEvents: 'none', userSelect: 'none' }}>
                      VT
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem' }}>
                      <span style={{ fontSize: '0.8rem', letterSpacing: '0.25em', color: 'var(--color-text-light)', fontFamily: 'var(--font-serif)' }}>V A N T E L L E</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--color-accent-gold)', border: '1px solid var(--color-accent-gold)', padding: '0.15rem 0.5rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>MEMBER</span>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#8C8884', letterSpacing: '0.1em', display: 'block', marginBottom: '0.25rem' }}>MEMBER NAME</span>
                      <span style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', fontWeight: '400' }}>{formData.name}</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem' }}>
                      <div>
                        <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#8C8884', letterSpacing: '0.1em', display: 'block', marginBottom: '0.25rem' }}>MEMBERSHIP TOKEN</span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-accent-gold)', fontFamily: 'monospace' }}>{membershipToken}</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#8C8884', letterSpacing: '0.1em', display: 'block', marginBottom: '0.25rem' }}>CURATED STYLE</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>{preferences.fit || 'Classic Tailored'}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setVipRegistered(false);
                      setFormData({ name: '', email: '', note: '' });
                      setPreferences({ texture: '', fit: '', frequency: '' });
                    }}
                    className="btn-secondary"
                    style={{ width: '100%' }}
                  >
                    Register Another Account
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .vip-split {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          div[style*="padding: 3.5rem"] {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>

    </div>
  );
}
