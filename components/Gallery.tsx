import Image from "next/image";
import { gallery } from "@/lib/site";

export function Gallery() {
  return (
    <section id="galerie" className="scroll-mt-28 border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ember">Interventions</p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl">
          L&apos;atelier en action
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {gallery.map((item) => (
            <figure key={item.src} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                style={{ objectPosition: item.position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
