import React from 'react';
import { motion } from 'framer-motion';

export default function TrustedBy() {
  const logos = [
    { name: 'MAPFRE', symbol: '◆' },
    { name: 'AXION ENERGY', symbol: '▲' },
    { name: 'SANCOR SEGUROS', symbol: '■' },
    { name: 'AGUAS CORDOBESAS', symbol: '◆' },
    { name: 'FEDERACIÓN PATRONAL', symbol: '❖' },
    { name: 'EPEC CÓRDOBA', symbol: '●' }
  ];

  return (
    <section className="trusted-section">
      <div className="container-premium trusted-container">
        
        {/* Caption */}
        <div className="trusted-caption">
          <span>CONFÍAN EN NOSOTROS</span>
          <p>Organizaciones que ya transformaron su formación con nosotros</p>
        </div>

        {/* Separator Line on large screens */}
        <div className="trusted-divider" />

        {/* Logos track - Elegant typography */}
        <div className="trusted-logos">
          {logos.map((logo, index) => (
            <motion.div 
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ opacity: 1, scale: 1.03 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="trusted-logo-item"
            >
              <span className="trusted-logo-symbol">{logo.symbol}</span>
              <span className="trusted-logo-text">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
