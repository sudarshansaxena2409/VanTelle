import React from 'react';
import { siteConfig } from '../config/siteConfig';

export default function Footer({ setActivePage }) {
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
            gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
            gap: '4rem',
            marginBottom: '5rem'
          }}
          className="footer-grid"
        >
          {/* Brand Philosophy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '2rem', 
              letterSpacing: '0.12em',
              color: 'var(--color-text-light)',
              fontWeight: '400'
            }}>
              VanTelle
            </h3>
            <p style={{ color: '#A6A29E', fontSize: '0.9rem', fontWeight: '300', maxWidth: '340px', lineHeight: '1.8' }}>
              An exploration of personal expression through thoughtfully curated fashion, jewellery, and home décor. Where craftsmanship, creativity, and individuality come together.
            </p>
          </div>

          {/* Directory */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 style={{ 
              fontSize: '0.8rem', 
              fontFamily: 'var(--font-sans)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em',
              color: 'var(--color-text-light)',
              fontWeight: '500'
            }}>
              Portfolios
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', fontWeight: '300' }}>
              <li><button onClick={() => handleLinkClick('collections')} style={{ cursor: 'pointer', color: '#A6A29E' }}>Curated Collections</button></li>
              <li><button onClick={() => handleLinkClick('stories')} style={{ cursor: 'pointer', color: '#A6A29E' }}>Editorial Journal</button></li>
              <li><button onClick={() => handleLinkClick('collaborations')} style={{ cursor: 'pointer', color: '#A6A29E' }}>Collaborations</button></li>
              <li><button onClick={() => handleLinkClick('vip')} style={{ cursor: 'pointer', color: '#A6A29E' }}>VIP Membership</button></li>
            </ul>
          </div>

          {/* About Us */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 style={{ 
              fontSize: '0.8rem', 
              fontFamily: 'var(--font-sans)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em',
              color: 'var(--color-text-light)',
              fontWeight: '500'
            }}>
              About VanTelle
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', fontWeight: '300' }}>
              <li><button onClick={() => handleLinkClick('about')} style={{ cursor: 'pointer', color: '#A6A29E' }}>Our Brand Story</button></li>
              <li><button onClick={() => handleLinkClick('about')} style={{ cursor: 'pointer', color: '#A6A29E' }}>Artisan Heritage</button></li>
              <li><button onClick={() => handleLinkClick('contact')} style={{ cursor: 'pointer', color: '#A6A29E' }}>Concierge Desk</button></li>
            </ul>
          </div>

          {/* Corporate Details & Contact (Document Section 6) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 style={{ 
              fontSize: '0.8rem', 
              fontFamily: 'var(--font-sans)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em',
              color: 'var(--color-text-light)',
              fontWeight: '500'
            }}>
              Corporate Details
            </h4>
            <div style={{ color: '#A6A29E', fontSize: '0.85rem', fontWeight: '300', lineHeight: '1.8' }}>
              <div style={{ color: '#F7F5F2', fontWeight: '400', marginBottom: '0.25rem' }}>
                {siteConfig.companyName}
              </div>
              <div>{siteConfig.operatingPresence}</div>
              <a 
                href={`mailto:${siteConfig.corporateEmail}`} 
                style={{ color: 'var(--color-accent-gold)', display: 'block', marginTop: '0.5rem' }}
              >
                {siteConfig.corporateEmail}
              </a>
              <div style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
                <div>India: {siteConfig.phones.india}</div>
                <div>Italy: {siteConfig.phones.italy}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Statement Banner in Footer */}
        <div style={{ borderTop: '1px solid #2B2825', margin: '3rem 0 2rem 0', display: 'flex', justifyContent: 'center', paddingTop: '2.5rem' }}>
          <div style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1rem', 
            letterSpacing: '0.15em', 
            color: 'var(--color-accent-gold)', 
            fontWeight: '300',
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            "Luxury is not simply what we own, but how we choose to express ourselves."
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: '#6E6A66',
            fontWeight: '300',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.03)'
          }}
          className="footer-bottom"
        >
          <div>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: '#6E6A66' }}>www.vantelle.com (under development)</span>
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
