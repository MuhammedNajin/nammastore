import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nammastore.online"),
  title: "NammaStore — Run your local shop on WhatsApp",
  description:
    "Update inventory with a voice note in your language, snap photos for instant cataloging, and let AI answer customers. Built for Tier-2 & Tier-3 MSMEs.",
  openGraph: {
    title: "NammaStore — Run your local shop on WhatsApp",
    description: "Voice-to-stock, auto-cataloging and an AI customer concierge, all inside WhatsApp.",
    url: "https://nammastore.online",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
