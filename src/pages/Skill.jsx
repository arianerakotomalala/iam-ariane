import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";

export default function Skill() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      color: "#6495ff",
      skills: ["React", "JavaScript", "HTML/CSS", "Material-UI", "Responsive Design"],
    },
    {
      title: "Backend",
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      color: "#52d273",
      skills: ["Python", "Node.js", "RESTful APIs", "Database Design", "Authentication"],
    },
    {
      title: "Tools & Methods",
      icon: <BuildIcon sx={{ fontSize: 40 }} />,
      color: "#ff6b6b",
      skills: ["Git/GitHub", "VS Code", "Vite", "TKinter", "Agile Methodology"],
    },
  ];

  return (
    <Box id="skills" sx={{ width: "100%", py: 8, backgroundColor: "rgba(30, 30, 40, 0.3)" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: "center",
              color: "#cccccc",
            }}
          >
            Skills & Expertise
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#d0d0d0",
              fontSize: "1.05rem",
              mb: 6,
            }}
          >
            A comprehensive overview of my technical skills and expertise
          </Typography>
          <Box
            sx={{
              height: "3px",
              width: "60px",
              background: "#cccccc",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {skillCategories.map((category, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  background: "rgba(150, 150, 150, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(150, 150, 150, 0.2)",
                  borderRadius: "16px",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.320, 1)",
                  cursor: "pointer",
                  transform: hoveredCategory === idx ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                  boxShadow:
                    hoveredCategory === idx
                      ? `0 20px 40px rgba(150, 150, 150, 0.2)`
                      : "0 8px 16px rgba(0, 0, 0, 0.2)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-50%",
                    right: "-50%",
                    width: "100px",
                    height: "100px",
                    background: `radial-gradient(circle, rgba(150, 150, 150, 0.2), transparent)`,
                    transition: "all 0.4s ease",
                    opacity: hoveredCategory === idx ? 1 : 0,
                    pointerEvents: "none",
                  },
                  "&:hover::before": {
                    top: "20%",
                    right: "10%",
                  },
                }}
                onMouseEnter={() => setHoveredCategory(idx)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <Box
                  sx={{
                    color: "#cccccc",
                    mb: 2,
                    transition: "transform 0.3s ease",
      transform: hoveredCategory === idx ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                  }}
                >
                  {category.icon}
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    color: "#e5e5e5",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {category.title}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, position: "relative", zIndex: 1 }}>
                  {category.skills.map((skill, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 2,
                        color: "#d0d0d0",
                        transition: "all 0.3s ease",
                        transform: hoveredCategory === idx ? "translateX(8px)" : "translateX(0)",
                        "&:before": {
                          content: '""',
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: category.color,
                          mr: 2,
                          transition: "transform 0.3s ease",
                          transform: hoveredCategory === idx ? "scale(1.3)" : "scale(1)",
                        },
                      }}
                    >
                      {skill}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Additional skills section */}
        <Box
          sx={{
            p: 4,
            background: "linear-gradient(135deg, rgba(100, 150, 255, 0.08) 0%, rgba(180, 100, 255, 0.08) 100%)",
            border: "1px solid rgba(100, 150, 255, 0.2)",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#e5e5e5" }}>
            Always Learning & Adapting
          </Typography>
          <Typography sx={{ color: "#d0d0d0", lineHeight: 1.8 }}>
            I'm committed to continuous improvement and staying updated with industry trends. I actively explore new frameworks, tools, and methodologies to deliver the best solutions.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
