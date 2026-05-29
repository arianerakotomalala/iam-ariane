import { motion } from "framer-motion";
import {
  BarChart3,
  Blocks,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Server,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "./ui/card";

const skills = [
  { name: "Python", icon: Code2, tone: "from-cyan-300/20 to-cyan-300/5" },
  { name: "Machine Learning", icon: BrainCircuit, tone: "from-violet-300/20 to-violet-300/5" },
  { name: "Data Analysis", icon: BarChart3, tone: "from-emerald-300/20 to-emerald-300/5" },
  { name: "SQL / PostgreSQL", icon: Database, tone: "from-sky-300/20 to-sky-300/5" },
  { name: "React", icon: Blocks, tone: "from-cyan-300/20 to-violet-300/5" },
  { name: "Laravel", icon: Layers3, tone: "from-rose-300/20 to-rose-300/5" },
  { name: "Django", icon: Server, tone: "from-emerald-300/20 to-cyan-300/5" },
  { name: "Git / GitHub", icon: GitBranch, tone: "from-slate-200/20 to-slate-200/5" },
  { name: "Tailwind CSS", icon: Bot, tone: "from-teal-300/20 to-teal-300/5" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Compétences"
        title="Un socle technique pour passer de la donnée au produit."
        description="Des compétences orientées IA, analyse et développement web moderne, présentées dans une grille claire et responsive."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.045 }}
          >
            <Card className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45">
              <CardContent className={`relative p-6 bg-gradient-to-br ${skill.tone}`}>
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-white/8 text-cyan-100 transition group-hover:scale-105">
                    <skill.icon className="h-7 w-7" />
                  </span>
                  <h3 className="text-lg font-black">{skill.name}</h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
