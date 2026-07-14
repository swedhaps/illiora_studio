import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  List,
  ListItem,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import logo_white from "../assets/logo_white.png";

// ─── Google Fonts ────────────────────────────────────────────────────────────
// Add to your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet">

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
];

// ─── Styled Components ───────────────────────────────────────────────────────

const NavLink = styled(MuiLink)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: 11,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#ffffff",
  textDecoration: "none",
  position: "relative",
  transition: "color 0.3s",
  "&:hover": {
    color: "#c0392b",
  },
});

const ContactButton = styled(MuiLink)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: 11,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#f5f0eb",
  background: "#9c241c",
  padding: "10px 24px",
  textDecoration: "none",
  display: "inline-block",
  borderRadius: "24px", // curved vertices
  transition: "all 0.3s",
  "&:hover": {
    background: "#e74c3c",
    color: "#f5f0eb",
  },
});

const MobileNavLink = styled(motion.a)({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 44,
  fontWeight: 300,
  letterSpacing: "0.08em",
  color: "#ffffff",
  textDecoration: "none",
  display: "block",
});

const HamburgerLine = styled(motion.span)<{ width?: number }>(({ width = 28 }) => ({
  display: "block",
  width,
  height: 1,
  background: "#f5f0eb",
  transformOrigin: "center",
}));

// ─── Component ───────────────────────────────────────────────────────────────

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 48px",
          background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(192,57,43,0.12)" : "none",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <MuiLink href="#home" sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={logo_white}
            alt="Illiora Studio Logo"
            sx={{ height: 26, width: "auto", objectFit: "contain" }}
          />
        </MuiLink>

        {/* Desktop Nav */}
        <List
          className="desktop-nav"
          sx={{
            display: "flex",
            gap: "40px",
            listStyle: "none",
            alignItems: "center",
            padding: 0,
            margin: 0,
          }}
        >
          {navItems.map((item) => (
            <ListItem key={item.label} sx={{ padding: 0, width: "auto" }}>
              <NavLink href={item.href}  sx={{
        textTransform: "capitalize",
      }}>{item.label}</NavLink>
            </ListItem>
          ))}
          <ListItem sx={{ padding: 0, width: "auto" }}>
            <ContactButton href="#contact">Contact Us</ContactButton>
          </ListItem>
        </List>

        {/* Hamburger */}
        <IconButton
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          disableRipple
          sx={{
            background: "none",
            border: "none",
            cursor: "none",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
            borderRadius: 0,
            "&:hover": { background: "none" },
          }}
        >
          {[0, 1, 2].map((i) => (
            <HamburgerLine
              key={i}
              width={i === 1 ? 20 : 28}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 9 }
                    : i === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -9 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
            />
          ))}
        </IconButton>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              background: "#080808",
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 40,
            }}
          >
            {navItems.map((item, i) => (
              <MobileNavLink
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex !important; }
        .hamburger { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;