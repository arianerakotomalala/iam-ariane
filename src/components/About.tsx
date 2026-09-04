import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Stats from "./Stats";
import { cn } from "../lib/utils";

const quotes = [
  {
    text: "The world's most valuable resource is no longer oil, but data.",
    author: "The Economist, 2017",
  }
];

function PullQuote({ index }: { index: number }) {
  const quote = quotes[index];
  return (
    <blockquote className="my-6 border-l-4 border-[hsl(var(--accent))] pl-5 text-left">
      <p className="font-display text-balance text-xl font-bold italic leading-snug">
        “{quote.text}”
      </p>
      <cite className="mt-2 block text-xs font-bold not-italic uppercase tracking-[0.14em] text-[hsl(var(--muted-foreground))]">
        — {quote.author}
      </cite>
    </blockquote>
  );
}

const journey = [
  {
    date: "2025 — Aujourd'hui",
    short: "Present",
    title: "Master 1 — Data Science & IA",
    place: "EMIT Fianarantsoa",
    current: true,
  },
  {
    date: "Décembre 2025",
    short: "12/25",
    title: "Formation Vue.js",
    place: "Orange Digital Center Antananarivo",
  },
  {
    date: "Juin 2025",
    short: "06/25",
    title: "Atelier de programmation Django",
    place: "Django Girls Antananarivo",
  },
  {
    date: "2022 — 2025",
    short: "22-25",
    title: "Licence en Informatique",
    place: "Oniversity FJKM Ravelojaona Antananarivo (ONIFRA) · Parcours Développement d'Applications",
  },
  {
    date: "2020 — 2021",
    short: "20-21",
    title: "1ère année en Météorologie",
    place: "ENEAM Ivato Madagascar",
  },
  {
    date: "2019",
    short: "2019",
    title: "Baccalauréat",
    place: "Lycée Moderne Ampefiloha (LMA)",
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-band section-band--tinted">
      <div className="section-shell">
      <SectionHeading eyebrow="" title="À propos de moi" />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="p-2 text-justify sm:p-10"
        >
          <Quote className="h-7 w-7 text-[hsl(var(--accent))]" />

          <p className="mt-4 text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg">
            Je suis Rakotomalala Harivola Ariane. Je transforme des données brutes en informations
            exploitables : des analyses claires et des modèles fiables qui aident une entreprise à
            comprendre une situation, anticiper une tendance et décider avec plus de certitude.
          </p>

          <PullQuote index={0} />

          <p className="text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg">
            Mon profil combine des compétences en Data Science et Intelligence Artificielle avec du
            développement backend (PHP, Symfony, Laravel), ce qui me permet de couvrir tout le
            processus : de l'exploration des données jusqu'à la mise en production d'une solution
            utilisable.
          </p>
          <p className="mt-5 text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg">
            Autonome et rigoureuse, je m'adapte rapidement à un nouvel environnement ou une nouvelle
            problématique, et je sais transformer un besoin encore flou en solution concrète et
            opérationnelle.
          </p>

          <p className="text-base font-bold leading-8 sm:text-lg">
            C'est cette capacité à allier rigueur analytique, sens pratique et technologie qui me
            permet d'apporter une réelle valeur ajoutée à vos projets.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="p-7"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
            Je viens de très loin :)
          </p>
          {/* <h3 className="font-display mt-2 text-lg font-black">Mon parcours</h3> */}

          <div className="relative mt-6">
            <div
              className={cn(
                "timeline-dash absolute left-1/2 top-1 bottom-1 w-[3px] -translate-x-1/2",
                shouldReduceMotion && "timeline-dash--static",
              )}
              aria-hidden="true"
            />
            <div className="space-y-3">
              {journey.map((step, index) => {
                const onRight = index % 2 === 0;
                const content = (
                  <>
                    <p className="text-xs font-bold uppercase tracking-[0.08em] text-[hsl(var(--muted-foreground))]">
                      {step.date}
                    </p>
                    <p className="mt-1 font-bold leading-snug">{step.title}</p>
                    <p className="mt-1 text-xs leading-5 text-[hsl(var(--muted-foreground))]">
                      {step.place}
                    </p>
                  </>
                );

                return (
                  <div key={step.title} className="relative grid grid-cols-[1fr_auto_1fr] items-start gap-3">
                    <div className={onRight ? "" : "pb-1 text-right"}>{!onRight && content}</div>
                    <span
                      className={cn(
                        "relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border bg-[hsl(var(--background))] text-[10px] font-bold leading-none",
                        step.current
                          ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
                          : "border-[hsl(var(--accent)/0.4)] text-[hsl(var(--accent))]",
                      )}
                    >
                      {step.short}
                    </span>
                    <div className={onRight ? "pb-1" : ""}>{onRight && content}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-14">
        <Stats />
      </div>
      </div>
    </section>
  );
}
