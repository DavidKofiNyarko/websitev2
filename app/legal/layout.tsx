import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Documents",
  description:
    "Access AgriPath's legal documents including Investment Terms & Conditions, Terms of Service, Privacy Policy, and Refund Policy. Review our policies and terms before investing or using our platform.",
  keywords: [
    "AgriPath terms and conditions",
    "privacy policy",
    "investment terms",
    "refund policy",
    "terms of service",
    "legal documents",
    "AgriPath policies",
  ],
  openGraph: {
    title: "Legal Documents | AgriPath",
    description:
      "Access AgriPath's legal documents including Investment Terms & Conditions, Terms of Service, Privacy Policy, and Refund Policy.",
    url: "https://agripath.co/legal",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Legal Documents | AgriPath",
    description:
      "Access AgriPath's legal documents including Terms & Conditions, Privacy Policy, and Refund Policy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

