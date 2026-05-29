import { motion } from "framer-motion";
import { ArrowDown, BriefcaseBusiness, Code2, Download, Mail, Sparkles } from "lucide-react";
import profilePhoto from "../assets/profil/profil.jpg";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";

export default function Hero() {
  return (
    <section id="hero" className="section-shell flex min-h-[92vh] items-center pt-28">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_340px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <Badge className="mb-6">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Portfolio Data Science & IA
          </Badge>
          <h1 className="text-balance text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
            Rakotomalala Harivola Ariane
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold text-cyan-100 dark:text-cyan-100 sm:text-2xl">
            Étudiante en Science des Données & Intelligence Artificielle
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg">
            Je conçois des solutions data utiles, lisibles et orientées impact: analyse, modèles
            intelligents, interfaces web modernes et expériences numériques soignées.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className={buttonVariants({ size: "lg" })}>
              Voir mes projets
              <ArrowDown className="h-5 w-5" />
            </a>
            <a href="/cv.pdf" download className={buttonVariants({ variant: "outline", size: "lg" })}>
              Télécharger CV
              <Download className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "Email", href: "mailto:ariane@example.com", icon: Mail },
              { label: "LinkedIn", href: "https://www.linkedin.com/", icon: BriefcaseBusiness },
              { label: "GitHub", href: "https://github.com/", icon: Code2 },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/5 text-[hsl(var(--muted-foreground))] transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:text-cyan-100"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[320px] lg:mx-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
        >
          <div className="aspect-square overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-white/8 p-2 shadow-[0_28px_80px_rgba(34,211,238,0.16)] backdrop-blur-xl">
            <img
              src={profilePhoto}
              alt="Portrait de Rakotomalala Harivola Ariane"
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-md border border-white/10 bg-[hsl(var(--background)/0.86)] px-4 py-3 text-center text-sm font-semibold text-[hsl(var(--muted-foreground))] shadow-xl backdrop-blur-xl">
            IA, Data Science, Développement Web
          </div>
        </motion.div>
      </div>
    </section>
  );
}
