import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ecosistema', href: '#features' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Cursos', href: '#courses' },
    { name: 'Simulador IA', href: '#ai-personalization' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-premium navbar-container">

        {/* Brand Logo - Luxury Serif */}
        <a href="#" className="navbar-brand">
          <span className="navbar-brand-title">
            INTERCONTACT
          </span>
          <span className="navbar-brand-subtitle">
            E-Learning 360°
          </span>
        </a>

        {/* Desktop Navigation - Wide space, thin fonts */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="navbar-actions">
          <a
            href="#contacto"
            className="navbar-btn-contact"
          >
            Contacto <ArrowRight size={11} />
          </a>

          {/* Toggle */}
          <button
            className="navbar-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-menu-link"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <p className="navbar-link" style={{ fontSize: '9px', marginBottom: '0.5rem' }}>Hablemos de tu proyecto</p>
            <a href="mailto:consultas@intercontact.com.ar" style={{ fontSize: '15px', color: 'var(--color-blue)', fontWeight: '500' }}>
              consultas@intercontact.com.ar
            </a>
            <a href="tel:3515184919" style={{ fontSize: '12px', color: 'var(--color-gray)', marginTop: '0.25rem' }}>
              +54 351 5 184 919
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
