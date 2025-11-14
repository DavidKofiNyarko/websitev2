import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Farmers",
  description:
    "Register your farm with AgriPath and access funding, resources, and support for your agricultural projects. Connect with investors, grow your farm, and contribute to sustainable agriculture in Ghana.",
  keywords: [
    "farm registration",
    "farm funding Ghana",
    "agricultural financing",
    "farm investment support",
    "Ghana farmers platform",
    "farm project funding",
    "agricultural resources",
    "farm development support",
  ],
  openGraph: {
    title: "For Farmers | AgriPath",
    description:
      "Register your farm with AgriPath and access funding, resources, and support for your agricultural projects in Ghana.",
    url: "https://agripath.co/farmers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Farmers | AgriPath",
    description:
      "Register your farm with AgriPath and access funding, resources, and support for your agricultural projects.",
  },
};

export default function FarmersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

