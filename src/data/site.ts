export const name = "Jhovani Moreno";

export const navItems: [string, string][] = [
  ["inicio", "Inicio"],
  ["sobre-mi", "Sobre mí"],
  ["stack", "Stack"],
  ["proyectos", "Proyectos"],
  ["certificados", "Formación"],
  ["experiencia", "Experiencia"],
  ["contacto", "Contacto"],
];

type Skill = { name: string; icon: string; color?: string; source?: "devicon" };

export const skills: { category: string; items: Skill[] }[] = [
  { category: "Frontend", items: [{ name: "React", icon: "react", color: "61DAFB" }, { name: "Next.js", icon: "nextdotjs", color: "ffffff" }, { name: "JavaScript", icon: "javascript", color: "F7DF1E" }, { name: "TypeScript", icon: "typescript", color: "3178C6" }, { name: "HTML5", icon: "html5", color: "E34F26" }, { name: "CSS3", icon: "css", color: "1572B6" }, { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" }] },
  { category: "Backend", items: [{ name: "Node.js", icon: "nodedotjs", color: "5FA04E" }, { name: "Express", icon: "express", color: "ffffff" }, { name: "Python", icon: "python", color: "3776AB" }, { name: "FastAPI", icon: "fastapi", color: "009688" }] },
  { category: "Cloud & DevOps", items: [{ name: "AWS", icon: "amazonwebservices", source: "devicon" }, { name: "Docker", icon: "docker", color: "2496ED" }, { name: "Git", icon: "git", color: "F05032" }, { name: "GitHub", icon: "github", color: "ffffff" }, { name: "Vercel", icon: "vercel", color: "ffffff" }] },
  { category: "Bases de datos", items: [{ name: "PostgreSQL", icon: "postgresql", color: "4169E1" }, { name: "Neon", icon: "neon", color: "00E599" }, { name: "MongoDB", icon: "mongodb", color: "47A248" }] },
];

export const iconUrl = (s: Skill) =>
  s.source === "devicon"
    ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    : `https://cdn.simpleicons.org/${s.icon}/${s.color}`;

export const certificates = ["Certificación técnica", "Formación especializada", "Aprendizaje continuo"];
