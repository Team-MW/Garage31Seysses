import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { IconArrow } from "./Icons";

export function Inventory() {
  // Les 9 prestations officielles de l'enseigne
  const enseigneServices = services.slice(0, 9);

  return (
    <section id="prestations" className="relative isolate overflow-hidden scroll-mt-28 py-20 sm:py-28 border-t border-white/10">
      {/* Silhouette véhicule en fond d'écran */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-8 -z-10 select-none w-[420px] sm:w-[620px] lg:w-[780px] opacity-[0.07] sm:opacity-[0.09]"
      >
        <Image
          src="/images/308_gt_bg.avif"
          alt=""
          width={1620}
          height={1080}
          className="h-auto w-full object-contain pointer-events-none select-none filter contrast-125"
        />
      </div>

      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-400">
              Prestations Enseigne Garage 31
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl text-white">
              Les 9 Services de Notre Enseigne
            </h2>
            <p className="mt-2 text-sm text-mist max-w-xl leading-relaxed">
              Vidange, diagnostic, pneumatique, freinage, climatisation, nettoyage, lustrage, vitres teintées et pare-brise. De l&apos;entretien périodique à l&apos;esthétique automobile 7j/7.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-sm text-purple-300 transition hover:text-white"
          >
            Voir tous les détails & forfaits
            <span className="grid h-9 w-9 place-items-center rounded-full border border-purple-500/30 bg-purple-950/40 transition group-hover:border-purple-400 group-hover:bg-purple-600 group-hover:text-white">
              <IconArrow className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {enseigneServices.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#110e1a]/90 transition duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-950/40 hover:-translate-y-1.5"
            >
              <Link href={`/services#${item.id}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110e1a] via-[#110e1a]/30 to-black/15" />
                  
                  <span className="absolute left-4 top-4 rounded-full border border-purple-500/30 bg-purple-950/80 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-purple-200 font-medium backdrop-blur">
                    {item.badge}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/70 px-2.5 py-1 text-[10px] text-purple-300 font-semibold backdrop-blur">
                    {item.status}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-purple-400/80 font-medium">
                      {item.category}
                    </span>
                    <h3 className="mt-1 text-base font-semibold sm:text-lg text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-mist line-clamp-2">
                      {item.shortDesc}
                    </p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 transition group-hover:border-purple-400 group-hover:bg-purple-600 group-hover:text-white">
                    <IconArrow className="h-4 w-4" />
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
