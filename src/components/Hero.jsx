import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Cpu, Play } from 'lucide-react';

export default function Hero() {
  // Mouse tracking for the premium dashboard parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Maps mouse movement to 3D tilt rotation
  const rotateX = useTransform(y, [-300, 300], [12, -12]);
  const rotateY = useTransform(x, [-300, 300], [-12, 12]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle atmospheric light gradients */}
      <div className="glow-spot glow-blue" style={{ top: '10%', right: '5%', opacity: 0.05 }} />
      <div className="glow-spot glow-teal" style={{ bottom: '5%', left: '5%', opacity: 0.04 }} />

      <div className="container-premium hero-grid">

        {/* Left Side: Editorial Typography & Copy */}
        <div className="hero-content">

          {/* Subtle Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-tagline"
          >
            <span className="hero-tagline-dot" />
            <span className="hero-tagline-text">
              Ecosistema de Gestión de Conocimiento
            </span>
          </motion.div>

          {/* Headline - Editorial massive serif & modern sans-serif mixture */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="title-massive hero-title"
          >
            La evolución del <br />
            <span className="text-serif" style={{ color: 'var(--color-blue)', fontStyle: 'italic', fontWeight: '400' }}>aprendizaje</span> <br />
            en las organizaciones.
          </motion.h1>

          {/* Sophisticated Value Prop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-desc"
          >
            Provenimos del mundo académico. Desarrollamos soluciones de e-learning personalizadas, píldoras formativas y simuladores con Inteligencia Artificial con un foco absoluto en los resultados de tu equipo. Nuestro objetivo es lograr que las personas vivan una
            excelente experiencia con cada diseño formativo.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hero-actions"
          >
            <a
              href="#contacto"
              className="btn-premium btn-primary"
              style={{ display: 'inline-flex', gap: '0.5rem' }}
            >
              Comenzar Ahora
              <ArrowUpRight size={14} />
            </a>

            <a
              href="#courses"
              className="btn-premium btn-secondary"
              style={{ display: 'inline-flex', gap: '0.5rem' }}
            >
              <Play size={10} style={{ fill: 'currentColor' }} /> Ver Cursos
            </a>
          </motion.div>

          {/* Quick Stats Banner under hero content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="hero-stats"
          >
            <div className="hero-stat-item">
              <h4>+100k</h4>
              <p>Alumnos Capacitados</p>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <h4>200+</h4>
              <p>Proyectos Activos</p>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <h4>-60%</h4>
              <p>Costos vs. presencialidad</p>
            </div>
            <div className="hero-stat-item">
              <h4>24/7</h4>
              <p>Disponibilidad</p>
            </div>
            <div className="hero-stat-item">
              <h4>100%</h4>
              <p>Trazabilidad</p>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Tesla-inspired telemetry analytical dashboard */}
        <div className="hero-visual">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="hero-dashboard"
          >

            {/* Header: Watch detail & minimal layout */}
            <div className="dashboard-header">
              <div className="dashboard-status">
                <span className="dashboard-status-pulse" />
                <span className="dashboard-status-text">SISTEMA ACTIVO</span>
              </div>
              <span className="dashboard-version">v3.54-IA</span>
            </div>

            {/* Middle: Graph Visualization (SVG line chart) */}
            <div className="dashboard-body">

              {/* Telemetry Stat Text */}
              <div>
                <span className="dashboard-stat-label">Índice de Retención del Conocimiento</span>
                <div className="dashboard-stat-value-group">
                  <span className="dashboard-stat-value">94.8%</span>
                  <span className="dashboard-stat-badge">+14.2% IA target</span>
                </div>
              </div>

              {/* Precise Vector Curve */}
              <div className="dashboard-chart-container">
                <svg viewBox="0 0 300 120" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <linearGradient id="gradient-teal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3D9D8B" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#3D9D8B" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="300" y2="30" stroke="#f8f8f8" strokeWidth="1" />
                  <line x1="0" y1="60" x2="300" y2="60" stroke="#f8f8f8" strokeWidth="1" />
                  <line x1="0" y1="90" x2="300" y2="90" stroke="#f8f8f8" strokeWidth="1" />

                  {/* Gradient Area under curve */}
                  <path
                    d="M0 110 Q 50 80, 100 85 T 200 40 T 300 20 L 300 120 L 0 120 Z"
                    fill="url(#gradient-teal)"
                  />

                  {/* Blue base line */}
                  <path
                    d="M0 110 Q 50 80, 100 85 T 200 40 T 300 20"
                    fill="none"
                    stroke="#245A85"
                    strokeWidth="1.5"
                  />

                  {/* Teal AI overlay line */}
                  <path
                    d="M0 100 C 60 70, 120 40, 200 25 S 260 10, 300 5"
                    fill="none"
                    stroke="#3D9D8B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Pulsing focal nodes */}
                  <circle cx="200" cy="25" r="4" fill="#3D9D8B" />
                  <circle cx="300" cy="5" r="5" fill="#61CE70" />
                </svg>
              </div>

            </div>

            {/* Bottom: Mini Floating features metrics */}
            <div className="dashboard-footer">

              <div className="dashboard-footer-item">
                <div className="dashboard-footer-item-label">
                  <ShieldCheck size={11} className="contact-widget-icon-blue" />
                  <span>Compliance</span>
                </div>
                <span className="dashboard-footer-item-val">Trazabilidad 100%</span>
              </div>

              <div className="dashboard-footer-item">
                <div className="dashboard-footer-item-label">
                  <Cpu size={11} className="contact-widget-icon-teal" />
                  <span>Escenario IA</span>
                </div>
                <span className="dashboard-footer-item-val">Activo & Dinámico</span>
              </div>

            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
