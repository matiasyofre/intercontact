import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Users, CheckCircle2 } from 'lucide-react';

export default function Community() {
  const [activeNode, setActiveNode] = useState(null);

  const activeStudents = [
    {
      id: 'axion',
      name: 'Equipo de Planta',
      location: 'Axion Energy (Buenos Aires)',
      action: 'Certificado de Seguridad & Compliance Operativo Emitido',
      x: 320,
      y: 195,
      avatar: 'A'
    },
    {
      id: 'aguas',
      name: 'Personal Técnico',
      location: 'Aguas Cordobesas (Córdoba)',
      action: 'Mapeo de Inducción de Herramientas Internas Completado',
      x: 290,
      y: 180,
      avatar: 'AC'
    },
    {
      id: 'edemsa',
      name: 'Operadores de Red',
      location: 'Edemsa (Mendoza)',
      action: 'Simulador IA: Resolución de Falla en Red Eléctrica 98%',
      x: 270,
      y: 190,
      avatar: 'E'
    },
    {
      id: 'sancor',
      name: 'Asesores Comerciales',
      location: 'Sancor Seguros (Santa Fe)',
      action: 'Curso de Soft Skills Comerciales & Atención Aprobado',
      x: 310,
      y: 175,
      avatar: 'S'
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-border)' }}>
      
      {/* Light atmospheric blue blur */}
      <div className="glow-spot glow-blue" style={{ top: '40%', right: '15%', opacity: 0.03 }} />

      <div className="container-premium community-grid">
        
        {/* Left Side: Copywriting */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span className="hero-tagline-text" style={{ marginBottom: '0.75rem', display: 'block' }}>
            RED GLOBAL DE CONOCIMIENTO
          </span>
          <h2 className="title-large" style={{ marginBottom: '1.5rem' }}>
            Ecosistema formativo <br />
            <span className="text-serif" style={{ color: 'var(--color-teal)', fontStyle: 'italic', fontWeight: '400' }}>sin fronteras.</span>
          </h2>
          
          <p className="hero-desc" style={{ marginBottom: '2.5rem' }}>
            Conectamos a tus colaboradores, franquiciados y proveedores a través de una red ágil y centralizada de gestión del conocimiento. Sin importar la distancia geográfica, aseguramos estándares de capacitación homogéneos y trazabilidad regulatoria unificada.
          </p>

          <div className="community-highlights-list">
            <div className="community-highlight-item">
              <span className="community-highlight-item-icon">
                <Globe size={11} className="contact-widget-icon-teal" />
              </span>
              <span className="community-highlight-item-text">Cobertura Iberoamericana Total</span>
            </div>
            <div className="community-highlight-item">
              <span className="community-highlight-item-icon">
                <Users size={11} className="contact-widget-icon-blue" />
              </span>
              <span className="community-highlight-item-text">Homogeneización de Estándares</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive global grid pulse map */}
        <div className="community-map-visual">
          
          {/* Map Outer Box */}
          <div className="community-map-card">
            
            {/* Header */}
            <div className="community-map-header">
              <span className="community-map-title">Monitoreo de Actividad Global</span>
              <span className="community-map-online-counter">
                <span className="online-counter-pulse" /> NODOS EN LÍNEA: {activeStudents.length}
              </span>
            </div>

            {/* Map Vector & coordinates grid representing Latam + Europe outline in abstract geometric grids */}
            <div className="community-map-interactive-area">
              <svg viewBox="0 0 800 300" style={{ width: '100%', height: '100%', opacity: 0.6 }}>
                {/* Thin abstract longitude lines */}
                <line x1="100" y1="0" x2="100" y2="300" stroke="#eaeaea" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="200" y1="0" x2="200" y2="300" stroke="#eaeaea" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="300" y1="0" x2="300" y2="300" stroke="#eaeaea" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="400" y1="0" x2="400" y2="300" stroke="#eaeaea" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="500" y1="0" x2="500" y2="300" stroke="#eaeaea" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="600" y1="0" x2="600" y2="300" stroke="#eaeaea" strokeWidth="0.5" strokeDasharray="2,2" />
                
                {/* Abstract minimal lines connecting South America (left bottom) to Spain (top right) */}
                <path 
                  d="M 290 180 C 350 140, 480 100, 580 75" 
                  fill="none" 
                  stroke="rgba(36, 90, 133, 0.15)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4,4"
                />

                {/* Land masses references outlined in tiny refined geometric shapes */}
                {/* South America mockup path */}
                <path d="M 250 110 L 320 160 L 300 240 L 260 210 Z" fill="#eaeaea" opacity="0.3" stroke="#e0e0e0" strokeWidth="0.5" />
                {/* Southern Europe mockup path */}
                <path d="M 540 60 L 600 70 L 590 100 L 560 90 Z" fill="#eaeaea" opacity="0.3" stroke="#e0e0e0" strokeWidth="0.5" />
              </svg>

              {/* Pulsing interactive nodes overlayed absolute coordinates */}
              {activeStudents.map((node) => (
                <div 
                  key={node.id}
                  style={{
                    position: 'absolute',
                    left: `${(node.x / 800) * 100}%`,
                    top: `${(node.y / 300) * 100}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <button
                    onClick={() => setActiveNode(node.id === activeNode ? null : node.id)}
                    style={{
                      position: 'relative',
                      width: '16px',
                      height: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    aria-label={`Node ${node.location}`}
                  >
                    {/* Ripple rings */}
                    <span style={{ position: 'absolute', width: '14px', height: '14px', backgroundColor: 'rgba(61,157,139,0.2)', borderRadius: '50%', animation: 'ping 1.5s infinite' }} />
                    <span style={{ position: 'relative', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-teal)', border: '1px solid #ffffff', zIndex: 10, display: 'block' }} />
                  </button>

                  {/* Tooltip Popup using AnimatePresence */}
                  <AnimatePresence>
                    {(activeNode === node.id || activeNode === null) && activeNode === node.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: -60, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '210px',
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--color-border)',
                          borderRadius: '12px',
                          padding: '0.75rem',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                          zIndex: 30
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                          <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-blue)', color: '#ffffff', fontWeight: 'bold', fontSize: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {node.avatar}
                          </span>
                          <div>
                            <p style={{ fontSize: '9px', fontWeight: 'bold', color: 'var(--color-text-dark)' }}>{node.name}</p>
                            <p style={{ fontSize: '7px', color: 'var(--color-gray)' }}>{node.location}</p>
                          </div>
                        </div>
                        <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '0.4rem', display: 'flex', alignItems: 'flex-start', gap: '0.25rem' }}>
                          <CheckCircle2 size={10} style={{ color: 'var(--color-accent-green)', flexShrink: 0, marginTop: '0.1rem' }} />
                          <p style={{ fontSize: '8px', color: 'var(--color-gray)', lineHeight: '1.2' }}>
                            {node.action}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

            </div>

            {/* Instruction tooltip caption */}
            <div className="community-map-footer">
              <span>HACÉ CLIC EN LOS NODOS PARA VER LA TELEMETRÍA</span>
              <span>LIVE TRAFFIC DATA</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
