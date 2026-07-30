import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { works, Work } from "../data/worksData";

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const work = works.find((w: Work) => w.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!work) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          background: "#0d0d0d",
        }}
      >
        <Typography sx={{ fontFamily: "'Poppins', sans-serif", color: "#f5f0eb", fontSize: 24 }}>
          Project not found.
        </Typography>
        <Box
          onClick={() => navigate("/")}
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#c0392b",
            cursor: "pointer",
            border: "1px solid rgba(192,57,43,0.4)",
            padding: "12px 28px",
            "&:hover": { background: "rgba(192,57,43,0.1)" },
          }}
        >
          ← Back Home
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0d0d0d",
        padding: "clamp(100px, 12vw, 160px) clamp(24px, 6vw, 120px) clamp(80px, 10vw, 120px)",
      }}
    >
      <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Back link */}


        {/* Header */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 10,
            letterSpacing: "0.4em",
            color: "#c0392b",
            textTransform: "uppercase",
            mb: "16px",
          }}
        >
          {work.category} · {work.tag}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
            mb: "48px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 300,
              color: "#f5f0eb",
              lineHeight: 1.05,
            }}
          >
            {work.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 18,
              color: "rgba(192,57,43,0.5)",
            }}
          >
            {work.year}
          </Typography>
        </Box>

        {/* Gallery — if the project has multiple images, show them all at their natural size; otherwise fall back to the single thumbnail */}
        {work.gallery && work.gallery.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: "16px",
              mb: "56px",
            }}
          >
            {work.gallery.map((img, i) => (
              <Box
                key={i}
                component="img"
                src={img}
                alt={`${work.title} ${i + 1}`}
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            ))}
          </Box>
        ) : (
          <Box
            component="img"
            src={work.image}
            alt={work.title}
            sx={{
              width: "100%",
              height: "auto",
              mb: "56px",
              display: "block",
            }}
          />
        )}

        {/* Description + palette */}
        <Box
          sx={{
            display: "flex",
            gap: "clamp(40px, 6vw, 80px)",
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <Box sx={{ flex: 2, minWidth: 280 }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 9,
                letterSpacing: "0.3em",
                color: "#9c9c97",
                textTransform: "uppercase",
                mb: "16px",
              }}
            >
              About the Project
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                lineHeight: 1.9,
                color: "#9c9c97",
                fontWeight: 300,
              }}
            >
              {work.description ||
                "A carefully crafted design solution tailored to the brand's identity and goals."}
            </Typography>
          </Box>

          <Box sx={{ flex: 1, minWidth: 200 }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 9,
                letterSpacing: "0.3em",
                color: "#9c9c97",
                textTransform: "uppercase",
                mb: "16px",
              }}
            >
              Palette
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {work.colors.map((c: string) => (
                <Box key={c} sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      background: c,
                      border: "1px solid rgba(245,240,235,0.15)",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 12,
                      color: "#9c9c97",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {c}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkDetail;