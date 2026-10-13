import Image from "next/image";
import { site } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { IconCalendar, IconPhone } from "./Icons";
import { ShowroomButton } from "./Showroom";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden lg:min-h-[100svh]">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -right-[8%] top-16 z-0 select-none font-display text-[34vw] font-medium leading-[0.8] tracking-[-0.045em] text-white/[0.08] sm:top-8 sm:text-[20vw]"
      >
        GARAGE 31
      </p>
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
        className="pointer-events-none absolute top-1/3 right-[8%] z-0 hidden h-72 w-72 rounded-full bg-ember/20 blur-3xl lg:block"
      />
      <div className="absolute top-20 right-0 bottom-0 z-[1] hidden w-[62%] lg:block">
        <Image
          src="/images/hero.jpg"
          alt="Garage 31 Seysses mécanique automobile"
          fill
          priority
          sizes="62vw"
          className="object-cover object-[58%_72%] saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070708_0%,rgba(7,7,8,0.88)_16%,rgba(7,7,8,0.35)_42%,transparent_68%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pt-32 pb-8 sm:px-8 sm:pt-40 lg:pb-36">
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

      <div className="relative z-10 mx-5 mb-6 aspect-[16/10] overflow-hidden rounded-3xl sm:mx-8 lg:hidden">
        <Image
          src="/images/hero.jpg"
          alt="Garage 31 Seysses mécanique automobile"
          fill
          sizes="100vw"
          className="object-cover object-[center_78%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex justify-end px-5 pb-10 sm:px-8 lg:absolute lg:right-[max(2rem,calc((100%-1180px)/2))] lg:bottom-8 lg:px-0 lg:pb-0">
        <ShowroomButton />
      </div>
    </section>
  );
}
