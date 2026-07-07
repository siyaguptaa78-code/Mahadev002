import type { Metadata } from "next";
import { generatePageMetadata } from "../../lib/siteConfig";

export const metadata: Metadata = generatePageMetadata(
  "Mahadev Book ID – Get Your Verified Betting ID",
  "Get your verified Mahadev Book ID instantly. Access cricket betting, casino games, and more with your secure ID.",
  "/mahadev-book-id"
);

export default function BookIDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
