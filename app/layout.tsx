import type { Metadata } from "next";
import { Geist, Geist_Mono, Kulim_Park, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  title: "Next.js 16 with GSAP",
  description: "A beautiful website built with Next.js 16 and GSAP animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kulimPark.variable} ${inter.variable} antialiased relative overflow-x-hidden w-full`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
