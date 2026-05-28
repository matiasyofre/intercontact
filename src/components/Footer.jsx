import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export default function Footer() {
  const [lang, setLang] = useState('ES');

  return (
    <footer className="footer">
      <div className="container-premium">
        
        {/* Footer grid structure */}
        <div className="footer-grid">
          
          {/* Brand block (Cols 1-4) */}
          <div className="footer-brand-column">
            <a href="#" className="navbar-brand" style={{ marginBottom: '1.5rem' }}>
              <span className="navbar-brand-title">
                INTERCONTACT
              </span>
              <span className="navbar-brand-subtitle">
                E-Learning 360°
              </span>
            </a>
            <p className="footer-brand-desc">
              Soluciones e-learning de precisión dentro de un ecosistema de gestión del conocimiento con foco en resultados reales.
            </p>
          </div>

          {/* Column 2: Soluciones (Cols 5-6) */}
          <div>
            <h4 className="footer-links-column-title">
              Soluciones
            </h4>
            <div className="footer-links-list">
              <a href="#features" className="footer-link">Diseños Formativos</a>
              <a href="#courses" className="footer-link">Catálogo de Cursos</a>
              <a href="#ai-personalization" className="footer-link">Simulaciones de IA</a>
              <a href="#inmersive" className="footer-link">Campus Virtuales</a>
            </div>
          </div>

          {/* Column 3: Ecosistema (Cols 7-8) */}
          <div>
            <h4 className="footer-links-column-title">
              Ecosistema
            </h4>
            <div className="footer-links-list">
              <a href="#features" className="footer-link">Onboarding</a>
              <a href="#features" className="footer-link">Compliance Obligatorio</a>
              <a href="#features" className="footer-link">Soft Skills</a>
              <a href="#features" className="footer-link">Capacitación Comercial</a>
            </div>
          </div>

          {/* Column 4: Contacto y Coordenadas (Cols 9-12) */}
          <div>
            <h4 className="footer-links-column-title">
              Coordenadas
            </h4>
            <div className="footer-coords-list">
              <p>Córdoba, Argentina</p>
              <a href="mailto:consultas@intercontact.com.ar" className="footer-coords-email">
                consultas@intercontact.com.ar
              </a>
              <a href="tel:3515184919" style={{ color: 'inherit' }}>
                +54 351 5 184 919
              </a>
              <p className="footer-coords-tag">Provenimos del mundo académico.</p>
            </div>
          </div>

        </div>

        {/* Bottom section line */}
        <div className="footer-bottom-line" />

        {/* Bottom Bar: Copyright, Socials, Language */}
        <div className="footer-bottom-bar">
          
          {/* Copyright */}
          <div className="footer-copyright">
            © {new Date().getFullYear()} INTERCONTACT. Todos los derechos reservados.
          </div>

          {/* Social Icons (Sleek and rounded) */}
          <div className="footer-socials">
            <a 
              href="#" 
              className="footer-social-badge"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/></svg>
            </a>
            <a 
              href="#" 
              className="footer-social-badge"
              aria-label="Twitter"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" style={{ width: '12px', height: '12px' }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/></svg>
            </a>
            <a 
              href="#" 
              className="footer-social-badge"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/></svg>
            </a>
          </div>

          {/* Custom Language Selector */}
          <div className="footer-lang-selector-group">
            <Globe size={11} style={{ color: 'var(--color-gray)' }} />
            <div className="footer-lang-selector-border-box">
              <button
                onClick={() => setLang('ES')}
                className={`footer-lang-btn ${lang === 'ES' ? 'footer-lang-btn-active' : ''}`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('EN')}
                className={`footer-lang-btn ${lang === 'EN' ? 'footer-lang-btn-active' : ''}`}
              >
                EN
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
