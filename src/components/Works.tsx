import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useInView } from "../hooks/useInView";
import work1 from "../assets/works/work1.jpeg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Work {
  id: number;
  title: string;
  category: string;
  tag: string;
  year: string;
  colors: string[];
  image: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories: string[] = [
  "All", "Logo", "Packaging", "Flyer", "Brochure",
  "Menu", "Banner", "Visiting Card", "Poster",
];

const works: Work[] = [
  { id: 1, title: "Noir Coffee Co.",  category: "Logo",         tag: "Brand Identity",   year: "2024", colors: ["#1a1a1a", "#c9a96e", "#f5f0eb"], image: work1 },
  { id: 2, title: "Velvet Box",       category: "Packaging",    tag: "Luxury Packaging", year: "2024", colors: ["#2d1b1b", "#c0392b", "#f5e6d3"], image: work1 },
  { id: 3, title: "Ember Events",     category: "Flyer",        tag: "Event Promo",      year: "2024", colors: ["#0d0d0d", "#e74c3c", "#ffffff"],  image: work1 },
  { id: 4, title: "Aurum Finance",    category: "Brochure",     tag: "Corporate",        year: "2023", colors: ["#111111", "#c9a96e", "#f5f0eb"], image: work1 },
  { id: 5, title: "The Spice Trail",  category: "Menu",         tag: "Restaurant Brand", year: "2023", colors: ["#1a0f0f", "#c0392b", "#f5deb3"], image: work1 },
  { id: 6, title: "Luxe Interiors",   category: "Banner",       tag: "Social Media",     year: "2023", colors: ["#0a0a0a", "#b0a89e", "#ffffff"],  image: work1 },
  { id: 7, title: "Studio Muse",      category: "Visiting Card",tag: "Creative Agency",  year: "2024", colors: ["#0d0d0d", "#c0392b", "#f5f0eb"], image: work1 },
  { id: 8, title: "Petal & Pine",     category: "Logo",         tag: "Floral Brand",     year: "2023", colors: ["#1a1a1a", "#c9a96e", "#e8ddd0"], image: work1 },
  { id: 9, title: "Dark Matter",      category: "Packaging",    tag: "Coffee Brand",     year: "2024", colors: ["#080808", "#c0392b", "#f5f0eb"], image: work1 },
];

// ─── Styled Components ────────────────────────────────────────────────────────

const SectionRoot = styled("section")({
  padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)",
  background: "#0d0d0d",
  position: "relative",
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
});

const FilterButton = styled("button")<{ active: boolean }>(({ active }) => ({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 9,
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  padding: "8px 18px",
  border: "1px solid",
  borderColor: active ? "#c0392b" : "rgba(192,57,43,0.2)",
  background: active ? "#c0392b" : "transparent",
  color: active ? "#f5f0eb" : "#9c9c97",
  cursor: "none",
  transition: "all 0.3s",
  borderRadius: "999px", // pill shape — consistent with tags in Services
  "&:hover": {
    borderColor: "#c0392b",
    color: "#f5f0eb",
  },
}));

const CardImageWrapper = styled(Box)({
  position: "relative",
  paddingBottom: "110%",
  overflow: "hidden",
  background: "#111",
});

const CardImage = styled("img")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.6s ease",
});

const HoverOverlay = styled(motion.div)({
  position: "absolute",
  inset: 0,
  background: "rgba(8,8,8,0.85)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 16,
  opacity: 0, // hidden by default; framer-motion animate drives visibility
});

const OverlayLabel = styled(Typography)({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 9,
  letterSpacing: "0.4em",
  color: "#c0392b",
  textTransform: "uppercase",
});

const OverlayTitle = styled(Typography)({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 28,
  color: "#f5f0eb",
});

const CardInfo = styled(Box)({
  padding: "16px 0 8px",
  borderBottom: "1px solid rgba(192,57,43,0.1)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
});

const CardTitle = styled(Typography)({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 20,
  color: "#f5f0eb",
  fontWeight: 400,
});

const CardMeta = styled(Typography)({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 9,
  letterSpacing: "0.2em",
  color: "#9c9c97",
  textTransform: "uppercase",
  marginTop: "4px",
});

const CardYear = styled(Typography)({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 16,
  color: "rgba(192,57,43,0.4)",
});

const CtaLink = styled("a")({
  fontFamily: "var(--font-body, 'Poppins', sans-serif)",
  fontSize: 11,
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "#c0392b",
  border: "1px solid rgba(192,57,43,0.4)",
  padding: "16px 48px",
  display: "inline-block",
  transition: "all 0.3s",
  textDecoration: "none",
  "&:hover": {
    background: "rgba(192,57,43,0.1)",
    borderColor: "#c0392b",
  },
});

// ─── WorkCard ─────────────────────────────────────────────────────────────────

interface WorkCardProps {
  work: Work;
  index: number;
  inView: boolean;
}

const WorkCard: React.FC<WorkCardProps> = ({ work, index, inView }) => {
  const [hov, setHov] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ cursor: "none", position: "relative", overflow: "hidden" }}
    >
      <CardImageWrapper>
        <CardImage
          src={work.image}
          alt={work.title}
          style={{ transform: hov ? "scale(1.06)" : "scale(1)" }}
        />
        <HoverOverlay
          animate={{ opacity: hov ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <OverlayLabel>View Project</OverlayLabel>
          <Box sx={{ width: 40, height: "1px", background: "#c0392b" }} />
          <OverlayTitle>{work.title}</OverlayTitle>
        </HoverOverlay>
      </CardImageWrapper>

      <CardInfo>
        <Box>
          <CardTitle>{work.title}</CardTitle>
          <CardMeta>
            {work.category} · {work.tag}
          </CardMeta>
        </Box>
        <CardYear>{work.year}</CardYear>
      </CardInfo>
    </motion.div>
  );
};

// ─── Works ────────────────────────────────────────────────────────────────────

const Works: React.FC = () => {
  const [ref, inView] = useInView(0.05);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered: Work[] =
    activeCategory === "All"
      ? works
      : works.filter((w) => w.category === activeCategory);

  return (
    <SectionRoot id="works" ref={ref as React.Ref<HTMLElement>}>
      <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "clamp(40px, 6vw, 72px)" }}
        >
          <EyebrowLabel>✦ Portfolio</EyebrowLabel>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
              mb: "40px",
            }}
          >
            <SectionHeadline>
              Design{" "}
              <HeadlineAccent>Portfolio</HeadlineAccent>
            </SectionHeadline>
          </Box>

          {/* Filter tabs */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {categories.map((cat) => (
              <FilterButton
                key={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </FilterButton>
            ))}
          </Box>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {filtered.map((work, i) => (
              <WorkCard key={work.id} work={work} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: "center", marginTop: 64 }}
        >
          <CtaLink
            href="https://www.instagram.com/illiora.studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All on Instagram ↗
          </CtaLink>
        </motion.div>
      </Box>
    </SectionRoot>
  );
};

export default Works;