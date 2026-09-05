import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Mahadev Book",
  applicationName: "Mahadev Book",
  tagline: "India's Most Trusted Online Betting Platform",
  url: "https://mahadevplayind.com",
  description:
    "Explore Mahadev Book information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
  keywords:
    "Mahadev Book, Mahadev Book ID, Mahadev Book Login, Mahadev Book Register, Buy Mahadev Book ID, Mahadev Play India",
  ogImage: "/images/mahadev-book-banner.webp",
  whatsappLink: "https://wa.me/918360750829",
  creator: "Mahadev Book",
  publisher: "Mahadev Book",
  googleVerification: "6hpGUG7EAFbgN4650-RtL-Dd5oOzgbvyTDnJSYnhc18",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  applicationName: SITE_CONFIG.applicationName,
  title: {
    default: "Mahadev Book Official ID | Sports & Account Guide",
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.creator,
  publisher: SITE_CONFIG.publisher,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Mahadev Book - India's Most Trusted Online Betting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: "@MahadevBook",
    site: "@MahadevBook",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: SITE_CONFIG.googleVerification,
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path = "/"
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}${path}`,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url: `${SITE_CONFIG.url}${path}`,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
  };
}
