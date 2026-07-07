import type { Metadata } from "next";
import { generatePageMetadata } from "../../lib/siteConfig";

export const metadata: Metadata = generatePageMetadata(
  "About Mahadev Book – India's Trusted Betting Platform",
  "Learn about Mahadev Book, India's most trusted online betting platform with 1.2M+ users since 2018.",
  "/about"
);

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
