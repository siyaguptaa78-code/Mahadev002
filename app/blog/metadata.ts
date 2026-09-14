import type { Metadata } from "next";
import { generatePageMetadata } from "../../lib/siteConfig";

export const metadata: Metadata = generatePageMetadata(
  "Blog – Mahadev Book Gaming Insights & Tips",
  "Read the latest cricket Gaming tips, platform guides, and sports insights on the Mahadev Book Blog.",
  "/blog"
);
