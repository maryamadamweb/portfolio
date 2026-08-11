import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const headingFont = localFont({
  src: "../fonts/flor-de-ruina/FlorDeRuina-Germen.woff2",
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = localFont({
  src: [
    {
      path: "../fonts/times-dot/TimesDot-Roman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/times-dot/TimesDot-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/times-dot/TimesDot-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "maryam adam",
  description:
    "Maryam Adam is an interdisciplinary artist, illustrator, and designer exploring heritage, introspection, and the connection between the conscious and unconscious.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
