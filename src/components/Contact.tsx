import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const socials = [
  { label: "Email", value: "ariane@example.com", href: "mailto:ariane@example.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com", href: "https://www.linkedin.com/", icon: BriefcaseBusiness },
  { label: "GitHub", value: "github.com", href: "https://github.com/", icon: Code2 },
  { label: "Facebook", value: "facebook.com", href: "https://www.facebook.com/", icon: MessageCircle },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Discutons data, IA ou opportunités de collaboration."
        description="Un message, une idée de projet ou une opportunité académique/professionnelle: cette section centralise les moyens de contact."
      />

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="p-6 sm:p-7">
              <div className="mb-6 flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
                <MapPin className="h-5 w-5 text-cyan-200" />
                Madagascar
              </div>
              <div className="space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-md border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-cyan-300/10"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                      <social.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-bold">{social.label}</span>
                      <span className="text-sm text-[hsl(var(--muted-foreground))]">{social.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6 sm:p-7">
              <form className="space-y-4" action="mailto:ariane@example.com" method="post" encType="text/plain">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-semibold">Nom</span>
                    <Input name="name" placeholder="Votre nom" required />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-semibold">Email</span>
                    <Input name="email" type="email" placeholder="votre@email.com" required />
                  </label>
                </div>
                <label className="block space-y-2">
                  <span className="text-sm font-semibold">Sujet</span>
                  <Input name="subject" placeholder="Collaboration, stage, projet..." required />
                </label>
                <label className="block space-y-2">
                  <span className="text-sm font-semibold">Message</span>
                  <Textarea name="message" placeholder="Écrivez votre message..." required />
                </label>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Envoyer le message
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
