import Image from "next/image";
import Link from "next/link";
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
        className="pointer-events-none absolute -right-[8%] top-16 z-0 select-none font-display text-[34vw] font-medium leading-[0.8] tracking-[-0.045em] text-purple-900/[0.12] sm:top-8 sm:text-[20vw]"
      >
        GARAGE 31
      </p>

      {/* Halo violet doux d'ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-[8%] z-0 hidden h-80 w-80 rounded-full bg-purple-600/20 blur-3xl lg:block"
      />

      {/* Halo noir diffus sur la gauche pour garantir 100% de lisibilité du texte */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-[-15%] z-0 h-[700px] w-[850px] rounded-full bg-[#08070c]/90 blur-3xl"
      />

      {/* Silhouette géante du véhicule en arrière-plan */}
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
        <div className="max-w-[650px]">

          <h1 className="rise mt-1 font-display text-[42px] font-medium uppercase leading-[0.9] tracking-[0.01em] sm:text-6xl lg:text-[72px]">
            Mécanique auto
            <br />
            & entretien
            <br />
            toutes marques
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
              Garage 31 Seysses
            </span>
          </h1>

          <p className="rise rise-3 mt-6 max-w-lg text-sm leading-6 text-mist sm:text-base">
            Votre atelier au {site.fullAddress}. Vidange dès 99 €, révision 3 filtres à 159 € TTC, distribution et amortisseurs. Prestations certifiées : diagnostic, pneumatique, freinage, climatisation, lustrage, vitres teintées et pare-brise.
          </p>

          {/* Boutons d'action */}
          <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-purple-900/40 transition hover:from-purple-500 hover:to-fuchsia-500 active:scale-95"
            >
              <IconCalendar className="h-4 w-4" />
              Prendre rendez-vous en ligne
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/40 px-5 py-3.5 text-sm font-semibold text-purple-200 transition hover:bg-purple-900/40"
            >
              <IconPhone className="h-4 w-4 text-purple-400" />
              {site.phone}
            </a>
            <ButtonLink href="/tarifs" variant="ghost">
              Voir nos tarifs fixes
            </ButtonLink>
          </div>

          {/* Puces de confiance rapides */}
          <div className="rise rise-4 mt-8 flex flex-wrap gap-y-2 gap-x-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span> Ouvert du lundi au dimanche
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span> Devis gratuit & sans engagement
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-purple-400 font-bold">★ 5.0/5</span> Note Google vérifiée
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-end px-5 pb-10 sm:px-8 lg:absolute lg:right-[max(2rem,calc((100%-1180px)/2))] lg:bottom-8 lg:px-0 lg:pb-0">
        <ShowroomButton />
      </div>
    </section>
  );
}
