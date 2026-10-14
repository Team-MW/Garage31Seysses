import type { Metadata } from "next";
import Image from "next/image";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { Stats } from "@/components/Stats";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos • Garage 31 Seysses",
  description: "Garage 31 Seysses, atelier indépendant de mécanique automobile au 2 Avenue Pierre Semard, 31600 Seysses. « Service rapide & efficace » 7j/7.",
};

const values = [
  {
    title: "Service rapide & efficace",
    text: "Notre devise au quotidien : un accueil sans perte de temps, des diagnostics immédiats et des forfaits atelier transparents (dès 99 € la vidange).",
  },
  {
    title: "Pièces certifiées & travail garanti",
    text: "Toutes les interventions (distribution 494,99 €, amortisseurs 159 €, vidange 3 filtres 159 € TTC) sont réalisées avec des pièces de qualité équipementier d'origine.",
  },
  {
    title: "Ouvert 7 jours sur 7",
    text: "Du lundi au dimanche de 8h à 19h30 sans interruption. Une flexibilité totale pour entretenir ou réparer votre véhicule selon votre emploi du temps.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Garage 31 Seysses • Notre Histoire"
        title="Un garage indépendant réactif & transparent"
        text="Implanté au 2 Avenue Pierre Semard à Seysses, Garage 31 réunit savoir-faire mécanique, équipement de pointe et sens du service au quotidien."
        vehicle="golf"
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-purple-500/30 shadow-xl shadow-purple-950/40">
            <Image
              src="/images/hero.jpg"
              alt="Garage 31 Seysses atelier"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[70%_center]"
            />
          </div>
          <div>
            <span className="inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-300">
              « {site.slogan} »
            </span>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] text-white">
              Seysses & Agglomération Toulousaine (31)
            </h2>
            <p className="mt-5 text-sm leading-7 text-mist sm:text-base">
              Situé au {site.fullAddress}, Garage 31 est un garage indépendant de mécanique automobile en plein essor. Nous prenons en charge l&apos;ensemble des 9 prestations enseigne : vidange, diagnostic, pneumatiques, freinage, climatisation, nettoyage, lustrage, vitres teintées et pare-brise, ainsi que la mécanique lourde (courroie de distribution, amortisseurs, embrayage).
            </p>
            <p className="mt-4 text-sm leading-7 text-mist sm:text-base">
              {site.hours}. Réservez votre créneau en ligne ou contactez-nous directement au {site.phone}.
            </p>
          </div>
        </div>
      </section>
      <Stats />
      <section className="relative isolate overflow-hidden py-16 sm:py-20">
        {/* Silhouette véhicule en fond d'écran */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-4 -z-10 select-none w-[340px] sm:w-[520px] lg:w-[650px] opacity-[0.06] sm:opacity-[0.08]"
        >
          <Image
            src="/images/mercedes_bg.webp"
            alt=""
            width={600}
            height={400}
            className="h-auto w-full object-contain pointer-events-none select-none filter contrast-125"
          />
        </div>
        <div className="mx-auto grid w-full max-w-[1180px] gap-4 px-5 sm:px-8 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-3xl border border-white/10 bg-[#110e1a] p-6 hover:border-purple-500/40 transition">
              <h3 className="font-display text-2xl uppercase tracking-wide text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-mist">{value.text}</p>
            </article>
          ))}
        </div>
      </section>
      <FAQ eyebrow="Questions fréquentes" title="Tout savoir sur Garage 31 Seysses" />
    </>
  );
}
