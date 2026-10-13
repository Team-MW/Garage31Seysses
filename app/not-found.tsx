import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="px-5 pt-40 pb-28 sm:px-8">
      <div className="mx-auto max-w-[1180px]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-ember">404</p>
        <h1 className="mt-4 font-display text-6xl uppercase leading-none">Page introuvable</h1>
        <p className="mt-4 max-w-md text-mist">Ce lien ne correspond à aucune page du showroom.</p>
        <div className="mt-8">
          <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
        </div>
      </div>
    </section>
  );
}
