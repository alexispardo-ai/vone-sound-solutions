/**
 * Central content model for VONE · Vibrational One.
 * Real company data. Translatable fields are objects with all locales: { es, en, fr, de }.
 * Use `pick(field, lang)` (see lib/i18n.ts) to resolve a string per locale.
 */

export type Locale = "es" | "en" | "fr" | "de";
/** A localised value (one entry per locale). */
export type L<T = string> = Record<Locale, T>;

export const SITE = {
  name: "VONE",
  legalName: "Vibrational One",
  poweredBy: "Powered by VOID Acoustics",
  partner: {
    es: "Premium Partner Oficial Void · España & Portugal",
    en: "Official Void Premium Partner · Spain & Portugal",
    fr: "Partenaire Premium Officiel Void · Espagne & Portugal",
    de: "Offizieller Void Premium Partner · Spanien & Portugal",
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
  { href: "#about", label: { es: "Nosotros", en: "Studio", fr: "À propos", de: "Über uns" } },
  { href: "#services", label: { es: "Servicios", en: "Services", fr: "Services", de: "Leistungen" } },
  { href: "#systems", label: { es: "Sistemas", en: "Systems", fr: "Systèmes", de: "Systeme" } },
  { href: "#work", label: { es: "Proyectos", en: "Work", fr: "Projets", de: "Projekte" } },
  { href: "#process", label: { es: "Proceso", en: "Process", fr: "Processus", de: "Ablauf" } },
  { href: "#contact", label: { es: "Contacto", en: "Contact", fr: "Contact", de: "Kontakt" } },
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
    title: { es: "Rental Void", en: "Void Rental", fr: "Location Void", de: "Void Vermietung" },
    summary: {
      es: "Alquiler de sistemas Void para conciertos, giras, festivales y eventos corporativos y privados. Lo llevamos y lo montamos nosotros.",
      en: "Void system rental for concerts, tours, festivals and corporate or private events. We bring it and set it up ourselves.",
      fr: "Location de systèmes Void pour concerts, tournées, festivals et événements corporate ou privés. On l'apporte et on l'installe nous-mêmes.",
      de: "Vermietung von Void-Systemen für Konzerte, Touren, Festivals und Firmen- oder Privatevents. Wir bringen und bauen alles selbst auf.",
    },
    tags: {
      es: ["Live Events", "Touring", "Festivales"],
      en: ["Live Events", "Touring", "Festivals"],
      fr: ["Live Events", "Tournées", "Festivals"],
      de: ["Live Events", "Touring", "Festivals"],
    },
  },
  {
    id: "sound-integration",
    index: "02",
    title: { es: "Integración de Sonido", en: "Sound Integration", fr: "Intégration Audio", de: "Audio-Integration" },
    summary: {
      es: "Instalaciones fijas de audio Void para clubs, restaurantes y negocios donde la calidad del sonido y la estética importan por igual.",
      en: "Fixed Void audio installs for clubs, restaurants and venues where sound quality and aesthetics matter equally.",
      fr: "Installations audio Void fixes pour clubs, restaurants et commerces où la qualité du son et l'esthétique comptent autant.",
      de: "Fest installierte Void-Audioanlagen für Clubs, Restaurants und Betriebe, wo Klangqualität und Ästhetik gleich wichtig sind.",
    },
    tags: {
      es: ["Clubs", "Restaurantes", "Negocios"],
      en: ["Clubs", "Restaurants", "Venues"],
      fr: ["Clubs", "Restaurants", "Commerces"],
      de: ["Clubs", "Restaurants", "Betriebe"],
    },
  },
  {
    id: "equipment",
    index: "03",
    title: { es: "Gestión de Equipamiento", en: "Equipment Management", fr: "Gestion du Matériel", de: "Equipment-Management" },
    summary: {
      es: "Preparación, transporte y mantenimiento del equipo. Todo sale probado y listo para funcionar.",
      en: "Prep, transport and maintenance of the rig. Everything ships tested and ready to go.",
      fr: "Préparation, transport et entretien du matériel. Tout part testé et prêt à fonctionner.",
      de: "Vorbereitung, Transport und Wartung des Equipments. Alles verlässt uns getestet und einsatzbereit.",
    },
    tags: {
      es: ["Prep", "Logística", "Mantenimiento"],
      en: ["Prep", "Logistics", "Maintenance"],
      fr: ["Prép.", "Logistique", "Entretien"],
      de: ["Vorbereitung", "Logistik", "Wartung"],
    },
  },
  {
    id: "installations",
    index: "04",
    title: { es: "Instalaciones", en: "Installations", fr: "Installations", de: "Installationen" },
    summary: {
      es: "Proyectos llave en mano: diseño acústico, instalación y puesta en marcha de sistemas permanentes calibrados a medida del espacio.",
      en: "Turnkey projects: acoustic design, install and commissioning of permanent systems calibrated to the space.",
      fr: "Projets clés en main : étude acoustique, installation et mise en service de systèmes permanents calibrés sur mesure pour le lieu.",
      de: "Schlüsselfertige Projekte: Akustikplanung, Installation und Inbetriebnahme fester Anlagen, maßgeschneidert für den Raum kalibriert.",
    },
    tags: {
      es: ["Diseño acústico", "Instalación", "Calibración"],
      en: ["Acoustic design", "Install", "Calibration"],
      fr: ["Étude acoustique", "Installation", "Calibrage"],
      de: ["Akustikplanung", "Installation", "Kalibrierung"],
    },
  },
  {
    id: "scenography",
    index: "05",
    title: { es: "Escenografía & Deco", en: "Scenography & Decor", fr: "Scénographie & Déco", de: "Bühnenbild & Deko" },
    summary: {
      es: "Escenografía y decoración para que el espacio acompañe al sonido, en la misma línea que los equipos Void.",
      en: "Set design and decor so the space matches the sound, in the same line as the Void rigs.",
      fr: "Scénographie et décoration pour que l'espace accompagne le son, dans la même ligne que les systèmes Void.",
      de: "Bühnenbild und Dekoration, damit der Raum den Sound begleitet, in einer Linie mit den Void-Anlagen.",
    },
    tags: {
      es: ["Escenografía", "Decoración", "Ambiente"],
      en: ["Set design", "Decor", "Atmosphere"],
      fr: ["Scénographie", "Décoration", "Ambiance"],
      de: ["Bühnenbild", "Dekoration", "Ambiente"],
    },
  },
  {
    id: "led",
    index: "06",
    title: { es: "LED", en: "LED", fr: "LED", de: "LED" },
    summary: {
      es: "Pantallas y superficies LED de alta resolución para reforzar el impacto visual del directo a cualquier escala.",
      en: "High-resolution LED screens and surfaces that amplify the visual impact of the show at any scale.",
      fr: "Écrans et surfaces LED haute résolution pour renforcer l'impact visuel du live, à toutes les échelles.",
      de: "Hochauflösende LED-Wände und -Flächen, die die visuelle Wirkung der Show in jeder Größe verstärken.",
    },
    tags: {
      es: ["Pantallas", "Alta resolución", "Directo"],
      en: ["Screens", "High-res", "Live"],
      fr: ["Écrans", "Haute résolution", "Live"],
      de: ["Screens", "Hohe Auflösung", "Live"],
    },
  },
  {
    id: "lighting",
    index: "07",
    title: { es: "Iluminación & Proyecciones", en: "Lighting & Projection", fr: "Éclairage & Projections", de: "Licht & Projektionen" },
    summary: {
      es: "Diseño de iluminación, lighting de espectáculo y proyecciones para que el evento entre también por los ojos.",
      en: "Lighting design, show lighting and projection so the event lands visually too.",
      fr: "Conception lumière, éclairage de spectacle et projections pour que l'événement passe aussi par les yeux.",
      de: "Lichtdesign, Showbeleuchtung und Projektionen, damit das Event auch über die Augen wirkt.",
    },
    tags: {
      es: ["Lighting", "Diseño", "Proyecciones"],
      en: ["Lighting", "Design", "Projection"],
      fr: ["Lumière", "Design", "Projections"],
      de: ["Licht", "Design", "Projektionen"],
    },
  },
  {
    id: "power",
    index: "08",
    title: { es: "Equipamiento Eléctrico", en: "Power & Electrical", fr: "Alimentation Électrique", de: "Stromversorgung" },
    summary: {
      es: "Distribución eléctrica y grupos para producciones que no pueden permitirse un fallo. Potencia estable, siempre.",
      en: "Power distribution and generation for productions that can't afford a failure. Stable power, always.",
      fr: "Distribution électrique et groupes électrogènes pour des productions qui ne peuvent pas se permettre une panne. Une puissance stable, toujours.",
      de: "Stromverteilung und Generatoren für Produktionen, die sich keinen Ausfall leisten können. Stabile Leistung, immer.",
    },
    tags: {
      es: ["Distribución", "Grupos", "Redundancia"],
      en: ["Distribution", "Generators", "Redundancy"],
      fr: ["Distribution", "Groupes", "Redondance"],
      de: ["Verteilung", "Generatoren", "Redundanz"],
    },
  },
];

