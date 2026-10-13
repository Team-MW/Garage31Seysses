import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { advantageIcons } from "@/components/Icons";
import { advantages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Avantages",
  description: "Pourquoi faire confiance à Garage 31 Seysses, garage automobile indépendant en Haute-Garonne.",
};

export default function AdvantagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Avantages"
        title="Pourquoi choisir Garage 31 Seysses ?"
        text="Un garage indépendant réactif, ouvert 7j/7, noté 5/5 sur Google avec 45 avis clients, pour l'entretien et la réparation de votre véhicule à Seysses (31)."
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
        <div className="mx-auto grid w-full max-w-[1180px] gap-4 px-5 sm:px-8 md:grid-cols-2">
          {advantages.map((item, index) => {
            const Icon = advantageIcons[index % advantageIcons.length];
            return (
              <article key={item.id} className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-ember text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-6 font-display text-3xl uppercase tracking-wide">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-mist">{item.text}</p>
              </article>
            );
          })}
        </div>
        <div className="mx-auto mt-10 flex w-full max-w-[1180px] flex-wrap gap-3 px-5 sm:px-8">
          <ButtonLink href="/services">Voir les prestations</ButtonLink>
          <ButtonLink href="/contacts" variant="ghost">
            Demander un devis
          </ButtonLink>
        </div>
      </section>
      <FAQ eyebrow="Questions fréquentes" title="Vos questions sur nos engagements & avantages" />
    </>
  );
}
