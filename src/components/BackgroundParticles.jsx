import React from "react";
import ParticlesBg from "particles-bg";
import { useTheme } from "@mui/material/styles";

export default function BackgroundParticles() {
  const theme = useTheme();
  const particleColor = theme.palette.mode === "dark" ? "#7c83ff" : "#5f5ce6";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <ParticlesBg type="cobweb" bg={true} color={particleColor} num={45} />
    </div>
  );
}
