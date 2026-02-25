export const projects = [
  {
    slug: "automatizacion-licitaciones",
    title: "Sistema Automatizado de Monitoreo y Clasificación de Licitaciones",
    shortDescription:
      "Plataforma de scraping + clasificación con IA + automatización de notificaciones para detección temprana de oportunidades.",

    featured: true,

    role: "Diseño e implementación completa del sistema",
    year: "2023",

    tech: [
      "Node.js",
      "Puppeteer",
      "n8n",
      "LLMs",
      "Automatización",
      "Email Service"
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
      `
    },

    architecture: [
      "Fuente Web",
      "Scraper (Puppeteer)",
      "Clasificación IA",
      "Flujo n8n",
      "Notificación Email"
    ],

    impact: [
      "Automatización completa del proceso de monitoreo",
      "Reducción del tiempo de revisión manual",
      "Detección más rápida de oportunidades relevantes"
    ],

    repo: "https://github.com/tu-repo",
    demo: null
  },

  {
    slug: "blog-platform",
    title: "Plataforma Blog Full-Stack con Gestión de Contenido",
    shortDescription:
      "Aplicación web full-stack con autenticación, CRUD de publicaciones y base de datos persistente.",

    featured: false,

    role: "Desarrollo full-stack",
    year: "2022",

    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Autenticación",
      "CRUD",
      "Tailwind CSS"
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
      `
    },

    impact: [
      "Implementación completa de arquitectura full-stack",
      "Manejo de estado y persistencia de datos",
      "Estructuración modular del código"
    ],

    repo: "https://github.com/tu-repo",
    demo: null
  },

  {
    slug: "proyecto-final-tecnico",
    title: "Proyecto Final – Desarrollo de Sistema Integral",
    shortDescription:
      "Sistema desarrollado como proyecto final técnico, abarcando análisis, diseño e implementación completa.",

    featured: false,

    role: "Análisis, diseño y desarrollo",
    year: "2021",

    tech: [
      "C#",
      "Java",
      "POO",
      "Base de Datos Relacional",
      "Arquitectura de Software"
    ],

    overview: `
Proyecto integral desarrollado como trabajo final técnico, enfocado en aplicar principios de programación orientada a objetos y diseño estructurado.
    `,

    problem: `
Desarrollo de un sistema que integrara lógica de negocio, persistencia de datos y una interfaz funcional bajo un enfoque estructurado.
    `,

    solution: {
      architecture: `
Diseño de arquitectura modular aplicando principios de programación orientada a objetos y separación de responsabilidades.
      `,
      database: `
Gestión de base de datos relacional para almacenamiento estructurado de información.
      `,
      implementation: `
Implementación de funcionalidades clave siguiendo buenas prácticas de desarrollo.
      `
    },

    impact: [
      "Aplicación práctica de arquitectura de software",
      "Consolidación de bases sólidas en programación estructurada",
      "Desarrollo completo desde análisis hasta implementación"
    ],

    repo: "https://github.com/tu-repo",
    demo: null
  }
];