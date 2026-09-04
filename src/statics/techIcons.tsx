import type { ElementType } from "react";
import { AppWindow, LineChart } from "lucide-react";
import {
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiLaravel,
  SiNumpy,
  SiPandas,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiSymfony,
  SiTailwindcss,
} from "react-icons/si";

export type TechIconInfo = {
  Icon: ElementType;
  color: string;
};

export const TECH_ICONS: Record<string, TechIconInfo> = {
  PHP: { Icon: SiPhp, color: "#777BB4" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  Python: { Icon: SiPython, color: "#3776AB" },
  Tkinter: { Icon: AppWindow, color: "currentColor" },
  Django: { Icon: SiDjango, color: "#092E20" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  "Jupyter Notebook": { Icon: SiJupyter, color: "#F37626" },
  Pandas: { Icon: SiPandas, color: "#150458" },
  NumPy: { Icon: SiNumpy, color: "#013243" },
  Matplotlib: { Icon: LineChart, color: "hsl(var(--accent))" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Symfony: { Icon: SiSymfony, color: "currentColor" },
  React: { Icon: SiReact, color: "#61DAFB" },
};
