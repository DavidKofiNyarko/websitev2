import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about AgriPath, including how to invest, farm registration, returns, security, and more. Get all the information you need about our agricultural investment platform.",
  keywords: [
    "AgriPath FAQ",
    "agricultural investment questions",
    "farm investment FAQ",
    "AgriPath help",
    "investment platform questions",
    "farming investment answers",
  ],
  openGraph: {
    title: "Frequently Asked Questions | AgriPath",
    description:
      "Find answers to common questions about AgriPath, including how to invest, farm registration, returns, and security.",
    url: "https://agripath.co/faqs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | AgriPath",
    description:
      "Find answers to common questions about AgriPath, including how to invest, farm registration, and returns.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

