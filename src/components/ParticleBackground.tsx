import { useEffect, useMemo, useState } from "react";
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

function useResponsiveDensity() {
  const [density, setDensity] = useState({ count: 70, reduced: false });

  useEffect(() => {
    const compute = () => {
      const isSmall = window.innerWidth < 640;
      const isMedium = window.innerWidth < 1024;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setDensity({ count: isSmall ? 26 : isMedium ? 46 : 70, reduced });
    };

    compute();
    window.addEventListener("resize", compute, { passive: true });
    return () => window.removeEventListener("resize", compute);
  }, []);

  return density;
}

function ParticleCanvas({ theme }: ParticleBackgroundProps) {
  const { count, reduced } = useResponsiveDensity();
  const color = theme === "dark" ? "#f5f5f5" : "#0a0a0a";

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: { value: "transparent" } },
      particles: {
        number: { value: count, density: { enable: true, width: 1400, height: 1000 } },
        color: { value: color },
        links: {
          enable: true,
          color,
          distance: 140,
          opacity: theme === "dark" ? 0.20 : 0.25,
          width: 1,
        },
        move: {
          enable: !reduced,
          speed: 0.4,
          direction: "none",
          outModes: { default: "bounce" },
        },
        opacity: { value: { min: 0.35, max: 0.75 } },
        size: { value: { min: 1.2, max: 3 } },
      },
      interactivity: {
        events: {
          onHover: { enable: !reduced, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.45 } },
        },
      },
    }),
    [theme, color, count, reduced],
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
