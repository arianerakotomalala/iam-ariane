import { motion } from "framer-motion";
import { cn } from "../lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  headingId?: string;
  descriptionClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  headingId,
  descriptionClassName,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      className={centered ? "mx-auto mb-12 max-w-3xl text-center" : "mb-12 max-w-3xl"}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="font-display text-balance mt-2 text-2xl font-extrabold leading-[1.2] sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            centered
              ? "mx-auto mt-4 max-w-2xl text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg"
              : "mt-4 max-w-2xl text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
