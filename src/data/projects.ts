import type { ImageMetadata } from "astro";
import type { Locale } from "../i18n/translations";
import demoDashboard from "../images/projects/demo_dashboard.png";
import chatbotGestion360 from "../images/projects/chatbot_gestion360.png";
import pegasoImg from "../images/projects/Pegaso.png";

type LocalizedText = Record<Locale, string>;

export type Project = {
  slug: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  summary: LocalizedText;
  type: "empresa" | "personal";
  period: string;
  role?: LocalizedText;
  stack: string[];
  highlights?: Record<Locale, string[]>;
  metrics?: { label: LocalizedText; value: LocalizedText }[];
  links?: { demo?: string; repo?: string };
  image?: ImageMetadata;
  featured?: boolean;
  /** Hue (0-360) used for the fallback cover art when no image is set. */
  hue: number;
};

export const projects: Project[] = [
  {
    slug: "gestion360pro",
    title: {
      es: "Gestion360Pro",
      en: "Gestion360Pro",
    },
    subtitle: {
      es: "SaaS de gestión de seguridad social",
      en: "Social Security Management SaaS",
    },
    summary: {
      es: "Plataforma SaaS multi-tenant diseñada para automatizar y centralizar la gestión de seguridad social en Colombia, incluyendo afiliaciones, cotizaciones, cartera, facturación y liquidación de aportes PILA. Optimiza los procesos administrativos, financieros y operativos de las empresas.",
      en: "Multi-tenant SaaS platform designed to automate and centralize social security management in Colombia, including enrollments, contributions, receivables, billing, and PILA payroll settlements. Streamlines administrative, financial, and operational workflows.",
    },
    type: "empresa",
    period: "2025 – 2026",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Hono",
      "PostgreSQL",
      "Neon",
      "AWS Lambda",
      "AWS S3",
      "API Gateway",
      "SST v3",
      "Tailwind CSS",
      "Material UI",
      "Vercel",
      "Git",
    ],
    highlights: {
      es: [
        "Arquitectura SaaS multi-tenant con aislamiento de datos por empresa.",
        "Automatización de liquidaciones y generación de archivos planos PILA.",
        "Gestión centralizada de EPS, AFP, ARL y CCF.",
        "Control de acceso mediante roles y permisos granulares.",
        "Arquitectura serverless escalable.",
        "Automatización de procesos financieros y administrativos.",
        "Generación de reportes y documentos en PDF y Excel.",
      ],
      en: [
        "Multi-tenant SaaS architecture with strict per-company data isolation.",
        "Automated settlements and PILA flat-file generation.",
        "Centralized management of EPS, AFP, ARL, and CCF entities.",
        "Granular role-based access control and permissions.",
        "Scalable serverless cloud architecture.",
        "Automation of financial and administrative processes.",
        "PDF and Excel report and document generation.",
      ],
    },
    image: demoDashboard,
    featured: true,
    hue: 205,
  },
  {
    slug: "gestion360pro-whatsapp-chatbot",
    title: {
      es: "Gestion360Pro – WhatsApp Chatbot",
      en: "Gestion360Pro – WhatsApp Chatbot",
    },
    subtitle: {
      es: "Automatización conversacional y gestión de pagos",
      en: "Conversational Automation & Payment Management",
    },
    summary: {
      es: "Chatbot empresarial integrado con la API oficial de WhatsApp Business que automatiza la atención de afiliados, la consulta de obligaciones y la generación de enlaces de pago en tiempo real. Implementa una arquitectura serverless orientada a eventos para garantizar escalabilidad, seguridad y resiliencia operativa.",
      en: "Enterprise chatbot integrated with the official WhatsApp Business API that automates member support, obligation inquiries, and real-time payment link generation. Implements an event-driven serverless architecture for scalability, security, and operational resilience.",
    },
    type: "empresa",
    period: "2026",
    role: { es: "Backend Developer / Cloud Developer", en: "Backend Developer / Cloud Developer" },
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Neon",
      "WhatsApp Cloud API",
      "Meta Graph API",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS SQS",
      "AWS SNS",
      "AWS CloudWatch",
      "ePayco",
      "Webhooks",
      "Git",
    ],
    highlights: {
      es: [
        "Automatización de la atención al cliente 24/7.",
        "Integración directa con la API oficial de Meta.",
        "Generación automática de enlaces de pago.",
        "Procesamiento asíncrono mediante colas de mensajes.",
        "Gestión de errores mediante reintentos y Dead Letter Queues (DLQ).",
        "Validación de firmas de webhooks.",
        "Integración de mecanismos de autenticación OTP.",
        "Confirmación automatizada de transacciones mediante webhooks.",
      ],
      en: [
        "24/7 automated customer support.",
        "Direct integration with the official Meta Graph API.",
        "Automated real-time payment link generation.",
        "Asynchronous processing through message queues.",
        "Fault handling with retries and Dead Letter Queues (DLQ).",
        "Webhook signature verification.",
        "OTP authentication mechanism integration.",
        "Automated transaction confirmation via webhooks.",
      ],
    },
    image: chatbotGestion360,
    featured: true,
    hue: 200,
  },
  {
    slug: "pegaso",
    title: {
      es: "Pegaso",
      en: "Pegaso",
    },
    subtitle: {
      es: "Sistema digital de juzgamiento y gestión de competencias equinas",
      en: "Digital Equine Judging & Competition Management System",
    },
    summary: {
      es: "Plataforma web progresiva (PWA) diseñada para digitalizar y automatizar la gestión de ferias equinas, desde el registro de ejemplares y la evaluación veterinaria hasta el juzgamiento, la consolidación de puntuaciones y la publicación de resultados oficiales. Incorpora funcionalidades offline para facilitar la operación en escenarios con conectividad limitada.",
      en: "Progressive Web App (PWA) designed to digitize and automate equine competition management, from horse registration and veterinary evaluation to judging, score consolidation, and publishing official results. Includes offline-first capabilities to operate seamlessly in low-connectivity venues.",
    },
    type: "empresa",
    period: "2026 · PWA",
    role: { es: "Full Stack Developer / Software Engineer", en: "Full Stack Developer / Software Engineer" },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Node.js",
      "Hono",
      "PostgreSQL",
      "TypeORM",
      "Zod",
      "IndexedDB",
      "Service Workers",
      "Pusher Beams",
      "Vercel",
      "REST API",
      "Git",
    ],
    highlights: {
      es: [
        "Digitalización integral del proceso de juzgamiento equino.",
        "Arquitectura monorepo con separación del dominio, API y aplicación web.",
        "Implementación de una arquitectura offline-first para operaciones de juzgamiento.",
        "Sincronización de operaciones con mecanismos de idempotencia y resolución de conflictos.",
        "Motor de juzgamiento con reglas de mayorías, desempates, descalificaciones y puestos desiertos.",
        "Gestión de roles y permisos para jueces, veterinarios, directores técnicos y personal administrativo.",
        "Integración de notificaciones push.",
        "Trazabilidad de decisiones y resultados de las competencias.",
        "Sincronización de información con sistemas externos.",
      ],
      en: [
        "End-to-end digitization of the equine judging workflow.",
        "Monorepo architecture separating domain logic, API, and web application.",
        "Offline-first architecture for live judging operations.",
        "Operation synchronization with idempotency and conflict resolution.",
        "Judging engine supporting majority rules, tiebreakers, disqualifications, and vacant placements.",
        "Role and permission management for judges, veterinarians, technical directors, and administrative staff.",
        "Push notification integration.",
        "Full traceability of competition decisions and official results.",
        "Data synchronization with external systems.",
      ],
    },
    image: pegasoImg,
    featured: true,
    hue: 215,
  },
  {
    slug: "portfolio-3d",
    title: {
      es: "Experimentos visuales web",
      en: "Web Visual Experiments",
    },
    summary: {
      es: "Colección de microinteracciones, shaders y animaciones de scroll para explorar el límite del frontend.",
      en: "Collection of micro-interactions, shaders, and scroll animations pushing frontend craft.",
    },
    type: "personal",
    period: "2025",
    stack: ["TypeScript", "GSAP", "Astro"],
    links: { demo: "#", repo: "#" },
    hue: 205,
  },
  {
    slug: "app-finanzas",
    title: {
      es: "App de finanzas personales",
      en: "Personal Finance App",
    },
    summary: {
      es: "Seguimiento de gastos con gráficos interactivos, categorías automáticas y modo offline.",
      en: "Expense tracking with interactive charts, automatic categorization, and offline support.",
    },
    type: "personal",
    period: "2025",
    stack: ["Next.js", "Neon", "Tailwind CSS"],
    links: { demo: "#", repo: "#" },
    hue: 175,
  },
  {
    slug: "bot-productividad",
    title: {
      es: "Bot de productividad",
      en: "Productivity Bot",
    },
    summary: {
      es: "Asistente que resume tareas, agenda recordatorios y automatiza flujos diarios.",
      en: "Assistant that summarizes tasks, schedules reminders, and automates daily workflows.",
    },
    type: "personal",
    period: "2024",
    stack: ["Node.js", "MongoDB", "Express"],
    links: { repo: "#" },
    hue: 225,
  },
];