export type GalleryPhoto = { src: string; caption: L };

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  category: L;
  categoryKey: "festival" | "private";
  system: string;
  gallery: GalleryPhoto[];
};

const CAT_FESTIVAL: L = { es: "Festival", en: "Festival", fr: "Festival", de: "Festival" };
const CAT_PRIVATE: L = { es: "Evento Privado", en: "Private Event", fr: "Événement privé", de: "Private Veranstaltung" };

const W = "/images/work";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "manawa",
    title: "Manawa Festival",
    client: "Manawa Festival",
    categoryKey: "festival",
    category: CAT_FESTIVAL,
    system: "Void Incubus",
    gallery: [
      { src: `${W}/manawa-1.jpg`, caption: { es: "El sistema Void montado en Manawa Festival, en pleno bosque.", en: "The Void rig set up at Manawa Festival, right in the forest.", fr: "Le système Void installé au Manawa Festival, en pleine forêt.", de: "Das Void-System beim Manawa Festival, mitten im Wald." } },
      { src: `${W}/manawa-2.jpg`, caption: { es: "El stack rojo junto al arte del escenario.", en: "The red stack next to the stage artwork.", fr: "Le stack rouge à côté du décor de la scène.", de: "Der rote Stack neben der Bühnendeko." } },
      { src: `${W}/manawa-4.jpg`, caption: { es: "Al caer la noche, listo para el directo.", en: "As night falls, ready for the show.", fr: "À la tombée de la nuit, prêt pour le live.", de: "Bei Einbruch der Nacht, bereit für die Show." } },
      { src: `${W}/manawa-5.jpg`, caption: { es: "La cabina, enmarcada por el decorado psicodélico.", en: "The booth, framed by the psychedelic backdrop.", fr: "La cabine, encadrée par le décor psychédélique.", de: "Das DJ-Pult, eingerahmt von der psychedelischen Deko." } },
      { src: `${W}/manawa-6.jpg`, caption: { es: "Escenario y sistema antes de abrir puertas.", en: "Stage and rig before doors open.", fr: "Scène et système avant l'ouverture des portes.", de: "Bühne und Anlage vor dem Einlass." } },
      { src: `${W}/manawa-7.jpg`, caption: { es: "El Void rojo de cerca, entre los pinos.", en: "The red Void up close, among the pines.", fr: "Le Void rouge de près, entre les pins.", de: "Das rote Void aus der Nähe, zwischen den Kiefern." } },
    ],
  },
  {
    id: "floridance",
    title: "Floridance Festival",
    client: "Floridance Festival",
    categoryKey: "festival",
    category: CAT_FESTIVAL,
    system: "Void Incubus",
    gallery: [
      { src: `${W}/floridance-1.jpg`, caption: { es: "Fuego y público frente al escenario principal.", en: "Flames and crowd in front of the main stage.", fr: "Flammes et public devant la scène principale.", de: "Flammen und Publikum vor der Hauptbühne." } },
      { src: `${W}/floridance-2.jpg`, caption: { es: "Set al atardecer, con Feel The Frequency en la pantalla.", en: "Sunset set, with Feel The Frequency on the screen.", fr: "Set au coucher du soleil, avec Feel The Frequency à l'écran.", de: "Set bei Sonnenuntergang, mit Feel The Frequency auf dem Screen." } },
      { src: `${W}/floridance-3.jpg`, caption: { es: "El escenario de noche, con los láseres en marcha.", en: "The stage at night, lasers running.", fr: "La scène de nuit, lasers en marche.", de: "Die Bühne bei Nacht, die Laser laufen." } },
      { src: `${W}/floridance-4.jpg`, caption: { es: "Manos arriba en cabina, entre las columnas LED.", en: "Hands up in the booth, between the LED columns.", fr: "Les mains en l'air en cabine, entre les colonnes LED.", de: "Hände hoch am Pult, zwischen den LED-Säulen." } },
      { src: `${W}/floridance-5.jpg`, caption: { es: "El stack Void ya volado, horas antes del festival.", en: "The Void stack flown, hours before the festival.", fr: "Le stack Void accroché, quelques heures avant le festival.", de: "Der Void-Stack hängt, Stunden vor dem Festival." } },
      { src: `${W}/floridance-6.jpg`, caption: { es: "Primeros asistentes al atardecer, junto al sistema.", en: "First arrivals at sunset, next to the rig.", fr: "Les premiers arrivés au coucher du soleil, près du système.", de: "Die ersten Gäste bei Sonnenuntergang, neben der Anlage." } },
    ],
  },
  {
    id: "retrohalloween",
    title: "Retro Halloween",
    client: "RaveArt",
    categoryKey: "private",
    category: CAT_PRIVATE,
    system: "Arclite",
    gallery: [
      { src: `${W}/retro-1.jpg`, caption: { es: "La pista llena bajo la carpa.", en: "A packed floor under the tent.", fr: "Une piste pleine sous le chapiteau.", de: "Volle Tanzfläche unter dem Zelt." } },
      { src: `${W}/retro-2.jpg`, caption: { es: "La carpa principal vista desde arriba.", en: "The main tent seen from above.", fr: "Le chapiteau principal vu d'en haut.", de: "Das Hauptzelt von oben." } },
      { src: `${W}/retro-3.jpg`, caption: { es: "Subidón en primera fila durante el set.", en: "Front-row high during the set.", fr: "Euphorie au premier rang pendant le set.", de: "Ekstase in der ersten Reihe während des Sets." } },
      { src: `${W}/retro-4.jpg`, caption: { es: "Chispas y pirotecnia detrás de la cabina.", en: "Sparks and pyro behind the booth.", fr: "Étincelles et pyrotechnie derrière la cabine.", de: "Funken und Pyro hinter dem Pult." } },
      { src: `${W}/retro-5.jpg`, caption: { es: "Desde la cabina, frente a toda la carpa.", en: "From the booth, facing the whole tent.", fr: "Depuis la cabine, face à tout le chapiteau.", de: "Vom Pult aus, mit Blick auf das ganze Zelt." } },
      { src: `${W}/retro-6.jpg`, caption: { es: "La carpa llena con luz cálida.", en: "The packed tent under warm light.", fr: "Le chapiteau plein sous une lumière chaude.", de: "Das volle Zelt in warmem Licht." } },
    ],
  },
  {
    id: "ppm",
    title: "Aniversario P.P.M.",
    client: "P.P.M. Events",
    categoryKey: "private",
    category: CAT_PRIVATE,
    system: "Arclite",
    gallery: [
      { src: `${W}/ppm-1.jpg`, caption: { es: "Aniversario P.P.M. en Málaga Forum, ya de noche.", en: "P.P.M. anniversary at Málaga Forum, after dark.", fr: "Anniversaire P.P.M. au Málaga Forum, à la nuit tombée.", de: "P.P.M.-Jubiläum im Málaga Forum, nach Einbruch der Dunkelheit." } },
      { src: `${W}/ppm-2.jpg`, caption: { es: "Atardecer, con el público llegando a la pista.", en: "Sunset, with the crowd filling the floor.", fr: "Coucher du soleil, le public arrive sur la piste.", de: "Sonnenuntergang, das Publikum füllt die Fläche." } },
      { src: `${W}/ppm-3.jpg`, caption: { es: "El escenario y las cajas Void a plena luz.", en: "The stage and the Void cabinets in daylight.", fr: "La scène et les enceintes Void en plein jour.", de: "Die Bühne und die Void-Boxen bei Tageslicht." } },
      { src: `${W}/ppm-4.jpg`, caption: { es: "Luces rojas sobre la pista en lo mejor de la noche.", en: "Red lights over the floor at the peak of the night.", fr: "Lumières rouges sur la piste au cœur de la nuit.", de: "Rote Lichter über der Fläche zur besten Stunde." } },
      { src: `${W}/ppm-5.jpg`, caption: { es: "Tony Romera en cabina, con humo y el sistema en rojo.", en: "Tony Romera in the booth, with haze and the rig in red.", fr: "Tony Romera en cabine, avec la fumée et le système en rouge.", de: "Tony Romera am Pult, mit Nebel und der Anlage in Rot." } },
      { src: `${W}/ppm-6.jpg`, caption: { es: "Atardecer en primera fila, junto a las cajas Void.", en: "Sunset in the front row, next to the Void cabinets.", fr: "Coucher du soleil au premier rang, près des enceintes Void.", de: "Sonnenuntergang in der ersten Reihe, neben den Void-Boxen." } },
    ],
  },
];

