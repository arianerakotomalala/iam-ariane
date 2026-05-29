import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import type { Project } from "../statics/projects";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { buttonVariants } from "./ui/button";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="h-full"
    >
      <Card className="group h-full overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:shadow-[0_28px_90px_rgba(34,211,238,0.14)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <Badge className="absolute left-4 top-4">{project.category}</Badge>
        </div>

        <CardContent className="flex h-[calc(100%-theme(spacing.0))] flex-col p-6">
          <h3 className="text-2xl font-black">{project.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="muted">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline" })}>
                <Code2 className="h-4 w-4" />
                GitHub
              </a>
            ) : null}
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer" className={buttonVariants()}>
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
