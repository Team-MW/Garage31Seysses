import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { PricingSection } from "@/components/PricingSection";
import { IconArrow, IconCalendar, IconCheck, IconPhone } from "@/components/Icons";
import { pricingPlans, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tarifs & Forfaits Mécanique • Garage 31 Seysses",
  description:
    "Grille officielle des tarifs Garage 31 Seysses : Vidange simple 99 €, Vidange avec 3 filtres 159 € TTC, Amortisseurs 159 €, Courroie de distribution 494,99 €. Prix clairs, sans frais cachés, ouvert 7j/7 au 07 43 32 33 43.",
};

const tarifsFaqItems = [
  {
    q: "Les tarifs indiqués comprennent-ils les pièces et la main-d'œuvre ?",
    a: "Oui, tous nos forfaits (Vidange 99 €, Révision 3 filtres 159 € TTC, Amortisseurs 159 €, Distribution 494,99 €) incluent les pièces neuves de qualité équipementier d'origine, les consommables et la main-d'œuvre qualifiée.",
  },
  {
    q: "Proposez-vous des facilités de paiement ?",
    a: "Oui, nous acceptons les paiements par carte bancaire, espèces, et pouvons vous proposer un règlement échelonné selon les interventions réalisées en atelier.",
  },
  {
    q: "Comment obtenir un devis pour une prestation hors forfait (freinage, embrayage, pneus) ?",
    a: "Vous pouvez nous contacter directement par téléphone au 07 43 32 33 43, par WhatsApp avec votre immatriculation, ou venir sans rendez-vous au 2 Avenue Pierre Semard à Seysses. Les devis sont 100% gratuits et sans engagement.",
  },
  {
    q: "La garantie constructeur est-elle préservée avec ces tarifs ?",
    a: "Oui, sans exception. Nous respectons à la lettre le carnet d'entretien et les préconisations du constructeur avec des huiles homologuées, ce qui préserve légalement votre garantie d'origine dès le premier jour.",
  },
];

const compareFeatures = [
  { name: "Huile de synthèse homologuée constructeur", vSimple: true, vComplete: true, amortisseurs: false, distrib: false },
  { name: "Remplacement du filtre à huile", vSimple: true, vComplete: true, amortisseurs: false, distrib: false },
  { name: "Filtre à air moteur neuf", vSimple: false, vComplete: true, amortisseurs: false, distrib: false },
  { name: "Filtre habitacle ou carburant", vSimple: false, vComplete: true, amortisseurs: false, distrib: false },
  { name: "Contrôle 30 points de sécurité & niveaux", vSimple: true, vComplete: true, amortisseurs: true, distrib: true },
  { name: "Remise à zéro électronique du voyant", vSimple: true, vComplete: true, amortisseurs: false, distrib: true },
  { name: "Paire d'amortisseurs neufs certifiés", vSimple: false, vComplete: false, amortisseurs: true, distrib: false },
  { name: "Courroie crantée haute résistance", vSimple: false, vComplete: false, amortisseurs: false, distrib: true },
  { name: "Galets tendeurs & enrouleurs neufs", vSimple: false, vComplete: false, amortisseurs: false, distrib: true },
  { name: "Pompe à eau neuve équipementier", vSimple: false, vComplete: false, amortisseurs: false, distrib: true },
  { name: "Purge circuit & liquide refroidissement neuf", vSimple: false, vComplete: false, amortisseurs: false, distrib: true },
  { name: "Essai routier & garantie pièces/main-d'œuvre", vSimple: true, vComplete: true, amortisseurs: true, distrib: true },
];