export const WORK_FILTERS: { key: "all" | "festival" | "private"; label: L }[] = [
  { key: "all", label: { es: "Todos", en: "All", fr: "Tous", de: "Alle" } },
  { key: "festival", label: { es: "Festivales", en: "Festivals", fr: "Festivals", de: "Festivals" } },
  { key: "private", label: { es: "Eventos Privados", en: "Private Events", fr: "Événements privés", de: "Private Events" } },
];

export const STATS: { value: number; suffix: string; label: L }[] = [
  { value: 100, suffix: "%", label: { es: "Sistemas Void Acoustics", en: "Void Acoustics systems", fr: "Systèmes Void Acoustics", de: "Void-Acoustics-Systeme" } },
  { value: 3, suffix: "", label: { es: "Sistemas insignia: Incubus · Arclite · Nexus", en: "Flagship systems: Incubus · Arclite · Nexus", fr: "Systèmes phares : Incubus · Arclite · Nexus", de: "Flaggschiff-Systeme: Incubus · Arclite · Nexus" } },
  { value: 2, suffix: "", label: { es: "Países · España & Portugal", en: "Countries · Spain & Portugal", fr: "Pays · Espagne & Portugal", de: "Länder · Spanien & Portugal" } },
  { value: 6, suffix: "+", label: { es: "Producciones en directo", en: "Live productions", fr: "Productions en live", de: "Live-Produktionen" } },
];

