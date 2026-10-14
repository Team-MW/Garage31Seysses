import { site } from "@/lib/site";
import { IconCalendar, IconPhone } from "./Icons";

const days = [
  { day: "Lundi", hours: "08:00 – 19:30" },
  { day: "Mardi", hours: "08:00 – 19:30" },
  { day: "Mercredi", hours: "08:00 – 19:30" },
  { day: "Jeudi", hours: "08:00 – 19:30" },
  { day: "Vendredi", hours: "08:00 – 19:30" },
  { day: "Samedi", hours: "08:00 – 19:30" },
  { day: "Dimanche", hours: "08:00 – 19:30" },
];

export function GarageSection() {
  return (
    <section id="garage" className="relative isolate overflow-hidden scroll-mt-28 border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-400">
            L&apos;Atelier • {site.slogan}
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl text-white">
            Garage 31 Seysses &bull; Accès & Horaires 7j/7
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-mist sm:text-base">
            Votre atelier automobile indépendant en Haute-Garonne. Ouvert 7 jours sur 7 du lundi au dimanche sans interruption, nous vous accueillons avec ou sans rendez-vous pour vos entretiens et réparations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Colonne Informations pratiques */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#110e1a] p-6 sm:p-8 lg:col-span-5 shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Établissement</span>
                  <h3 className="mt-1 font-display text-2xl uppercase tracking-wide text-white">Garage 31 Seysses</h3>
                </div>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  Ouvert 7j/7
                </span>
              </div>

              {/* Adresse */}
              <div className="mt-6 flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-purple-500/30 bg-purple-950/50 text-purple-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50">Adresse de l&apos;atelier</p>
                  <p className="mt-1 font-medium text-white text-base leading-snug">{site.fullAddress}</p>
                  <a
                    href={site.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 transition hover:underline"
                  >
                    Ouvrir l&apos;itinéraire Google Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="mt-6 flex items-start gap-4 border-t border-white/10 pt-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-purple-500/30 bg-purple-950/50 text-purple-300">
                  <IconPhone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50">Téléphone direct</p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block font-display text-2xl tracking-wide text-white transition hover:text-purple-400"
                  >
                    {site.phone}
                  </a>
                  <p className="mt-1 text-xs text-mist">Joignable 7 jours sur 7 de 8h à 19h30</p>
                </div>
              </div>

              {/* Horaires 7j/7 */}
              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-wider text-white/50">Horaires d&apos;ouverture</p>
                  <span className="text-xs font-semibold text-purple-400">08:00 – 19:30</span>
                </div>
                <div className="mt-3 space-y-2">
                  {days.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between rounded-lg bg-white/[0.02] px-3 py-1.5 text-xs"
                    >
                      <span className="font-medium text-white/90">{item.day}</span>
                      <span className="text-white/70">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white transition hover:from-purple-500 hover:to-fuchsia-500 shadow-md shadow-purple-900/40"
              >
                <IconPhone className="h-4 w-4" />
                Appeler
              </a>
              <a
                href="/#rendez-vous"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-5 py-3 text-sm font-semibold text-purple-200 transition hover:bg-purple-900/40"
              >
                <IconCalendar className="h-4 w-4" />
                Prendre RDV
              </a>
            </div>
          </div>

          {/* Colonne Google Maps Iframe */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#110e1a] lg:col-span-7">
            <iframe
              src="https://www.google.com/maps?q=2+Avenue+Pierre+Semard,+31600+Seysses&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Plan d'accès Google Maps - Garage 31 Seysses"
              className="min-h-[420px] w-full lg:min-h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
