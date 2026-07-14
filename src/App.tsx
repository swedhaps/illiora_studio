import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
// import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkDetail from './pages/WorkDetail';
import './index.css';
import logo_red from './assets/logo_red_and_white.png';
import { Box, Fab, Tooltip } from '@mui/material';

const InstagramSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);

const PhoneSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.18 2 2 0 012 .02h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

const EmailSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const fabActions = [
  {
    icon: <InstagramSVG />,
    label: "Instagram",
    href: "https://www.instagram.com/illiora.studio/",
  },
  {
    icon: <PhoneSVG />,
    label: "WhatsApp",
    href: "https://wa.me/919947056104", // WhatsApp chat
  },
  {
  icon: <EmailSVG />,
  label: "Email",
  href:
    "https://mail.google.com/mail/?view=cm&fs=1&to=illiorastudio111@gmail.com&su=Project%20Enquiry",
}
];

// ─── Homepage: bundles all the single-page sections ───────────────────────────
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      {/* <Experience /> */}
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setFollowerPos({ x: e.clientX, y: e.clientY }), 80);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          position: 'fixed', width: 8, height: 8, background: '#c0392b',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9999,
          left: cursorPos.x, top: cursorPos.y, transform: 'translate(-50%,-50%)',
          transition: 'transform 0.1s ease',
        }}
      />
      <div
        style={{
          position: 'fixed', width: 32, height: 32, border: '1px solid rgba(192,57,43,0.45)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9998,
          left: followerPos.x, top: followerPos.y, transform: 'translate(-50%,-50%)',
          transition: 'all 0.15s ease',
        }}
      />

      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            style={{
              position: 'fixed', inset: 0, background: '#080808', zIndex: 9998,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 24,
            }}
          >
            <img
              src={logo_red}
              alt="Illiora Studio Logo"
              style={{ height: 100, width: 'auto', objectFit: 'contain' }}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
              style={{ height: 1, background: 'linear-gradient(90deg, transparent, #c0392b, transparent)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ cursor: 'none' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works/:id" element={<WorkDetail />} />
        </Routes>
      </div>

      {/* FABs — always visible */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {fabActions.map((action) => (
<Fab
  key={action.label}
  size="small"
  href={action.href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={action.label}
  sx={{
    background: "rgba(18,18,18,0.92)",
    border: "1px solid rgba(192,57,43,0.35)",
    color: "#c0392b",
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    cursor: "none",
    width: 44,
    height: 44,
    backdropFilter: "blur(8px)",
    transition: "all 0.25s ease",
    "&:hover": {
      background: "#c0392b",
      color: "#f5f0eb",
      borderColor: "#c0392b",
      transform: "scale(1.12)",
      boxShadow: "0 6px 24px rgba(192,57,43,0.4)",
    },
  }}
>
  {action.icon}
</Fab>
        ))}
      </Box>
    </>
  );
}

export default App;