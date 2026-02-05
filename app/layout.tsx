import type { Metadata } from "next";
import { Geist, Geist_Mono, Kulim_Park, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ModalProvider } from "./components/ModalContext";
import ModalContainer from "./components/ModalContainer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Using Kulim Park for hero section (similar to Gilmer/Kalua style)
const kulimPark = Kulim_Park({
  variable: "--font-kulim-park",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

// Using Inter as a clean sans-serif for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "AgriPath - Empowering Agriculture Through Investment",
    template: "%s | AgriPath",
  },
  description:
    "AgriPath connects investors with sustainable agricultural projects in Ghana. Invest in farming opportunities, support local farmers, and grow your wealth while contributing to food security and economic development.",
  keywords: [
    "agricultural investment",
    "farming investment",
    "Ghana agriculture",
    "sustainable farming",
    "agri-tech",
    "farm investment platform",
    "agricultural projects",
    "invest in agriculture",
    "farm financing",
    "agricultural crowdfunding",
  ],
  authors: [{ name: "AgriPath" }],
  creator: "AgriPath",
  publisher: "AgriPath",
  metadataBase: new URL("https://agripath.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agripath.co",
    siteName: "AgriPath",
    title: "AgriPath - Empowering Agriculture Through Investment",
    description:
      "Connect with sustainable agricultural projects in Ghana. Invest in farming opportunities and support local farmers while growing your wealth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgriPath - Agricultural Investment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgriPath - Empowering Agriculture Through Investment",
    description:
      "Connect with sustainable agricultural projects in Ghana. Invest in farming opportunities and support local farmers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AgriPath",
    url: "https://agripath.co",
    logo: "https://agripath.co/logo.png",
    description:
      "AgriPath connects investors with sustainable agricultural projects in Ghana, empowering agriculture through investment.",
    sameAs: [
      // Add social media links when available
      // "https://www.facebook.com/agripath",
      // "https://www.twitter.com/agripath",
      // "https://www.linkedin.com/company/agripath",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "support@agripath.co",
      // areaServed: "GH",
      // availableLanguage: "en",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AgriPath",
    url: "https://agripath.co",
    description:
      "AgriPath connects investors with sustainable agricultural projects in Ghana. Invest in farming opportunities, support local farmers, and grow your wealth.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://agripath.co/faqs?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kulimPark.variable} ${inter.variable} antialiased relative overflow-x-hidden w-full`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Navbar />
        <ModalProvider>
          {children}
          <ModalContainer />
        </ModalProvider>
        <Footer />
      </body>
    </html>
  );
}
