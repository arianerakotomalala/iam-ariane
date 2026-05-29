import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <Badge variant="secondary" className="mb-4">
        {eyebrow}
      </Badge>
      <h2 className="text-balance text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[hsl(var(--muted-foreground))]">
        {description}
      </p>
    </motion.div>
  );
}
