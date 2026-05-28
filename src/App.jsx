import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import Benefits from './components/Benefits';
import CourseShowcase from './components/CourseShowcase';
import TargetAudience from './components/TargetAudience';
import AiPersonalization from './components/AiPersonalization';
import InmersiveLearning from './components/InmersiveLearning';
import SuccessCases from './components/SuccessCases';
import Stats from './components/Stats';
import Community from './components/Community';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Tracks cursor position and updates state
  useEffect(() => {
    // Detect mobile device to disable custom cursor and prevent laggy touch behaviors
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    // Hover tracking for buttons/links to expand the cursor ring
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.premium-card');
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  // Framer-motion style trailing ring delay interpolation
  useEffect(() => {
    if (isMobile) return;

    let reqId;
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    const updateRing = () => {
      setRingPos((prev) => ({
        x: lerp(prev.x, cursorPos.x, 0.12),
        y: lerp(prev.y, cursorPos.y, 0.12)
      }));
      reqId = requestAnimationFrame(updateRing);
    };

    reqId = requestAnimationFrame(updateRing);
    return () => cancelAnimationFrame(reqId);
  }, [cursorPos, isMobile]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--color-bg)', color: 'var(--color-text-dark)', overflow: 'hidden' }}>
      
      {/* Premium Luxury Custom Cursor Ring - active only on desktop */}
      {!isMobile && (
        <>
          <div 
            className="custom-cursor"
            style={{ 
              left: `${cursorPos.x}px`, 
              top: `${cursorPos.y}px`,
              backgroundColor: isHovered ? '#245A85' : '#3D9D8B'
            }}
          />
          <div 
            className="custom-cursor-ring"
            style={{ 
              left: `${ringPos.x}px`, 
              top: `${ringPos.y}px`,
              borderColor: isHovered ? 'rgba(36, 90, 133, 0.6)' : 'rgba(61, 157, 139, 0.25)',
              transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`
            }}
          />
        </>
      )}

      {/* 13 Modular Premium Sections stack */}
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Benefits />
      <CourseShowcase />
      <TargetAudience />
      <AiPersonalization />
      <InmersiveLearning />
      <SuccessCases />
      <Stats />
      <Community />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />

    </div>
  );
}