export default function TarifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparence Totale • Sans Frais Cachés"
        title="Grille des Tarifs & Forfaits Atelier"
        text="Chez Garage 31 Seysses, la confiance repose sur des tarifs limpides. Forfaits complets pièces d'origine & main-d'œuvre pour entretenir votre voiture au meilleur prix."
        vehicle="peugeot"
      />

      {/* Bandeau indicateurs tarifs clés */}
      <section className="border-b border-white/10 bg-[#08070c]">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 gap-px bg-purple-500/20 sm:grid-cols-4">
          <div className="bg-[#100d18] p-6 text-center">
            <p className="font-display text-3xl font-semibold text-purple-400 sm:text-4xl">99 €</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Vidange Simple</p>
          </div>
          <div className="bg-[#100d18] p-6 text-center">
            <p className="font-display text-3xl font-semibold text-purple-400 sm:text-4xl">159 € TTC</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Vidange 3 Filtres</p>
          </div>
          <div className="bg-[#100d18] p-6 text-center">
            <p className="font-display text-3xl font-semibold text-purple-400 sm:text-4xl">159 €</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Amortisseurs (paire)</p>
          </div>
          <div className="bg-[#100d18] p-6 text-center">
            <p className="font-display text-3xl font-semibold text-purple-400 sm:text-4xl">494,99 €</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Kit Distribution</p>
          </div>
        </div>
      </section>

      {/* Cartes détaillées des forfaits */}
      <PricingSection />

      {/* Tableau comparatif des inclusions */}
      <section className="border-t border-white/10 bg-white/[0.015] py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-400">
              Inclusions & Détail des Prestations
            </p>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-wide text-white sm:text-4xl">
              Que comprend exactement chaque forfait ?
            </h2>
            <p className="mt-3 text-sm text-mist">
              Aucune mauvaise surprise : voici le détail précis des pièces remplacées et contrôles effectués.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#100d19] shadow-2xl">
            <table className="w-full min-w-[700px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-[#161224] text-white">
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-white/70">Opérations incluses</th>
                  <th className="py-4 px-4 text-center font-display text-base font-bold text-white">
                    Vidange Simple
                    <div className="text-xs font-normal text-purple-400 mt-0.5">99 €</div>
                  </th>
                  <th className="py-4 px-4 text-center font-display text-base font-bold text-purple-300 bg-purple-950/40">
                    Vidange 3 Filtres
                    <div className="text-xs font-normal text-purple-300 mt-0.5">159 € TTC</div>
                  </th>
                  <th className="py-4 px-4 text-center font-display text-base font-bold text-white">
                    Amortisseurs
                    <div className="text-xs font-normal text-purple-400 mt-0.5">159 €</div>
                  </th>
                  <th className="py-4 px-4 text-center font-display text-base font-bold text-white">
                    Distribution
                    <div className="text-xs font-normal text-purple-400 mt-0.5">494,99 €</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {compareFeatures.map((row) => (
                  <tr key={row.name} className="hover:bg-white/[0.02] transition">
                    <td className="py-3.5 px-6 font-medium text-white/90">{row.name}</td>
                    <td className="py-3.5 px-4 text-center">
                      {row.vSimple ? (
                        <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <IconCheck className="h-3.5 w-3.5" />
                        </span>
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center bg-purple-950/20">
                      {row.vComplete ? (
                        <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <IconCheck className="h-3.5 w-3.5" />
                        </span>
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {row.amortisseurs ? (
                        <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <IconCheck className="h-3.5 w-3.5" />
                        </span>
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {row.distrib ? (
                        <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <IconCheck className="h-3.5 w-3.5" />
                        </span>
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA vers la prise de RDV */}
          <div className="mt-12 text-center">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-fuchsia-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-purple-900/40 transition hover:from-purple-500 hover:to-fuchsia-500"
            >
              <IconCalendar className="h-4 w-4" />
              Réserver votre forfait en ligne (7j/7)
              <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Engagements de Garage 31 */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-[#110e1a] p-7">
              <span className="font-display text-2xl font-bold text-purple-400">01</span>
              <h3 className="mt-3 font-display text-xl uppercase tracking-wide text-white">Prix Annoncé = Prix Facturé</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-mist">
                Aucune mauvaise surprise à la facturation. Aucun travail supplémentaire n&apos;est engagé sans votre validation expresse préalable.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#110e1a] p-7">
              <span className="font-display text-2xl font-bold text-purple-400">02</span>
              <h3 className="mt-3 font-display text-xl uppercase tracking-wide text-white">Pièces Homologuées d&apos;Origine</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-mist">
                Nous travaillons exclusivement avec les plus grands équipementiers (Bosch, Valeo, Purflux, Gates, SKF, Brembo, Motul, Castrol...).
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#110e1a] p-7">
              <span className="font-display text-2xl font-bold text-purple-400">03</span>
              <h3 className="mt-3 font-display text-xl uppercase tracking-wide text-white">Garantie & Sérénité 7j/7</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-mist">
                Nos interventions sont garanties pièces et main-d&apos;œuvre. Atelier ouvert 7j/7 du lundi au dimanche de 8h à 19h30 au 2 Avenue Pierre Semard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ tarifs */}
      <FAQ
        eyebrow="Questions fréquentes"
        title="Tout savoir sur nos tarifs & modalités"
        items={tarifsFaqItems}
      />
    </>
  );
}
