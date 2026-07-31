import { color } from "framer-motion";
import { FaCpanel } from "react-icons/fa";
import {
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiPython,
  SiMysql,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiVite,
  SiNodedotjs,
  SiTailwindcss,
  SiWordpress,
  SiFigma,
  SiGitlab,
  SiPostman
} from "react-icons/si"; 

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "CPanel", icon: FaCpanel, color: "#FF6C2C" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#646CFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "REST APIs", icon: SiPostman, color: "#22C55E" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" }
];

export default technologies;