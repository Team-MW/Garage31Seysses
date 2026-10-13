import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Garage 31 Seysses — Mécanique Auto & Garage Indépendant (31600)",
    template: "%s · Garage 31 Seysses",
  },
  description:
    "Garage 31 à Seysses (31600) : réparation et mécanique automobile toutes marques, révision, entretien, diagnostic. Ouvert 7j/7 au 2 Avenue Pierre Semard. Noté 5/5 sur Google. Tél : 07 43 32 33 43.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${manrope.variable} ${oswald.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
