import type { Metadata } from "next";
import { Geist, Geist_Mono, Courier_Prime } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "808",
  description: "Next Generation of Bad Decisions",

  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/android-chrome-512x512.png",
    },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-courier-prime)" }}
      >
        {children}
      </body>
    </html>
  );
}
