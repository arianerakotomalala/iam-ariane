import React from "react";
import ParticlesBg from "particles-bg";

export default function BackgroundParticles() {
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
      <ParticlesBg type="cobweb" bg={true} color="#7c3aed" />
    </div>
  );
}
