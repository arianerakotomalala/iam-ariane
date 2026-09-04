import orientImg from "../assets/project/orient.png";
import meteoImg from "../assets/project/meteo.png";
import memegeneratorImg from "../assets/project/meme generator .png";
import airQualityImg from "../assets/project/airquality.png";
import agenceImmoImg from "../assets/project/agenceimmo2.png";
import izdeliveryImg from "../assets/project/izdelivery.png";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
};

export const projects: Project[] = [
  {
    title: "Orient Mada",
    category: "Aide à la décision",
    description:
      "Une plateforme web, séparée en frontend et backend, qui aide les futurs étudiants à s'orienter parmi de nombreux choix de filières en structurant les critères de choix pour rendre la décision plus lisible.",
    technologies: ["PHP", "JavaScript", "React", "Postman", "Symfony"],
    links: [
      { label: "Frontend", href: "https://github.com/arianerakotomalala/Orient-Mada-Front" },
      { label: "Backend", href: "https://github.com/arianerakotomalala/Orient-Mada-Back" },
    ],
    image: orientImg,
  },
  {
    title: "Meteo'Niany",
    category: "Application desktop",
    description:
      "Une application météo de bureau construite avec Tkinter, pensée comme un exercice d'entraînement autour de la manipulation de données externes et de leur affichage dans une interface claire.",
    technologies: ["Python", "Tkinter"],
    links: [{ label: "GitHub", href: "https://github.com/arianerakotomalala/meteo-niany" }],
    image: meteoImg,
  },
  {
    title: "Memegenerator",
    category: "Application web",
    description:
      "Une application web développée avec Django pour permettre à des utilisateurs de créer et partager facilement des memes à partir d'une interface simple.",
    technologies: ["Python", "Django", "HTML", "JavaScript"],
    links: [{ label: "GitHub", href: "https://github.com/arianerakotomalala/memegenerator" }],
    image: memegeneratorImg,
  },
  {
    title: "Air Quality Analysis",
    category: "Analyse de données",
    description:
      "Une analyse exploratoire de la qualité de l'air (capteurs PM2.5 à Fianarantsoa) menée dans un notebook Jupyter, avec cartographie des capteurs et un dashboard de synthèse.",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Matplotlib"],
    links: [{ label: "GitHub", href: "https://github.com/arianerakotomalala/Air-Quality-Analysis" }],
    image: airQualityImg,
  },
  {
    title: "Agence Immo",
    category: "Application web",
    description:
      "Une application web développée avec Laravel pour centraliser la gestion d'une agence immobilière : annonces et données regroupées dans un même outil.",
    technologies: ["PHP", "Laravel"],
    links: [{ label: "GitHub", href: "https://github.com/arianerakotomalala/Agence-immo" }],
    image: agenceImmoImg,
  },
  {
    title: "IzDelivery",
    category: "Projet académique",
    description:
      "Une application web Laravel, stylée avec Tailwind CSS, développée en projet de Licence 3 pour modéliser le fonctionnement d'une agence de livraison.",
    technologies: ["PHP", "Laravel", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/arianerakotomalala/izdelivery" }],
    image: izdeliveryImg,
  },
];
