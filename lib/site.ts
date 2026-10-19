/**
 * Central content model for VONE · Vibrational One.
 * Real company data. Translatable fields are bilingual objects: { es, en }.
 * Use `pick(field, lang)` (see lib/i18n.ts) to resolve a string per locale.
 */

export type Locale = "es" | "en";
/** A bilingual value. */
export type L<T = string> = Record<Locale, T>;

export const SITE = {
  name: "VONE",
  legalName: "Vibrational One",
  poweredBy: "Powered by VOID Acoustics",
  partner: {
    es: "Premium Partner Oficial Void · España & Portugal",
    en: "Official Void Premium Partner · Spain & Portugal",
  } as L,
  tagline: "Feel The Frequency",
  // Assumed until the definitive domain is live; update when registered.
  domain: "https://vibrationalone.com",
  email: "jose.hermosin@vibrationalone.com",
  phone: "+34 666 753 484",
  phoneHref: "tel:+34666753484",
  whatsapp: "https://wa.me/34666753484",
  address: "C. Montevideo, 16 · Cruz de Humilladero · 29006 Málaga",
  mapsUrl:
    "https://www.google.com/maps/dir//C.+Montevideo,+16,+Cruz+de+Humilladero,+29006+M%C3%A1laga/@36.7132672,-4.4498944,14z",
  location: "Málaga · España",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/vone.void/" },
  ],
  systems: ["Void Incubus", "Arclite", "Nexus"],
} as const;

export const NAV_LINKS: { href: string; label: L }[] = [
  { href: "#about", label: { es: "Nosotros", en: "Studio" } },
  { href: "#services", label: { es: "Servicios", en: "Services" } },
  { href: "#systems", label: { es: "Sistemas", en: "Systems" } },
  { href: "#work", label: { es: "Proyectos", en: "Work" } },
  { href: "#process", label: { es: "Proceso", en: "Process" } },
  { href: "#contact", label: { es: "Contacto", en: "Contact" } },
];

export type Service = {
  id: string;
  index: string;
  title: L;
  summary: L;
  tags: L<string[]>;
};

