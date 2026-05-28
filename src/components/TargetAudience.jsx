import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  Shield, 
  HardHat, 
  Landmark, 
  Handshake, 
  Lightbulb, 
  GraduationCap,
  Sparkles,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

export default function TargetAudience() {
  const [activeAudience, setActiveAudience] = useState(0);

  const audiences = [
    {
      title: 'Empresas',
      icon: Building,
      focus: 'Formación corporativa ágil y Onboarding.',
      metric: '90%',
      metricLabel: 'Aceleración de inducción',
      curriculums: [
        'Onboarding y cultura corporativa de nuevos ingresos.',
        'Entrenamiento técnico de planta y procesos operativos.',
        'Planes de compliance legal y normativas internas.'
      ],
      color: '#245A85'
    },
    {
      title: 'Compañías de Seguros',
      icon: Shield,
      focus: 'Capacitación obligatoria y técnicas comerciales de Productores (PAS).',
      metric: '100%',
      metricLabel: 'Cumplimiento SSN garantizado',
      curriculums: [
        'Cursos obligatorios SSN (Superintendencia de Seguros de la Nación).',
        'Técnicas de venta consultiva y retención de cartera.',
        'Actualización normativa de riesgos y coberturas.'
      ],
      color: '#3D9D8B'
    },
    {
      title: 'ART',
      icon: HardHat,
      focus: 'Prevención de riesgos laborales, Higiene y Seguridad.',
      metric: '-45%',
      metricLabel: 'Reducción de siniestralidad',
      curriculums: [
        'Normativas obligatorias de seguridad industrial e higiene.',
        'Ergonomía laboral y prevención de riesgos mecánicos.',
        'Primeros auxilios corporativos y evacuación de plantas.'
      ],
      color: '#61CE70'
    },
    {
      title: 'Gobierno',
      icon: Landmark,
      focus: 'Modernización y digitalización de la gestión pública.',
      metric: '24/7',
      metricLabel: 'Disponibilidad estatal',
      curriculums: [
        'Atención al ciudadano y comunicación asertiva institucional.',
        'Uso de plataformas digitales y flujos administrativos sin papeles.',
        'Políticas públicas y marco normativo estatal.'
      ],
      color: '#7c3aed'
    },
    {
      title: 'Cooperativas y Sindicatos',
      icon: Handshake,
      focus: 'Desarrollo técnico asociativo y capacitación sindical.',
      metric: 'Líder',
      metricLabel: 'Reputación gremial',
      curriculums: [
        'Liderazgo colaborativo y toma de decisiones asociativas.',
        'Cursos de seguridad e higiene de plantas locales.',
        'Convenios colectivos, marco legal e inducción institucional.'
      ],
      color: '#245A85'
    },
    {
      title: 'Emprendedores',
      icon: Lightbulb,
      focus: 'Escalabilidad comercial, growth y habilidades de negocio.',
      metric: '10x',
      metricLabel: 'Crecimiento de equipo',
      curriculums: [
        'Oratoria asertiva, negociación y pitch de inversión.',
        'Uso de metodologías ágiles en equipos dinámicos.',
        'Finanzas corporativas para fundadores y orden logístico.'
      ],
      color: '#61CE70'
    },
    {
      title: 'Instituciones Educativas',
      icon: GraduationCap,
      focus: 'Transformación metodológica y campus híbrido digital.',
      metric: '360°',
      metricLabel: 'Integración pedagógica',
      curriculums: [
        'Diseño instruccional para docentes y tutores virtuales.',
        'Administración y optimización de campus LMS Moodle.',
        'Gamificación y didáctica interactiva multimedia.'
      ],
      color: '#7c3aed'
    }
  ];

  const currentSegment = audiences[activeAudience];
  const CurrentIcon = currentSegment.icon;

  return (
    <section id="audiencia" className="audience-section">
      {/* Slow-motion background spots */}
      <div className="glow-spot glow-blue" style={{ top: '25%', right: '10%', opacity: 0.08 }} />
      <div className="glow-spot glow-teal" style={{ bottom: '25%', left: '10%', opacity: 0.08 }} />

      <div className="container-premium">
        
        {/* Header Block */}
        <div className="audience-header text-center">
          <span className="audience-tagline">
            ¿A quién va dirigido?
          </span>
          <h2 className="title-massive audience-title" style={{ maxWidth: '850px', margin: '0 auto' }}>
            Pensado para organizaciones <br />
            <span className="gradient-text">que quieran crecer</span>
          </h2>
        </div>

        {/* Audience Badges Horizontal Grid (Exactly matches reference layout) */}
        <div className="audience-badges-grid">
          {audiences.map((aud, idx) => {
            const AudIcon = aud.icon;
            const isSelected = activeAudience === idx;

            return (
              <motion.button
                key={aud.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                onClick={() => setActiveAudience(idx)}
                className={`audience-badge-btn ${isSelected ? 'selected' : ''}`}
                style={{
                  borderBottom: isSelected ? `4px solid ${aud.color}` : '1px solid var(--color-border)'
                }}
              >
                <div className="badge-btn-glow" style={{ background: `radial-gradient(circle at 50% 100%, rgba(${isSelected ? '124, 58, 237' : '36, 90, 133'}, 0.04) 0%, transparent 60%)` }} />
                <div className="badge-btn-icon-wrapper" style={{ 
                  backgroundColor: isSelected ? `${aud.color}15` : 'rgba(0, 0, 0, 0.02)',
                  color: isSelected ? aud.color : 'var(--color-gray)'
                }}>
                  <AudIcon size={18} />
                </div>
                <span className="badge-btn-title" style={{ color: isSelected ? 'var(--color-text-dark)' : 'var(--color-text-light)' }}>
                  {aud.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Morphing Detail Dashboard Panel below (Framer Motion spring) */}
        <div className="audience-detail-panel">
          <div className="interactive-preview-card-bevel" style={{ background: `linear-gradient(90deg, ${currentSegment.color}, var(--color-teal))` }} />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAudience}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="audience-panel-grid"
            >
              {/* Left Column: Curriculums checklists */}
              <div className="audience-panel-left">
                <span className="audience-panel-tag" style={{ color: currentSegment.color }}>
                  <Sparkles size={11} style={{ marginRight: '0.4rem' }} /> Enfoque Formativo
                </span>
                
                <h3 className="title-medium audience-panel-focus" style={{ color: 'var(--color-text-dark)', fontWeight: '400', margin: '0.5rem 0 1.2rem 0', lineHeight: '1.4' }}>
                  {currentSegment.focus}
                </h3>

                <div className="audience-checklist">
                  {currentSegment.curriculums.map((item, i) => (
                    <div key={i} className="audience-checklist-item">
                      <div className="checklist-bullet-wrapper" style={{ backgroundColor: `${currentSegment.color}10`, color: currentSegment.color }}>
                        <ChevronRight size={12} />
                      </div>
                      <p className="checklist-text">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: High-fidelity telemetry metric gauge */}
              <div className="audience-panel-right">
                <div className="audience-panel-metric-card">
                  <div className="panel-metric-card-status">
                    <span className="preview-card-pulse" style={{ backgroundColor: currentSegment.color }} />
                    <span>RETORNO DE IMPACTO</span>
                  </div>

                  <div className="panel-metric-val-group">
                    <span className="panel-metric-value" style={{ color: currentSegment.color }}>
                      {currentSegment.metric}
                    </span>
                    <span className="panel-metric-label">
                      {currentSegment.metricLabel}
                    </span>
                  </div>

                  <div className="panel-metric-footer">
                    <TrendingUp size={12} style={{ color: currentSegment.color, marginRight: '0.4rem' }} />
                    <span>Métricas ligadas a resultados auditados</span>
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
