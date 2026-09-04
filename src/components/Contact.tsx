import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "./ui/card";
import { DiscordIcon, LinkedinIcon, WhatsappIcon } from "./icons/BrandIcons";
import { CONTACT } from "../statics/contact";

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

export default function Contact() {
  return (
    <section id="contact" className="section-band">
      <div className="section-shell">
      <SectionHeading
        eyebrow=""
        title="Contact"
        description="Une idée, un projet, une collaboration,un de mes projets vous interrese , ou simplement l'envie d'échanger autour de la Data, de l'IA ou du développement ? Je serais ravie d'en discuter."
      />

      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6 sm:p-7">
              <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-[hsl(var(--muted-foreground))]">
                <MapPin className="h-4 w-4 text-[hsl(var(--accent))]" />
                Madagascar · Disponible en remote ou en local
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {socials.map((social) => {
                  const isExternal = social.href?.startsWith("http");
                  const Tag = social.href ? "a" : "div";
                  return (
                    <Tag
                      key={social.label}
                      href={social.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="flex items-center gap-4 rounded-[var(--radius)] p-4 transition hover:-translate-y-0.5 hover:bg-[hsl(var(--secondary))]"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[hsl(var(--border))]">
                        <social.icon className="h-5 w-5" style={{ color: social.color }} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-bold">{social.label}</span>
                        <span className="block truncate text-sm text-[hsl(var(--muted-foreground))]">
                          {social.value}
                        </span>
                      </span>
                    </Tag>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
