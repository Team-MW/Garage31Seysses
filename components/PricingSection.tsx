"use client";

import { pricingPlans, site } from "../lib/site";
import { IconArrow, IconPhone } from "./Icons";

interface PricingSectionProps {
  onSelectPlan?: (planTitle: string) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const handleSelect = (planTitle: string) => {
    if (onSelectPlan) {
      onSelectPlan(planTitle);
    } else {
      const rdvSection = document.getElementById("rendez-vous");
      if (rdvSection) {
        rdvSection.scrollIntoView({ behavior: "smooth" });
        const event = new CustomEvent("select-service-booking", { detail: { service: planTitle } });
        window.dispatchEvent(event);
      }
    }
  };

  return (
    <section id="tarifs" className="relative isolate overflow-hidden scroll-mt-24 py-20 sm:py-28">
      {/* Halo violet d'ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/15 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-purple-400">
            Transparence & Prix Justes
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl text-white">
            Nos Forfaits & Tarifs Atelier
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-mist">
            Chez Garage 31 Seysses, nos prix sont transparents et sans mauvaise surprise. Pièces d&apos;origine certifiées et main-d&apos;œuvre qualifiée pour chaque intervention.
          </p>
        </div>

        {/* Grille des 4 forfaits officiels */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => {
            const isFeatured = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl border p-6 transition duration-300 hover:-translate-y-1.5 ${
                  isFeatured
                    ? "border-purple-500/60 bg-gradient-to-b from-[#1c1433] via-[#120e20] to-[#0c0a14] shadow-2xl shadow-purple-950/70"
                    : "border-white/10 bg-[#110e1a]/80 hover:border-purple-500/30 hover:bg-[#151121]"
                }`}
              >
                {/* Badge supérieur */}
                {isFeatured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md shadow-purple-900/50">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-purple-300/80 font-medium">
                      {plan.subtitle}
                    </span>
                    {!isFeatured && (
                      <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 text-[10px] font-medium text-purple-300">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-2xl uppercase tracking-wide text-white">
                    {plan.title}
                  </h3>

                  {/* Prix en valeur vedette */}
                  <div className="mt-4 flex items-baseline gap-1 border-b border-white/10 pb-4">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                      {plan.price}
                    </span>
                  </div>

                  <p className="mt-2 text-xs font-medium text-purple-400">
                    {plan.highlight}
                  </p>

                  {/* Liste des prestations incluses */}
                  <ul className="mt-5 space-y-2.5 text-xs text-white/80">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-purple-500/20 text-purple-300">
                          <svg viewBox="0 0 16 16" fill="currentColor" className="h-2.5 w-2.5">
                            <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
                          </svg>
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bouton de réservation directe */}
                <div className="mt-8 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => handleSelect(plan.title)}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-semibold transition active:scale-95 ${
                      isFeatured
                        ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-500 hover:to-fuchsia-500 shadow-lg shadow-purple-900/40"
                        : "border border-purple-500/30 bg-purple-950/40 text-purple-200 hover:border-purple-400 hover:bg-purple-900/50"
                    }`}
                  >
                    <span>Réserver ce forfait</span>
                    <IconArrow className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Encadré Devis Gratuit pour les autres prestations de l'enseigne */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-[#141022] via-[#100d1c] to-[#17102a] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300 mb-2">
                Autres Prestations Enseigne
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wide text-white sm:text-3xl">
                Diagnostic • Pneumatique • Climatisation • Lustrage • Vitres Teintées • Pare-brise
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-mist leading-relaxed">
                Vous avez besoin d&apos;une intervention spécifique ou d&apos;un remplacement de pièce ? Nous vous remettons une estimation détaillée et gratuite immédiatement à l&apos;atelier ou par téléphone.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-purple-500 shadow-lg shadow-purple-900/30"
              >
                <IconPhone className="h-4 w-4" />
                {site.phone}
              </a>
              <a
                href={`https://wa.me/33743323343?text=Bonjour%20Garage%2031%2C%20je%20souhaite%20un%20devis%20gratuit%20pour%20mon%20v%C3%A9hicule.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs sm:text-sm font-semibold text-white transition hover:border-[#25D366] hover:text-[#25D366]"
              >
                Devis rapide WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
