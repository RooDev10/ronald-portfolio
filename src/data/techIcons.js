import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCSharp } from "react-icons/tb";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaVuejs, FaJava, FaPython, FaDatabase, FaLinux, FaDocker,
  FaLayerGroup, FaCubes, FaProjectDiagram,
} from "react-icons/fa";
import {
  SiTailwindcss, SiFirebase, SiMongodb, SiMysql, SiFlutter, SiFigma,
  SiJetpackcompose, SiTypescript, SiFastapi, SiDotnet, SiDart, SiKotlin,
  SiSwagger, SiPostman, SiVitest,
} from "react-icons/si";

// lowContrast: íconos oscuros que necesitan un halo claro sobre el fondo de la tarjeta
const techIcons = {
  HTML: { Icon: FaHtml5, color: "#E34F26" },
  CSS: { Icon: FaCss3Alt, color: "#1572B6" },
  JavaScript: { Icon: IoLogoJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  React: { Icon: FaReact, color: "#61DAFB" },
  Vue: { Icon: FaVuejs, color: "#4FC08D" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "C#": { Icon: TbBrandCSharp, color: "#9B4F96" },
  Java: { Icon: FaJava, color: "#9c0a18", lowContrast: true },
  Python: { Icon: FaPython, color: "#54ab37" },
  "Node.js": { Icon: FaNodeJs, color: "#339933" },
  ".Net": { Icon: SiDotnet, color: "#512BD4" },
  FastApi: { Icon: SiFastapi, color: "#009688" },
  SQLServer: { Icon: FaDatabase, color: "#CC2927" },
  MySQL: { Icon: SiMysql, color: "#4479A1", lowContrast: true },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Dart: { Icon: SiDart, color: "#0175C2" },
  Kotlin: { Icon: SiKotlin, color: "#7F52FF" },
  Flutter: { Icon: SiFlutter, color: "#02569B" },
  "Jetpack Compose": { Icon: SiJetpackcompose, color: "#4285F4" },
  Linux: { Icon: FaLinux, color: "#070437", lowContrast: true },
  Docker: { Icon: FaDocker, color: "#2496ED" },
  Git: { Icon: FaGitAlt, color: "#F05032" },
  GitHub: { Icon: FaGithub, color: "#ffffff", lowContrast: true },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  "Clean Architecture": { Icon: FaLayerGroup, color: "#facc15" },
  SOLID: { Icon: FaCubes, color: "#fb923c" },
  "REST APIs": { Icon: FaProjectDiagram, color: "#38bdf8" },
  Swagger: { Icon: SiSwagger, color: "#85EA2D" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Vitest: { Icon: SiVitest, color: "#6E9F18" },
};

export default techIcons;
