import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geniclique.com"),
  title: {
    default: "Geni Clique — The work runs itself.",
    template: "%s | Geni Clique",
  },
  description:
    "Geni Clique is an AI systems studio. We design and build AI agents, automations, and custom software that take repetitive work off your team and run it around the clock.",
  openGraph: {
    siteName: "Geni Clique",
    type: "website",
    locale: "en_AU",
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Geni Clique",
  description:
    "AI systems studio building AI agents, business process automation, n8n workflows, custom software and apps, AI-powered websites, and modern SEO/GEO.",
  url: "https://geniclique.com",
  email: "hello@geniclique.com",
  areaServed: ["Australia", "Global"],
  knowsAbout: [
    "AI agents",
    "AI automation",
    "n8n workflow automation",
    "custom software development",
    "mobile app development",
    "AI web development",
    "SEO",
    "Generative Engine Optimization",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased" data-theme="dark">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <a
          href="#main"
          className="mono-label sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:bg-ink-3 focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
