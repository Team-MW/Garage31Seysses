import Image from "next/image";
import { site } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { IconCalendar, IconPhone } from "./Icons";
import { ShowroomButton } from "./Showroom";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden lg:min-h-[100svh]">
      {/* Watermark texte d'arrière-plan */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -right-[8%] top-16 z-0 select-none font-display text-[34vw] font-medium leading-[0.8] tracking-[-0.045em] text-white/[0.08] sm:top-8 sm:text-[20vw]"
      >
        GARAGE 31
      </p>

      {/* Lignes graphiques d'ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-[-8%] z-0 hidden h-px w-[48%] -rotate-6 bg-gradient-to-r from-transparent via-ember to-transparent opacity-80 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-52 left-[6%] z-0 hidden h-px w-[28%] -rotate-6 bg-gradient-to-r from-transparent via-ember/70 to-transparent lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-[8%] z-0 hidden h-80 w-80 rounded-full bg-ember/20 blur-3xl lg:block"
      />

      {/* Halo noir diffus sur la gauche pour garantir 100% de lisibilité du texte */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-[-15%] z-0 h-[700px] w-[850px] rounded-full bg-ink/80 blur-3xl"
      />

      {/* Silhouette géante de la voiture qui occupe presque tout le background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[15%] sm:-right-[8%] lg:-right-[3%] top-[42%] sm:top-1/2 -translate-y-[40%] sm:-translate-y-1/2 z-0 w-[125vw] sm:w-[96vw] lg:w-[88vw] max-w-[1700px] select-none opacity-45 sm:opacity-50 drop-shadow-[0_30px_90px_rgba(0,0,0,0.98)] filter contrast-125"
      >
        <Image
          src="/images/vw_golf_bg.png"
          alt="Volkswagen Golf 7 - Garage 31 Seysses"
          width={1024}
          height={536}
          priority
          sizes="(min-width: 1024px) 88vw, 125vw"
          className="h-auto w-full object-contain pointer-events-none select-none"
        />
      </div>

      {/* Contenu principal du Hero */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pt-32 pb-16 sm:px-8 sm:pt-40 lg:pb-36">
        <div className="max-w-[620px]">
          <p className="rise text-[11px] font-medium uppercase tracking-[0.32em] text-ember">
            Garage indépendant &bull; Seysses (31) &bull; Ouvert 7j/7
          </p>
          <h1 className="rise rise-2 mt-5 font-display text-[42px] font-medium uppercase leading-[0.9] tracking-[0.01em] sm:text-6xl lg:text-[70px]">
            Mécanique auto
            <br />
            & entretien
            <br />
            ouvert 7j/7
            <br />
            <span className="text-ember">Garage 31 Seysses</span>
          </h1>
          <p className="rise rise-3 mt-6 max-w-md text-sm leading-6 text-mist sm:text-base">
            Votre garage automobile indépendant au {site.fullAddress}. Mécanique générale, diagnostic, entretien et réparations toutes marques. Noté {site.rating} avec {site.reviewsCount} avis Google.
          </p>
          <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-medium text-white transition hover:bg-ember-bright"
            >
              <IconPhone className="h-4 w-4" />
              Appeler : {site.phone}
            </a>
            <ButtonLink href="/contacts" variant="ghost">
              <IconCalendar className="h-4 w-4 text-ember" />
              Prendre rendez-vous
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-end px-5 pb-10 sm:px-8 lg:absolute lg:right-[max(2rem,calc((100%-1180px)/2))] lg:bottom-8 lg:px-0 lg:pb-0">
        <ShowroomButton />
      </div>
    </section>
  );
}
