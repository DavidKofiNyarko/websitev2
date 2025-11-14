import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Investors",
  description:
    "Invest in sustainable agricultural projects in Ghana with AgriPath. Discover secure investment opportunities, transparent returns, and how to start investing in farming today. Trusted by investors worldwide.",
  keywords: [
    "invest in agriculture",
    "agricultural investment opportunities",
    "farm investment returns",
    "Ghana agricultural projects",
    "sustainable farming investment",
    "agricultural crowdfunding",
    "farm financing investment",
    "agri investment platform",
  ],
  openGraph: {
    title: "For Investors | AgriPath",
    description:
      "Invest in sustainable agricultural projects in Ghana. Discover secure investment opportunities, transparent returns, and trusted farming investments.",
    url: "https://agripath.co/investors",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Investors | AgriPath",
    description:
      "Invest in sustainable agricultural projects in Ghana. Discover secure investment opportunities and transparent returns.",
  },
};

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