export const SERVICES: Service[] = [
  {
    id: "rental",
    index: "01",
    title: { es: "Rental Void", en: "Void Rental" },
    summary: {
      es: "Alquiler de sistemas Void para conciertos, giras, festivales y eventos corporativos y privados. Lo llevamos y lo montamos nosotros.",
      en: "Void system rental for concerts, tours, festivals and corporate or private events. We bring it and set it up ourselves.",
    },
    tags: {
      es: ["Live Events", "Touring", "Festivales"],
      en: ["Live Events", "Touring", "Festivals"],
    },
  },
  {
    id: "sound-integration",
    index: "02",
    title: { es: "Integración de Sonido", en: "Sound Integration" },
    summary: {
      es: "Instalaciones fijas de audio Void para clubs, restaurantes y negocios donde la calidad del sonido y la estética importan por igual.",
      en: "Fixed Void audio installs for clubs, restaurants and venues where sound quality and aesthetics matter equally.",
    },
    tags: {
      es: ["Clubs", "Restaurantes", "Negocios"],
      en: ["Clubs", "Restaurants", "Venues"],
    },
  },
  {
    id: "equipment",
    index: "03",
    title: { es: "Gestión de Equipamiento", en: "Equipment Management" },
    summary: {
      es: "Preparación, transporte y mantenimiento del equipo. Todo sale probado y listo para funcionar.",
      en: "Prep, transport and maintenance of the rig. Everything ships tested and ready to go.",
    },
    tags: {
      es: ["Prep", "Logística", "Mantenimiento"],
      en: ["Prep", "Logistics", "Maintenance"],
    },
  },
  {
    id: "installations",
    index: "04",
    title: { es: "Instalaciones", en: "Installations" },
    summary: {
      es: "Proyectos llave en mano: diseño acústico, instalación y puesta en marcha de sistemas permanentes calibrados a medida del espacio.",
      en: "Turnkey projects: acoustic design, install and commissioning of permanent systems calibrated to the space.",
    },
    tags: {
      es: ["Diseño acústico", "Instalación", "Calibración"],
      en: ["Acoustic design", "Install", "Calibration"],
    },
  },
  {
    id: "scenography",
    index: "05",
    title: { es: "Escenografía & Deco", en: "Scenography & Decor" },
    summary: {
      es: "Escenografía y decoración para que el espacio acompañe al sonido, en la misma línea que los equipos Void.",
      en: "Set design and decor so the space matches the sound, in the same line as the Void rigs.",
    },
    tags: {
      es: ["Escenografía", "Decoración", "Ambiente"],
      en: ["Set design", "Decor", "Atmosphere"],
    },
  },
  {
    id: "led",
    index: "06",
    title: { es: "LED", en: "LED" },
    summary: {
      es: "Pantallas y superficies LED de alta resolución para reforzar el impacto visual del directo a cualquier escala.",
      en: "High-resolution LED screens and surfaces that amplify the visual impact of the show at any scale.",
    },
    tags: {
      es: ["Pantallas", "Alta resolución", "Directo"],
      en: ["Screens", "High-res", "Live"],
    },
  },
  {
    id: "lighting",
    index: "07",
    title: { es: "Iluminación & Proyecciones", en: "Lighting & Projection" },
    summary: {
      es: "Diseño de iluminación, lighting de espectáculo y proyecciones para que el evento entre también por los ojos.",
      en: "Lighting design, show lighting and projection so the event lands visually too.",
    },
    tags: {
      es: ["Lighting", "Diseño", "Proyecciones"],
      en: ["Lighting", "Design", "Projection"],
    },
  },
  {
    id: "power",
    index: "08",
    title: { es: "Equipamiento Eléctrico", en: "Power & Electrical" },
    summary: {
      es: "Distribución eléctrica y grupos para producciones que no pueden permitirse un fallo. Potencia estable, siempre.",
      en: "Power distribution and generation for productions that can't afford a failure. Stable power, always.",
    },
    tags: {
      es: ["Distribución", "Grupos", "Redundancia"],
      en: ["Distribution", "Generators", "Redundancy"],
    },
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  category: L;
  categoryKey: "festival" | "private";
  system: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  { id: "manawa", title: "Manawa Festival", client: "Manawa Festival", categoryKey: "festival", category: { es: "Festival", en: "Festival" }, system: "Void Incubus" },
  { id: "fullnes", title: "Fullnes Festival", client: "Fullnes Festival", categoryKey: "festival", category: { es: "Festival", en: "Festival" }, system: "Void Incubus" },
  { id: "ameba", title: "Ameba Festival", client: "Ameba Festival", categoryKey: "festival", category: { es: "Festival", en: "Festival" }, system: "Void Incubus" },
  { id: "ppm", title: "Aniversario P.P.M.", client: "P.P.M. Events", categoryKey: "private", category: { es: "Evento Privado", en: "Private Event" }, system: "Arclite" },
  { id: "skizo-aniv", title: "Aniversario Skizodelic Mind", client: "Skizodelic Mind Crew", categoryKey: "private", category: { es: "Evento Privado", en: "Private Event" }, system: "Arclite" },
  { id: "skizo-party", title: "Private Party · Skizodelic Mind", client: "Skizodelic Mind Crew", categoryKey: "private", category: { es: "Evento Privado", en: "Private Event" }, system: "Nexus" },
];

export const WORK_FILTERS: { key: "all" | "festival" | "private"; label: L }[] = [
  { key: "all", label: { es: "Todos", en: "All" } },
  { key: "festival", label: { es: "Festivales", en: "Festivals" } },
  { key: "private", label: { es: "Eventos Privados", en: "Private Events" } },
];

export const STATS: { value: number; suffix: string; label: L }[] = [
  { value: 100, suffix: "%", label: { es: "Sistemas Void Acoustics", en: "Void Acoustics systems" } },
  { value: 3, suffix: "", label: { es: "Sistemas insignia: Incubus · Arclite · Nexus", en: "Flagship systems: Incubus · Arclite · Nexus" } },
  { value: 2, suffix: "", label: { es: "Países · España & Portugal", en: "Countries · Spain & Portugal" } },
  { value: 6, suffix: "+", label: { es: "Producciones en directo", en: "Live productions" } },
];

/** The three Void systems VONE deploys, with real product specs. */
export const SYSTEMS: { name: string; kind: L; body: L }[] = [
  {
    name: "Incubus",
    kind: { es: "Sistema insignia · gran formato", en: "Flagship · large format" },
    body: {
      es: "Sistema horn-loaded de 5 vías: Air Array de medios-agudos, subgraves Hyperfold (4×15\") e Incubus Sub (3×21\"). Mucha pegada y presencia en escena, para festivales y grandes producciones.",
      en: "A 5-way horn-loaded system: Air Array mid-highs, Hyperfold subs (4×15\") and Incubus Sub (3×21\"). Huge output and real presence on stage, for festivals and large productions.",
    },
  },
  {
    name: "Arclite",
    kind: { es: "Formato medio · versátil", en: "Mid format · versatile" },
    body: {
      es: "Potencia y definición Void en un formato más manejable, para eventos medianos y salas donde no quieres cargar con un sistema enorme.",
      en: "Void's power and definition in a more manageable format, for mid-size events and rooms where you don't want to haul a huge system.",
    },
  },
  {
    name: "Nexus",
    kind: { es: "Integración · espacios fijos", en: "Integration · fixed spaces" },
    body: {
      es: "Para instalación permanente en clubs, restaurantes y negocios: buen sonido con la estética Void integrada en el local.",
      en: "For permanent install in clubs, restaurants and venues: great sound with Void's look built into the space.",
    },
  },
];

export const PROCESS: { step: string; title: L; body: L }[] = [
  { step: "01", title: { es: "Escucha", en: "Discovery" }, body: { es: "Vemos el espacio, el público y lo que buscas antes de proponer nada.", en: "We look at the space, the audience and what you're after before proposing anything." } },
  { step: "02", title: { es: "Diseño", en: "Design" }, body: { es: "Diseño acústico y visual del sistema Void a medida del proyecto.", en: "Acoustic and visual design of the Void system, tailored to the project." } },
  { step: "03", title: { es: "Preparación", en: "Prep" }, body: { es: "Equipamiento probado, cableado y logística resuelta antes del montaje.", en: "Gear tested, wired and logistics solved before load-in." } },
  { step: "04", title: { es: "Montaje", en: "Deploy" }, body: { es: "Instalación y calibración in situ para que suene bien en esa sala concreta.", en: "On-site install and calibration so it sounds right in that specific room." } },
  { step: "05", title: { es: "Directo", en: "Live" }, body: { es: "Operación y soporte durante el evento. Potencia estable, sonido impecable.", en: "Operation and support throughout the event. Stable power, flawless sound." } },
];

export const MANIFESTO: L<string>[] = [
  { es: "Somos los únicos en traer Void Incubus a España y Portugal.", en: "We're the only ones bringing Void Incubus to Spain and Portugal." },
  { es: "Sonido que se ve y se siente.", en: "Sound you can see and feel." },
  { es: "Si entra por los oídos, también tiene que entrar por los ojos.", en: "If it hits your ears, it should hit your eyes too." },
];

export const CLIENTS = [
  "MANAWA FESTIVAL",
  "FULLNES FESTIVAL",
  "AMEBA FESTIVAL",
  "P.P.M. EVENTS",
  "SKIZODELIC MIND CREW",
  "VOID ACOUSTICS",
];
