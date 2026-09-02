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
      "@type": "WebSite",
      "@id": "https://mahadevplayind.com/#website",
      "url": "https://mahadevplayind.com/",
      "name": "Mahadev Book",
      "inLanguage": "en"
    },
    {
      "@type": "Organization",
      "@id": "https://mahadevplayind.com/#organization",
      "name": "Mahadev Book",
      "url": "https://mahadevplayind.com/"
    },
    {
      "@type": "WebPage",
      "@id": "https://mahadevplayind.com/#webpage",
      "url": "https://mahadevplayind.com/",
      "name": "Mahadev Book Official ID | Sports & Account Guide",
      "description": "Explore Mahadev Book information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
      "isPartOf": {
        "@id": "https://mahadevplayind.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://mahadevplayind.com/#faq",
      "url": "https://mahadevplayind.com/",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Mahadev Book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mahadev Book is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
          }
        },
        {
          "@type": "Question",
          "name": "How does a Mahadev Book ID work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An account ID is generally used to identify a user account. Refer to Mahadev Book's current account instructions and terms for the exact process."
          }
        },
        {
          "@type": "Question",
          "name": "How can I access Mahadev Book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
          }
        },
        {
          "@type": "Question",
          "name": "What sports are available on Mahadev Book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Available sports can change. Check the current sports or betting section on the website for the latest list and availability."
          }
        },
        {
          "@type": "Question",
          "name": "Does Mahadev Book provide live sports information?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the site's current sports section for any live-event information and the terms that apply to its use."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get help with my Mahadev Book account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
          }
        },
        {
          "@type": "Question",
          "name": "How do I find Mahadev Book login information?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
          }
        },
        {
          "@type": "Question",
          "name": "What payment options are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I have trouble accessing my account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find the latest Mahadev Book updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refer to Mahadev Book's current website information and terms for the most accurate answer."
          }
        }
      ]
    }
  ]
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
