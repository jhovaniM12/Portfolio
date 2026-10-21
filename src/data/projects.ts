export type ProjectMedia =
  | {
      kind: "image";
      src: string;
      alt: string;
      caption: string;
      creditUrl?: string;
      fit?: "cover" | "contain";
      width: number;
      height: number;
    }
  | {
      kind: "video";
      src: string;
      poster?: string;
      captions?: string;
      mimeType: "video/mp4" | "video/webm";
      caption: string;
      creditUrl?: string;
    };

export type ProjectChapter = {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  steps?: string[];
  media?: ProjectMedia[];
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  theme: "dark" | "light";
  cover: Extract<ProjectMedia, { kind: "image" }>;
  chapters: ProjectChapter[];
};

export const projects: Project[] = [
  {
    slug: "gestion360pro",
    title: "Gestion360Pro",
    type: "Plataforma SaaS · Multi-tenant",
    description: "Una plataforma para reunir procesos administrativos y operativos en un solo lugar.",
    problem: "Organizar la seguridad social, los pagos y la operación empresarial sin dispersar la información.",
    solution: "Módulos de gestión y automatización dentro de una arquitectura multi-tenant.",
    stack: ["Next.js", "Python", "PostgreSQL", "AWS"],
    theme: "dark",
    cover: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85",
      alt: "Pantalla con gráficos de datos, imagen ilustrativa de una plataforma de gestión",
      caption: "Imagen ilustrativa del universo de datos del proyecto.",
      fit: "cover",
      width: 1200,
      height: 750,
    },
    chapters: [
      {
        id: "contexto",
        label: "El contexto",
        title: "Procesos que necesitan una visión compartida.",
        paragraphs: [
          "La seguridad social, los pagos y la operación de una empresa reúnen información que debe mantenerse organizada y disponible para distintas tareas.",
          "Gestion360Pro nace de la necesidad de concentrar esos procesos en una plataforma de gestión, en lugar de tratarlos como piezas aisladas.",
        ],
      },
      {
        id: "propuesta",
        label: "La propuesta",
        title: "Una plataforma que reúne gestión y automatización.",
        paragraphs: [
          "La solución se plantea como un SaaS multi-tenant: un mismo producto con espacios de trabajo separados para sus diferentes organizaciones.",
          "Su enfoque combina módulos para administrar información, dar seguimiento a pagos y apoyar tareas operativas mediante automatización.",
        ],
        steps: ["Reunir información", "Gestionar operaciones", "Automatizar tareas"],
      },
      {
        id: "recorrido",
        label: "El recorrido visual",
        title: "De los datos a decisiones más claras.",
        paragraphs: [
          "Esta selección visual acompaña la historia del producto. Las fotografías actuales son ilustrativas; aquí se podrán incorporar capturas de sus pantallas y demostraciones breves.",
        ],
        media: [
          {
            kind: "video",
            src: "https://videos.pexels.com/video-files/7651883/7651883-hd_1920_1080_30fps.mp4",
            poster: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200",
            mimeType: "video/mp4",
            caption: "Video de banco ilustrativo sobre análisis de datos; no muestra Gestion360Pro.",
            creditUrl: "https://www.pexels.com/video/graphs-and-data-on-the-screen-of-a-laptop-7651883/",
          },
          {
            kind: "image",
            src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=85",
            alt: "Panel de análisis de datos en una pantalla, imagen ilustrativa",
            caption: "Referencia visual de una interfaz de análisis; no es una captura de Gestion360Pro.",
            creditUrl: "https://unsplash.com/photos/turned-on-monitoring-screen-qwtCeJ5cLYs",
            fit: "cover",
            width: 1200,
            height: 750,
          },
        ],
      },
    ],
  },
  {
    slug: "campusmap",
    title: "CampusMap",
    type: "Navegación universitaria · Aplicación web",
    description: "Una aplicación para explorar lugares y encontrar rutas dentro de un campus.",
    problem: "Hacer más fácil ubicar edificios y descubrir cómo llegar de un punto a otro.",
    solution: "Representar el campus como un grafo y calcular recorridos entre ubicaciones.",
    stack: ["React", "TypeScript", "Algoritmos de grafos"],
    theme: "light",
    cover: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1746390121584-ef9754f677ea?auto=format&fit=crop&q=85",
      alt: "Personas caminando por senderos de un campus universitario, imagen ilustrativa",
      caption: "Imagen ilustrativa de caminos y recorridos en un campus.",
      creditUrl: "https://unsplash.com/photos/people-walk-along-paths-on-a-sunny-campus-6HzRIDaaGuQ",
      fit: "cover",
      width: 1200,
      height: 750,
    },
    chapters: [
      {
        id: "contexto",
        label: "El contexto",
        title: "Un campus también es una red de caminos.",
        paragraphs: [
          "Encontrar un edificio puede ser sencillo para quien conoce el campus, pero no siempre para alguien que lo visita o recorre por primera vez.",
          "CampusMap explora cómo presentar lugares y trayectos de forma comprensible en una aplicación web.",
        ],
      },
      {
        id: "propuesta",
        label: "La propuesta",
        title: "Convertir ubicaciones en rutas explorables.",
        paragraphs: [
          "El proyecto utiliza estructuras de datos y algoritmos de grafos para relacionar puntos del campus y recorrer los caminos que los conectan.",
          "La interfaz convierte esa lógica en una exploración visual de ubicaciones y rutas.",
        ],
        steps: ["Explorar lugares", "Elegir un destino", "Visualizar un recorrido"],
      },
      {
        id: "recorrido",
        label: "El recorrido visual",
        title: "Del mapa a la experiencia de moverse.",
        paragraphs: [
          "Las imágenes actuales sitúan el problema en su contexto físico. Esta sección está lista para mostrar capturas del mapa interactivo o un video breve de la navegación real.",
        ],
        media: [
          {
            kind: "video",
            src: "https://videos.pexels.com/video-files/4824745/4824745-hd_1920_1080_30fps.mp4",
            poster: "https://images.unsplash.com/photo-1778961022259-b69000723521?auto=format&fit=crop&q=80&w=1200",
            mimeType: "video/mp4",
            caption: "Video de banco ilustrativo sobre navegación móvil; no muestra CampusMap.",
            creditUrl: "https://www.pexels.com/video/person-using-a-map-through-his-smartphone-4824745/",
          },
          {
            kind: "image",
            src: "https://images.unsplash.com/photo-1778961022259-b69000723521?auto=format&fit=crop&q=85",
            alt: "Persona consultando un mapa digital en un teléfono, imagen ilustrativa",
            caption: "Referencia visual de navegación digital; no es una captura de CampusMap.",
            creditUrl: "https://unsplash.com/photos/person-holding-smartphone-displaying-a-satellite-map-WOeiFjKnl-I",
            fit: "cover",
            width: 1200,
            height: 750,
          },
        ],
      },
    ],
  },
  {
    slug: "bolsillo",
    title: "Bolsillo",
    type: "Proyecto conceptual ficticio · Finanzas personales",
    description: "Concepto ficticio de una app para entender hábitos de gasto y planear metas de ahorro.",
    problem: "Las compras pequeñas y los pagos recurrentes hacen difícil ver cómo se distribuye el dinero durante el mes.",
    solution: "Un tablero personal que organiza movimientos, identifica categorías y permite definir objetivos de ahorro.",
    stack: ["Astro", "TypeScript", "Supabase", "Recharts"],
    theme: "dark",
    cover: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=85",
      alt: "Persona revisando documentos financieros, imagen ilustrativa para el concepto ficticio Bolsillo",
      caption: "Imagen de referencia; Bolsillo es un concepto ficticio, no un producto implementado.",
      creditUrl: "https://unsplash.com/photos/person-holding-black-pen-near-brown-envelope-669366a9e9c6",
      fit: "cover",
      width: 1200,
      height: 750,
    },
    chapters: [
      {
        id: "contexto",
        label: "El contexto",
        title: "Entender el dinero antes de intentar optimizarlo.",
        paragraphs: [
          "Bolsillo es un concepto de producto ficticio creado para explorar una experiencia de finanzas personales. Parte de una situación cotidiana: saber cuánto se gasta no siempre explica en qué se va el dinero.",
          "La propuesta busca presentar los movimientos y compromisos recurrentes de forma clara, sin convertir la organización financiera en una tarea pesada.",
        ],
      },
      {
        id: "propuesta",
        label: "La propuesta",
        title: "Una vista sencilla de hábitos, compromisos y metas.",
        paragraphs: [
          "La idea reúne movimientos en categorías comprensibles, separa los pagos recurrentes y permite definir objetivos de ahorro con seguimiento visual.",
          "El enfoque de diseño prioriza la lectura rápida y la privacidad: cada resumen debe ayudar a tomar una decisión sin ocultar el detalle detrás de cifras agregadas.",
        ],
        steps: ["Revisar movimientos", "Identificar patrones", "Planear una meta"],
      },
      {
        id: "recorrido",
        label: "El recorrido visual",
        title: "Un punto de partida para imaginar el tablero.",
        paragraphs: [
          "Las imágenes son referencias visuales de banco. No representan una interfaz construida ni capturas de una aplicación real.",
        ],
        media: [
          {
            kind: "image",
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=85",
            alt: "Pantalla con gráficos de análisis, referencia visual para el concepto ficticio Bolsillo",
            caption: "Referencia visual de análisis financiero; no es una interfaz real de Bolsillo.",
            fit: "cover",
            width: 1200,
            height: 750,
          },
        ],
      },
    ],
  },
  {
    slug: "cosecha-local",
    title: "Cosecha Local",
    type: "Proyecto conceptual ficticio · Comercio local",
    description: "Concepto ficticio para conectar productores locales con restaurantes y comercios de barrio.",
    problem: "La disponibilidad de productos frescos cambia con rapidez y coordinar pedidos entre pequeños productores y compradores puede ser complejo.",
    solution: "Un catálogo compartido con disponibilidad por temporada, pedidos organizados y seguimiento de entregas.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    theme: "light",
    cover: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=85",
      alt: "Puesto de frutas y verduras frescas, imagen ilustrativa para el concepto ficticio Cosecha Local",
      caption: "Imagen ilustrativa; Cosecha Local es un concepto ficticio, no un servicio en operación.",
      creditUrl: "https://unsplash.com/photos/vegetable-and-fruit-lot-IGfIGP5ONV0",
      fit: "cover",
      width: 1200,
      height: 750,
    },
    chapters: [
      {
        id: "contexto",
        label: "El contexto",
        title: "Productos de temporada, decisiones de último momento.",
        paragraphs: [
          "Cosecha Local es una propuesta ficticia para explorar herramientas digitales para el comercio de proximidad. Imagina a productores y pequeños negocios que necesitan coordinar qué hay disponible y cuándo llegará.",
          "El reto consiste en hacer visible la oferta cambiante sin añadir fricción a la relación directa entre quien produce y quien compra.",
        ],
      },
      {
        id: "propuesta",
        label: "La propuesta",
        title: "Un catálogo vivo para coordinar pedidos locales.",
        paragraphs: [
          "El concepto combina un catálogo de temporada con disponibilidad actualizada, pedidos agrupados y un resumen de entrega para ambas partes.",
          "La experiencia se diseña alrededor de tareas concretas: publicar productos, preparar una compra y confirmar su recepción.",
        ],
        steps: ["Publicar disponibilidad", "Armar un pedido", "Coordinar entrega"],
      },
      {
        id: "recorrido",
        label: "El recorrido visual",
        title: "Una referencia visual para el mercado local.",
        paragraphs: [
          "Las fotografías de esta página son material ilustrativo de banco. No representan una plataforma implementada ni comercios participantes.",
        ],
        media: [
          {
            kind: "image",
            src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=85",
            alt: "Frutas frescas organizadas en un mercado, referencia visual para el concepto ficticio Cosecha Local",
            caption: "Referencia visual de productos frescos; no corresponde a un comercio de Cosecha Local.",
            fit: "cover",
            width: 1200,
            height: 750,
          },
        ],
      },
    ],
  },
];
