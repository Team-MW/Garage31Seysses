import { site } from "@/lib/site";
import { IconCalendar, IconPhone } from "./Icons";

const defaultFaq = [
  {
    q: "Quels sont vos forfaits d'entretien et de mécanique ?",
    a: "Nous proposons des forfaits à prix fixes et transparents : la Vidange simple à 99 €, la Vidange complète avec 3 filtres à 159 € TTC, le changement d'amortisseurs (la paire) à 159 € et le remplacement du kit de distribution complet avec pompe à eau à 494,99 €. Les pièces équipementier d'origine et la main-d'œuvre sont garanties.",
  },
  {
    q: "Comment fonctionne la prise de rendez-vous en ligne ?",
    a: "Vous pouvez réserver directement sur notre site via le module 'Prendre Rendez-vous'. Choisissez votre prestation (vidange, diagnostic, freins, etc.), sélectionnez le jour et le créneau horaire disponible de votre choix (ouvert 7j/7 de 8h à 19h30). Vous recevez une confirmation instantanée.",
  },
  {
    q: "Quelles sont les prestations proposées par votre enseigne ?",
    a: "Notre enseigne assure les 9 prestations complètes : Vidange, Diagnostic électronique multimarque, Pneumatique (montage/équilibrage), Freinage, Climatisation (recharge gaz), Nettoyage professionnel, Lustrage carrosserie, Vitres teintées homologuées et Pare-brise (réparation d'impact et remplacement).",
  },
  {
    q: "Êtes-vous vraiment ouverts 7 jours sur 7 ?",
    a: "Oui, Garage 31 Seysses est ouvert sans interruption du lundi au dimanche inclus, de 08:00 à 19:30. Cela vous permet de déposer ou récupérer votre véhicule en toute flexibilité le week-end.",
  },
  {
    q: "Conservez-vous la garantie constructeur ?",
    a: "Absolument. Conformément à la législation européenne, nous appliquons scrupuleusement le carnet d'entretien constructeur avec des pièces certifiées et des huiles homologuées, ce qui préserve intégralement la garantie constructeur de votre véhicule.",
  },
  {
    q: "Où se situe l'atelier Garage 31 ?",
    a: "Notre garage est situé au 2 Avenue Pierre Semard, 31600 Seysses, à proximité immédiate de Muret et au sud de Toulouse. Nous disposons d'un parking facile d'accès.",
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-400">{eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl text-white">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-mist sm:text-base">
              Retrouvez toutes les réponses sur nos prestations enseigne, nos forfaits et nos créneaux disponibles 7j/7 à Seysses.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/#rendez-vous"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white transition hover:from-purple-500 hover:to-fuchsia-500 shadow-md shadow-purple-900/30"
            >
              <IconCalendar className="h-4 w-4" />
              Prendre RDV en ligne
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-5 py-3 text-sm font-semibold text-purple-200 transition hover:bg-purple-900/40"
            >
              <IconPhone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>

        {/* Accordéon FAQ natif */}
        <div className="mt-12 space-y-3.5">
          {items.map((item, index) => (
            <details
              key={item.q}
              open={index === 0}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#110e1a]/80 transition-all duration-300 open:border-purple-500/40 open:bg-[#151122] hover:border-purple-500/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 select-none [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg uppercase tracking-wide sm:text-xl text-white group-hover:text-purple-300 transition-colors">
                  {item.q}
                </span>
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 text-white/70 transition-transform duration-300 group-open:rotate-45 group-open:border-purple-500 group-open:bg-purple-600 group-open:text-white"
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-[#110e1a] p-6 text-center sm:flex-row sm:text-left sm:p-8">
          <div>
            <h3 className="font-display text-2xl uppercase tracking-wide text-white">
              Une autre question pour votre véhicule ?
            </h3>
            <p className="mt-1 text-sm text-mist">
              Notre équipe vous répond directement au {site.phone} ou par message WhatsApp 7j/7.
            </p>
          </div>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-6 py-3 text-sm font-semibold text-purple-200 transition hover:bg-purple-900/50 hover:border-purple-400"
          >
            Poser ma question sur WhatsApp &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
