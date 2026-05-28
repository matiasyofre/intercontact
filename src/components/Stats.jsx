import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';

export default function Stats() {
  const [counts, setCounts] = useState({ students: 0, projects: 0, cost: 0 });

  useEffect(() => {
    // Simple animated counter increment logic
    const duration = 2000; // ms
    const steps = 50;
    const intervalTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        students: Math.min(Math.round((100000 / steps) * step), 100000),
        projects: Math.min(Math.round((200 / steps) * step), 200),
        cost: Math.min(Math.round((60 / steps) * step), 60)
      });

      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num) => {
    if (num >= 100000) return '100.000+';
    return num.toString();
  };

  const statItems = [
    {
      num: formatNum(counts.students),
      label: 'Alumnos Capacitados',
      sub: 'Trazabilidad educativa completa'
    },
    {
      num: `+${counts.projects}`,
      label: 'Proyectos E-Learning',
      sub: 'Diseños formativos personalizados'
    },
    {
      num: `-${counts.cost}%`,
      label: 'Costos vs. Presencial',
      sub: 'Ahorro logístico y operativo real'
    },
    {
      num: '24/7',
      label: 'Disponibilidad Ecosistema',
      sub: 'Sin límites geográficos ni temporales'
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      
      {/* Editorial Grids Background lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-[0.02]" style={{ position: 'absolute' }}>
        <div className="w-[1px] h-full bg-[#121212]" style={{ marginLeft: '20%' }} />
        <div className="w-[1px] h-full bg-[#121212]" />
        <div className="w-[1px] h-full bg-[#121212]" style={{ marginRight: '20%' }} />
      </div>

      <div className="container-premium" style={{ zIndex: 10 }}>
        
        {/* Layout Row */}
        <div className="stats-header-grid">
          
          <div>
            <span className="hero-tagline-text" style={{ marginBottom: '0.75rem', display: 'block' }}>
              MÉTRICAS DE ALTO IMPACTO
            </span>
            <h2 className="title-large">
              Eficiencia educativa <br />
              <span className="text-serif" style={{ color: 'var(--color-blue)', fontStyle: 'italic', fontWeight: '400' }}>respaldada por datos.</span>
            </h2>
          </div>

          <div>
            <p className="stats-header-grid-desc">
              Cada número representa una solución real construida con precisión académica e innovación de vanguardia. Optimizamos la capacitación corporativa alinear el crecimiento de las personas con los resultados de la organización.
            </p>
          </div>

        </div>

        {/* Big Numbers Grid */}
        <div className="stats-grid">
          {statItems.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="stat-item-box"
            >
              <div>
                <span className="stat-item-number">
                  {stat.num}
                </span>
                <h3 className="stat-item-title">
                  {stat.label}
                </h3>
              </div>
              <p className="stat-item-sub">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Sleek Minimalist Growth Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="stats-chart-card"
        >
          <div className="stats-chart-header">
            <div className="stats-chart-title-group">
              <BarChart2 size={14} style={{ color: 'var(--color-teal)' }} />
              <span className="stats-chart-title">
                Proyección de Tasa de Retención vs Capacitación Presencial
              </span>
            </div>
            <div className="stats-chart-legend">
              <span className="legend-item"><span className="legend-line-blue" style={{ marginRight: '4px' }} /> Ecosistema E-Learning</span>
              <span className="legend-item"><span className="legend-line-gray" style={{ marginRight: '4px' }} /> Capacitación Tradicional</span>
            </div>
          </div>

          {/* Simple and elegant vector chart visualization representing comparative analytics */}
          <div className="stats-chart-vector-container">
            <svg viewBox="0 0 1000 120" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
              {/* Horizontal grid lines */}
              <line x1="0" y1="20" x2="1000" y2="20" stroke="#f2f2f2" strokeWidth="1" />
              <line x1="0" y1="60" x2="1000" y2="60" stroke="#f2f2f2" strokeWidth="1" />
              <line x1="0" y1="100" x2="1000" y2="100" stroke="#f2f2f2" strokeWidth="1" />

              {/* Traditional training line (flat/declining path) */}
              <path 
                d="M 0 80 Q 250 85, 500 90 T 1000 95" 
                fill="none" 
                stroke="#7A7A7A" 
                strokeWidth="1" 
                strokeDasharray="4,4"
              />

              {/* Intercontact E-learning line (exponential upward path) */}
              <path 
                d="M 0 110 C 200 95, 400 45, 600 30 T 1000 10" 
                fill="none" 
                stroke="#245A85" 
                strokeWidth="2" 
              />
              
              {/* Focal highlights */}
              <circle cx="600" cy="30" r="4" fill="#3D9D8B" />
              <circle cx="1000" cy="10" r="4" fill="#61CE70" />
            </svg>
          </div>

          <div className="stats-chart-footer">
            <span>Mes 01</span>
            <span>Mes 03</span>
            <span>Mes 06</span>
            <span>Mes 12 (Eficacia Sostenida)</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
