import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Garage 31 Seysses — « Service rapide & efficace » • Ouvert 7j/7",
    template: "%s · Garage 31 Seysses",
  },
  description:
    "Garage 31 à Seysses (31600) : Service rapide & efficace. Vidange dès 99 €, révision 3 filtres à 159 € TTC, distribution 494,99 €, amortisseurs 159 €. Diagnostic, pneumatique, freinage, climatisation, lustrage, vitres teintées, pare-brise. Prise de rendez-vous en ligne 7j/7. Tél : 07 43 32 33 43.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${manrope.variable} ${oswald.variable} font-sans antialiased bg-[#08070c] text-white selection:bg-purple-600 selection:text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
