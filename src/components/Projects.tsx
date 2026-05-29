import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../statics/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projets"
        title="Des réalisations orientées data, apprentissage et interfaces modernes."
        description="Les cartes sont générées dynamiquement depuis src/statics/projects.ts et utilisent les images locales du dossier assets/project."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
