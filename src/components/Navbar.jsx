import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'collections', label: 'Collections' },
    { id: 'stories', label: 'Stories' },
    { id: 'vip', label: 'VIP Membership' },
    { id: 'collaborations', label: 'Collaborations' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''} ${activePage === 'vip' ? 'navbar-vip' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4rem',
        zIndex: 1000,
        transition: 'var(--transition-smooth)',
        backgroundColor: activePage === 'vip' 
          ? (isScrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent')
          : (isScrolled ? 'rgba(247, 245, 242, 0.95)' : 'transparent'),
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled 
          ? (activePage === 'vip' ? '1px solid #2B2825' : '1px solid rgba(26, 26, 26, 0.05)') 
          : '1px solid transparent',
        color: activePage === 'vip' ? 'var(--color-text-light)' : 'var(--color-text-dark)'
      }}
    >
      {/* Brand Logo */}
      <div 
        onClick={() => handleNavClick('home')}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.65rem',
          letterSpacing: '0.25em',
          cursor: 'pointer',
          fontWeight: '300'
        }}
      >
        VAN TELLE
      </div>

      {/* Navigation Links */}
      <nav 
        style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center'
        }}
        className="desktop-menu"
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            style={{
              fontSize: '0.75rem',
              fontWeight: activePage === link.id ? '500' : '300',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem 0',
              color: activePage === 'vip'
                ? (activePage === link.id ? 'var(--color-accent-gold)' : 'var(--color-text-light)')
                : (activePage === link.id ? 'var(--color-accent-gold)' : 'var(--color-text-dark)'),
              transition: 'var(--transition-fast)'
            }}
          >
            {link.label}
            {activePage === link.id && (
              <span 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '12px',
                  height: '1px',
                  backgroundColor: 'var(--color-accent-gold)'
                }}
              />
            )}
          </button>
        ))}
      </nav>

      {/* Utilities */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.75rem'
        }}
      >
        <button aria-label="Search" style={{ cursor: 'pointer' }}>
          <Search size={18} strokeWidth={1.5} />
        </button>
        <button 
          onClick={() => handleNavClick('vip')} 
          aria-label="Profile" 
          style={{ cursor: 'pointer', color: activePage === 'vip' ? 'var(--color-accent-gold)' : 'inherit' }}
        >
          <User size={18} strokeWidth={1.5} />
        </button>
        <button 
          onClick={() => handleNavClick('collections')}
          aria-label="Shopping Bag" 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
        >
          <ShoppingBag size={18} strokeWidth={1.5} />
          <span style={{ fontSize: '0.7rem', fontWeight: '400', fontFamily: 'var(--font-sans)', transform: 'translateY(1px)' }}>(0)</span>
        </button>


        {/* Mobile Menu Icon */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            cursor: 'pointer',
            display: 'none'
          }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer (Styled via inline styles or class fallback) */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            width: '100%',
            height: 'calc(100vh - var(--header-height))',
            backgroundColor: activePage === 'vip' ? 'var(--color-bg-dark)' : 'var(--color-bg-light)',
            display: 'flex',
            flexDirection: 'column',
            padding: '3rem 2rem',
            gap: '2rem',
            zIndex: 999,
            borderTop: activePage === 'vip' ? '1px solid #2B2825' : '1px solid rgba(26, 26, 26, 0.05)',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                fontSize: '1.25rem',
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.1em',
                textAlign: 'left',
                padding: '0.5rem 0',
                color: activePage === link.id ? 'var(--color-accent-gold)' : 'inherit',
                borderBottom: '1px solid rgba(26,26,26,0.05)'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      {/* Desktop/Mobile display styles injection for raw responsiveness */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
        @media (max-width: 768px) {
          header {
            padding: 0 1.5rem !important;
          }
        }
      `}</style>
    </header>
  );
}
