import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons/BrandIcons";
import { CONTACT } from "../statics/contact";

const socials = [
  { label: "GitHub", href: CONTACT.githubHref, icon: GithubIcon },
  { label: "LinkedIn", href: CONTACT.linkedinHref, icon: LinkedinIcon },
  { label: "WhatsApp", href: CONTACT.whatsappHref, icon: WhatsappIcon },
  { label: "Email", href: `mailto:${CONTACT.email}`, icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[hsl(var(--border))] py-8">
      <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display font-black">Rakotomalala Harivola Ariane</p>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">Data Science · AI · Backend</p>
        </div>

        <div className="flex gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={social.label}
              className="grid h-10 w-10 place-items-center rounded-md border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] transition hover:-translate-y-0.5 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-[hsl(var(--muted-foreground))]">
        © {new Date().getFullYear()} — Rakotomalala Harivola Ariane
      </p>
    </footer>
  );
}
