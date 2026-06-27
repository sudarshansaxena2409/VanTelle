import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import Collaborations from './pages/Collaborations';
import Stories from './pages/Stories';
import VIP from './pages/VIP';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll height to update top progress bar indicator
  useEffect(() => {
    const handleScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setScrollProgress(scrolled);
      }
    };
    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, [activePage]);

  // Page switcher mapping
  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <About setActivePage={setActivePage} />;
      case 'collections':
        return <Collections />;
      case 'collaborations':
        return <Collaborations setActivePage={setActivePage} />;
      case 'stories':
        return <Stories />;
      case 'vip':
        return <VIP />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        backgroundColor: activePage === 'vip' ? 'var(--color-bg-dark)' : 'var(--color-bg-light)',
        color: activePage === 'vip' ? 'var(--color-text-light)' : 'var(--color-text-dark)',
        transition: 'background-color 0.5s ease, color 0.5s ease'
      }}
    >
      {/* Scroll indicator */}
      <div 
        className="nav-scroll-indicator" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Page Area */}
      <main style={{ flex: 1 }}>
        {renderActivePage()}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
