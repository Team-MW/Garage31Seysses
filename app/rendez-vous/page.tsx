import type { Metadata } from "next";
import Link from "next/link";
import { AppointmentBooking } from "@/components/AppointmentBooking";
import { FAQ } from "@/components/FAQ";
import { GarageSection } from "@/components/GarageSection";
import { PageHero } from "@/components/PageHero";
import { IconCalendar, IconPhone, IconArrow } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prise de Rendez-vous en Ligne • Garage 31 Seysses",
  description:
    "Réservez votre créneau à l'atelier Garage 31 Seysses (31600) : Vidange dès 99 €, révision 3 filtres à 159 € TTC, distribution, freinage, amortisseurs, diagnostic. Ouvert 7j/7 sans interruption au 07 43 32 33 43.",
};

const rdvFaqItems = [
  {
    q: "Comment fonctionne la prise de rendez-vous en ligne ?",
    a: "Remplissez simplement le formulaire officiel ci-dessous avec vos coordonnées, le modèle de votre véhicule et la prestation souhaitée. Notre équipe prépare votre prise en charge et valide le créneau avec vous.",
  },
  {
    q: "Puis-je venir sans rendez-vous à l'atelier ?",
    a: "Oui ! Fidèles à notre devise « Service rapide & efficace », nous accueillons les urgences (crevaison, voyant moteur allumé, batterie, bruit anormal) directement à l'atelier au 2 Avenue Pierre Semard à Seysses.",
  },
  {
    q: "Dois-je avancer des frais lors de la réservation en ligne ?",
    a: "Non, aucune avance de frais n'est requise en ligne. Le devis précis et transparent vous est présenté et validé avec vous avant toute intervention sur votre véhicule.",
  },
  {
    q: "Quels sont les horaires d'ouverture de l'atelier ?",
    a: "Garage 31 Seysses est ouvert 7 jours sur 7, du lundi au dimanche de 08:00 à 19:30 sans interruption pour s'adapter à votre emploi du temps.",
  },
];

export default function RendezVousPage() {
  return (
    <>
      <PageHero
        eyebrow="Réservation Directe • Service Rapide & Efficace"
        title="Prenez rendez-vous à l'Atelier à Seysses"
        text="Choisissez votre intervention et votre créneau horaire en toute simplicité. Devis clair, sans surprise et garantie constructeur préservée."
        vehicle="golf"
      />

      {/* Bandeau indicateurs de réassurance */}
      <section className="border-b border-white/10 bg-[#08070c]">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 gap-px bg-purple-500/20 sm:grid-cols-4">
          <div className="bg-[#100d18] p-6 text-center">
            <p className="font-display text-2xl font-semibold text-purple-400 sm:text-3xl">7j / 7</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">08:00 à 19:30</p>
          </div>
          <div className="bg-[#100d18] p-6 text-center">
            <p className="font-display text-2xl font-semibold text-purple-400 sm:text-3xl">100%</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Sans avance de frais</p>
          </div>
          <div className="bg-[#100d18] p-6 text-center">
            <p className="font-display text-2xl font-semibold text-purple-400 sm:text-3xl">Rapide</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Confirmation atelier</p>
          </div>
          <div className="bg-[#100d18] p-6 text-center">
            <p className="font-display text-2xl font-semibold text-purple-400 sm:text-3xl">0 €</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Devis gratuit</p>
          </div>
        </div>
      </section>

      {/* Formulaire Jotform officiel */}
      <AppointmentBooking />

      {/* Raccourci vers les forfaits tarifaires */}
      <section className="border-t border-white/10 bg-white/[0.01] py-14 sm:py-16">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
          <div className="flex flex-col gap-6 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-[#150f24] to-[#100d1a] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="text-xs uppercase tracking-wider text-purple-400 font-semibold">Forfaits Atelier Fixes</p>
              <h3 className="mt-2 font-display text-2xl uppercase tracking-wide text-white sm:text-3xl">
                Consulter tous nos forfaits & tarifs
              </h3>
              <p className="mt-2 max-w-xl text-xs sm:text-sm text-mist">
                Vidange dès 99 €, révision 3 filtres à 159 € TTC, amortisseurs à 159 € et kit de distribution à 494,99 €.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tarifs"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:from-purple-500 hover:to-fuchsia-500"
              >
                Grille des tarifs
                <IconArrow className="h-4 w-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-5 py-3 text-xs sm:text-sm font-semibold text-purple-200 transition hover:bg-purple-900/40"
              >
                <IconPhone className="h-4 w-4 text-purple-400" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localisation de l'Atelier */}
      <GarageSection />

      {/* FAQ spécifique aux rendez-vous */}
      <FAQ
        eyebrow="Questions fréquentes"
        title="Vos questions sur la réservation d'un créneau"
        items={rdvFaqItems}
      />
    </>
  );
}
