import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo_red from '../assets/logo_red_and_white.png';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="home" ref={ref} style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', right: '-10%', top: '-10%',
            width: '70vw', height: '70vw', maxWidth: 900,
            background: 'radial-gradient(ellipse, rgba(139,26,26,0.35) 0%, rgba(192,57,43,0.08) 50%, transparent 80%)',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute', left: '-15%', bottom: '-10%',
            width: '60vw', height: '60vw', maxWidth: 700,
            background: 'radial-gradient(ellipse, rgba(139,26,26,0.2) 0%, transparent 70%)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          }}
        />
      </div>

      {/* Centered logo + tagline block — vertically centered in the upper/middle portion of the section */}
      <motion.div
        style={{
          y,
          opacity,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
          paddingBottom: 'clamp(120px, 16vw, 200px)', // reserve room so this block sits above the bottom bar
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.0, ease: 'easeOut' }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 0,
          }}
        >
          <img
            src={logo_red}
            alt="Illiora Logo"
            style={{
              width: 'clamp(250px, 3vw, 500px)',
              height: 'auto',
              display: 'block'
            }}
          />
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.4 }}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(24px, 24vw, 5px)',
            fontWeight: 300,
            color: '#8e8e8e',
            letterSpacing: '0.04em',
            margin: 0,
            // margin: 0,
marginTop: '26px', 
          }}
        >
          The Signature of Modern Brands
        </motion.h2>
      </motion.div>

      {/* Bottom bar — buttons + scroll indicator, anchored to the bottom of the hero section */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 'clamp(48px, 8vw, 96px)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 56,
          padding: '0 24px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 3.6 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#works"
            style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#f5f0eb', background: '#9c241c',
              padding: '11px 28px', transition: 'all 0.3s', display: 'inline-block',
              borderRadius: '20px',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#e74c3c'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#9c241c'; }}
          >
            View Works
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#e86657', border: '1px solid #c0392b',
              padding: '11px 28px', transition: 'all 0.3s', display: 'inline-block',
              borderRadius: '20px',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#c0392b'; (e.currentTarget as HTMLElement).style.color = '#f5f0eb'; (e.currentTarget as HTMLElement).style.background = 'rgba(192,57,43,0.1)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(192,57,43,0.4)'; (e.currentTarget as HTMLElement).style.color = '#c0392b'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, letterSpacing: '0.4em', color: '#9c9c97', textTransform: 'uppercase' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{ width: 1, height: 48, background: 'linear-gradient(180deg, #c0392b, transparent)' }}
          />
        </motion.div>
      </div>

      {/* Floating tags */}
      {['Branding', 'Logo', 'Packaging', 'Print'].map((tag, i) => (
        <motion.div
          key={tag}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, y: [0, -8, 0] }}
          transition={{ delay: 3.5 + i * 0.2, y: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 } }}
          style={{
            position: 'absolute',
            left: i % 2 === 0 ? `${8 + i * 3}%` : 'auto',
            right: i % 2 !== 0 ? `${8 + i * 2}%` : 'auto',
            top: `${25 + i * 12}%`,
            fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.3em',
            textTransform: 'uppercase', color: '#c0392b', border: '1px solid rgba(192,57,43,0.2)',
            padding: '6px 14px',
          }}
        >
          {tag}
        </motion.div>
      ))}
    </section>
  );
};

export default Hero;