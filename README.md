# Portafolio de Jhovani Moreno

Portafolio estático construido con Astro. La página de inicio enlaza a casos de estudio de los proyectos destacados.

## Desarrollo

```sh
pnpm install
pnpm astro dev --background
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
pnpm build
```

## Editar proyectos y medios

El contenido de las tarjetas y de las páginas `/proyectos/[slug]/` se administra en [`src/data/projects.ts`](src/data/projects.ts). Cada proyecto tiene capítulos con texto, pasos opcionales y una galería `media` que acepta cualquier cantidad de imágenes y videos.

Para incorporar material propio, colócalo en `public/projects/<slug>/` y usa rutas que empiecen por `/projects/<slug>/`. Por ejemplo:

```ts
media: [
  {
    kind: "image",
    src: "/projects/gestion360pro/panel.webp",
    alt: "Panel principal de Gestion360Pro",
    caption: "Panel principal del producto.",
    width: 1440,
    height: 900,
    fit: "contain",
  },
  {
    kind: "video",
    src: "/projects/gestion360pro/demo.mp4",
    poster: "/projects/gestion360pro/demo-poster.webp",
    mimeType: "video/mp4",
    caption: "Demostración del flujo de gestión.",
  },
]
```

Usa videos breves optimizados en MP4 o WebM y agrega `captions` (archivo VTT) si tienen voz. Los videos se cargan bajo demanda y no se reproducen automáticamente. Sustituye las imágenes y clips de banco actuales cuando dispongas de capturas o demostraciones reales; sus pies de foto indican claramente que son material ilustrativo.
