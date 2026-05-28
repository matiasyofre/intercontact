import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  RefreshCw, 
  TrendingDown, 
  Layers, 
  Users, 
  Zap, 
  ShieldAlert, 
  HelpCircle, 
  BarChart3, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);

  const benefitItems = [
    { 
      title: 'Cobertura total', 
      desc: 'Sin límites geográficos',
      icon: Globe,
      metric: '99.9%',
      metricLabel: 'Disponibilidad global',
      color: '#245A85',
      visualType: 'map',
      detailText: 'Capacita a colaboradores en cualquier punto de Argentina y el mundo de forma simultánea, sin gastos de traslado ni límites de infraestructura.'
    },
    { 
      title: 'Actualización inmediata', 
      desc: 'Contenidos siempre vigentes',
      icon: RefreshCw,
      metric: 'Real-time',
      metricLabel: 'Tiempo de despliegue',
      color: '#3D9D8B',
      visualType: 'sync',
      detailText: 'Modificaciones y nuevos contenidos disponibles de manera instantánea en todo el país. Olvídate de manuales impresos obsoletos.'
    },
    { 
      title: 'Ahorro significativo', 
      desc: 'Menos traslados y logística',
      icon: TrendingDown,
      metric: '-60%',
      metricLabel: 'Costos vs. presencialidad',
      color: '#61CE70',
      visualType: 'chart',
      detailText: 'Reduce drásticamente los costos de viáticos, salas físicas y logística de capacitadores mientras incrementas el alcance.'
    },
    { 
      title: 'Escalabilidad', 
      desc: 'Sin aumentar costos',
      icon: Layers,
      metric: '∞',
      metricLabel: 'Concurrencia ilimitada',
      color: '#7c3aed',
      visualType: 'scale',
      detailText: 'Entrena a 10 o a 10.000 colaboradores de manera simultánea. Tu infraestructura educativa crece sin elevar los costos de operación.'
    },
    { 
      title: 'Todos los perfiles', 
      desc: 'Operativos a gerenciales',
      icon: Users,
      metric: 'Multinivel',
      metricLabel: 'Adaptabilidad de diseño',
      color: '#245A85',
      visualType: 'levels',
      detailText: 'Planes de formación diseñados a medida tanto para personal de campo, operarios de planta, mandos medios o alta dirección.'
    },
    { 
      title: 'Mayor productividad', 
      desc: 'Sin parar la operación',
      icon: Zap,
      metric: '15 min',
      metricLabel: 'Píldora diaria promedio',
      color: '#61CE70',
      visualType: 'productivity',
      detailText: 'El aprendizaje fragmentado permite capacitar al personal durante turnos específicos sin detener las líneas productivas ni la atención.'
    },
    { 
      title: 'Cumplimiento normativo', 
      desc: 'Trazabilidad de compliance',
      icon: ShieldAlert,
      metric: '100%',
      metricLabel: 'Certificación auditable',
      color: '#7c3aed',
      visualType: 'compliance',
      detailText: 'Asegura la trazabilidad y validez legal ante auditorías formativas. Exámenes certificados y almacenamiento digital de progresos.'
    },
    { 
      title: 'Seguimiento personalizado', 
      desc: 'Soporte en todo el proceso',
      icon: HelpCircle,
      metric: '< 2 hs',
      metricLabel: 'Respuesta de tutoría',
      color: '#3D9D8B',
      visualType: 'support',
      detailText: 'Acompañamiento cercano. Los tutores asisten a los alumnos, resuelven dudas y guían la trayectoria educativa de cada integrante.'
    },
    { 
      title: 'Decisiones con datos', 
      desc: 'Métricas ligadas a resultados',
      icon: BarChart3,
      metric: '98.6%',
      metricLabel: 'Precisión de KPI',
      color: '#245A85',
      visualType: 'kpis',
      detailText: 'Vincula el desempeño formativo con KPIs reales del negocio. Dashboards interactivos para gerentes de Recursos Humanos.'
    },
    { 
      title: 'Experiencia 24/7', 
      desc: 'A ritmo propio, multimedia',
      icon: Clock,
      metric: 'Siempre',
      metricLabel: 'Acceso multidispositivo',
      color: '#61CE70',
      visualType: 'multimedia',
      detailText: 'Tus colaboradores eligen cuándo y dónde aprender: desde su móvil en su tiempo de descanso o su ordenador en la oficina.'
    }
  ];

  const activeBenefit = benefitItems[activeIndex];
  const ActiveIcon = activeBenefit.icon;

  return (
    <section id="beneficios" className="benefits-section">
      {/* Dynamic light spots in background (No dark theme) */}
      <div className="glow-spot glow-blue" style={{ top: '10%', right: '15%', opacity: 0.1 }} />
      <div className="glow-spot glow-teal" style={{ bottom: '15%', left: '10%', opacity: 0.08 }} />

      <div className="container-premium benefits-grid">
        
        {/* Left Side: Editorial title and the new FLEX PILL selectors */}
        <div className="benefits-left">
          
          <span className="benefits-tagline">
            <Sparkles size={11} className="contact-widget-icon-teal" /> Beneficios Interactivos
          </span>

          <h2 className="title-massive benefits-title" style={{ marginBottom: '1.5rem' }}>
            ¿Por qué <br />
            <span className="gradient-text">E-Learning?</span>
          </h2>

          <p className="benefits-intro" style={{ marginBottom: '2.5rem' }}>
            El e-learning es una ventaja competitiva para tu organización. Haz clic en los módulos para ver el simulador de impacto en tiempo real.
          </p>

          {/* New flex-wrap pills container */}
          <div className="benefits-pills-selector-container">
            {benefitItems.map((item, idx) => {
              const ItemIcon = item.icon;
              const isSelected = activeIndex === idx;
              
              return (
                <motion.button
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`benefit-selector-pill ${isSelected ? 'selected' : ''}`}
                  style={{
                    '--active-color': item.color,
                    borderColor: isSelected ? item.color : 'var(--color-border)',
                  }}
                >
                  <ItemIcon size={14} className="pill-icon" />
                  <span className="pill-title">{item.title}</span>
                </motion.button>
              );
            })}
          </div>

        </div>

        {/* Right Side: The Live Interactive Visual Dashboard Card (now on the right and sticky!) */}
        <div className="benefits-right">
          
          <div className="benefits-sticky-container">
            
            <div className="interactive-preview-card">
              <div className="interactive-preview-card-bevel" />
              
              <div className="preview-card-header">
                <div className="preview-card-status">
                  <span className="preview-card-pulse" style={{ backgroundColor: activeBenefit.color, boxShadow: `0 0 10px ${activeBenefit.color}` }} />
                  <span className="preview-card-status-text">ANÁLISIS DE IMPACTO</span>
                </div>
                <div className="preview-card-indicator" style={{ color: activeBenefit.color }}>
                  <ActiveIcon size={14} className="spin-slow" />
                  <span style={{ fontSize: '9px', fontWeight: '700', marginLeft: '0.4rem', textTransform: 'uppercase' }}>
                    {activeBenefit.title}
                  </span>
                </div>
              </div>

              {/* Dynamic AnimatePresence Content Box */}
              <div className="preview-card-body">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="preview-content-wrapper"
                  >
                    {/* Visual Graphic Representation depending on the active capsule */}
                    <div className="preview-graphic-container">
                      {activeBenefit.visualType === 'map' && (
                        <div className="preview-map-graph">
                          <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%', opacity: 0.7 }}>
                            <circle cx="50" cy="50" r="3" fill="#245A85" />
                            <circle cx="100" cy="30" r="4" fill="#3D9D8B" />
                            <circle cx="150" cy="60" r="3" fill="#7c3aed" />
                            <line x1="50" y1="50" x2="100" y2="30" stroke="rgba(36, 90, 133, 0.3)" strokeDasharray="3" />
                            <line x1="100" y1="30" x2="150" y2="60" stroke="rgba(61, 157, 139, 0.3)" strokeDasharray="3" />
                            <circle cx="100" cy="30" r="8" fill="none" stroke="#3D9D8B" strokeWidth="1" className="ping-slow" />
                          </svg>
                        </div>
                      )}

                      {activeBenefit.visualType === 'sync' && (
                        <div className="preview-sync-graph">
                          <div className="sync-ring">
                            <RefreshCw size={24} className="sync-icon spin-slow" style={{ color: '#3D9D8B' }} />
                          </div>
                        </div>
                      )}

                      {activeBenefit.visualType === 'chart' && (
                        <div className="preview-chart-graph">
                          <svg viewBox="0 0 200 60" style={{ width: '100%', height: '100%' }}>
                            <path d="M10 50 Q 50 40, 100 20 T 190 10" fill="none" stroke="#61CE70" strokeWidth="3" />
                            <line x1="10" y1="50" x2="190" y2="50" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                            <circle cx="100" cy="20" r="4" fill="#61CE70" />
                          </svg>
                        </div>
                      )}

                      {activeBenefit.visualType === 'scale' && (
                        <div className="preview-scale-graph">
                          <div className="scale-bar" style={{ height: '30%', backgroundColor: 'rgba(124, 58, 237, 0.2)' }} />
                          <div className="scale-bar" style={{ height: '60%', backgroundColor: 'rgba(124, 58, 237, 0.5)' }} />
                          <div className="scale-bar active" style={{ height: '90%', backgroundColor: '#7c3aed' }} />
                        </div>
                      )}

                      {activeBenefit.visualType === 'levels' && (
                        <div className="preview-levels-graph">
                          <span className="level-badge">Directivos</span>
                          <span className="level-badge" style={{ backgroundColor: '#245A85', color: '#fff' }}>Mandos Medios</span>
                          <span className="level-badge">Operativos</span>
                        </div>
                      )}

                      {activeBenefit.visualType === 'productivity' && (
                        <div className="preview-productivity-graph">
                          <div className="productivity-gauge">
                            <span className="gauge-fill" />
                          </div>
                        </div>
                      )}

                      {activeBenefit.visualType === 'compliance' && (
                        <div className="preview-compliance-graph">
                          <div className="compliance-log-box">
                            <span className="log-line green">✓ Examen Aprobado</span>
                            <span className="log-line">→ Registro criptográfico firmado</span>
                          </div>
                        </div>
                      )}

                      {activeBenefit.visualType === 'support' && (
                        <div className="preview-support-graph">
                          <div className="support-avatar-group">
                            <div className="support-avatar">IC</div>
                            <span className="support-active-indicator" />
                          </div>
                        </div>
                      )}

                      {activeBenefit.visualType === 'kpis' && (
                        <div className="preview-kpis-graph">
                          <svg viewBox="0 0 100 100" style={{ width: '45px', height: '45px' }}>
                            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(36, 90, 133, 0.1)" strokeWidth="8" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#245A85" strokeWidth="8" strokeDasharray="251" strokeDashoffset="10" />
                          </svg>
                        </div>
                      )}

                      {activeBenefit.visualType === 'multimedia' && (
                        <div className="preview-multimedia-graph">
                          <div className="multimedia-player-mock">
                            <span className="player-dot active" />
                            <span className="player-dot" />
                            <span className="player-dot" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Metric Spotlight */}
                    <div className="preview-metric-box">
                      <span className="preview-metric-value" style={{ color: activeBenefit.color }}>
                        {activeBenefit.metric}
                      </span>
                      <span className="preview-metric-label">{activeBenefit.metricLabel}</span>
                    </div>

                    {/* Subtitle tag / short description */}
                    <span className="preview-desc-tagline" style={{ color: activeBenefit.color, fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                      {activeBenefit.desc}
                    </span>

                    {/* Explanatory text */}
                    <p className="preview-detail-text">
                      {activeBenefit.detailText}
                    </p>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card Footer telemetry status details */}
              <div className="preview-card-footer">
                <span className="preview-card-footer-item">ANÁLISIS DE RETORNO</span>
                <span className="preview-card-footer-item monospace">CALCULADORA DE RETORNO</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
