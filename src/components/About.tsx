import { motion } from "framer-motion";
import { Brain, Code2, Database, Goal } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "./ui/card";

const pillars = [
  {
    title: "Intelligence artificielle",
    text: "Explorer les modèles, comprendre les données et transformer les expérimentations en solutions utiles.",
    icon: Brain,
  },
  {
    title: "Science des données",
    text: "Nettoyer, analyser, visualiser et expliquer les données avec rigueur pour soutenir la décision.",
    icon: Database,
  },
  {
    title: "Développement",
    text: "Créer des interfaces modernes et maintenables qui rendent les résultats data accessibles.",
    icon: Code2,
  },
  {
    title: "Objectif",
    text: "Évoluer vers un rôle de Data Scientist capable de relier IA, produit et impact métier.",
    icon: Goal,
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="À propos"
        title="Une approche hybride entre analyse, IA et expérience utilisateur."
        description="Mon parcours réunit la curiosité scientifique, le sens du détail et l’envie de construire des solutions numériques fiables."
      />

      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="glass-panel rounded-2xl p-7 sm:p-9"
        >
          <p className="text-lg leading-8 text-[hsl(var(--muted-foreground))]">
            Je suis étudiante en Science des Données et Intelligence Artificielle, passionnée par la
            manière dont les données peuvent révéler des tendances, automatiser des tâches et aider
            à prendre de meilleures décisions.
          </p>
          <p className="mt-5 text-lg leading-8 text-[hsl(var(--muted-foreground))]">
            J’aime autant l’analyse que la construction: modéliser, visualiser, développer des
            applications et présenter des résultats avec clarté. Mon objectif est de progresser dans
            des projets concrets mêlant machine learning, data engineering léger et interfaces web.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Card className="h-full transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45">
                <CardContent className="flex gap-4 p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                    <pillar.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{pillar.text}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
