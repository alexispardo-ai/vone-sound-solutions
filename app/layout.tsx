import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { SITE } from "@/lib/site";

const SITE_DESCRIPTION =
  "VONE · Vibrational One, Partner Premium Oficial de Void Acoustics en España y Portugal. Alquiler e instalación de sistemas de sonido Void Incubus, Arclite y Nexus para festivales, eventos, clubs y restaurantes.";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Reuse Inter for the display slot too (tight, editorial weights).
const display = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} · ${SITE.legalName} · ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE.name,
  keywords: [
    "Void Acoustics España",
    "Void Incubus",
    "renting sonido",
    "sonido profesional Málaga",
    "sistemas de sonido festivales",
    "instalación sonido clubs",
    "Arclite",
    "Nexus",
    "Vibrational One",
    "sonido eventos España Portugal",
  ],
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_GB",
    url: SITE.domain,
    siteName: SITE.name,
    title: `${SITE.name} · ${SITE.legalName} · ${SITE.tagline}`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${SITE.name} · ${SITE.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · ${SITE.tagline}`,
    description: SITE_DESCRIPTION,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE.domain },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `${SITE.name} · ${SITE.legalName}`,
  url: SITE.domain,
  description: SITE_DESCRIPTION,
  email: SITE.email,
  telephone: SITE.phone,
  slogan: SITE.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. Montevideo, 16, Cruz de Humilladero",
    addressLocality: "Málaga",
    postalCode: "29006",
    addressCountry: "ES",
  },
  areaServed: ["España", "Portugal"],
  sameAs: SITE.social.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${display.variable}`}>
      <body className="grain relative bg-ink-900 font-sans text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-5 focus:py-2 focus:text-ink-900"
        >
          Skip to content
        </a>
        <LanguageProvider>
          <CustomCursor />
          <ScrollProgress />
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
