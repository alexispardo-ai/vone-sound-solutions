import type { L, Locale } from "./site";

/** Resolve a bilingual value to the active locale. */
export function pick<T>(value: L<T>, lang: Locale): T {
  return value[lang];
}

export const DEFAULT_LOCALE: Locale = "es";

/** Static UI copy (section labels, headings, buttons) per locale. */
export const UI = {
  es: {
    nav: { cta: "Solicita presupuesto" },
    hero: {
      eyebrow: "Sonido profesional · Powered by VOID Acoustics",
      headline: ["Feel", "The", "Frequency"],
      sub: "Partner Premium Oficial de Void para España y Portugal. Renting e instalación de los sistemas de sonido más impresionantes del mundo: Incubus, Arclite y Nexus.",
      primary: "Ver proyectos",
      secondary: "Solicita presupuesto",
      scroll: "Explora",
    },
    about: {
      label: "Quiénes somos",
      heading: "Sonido que se ve y se siente.",
      p1: "v-One (Vibrational One) es una empresa emergente que llega para revolucionar el sonido profesional en España y Portugal, con la exclusividad de traer el que para nosotros es el mejor sistema de sonido del mundo: Void Incubus.",
      p2: "Somos Premium Partner Oficial Void para España y Portugal con los sistemas Incubus, Arclite y Nexus. Instalamos en negocios, clubs y restaurantes, y llevamos el sistema a pequeños, medianos y grandes eventos: potencia, definición y una estética sin igual.",
      bandNote: "Referencia mundial en calidad de sonido y estética.",
      bandBig: "VOID · ES & PT",
    },
    services: {
      label: "Qué hacemos",
      heading: "Renting, integración y producción.",
      intro: "Del sistema de sonido al último detalle de escenografía y luz — todo bajo un mismo equipo.",
    },
    work: { label: "Proyectos", heading: "Donde ya nos has sentido." },
    stats: { label: "En cifras" },
    systems: {
      label: "La tecnología",
      heading: "Construido sobre Void Acoustics.",
      intro: "Sistemas horn-loaded esculturales, con salida extrema y una estética que forma parte del espectáculo. Elegimos y calibramos el sistema para cada proyecto.",
    },
    clients: { label: "Confían en nosotros" },
    process: {
      label: "Cómo trabajamos",
      heading: "De la idea al directo.",
      intro: "Un método claro que asegura que el sistema rinda al máximo el día del evento.",
    },
    manifesto: { label: "Nuestra promesa" },
    cta: {
      words: ["Construyamos", "algo", "extraordinario."],
      sub: "Cuéntanos tu evento o tu espacio. Te ayudamos a llevar el sonido Void a donde lo necesites.",
      primary: "Escríbenos",
      secondary: "WhatsApp",
    },
    footer: { explore: "Explora", connect: "Contacto", rights: "Todos los derechos reservados.", privacy: "Privacidad", terms: "Términos" },
    notFound: { title: "Señal perdida.", body: "La página que buscabas ha abandonado el escenario.", cta: "Volver al inicio" },
  },
  en: {
    nav: { cta: "Request a quote" },
    hero: {
      eyebrow: "Professional sound · Powered by VOID Acoustics",
      headline: ["Feel", "The", "Frequency"],
      sub: "Official Void Premium Partner for Spain and Portugal. Rental and installation of the most impressive sound systems in the world: Incubus, Arclite and Nexus.",
      primary: "See our work",
      secondary: "Request a quote",
      scroll: "Scroll",
    },
    about: {
      label: "Who we are",
      heading: "Sound you can see and feel.",
      p1: "v-One (Vibrational One) is an emerging company set to revolutionise professional sound in Spain and Portugal, with the exclusive right to bring what we consider the best sound system in the world: Void Incubus.",
      p2: "We are the Official Void Premium Partner for Spain and Portugal with the Incubus, Arclite and Nexus systems. We install in venues, clubs and restaurants, and take the system to small, mid-size and large events: power, definition and an aesthetic like no other.",
      bandNote: "A global reference for sound quality and aesthetics.",
      bandBig: "VOID · ES & PT",
    },
    services: {
      label: "What we do",
      heading: "Rental, integration and production.",
      intro: "From the sound system to the last detail of scenography and light — all under one team.",
    },
    work: { label: "Selected work", heading: "Where you've already felt us." },
    stats: { label: "By the numbers" },
    systems: {
      label: "The technology",
      heading: "Built on Void Acoustics.",
      intro: "Sculptural horn-loaded systems with extreme output and an aesthetic that's part of the show. We choose and calibrate the system for each project.",
    },
    clients: { label: "Trusted by" },
    process: {
      label: "How we work",
      heading: "From idea to the live show.",
      intro: "A clear method that ensures the system performs at its peak on the day.",
    },
    manifesto: { label: "Our promise" },
    cta: {
      words: ["Let's", "build", "something", "extraordinary."],
      sub: "Tell us about your event or your space. We'll help you bring Void sound wherever you need it.",
      primary: "Get in touch",
      secondary: "WhatsApp",
    },
    footer: { explore: "Explore", connect: "Contact", rights: "All rights reserved.", privacy: "Privacy", terms: "Terms" },
    notFound: { title: "Signal lost.", body: "The page you were looking for has left the stage.", cta: "Back to home" },
  },
} as const;

export type UIStrings = (typeof UI)["es"];
