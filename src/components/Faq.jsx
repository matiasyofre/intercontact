import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: '¿Qué diferencia a los diseños formativos de Intercontact de un SaaS estándar?',
      a: 'Provenimos del mundo académico y tecnológico. No comercializamos contenidos genéricos o PDFs estáticos. Producimos diseños formativos personalizados a medida, videos educativos interactivos y simuladores avanzados de escenarios críticos apoyados en Inteligencia Artificial. Cada proyecto se diseña para lograr que las personas vivan una excelente experiencia y adquieran competencias duraderas.'
    },
    {
      q: '¿Cómo funciona la trazabilidad de compliance del 100%?',
      a: 'Nuestros campus virtuales registran con absoluta precisión regulatoria cada interacción, evaluación, tiempos de permanencia y finalización de los cursos obligatorios de tu empresa. Proporcionamos reportes consolidados y auditorías exportables listas para presentar ante normativas gubernamentales, aseguradoras o entes certificadores de compliance.'
    },
    {
      q: '¿En qué consisten las simulaciones de escenarios críticos con IA?',
      a: 'Modelamos situaciones organizacionales de alto riesgo o tensión (tales como fallas operativas severas en plantas industriales, crisis éticas de compliance o negociaciones comerciales críticas). La Inteligencia Artificial simula la conducta del entorno o cliente y evalúa en tiempo real las respuestas y la toma de decisiones del alumno, midiendo su eficacia operativa sin detener tus operaciones reales.'
    },
    {
      q: '¿El campus virtual personalizado se integra con sistemas existentes?',
      a: 'Sí. Desarrollamos integraciones transparentes vía API para que tu campus virtual se comunique sin fricciones con tus sistemas ERP, CRM o plataformas corporativas de recursos humanos (como SAP, Workday o SuccessFactors), permitiéndote automatizar altas de colaboradores y el seguimiento de KPIs.'
    },
    {
      q: '¿Qué nivel de acompañamiento y consultoría ofrecen?',
      a: 'Ofrecemos soporte estratégico integral y permanente. Nos involucramos desde la consultoría inicial de diseño pedagógico hasta la implementación de contenidos y la gestión posterior de la formación, calibrando constantemente las píldoras formativas para mantener los contenidos vigentes y eficaces.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#ffffff' }}>

      {/* Light glow bottom-left */}
      <div className="glow-spot glow-teal" style={{ bottom: '10%', left: '5%', opacity: 0.02 }} />

      <div className="container-premium faq-container" style={{ zIndex: 10 }}>

        {/* Section Header */}
        <div className="faq-section-header">
          <span>PREGUNTAS FRECUENTES</span>
          <h2 className="title-large">
            Resolviendo tus dudas estratégicas.
          </h2>
        </div>

        {/* FAQ Accordions Stack */}
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="faq-item"
            >
              {/* Question Trigger */}
              <button
                onClick={() => toggle(idx)}
                className="faq-trigger"
              >
                <span className="faq-question">
                  {faq.q}
                </span>
                <span className="faq-icon-wrapper">
                  {openIndex === idx ? <Minus size={12} /> : <Plus size={12} />}
                </span>
              </button>

              {/* Answer Box (Framer Motion height transition) */}
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="faq-answer-container">
                      <p className="faq-answer">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
