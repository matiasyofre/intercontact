import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check } from 'lucide-react';

export default function FinalCta() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('consultas@intercontact.com.ar');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+54 351 5 184 919');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contacto" className="final-cta-section">
      
      {/* Aurora technological sunrise gradient in the base */}
      <div className="final-cta-glow-spot-1" />
      <div className="final-cta-glow-spot-2" />

      <div className="container-premium" style={{ zIndex: 10 }}>
        
        {/* Sub title */}
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="final-cta-tagline"
        >
          HABLEMOS DE TU PROYECTO FORMATIVO
        </motion.span>

        {/* Inspirational Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="title-massive final-cta-title"
        >
          Diseñá la gestión del conocimiento <br />
          y llevá a tu equipo al <span className="text-serif" style={{ color: 'var(--color-blue)', fontStyle: 'italic', fontWeight: '400' }}>siguiente nivel.</span>
        </motion.h2>

        {/* Contact buttons row (Apple premium style) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="final-cta-widgets"
        >
          {/* Email Widget */}
          <div className="contact-widget-box">
            <Mail size={13} className="contact-widget-icon-blue" />
            <a 
              href="mailto:consultas@intercontact.com.ar" 
              className="contact-widget-link"
            >
              consultas@intercontact.com.ar
            </a>
            <button 
              onClick={copyEmail}
              className={`contact-widget-copy-btn ${copiedEmail ? 'contact-widget-copy-btn-success' : ''}`}
              title="Copiar Email"
            >
              {copiedEmail ? <Check size={10} /> : <Copy size={10} />}
            </button>
          </div>

          {/* Phone Widget */}
          <div className="contact-widget-box">
            <Phone size={13} className="contact-widget-icon-teal" />
            <a 
              href="tel:3515184919" 
              className="contact-widget-link"
            >
              +54 351 5 184 919
            </a>
            <button 
              onClick={copyPhone}
              className={`contact-widget-copy-btn ${copiedPhone ? 'contact-widget-copy-btn-success' : ''}`}
              title="Copiar Teléfono"
            >
              {copiedPhone ? <Check size={10} /> : <Copy size={10} />}
            </button>
          </div>
        </motion.div>

        {/* Emotional and beautiful footer closing text */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.65 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="final-cta-footprint"
        >
          MÁS DE 200 PROYECTOS FORMATIVOS EXITOSOS.
          <br />
          100% GARANTÍA DE EXCELENCIA PEDAGÓGICA.
        </motion.p>

      </div>
    </section>
  );
}
