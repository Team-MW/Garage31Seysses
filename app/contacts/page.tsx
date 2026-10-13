import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { GarageSection } from "@/components/GarageSection";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter Garage 31 Seysses au 2 Avenue Pierre Semard, 31600 Seysses. Tél : 07 43 32 33 43. Ouvert 7j/7.",
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
        eyebrow="Contact"
        title="Contacter le Garage 31"
        text="Une question, une estimation ou un rendez-vous à l'atelier ? L'équipe vous répond 7 jours sur 7 au 07 43 32 33 43."
        vehicle="mercedes"
      />
      <section className="border-b border-white/10">
        <div className="mx-auto grid w-full max-w-[1180px] gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.label} className="bg-ink px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-mist">{card.label}</p>
              {card.href ? (
                <a href={card.href} className="mt-2 block text-sm transition hover:text-ember font-medium">
                  {card.value}
                </a>
              ) : (
                <p className="mt-2 text-sm">{card.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <GarageSection />
      <FAQ eyebrow="Questions fréquentes" title="Questions fréquentes sur les rendez-vous" />
      <ContactSection />
    </>
  );
}
