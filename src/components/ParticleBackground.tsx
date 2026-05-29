import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

type ParticleBackgroundProps = {
  theme: "dark" | "light";
};

const initParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

function ParticleCanvas({ theme }: ParticleBackgroundProps) {
  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: { value: "transparent" } },
      particles: {
        number: { value: 56, density: { enable: true, width: 1200, height: 900 } },
        color: {
          value: theme === "dark" ? ["#22d3ee", "#a78bfa", "#34d399"] : ["#0284c7", "#7c3aed", "#059669"],
        },
        links: {
          enable: true,
          color: theme === "dark" ? "#67e8f9" : "#0ea5e9",
          distance: 145,
          opacity: theme === "dark" ? 0.2 : 0.16,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.55,
          direction: "none",
          outModes: { default: "bounce" },
        },
        opacity: { value: { min: 0.16, max: 0.42 } },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 155, links: { opacity: 0.34 } },
          push: { quantity: 2 },
        },
      },
    }),
    [theme],
  );

  return <Particles id="portfolio-particles" className="pointer-events-none fixed inset-0" options={options} />;
}

export default function ParticleBackground({ theme }: ParticleBackgroundProps) {
  return (
    <ParticlesProvider init={initParticles}>
      <ParticleCanvas theme={theme} />
    </ParticlesProvider>
  );
}
