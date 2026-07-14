import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://contohportofolioweb.vercel.app"),
  title: "LUMIÈRE STUDIOS | Timeless Visual Poetry",
  description: "We capture authentic love stories and architectural elegance through cinematic lenses.",
  openGraph: {
    title: "LUMIÈRE STUDIOS | Timeless Visual Poetry",
    description: "We capture authentic love stories and architectural elegance through cinematic lenses.",
    url: "/",
    siteName: "LUMIÈRE STUDIOS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMIÈRE STUDIOS | Timeless Visual Poetry",
    description: "We capture authentic love stories and architectural elegance through cinematic lenses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, playfair.variable, "bg-pure-white text-deep-onyx")}>
        {children}
      </body>
    </html>
  );
}
