import Link from "next/link";
import { site, pricingPlans } from "@/lib/site";
import { IconArrow, IconCalendar, IconCheck, IconPhone } from "./Icons";

export function HomeBookingBanner() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24 border-t border-white/10 bg-gradient-to-b from-[#0c0915] via-[#120d20] to-[#08070c]">
      {/* Halo violet */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
      >
        <div className="h-[400px] w-[750px] bg-gradient-to-r from-purple-700/20 via-violet-600/20 to-fuchsia-600/15 opacity-70 rounded-full" />
      </div>

      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-purple-500/40 bg-[#120d22]/90 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-purple-950/60">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Colonne gauche : Titre & arguments */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-purple-300 backdrop-blur">
                <IconCalendar className="h-3.5 w-3.5 text-purple-400" />
                Prise de Rendez-vous en Ligne
              </span>

              <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] tracking-wide text-white sm:text-5xl">
                Réservez votre créneau à l&apos;atelier en 2 minutes
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-mist">
                Entretien périodique, diagnostic électronique, changement de courroie de distribution, amortisseurs ou pneumatiques : choisissez votre intervention 7j/7 avec confirmation rapide.
              </p>

              {/* Arguments clés */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm text-purple-200">
                <span className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  Ouvert 7j/7 • 8h–19h30
                </span>
                <span className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  100% Sans avance de frais
                </span>
                <span className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  Devis clair & sans surprise
                </span>
                <span className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  Garantie constructeur
                </span>
              </div>

              {/* Boutons d'action */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/rendez-vous"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-fuchsia-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-purple-900/50 transition hover:from-purple-500 hover:to-fuchsia-500 active:scale-95"
                >
                  <IconCalendar className="h-4 w-4" />
                  Accéder au Formulaire de RDV
                  <IconArrow className="h-4 w-4" />
                </Link>

                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-5 py-4 text-sm font-semibold text-purple-200 transition hover:bg-purple-900/40"
                >
                  <IconPhone className="h-4 w-4 text-purple-400" />
                  {site.phone}
                </a>
              </div>
            </div>

            {/* Colonne droite : Carte récapitulative des forfaits & horaires */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-[#0c0915]/90 p-6 sm:p-7 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-display text-lg uppercase tracking-wide text-white">Forfaits Populaires</span>
                  <span className="text-[11px] uppercase tracking-wider text-purple-400 font-semibold">Garage 31</span>
                </div>

                <ul className="mt-4 divide-y divide-white/5">
                  {pricingPlans.map((plan) => (
                    <li key={plan.id} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-white/90">{plan.title}</span>
                      <span className="font-bold text-purple-300 font-display">{plan.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-xl border border-purple-500/20 bg-purple-950/30 p-3.5 text-xs text-mist">
                  <p className="font-semibold text-purple-200">Atelier à Seysses (31600)</p>
                  <p className="mt-0.5">{site.fullAddress}</p>
                  <p className="mt-1 font-semibold text-emerald-400">{site.hours}</p>
                </div>

                <Link
                  href="/rendez-vous"
                  className="mt-4 block text-center rounded-xl border border-purple-500/30 bg-purple-950/50 py-2.5 text-xs font-semibold text-purple-300 transition hover:bg-purple-900/50 hover:text-white"
                >
                  Remplir le formulaire en ligne &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
