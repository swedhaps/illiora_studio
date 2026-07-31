import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { works, Work } from "../data/worksData";

// ─── Styled Components ────────────────────────────────────────────────────────

const PageRoot = styled(Box)({
  minHeight: "100vh",
  background: "#0d0d0d",
  padding: "clamp(100px, 12vw, 160px) clamp(24px, 6vw, 120px) clamp(80px, 10vw, 120px)",
});

const BackLink = styled(Box)({
  fontFamily: "'Poppins', sans-serif",
  fontSize: 11,
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "#c0392b",
  cursor: "pointer",
  marginBottom: "48px",
  display: "inline-block",
  transition: "opacity 0.3s",
  "&:hover": { opacity: 0.7 },
});

const EyebrowLabel = styled("p")({
  fontFamily: "'Poppins', sans-serif",
  fontSize: 10,
  letterSpacing: "0.4em",
  color: "#c0392b",
  textTransform: "uppercase",
  margin: "0 0 20px 0",
});

const PageHeadline = styled("h1")({
  fontFamily: "'Poppins', sans-serif",
  fontSize: "clamp(36px, 6vw, 72px)",
  fontWeight: 300,
  lineHeight: 1.05,
  color: "#f5f0eb",
  margin: "0 0 56px 0",
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
  fontFamily: "'Poppins', sans-serif",
  fontSize: 9,
  letterSpacing: "0.4em",
  color: "#c0392b",
  textTransform: "uppercase",
});

const OverlayTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
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
  fontFamily: "'Poppins', sans-serif",
  fontSize: 20,
  color: "#f5f0eb",
  fontWeight: 400,
});

const CardMeta = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontSize: 9,
  letterSpacing: "0.2em",
  color: "#9c9c97",
  textTransform: "uppercase",
  marginTop: "4px",
});

const CardYear = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontSize: 16,
  color: "rgba(192,57,43,0.4)",
});

// ─── ProjectCard ───────────────────────────────────────────────────────────────

interface ProjectCardProps {
  work: Work;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ work, index }) => {
  const [hov, setHov] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => navigate(`/works/${work.id}`)}
      style={{ cursor: "none", position: "relative", overflow: "hidden" }}
    >
      <CardImageWrapper>
        <CardImage
          src={work.image}
          alt={work.title}
          style={{ transform: hov ? "scale(1.06)" : "scale(1)" }}
        />
        <HoverOverlay animate={{ opacity: hov ? 1 : 0 }} transition={{ duration: 0.3 }}>
          <OverlayLabel>View Project</OverlayLabel>
          <Box sx={{ width: 40, height: "1px", background: "#c0392b" }} />
          <OverlayTitle>{work.tag || work.title}</OverlayTitle>
        </HoverOverlay>
      </CardImageWrapper>

      <CardInfo>
        <Box>
          <CardTitle>{work.tag || work.title}</CardTitle>
          <CardMeta>{work.title}</CardMeta>
        </Box>
        <CardYear>{work.year}</CardYear>
      </CardInfo>
    </motion.div>
  );
};

// ─── CategoryWorks ──────────────────────────────────────────────────────────────

const CategoryWorks: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const decodedCategory = category ? decodeURIComponent(category) : "";

  const projects = works.filter((w) => w.category === decodedCategory);

  if (projects.length === 0) {
    return (
      <PageRoot>
        <Box sx={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <Typography sx={{ fontFamily: "'Poppins', sans-serif", color: "#f5f0eb", fontSize: 24, mb: 4 }}>
            No projects found in this category.
          </Typography>
          <BackLink onClick={() => navigate("/#works")}>← Back to Works</BackLink>
        </Box>
      </PageRoot>
    );
  }

  return (
    <PageRoot>
      <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
        <BackLink onClick={() => navigate("/#works")}>← Back to Works</BackLink>

        <EyebrowLabel>✦ Portfolio</EyebrowLabel>
        <PageHeadline>{decodedCategory}</PageHeadline>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((work, i) => (
            <ProjectCard key={work.id} work={work} index={i} />
          ))}
        </Box>
      </Box>
    </PageRoot>
  );
};

export default CategoryWorks;