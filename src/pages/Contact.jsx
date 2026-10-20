import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Send, Globe, Building } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

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
      }, 4000);
    }
  };

  return (
    <div className="fade-in" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
      
      {/* Header section */}
      <section style={{ padding: '4rem 0 2rem 0', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="editorial-subtitle">Direct Correspondence</span>
          <h1 className="editorial-title" style={{ fontSize: '3.4rem', marginBottom: '1.25rem' }}>
            Concierge & Inquiries
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            We welcome inquiries regarding bespoke curations, artisan partnerships, or collection specifications. A dedicated VanTelle liaison will reply within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content Split */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid rgba(26,26,26,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'flex-start' }} className="contact-split">
            
            {/* Left Contact & Corporate Info (Document Section 6) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <span className="editorial-subtitle">Company Details</span>
                <h2 style={{ fontSize: '2.4rem', marginBottom: '1.25rem', fontFamily: 'var(--font-serif)' }}>
                  Connect with VanTelle
                </h2>
                <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                  Whether discussing collaborations, private acquisitions, or styling inquiries, our liaison team provides discreet, personalized assistance.
                </p>
              </div>

              {/* Cards list matching Document Section 6 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Corporate Entity */}
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-bg-warm)', borderRadius: '50%', color: 'var(--color-accent-gold)', display: 'flex' }}>
                    <Building size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.2rem' }}>
                      Corporate Entity
                    </span>
                    <span style={{ fontSize: '1rem', color: 'var(--color-text-dark)', fontWeight: '500', display: 'block' }}>
                      {siteConfig.companyName}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      {siteConfig.operatingPresence}
                    </span>
                  </div>
                </div>

                {/* Corporate Email */}
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-bg-warm)', borderRadius: '50%', color: 'var(--color-accent-gold)', display: 'flex' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.2rem' }}>
                      Corporate & Concierge Email
                    </span>
                    <a href={`mailto:${siteConfig.corporateEmail}`} style={{ fontSize: '1rem', color: 'var(--color-text-dark)', fontWeight: '500' }}>
                      {siteConfig.corporateEmail}
                    </a>
                  </div>
                </div>

                {/* International Phone Contacts (India & Italy) */}
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-bg-warm)', borderRadius: '50%', color: 'var(--color-accent-gold)', display: 'flex' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.2rem' }}>
                      Telephone Contacts
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginRight: '0.5rem' }}>India:</span>
                        <a href={`tel:${siteConfig.phones.india}`} style={{ fontSize: '0.95rem', color: 'var(--color-text-dark)', fontWeight: '500' }}>
                          {siteConfig.phones.india}
                        </a>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginRight: '0.5rem' }}>Italy:</span>
                        <a href={`tel:${siteConfig.phones.italy}`} style={{ fontSize: '0.95rem', color: 'var(--color-text-dark)', fontWeight: '500' }}>
                          {siteConfig.phones.italy}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Digital Presence */}
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-bg-warm)', borderRadius: '50%', color: 'var(--color-accent-gold)', display: 'flex' }}>
                    <Globe size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.2rem' }}>
                      Official Domain
                    </span>
                    <span style={{ fontSize: '1rem', color: 'var(--color-text-dark)', fontWeight: '500' }}>
                      {siteConfig.website}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-gold)', marginLeft: '0.5rem' }}>
                      {siteConfig.websiteStatus}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Simple & Elegant Enquiry Form (Document Section 6) */}
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
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(197, 168, 128, 0.12)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 1.5rem auto',
                    color: 'var(--color-accent-gold)'
                  }}>
                    <Check size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
                    Inquiry Received
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    Thank you for reaching out. A VanTelle representative will respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '2.5rem' }}>
                    <span className="editorial-subtitle" style={{ color: 'var(--color-accent-gold)', marginBottom: '0.5rem' }}>
                      Private Correspondence
                    </span>
                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', fontWeight: '400' }}>
                      Send an Enquiry
                    </h3>
                  </div>

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
                    <label className="luxury-label">YOUR MESSAGE / PRODUCT OF INTEREST</label>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary" 
                    style={{ width: '100%', padding: '1.15rem', display: 'flex', gap: '0.6rem', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span>Submit Enquiry</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-split {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .contact-form-panel {
            padding: 2.5rem 1.5rem !important;
          }
        }
      `}</style>

    </div>
  );
}
