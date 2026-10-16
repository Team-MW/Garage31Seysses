import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { advantageIcons, IconCalendar } from "@/components/Icons";
import { advantages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Avantages & Engagements • Garage 31 Seysses",
  description: "Pourquoi faire confiance à Garage 31 Seysses : « Service rapide & efficace », ouvert 7j/7, tarifs forfaitaires clairs dès 99 €, note Google 5/5.",
};

export default function AdvantagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Avantages & Engagements"
        title="Pourquoi choisir le Garage 31 Seysses ?"
        text="Un garage indépendant réactif avec sa devise « Service rapide & efficace », ouvert 7j/7, noté 5/5 sur Google, avec des forfaits transparents pour toutes marques."
        vehicle="mercedes"
      />
      <section className="relative isolate overflow-hidden py-16 sm:py-20">
        {/* Silhouette véhicule en fond d'écran */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-8 -z-10 select-none w-[420px] sm:w-[620px] lg:w-[780px] opacity-[0.06] sm:opacity-[0.08]"
        >
          <Image
            src="/images/308_gt_bg.avif"
            alt=""
            width={1620}
            height={1080}
            className="h-auto w-full object-contain pointer-events-none select-none filter contrast-125"
          />
        </div>
        <div className="mx-auto grid w-full max-w-[1180px] gap-6 px-5 sm:px-8 md:grid-cols-2">
          {advantages.map((item, index) => {
            const Icon = advantageIcons[index % advantageIcons.length];
            return (
              <article key={item.id} className="rounded-3xl border border-white/10 bg-[#110e1a] p-7 sm:p-8 hover:border-purple-500/40 transition">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-600 text-white shadow-md shadow-purple-900/30">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-display text-3xl uppercase tracking-wide text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-mist">{item.text}</p>
              </article>
            );
          })}
        </div>
        <div className="mx-auto mt-10 flex w-full max-w-[1180px] flex-wrap items-center gap-3 px-5 sm:px-8">
          <Link
            href="/rendez-vous"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:from-purple-500 hover:to-fuchsia-500"
          >
            <IconCalendar className="h-4 w-4" />
            Prendre rendez-vous en ligne
          </Link>
          <ButtonLink href="/services" variant="ghost">
            Voir les 9 prestations
          </ButtonLink>
          <ButtonLink href="/tarifs" variant="ghost">
            Consulter nos forfaits
          </ButtonLink>
        </div>
      </section>
      <FAQ eyebrow="Questions fréquentes" title="Vos questions sur nos engagements & avantages" />
    </>
  );
}
