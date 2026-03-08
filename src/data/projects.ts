export const projects = [
  {
    slug: "automatizacion-licitaciones",
    title: "Sistema Automatizado de Monitoreo y Clasificación de Licitaciones",
    shortDescription:
      "Plataforma de scraping + clasificación con IA + automatización de notificaciones para detección temprana de oportunidades.",

    image: "/img/n8n/n8n-3.webp",

    featured: true,

    role: "Diseño e implementación completa del sistema",
    year: "2023",

    tech: [
      "Node.js",
      "Puppeteer",
      "n8n",
      "LLMs",
      "Automatización",
      "Email Service",
    ],

    overview: `
Sistema diseñado para automatizar la búsqueda, filtrado y clasificación de licitaciones públicas, reduciendo la revisión manual y mejorando la detección de oportunidades relevantes.
    `,

    problem: `
La revisión manual de licitaciones públicas requiere monitoreo constante, análisis repetitivo y filtrado manual, lo que genera ineficiencias y riesgo de perder oportunidades importantes.
    `,

    solution: {
      scraping: `
Desarrollé un servicio de web scraping utilizando Puppeteer para extraer automáticamente nuevas licitaciones desde fuentes oficiales, manejando navegación dinámica y procesamiento estructurado de datos.
      `,
      aiClassification: `
Implementé un sistema de clasificación basado en modelos de lenguaje para analizar el contenido de las licitaciones y categorizarlas según criterios definidos, mejorando la precisión en el filtrado.
      `,
      automation: `
Integré el procesamiento completo dentro de un flujo automatizado en n8n que orquesta la extracción, clasificación y validación de resultados.
      `,
      notifications: `
Configuré un sistema de notificaciones por correo electrónico que envía alertas automáticas cuando se detectan nuevas oportunidades relevantes.
      `,
    },

    architecture: [
      "Fuente Web",
      "Scraper (Puppeteer)",
      "Clasificación IA",
      "Flujo n8n",
      "Notificación Email",
    ],

    impact: [
      "Automatización completa del proceso de monitoreo",
      "Reducción del tiempo de revisión manual",
      "Detección más rápida de oportunidades relevantes",
    ],

    repo: "https://github.com/DiagoGar/puppeteer",
    demo: null,
  },

  {
    slug: "blog-platform",
    title: "Plataforma Blog Full-Stack con Gestión de Contenido",
    shortDescription:
      "Aplicación web full-stack con autenticación, CRUD de publicaciones y base de datos persistente.",

    image: "",

    featured: false,

    role: "Desarrollo full-stack",
    year: "2022",

    tech: [
      "Node.js",
      "bootstrap",
      "MongoDB",
      "Autenticación",
      "CRUD",
      "handlebars",
    ],

    overview: `
Aplicación web diseñada como plataforma de publicación de contenido con sistema de autenticación y gestión dinámica de posts.
    `,

    problem: `
Necesidad de una plataforma estructurada que permitiera la creación, edición y administración de contenido de forma segura y organizada.
    `,

    solution: {
      backend: `
Implementación de API para manejo de usuarios y publicaciones, con conexión a base de datos MongoDB para persistencia de datos.
      `,
      frontend: `
Desarrollo de interfaz en Next.js con diseño responsivo y componentes reutilizables.
      `,
      authentication: `
Sistema de autenticación para gestión segura de contenido.
      `,
    },

    impact: [
      "Implementación completa de arquitectura full-stack",
      "Manejo de estado y persistencia de datos",
      "Estructuración modular del código",
    ],

    repo: "https://github.com/DiagoGar/firstProject",
    demo: null,
  },

  {
    slug: "proyecto-final-tecnico",
    title: "Proyecto Final – Sistema de Gestión Logística",
    shortDescription:
      "Plataforma web desarrollada en Laravel para gestionar productos, lotes, transporte y nodos logísticos dentro de una red de distribución.",

    gallery: [
      "/img/FC/ApiGoogleMaps.png",
      "/img/FC/HomePage.png",
      "/img/FC/LogIn.png",
    ],

    featured: false,

    role: "Análisis de requerimientos, diseño de arquitectura y desarrollo full-stack",
    year: "2023",

    tech: [
      "Laravel",
      "Google Maps API",
      "tailwind CSS",
      "javascript",
      "photoshop",
      "MySQL",
      "Arquitectura MVC",
      "Programación Orientada a Objetos",
    ],

    overview: `
Plataforma web desarrollada como proyecto final técnico cuyo objetivo es gestionar el flujo de productos dentro de una red logística. El sistema permite administrar inventario, agrupar productos en lotes, organizar rutas de transporte y visualizar la estructura logística mediante mapas interactivos.

La aplicación centraliza la información relacionada con productos, almacenes, nodos de distribución, vehículos y camioneros, permitiendo registrar movimientos y mantener un seguimiento estructurado de la logística del sistema.
    `,

    problem: `
La gestión logística involucra múltiples entidades como productos, almacenes, rutas, transporte y personal. Sin un sistema centralizado, el seguimiento de mercancías y la organización de los envíos se vuelve complejo y propenso a errores.

El desafío del proyecto consistía en diseñar una aplicación capaz de integrar estos componentes dentro de una arquitectura clara, permitiendo administrar inventario, transporte y distribución de forma organizada.
    `,

    solution: {
      architecture: `
El sistema fue diseñado utilizando la arquitectura MVC de Laravel, separando claramente controladores, modelos y vistas. La lógica de negocio se organiza mediante controladores especializados y modelos Eloquent que representan las entidades logísticas del sistema, como productos, lotes, nodos y movimientos.
      `,
      database: `
Se implementó una base de datos relacional para estructurar la información del sistema. El modelo de datos contempla relaciones entre productos, lotes, almacenes, vehículos, camioneros y nodos logísticos, permitiendo registrar y rastrear los movimientos de mercancía dentro de la red.
      `,
      implementation: `
La aplicación incluye funcionalidades para gestión de productos, creación de lotes, asignación de transporte y visualización de nodos logísticos mediante integración con Google Maps. También incorpora un panel administrativo para gestionar usuarios, personal logístico y operaciones del sistema.
      `,
    },

    impact: [
      "Aplicación práctica de arquitectura MVC y programación orientada a objetos",
      "Diseño e implementación de un sistema completo de gestión logística",
      "Integración de visualización geográfica mediante Google Maps API",
      "Experiencia en modelado de bases de datos relacionales complejas",
    ],

    repo: "https://github.com/DiagoGar/ProyectoAtlas-Laravel",
    demo: null,
  },
];
