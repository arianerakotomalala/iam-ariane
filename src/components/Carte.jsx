import { Card as MuiCard, CardContent, CardMedia, Typography, Box, Chip } from "@mui/material";
import { useState } from "react";

export default function Carte({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  const stackItems = project.stack ? project.stack.split(",").map((item) => item.trim()) : [];

  return (
    <MuiCard
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.320, 1)",
        transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: isHovered 
          ? "0 20px 40px rgba(150, 150, 150, 0.25), 0 0 30px rgba(150, 150, 150, 0.15)" 
          : "0 8px 16px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        background: "rgba(150, 150, 150, 0.08)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(150, 150, 150, 0.2)",
        color: "white",
        p: 0,
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
          transition: "left 0.5s ease",
          pointerEvents: "none",
          zIndex: 1,
        },
        "&:hover::before": {
          left: "100%",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ position: "relative", overflow: "hidden", height: 220 }}>
        <CardMedia
          component="img"
          height="220"
          image={project.imgSrc}
          alt={project.projectName}
          sx={{
            objectFit: "cover",
            opacity: isHovered ? 0.6 : 1,
            transition: "opacity 0.4s ease, transform 0.4s ease",
            transform: isHovered ? "scale(1.08)" : "scale(1)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: isHovered
              ? "rgba(100, 150, 255, 0.2)"
              : "transparent",
            transition: "background 0.4s ease",
            pointerEvents: "none",
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, position: "relative", zIndex: 2 }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div" 
          sx={{ 
            fontWeight: "bold", 
            fontSize: "1.1rem",
            color: "#cccccc",
            marginBottom: 1,
            transition: "transform 0.3s ease",
            transform: isHovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          {project.projectName}
        </Typography>

        <Typography 
          variant="body2" 
          sx={{ 
            marginBottom: 2, 
            opacity: 0.85,
            lineHeight: 1.6,
            color: "#d0d0d0",
          }}
        >
          {project.description}
        </Typography>

        {stackItems.length > 0 && (
          <Box
            sx={{
              display: "flex",
              gap: 0.8,
              flexWrap: "wrap",
              marginTop: 2,
            }}
          >
            {stackItems.map((item, idx) => (
              <Chip
                key={idx}
                label={item}
                size="small"
                sx={{
                  background: "rgba(150, 150, 150, 0.2)",
                  border: "1px solid rgba(150, 150, 150, 0.4)",
                  color: "#cccccc",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  cursor: "default",
                  "&:hover": {
                  background: "rgba(150, 150, 150, 0.3)",
                  borderColor: "rgba(150, 150, 150, 0.6)",
                  },
                }}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </MuiCard>
  );
}