import type { Metadata } from "next";
import { AppointmentBooking } from "@/components/AppointmentBooking";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { GarageSection } from "@/components/GarageSection";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Rendez-vous • Garage 31 Seysses",
  description: "Contacter Garage 31 Seysses au 2 Avenue Pierre Semard, 31600 Seysses. Tél : 07 43 32 33 43. Prise de rendez-vous en ligne 7j/7 avec créneaux disponibles.",
};

const cards = [
  { label: "Téléphone", value: site.phone, href: site.phoneHref },
  { label: "WhatsApp (7j/7)", value: site.whatsapp, href: site.whatsappHref },
  { label: "Adresse", value: site.fullAddress },
  { label: "Horaires", value: site.hours },
];

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Rendez-vous"
        title="Contacter le Garage 31 Seysses"
        text="Une question, une estimation ou un créneau à l'atelier ? L'équipe vous accueille 7 jours sur 7 au 07 43 32 33 43 ou réservez votre créneau en ligne ci-dessous."
        vehicle="mercedes"
      />
      <section className="border-b border-white/10 bg-[#08070c]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-px bg-purple-500/20 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.label} className="bg-[#110e1a] px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-purple-300/70 font-medium">{card.label}</p>
              {card.href ? (
                <a href={card.href} className="mt-2 block text-sm transition hover:text-purple-300 font-semibold text-white">
                  {card.value}
                </a>
              ) : (
                <p className="mt-2 text-sm text-white/90 font-medium">{card.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Prise de RDV intégrée */}
      <AppointmentBooking />

      <GarageSection />
      <FAQ eyebrow="Questions fréquentes" title="Questions fréquentes sur les rendez-vous" />
      <ContactSection />
    </>
  );
}
