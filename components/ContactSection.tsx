import Image from "next/image";
import { Suspense } from "react";
import { site } from "@/lib/site";
import { IconBadge, IconKey, IconTarget } from "./Icons";
import { ContactForm } from "./ContactForm";

const points = [
  { icon: IconTarget, title: "Garage à Seysses (31600)", text: "Atelier situé au 2 Avenue Pierre Semard. Parking sur place." },
  { icon: IconBadge, title: "Note Google 5 / 5 (45 avis)", text: "Travail sérieux, devis gratuit, pièces certifiées et garantie constructeur." },
  { icon: IconKey, title: "Ouvert 7j/7 (08:00–19:30)", text: "Accueil du lundi au dimanche sans interruption pour toutes marques." },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative isolate overflow-hidden scroll-mt-28 border-t border-white/10 py-20 sm:py-28">
      {/* Silhouette véhicule en fond d'écran */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 -z-10 select-none w-[340px] sm:w-[500px] lg:w-[620px] opacity-[0.08] sm:opacity-[0.10]"
      >
        <Image
          src="/images/mercedes_bg.webp"
          alt=""
          width={600}
          height={400}
          className="h-auto w-full object-contain pointer-events-none select-none filter contrast-125"
        />
      </div>
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-400">
            Contact & Devis • {site.slogan}
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl text-white">
            Prendre contact
            <br />
            avec l&apos;atelier
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-mist sm:text-base">
            Une question sur une réparation, un entretien ou un créneau ? Appelez directement le {site.phone} ou laissez votre demande ci-contre pour une réponse rapide.
          </p>
          <ul className="mt-8 space-y-5">
            {points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-purple-500/30 bg-purple-950/40 text-purple-300">
                  <point.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{point.title}</span>
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
