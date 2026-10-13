import { site } from "@/lib/site";
import { IconPhone } from "./Icons";

export const defaultFaq = [
  {
    q: "Quels types de véhicules et marques prenez-vous en charge ?",
    a: "Garage 31 Seysses prend en charge l'ensemble des marques et modèles de véhicules légers, citadines, berlines, SUV et petits utilitaires : Peugeot, Renault, Volkswagen, Audi, Mercedes, BMW, Citroën, Toyota, Ford, Fiat, etc. Nous utilisons des pièces certifiées et des valises de diagnostic multimarque de dernière génération.",
  },
  {
    q: "Faut-il obligatoirement prendre rendez-vous à l'atelier ?",
    a: "Nous vous accueillons avec ou sans rendez-vous 7 jours sur 7. Pour les contrôles rapides, diagnostics ou vidanges, vous pouvez vous présenter directement à l'atelier. Pour les grosses réparations (courroie de distribution, kit d'embrayage), il est conseillé de nous contacter au 07 43 32 33 43 ou sur WhatsApp pour réserver votre créneau.",
  },
  {
    q: "Êtes-vous réellement ouverts le samedi et le dimanche ?",
    a: "Oui ! Garage 31 Seysses est ouvert 7 jours sur 7, du lundi au dimanche sans interruption de 08:00 à 19:30. Cette amplitude horaire vous permet d'entretenir ou réparer votre véhicule en semaine comme le week-end sans contrainte.",
  },
  {
    q: "Quelles sont les prestations mécaniques réalisées ?",
    a: "Nous assurons toutes les opérations de mécanique générale : kit de distribution, pompe à eau, embrayage, système de freinage (disques et plaquettes), amortisseurs, vidange complète, révision conforme au carnet constructeur et extinction des voyants moteur par diagnostic électronique.",
  },
  {
    q: "Les devis sont-ils gratuits et transparents ?",
    a: "Oui, tous nos devis sont 100% gratuits et sans aucun engagement. En tant que garage indépendant, nous pratiquons des tarifs justes et transparents : aucune réparation n'est effectuée sans votre accord préalable.",
  },
  {
    q: "Où se trouve l'atelier et comment y accéder ?",
    a: "Nous sommes situés au 2 Avenue Pierre Semard, 31600 Seysses, à proximité immédiate de Muret et de l'agglomération toulousaine. L'accès est direct et un stationnement est disponible sur place.",
  },
];

export function FAQ({
  title = "Foire Aux Questions",
  eyebrow = "FAQ & Réponses",
  items = defaultFaq,
}: {
  title?: string;
  eyebrow?: string;
  items?: { q: string; a: string }[];
}) {
  return (
    <section id="faq" className="relative isolate overflow-hidden scroll-mt-28 border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ember">{eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-mist sm:text-base">
              Retrouvez toutes les réponses aux questions les plus courantes sur notre atelier indépendant à Seysses.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-3 text-sm font-semibold text-white transition hover:bg-ember-bright"
            >
              <IconPhone className="h-4 w-4" />
              Appeler l&apos;atelier
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#20ba5a]"
            >
              WhatsApp 7j/7
            </a>
          </div>
        </div>

        {/* Accordéon FAQ natif ultra-robuste sans bogue de bundler client */}
        <div className="mt-12 space-y-3.5">
          {items.map((item, index) => (
            <details
              key={item.q}
              open={index === 0}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] transition-all duration-300 open:border-ember/40 open:bg-white/[0.04] hover:border-white/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 select-none [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg uppercase tracking-wide sm:text-xl text-white group-hover:text-ember transition-colors">
                  {item.q}
                </span>
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 text-white/70 transition-transform duration-300 group-open:rotate-45 group-open:border-ember group-open:bg-ember group-open:text-white"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>

              <div className="border-t border-white/5 px-5 pb-6 pt-2 sm:px-6">
                <p className="text-sm leading-relaxed text-mist sm:text-base">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Bandeau d'assistance bas de FAQ */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-panel p-6 text-center sm:flex-row sm:text-left sm:p-8">
          <div>
            <h3 className="font-display text-2xl uppercase tracking-wide text-white">
              Une autre question pour votre véhicule ?
            </h3>
            <p className="mt-1 text-sm text-mist">
              Notre équipe vous répond directement au {site.phone} ou par message WhatsApp.
            </p>
          </div>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-ember"
          >
            Poser ma question sur WhatsApp &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
