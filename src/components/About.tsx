import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useInView } from "../hooks/useInView";
import me1 from "../assets/me/images_1.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Stat {
  value: string;
  label: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats: Stat[] = [
  { value: "5+",   label: "Years of Industry Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "80+",  label: "Happy Clients" },
  { value: "10",   label: "Design Specialties" },
];

// ─── Styled Components ────────────────────────────────────────────────────────

const SectionRoot = styled("section")({
  padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)",
  position: "relative",
  overflow: "hidden",
});

const BgAccent = styled(Box)({
  position: "absolute",
  left: 0,
  top: "20%",
  width: "40%",
  height: "60%",
  background:
    "radial-gradient(ellipse at left, rgba(192,57,43,0.06) 0%, transparent 70%)",
  pointerEvents: "none",
});

const ImageWrapper = styled(Box)({
  width: "100%",
  paddingBottom: "120%",
  position: "relative",
  background: "linear-gradient(135deg, #111111 0%, #181818 100%)",
  border: "1px solid rgba(192,57,43,0.15)",
  overflow: "hidden",
});

const CoverImage = styled("img")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const EyebrowLabel = styled("p")({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 10,
  letterSpacing: "0.4em",
  color: "#c0392b",
  textTransform: "uppercase",
  marginBottom: 20,
  margin: "0 0 20px 0",
});

// Fix: use styled("h2") directly — avoids `component` prop TS error on styled(Typography)
const Headline = styled("h2")({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: "clamp(36px, 5vw, 62px)",
  fontWeight: 300,
  lineHeight: 1.1,
  color: "#f5f0eb",
  marginBottom: 24,
  margin: "0 0 24px 0",
});

const HeadlineAccent = styled("em")({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontStyle: "normal",
  color: "#c0392b",
  display: "block",
});

const Divider = styled(Box)({
  width: 48,
  height: 1,
  background: "#c0392b",
  marginBottom: 32,
});

const BodyText = styled("p")({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 14,
  lineHeight: 1.9,
  color: "#9c9c97",
  fontWeight: 300,
  margin: "0 0 20px 0",
});

const StatItem = styled(Box)({
  borderLeft: "1px solid rgba(192,57,43,0.3)",
  paddingLeft: 16,
});

const StatValue = styled(Typography)({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 36,
  fontWeight: 600,
  color: "#c0392b",
  lineHeight: 1,
});

const StatLabel = styled(Typography)({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 10,
  letterSpacing: "0.15em",
  color: "#5a5550",
  textTransform: "uppercase",
  marginTop: "4px",
});

// ─── Component ────────────────────────────────────────────────────────────────

const About: React.FC = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <SectionRoot id="about" ref={ref as React.Ref<HTMLElement>}>
      {/* BG accent */}
      <BgAccent />

      <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
        {/*
          Replace <Grid container/item> with a plain CSS grid Box.
          MUI Grid v5 has breaking prop changes; using Box avoids all TS overload errors.
        */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: "40px", md: "clamp(40px, 6vw, 100px)" },
            alignItems: "center",
          }}
        >
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            <ImageWrapper>
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CoverImage src={me1} alt="About Illiora Studio" />
              </Box>
            </ImageWrapper>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            <EyebrowLabel>✦ About</EyebrowLabel>

            <Headline>
              Crafting Identities
              <br />
              <HeadlineAccent>That Speak</HeadlineAccent>
            </Headline>

            <Divider />

            <BodyText>
              Illiora is an independent design studio led by Ashwanth,
              specializing in building refined brand identities and visual
              systems. With over 5 years of experience, the studio focuses on
              creating work that is not only visually compelling but
              strategically designed to elevate brand perception. Working
              across branding, packaging, and digital visuals, Illiora
              delivers design that feels premium, purposeful, and timeless.
            </BodyText>

            {/* Stats grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px",
                mt: 2,
              }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <StatItem>
                    <StatValue>{s.value}</StatValue>
                    <StatLabel>{s.label}</StatLabel>
                  </StatItem>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Box>
    </SectionRoot>
  );
};

export default About;