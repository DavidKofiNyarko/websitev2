import localFont from "next/font/local";

// Gilmer font family using Next.js localFont
// Font files should be placed in the /public/fonts directory
export const gilmer = localFont({
  src: [
    {
      path: "../../public/fonts/Gilmer-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilmer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilmer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilmer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilmer-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilmer",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

