import React, { useState } from 'react';
import { X, BookOpen, Clock, User, Calendar, Sparkles } from 'lucide-react';

const JOURNAL_POSTS = [
  {
    id: 's1',
    category: 'Heritage',
    title: 'The Art of Quiet Luxury',
    subtitle: 'Preserving raw hand-weaving techniques in the Lombardy hills.',
    date: 'June 2026',
    author: 'Editorial Board',
    img: import.meta.env.BASE_URL + 'assets/hovofaber_collab.png',
    readTime: '6 Min Read',
    paragraphs: [
      "In the rolling topography of Lombardy, north of Milan, stands a brick workshop where the sound of wooden looms has remained unchanged for three generations. Here, quiet luxury is not a marketing catchphrase; it is a physical chore. Master weavers guide threads of fine cashmere and raw organic silk to construct textiles that have a texture impossible to duplicate on automated factory lines.",
      "VanTelle's collaboration with local weavers celebrates this exact resistance to velocity. Rather than mass producing garments, our partners design custom fabrics in quantities of tens, rather than thousands. The result is a tactile quality that feels exceptionally personal, draping with a weight and texture that communicates sophistication without shouting.",
      "\"The hand-loom leaves microscopic variations in the tension of the weave,\" explains Stefano, a second-generation weaver. \"It is this variance—this human element—that gives the fabric its soul. It breathes. It responds to the climate, and it aligns to the shape of the wearer over time.\""
    ],
    quote: "Quiet luxury is not a statement; it is a conversation between the hand of the weaver and the posture of the wearer."
  },
  {
    id: 's2',
    category: 'Architecture',
    title: 'A Sense of Place',
    subtitle: 'How architectural forms dictate the textures of modern clothing.',
    date: 'May 2026',
    author: 'Hovo Faber',
    img: import.meta.env.BASE_URL + 'assets/vip_background.png',
    readTime: '8 Min Read',
    paragraphs: [
      "There is a silent dialogue between the environments we inhabit and the objects we wear. When we look at the clean, geometric sweeps of Brutalist architecture—the textured raw concrete, the shadow gaps, the honest expression of structure—we find a visual philosophy that translates directly into modern tailoring.",
      "VanTelle's design ethos, crafted in partnership with creative studio Hovo Faber, leans heavily on this structural honesty. We move away from tight, restrictive silhouettes toward fluid geometries. We design coats and trousers that act as personal shelters, utilizing heavy wool-blends and dry linen that maintain their shapes while allowing absolute freedom of movement.",
      "By looking at design through an architectural lens, we create clothing that is timeless, offering structural stability and spatial harmony to the wearer."
    ],
    quote: "A garment is simply personal architecture. It must provide shelter, express structure, and relate to the space it occupies."
  },
  {
    id: 's3',
    category: 'Craftsmanship',
    title: 'Inspired by Nature',
    subtitle: 'Drafting jewellery directly from organic eroded coastal shapes.',
    date: 'April 2026',
    author: 'Elena Rossi',
    img: import.meta.env.BASE_URL + 'assets/collection_jewellery.png',
    readTime: '5 Min Read',
    paragraphs: [
      "Along the wind-swept coastlines of Devon and Cornwall, the tides perform a daily masterclass in design. Pebbles are rounded to soft, asymmetrical curves, cliffs are chiseled into dramatic geometry, and sands are left with fluid ripples. These natural, imperfect shapes form the visual inspiration behind VanTelle's fine jewellery.",
      "Rather than crafting jewelry with machine-perfect symmetry, our studio sculpts links, pendants, and rings by hand in raw wax. This preserves natural textures, uneven surfaces, and organic asymmetry. When cast in solid gold, the objects retain a tactile warmth that mirrors weathered stones found on the beach.",
      "Every ring and bracelet is finished with sandblasted details and subtle polishes, creating objects that feel organic, ancient, and deeply intimate."
    ],
    quote: "Nature is the ultimate sculptor. Our role is simply to capture its temporal transitions in precious metals."
  },
  {
    id: 's4',
    category: 'Curation',
    title: 'Objects of Desire',
    subtitle: 'Selecting ceramics that elevate light and shadow within minimal environments.',
    date: 'March 2026',
    author: 'Editorial Board',
    img: import.meta.env.BASE_URL + 'assets/hovofaber_collab.png',
    readTime: '4 Min Read',
    paragraphs: [
      "A room is defined not by its walls, but by the objects that capture its light. In minimalist interiors, a single hand-thrown ceramic vase or carved travertine bowl acts as a visual anchor, casting soft shadows and drawing the eye to textures of clay and stone.",
      "We curate home objects that celebrate raw minerals. Working with stoneware potteries in the UK and marble carvers in Carrara, we select pieces that are unpolished, retaining their earth-born textures and soft cream hues.",
      "These objects of desire are intended to stand alone, changing character as the sunlight moves across the room from morning to dusk."
    ],
    quote: "An object is successful when it invites you to touch it, and rewards you with the memory of the earth it came from."
  },
  {
    id: 's5',
    category: 'Personalisation',
    title: 'Made to be Remembered',
    subtitle: 'How AI algorithms collaborate with human body measurements to create a lasting garment.',
    date: 'February 2026',
    author: 'Tech & Style Lab',
    img: import.meta.env.BASE_URL + 'assets/vantelle_hero.png',
    readTime: '7 Min Read',
    paragraphs: [
      "The traditional tailoring pattern was hand-drawn in chalk. Today, VanTelle's AI personalization engine drafts that pattern using multidimensional digital inputs. By analyzing fit preferences, shoulder angles, and styling habits, we map a unique garment architecture that fits you perfectly.",
      "This digital blueprint is then sent directly to our local tailoring partners. Because we only manufacture garments that have been purchased and mapped, we eliminate raw material waste and ensure that every item is built specifically to be worn and remembered.",
      "This is the future of intelligent luxury: reducing excess while maximizing personalization."
    ],
    quote: "Intelligence is not about complex machines; it is about creating objects that fit your unique existence with absolute precision."
  }
];

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState(null);
  const featuredPost = JOURNAL_POSTS[0];
  const regularPosts = JOURNAL_POSTS.slice(1);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  return (
    <div 
      className="fade-in" 
      style={{ 
        paddingTop: 'calc(var(--header-height) + 2rem)',
        position: selectedStory ? 'relative' : 'static',
        zIndex: selectedStory ? 1200 : 'auto'
      }}
    >
      
      {/* Editorial Header */}
      <section style={{ padding: '4rem 0 2rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="editorial-subtitle">VanTelle Journal</span>
          <h1 className="editorial-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
            Stories & Narratives
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
            Unveiling the heritage, inspirations, design theories, and artisan collaborations that define the VanTelle ecosystem.
          </p>
        </div>
      </section>

      {/* Featured Cover Story */}
      <section style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              cursor: 'pointer',
              borderBottom: '1px solid rgba(26,26,26,0.06)',
              paddingBottom: '4rem'
            }}
            className="stories-featured"
            onClick={() => handleStoryClick(featuredPost)}
          >
            {/* Visual Cover */}
            <div style={{ aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden', backgroundColor: 'var(--color-bg-warm)' }}>
              <img 
                src={featuredPost.img} 
                alt={featuredPost.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-smooth)' }} 
                className="featured-cover-img"
              />
            </div>
            
            {/* Editorial content */}
            <div>
              <span className="editorial-subtitle">{featuredPost.category}</span>
              <h2 style={{ fontSize: '2.8rem', fontFamily: 'var(--font-serif)', margin: '0.5rem 0 1.5rem 0', lineHeight: '1.15' }}>
                {featuredPost.title}
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                {featuredPost.subtitle}
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>
                <span>By {featuredPost.author}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            {regularPosts.map(post => (
              <div 
                key={post.id} 
                className="luxury-card"
                onClick={() => handleStoryClick(post)}
              >
                <div className="luxury-card-img-wrapper" style={{ aspectRatio: '16/10' }}>
                  <img src={post.img} alt={post.title} className="luxury-card-img" />
                </div>
                <div className="luxury-card-content" style={{ padding: '1.5rem 0' }}>
                  <span className="luxury-card-subtitle">{post.category}</span>
                  <h3 className="luxury-card-title" style={{ fontSize: '1.6rem', marginTop: '0.5rem' }}>{post.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', lineHeight: '1.6' }}>
                    {post.subtitle}
                  </p>
                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '1.5rem' }}>
                    <span>By {post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE EDITORIAL READER DRAWER */}
      {selectedStory && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(26, 26, 26, 0.4)',
            backdropFilter: 'blur(5px)',
            zIndex: 1100,
            display: 'flex',
            justifyContent: 'flex-end',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setSelectedStory(null)}
        >
          {/* Drawer container */}
          <div 
            style={{
              width: '100%',
              maxWidth: '800px',
              height: '100%',
              backgroundColor: 'var(--color-bg-light)',
              overflowY: 'auto',
              padding: '4rem 4rem',
              position: 'relative',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              animation: 'slideLeft 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedStory(null);
              }}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                zIndex: 100
              }}
            >
              <X size={22} strokeWidth={1.5} />
            </button>

            {/* Editorial Content */}
            <div style={{ maxWidth: '650px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Category, Title, Subtitle */}
              <div>
                <span className="editorial-subtitle" style={{ color: 'var(--color-accent-gold)' }}>
                  {selectedStory.category}
                </span>
                <h2 style={{ fontSize: '2.6rem', fontFamily: 'var(--font-serif)', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                  {selectedStory.title}
                </h2>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {selectedStory.subtitle}
                </p>
              </div>

              {/* Media banner metadata */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '2rem', 
                  borderTop: '1px solid rgba(26,26,26,0.06)', 
                  borderBottom: '1px solid rgba(26,26,26,0.06)', 
                  padding: '1rem 0',
                  fontSize: '0.8rem',
                  color: 'var(--color-text-muted)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <User size={14} />
                  <span>{selectedStory.author}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={14} />
                  <span>{selectedStory.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={14} />
                  <span>{selectedStory.readTime}</span>
                </div>
              </div>

              {/* Full width picture */}
              <div style={{ aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden', backgroundColor: 'var(--color-bg-warm)' }}>
                <img src={selectedStory.img} alt={selectedStory.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Pull Quote */}
              <div 
                style={{ 
                  borderLeft: '2px solid var(--color-accent-gold)', 
                  paddingLeft: '1.5rem', 
                  margin: '1rem 0', 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '1.4rem', 
                  fontStyle: 'italic',
                  lineHeight: '1.5',
                  color: 'var(--color-text-dark)'
                }}
              >
                "{selectedStory.quote}"
              </div>

              {/* Main Body Paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {selectedStory.paragraphs.map((p, idx) => (
                  <p key={idx} style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-text-muted)', fontWeight: '300' }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Footer divider */}
              <div style={{ display: 'flex', justifyContent: 'center', margin: '3rem 0 1rem 0', borderTop: '1px solid rgba(26,26,26,0.06)', paddingTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-gold)' }}>
                  <Sparkles size={16} />
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '500' }}>
                    End of Curation
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <style>{`
        .stories-featured:hover .featured-cover-img {
          transform: scale(1.02);
        }
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @media (max-width: 900px) {
          .stories-featured {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          div[style*="width: 100%"][style*="maxWidth: 800px"] {
            padding: 3rem 1.5rem !important;
          }
        }
      `}</style>

    </div>
  );
}
