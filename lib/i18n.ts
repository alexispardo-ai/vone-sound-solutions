import type { L, Locale } from "./site";

/** Resolve a bilingual value to the active locale. */
export function pick<T>(value: L<T>, lang: Locale): T {
  return value[lang];
}

export const DEFAULT_LOCALE: Locale = "es";

/** Static UI copy (section labels, headings, buttons) per locale. */
export const UI = {
  es: {
    nav: { cta: "Pide presupuesto", blog: "Blog" },
    hero: {
      eyebrow: "Sonido profesional · Powered by VOID Acoustics",
      headline: ["Feel", "The", "Frequency"],
      sub: "Partner Premium Oficial de Void en España y Portugal. Alquilamos e instalamos los sistemas Incubus, Arclite y Nexus para que tu evento suene como se merece.",
      primary: "Ver proyectos",
      secondary: "Pide presupuesto",
      scroll: "Explora",
    },
    about: {
      label: "Quiénes somos",
      heading: "Sonido que se ve y se siente.",
      p1: "v-One (Vibrational One) es una empresa de Málaga especializada en sonido para eventos. Somos los únicos que traen Void Incubus a España y Portugal, un sistema que para nosotros está entre los mejores del mundo.",
      p2: "Como Partner Premium Oficial de Void, trabajamos con los sistemas Incubus, Arclite y Nexus. Instalamos en negocios, clubs y restaurantes, y montamos el sonido en eventos de cualquier tamaño.",
      bandNote: "Void Acoustics, una referencia en sonido para directo.",
      bandBig: "VOID · ES & PT",
    },
    services: {
      label: "Qué hacemos",
      heading: "Alquiler, instalación y producción.",
      intro: "Del sistema de sonido al último detalle de escenografía y luz, todo con el mismo equipo.",
    },
    work: { label: "Proyectos", heading: "Algunos de nuestros montajes." },
    stats: { label: "En cifras" },
    systems: {
      label: "La tecnología",
      heading: "Trabajamos con Void Acoustics.",
      intro: "Elegimos y afinamos el sistema Void que mejor encaja en cada sala. Suena con fuerza y claridad, y además impone a la vista.",
    },
    clients: { label: "Han confiado en nosotros" },
    process: {
      label: "Cómo trabajamos",
      heading: "De la idea al directo.",
      intro: "Cinco pasos para que el día del evento todo salga como tiene que salir.",
    },
    manifesto: { label: "Nuestra forma de verlo" },
    cta: {
      words: ["Hablemos", "de", "tu", "evento."],
      sub: "Cuéntanos qué tienes en mente, el evento o el local, y te decimos cómo lo montamos.",
      primary: "Escríbenos",
      secondary: "WhatsApp",
    },
    footer: { explore: "Explora", connect: "Contacto", rights: "Todos los derechos reservados.", privacy: "Privacidad", terms: "Términos" },
    notFound: { title: "Señal perdida.", body: "La página que buscabas ya no está aquí.", cta: "Volver al inicio" },
  },
  en: {
    nav: { cta: "Request a quote", blog: "Blog" },
    hero: {
      eyebrow: "Professional sound · Powered by VOID Acoustics",
      headline: ["Feel", "The", "Frequency"],
      sub: "Official Void Premium Partner in Spain and Portugal. We rent and install the Incubus, Arclite and Nexus systems so your event sounds the way it should.",
      primary: "See our work",
      secondary: "Request a quote",
      scroll: "Scroll",
    },
    about: {
      label: "Who we are",
      heading: "Sound you can see and feel.",
      p1: "v-One (Vibrational One) is a Málaga-based company specialised in sound for events. We're the only ones bringing Void Incubus to Spain and Portugal, a system we rate among the best in the world.",
      p2: "As the Official Void Premium Partner, we work with the Incubus, Arclite and Nexus systems. We install in venues, clubs and restaurants, and set up the sound for events of any size.",
      bandNote: "Void Acoustics, a reference in live sound.",
      bandBig: "VOID · ES & PT",
    },
    services: {
      label: "What we do",
      heading: "Rental, installation and production.",
      intro: "From the sound system to the scenography and lighting, all handled by the same team.",
    },
    work: { label: "Selected work", heading: "Some of our setups." },
    stats: { label: "By the numbers" },
    systems: {
      label: "The technology",
      heading: "We work with Void Acoustics.",
      intro: "We pick and tune the Void system that best fits each room. It hits hard, stays clear, and looks the part.",
    },
    clients: { label: "They've trusted us" },
    process: {
      label: "How we work",
      heading: "From idea to the live show.",
      intro: "Five steps so that, on the day, everything goes the way it should.",
    },
    manifesto: { label: "How we see it" },
    cta: {
      words: ["Let's", "talk", "about", "your", "event."],
      sub: "Tell us what you have in mind, the event or the venue, and we'll tell you how we'd set it up.",
      primary: "Get in touch",
      secondary: "WhatsApp",
    },
    footer: { explore: "Explore", connect: "Contact", rights: "All rights reserved.", privacy: "Privacy", terms: "Terms" },
    notFound: { title: "Signal lost.", body: "The page you were looking for isn't here anymore.", cta: "Back to home" },
  },
} as const;

export type UIStrings = (typeof UI)["es"];

/** Blog-specific copy (index + article chrome). */
export const BLOG_UI = {
  es: {
    label: "Blog",
    title: "Notas desde el escenario",
    intro: "Sonido, Void Acoustics y lo que vamos aprendiendo montando eventos.",
    read: "Leer",
    min: "min",
    back: "Volver al blog",
    empty: "Pronto publicaremos el primer artículo.",
  },
  en: {
    label: "Blog",
    title: "Notes from the stage",
    intro: "Sound, Void Acoustics and what we pick up while setting up events.",
    read: "Read",
    min: "min",
    back: "Back to the blog",
    empty: "The first article is coming soon.",
  },
} as const;
