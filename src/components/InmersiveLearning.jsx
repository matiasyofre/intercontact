import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Zap } from 'lucide-react';

export default function InmersiveLearning() {
  return (
    <section id="inmersive" className="section-padding" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-subtle)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      
      {/* Background glow atmospheric highlights */}
      <div className="glow-spot glow-blue" style={{ top: '20%', left: '10%', opacity: 0.04 }} />
      <div className="glow-spot glow-teal" style={{ bottom: '20%', right: '10%', opacity: 0.04 }} />

      <div className="container-premium inmersive-grid">
        
        {/* Left Side: CSS/SVG Tablet and Mobile devices floating */}
        <div className="inmersive-visuals">
          
          {/* Subtle Ambient circular lighting ring under devices */}
          <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-[#3D9D8B]/20 animate-[spin_60s_linear_infinite] pointer-events-none" style={{ position: 'absolute' }} />

          {/* Device 1: Tablet Mockup (CSS) */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 1 }
            }}
            className="relative w-[360px] md:w-[440px] aspect-[4/3] bg-white border-[10px] border-[#121212] rounded-[24px] shadow-[0_35px_80px_rgba(0,0,0,0.06)] overflow-hidden z-10"
            style={{ position: 'relative' }}
          >
            {/* Tablet Camera dot */}
            <div className="absolute top-1 right-[50%] translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#333] z-30" style={{ position: 'absolute' }} />

            {/* Tablet Screen Content */}
            <div className="relative w-full h-full bg-[#f9f9f9] p-4 flex flex-col justify-between" style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
              
              {/* Internal Mock Header */}
              <div className="dashboard-header" style={{ paddingBottom: '0.5rem', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '8px', tracking: '0.2em', fontWeight: 600 }}>CAMPUS VIRTUAL</span>
                <span style={{ fontSize: '7px', color: 'var(--color-gray)' }}>Modulo 4: Gestión de Riesgos</span>
              </div>

              {/* Video Class Mockup */}
              <div className="my-2 bg-[#121212] rounded-lg aspect-video w-full flex items-center justify-center relative overflow-hidden group" style={{ position: 'relative', display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', background: '#121212', borderRadius: '8px', margin: '0.5rem 0' }}>
                
                {/* Simulated Telemetry HUD over video */}
                <div style={{ position: 'absolute', top: '8px', left: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '7px', fontFamily: 'monospace', color: '#ffffff' }}>
                  ● CLASE EN VIVO
                </div>

                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-blue)', cursor: 'pointer', zIndex: 10 }}>
                  <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24" style={{ width: '12px', height: '12px' }}>
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </div>

                <div style={{ position: 'absolute', bottom: '8px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '7px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.8)' }}>
                  <span>Intercontact Player v1.2</span>
                  <span>14:32 / 45:00</span>
                </div>
              </div>

              {/* Progress & Modules List inside Mock screen */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '0.4rem' }}>
                  <span style={{ fontSize: '6px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray)', display: 'block' }}>Avance General</span>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--color-blue)' }}>78%</span>
                </div>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '0.4rem' }}>
                  <span style={{ fontSize: '6px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray)', display: 'block' }}>Examen Compliance</span>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--color-accent-green)' }}>Aprobado</span>
                </div>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '0.4rem' }}>
                  <span style={{ fontSize: '6px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray)', display: 'block' }}>Píldoras Vistas</span>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--color-text-dark)' }}>18 / 20</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Device 2: Mobile Phone Mockup (CSS) */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true }}
            animate={{ y: [0, -14, 0] }}
            transition={{ 
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
              opacity: { duration: 1 }
            }}
            className="absolute right-[5%] md:right-[10%] bottom-[-5%] w-[160px] md:w-[190px] aspect-[9/19] bg-white border-[8px] border-[#121212] rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.08)] overflow-hidden z-20"
            style={{ position: 'absolute' }}
          >
            {/* Speaker line & camera dot */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '48px', height: '14px', backgroundColor: '#121212', borderBottomLeftRadius: '10px', zIndex: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '20px', height: '2px', borderRadius: '10px', backgroundColor: '#333' }} />
            </div>

            {/* Mobile Screen Content */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', width: '100%', backgroundColor: '#ffffff', padding: '1.5rem 0.75rem 0.75rem 0.75rem', justifyContent: 'space-between' }}>
              
              {/* Mock Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.4rem', borderBottom: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: '7px', fontWeight: 'bold' }}>INTERCONTACT APP</span>
                <span style={{ fontSize: '6px', color: 'var(--color-teal)', fontFamily: 'monospace' }}>100% SYNC</span>
              </div>

              {/* Progress Ring mock */}
              <div style={{ margin: '0.4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.4rem', backgroundColor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                <span style={{ fontSize: '6px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray)', marginBottom: '2px' }}>Módulo Actual</span>
                <div style={{ position: 'relative', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                    <path
                      strokeWidth="3"
                      stroke="#f0f0f0"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      strokeDasharray="65, 100"
                      strokeWidth="3"
                      strokeLinecap="round"
                      stroke="var(--color-teal)"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span style={{ position: 'absolute', fontSize: '8px', fontFamily: 'monospace', fontWeight: 'bold' }}>65%</span>
                </div>
              </div>

              {/* Learning Pill list mock */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <div style={{ border: '1px solid var(--color-border)', padding: '0.3rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)' }} />
                  <span style={{ fontSize: '6px', fontWeight: 500 }}>1. Inducción a la Cultura</span>
                </div>
                <div style={{ border: '1px solid var(--color-border)', padding: '0.3rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-blue)' }} />
                  <span style={{ fontSize: '6px', fontWeight: 500 }}>2. Canales y Operatoria</span>
                </div>
              </div>

              {/* Offline mode indicator */}
              <div style={{ marginTop: '0.4rem', backgroundColor: 'rgba(61,157,139,0.05)', border: '1px solid rgba(61,157,139,0.1)', borderRadius: '4px', padding: '0.25rem', display: 'flex', justifyContent: 'space-between', fontSize: '6px', color: 'var(--color-teal)' }}>
                <span>MODO OFFLINE</span>
                <span>DISPONIBLE</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Right Side: Editorial Information */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span className="hero-tagline-text" style={{ marginBottom: '0.75rem', display: 'block' }}>
            ECOSISTEMA MULTIDISPOSITIVO
          </span>
          
          <h2 className="title-large" style={{ marginBottom: '1.5rem' }}>
            E-Learning sin <br />
            <span className="text-serif" style={{ color: 'var(--color-blue)', fontStyle: 'italic', fontWeight: '400' }}>límites físicos.</span>
          </h2>

          <p className="hero-desc" style={{ marginBottom: '2.5rem' }}>
            Nuestros campus virtuales y píldoras formativas están diseñados bajo estándares tecnológicos premium que aseguran una trazabilidad impecable en teléfonos móviles, tablets y ordenadores de escritorio.
          </p>

          {/* Three key highlights */}
          <div className="inmersive-highlights-group">
            
            <div className="inmersive-highlight-item">
              <RefreshCw size={16} style={{ color: 'var(--color-teal)', flexShrink: 0 }} />
              <div className="inmersive-highlight-item-icon-title">
                <h4 className="inmersive-highlight-item-title">Sincronización Total</h4>
                <p className="inmersive-highlight-item-desc">Iniciá la clase en tu tablet y terminala en el móvil rumbo a la operación, sin interrupciones.</p>
              </div>
            </div>

            <div className="inmersive-highlight-item">
              <Zap size={16} style={{ color: 'var(--color-blue)', flexShrink: 0 }} />
              <div className="inmersive-highlight-item-icon-title">
                <h4 className="inmersive-highlight-item-title">Disponibilidad 24/7</h4>
                <p className="inmersive-highlight-item-desc">Acceso inmediato en cualquier parte del mundo. Sin límites geográficos ni logísticos.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
