import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { IconArrow } from "./Icons";

export function Inventory() {
  const featured = services.slice(0, 6);

  return (
    <section id="prestations" className="relative isolate overflow-hidden scroll-mt-28 py-20 sm:py-28">
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
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ember">Prestations Atelier</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl">
              Services du Garage 31 Seysses
            </h2>
            <p className="mt-2 text-sm text-mist max-w-xl">
              De l&apos;entretien périodique à la mécanique lourde, nous prenons soin de votre véhicule toutes marques avec pièces certifiées.
            </p>
          </div>
          <Link href="/services" className="group inline-flex items-center gap-3 text-sm text-white/80 transition hover:text-white">
            Voir le détail des 8 prestations
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition group-hover:border-ember group-hover:bg-ember">
              <IconArrow className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-panel transition duration-300 hover:border-ember/50 hover:-translate-y-1"
            >
              <Link href={`/services#${item.id}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                    {item.badge}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-ink/70 px-2.5 py-1 text-[10px] text-ember font-medium backdrop-blur">
                    {item.status}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-white/45">{item.category}</span>
                    <h3 className="mt-1 text-base font-semibold sm:text-lg group-hover:text-ember transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-mist line-clamp-2">{item.shortDesc}</p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 transition group-hover:border-ember group-hover:bg-ember">
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
