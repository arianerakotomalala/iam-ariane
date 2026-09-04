import { Mail } from "lucide-react";
import { DiscordIcon, LinkedinIcon, WhatsappIcon } from "./icons/BrandIcons";
import { CONTACT } from "../statics/contact";

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "À propos", href: "#about" },
];

const socials = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    color: "#EA4335",
  },
  {
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: CONTACT.whatsappHref,
    icon: WhatsappIcon,
    color: "#25D366",
  },
  {
    label: "LinkedIn",
    value: CONTACT.linkedinHandle,
    href: CONTACT.linkedinHref,
    icon: LinkedinIcon,
    color: "#0A66C2",
  },
  {
    label: "Discord",
    value: CONTACT.discordDisplay,
    href: undefined,
    icon: DiscordIcon,
    color: "#5865F2",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-[hsl(var(--border))]">
      <div className="section-shell">
        <div className="grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-balance text-4xl font-black leading-[1.05] sm:text-5xl">
              Travaillons ensemble sur votre prochain projet data.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[hsl(var(--muted-foreground))]">
              Data Science, IA et développement backend : je transforme vos données en décisions,
              et vos idées en solutions concrètes.
            </p>
            <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
              Madagascar · Disponible en remote ou en local
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-5 inline-flex items-center gap-2 border-b border-[hsl(var(--accent))] pb-1 font-bold"
            >
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent))]" />
              {CONTACT.email}
            </a>
          </div>

          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
              Navigation
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-base font-bold transition hover:text-[hsl(var(--accent))]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
              Connexion
            </p>
            <ul className="mt-4 space-y-3">
              {socials.map((social) => {
                const isExternal = social.href?.startsWith("http");
                const Tag = social.href ? "a" : "span";
                return (
                  <li key={social.label}>
                    <Tag
                      href={social.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="group flex items-center gap-3"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-[hsl(var(--border))]">
                        <social.icon className="h-4 w-4" style={{ color: social.color }} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base font-bold transition group-hover:text-[hsl(var(--accent))]">
                          {social.label}
                        </span>
                        <span className="block truncate text-xs text-[hsl(var(--muted-foreground))]">
                          {social.value}
                        </span>
                      </span>
                    </Tag>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[hsl(var(--border))] py-6 text-xs text-[hsl(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()}  Ariane. Tout droits réservés.</p>
          <p>Apprentie Data Scientist &amp; IA · Développeuse Php - Javascript</p>
        </div>
      </div>
    </footer>
  );
}