/** The three Void systems VONE deploys, with real product specs. */
export const SYSTEMS: { name: string; kind: L; body: L; image: string }[] = [
  {
    name: "Incubus",
    image: "/images/sys-incubus.jpg",
    kind: { es: "Sistema insignia · gran formato", en: "Flagship · large format", fr: "Système phare · grand format", de: "Flaggschiff · Großformat" },
    body: {
      es: "Sistema horn-loaded de 5 vías: Air Array de medios-agudos, subgraves Hyperfold (4×15\") e Incubus Sub (3×21\"). Mucha pegada y presencia en escena, para festivales y grandes producciones.",
      en: "A 5-way horn-loaded system: Air Array mid-highs, Hyperfold subs (4×15\") and Incubus Sub (3×21\"). Huge output and real presence on stage, for festivals and large productions.",
      fr: "Système à pavillon 5 voies : Air Array médium-aigu, subs Hyperfold (4×15\") et Incubus Sub (3×21\"). Beaucoup de punch et une vraie présence sur scène, pour les festivals et les grandes productions.",
      de: "Hornbelastetes 5-Wege-System: Air Array für Mitten und Höhen, Hyperfold-Subs (4×15\") und Incubus Sub (3×21\"). Viel Druck und echte Bühnenpräsenz, für Festivals und große Produktionen.",
    },
  },
  {
    name: "Arclite",
    image: "/images/sys-arclite.jpg",
    kind: { es: "Formato medio · versátil", en: "Mid format · versatile", fr: "Format moyen · polyvalent", de: "Mittelformat · vielseitig" },
    body: {
      es: "Potencia y definición Void en un formato más manejable, para eventos medianos y salas donde no quieres cargar con un sistema enorme.",
      en: "Void's power and definition in a more manageable format, for mid-size events and rooms where you don't want to haul a huge system.",
      fr: "La puissance et la définition Void dans un format plus maniable, pour les événements moyens et les salles où l'on ne veut pas trimballer un système énorme.",
      de: "Void-Leistung und -Definition in einem handlicheren Format, für mittelgroße Events und Räume, in denen man kein riesiges System schleppen will.",
    },
  },
  {
    name: "Nexus",
    image: "/images/sys-nexus.jpg",
    kind: { es: "Integración · espacios fijos", en: "Integration · fixed spaces", fr: "Intégration · lieux fixes", de: "Integration · feste Räume" },
    body: {
      es: "Para instalación permanente en clubs, restaurantes y negocios: buen sonido con la estética Void integrada en el local.",
      en: "For permanent install in clubs, restaurants and venues: great sound with Void's look built into the space.",
      fr: "Pour une installation permanente en clubs, restaurants et commerces : un bon son avec l'esthétique Void intégrée au lieu.",
      de: "Für die feste Installation in Clubs, Restaurants und Betrieben: guter Sound mit integrierter Void-Ästhetik im Raum.",
    },
  },
];

