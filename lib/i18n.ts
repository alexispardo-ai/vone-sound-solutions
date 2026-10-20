import type { L, Locale } from "./site";

/** Resolve a bilingual value to the active locale. */
export function pick<T>(value: L<T>, lang: Locale): T {
  return value[lang];
}

export const DEFAULT_LOCALE: Locale = "es";

/** BCP-47 tags for Intl date formatting per locale. */
export const DATE_LOCALE: Record<Locale, string> = {
  es: "es-ES",
  en: "en-GB",
  fr: "fr-FR",
  de: "de-DE",
};

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
  fr: {
    nav: { cta: "Devis gratuit", blog: "Blog" },
    hero: {
      eyebrow: "Son professionnel · Powered by VOID Acoustics",
      headline: ["Feel", "The", "Frequency"],
      sub: "Partenaire Premium Officiel de Void en Espagne et au Portugal. Nous louons et installons les systèmes Incubus, Arclite et Nexus pour que ton événement sonne comme il le mérite.",
      primary: "Voir les projets",
      secondary: "Devis gratuit",
      scroll: "Explorer",
    },
    about: {
      label: "Qui sommes-nous",
      heading: "Un son qui se voit et se ressent.",
      p1: "v-One (Vibrational One) est une entreprise de Málaga spécialisée dans le son pour événements. Nous sommes les seuls à amener Void Incubus en Espagne et au Portugal, un système que nous plaçons parmi les meilleurs au monde.",
      p2: "En tant que Partenaire Premium Officiel de Void, nous travaillons avec les systèmes Incubus, Arclite et Nexus. Nous installons dans les commerces, clubs et restaurants, et montons le son sur des événements de toutes tailles.",
      bandNote: "Void Acoustics, une référence du son live.",
      bandBig: "VOID · ES & PT",
    },
    services: {
      label: "Ce que nous faisons",
      heading: "Location, installation et production.",
      intro: "Du système de son au moindre détail de scénographie et de lumière, le tout avec la même équipe.",
    },
    work: { label: "Projets", heading: "Quelques-uns de nos montages." },
    stats: { label: "En chiffres" },
    systems: {
      label: "La technologie",
      heading: "Nous travaillons avec Void Acoustics.",
      intro: "Nous choisissons et réglons le système Void le mieux adapté à chaque salle. Il sonne fort et clair, et en impose aussi à l'œil.",
    },
    clients: { label: "Ils nous ont fait confiance" },
    process: {
      label: "Comment on travaille",
      heading: "De l'idée au live.",
      intro: "Cinq étapes pour que, le jour J, tout se passe comme il faut.",
    },
    manifesto: { label: "Notre vision" },
    cta: {
      words: ["Parlons", "de", "ton", "événement."],
      sub: "Dis-nous ce que tu as en tête, l'événement ou le lieu, et on te dit comment on le monte.",
      primary: "Écris-nous",
      secondary: "WhatsApp",
    },
    footer: { explore: "Explorer", connect: "Contact", rights: "Tous droits réservés.", privacy: "Confidentialité", terms: "Mentions légales" },
    notFound: { title: "Signal perdu.", body: "La page que tu cherchais n'est plus là.", cta: "Retour à l'accueil" },
  },
  de: {
    nav: { cta: "Angebot anfragen", blog: "Blog" },
    hero: {
      eyebrow: "Professioneller Sound · Powered by VOID Acoustics",
      headline: ["Feel", "The", "Frequency"],
      sub: "Offizieller Void Premium Partner in Spanien und Portugal. Wir vermieten und installieren die Systeme Incubus, Arclite und Nexus, damit dein Event so klingt, wie es soll.",
      primary: "Projekte ansehen",
      secondary: "Angebot anfragen",
      scroll: "Entdecken",
    },
    about: {
      label: "Wer wir sind",
      heading: "Sound, den man sieht und spürt.",
      p1: "v-One (Vibrational One) ist ein Unternehmen aus Málaga, spezialisiert auf Sound für Events. Wir sind die Einzigen, die Void Incubus nach Spanien und Portugal bringen, ein System, das für uns zu den besten der Welt gehört.",
      p2: "Als Offizieller Void Premium Partner arbeiten wir mit den Systemen Incubus, Arclite und Nexus. Wir installieren in Betrieben, Clubs und Restaurants und bauen den Sound für Events jeder Größe auf.",
      bandNote: "Void Acoustics, eine Referenz im Live-Sound.",
      bandBig: "VOID · ES & PT",
    },
    services: {
      label: "Was wir machen",
      heading: "Vermietung, Installation und Produktion.",
      intro: "Vom Soundsystem bis zum letzten Detail von Bühnenbild und Licht, alles aus einer Hand.",
    },
    work: { label: "Projekte", heading: "Einige unserer Aufbauten." },
    stats: { label: "In Zahlen" },
    systems: {
      label: "Die Technik",
      heading: "Wir arbeiten mit Void Acoustics.",
      intro: "Wir wählen und justieren das Void-System, das am besten in jeden Raum passt. Es klingt kraftvoll und klar und macht auch optisch etwas her.",
    },
    clients: { label: "Sie haben uns vertraut" },
    process: {
      label: "Wie wir arbeiten",
      heading: "Von der Idee zum Live-Event.",
      intro: "Fünf Schritte, damit am Tag des Events alles so läuft, wie es soll.",
    },
    manifesto: { label: "Unsere Sichtweise" },
    cta: {
      words: ["Sprechen", "wir", "über", "dein", "Event."],
      sub: "Erzähl uns, was du vorhast, das Event oder die Location, und wir sagen dir, wie wir es aufbauen.",
      primary: "Schreib uns",
      secondary: "WhatsApp",
    },
    footer: { explore: "Entdecken", connect: "Kontakt", rights: "Alle Rechte vorbehalten.", privacy: "Datenschutz", terms: "Impressum" },
    notFound: { title: "Signal verloren.", body: "Die gesuchte Seite ist nicht mehr hier.", cta: "Zurück zur Startseite" },
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
  fr: {
    label: "Blog",
    title: "Notes depuis la scène",
    intro: "Son, Void Acoustics et ce qu'on apprend en montant des événements.",
    read: "Lire",
    min: "min",
    back: "Retour au blog",
    empty: "Le premier article arrive bientôt.",
  },
  de: {
    label: "Blog",
    title: "Notizen von der Bühne",
    intro: "Sound, Void Acoustics und was wir beim Aufbau von Events lernen.",
    read: "Lesen",
    min: "Min.",
    back: "Zurück zum Blog",
    empty: "Der erste Artikel kommt bald.",
  },
} as const;
