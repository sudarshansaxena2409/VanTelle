import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  return (
    <div className="fade-in" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
      
      {/* Header section */}
      <section style={{ padding: '4rem 0 2rem 0', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="editorial-subtitle">Let's Connect</span>
          <h1 className="editorial-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
            Concierge & Inquiries
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
            Our concierge team is available to assist you with custom orders, sizing appointments, collaboration opportunities, or general inquiries.
          </p>
        </div>
      </section>

      {/* Contact Content Split */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid rgba(26,26,26,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'flex-start' }} className="contact-split">
            
            {/* Left Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <span className="editorial-subtitle">Contact Details</span>
                <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
                <p style={{ lineHeight: '1.8' }}>
                  Please feel free to connect with us through any of the channels below. We endeavor to reply to all formal correspondence within 24 hours.
                </p>
              </div>

              {/* Cards list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-bg-warm)', borderRadius: '50%', color: 'var(--color-accent-gold)', display: 'flex' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.1em', display: 'block' }}>Email Support</span>
                    <a href="mailto:concierge@vantelle.com" style={{ fontSize: '1rem', color: 'var(--color-text-dark)', fontWeight: '500' }}>concierge@vantelle.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-bg-warm)', borderRadius: '50%', color: 'var(--color-accent-gold)', display: 'flex' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.1em', display: 'block' }}>Phone Contact</span>
                    <a href="tel:+442079460958" style={{ fontSize: '1rem', color: 'var(--color-text-dark)', fontWeight: '500' }}>+44 207 946 0958</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-bg-warm)', borderRadius: '50%', color: 'var(--color-accent-gold)', display: 'flex' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.1em', display: 'block' }}>Milano Studio Office</span>
                    <span style={{ fontSize: '1rem', color: 'var(--color-text-dark)', fontWeight: '500' }}>Corso Venezia, 12, Milano, Italy</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <span className="editorial-subtitle" style={{ marginBottom: '1rem' }}>Social Networks</span>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  <a href="#instagram" style={{ borderBottom: '1px solid transparent', paddingBottom: '0.2rem' }} className="social-link">Instagram</a>
                  <a href="#pinterest" style={{ borderBottom: '1px solid transparent', paddingBottom: '0.2rem' }} className="social-link">Pinterest</a>
                  <a href="#journal" style={{ borderBottom: '1px solid transparent', paddingBottom: '0.2rem' }} className="social-link">Journal</a>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div 
              style={{
                borderRadius: '8px',
                padding: '3.5rem',
                border: '1px solid var(--color-bg-greige)',
                backgroundColor: 'var(--color-bg-warm)'
              }}
              className="contact-form-panel"
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 0', animation: 'fadeIn 0.5s ease' }}>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(197, 168, 128, 0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    color: 'var(--color-accent-gold)'
                  }}>
                    <Check size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Message Transmitted</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    Thank you. A VanTelle styling partner will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', fontFamily: 'var(--font-serif)' }}>
                    Send a Message
                  </h3>

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

                  <div className="luxury-input-group">
                    <input 
                      type="text" 
                      name="subject" 
                      placeholder=" "
                      value={formData.subject} 
                      onChange={handleInputChange} 
                      className="luxury-input" 
                    />
                    <label className="luxury-label">SUBJECT (OPTIONAL)</label>
                  </div>

                  <div className="luxury-input-group" style={{ marginBottom: '2.5rem' }}>
                    <textarea 
                      name="message" 
                      rows="4"
                      placeholder=" "
                      value={formData.message} 
                      onChange={handleInputChange} 
                      required 
                      className="luxury-input"
                      style={{ resize: 'none' }}
                    />
                    <label className="luxury-label">YOUR INQUIRY MESSAGE</label>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary" 
                    style={{ width: '100%', padding: '1.1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span>Send Message</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .social-link:hover {
          color: var(--color-accent-gold) !important;
          border-bottom-color: var(--color-accent-gold) !important;
        }
        @media (max-width: 900px) {
          .contact-split {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .contact-form-panel {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>

    </div>
  );
}
