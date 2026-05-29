import projectImage from "../assets/project/project.png";

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: string;
};

export const projects: Project[] = [
  {
    title: "Meteo'Niany",
    category: "Data app",
    image: projectImage,
    description:
      "Application météo orientée analyse qui affiche les conditions du jour et structure les données pour une lecture simple.",
    technologies: ["Python", "Tkinter", "Data Analysis"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "Orient Mada",
    category: "Aide à la décision",
    image: projectImage,
    description:
      "Prototype d'orientation académique basé sur des critères de choix, des probabilités et une expérience utilisateur claire.",
    technologies: ["Python", "Machine Learning", "SQL"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "Portfolio IA",
    category: "Web moderne",
    image: projectImage,
    description:
      "Portfolio professionnel avec animations, glassmorphism, données dynamiques et architecture React modulaire.",
    technologies: ["React", "Tailwind CSS", "TSParticles"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
];
