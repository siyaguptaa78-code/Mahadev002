import type { Metadata } from "next";
import { generatePageMetadata } from "../../lib/siteConfig";

export const metadata: Metadata = generatePageMetadata(
  "FAQ – Mahadev Book Frequently Asked Questions",
  "Find answers to the most common questions about Mahadev Book ID, login, registration, deposits, withdrawals, and more.",
  "/faq"
);
