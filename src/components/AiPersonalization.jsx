import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Terminal, ShieldAlert, TrendingUp } from 'lucide-react';

export default function AiPersonalization() {
  const [selectedScenario, setSelectedScenario] = useState('compliance');
  const [logMessages, setLogMessages] = useState([]);
  const [progressMetrics, setProgressMetrics] = useState({ success: 92, efficiency: 88, risk: 12 });
  const [isSimulating, setIsSimulating] = useState(false);

  const scenarios = [
    {
      id: 'compliance',
      name: 'Auditoría de Compliance',
      type: 'Cumplimiento & Normativa',
      description: 'Simulación de incidentes éticos críticos y auditorías normativas. Evalúa el apego del colaborador a las directrices de seguridad y regulaciones.',
      metrics: { success: 98, efficiency: 94, risk: 4 },
      logs: [
        '◆ Inicializando entorno de Auditoría Compliance v1.0.2...',
        '⚡ Disparando evento crítico: Reporte de desvío regulatorio en filial.',
        'ℹ Alumno evalúa protocolo de retención y trazabilidad...',
        '✔ Nivel de conformidad alcanzado: 100%. Acciones correctivas aplicadas en 4s.',
        '★ Certificación de Compliance emitida con éxito.'
      ]
    },
    {
      id: 'operativo',
      name: 'Crisis en Planta Operativa',
      type: 'Sistemas & Tareas',
      description: 'Simulación de fallas críticas en sistemas de producción. Mide el tiempo de respuesta operativo y el seguimiento de manuales de mantenimiento.',
      metrics: { success: 86, efficiency: 91, risk: 28 },
      logs: [
        '◆ Inicializando simulación de Falla Operativa y Parada de Emergencia...',
        '⚡ Disparando evento crítico: Fuga simulada de presión en sector 4.',
        '⚠ Presión crítica superada. Alumno inicia protocolo de descompresión...',
        'ℹ Tiempo de reacción operativo: 3.8s (Mejora del 42% respecto al promedio).',
        '✔ Integridad operativa resguardada. Simulación completada.'
      ]
    },
    {
      id: 'comercial',
      name: 'Negociación de Alta Gama',
      type: 'Ventas & Comunicación',
      description: 'Simulación comercial de alta tensión con un cliente de lujo. Mide el tono de voz, el control de objeciones y la asertividad comercial.',
      metrics: { success: 94, efficiency: 85, risk: 8 },
      logs: [
        '◆ Inicializando entorno interactivo de Soft Skills Comerciales...',
        '⚡ Cliente presenta objeción de retornos de inversión y exclusividad.',
        'ℹ Alumno aplica técnica de anclaje de valor premium y escucha activa...',
        '✔ Objeción resuelta. Nivel de empatía: 96%. Cierre del deal con éxito.',
        '★ Score final: Alta competencia en soft skills comerciales.'
      ]
    }
  ];

  // Triggered when scenario changes to animate log typing
  useEffect(() => {
    setIsSimulating(true);
    const scenarioData = scenarios.find(s => s.id === selectedScenario);
    setProgressMetrics(scenarioData.metrics);
    
    // Simulate staggered logs appearance
    setLogMessages([]);
    let count = 0;
    const interval = setInterval(() => {
      if (count < scenarioData.logs.length) {
        setLogMessages(prev => [...prev, scenarioData.logs[count]]);
        count++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [selectedScenario]);

  return (
    <section id="ai-personalization" className="section-padding" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#ffffff' }}>
      
      {/* Soft atmospheric teal blur */}
      <div className="glow-spot glow-teal" style={{ bottom: '-10%', right: '5%', opacity: 0.04 }} />

      <div className="container-premium ai-section-grid">
        
        {/* Left Side: Editorial copywriting & details */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span className="hero-tagline-text" style={{ marginBottom: '0.75rem', display: 'block' }}>
            INNOVACIÓN APLICADA (IA)
          </span>
          <h2 className="title-large" style={{ marginBottom: '1.5rem' }}>
            Entrenamiento de <br />
            <span className="text-serif" style={{ color: 'var(--color-teal)', fontStyle: 'italic', fontWeight: '400' }}>escenarios críticos.</span>
          </h2>
          
          <p className="hero-desc" style={{ marginBottom: '2.5rem' }}>
            Nuestra inteligencia artificial modela simulaciones dinámicas y adaptativas de situaciones reales de negocios. Desde crisis de seguridad informática y auditorías normativas hasta negociaciones sofisticadas.
          </p>

          {/* Quick list of values */}
          <div className="ai-highlights-list">
            <div className="ai-highlight-item">
              <span className="ai-highlight-item-icon">
                <Brain size={14} style={{ color: 'var(--color-teal)' }} />
              </span>
              <div>
                <h4 className="ai-highlight-item-title">Mapeo Adaptativo</h4>
                <p className="ai-highlight-item-desc">La IA ajusta la dificultad y el flujo de la simulación en base a las decisiones del alumno en tiempo real.</p>
              </div>
            </div>

            <div className="ai-highlight-item">
              <span className="ai-highlight-item-icon">
                <TrendingUp size={14} style={{ color: 'var(--color-blue)' }} />
              </span>
              <div>
                <h4 className="ai-highlight-item-title">Métricas de Rendimiento</h4>
                <p className="ai-highlight-item-desc">Trazabilidad completa de tiempos de reacción, apego ético corporativo y eficacia resolutiva.</p>
              </div>
            </div>
          </div>

          {/* Scenario Selectors */}
          <div className="ai-selectors-container">
            <span className="ai-selectors-label">SELECCIONÁ UN MODELO DE CRISIS</span>
            <div className="ai-selectors-track">
              {scenarios.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedScenario(s.id)}
                  disabled={isSimulating}
                  className={`ai-selector-btn ${selectedScenario === s.id ? 'ai-selector-btn-active' : ''}`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Interactive AI Simulator Console (Tesla-like telemetry & dark overlay logs) */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div className="simulator-console">
            
            {/* Header: Simulator Console State */}
            <div className="simulator-header">
              <div className="simulator-title-group">
                <Terminal size={14} style={{ color: 'var(--color-teal)' }} />
                <span className="simulator-title">INTERACTIVE CONSOLE_v2.0</span>
              </div>
              <div className="simulator-status-group">
                <span className={`simulator-status-dot ${isSimulating ? 'simulator-status-dot-active' : 'simulator-status-dot-ready'}`} />
                <span className="simulator-status-text">
                  {isSimulating ? 'SIMULANDO...' : 'SISTEMA LISTO'}
                </span>
              </div>
            </div>

            {/* Middle: Grid featuring 1. Logs console, 2. Telemetry Gauges */}
            <div className="simulator-grid">
              
              {/* Simulation logs screen (Dark terminal-like) */}
              <div className="simulator-terminal">
                <div className="terminal-log-stream">
                  <AnimatePresence>
                    {logMessages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className={
                          msg.startsWith('✔') || msg.startsWith('★') ? 'terminal-log-success' :
                          msg.startsWith('⚡') ? 'terminal-log-event' :
                          msg.startsWith('⚠') ? 'terminal-log-warn' : ''
                        }
                      >
                        {msg}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                
                {isSimulating && (
                  <div className="terminal-telemetry-loader">
                    ▌ Procesando telemetría del alumno...
                  </div>
                )}
              </div>

              {/* Telemetry Dials (Circular indicators styled elegantly) */}
              <div className="simulator-gauges-column">
                
                {/* Metric 1 */}
                <div className="simulator-gauge-card">
                  <span className="simulator-gauge-label">Índice de Éxito</span>
                  <div className="simulator-gauge-value-group">
                    <span className="simulator-gauge-value simulator-gauge-value-blue">
                      {progressMetrics.success}%
                    </span>
                    <span className="simulator-gauge-subtext" style={{ color: 'var(--color-accent-green)' }}>Eficiente</span>
                  </div>
                  <div className="simulator-gauge-progress-track">
                    <div 
                      className="simulator-gauge-progress-fill" 
                      style={{ width: `${progressMetrics.success}%`, backgroundColor: 'var(--color-blue)' }}
                    />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="simulator-gauge-card">
                  <span className="simulator-gauge-label">Eficiencia de Tiempo</span>
                  <div className="simulator-gauge-value-group">
                    <span className="simulator-gauge-value simulator-gauge-value-teal">
                      {progressMetrics.efficiency}%
                    </span>
                    <span className="simulator-gauge-subtext" style={{ color: 'var(--color-teal)' }}>Tasa Alta</span>
                  </div>
                  <div className="simulator-gauge-progress-track">
                    <div 
                      className="simulator-gauge-progress-fill" 
                      style={{ width: `${progressMetrics.efficiency}%`, backgroundColor: 'var(--color-teal)' }}
                    />
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="simulator-gauge-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="simulator-gauge-label">Riesgo Operativo</span>
                    <ShieldAlert size={10} style={{ color: 'var(--color-gray)' }} />
                  </div>
                  <div className="simulator-gauge-value-group">
                    <span className="simulator-gauge-value simulator-gauge-value-gray">
                      {progressMetrics.risk}%
                    </span>
                    <span className="simulator-gauge-subtext">Protegido</span>
                  </div>
                  <div className="simulator-gauge-progress-track">
                    <div 
                      className="simulator-gauge-progress-fill" 
                      style={{ width: `${progressMetrics.risk}%`, backgroundColor: 'var(--color-gray)' }}
                    />
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Info Banner */}
            <div className="simulator-footer">
              <span>ESTATUS DE ANALÍTICAS: CALIBRANDO</span>
              <span>INTERCONTACT LABS ©</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
