import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "./Icons";

export const prestations = [
  {
    slug: "mecanique",
    title: "Mécanique générale",
    subtitle: "Distribution, pompe à eau, kit embrayage, freinage, amortisseurs…",
    status: "Atelier Seysses",
    price: "Sur devis gratuit",
    image: "/images/detail.jpg",
    position: "center",
  },
  {
    slug: "diagnostic",
    title: "Diagnostic électronique",
    subtitle: "Valise multimarque, recherche de pannes & voyants moteur",
    status: "Toutes marques",
    price: "Contrôle rapide",
    image: "/images/mercedes-front.jpg",
    position: "center",
  },
  {
    slug: "revision",
    title: "Révision & Entretien 7j/7",
    subtitle: "Vidange complète, filtres, bougies & préparation contrôle technique",
    status: "Ouvert 7j/7",
    price: "Prise en charge rapide",
    image: "/images/amg.jpg",
    position: "center 62%",
  },
];

export function Inventory() {
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
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ember">Prestations</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl">
              Services du Garage 31
            </h2>
          </div>
          <Link href="/services" className="group inline-flex items-center gap-3 text-sm text-white/80">
            Voir toutes les prestations
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition group-hover:border-ember group-hover:bg-ember">
              <IconArrow className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {prestations.map((item) => (
            <article
              key={item.slug}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-panel transition duration-300 hover:border-ember/50"
            >
              <Link href="/services" className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    style={{ objectPosition: item.position }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/85 backdrop-blur">
                    {item.status}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-base font-medium sm:text-lg">{item.title}</h3>
                    <p className="mt-1 text-sm text-mist">{item.subtitle}</p>
                    <p className="mt-3 text-lg font-semibold">{item.price}</p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 transition group-hover:border-ember group-hover:bg-ember">
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
