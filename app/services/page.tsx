import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { IconArrow, IconPhone } from "@/components/Icons";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prestations & Mécanique Générale",
  description:
    "Prestations mécaniques toutes marques à Seysses (31) : courroie de distribution, embrayage, freinage, amortisseurs, diagnostic valise et révision 7j/7. Devis gratuit au 07 43 32 33 43.",
};

const processSteps = [
  {
    step: "01",
    title: "Accueil & Diagnostic",
    text: "Nous examinons votre véhicule à l'atelier avec ou sans rendez-vous. Analyse des symptômes ou lecture valise.",
  },
  {
    step: "02",
    title: "Devis Transparent Gratuit",
    text: "Nous établissons un devis clair et détaillé. Rien n'est engagé sans votre validation préalable.",
  },
  {
    step: "03",
    title: "Intervention Soignée",
    text: "Remplacement des pièces d'usure par des pièces certifiées équipementier d'origine dans le respect des couples de serrage.",
  },
  {
    step: "04",
    title: "Contrôle & Restitution",
    text: "Essai routier systématique et remise des anciennes pièces si vous le souhaitez. Garantie préservée.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Prestations & Ateliers"
        title="Mécanique générale & entretien à Seysses"
        text="Distribution, kit d'embrayage, freinage, suspension, diagnostic électronique et révision constructeur. Atelier ouvert 7j/7 au 2 Avenue Pierre Semard."
        vehicle="peugeot"
      />

      {/* Bandeau indicateurs clés */}
      <section className="border-b border-white/10 bg-white/[0.015]">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
          <div className="bg-ink p-6 text-center">
            <p className="font-display text-3xl font-semibold text-ember sm:text-4xl">8</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Pôles d&apos;expertise</p>
          </div>
          <div className="bg-ink p-6 text-center">
            <p className="font-display text-3xl font-semibold text-ember sm:text-4xl">100%</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Toutes marques</p>
          </div>
          <div className="bg-ink p-6 text-center">
            <p className="font-display text-3xl font-semibold text-ember sm:text-4xl">7j/7</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">08:00 – 19:30</p>
          </div>
          <div className="bg-ink p-6 text-center">
            <p className="font-display text-3xl font-semibold text-ember sm:text-4xl">0 €</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Devis 100% gratuit</p>
          </div>
        </div>
      </section>

      {/* Grille détaillée des 8 prestations */}
      <section className="relative isolate overflow-hidden py-16 sm:py-24">
        {/* Silhouette véhicule en fond d'écran */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-10 -z-10 select-none w-[380px] sm:w-[580px] lg:w-[720px] opacity-[0.06] sm:opacity-[0.08]"
        >
          <Image
            src="/images/vw_golf_bg.png"
            alt=""
            width={1024}
            height={536}
            className="h-auto w-full object-contain pointer-events-none select-none filter contrast-125"
          />
        </div>

        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
          <div className="mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ember">Catalogue complet</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl">
              Nos 8 prestations mécaniques
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-mist sm:text-base">
              Chaque intervention est effectuée avec des pièces certifiées et le strict respect des préconisations constructeur.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((item) => (
              <article
                id={item.id}
                key={item.id}
                className="scroll-mt-32 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-panel transition duration-300 hover:border-ember/40 hover:shadow-2xl"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs uppercase tracking-wider text-white/90 backdrop-blur">
                      {item.badge}
                    </span>
                    <span className="absolute right-5 top-5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400 backdrop-blur">
                      {item.status}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <span className="text-[11px] uppercase tracking-wider text-ember font-medium">
                      {item.category}
                    </span>
                    <h3 className="mt-2 font-display text-2xl uppercase tracking-wide text-white sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {item.fullDesc}
                    </p>

                    {/* Points clés inclus */}
                    <div className="mt-6 border-t border-white/10 pt-6">
                      <p className="text-xs uppercase tracking-wider text-white/50 font-medium">
                        Opérations incluses :
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {item.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-xs text-white/80 sm:text-sm">
                            <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-ember/20 text-ember">
                              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                                <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
                              </svg>
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pied de carte avec actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.015] p-6 sm:p-8">
                  <Link
                    href={`/contacts?service=${item.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-ember-bright sm:text-sm"
                  >
                    Demander un devis
                    <IconArrow className="h-3.5 w-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/33743323343?text=Bonjour%20Garage%2031%2C%20je%20souhaite%20un%20devis%20pour%20%3A%20${encodeURIComponent(
                      item.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-medium text-white/85 transition hover:border-[#25D366] hover:text-[#25D366] sm:text-sm"
                  >
                    Question WhatsApp &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Déroulement de la prise en charge */}
      <section className="border-y border-white/10 bg-white/[0.01] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ember">Méthode de travail</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl">
              Comment se déroule votre visite ?
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <div key={s.step} className="rounded-2xl border border-white/10 bg-panel p-6">
                <span className="font-display text-3xl font-semibold text-ember">{s.step}</span>
                <h3 className="mt-3 font-display text-xl uppercase tracking-wide text-white">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-mist">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-panel via-panel to-ember/15 p-8 sm:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-ember font-semibold">Atelier Ouvert 7j/7</p>
                <h3 className="mt-2 font-display text-3xl uppercase tracking-wide text-white sm:text-4xl">
                  Besoin d&apos;une estimation pour votre voiture ?
                </h3>
                <p className="mt-2 max-w-xl text-sm text-mist">
                  Appelez directement notre équipe au {site.phone} ou rendez-vous au {site.fullAddress}. Devis gratuit et immédiat.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ember-bright"
                >
                  <IconPhone className="h-4 w-4" />
                  Appeler : {site.phone}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20ba5a]"
                >
                  WhatsApp 7j/7
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ sur les prestations */}
      <FAQ eyebrow="Questions fréquentes" title="FAQ sur nos prestations mécaniques" />
    </>
  );
}
