import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "LUMIÈRE STUDIOS | Timeless Visual Poetry",
  description: "We capture authentic love stories and architectural elegance through cinematic lenses.",
  openGraph: {
    title: "LUMIÈRE STUDIOS | Timeless Visual Poetry",
    description: "We capture authentic love stories and architectural elegance through cinematic lenses.",
    url: "https://github.com/ridzgabut-source/contohportofolioweb",
    siteName: "LUMIÈRE STUDIOS",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "LUMIÈRE STUDIOS Preview",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMIÈRE STUDIOS | Timeless Visual Poetry",
    description: "We capture authentic love stories and architectural elegance through cinematic lenses.",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"],
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
