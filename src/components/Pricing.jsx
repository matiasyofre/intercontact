import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Catálogo & Compliance',
      subtitle: 'Contenidos Listos',
      desc: 'Capacitación ágil e inmediata para tu organización. Acceso rápido a cursos de cumplimiento obligatorios (compliance) y catálogo estructurado.',
      price: 'Cotizar',
      term: 'Según volumen de colaboradores',
      cta: 'Solicitar Cotización',
      features: [
        'Acceso a catálogo de cumplimiento obligatorio',
        'Cursos listos para usar sin demoras',
        'Campus virtual Moodle estándar',
        'Trazabilidad legal de compliance básica',
        'Soporte digital y técnico vía email'
      ],
      featured: false,
      accent: '#7A7A7A'
    },
    {
      name: 'Diseño Pedagógico',
      subtitle: 'Producción Personalizada',
      desc: 'Producción de diseños formativos a la medida exacta de tus procesos operativos, comerciales y cultura interna de la empresa.',
      price: 'A Medida',
      term: 'Consultoría y Plan de Grabación',
      cta: 'Iniciar Proyecto',
      features: [
        'Diseños formativos 100% personalizados',
        'Producción integral de video clases',
        'Videos explicativos, comerciales y promocionales',
        'Trazabilidad de avance de perfiles integrada',
        'Soporte estratégico y soporte mensual continuo'
      ],
      featured: true,
      accent: '#245A85'
    },
    {
      name: 'Ecosistema de IA',
      subtitle: 'Innovación Aplicada',
      desc: 'Nuestra solución de máxima gama técnica. Incluye campus virtuales premium a medida, integraciones API y simuladores IA avanzados.',
      price: 'Premium',
      term: 'Ecosistema Corporativo Integral',
      cta: 'Agendar Reunión',
      features: [
        'Simulador de escenarios críticos con IA',
        'Implementación de Campus Virtuales a medida',
        'Píldoras dinámicas de Microlearning integradas',
        'API de integración transparente con tu ERP/HR',
        'Consultoría estratégica de diseño instruccional',
        'Soporte y calibración prioritaria 24/7'
      ],
      featured: false,
      accent: '#3D9D8B'
    }
  ];

  return (
    <section id="pricing" className="section-padding" style={{ backgroundColor: 'var(--color-bg-subtle)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container-premium">
        
        {/* Header */}
        <div className="section-header-editorial">
          <span>MODELOS DE INTEGRACIÓN</span>
          <h2 className="title-large">
            Diseñamos a la medida <br />
            <span className="text-serif" style={{ color: 'var(--color-blue)', fontStyle: 'italic', fontWeight: '400' }}>de tus necesidades.</span>
          </h2>
          <p>
            Creemos en las relaciones corporativas transparentes y sólidas. Cotizamos cada proyecto según tu volumen de alumnos, requerimientos de integración y simuladores de IA.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`pricing-card ${plan.featured ? 'pricing-card-featured' : ''}`}
            >
              {/* Highlight Tag */}
              {plan.featured && (
                <span className="pricing-card-featured-badge">
                  RECOMENDADO
                </span>
              )}

              <div>
                {/* Plan Header */}
                <span className="pricing-card-label">
                  {plan.subtitle}
                </span>
                
                <h3 className="pricing-card-title" style={{ fontSize: '1.6rem' }}>
                  {plan.name}
                </h3>
                
                <p className="pricing-card-desc">
                  {plan.desc}
                </p>

                {/* Simulated Pricing Text (luxury way) */}
                <div className="pricing-card-budget-box">
                  <span className="pricing-card-budget-label">PRESUPUESTO</span>
                  <span className="pricing-card-budget-val">
                    {plan.price}
                  </span>
                  <span className="pricing-card-budget-term">
                    <Info size={10} /> {plan.term}
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="pricing-features-list">
                  {plan.features.map((feat) => (
                    <div key={feat} className="pricing-feature-check-item">
                      <span className="pricing-feature-check-item-icon">
                        <Check size={10} style={{ color: 'var(--color-teal)' }} />
                      </span>
                      <span className="pricing-feature-check-item-text">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Button */}
              <a
                href="#contacto"
                className={`pricing-card-btn ${plan.featured ? 'pricing-card-btn-featured' : 'pricing-card-btn-standard'}`}
              >
                {plan.cta}
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
