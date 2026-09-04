import { motion } from "framer-motion";
import {
  Activity,
  AreaChart,
  Brain,
  ChartBar,
  ChartPie,
  Check,
  Database,
  HeartHandshake,
  Kanban,
  LineChart,
  Server,
  Sigma,
  Workflow,
} from "lucide-react";
import { FaFileExcel } from "react-icons/fa";
import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiJupyter,
  SiLaravel,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSqlite,
  SiSymfony,
  SiTypescript,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "./ui/card";

type Tool = {
  name: string;
  Icon: React.ElementType;
  color: string;
};

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
  {
    number: "04",
    title: "Soft Skills",
    icon: HeartHandshake,
    items: [
      "Communication",
      "Gestion des émotions",
      "Sens de la débrouillardise",
      "Esprit d'équipe",
      "Adaptabilité",
      "Autonomie",
    ],
  },
];

const groups: { title: string; tools: Tool[] }[] = [
  {
    title: "Python & Data",
    tools: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "NumPy", Icon: SiNumpy, color: "#013243" },
      { name: "Pandas", Icon: SiPandas, color: "#150458" },
      { name: "Matplotlib", Icon: LineChart, color: "hsl(var(--accent))" },
      { name: "Seaborn", Icon: AreaChart, color: "hsl(var(--accent))" },
      { name: "Scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
      { name: "Jupyter", Icon: SiJupyter, color: "#F37626" },
    ],
  },
  {
    title: "Bases de données",
    tools: [
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "SQLite", Icon: SiSqlite, color: "#003B57" },
    ],
  },
  {
    title: "Backend & Frontend",
    tools: [
      { name: "PHP", Icon: SiPhp, color: "#777BB4" },
      { name: "Symfony", Icon: SiSymfony, color: "currentColor" },
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Collaboration",
    tools: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "currentColor" },
    ],
  },
  {
    title: "Méthodes & Analyse",
    tools: [
      { name: "Statistique", Icon: ChartBar, color: "hsl(var(--accent))" },
      { name: "Économétrie", Icon: Sigma, color: "hsl(var(--accent))" },
      { name: "Pipelines de données(ETL/ELT)", Icon: Workflow, color: "hsl(var(--accent))" },
      { name: "Méthode Agile", Icon: Kanban, color: "hsl(var(--accent))" },
      { name: "Power BI", Icon: ChartPie, color: "#F2C811" },
      { name: "Excel", Icon: FaFileExcel, color: "#339961" },
      { name: "Eviews", Icon: Activity, color: "#1F4E79" },
    ],
  },
];

const allTools = groups.flatMap((group) => group.tools);
const marqueeTools = [...allTools, ...allTools];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
      {children}
    </p>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-band section-band--tinted">
      <div className="section-shell">
        <SectionHeading
          eyebrow=""
          title="Mes compétences"
          description=""
        />

        <div className="mt-16">
          <Eyebrow>Domaines d'expertise</Eyebrow>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="h-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full border border-transparent transition duration-300 hover:-translate-y-1.5 hover:border-[hsl(var(--accent))]">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-[hsl(var(--accent)/0.35)] bg-[hsl(var(--accent)/0.08)]">
                        <category.icon className="h-5 w-5 text-[hsl(var(--accent))]" />
                      </span>
                      <span className="font-display text-2xl font-black text-[hsl(var(--accent)/0.3)]">
                        {category.number}
                      </span>
                    </div>

                    <h3 className="font-display mt-4 text-xl font-black">{category.title}</h3>

                    <ul className="mt-4 space-y-2.5 text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Eyebrow>Outils &amp; technologies</Eyebrow>
          <div className="relative mt-4 overflow-hidden">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[hsl(var(--background))] to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[hsl(var(--background))] to-transparent"
              aria-hidden="true"
            />
            <motion.div
              className="flex w-max gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
            >
              {marqueeTools.map((tool, index) => (
                <div key={`${tool.name}-${index}`} className="flex shrink-0 flex-col items-center gap-2 text-center">
                  <span className="grid h-16 w-16 place-items-center">
                    <tool.Icon size={44} color={tool.color} />
                  </span>
                  <span className="whitespace-nowrap text-xs font-bold leading-tight">{tool.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
