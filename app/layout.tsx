import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Analytics from "@/app/components/Analytics";

const OceanicTextMono = localFont({
  src: "../public/fonts/OceanicTextMono-Regular.woff",
  variable: "--font-oceanic-text-mono",
  weight: "400",
});

const BrutalType = localFont({
  src: "../public/fonts/BrutalType-Bold.woff",
  variable: "--font-brutal-type",
  weight: "700",
});

export const metadata: Metadata = {
  title: "ALX Partners",
  description:
    "Коллегия адвокатов | M&A & LITIGATION | БЕСПОКОЙСТВО ВАШИХ ОППОНЕНТОВ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body
        className={`${OceanicTextMono.variable} ${BrutalType.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
