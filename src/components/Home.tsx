import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import profilePhoto from "../assets/profil/profil.png";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="section-band relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 lg:hidden"
        style={{
          backgroundImage: `url(${profilePhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          filter: "saturate(1.3) contrast(1.12) brightness(0.96)",
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/12" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background)/0.18)] via-[hsl(var(--background)/0.65)] to-[hsl(var(--background))]" />
      </div>

      <div className="section-shell relative z-10 flex min-h-[92vh] items-center pb-16 pt-44">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_500px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-4xl lg:mt-20"
        >
          <p className="text-xl font-bold sm:text-2xl">
            Hello world, je suis 
          </p>

          <h1 className="font-display text-balance mt-4 text-5xl font-black leading-[1.03] sm:text-6xl lg:text-5xl">
            Rakotomalala Harivola Ariane
          </h1>

          <p className="mt-5 max-w-3xl text-xl font-bold sm:text-2xl">
            Apprentie Data Scientist &amp; IA · Développeuse Php - Javascript
          </p>

          <p className="mt-6 max-w-2xl text-justify text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg">
            J'aime observer les données, comprendre ce qu'elles racontent et transformer ces
            informations en éléments utiles: mieux comprendre une situation, anticiper une
            tendance, ou aider à décider. C'est tout l'intérêt de la Data Science,l'IA va un peu
            plus loin, en permettant aux systèmes d'apprendre de ces données et d'automatiser
            certaines tâches.
          </p>

          <div className="mt-9 flex flex-col flex-wrap gap-3 sm:flex-row">
            <a href="#projects" className={buttonVariants({ size: "lg" })}>
              Voir mes projets
              <ArrowDown className="h-5 w-5" />
            </a>
            <motion.a
              href="/CV_Ariane_DataScientist.pdf"
              download
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:opacity-90",
              )}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 0 rgba(0,0,0,0)",
                        "0 0 26px hsl(var(--accent) / 0.6)",
                        "0 0 0 rgba(0,0,0,0)",
                      ],
                    }
              }
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              Télécharger mon CV
              <Download className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto hidden aspect-square w-full max-w-[460px] lg:mx-0 lg:block"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
        >
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full translate-x-6 translate-y-6"
            aria-hidden="true"
          >
            <polygon
              points="25,0 75,0 100,50 75,100 25,100 0,50"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div
            className="absolute inset-0 overflow-hidden bg-[hsl(var(--card))]"
            style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
          >
            <img
              src={profilePhoto}
              alt="Portrait de Rakotomalala Harivola Ariane"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
