import Link from "next/link";
import { services } from "@/lib/site";
import { IconArrow } from "./Icons";

export function Inventory() {
  // Les 9 prestations officielles de l'enseigne
  const enseigneServices = services.slice(0, 9);

  return (
    <section id="prestations" className="relative isolate overflow-hidden scroll-mt-24 py-12 sm:py-16 border-t border-white/10 bg-[#09070f]/60">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        {/* En-tête compact */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-400">
              Prestations Enseigne Garage 31
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase leading-[0.95] tracking-wide sm:text-4xl text-white">
              Les 9 Services de Notre Enseigne
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-mist max-w-xl leading-relaxed">
              Vidange, diagnostic, pneumatique, freinage, climatisation, nettoyage, lustrage, vitres teintées et pare-brise. De l&apos;entretien périodique à l&apos;esthétique automobile 7j/7.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-purple-300 transition hover:text-white"
          >
            Voir tous les détails & forfaits
            <span className="grid h-7 w-7 place-items-center rounded-full border border-purple-500/30 bg-purple-950/40 transition group-hover:border-purple-400 group-hover:bg-purple-600 group-hover:text-white">
              <IconArrow className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>

        {/* Grille compacte sans photos, axée sur le contenu et la lisibilité */}
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {enseigneServices.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#110e1a]/85 p-5 transition duration-300 hover:border-purple-500/50 hover:bg-[#151024] hover:shadow-lg hover:shadow-purple-950/40 hover:-translate-y-0.5"
            >
              <Link href={`/services#${item.id}`} className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-400">
                      {item.category}
                    </span>
                    <span className="rounded-full border border-purple-500/25 bg-purple-950/50 px-2 py-0.5 text-[10px] font-medium text-purple-300">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-lg uppercase tracking-wide text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-mist line-clamp-2">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[11px] font-medium text-purple-300/80 group-hover:text-white transition">
                  <span>En savoir plus</span>
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-purple-500/30 bg-purple-950/40 transition group-hover:border-purple-400 group-hover:bg-purple-600 group-hover:text-white">
                    <IconArrow className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
