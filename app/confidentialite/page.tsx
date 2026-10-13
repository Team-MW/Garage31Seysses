import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Politique de confidentialité et traitement des données de Garage 31 Seysses.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Légal"
        title="Politique de confidentialité"
        text="Les informations du formulaire servent uniquement à vous recontacter au sujet d'une prestation mécanique ou d'un devis."
        vehicle="golf"
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-5 text-sm leading-7 text-mist sm:px-8">
          <p>
            {site.name}, situé au {site.fullAddress}, collecte le nom, le numéro de téléphone et les informations relatives à votre véhicule.
          </p>
          <p>
            Ces éléments permettent uniquement à l&apos;équipe de préparer votre devis ou fixer un rendez-vous à l&apos;atelier. Ils ne sont jamais cédés ni vendus à des tiers.
          </p>
          <p>
            Vous pouvez à tout moment demander la modification ou la suppression de vos données en appelant le {site.phone} ou en écrivant à {site.email}.
          </p>
        </div>
      </section>
    </>
  );
}
