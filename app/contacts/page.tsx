import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { GarageSection } from "@/components/GarageSection";
import { PageHero } from "@/components/PageHero";
import { IconCalendar, IconPhone, IconArrow } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Localisation • Garage 31 Seysses",
  description:
    "Contacter Garage 31 Seysses au 2 Avenue Pierre Semard, 31600 Seysses. Tél : 07 43 32 33 43. Atelier ouvert 7j/7 du lundi au dimanche de 8h à 19h30 sans interruption.",
};

const cards = [
  { label: "Téléphone direct", value: site.phone, href: site.phoneHref, sub: "Appel non surtaxé" },
  { label: "WhatsApp (7j/7)", value: site.whatsapp, href: site.whatsappHref, sub: "Réponse sous quelques minutes" },
  { label: "Adresse Atelier", value: site.fullAddress, href: site.googleMapsUrl, sub: "Seysses (31600) • Parking" },
  { label: "Horaires 7j/7", value: site.hours, sub: "Du lundi au dimanche" },
];

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Accès • Atelier Ouvert 7j/7"
        title="Contacter le Garage 31 Seysses"
        text="Une question, une estimation de devis ou un besoin urgent ? Notre équipe vous répond immédiatement par téléphone, sur WhatsApp ou sur place au 2 Avenue Pierre Semard."
        vehicle="mercedes"
      />

      {/* Cartes de contact direct */}
      <section className="border-b border-white/10 bg-[#08070c]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-px bg-purple-500/20 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.label} className="bg-[#110e1a] p-6 hover:bg-[#161224] transition">
              <p className="text-[11px] uppercase tracking-[0.2em] text-purple-300/70 font-semibold">{card.label}</p>
              {card.href ? (
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-2 block text-sm sm:text-base font-semibold text-white transition hover:text-purple-300"
                >
                  {card.value}
                </a>
              ) : (
                <p className="mt-2 text-sm sm:text-base text-white/90 font-semibold">{card.value}</p>
              )}
              {card.sub && <p className="mt-1 text-xs text-mist">{card.sub}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Bannière de redirection directe vers la page de RDV en ligne */}
      <section className="py-12 bg-white/[0.015] border-b border-white/10">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
          <div className="flex flex-col gap-6 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-[#1b132e] via-[#120e20] to-[#201338] p-8 sm:flex-row sm:items-center sm:justify-between shadow-2xl shadow-purple-950/30">
            <div>
              <span className="inline-block rounded-full bg-purple-500/25 px-3 py-1 text-xs font-semibold text-purple-200">
                Prise de Rendez-vous en Ligne
              </span>
              <h3 className="mt-3 font-display text-2xl uppercase tracking-wide text-white sm:text-3xl">
                Vous souhaitez réserver un créneau à l&apos;atelier ?
              </h3>
              <p className="mt-2 max-w-xl text-xs sm:text-sm text-mist">
                Accédez à notre formulaire en ligne 7j/7 pour choisir votre prestation et bloquer votre intervention sans attente.
              </p>
            </div>
            <Link
              href="/rendez-vous"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:from-purple-500 hover:to-fuchsia-500"
            >
              <IconCalendar className="h-4 w-4" />
              Accéder au module RDV
              <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Formulaire de message direct */}
      <ContactSection />

      {/* Plan d'accès et atelier */}
      <GarageSection />

      {/* FAQ */}
      <FAQ eyebrow="Questions fréquentes" title="Questions fréquentes sur les contacts & accès" />
    </>
  );
}
