import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { advantageIcons } from "@/components/Icons";
import { advantages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prestations",
  description: "Prestations mécaniques et entretien automobile toutes marques à Seysses (31) par Garage 31.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Prestations"
        title="Mécanique générale & entretien à Seysses"
        text="Distribution, pompe à eau, kit embrayage, freinage, amortisseurs, diagnostic électronique et révision constructeur. Atelier ouvert 7j/7 au 2 Avenue Pierre Semard."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1180px] gap-4 px-5 sm:px-8">
          {advantages.map((item, index) => {
            const Icon = advantageIcons[index % advantageIcons.length];
            return (
              <article
                id={item.id}
                key={item.id}
                className="scroll-mt-28 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ember/15 text-ember">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-ember">0{index + 1}</p>
                  <h2 className="mt-2 font-display text-3xl uppercase tracking-wide">{item.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-mist sm:text-base">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mx-auto mt-10 w-full max-w-[1180px] px-5 sm:px-8">
          <ButtonLink href="/contacts">Prendre rendez-vous</ButtonLink>
        </div>
      </section>
    </>
  );
}