export const PROCESS: { step: string; title: L; body: L }[] = [
  { step: "01", title: { es: "Escucha", en: "Discovery", fr: "Écoute", de: "Zuhören" }, body: { es: "Vemos el espacio, el público y lo que buscas antes de proponer nada.", en: "We look at the space, the audience and what you're after before proposing anything.", fr: "On regarde le lieu, le public et ce que tu cherches avant de proposer quoi que ce soit.", de: "Wir schauen uns den Ort, das Publikum und dein Ziel an, bevor wir etwas vorschlagen." } },
  { step: "02", title: { es: "Diseño", en: "Design", fr: "Conception", de: "Konzept" }, body: { es: "Diseño acústico y visual del sistema Void a medida del proyecto.", en: "Acoustic and visual design of the Void system, tailored to the project.", fr: "Conception acoustique et visuelle du système Void, sur mesure pour le projet.", de: "Akustische und visuelle Planung des Void-Systems, maßgeschneidert für das Projekt." } },
  { step: "03", title: { es: "Preparación", en: "Prep", fr: "Préparation", de: "Vorbereitung" }, body: { es: "Equipamiento probado, cableado y logística resuelta antes del montaje.", en: "Gear tested, wired and logistics solved before load-in.", fr: "Matériel testé, câblé et logistique réglée avant le montage.", de: "Equipment getestet, verkabelt und Logistik geklärt, noch vor dem Aufbau." } },
  { step: "04", title: { es: "Montaje", en: "Deploy", fr: "Montage", de: "Aufbau" }, body: { es: "Instalación y calibración in situ para que suene bien en esa sala concreta.", en: "On-site install and calibration so it sounds right in that specific room.", fr: "Installation et calibrage sur place pour que ça sonne bien dans cette salle précise.", de: "Installation und Kalibrierung vor Ort, damit es in genau diesem Raum gut klingt." } },
  { step: "05", title: { es: "Directo", en: "Live", fr: "Live", de: "Live" }, body: { es: "Operación y soporte durante el evento. Potencia estable, sonido impecable.", en: "Operation and support throughout the event. Stable power, flawless sound.", fr: "Exploitation et support pendant l'événement. Puissance stable, son impeccable.", de: "Betrieb und Support während des Events. Stabile Leistung, makelloser Sound." } },
];

export const MANIFESTO: L<string>[] = [
  { es: "Somos los únicos en traer Void Incubus a España y Portugal.", en: "We're the only ones bringing Void Incubus to Spain and Portugal.", fr: "Nous sommes les seuls à amener Void Incubus en Espagne et au Portugal.", de: "Wir sind die Einzigen, die Void Incubus nach Spanien und Portugal bringen." },
  { es: "Sonido que se ve y se siente.", en: "Sound you can see and feel.", fr: "Un son qui se voit et se ressent.", de: "Sound, den man sieht und spürt." },
  { es: "Si entra por los oídos, también tiene que entrar por los ojos.", en: "If it hits your ears, it should hit your eyes too.", fr: "Si ça entre par les oreilles, ça doit aussi entrer par les yeux.", de: "Was durch die Ohren geht, muss auch durch die Augen gehen." },
];

export const CLIENTS = [
  "MANAWA FESTIVAL",
  "FLORIDANCE FESTIVAL",
  "FULLNESS FESTIVAL",
  "AMEBA FESTIVAL",
  "P.P.M. EVENTS",
  "SKIZODELIC MIND CREW",
  "RAVEART",
  "VOID ACOUSTICS",
];
