import { motion } from "framer-motion";
import type { Project } from "../statics/projects";
import { Card, CardContent } from "./ui/card";
import { TECH_ICONS } from "../statics/techIcons";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden border border-transparent transition duration-300 hover:-translate-y-1.5 hover:border-[hsl(var(--accent))]">
        <div className="relative aspect-video w-full overflow-hidden border-b border-[hsl(var(--border))] bg-[hsl(var(--muted))]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <CardContent className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl font-black">{project.title}</h3>

          <p className="mt-4 text-justify text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg">{project.description}</p>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
            {project.technologies.length > 0 ? (
              project.technologies.map((tech) => {
                const info = TECH_ICONS[tech];
                return (
                  <span key={tech} title={tech} className="grid h-5 w-5 place-items-center">
                    {info ? (
                      <info.Icon size={18} color={info.color} />
                    ) : (
                      <span className="text-[10px] font-bold text-[hsl(var(--muted-foreground))]">
                        {tech.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                    <span className="sr-only">{tech}</span>
                  </span>
                );
              })
            ) : (
              <span className="text-xs italic text-[hsl(var(--muted-foreground))]">Stack à définir</span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
