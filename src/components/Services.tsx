import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useInView } from "../hooks/useInView";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services: Service[] = [
  {
    num: "01",
    title: "Brand identity",
    subtitle: "",
    desc: "Building strong, cohesive visual identities that define how your brand is seen and remembered.",
    tags: ["Logo design", "Visual systems", "Brand guidelines"],
  },
  {
    num: "02",
    title: "Package Design",
    subtitle: "",
    desc: "Creating packaging that not only looks premium but enhances product perception and shelf impact.",
    tags: ["Product packaging", "Label design", "Mockups"],
  },
  {
    num: "03",
    title: "Marketing & Visual Design",
    subtitle: "",
    desc: "Designing impactful visuals that communicate clearly across campaigns and platforms.",
    tags: ["Posters", "Banners", "Social Media creatives"],
  },
  {
    num: "04",
    title: "Print & Collateral",
    subtitle: "",
    desc: "Professionally crafted print materials that strengthen brand consistency across touchpoints.",
    tags: ["Brochures", "Flayers", "Business cards", "Menus"],
  },
];

// ─── Styled Components ────────────────────────────────────────────────────────

const SectionRoot = styled("section")({
  padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)",
  background: "#0d0d0d",
  position: "relative",
  overflow: "hidden",
});

const BgAccent = styled(Box)({
  position: "absolute",
  right: 0,
  top: "10%",
  width: "30%",
  height: "80%",
  background:
    "radial-gradient(ellipse at right, rgba(192,57,43,0.05) 0%, transparent 70%)",
  pointerEvents: "none",
});

const EyebrowLabel = styled("p")({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 10,
  letterSpacing: "0.4em",
  color: "#c0392b",
  textTransform: "uppercase",
  margin: "0 0 20px 0",
});

const SectionHeadline = styled("h2")({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: "clamp(36px, 6vw, 80px)",
  fontWeight: 300,
  lineHeight: 1,
  color: "#f5f0eb",
  margin: 0,
});

const HeadlineAccent = styled("em")({
  fontStyle: "italic",
  color: "#c0392b",
  display: "block",
});

const SubText = styled("p")({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 13,
  lineHeight: 1.8,
  color: "#9c9c97",
  maxWidth: 320,
  margin: 0,
});

const ServiceNum = styled(Typography)({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 18,
  color: "rgba(192,57,43,0.4)",
  fontWeight: 300,
});

const ServiceTitle = styled("h3")<{ hovered: boolean }>(({ hovered }) => ({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: "clamp(22px, 3vw, 36px)",
  fontWeight: 400,
  color: hovered ? "#f5f0eb" : "#d0c8c0",
  transition: "color 0.3s",
  letterSpacing: "0.02em",
  margin: 0,
}));

const ServiceDesc = styled("p")({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 14,
  lineHeight: 1.8,
  color: "#9c9c97",
  margin: "0 0 12px 0",
  paddingTop: 4,
});

// Tag pill — contained beige background, black text
const Tag = styled("span")({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: "0.2em",
  color: "#0d0d0d",
  background: "#f5f0eb",
  border: "none",
  padding: "5px 14px",
  textTransform: "uppercase",
  borderRadius: "999px", // ← curved / pill shape
  whiteSpace: "nowrap" as const,
});

// const ArrowIndicator = styled(Typography)({
//   color: "#c0392b",
//   fontSize: 20,
//   fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
// });

const BottomBorder = styled(Box)({
  borderTop: "1px solid rgba(192,57,43,0.12)",
});

// ─── Component ────────────────────────────────────────────────────────────────

const Services: React.FC = () => {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SectionRoot id="services" ref={ref as React.Ref<HTMLElement>}>
      <BgAccent />

      <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "clamp(48px, 8vw, 96px)" }}
        >
          <EyebrowLabel>✦ What we Do</EyebrowLabel>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <SectionHeadline>
              Design
              <HeadlineAccent>Services</HeadlineAccent>
            </SectionHeadline>
            <SubText>
              Full-spectrum graphic design services tailored for brands that
              mean business.
            </SubText>
          </Box>
        </motion.div>

        {/* Service list */}
        <Box>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderTop: "1px solid rgba(192,57,43,0.12)",
                padding: hovered === i ? "28px 0 28px 20px" : "28px 0",
                display: "grid",
                gridTemplateColumns: "60px 1fr auto",
                gap: "0 32px",
                alignItems: "center",
                cursor: "none",
                transition: "background 0.3s, padding 0.3s, border-left 0.3s",
                background:
                  hovered === i ? "rgba(192,57,43,0.04)" : "transparent",
                borderLeft:
                  hovered === i
                    ? "2px solid #c0392b"
                    : "2px solid transparent",
              }}
            >
              {/* Number */}
              <ServiceNum>{s.num}</ServiceNum>

              {/* Content */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "16px",
                    mb: "6px",
                    flexWrap: "wrap",
                  }}
                >
                  <ServiceTitle hovered={hovered === i}>{s.title}</ServiceTitle>
                </Box>

                {/* Animated expand */}
                <motion.div
                  initial={false}
                  animate={{
                    height: hovered === i ? "auto" : 0,
                    opacity: hovered === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <ServiceDesc>{s.desc}</ServiceDesc>

                  {/* Tags — pill/rounded */}
                  <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {s.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Box>
                </motion.div>
              </Box>

              {/* Arrow */}
              <motion.div
                animate={{
                  x: hovered === i ? 0 : -8,
                  opacity: hovered === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* <ArrowIndicator>→</ArrowIndicator> */}
              </motion.div>
            </motion.div>
          ))}

          <BottomBorder />
        </Box>
      </Box>
    </SectionRoot>
  );
};

export default Services;