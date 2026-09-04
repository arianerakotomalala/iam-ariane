import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";
import { Button } from "./components/ui/button";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isLoading, setIsLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(savedTheme ?? (prefersLight ? "light" : "dark"));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 600);
    const onScroll = () => setShowTop(window.scrollY > 620);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <ParticleBackground theme={theme} />

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] grid place-items-center bg-[hsl(var(--background))]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <div className="flex flex-col items-center gap-5">
              <div className="h-12 w-12 rounded-full border border-[hsl(var(--border))] border-t-[hsl(var(--foreground))] motion-safe:animate-spin" />
              <p className="font-mono text-xs font-bold uppercase tracking-[0.34em] text-[hsl(var(--muted-foreground))]">
                Loading...
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Home />
        <Skills />
        {/* <WhatIDo /> */}
        <Projects />
        <About />
      </main>
      <Footer />

      <AnimatePresence>
        {showTop ? (
          <motion.div
            className="fixed bottom-5 right-5 z-50"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
          >
            <Button
              size="icon"
              aria-label="Retour en haut"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
