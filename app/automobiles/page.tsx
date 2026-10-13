import type { Metadata } from "next";
import { Catalog } from "@/components/Catalog";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Véhicules & Prestations",
  description: "Garage 31 Seysses : entretien mécanique, révision et véhicules.",
};

export default function AutomobilesPage() {
  return (
    <>
      <PageHero
        eyebrow="Collection"
        title="Automobiles en stock"
        text="Chaque fiche reprend l’état, le kilométrage et les conditions. Filtrez par marque, puis ouvrez le véhicule qui vous intéresse."
        vehicle="peugeot"
      />
      <section className="py-14 sm:py-16">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
          <Catalog />
        </div>
      </section>
    </>
  );
}
