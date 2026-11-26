export type Project = {
  slug: string;
  title: string;
  summary: string;
  type: "empresa" | "personal";
  year: number;
  role?: string;
  company?: string;
  stack: string[];
  metrics?: { label: string; value: string }[];
  links?: { demo?: string; repo?: string };
  featured?: boolean;
  /** Hue (0-360) used for the generated cover art. */
  hue: number;
};

// Datos de ejemplo: reemplázalos por tus proyectos reales.
export const projects: Project[] = [
  {
    slug: "plataforma-saas",
    title: "Plataforma SaaS de gestión",
    summary: "Panel multi-tenant con facturación, roles y reportes en tiempo real para equipos de operaciones.",
    type: "empresa",
    year: 2025,
    role: "Full Stack Developer",
    company: "Empresa (ejemplo)",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    metrics: [{ label: "Usuarios activos", value: "+2k" }, { label: "Uptime", value: "99.9%" }],
    featured: true,
    hue: 200,
  },
  {
    slug: "api-integraciones",
    title: "Hub de integraciones y APIs",
    summary: "Servicio que conecta ERP, CRM y pasarelas de pago con colas, reintentos y observabilidad.",
    type: "empresa",
    year: 2024,
    role: "Backend Developer",
    company: "Empresa (ejemplo)",
    stack: ["Python", "FastAPI", "Docker", "AWS"],
    metrics: [{ label: "Integraciones", value: "12" }, { label: "Latencia", value: "<120ms" }],
    featured: true,
    hue: 215,
  },
  {
    slug: "automatizacion-cloud",
    title: "Automatización cloud y CI/CD",
    summary: "Pipelines, infraestructura como código y despliegues automatizados para reducir tiempos de entrega.",
    type: "empresa",
    year: 2024,
    role: "DevOps / Backend",
    company: "Empresa (ejemplo)",
    stack: ["Docker", "GitHub Actions", "AWS"],
    metrics: [{ label: "Deploys", value: "x4 más rápidos" }],
    hue: 190,
  },
  {
    slug: "portfolio-3d",
    title: "Experimentos visuales web",
    summary: "Colección de microinteracciones, shaders y animaciones de scroll para explorar el límite del frontend.",
    type: "personal",
    year: 2025,
    stack: ["TypeScript", "GSAP", "Astro"],
    links: { demo: "#", repo: "#" },
    hue: 205,
  },
  {
    slug: "app-finanzas",
    title: "App de finanzas personales",
    summary: "Seguimiento de gastos con gráficos interactivos, categorías automáticas y modo offline.",
    type: "personal",
    year: 2025,
    stack: ["Next.js", "Neon", "Tailwind CSS"],
    links: { demo: "#", repo: "#" },
    hue: 175,
  },
  {
    slug: "bot-productividad",
    title: "Bot de productividad",
    summary: "Asistente que resume tareas, agenda recordatorios y automatiza flujos diarios.",
    type: "personal",
    year: 2024,
    stack: ["Node.js", "MongoDB", "Express"],
    links: { repo: "#" },
    hue: 225,
  },
];
