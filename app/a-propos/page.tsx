import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Stats } from "@/components/Stats";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: "Garage 31 Seysses, garage indépendant de mécanique automobile au 2 Avenue Pierre Semard, 31600 Seysses.",
};

const values = [
  {
    title: "Garage indépendant de proximité",
    text: "Un garage à taille humaine, réactif et transparent. Nous vous expliquons chaque opération avec clarté et sans devis abusif.",
  },
  {
    title: "Pièces certifiées & travail soigné",
    text: "Toutes les interventions sont réalisées avec des pièces de qualité d'origine pour préserver la durée de vie et la garantie de votre véhicule.",
  },
  {
    title: "Ouvert 7 jours sur 7",
    text: "Une disponibilité rare dans le secteur pour vous permettre d'entretenir votre voiture en semaine comme le week-end.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Garage 31 Seysses"
        title="Un garage indépendant qui se développe"
        text="Implanté à Seysses, Garage 31 réunit savoir-faire mécanique, équipement moderne et sens du service au quotidien."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/hero.jpg"
              alt="Garage 31 Seysses atelier"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[70%_center]"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl uppercase leading-[0.95]">Seysses & Agglomération (31)</h2>
            <p className="mt-5 text-sm leading-7 text-mist sm:text-base">
              Situé au {site.fullAddress}, Garage 31 est un garage indépendant de mécanique automobile en plein essor. Nous prenons en charge l&apos;entretien périodique, la mécanique lourde (courroie de distribution, pompe à eau, kit embrayage, freinage, amortisseurs) ainsi que le diagnostic électronique toutes marques.
            </p>
            <p className="mt-4 text-sm leading-7 text-mist sm:text-base">
              {site.hours}. Un appel au {site.phone} suffit pour caler votre passage à l&apos;atelier.
            </p>
          </div>
        </div>
      </section>
      <Stats />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1180px] gap-4 px-5 sm:px-8 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-3xl border border-white/10 p-6">
              <h3 className="font-display text-2xl uppercase tracking-wide">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-mist">{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
