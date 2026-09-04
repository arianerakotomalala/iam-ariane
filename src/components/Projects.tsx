import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { buttonVariants } from "./ui/button";
import { projects } from "../statics/projects";
import { CONTACT } from "../statics/contact";

export default function Projects() {
  return (
    <section id="projects" className="section-band">
      <div className="section-shell">
      <SectionHeading
        eyebrow=""
        title="Mes projets"
        description=""
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={CONTACT.githubHref}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Voir tous mes projets sur GitHub
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>
      </div>
    </section>
  );
}
