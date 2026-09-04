import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

const links = [
  { label: "Accueil", href: "#home" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Qui suis-je ?", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(links[0].href);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--background)/0.78)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-18 w-[min(1120px,calc(100%-32px))] items-center justify-between gap-4">
        <a href="#home" className="font-display flex items-center gap-3 font-black" aria-label="Retour à l'accueil">
          <span className="hidden text-2xl leading-tight sm:block">
            Ariane R.
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-base font-normal transition hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--accent))]",
                  isActive
                    ? "bg-[hsl(var(--secondary))] text-[hsl(var(--accent))]"
                    : "text-[hsl(var(--muted-foreground))]",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Changer le thème" onClick={onToggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-t border-[hsl(var(--border))] transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0",
        )}
      >
        <div className="min-h-0">
          <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col gap-2 py-4">
            {links.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-normal transition hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--accent))]",
                    isActive
                      ? "bg-[hsl(var(--secondary))] text-[hsl(var(--accent))]"
                      : "text-[hsl(var(--muted-foreground))]",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
