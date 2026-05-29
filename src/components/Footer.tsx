import { BrainCircuit, BriefcaseBusiness, Code2, Mail, MessageCircle } from "lucide-react";

const socials = [
  { label: "Email", href: "mailto:ariane@example.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: BriefcaseBusiness },
  { label: "GitHub", href: "https://github.com/", icon: Code2 },
  { label: "Facebook", href: "https://www.facebook.com/", icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8">
      <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
            <BrainCircuit className="h-5 w-5" />
          </span>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            © {new Date().getFullYear()} Rakotomalala Harivola Ariane. Tous droits réservés.
          </p>
        </div>

        <div className="flex gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={social.label}
              className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-[hsl(var(--muted-foreground))] transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:text-cyan-100"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
