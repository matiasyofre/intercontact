import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, BookOpen, Layers, Award } from 'lucide-react';

export default function CourseShowcase() {
  const [activeTab, setActiveTab] = useState('onboarding');

  const categories = [
    { id: 'onboarding', name: 'Onboarding & Cultura' },
    { id: 'operativo', name: 'Capacitación Operativa' },
    { id: 'compliance', name: 'Compliance & Ética' },
    { id: 'habilidades', name: 'Soft Skills & Comercial' }
  ];

  const courses = {
    onboarding: [
      {
        code: 'ONB-01',
        title: 'Inducción, Cultura & Herramientas',
        desc: 'Proceso de alineación sistemática para nuevos colaboradores. Facilita la adopción de la cultura interna, políticas de la empresa y dominio técnico de plataformas operativas clave.',
        duration: '12 hs',
        modules: '6 Módulos',
        level: 'Inicial',
        progress: 100,
        accent: '#245A85'
      },
      {
        code: 'ONB-02',
        title: 'Formación Extendida de Franquicias',
        desc: 'Entrenamiento descentralizado y a ritmo propio diseñado específicamente para homogeneizar la calidad y estándares operativos en franquiciados, clientes y proveedores.',
        duration: '16 hs',
        modules: '8 Módulos',
        level: 'Intermedio',
        progress: 85,
        accent: '#3D9D8B'
      }
    ],
    operativo: [
      {
        code: 'OPE-01',
        title: 'Procedimientos, Sistemas & Tareas Críticas',
        desc: 'Capacitación técnica rigurosa en el puesto de trabajo. Cubre la operación segura de maquinarias, protocolos de planta, sistemas ERP y flujos de tareas operativas diarias.',
        duration: '24 hs',
        modules: '12 Módulos',
        level: 'Técnico',
        progress: 90,
        accent: '#3D9D8B'
      },
      {
        code: 'OPE-02',
        title: 'Gestión del Cambio & Adopción de Procesos',
        desc: 'Acompañamiento formativo durante reestructuraciones operativas. Facilita la transición de equipos hacia nuevas herramientas informáticas, metodologías y procesos logísticos.',
        duration: '10 hs',
        modules: '5 Módulos',
        level: 'Avanzado',
        progress: 75,
        accent: '#245A85'
      }
    ],
    compliance: [
      {
        code: 'CMP-01',
        title: 'Seguridad, Ética & Regulaciones Corporativas',
        desc: 'Cursos de cumplimiento obligatorio (compliance) bajo estándares regulatorios vigentes. Incluye códigos de conducta, prevención de riesgos laborales y auditorías de seguridad.',
        duration: '8 hs',
        modules: '4 Módulos',
        level: 'Obligatorio',
        progress: 100,
        accent: '#61CE70'
      },
      {
        code: 'CMP-02',
        title: 'Seguridad de la Información (Ciberseguridad)',
        desc: 'Trazabilidad y entrenamiento ético en resguardo de datos corporativos, prevención de incidentes de seguridad digital y manejo de información confidencial.',
        duration: '6 hs',
        modules: '3 Módulos',
        level: 'Obligatorio',
        progress: 100,
        accent: '#245A85'
      }
    ],
    habilidades: [
      {
        code: 'SFT-01',
        title: 'Soft Skills: Pensamiento Crítico & Creativo',
        desc: 'Desarrollo de habilidades interpersonales indispensables: comunicación asertiva, resolución empática de conflictos de equipo, liderazgo situacional y pensamiento creativo aplicado.',
        duration: '18 hs',
        modules: '9 Módulos',
        level: 'Liderazgo',
        progress: 92,
        accent: '#7A7A7A'
      },
      {
        code: 'SLS-01',
        title: 'Capacitación Comercial & Atención al Público',
        desc: 'Técnicas modernas de negociación, cierre de ventas consultivas de alto impacto y estándares premium de atención al cliente para equipos de front-office.',
        duration: '14 hs',
        modules: '7 Módulos',
        level: 'Profesional',
        progress: 95,
        accent: '#245A85'
      }
    ]
  };

  return (
    <section id="courses" className="section-padding" style={{ backgroundColor: 'var(--color-bg-subtle)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container-premium">
        
        {/* Section Header */}
        <div className="courses-header-row">
          <div className="section-header-editorial" style={{ marginBottom: 0 }}>
            <span>EJEMPLOS DE APLICACIÓN</span>
            <h2 className="title-large">
              Capacitación enfocada <br />
              <span className="text-serif" style={{ color: 'var(--color-blue)', fontStyle: 'italic', fontWeight: '400' }}>en cada perfil.</span>
            </h2>
          </div>
          
          <div className="courses-header-row-desc">
            Nuestras soluciones abarcan todos los niveles de tu organización, desde operarios de planta hasta directores ejecutivos, homogeneizando el conocimiento sin detener la operación.
          </div>
        </div>

        {/* Categories Tabs - Luxury Watch selector look */}
        <div className="tabs-container">
          <div className="tabs-track">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`tab-btn ${activeTab === cat.id ? 'tab-btn-active' : ''}`}
              >
                {cat.name}
                {activeTab === cat.id && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    className="tab-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="courses-grid">
          <AnimatePresence mode="wait">
            {courses[activeTab].map((course, idx) => (
              <motion.div
                key={course.code}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="course-card"
              >
                
                {/* Visual Accent Corner Layer */}
                <div 
                  className="course-accent-glow"
                  style={{ backgroundColor: course.accent }}
                />

                <div>
                  
                  {/* Top Details */}
                  <div className="course-meta-top">
                    <span className="course-code">
                      {course.code}
                    </span>
                    <span className="course-level">
                      <Layers size={10} style={{ marginRight: '2px' }} /> {course.level}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="course-title">
                    {course.title}
                  </h3>

                  <p className="course-desc">
                    {course.desc}
                  </p>

                </div>

                <div>
                  
                  {/* Floating interactive Progress Bar */}
                  <div className="course-progress-container">
                    <div className="course-progress-bar-track">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${course.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="course-progress-bar-fill"
                        style={{ backgroundColor: course.accent }}
                      />
                      
                      {/* Floating status marker */}
                      <div className="course-progress-label">
                        TASA DE COMPLEMENTACIÓN: {course.progress}%
                      </div>
                    </div>
                  </div>

                  {/* Telemetry info row */}
                  <div className="course-meta-bottom">
                    <div className="course-stats-group">
                      <span className="course-stat-icon-text"><Clock size={11} style={{ color: 'var(--color-gray)' }} /> {course.duration}</span>
                      <span className="course-stat-icon-text"><BookOpen size={11} style={{ color: 'var(--color-gray)' }} /> {course.modules}</span>
                    </div>
                    {course.progress === 100 ? (
                      <span className="course-badge-trazabilidad">
                        <Award size={10} /> 100% Trazable
                      </span>
                    ) : (
                      <span className="course-badge-optimizacion">
                        Optimización Activa
                      </span>
                    )}
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
