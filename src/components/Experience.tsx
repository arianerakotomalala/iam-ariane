import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Lightbulb, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const timeline = [
  {
    title: "Master I en Science de Données et Intelligence Artificielle",
    period: "Actuellement",
    description:
      "Approfondissement en apprentissage automatique, statistiques, traitement de données et conception de solutions IA.",
    icon: GraduationCap,
  },
  {
    title: "Licence Informatique",
    period: "Formation initiale",
    description:
      "Bases solides en programmation, bases de données, algorithmique, développement web et architecture logicielle.",
    icon: BookOpen,
  },
  {
    title: "Projets académiques",
    period: "Expérimentation",
    description:
      "Réalisation de prototypes autour de la data, des interfaces web, de l’analyse et de l’aide à la décision.",
    icon: Lightbulb,
  },
  {
    title: "Objectif professionnel",
    period: "Prochaine étape",
    description:
      "Contribuer à des projets concrets de Data Science, IA appliquée et développement d’outils intelligents.",
    icon: Rocket,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Parcours"
        title="Une trajectoire tournée vers l’IA appliquée et la création de valeur."
        description="Formation, expériences académiques et projets s’articulent autour d’un objectif: construire des solutions data concrètes."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/60 via-violet-300/35 to-transparent sm:block" />
        <div className="space-y-5">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.48, delay: index * 0.06 }}
              className="relative sm:pl-14"
            >
              <span className="absolute left-0 top-6 hidden h-10 w-10 place-items-center rounded-xl border border-cyan-300/30 bg-[hsl(var(--background))] text-cyan-200 sm:grid">
                <item.icon className="h-5 w-5" />
              </span>
              <Card className="transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="max-w-2xl text-xl font-black">{item.title}</h3>
                    <Badge variant={index === 0 ? "default" : "muted"}>{item.period}</Badge>
                  </div>
                  <p className="mt-3 leading-7 text-[hsl(var(--muted-foreground))]">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
