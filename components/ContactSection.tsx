import { Suspense } from "react";
import { site } from "@/lib/site";
import { IconBadge, IconKey, IconTarget } from "./Icons";
import { ContactForm } from "./ContactForm";

const points = [
  { icon: IconTarget, title: "Garage à Seysses (31)", text: "Atelier situé au 2 Avenue Pierre Semard, 31600 Seysses." },
  { icon: IconBadge, title: "Note Google 5 / 5", text: "45 avis clients vérifiés. Travail soigné et pièces certifiées." },
  { icon: IconKey, title: "Ouvert 7 jours sur 7", text: "Prise en charge souple et rapide pour toutes marques de véhicules." },
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ember">Contact & Devis</p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl">
            Prendre contact
            <br />
            avec l&apos;atelier
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-mist sm:text-base">
            Une question sur une réparation, un entretien ou un diagnostic ? Appelez directement le {site.phone} ou laissez votre demande pour être recontacté.
          </p>
          <ul className="mt-8 space-y-5">
            {points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ember/30 text-ember">
                  <point.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-medium">{point.title}</span>
                  <span className="mt-1 block text-sm text-mist">{point.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Suspense fallback={<div className="h-[420px] animate-pulse rounded-3xl bg-white/5" />}>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}
