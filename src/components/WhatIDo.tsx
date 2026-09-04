import { motion } from "framer-motion";
import { Brain, Database, Server } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    number: "01",
    title: "Data Science",
    icon: Database,
    items: [
      "Analyse et exploration de données",
      "Nettoyage et préparation",
      "Statistiques et visualisation",
      "Feature engineering",
      "Machine Learning et prédiction",
      "Interprétation des résultats",
    ],
  },
  {
    number: "02",
    title: "Intelligence artificielle",
    icon: Brain,
    items: [
      "Machine Learning",
      "Modélisation prédictive",
      "Classification et régression",
      "Détection de patterns",
      "Exploration des applications de l'IA",
    ],
  },
  {
    number: "03",
    title: "Backend & Development",
    icon: Server,
    items: [
      "Conception d'API",
      "Développement backend",
      "Bases de données",
      "Architecture applicative",
      "Intégration frontend / backend",
    ],
  },
];

export default function WhatIDo() {
  return (
    <section aria-labelledby="what-i-do-heading" className="section-band section-band--tinted">
      <div className="section-shell">
      {/* <SectionHeading
        headingId="what-i-do-heading"
        eyebrow="Ce que je fais"
        title="À la rencontre de trois domaines qui me passionnent."
        description="Comprendre les données, construire des solutions intelligentes et développer les systèmes qui les font fonctionner."
      /> */}

      <div className="grid gap-20 md:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            // className="glass-panel flex h-full flex-col rounded-[var(--radius)] p-7"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-4xl font-black text-[hsl(var(--accent)/0.45)]">
                {category.number}
              </span>
              {/* <span className="grid h-11 w-11 place-items-center rounded-md border border-[hsl(var(--accent)/0.4)] text-[hsl(var(--accent))]"> */}
                {/* <category.icon className="h-5 w-5" /> */}
              {/* </span> */}
            </div>
            <h3 className="font-display mt-5 text-xl font-black">{category.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-lg leading-8 text-[hsl(var(--muted-foreground))]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--accent))]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
