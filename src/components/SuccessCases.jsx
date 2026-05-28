import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export default function SuccessCases() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Gracias al ecosistema de Intercontact, logramos estructurar todo el Onboarding y cumplimiento ético operativo de 50 filiales. No solo optimizamos los traslados y la logística presencial, sino que redujimos un 60% nuestros costos globales sin detener la operación de nuestros equipos.",
      author: "Elena de la Serna",
      role: "Directora de Operaciones & Talento en Nexus Co.",
      metrics: "60% Ahorro Auditado",
      caseStudy: "Caso de Éxito de Compliance Global",
      accent: "#245A85"
    },
    {
      quote: "El simulador de escenarios críticos con IA fue una revolución. Los gerentes y el equipo operativo pudieron ensayar protocolos de seguridad complejos antes de ingresar a la planta real. El índice de error operativo cayó a niveles históricamente nulos.",
      author: "Martín Benavídez",
      role: "VP de Mantenimiento & Seguridad en Lexus Digital",
      metrics: "0% Error Operativo",
      caseStudy: "Simulador de Escenarios Críticos",
      accent: "#3D9D8B"
    },
    {
      quote: "La personalización y la trazabilidad al 100% de los campus virtuales nos brindó total tranquilidad en auditorías regulatorias severas. El soporte estratégico y el acompañamiento en todo el proceso de formación de Intercontact fue insuperable.",
      author: "Sofía Reinhardt",
      role: "Gerente de Compliance Regulatorio en Global Insurance",
      metrics: "100% Trazabilidad Legal",
      caseStudy: "Estrategia de Cumplimiento Normativo",
      accent: "#61CE70"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#ffffff' }}>
      
      {/* Background soft glowing spot */}
      <div className="glow-spot glow-blue" style={{ top: '30%', right: '5%', opacity: 0.02 }} />

      <div className="container-premium" style={{ zIndex: 10 }}>
        
        {/* Top Header Row */}
        <div className="testimonials-header-row">
          <div className="section-header-editorial" style={{ marginBottom: 0 }}>
            <span>CASOS DE ÉXITO CORPORATIVOS</span>
            <h2 className="title-large">
              La transformación en <br />
              <span className="text-serif" style={{ color: 'var(--color-blue)', fontStyle: 'italic', fontWeight: '400' }}>primera persona.</span>
            </h2>
          </div>

          {/* Minimal Controls */}
          <div className="testimonials-controls">
            <button 
              onClick={handlePrev}
              className="control-btn"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="control-btn"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Content Area */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="testimonials-grid"
            >
              {/* Giant quote mark and citation text */}
              <div className="testimonial-body">
                
                {/* Visual case study tag */}
                <div className="testimonial-case-study">
                  <span className="testimonial-case-study-dot" style={{ backgroundColor: testimonials[activeIndex].accent }} />
                  <span className="testimonial-case-study-text">
                    {testimonials[activeIndex].caseStudy}
                  </span>
                </div>

                <Quote size={40} style={{ color: 'var(--color-teal)', opacity: 0.15, marginBottom: '1.5rem', strokeWidth: '1.25' }} />

                <blockquote className="testimonial-quote">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author credentials */}
                <div>
                  <h4 className="testimonial-author-title">{testimonials[activeIndex].author}</h4>
                  <p className="testimonial-author-role">{testimonials[activeIndex].role}</p>
                </div>

              </div>

              {/* Side Metric Panel (High fashion card style) */}
              <div className="testimonial-metric-box">
                <div className="testimonial-metric-card">
                  <div>
                    <span className="metric-card-label">MÉTRICA AUDITADA</span>
                    <h3 className="metric-card-val">
                      {testimonials[activeIndex].metrics}
                    </h3>
                  </div>

                  <div className="metric-card-footer">
                    <p className="metric-card-footer-desc">
                      El impacto real de Intercontact medido y verificado a través de reportes corporativos oficiales.
                    </p>
                    <div className="metric-card-footer-status">
                      <ShieldCheck size={11} style={{ marginRight: '4px' }} /> RESULTADO TRAZABLE
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
