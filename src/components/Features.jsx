import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Film, Users, Layers } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Cpu className="text-serif" style={{ color: 'var(--color-teal)', strokeWidth: '1.25' }} size={32} />,
      title: 'Innovación Aplicada',
      description: 'Simulación de escenarios críticos aplicando Inteligencia Artificial para el entrenamiento seguro. Implementación de Campus Virtuales personalizados basados en Moodle y píldoras dinámicas de Microlearning.',
      color: 'rgba(61, 157, 139, 0.05)',
      borderColor: 'rgba(61, 157, 139, 0.15)'
    },
    {
      icon: <Film className="text-serif" style={{ color: 'var(--color-blue)', strokeWidth: '1.25' }} size={32} />,
      title: 'Producción Personalizada',
      description: 'Producción integral de diseños formativos a la medida de tus procesos. Grabación profesional de video clases, videos explicativos y material audiovisual de difusión o difusión comercial.',
      color: 'rgba(36, 90, 133, 0.05)',
      borderColor: 'rgba(36, 90, 133, 0.15)'
    },
    {
      icon: <Users className="text-serif" style={{ color: 'var(--color-gray)', strokeWidth: '1.25' }} size={32} />,
      title: 'Acompañamiento Estratégico',
      description: 'Consultoría especializada de principio a fin para la implementación exitosa de proyectos formativos académicos y corporativos. Soporte técnico permanente en la gestión de capacitación de equipos.',
      color: 'rgba(122, 122, 122, 0.05)',
      borderColor: 'rgba(122, 122, 122, 0.15)'
    },
    {
      icon: <Layers className="text-serif" style={{ color: 'var(--color-accent-green)', strokeWidth: '1.25' }} size={32} />,
      title: 'Contenidos Listos para Usar',
      description: 'Acceso inmediato a nuestro catálogo de cursos pre-estructurados para la capacitación rápida de tu equipo. Cursos de cumplimiento normativo obligatorios (compliance) para empresas.',
      color: 'rgba(97, 206, 112, 0.05)',
      borderColor: 'rgba(97, 206, 112, 0.15)'
    }
  ];

  return (
    <section id="features" className="section-padding" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#ffffff' }}>
      
      {/* Background glow spot */}
      <div className="glow-spot glow-teal" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)', opacity: 0.04 }} />

      <div className="container-premium" style={{ zIndex: 10 }}>
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <span>NUESTRAS SOLUCIONES</span>
          <h2 className="title-large">
            Ecosistema de aprendizaje <br />
            <span className="text-serif" style={{ color: 'var(--color-teal)', fontStyle: 'italic', fontWeight: '400' }}>con foco en resultados.</span>
          </h2>
          <p>
            Diseñamos e implementamos soluciones formativas personalizadas para organizaciones que quieren crecer. Fusionamos rigor académico, producción audiovisual de alta calidad y tecnología de vanguardia.
          </p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="features-grid">
          {features.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderColor: feat.borderColor,
                // Creating a slight vertical stagger on desktop
                marginTop: index % 2 === 1 ? '2rem' : '0rem'
              }}
              className="premium-card"
            >
              <div>
                {/* Icon Container with elegant circular halo */}
                <div className="feature-card-icon-container">
                  {feat.icon}
                </div>

                {/* Content */}
                <h3 className="feature-card-title">
                  {feat.title}
                </h3>
                
                <p className="feature-card-desc">
                  {feat.description}
                </p>
              </div>

              {/* Tiny footer of the card */}
              <div className="feature-card-footer">
                <span>EVALUACIÓN DE IMPACTO</span>
                <span className="feature-card-footer-action">GESTIONAR →</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
