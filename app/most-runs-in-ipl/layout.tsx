import type { Metadata } from "next";
import { generatePageMetadata } from "../../lib/siteConfig";

export const metadata: Metadata = generatePageMetadata(
  "Most Runs in IPL History",
  "Who has scored the most runs in IPL history? Virat Kohli leads with 9,261 — the full all-time top scorers, single-season records and the chasing pack, updated every season.",
  "/most-runs-in-ipl/"
);

export default function MostRunsInIplLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
