import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import { works } from "../data/worksData";

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

const CardImageWrapper = styled(Box)({
  background: "#0d0d0d",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  position: "relative",
});

const CardImage = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
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
  opacity: 0,
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
  borderRadius: "999px",
  "&:hover": {
    background: "rgba(192,57,43,0.1)",
    borderColor: "#c0392b",
  },
});

// ─── Group works by category ───────────────────────────────────────────────────

interface CategoryGroup {
  category: string;
  count: number;
  thumbnail: string;
}

// ─── Custom category display order ─────────────────────────────────────────────
// Categories not listed here (or not yet present in worksData) fall to the end,
// in the order they first appear in the data.
const CATEGORY_ORDER: string[] = [
  "Top Branding",
  "Logo",
  "Company Profile",
  "Brochure",
  "Flyer",
  "Poster",
  "Menu",
  "Visiting Card",
  "Banner",
  "Letter Head",
  "Exhibition Booths",
];

function getCategoryGroups(): CategoryGroup[] {
  const map = new Map<string, CategoryGroup>();
  works.forEach((w) => {
    if (!map.has(w.category)) {
      map.set(w.category, { category: w.category, count: 0, thumbnail: w.image });
    }
    map.get(w.category)!.count += 1;
  });

  const groups = Array.from(map.values());

  groups.sort((a, b) => {
    const aIndex = CATEGORY_ORDER.indexOf(a.category);
    const bIndex = CATEGORY_ORDER.indexOf(b.category);
    const aRank = aIndex === -1 ? CATEGORY_ORDER.length : aIndex;
    const bRank = bIndex === -1 ? CATEGORY_ORDER.length : bIndex;
    return aRank - bRank;
  });

  return groups;
}

// ─── CategoryCard ──────────────────────────────────────────────────────────────

interface CategoryCardProps {
  group: CategoryGroup;
  index: number;
  inView: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ group, index, inView }) => {
  const [hov, setHov] = React.useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => navigate(`/works/category/${encodeURIComponent(group.category)}`)}
      style={{ cursor: "none", position: "relative", overflow: "hidden" }}
    >
      <CardImageWrapper>
        <CardImage
          src={group.thumbnail}
          alt={group.category}
          style={{ transform: hov ? "scale(1.06)" : "scale(1)" }}
        />
        <HoverOverlay animate={{ opacity: hov ? 1 : 0 }} transition={{ duration: 0.3 }}>
          <OverlayLabel>{group.count > 1 ? "View Projects" : "View Project"}</OverlayLabel>
          <Box sx={{ width: 40, height: "1px", background: "#c0392b" }} />
          <OverlayTitle>{group.category}</OverlayTitle>
        </HoverOverlay>
      </CardImageWrapper>

      <CardInfo>
        <Box>
          <CardTitle>{group.category}</CardTitle>
          <CardMeta>
            {group.count} {group.count === 1 ? "Project" : "Projects"}
          </CardMeta>
        </Box>
      </CardInfo>
    </motion.div>
  );
};

// ─── Works ────────────────────────────────────────────────────────────────────

const Works: React.FC = () => {
  const [ref, inView] = useInView(0.05);
  const categoryGroups = getCategoryGroups();

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
            }}
          >
            <SectionHeadline>
              Design <HeadlineAccent>Portfolio</HeadlineAccent>
            </SectionHeadline>
          </Box>
        </motion.div>

        {/* Grid — one card per category */}
        <AnimatePresence mode="wait">
          <motion.div
            key="category-grid"
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
            {categoryGroups.map((group, i) => (
              <CategoryCard key={group.category} group={group} index={i} inView={inView} />
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
            View All on Instagram
          </CtaLink>
        </motion.div>
      </Box>
    </SectionRoot>
  );
};

export default Works;