import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BrainCircuit, Download, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Parcours", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.2 });

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[hsl(var(--background)/0.72)] backdrop-blur-2xl">
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300"
        style={{ scaleX }}
      />
      <nav className="mx-auto flex h-18 w-[min(1120px,calc(100%-32px))] items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-3 font-black" aria-label="Retour à l'accueil">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
            <BrainCircuit className="h-5 w-5" />
          </span>
          <span className="hidden leading-tight sm:block">
            Ariane
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
              Data & IA
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-[hsl(var(--muted-foreground))] transition hover:bg-white/8 hover:text-[hsl(var(--foreground))]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Changer le thème" onClick={onToggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <a
            href="/cv.pdf"
            download
            className="hidden h-11 items-center justify-center gap-2 rounded-[var(--radius)] border border-white/15 bg-white/5 px-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-cyan-300/55 hover:bg-cyan-300/10 sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            CV
          </a>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col gap-2 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-[hsl(var(--muted-foreground))] transition hover:bg-white/8 hover:text-[hsl(var(--foreground))]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
