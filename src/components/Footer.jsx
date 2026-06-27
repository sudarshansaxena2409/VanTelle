import React, { useState } from 'react';

export default function Footer({ setActivePage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleLinkClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        backgroundColor: 'var(--color-bg-dark)',
        color: 'var(--color-text-light)',
        padding: '6rem 0 3rem 0',
        borderTop: '1px solid #2B2825',
        fontFamily: 'var(--font-sans)'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: '4rem',
            marginBottom: '6rem'
          }}
          className="footer-grid"
        >
          {/* Brand & Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.8rem', 
              letterSpacing: '0.2em',
              color: 'var(--color-text-light)'
            }}>
              VAN TELLE
            </h3>
            <p style={{ color: '#A6A29E', fontSize: '0.9rem', fontWeight: '300', maxWidth: '300px' }}>
              Blending emotion with intelligence, crafted to deliver memorable luxury lifestyle experiences.
            </p>
            
            {/* Newsletter form */}
            <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
              <p style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.75rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em',
                color: 'var(--color-accent-gold)',
                marginBottom: '0.75rem'
              }}>
                Subscribe to our newsletter
              </p>
              {subscribed ? (
                <p style={{ color: 'var(--color-accent-gold)', fontSize: '0.85rem' }}>
                  Thank you. Welcome to VanTelle's exclusive circle.
                </p>
              ) : (
                <div style={{ display: 'flex', borderBottom: '1px solid #403D3A', paddingBottom: '0.5rem', width: '100%' }}>
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'var(--color-text-light)',
                      outline: 'none'
                    }}
                  />
                  <button 
                    type="submit" 
                    style={{ 
                      fontSize: '0.75rem', 
                      letterSpacing: '0.15em', 
                      color: 'var(--color-accent-gold)',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    JOIN
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Directory */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 style={{ 
              fontSize: '0.8rem', 
              fontFamily: 'var(--font-sans)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em',
              color: 'var(--color-text-light)'
            }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', fontWeight: '300' }}>
              <li><button onClick={() => handleLinkClick('collections')} style={{ cursor: 'pointer', color: '#A6A29E' }}>Collections</button></li>
              <li><button onClick={() => handleLinkClick('stories')} style={{ cursor: 'pointer', color: '#A6A29E' }}>Stories & Journal</button></li>
              <li><button onClick={() => handleLinkClick('collaborations')} style={{ cursor: 'pointer', color: '#A6A29E' }}>Collaborations</button></li>
              <li><button onClick={() => handleLinkClick('vip')} style={{ cursor: 'pointer', color: '#A6A29E' }}>VIP Club</button></li>
            </ul>
          </div>

          {/* About */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 style={{ 
              fontSize: '0.8rem', 
              fontFamily: 'var(--font-sans)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em',
              color: 'var(--color-text-light)'
            }}>
              About Us
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', fontWeight: '300' }}>
              <li><button onClick={() => handleLinkClick('about')} style={{ cursor: 'pointer', color: '#A6A29E' }}>Our Story</button></li>
              <li><button onClick={() => handleLinkClick('about')} style={{ cursor: 'pointer', color: '#A6A29E' }}>AI + Human Personalisation</button></li>
              <li><button onClick={() => handleLinkClick('about')} style={{ cursor: 'pointer', color: '#A6A29E' }}>Ecosystem & Values</button></li>
              <li><button onClick={() => handleLinkClick('contact')} style={{ cursor: 'pointer', color: '#A6A29E' }}>Contact</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 style={{ 
              fontSize: '0.8rem', 
              fontFamily: 'var(--font-sans)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em',
              color: 'var(--color-text-light)'
            }}>
              Contact
            </h4>
            <p style={{ color: '#A6A29E', fontSize: '0.85rem', fontWeight: '300', lineHeight: '1.8' }}>
              VanTelle Headquarters<br />
              Corso Venezia, Milano<br />
              United Kingdom & Italy<br />
              <span style={{ color: 'var(--color-accent-gold)', display: 'block', marginTop: '0.5rem' }}>concierge@vantelle.com</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #2B2825', margin: '3rem 0', display: 'flex', justifyContent: 'center', padding: '1.5rem 0' }}>
          <div style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '0.8rem', 
            letterSpacing: '0.25em', 
            color: 'var(--color-accent-gold)', 
            fontWeight: '300',
            textAlign: 'center'
          }}>
            CURATED LUXURY. INTELLIGENTLY PERSONAL.
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: '#6E6A66',
            fontWeight: '300'
          }}
          className="footer-bottom"
        >
          <div>© {new Date().getFullYear()} VanTelle. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy" style={{ color: '#6E6A66' }}>Privacy Policy</a>
            <a href="#terms" style={{ color: '#6E6A66' }}>Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
