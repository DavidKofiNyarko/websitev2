import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AgriPath's mission to transform agriculture in Ghana through innovative investment solutions. Discover our core values, team, and commitment to sustainable farming and economic development.",
  keywords: [
    "AgriPath about",
    "agricultural investment company",
    "Ghana farming platform",
    "sustainable agriculture mission",
    "agri-tech company",
    "farm investment team",
  ],
  openGraph: {
    title: "About Us | AgriPath",
    description:
      "Learn about AgriPath's mission to transform agriculture in Ghana through innovative investment solutions and sustainable farming practices.",
    url: "https://agripath.co/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | AgriPath",
    description:
      "Learn about AgriPath's mission to transform agriculture in Ghana through innovative investment solutions.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

