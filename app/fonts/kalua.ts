import localFont from "next/font/local";

// Kalua font family
// Font files should be placed in the /fonts directory at the project root
export const kalua = localFont({
  src: [
    {
      path: "../fonts/Kalua-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Kalua-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Kalua-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-kalua",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

