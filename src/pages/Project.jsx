import { Grid, Container, Typography, Box } from "@mui/material";
import Carte from "../components/Carte";
import myProject from "../static/myProject";
import { useState, useEffect } from "react";

export default function Project() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="projects-section"
      sx={{
        width: "100%",
        paddingY: 8,
        background: "rgba(30, 30, 40, 0.5)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(150, 150, 150, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            marginBottom: 8,
            textAlign: "center",
            animation: isVisible ? "fadeInUp 0.8s ease-out" : "none",
            "@keyframes fadeInUp": {
              from: {
                opacity: 0,
                transform: "translateY(20px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
            paddingX: 2,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              color: "#cccccc",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            My Projects
          </Typography>
          <Box
            sx={{
              height: "3px",
              width: "60px",
              background: "#cccccc",
              margin: "16px auto 24px",
              borderRadius: "2px",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              opacity: 0.8,
              color: "#d0d0d0",
              fontSize: "1.05rem",
              lineHeight: 1.6,
            }}
          >
            Discover my recent projects and technical achievements
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          {myProject.map((proj, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                animation: isVisible ? `fadeInUp 0.8s ease-out ${index * 0.1}s both` : "none",
                "@keyframes fadeInUp": {
                  from: {
                    opacity: 0,
                    transform: "translateY(20px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              <Carte project={proj} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
