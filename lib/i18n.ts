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
      sub: "En Vibrational One creamos experiencias sonoras que se sienten, no solo que se escuchan.",
      sub2: "Como Official Premium Partner de Void Acoustic, llevamos el sonido a otro nivel, combinando tecnología de vanguardia, potencia y precisión para ofrecer experiencias únicas en cada evento.",
      primary: "Ver proyectos",
      secondary: "Pide presupuesto",
      scroll: "Explora",
    },
    about: {
      label: "V-ONE | VIBRATIONAL ONE",
      heading: "En Vibrational One llevamos el sonido a otro nivel.",
      p1: "Somos una empresa especializada en soluciones de audio profesional de alto rendimiento, con sede en Málaga y presencia en España y Portugal.",
      p2: "Como Official Premium Partner de Void Acoustic, somos los únicos que acercamos el exclusivo sistema Void Incubus a los mercados español y portugués, una auténtica referencia dentro del sonido profesional de alta gama.",
      p3: "Trabajamos con sistemas de prestigio internacional como Incubus, Arclite y Nexus, ofreciendo soluciones sonoras diseñadas para superar expectativas.",
      p4: "Desde instalaciones permanentes en negocios, clubs y restaurantes hasta eventos, festivales y grandes producciones, desarrollamos proyectos donde la potencia, la precisión y la calidad sonora marcan la diferencia.",
      closing: "No se trata solo de escuchar el sonido. Se trata de sentirlo.",
      signoff: "VIBRATIONAL ONE · FEEL THE FREQUENCY",
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
      sub: "At Vibrational One we create sound experiences you feel, not just hear.",
      sub2: "As Official Premium Partner of Void Acoustic, we take sound to another level, combining cutting-edge technology, power and precision to deliver unique experiences at every event.",
      primary: "See our work",
      secondary: "Request a quote",
      scroll: "Scroll",
    },
    about: {
      label: "V-ONE | VIBRATIONAL ONE",
      heading: "At Vibrational One we take sound to another level.",
      p1: "We are a company specialised in high-performance professional audio solutions, based in Málaga and operating across Spain and Portugal.",
      p2: "As Official Premium Partner of Void Acoustic, we are the only ones bringing the exclusive Void Incubus system to the Spanish and Portuguese markets, a true benchmark in high-end professional sound.",
      p3: "We work with internationally renowned systems such as Incubus, Arclite and Nexus, offering sound solutions designed to exceed expectations.",
      p4: "From permanent installations in venues, clubs and restaurants to events, festivals and large productions, we deliver projects where power, precision and sound quality make the difference.",
      closing: "It's not just about hearing the sound. It's about feeling it.",
      signoff: "VIBRATIONAL ONE · FEEL THE FREQUENCY",
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
      sub: "Chez Vibrational One, nous créons des expériences sonores qui se ressentent, pas seulement qui s'écoutent.",
      sub2: "En tant qu'Official Premium Partner de Void Acoustic, nous portons le son à un autre niveau, en alliant technologie de pointe, puissance et précision pour offrir des expériences uniques à chaque événement.",
      primary: "Voir les projets",
      secondary: "Devis gratuit",
      scroll: "Explorer",
    },
    about: {
      label: "V-ONE | VIBRATIONAL ONE",
      heading: "Chez Vibrational One, nous portons le son à un autre niveau.",
      p1: "Nous sommes une entreprise spécialisée dans les solutions audio professionnelles haute performance, basée à Málaga et présente en Espagne et au Portugal.",
      p2: "En tant qu'Official Premium Partner de Void Acoustic, nous sommes les seuls à proposer le système exclusif Void Incubus sur les marchés espagnol et portugais, une véritable référence du son professionnel haut de gamme.",
      p3: "Nous travaillons avec des systèmes de renommée internationale comme Incubus, Arclite et Nexus, pour des solutions sonores conçues pour dépasser les attentes.",
      p4: "Des installations permanentes dans les commerces, clubs et restaurants jusqu'aux événements, festivals et grandes productions, nous menons des projets où la puissance, la précision et la qualité sonore font la différence.",
      closing: "Il ne s'agit pas seulement d'entendre le son. Il s'agit de le ressentir.",
      signoff: "VIBRATIONAL ONE · FEEL THE FREQUENCY",
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
      sub: "Bei Vibrational One schaffen wir Klangerlebnisse, die man spürt und nicht nur hört.",
      sub2: "Als Official Premium Partner von Void Acoustic heben wir den Sound auf ein neues Level und verbinden modernste Technik, Leistung und Präzision zu einzigartigen Erlebnissen bei jedem Event.",
      primary: "Projekte ansehen",
      secondary: "Angebot anfragen",
      scroll: "Entdecken",
    },
    about: {
      label: "V-ONE | VIBRATIONAL ONE",
      heading: "Bei Vibrational One heben wir den Sound auf ein neues Level.",
      p1: "Wir sind ein Unternehmen für leistungsstarke professionelle Audiolösungen mit Sitz in Málaga und Präsenz in Spanien und Portugal.",
      p2: "Als Official Premium Partner von Void Acoustic sind wir die Einzigen, die das exklusive Void-Incubus-System auf den spanischen und portugiesischen Markt bringen, eine echte Referenz im hochwertigen professionellen Sound.",
      p3: "Wir arbeiten mit international renommierten Systemen wie Incubus, Arclite und Nexus und bieten Sound-Lösungen, die Erwartungen übertreffen.",
      p4: "Von festen Installationen in Betrieben, Clubs und Restaurants bis zu Events, Festivals und großen Produktionen realisieren wir Projekte, bei denen Leistung, Präzision und Klangqualität den Unterschied machen.",
      closing: "Es geht nicht nur darum, den Sound zu hören. Es geht darum, ihn zu spüren.",
      signoff: "VIBRATIONAL ONE · FEEL THE FREQUENCY",
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
