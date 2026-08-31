import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { defaultMetadata, SITE_CONFIG } from "../lib/siteConfig";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  ...defaultMetadata,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#org`,
      name: SITE_CONFIG.name,
      url: `${SITE_CONFIG.url}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/images/mahadev-book-logo.webp`,
      },
      description: SITE_CONFIG.description,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          url: `${SITE_CONFIG.url}/contact`,
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      url: `${SITE_CONFIG.url}/`,
      name: SITE_CONFIG.name,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_CONFIG.url}/#org` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_CONFIG.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Mahadev Book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mahadev Book is India's top sports insights and fantasy analytics platform with an official website and mobile app.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get a Mahadev Book ID?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can request a verified Mahadev Book ID via our WhatsApp support channel.",
          },
        },
        {
          "@type": "Question",
          name: "Is Mahadev Book Online free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Mahadev Book Registration is free. Premium features require an upgrade.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I download Mahadev Book App?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Mahadev Book App can be downloaded from the official Mahadev Book Website.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark' }}
    >
      <head>
        <meta name="google-site-verification" content="x7uBQVm6lap6z7gQ0t1WrAdzTDBw_-vyx3egHbINumg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-zinc-100 font-sans selection:bg-amber-500/20 selection:text-amber-300">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
