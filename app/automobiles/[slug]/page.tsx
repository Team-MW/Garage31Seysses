import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { CarCard } from "@/components/CarCard";
import { carName, cars, formatPrice, getCar, specLine } from "@/lib/cars";

type Params = { slug: string };

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return { title: "Véhicule" };
  return {
    title: carName(car),
    description: car.summary,
  };
}

export default async function CarPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) notFound();

  const related = cars.filter((item) => item.slug !== car.slug).slice(0, 3);
  const facts = [
    ["Année", String(car.year)],
    ["Moteur", car.engine],
    ["Puissance", car.power],
    ["Transmission", car.transmission],
    ["Roues motrices", car.drivetrain],
    ["Énergie", car.fuel],
    ["Kilométrage", car.mileage],
    ["Couleur", car.color],
  ];

  return (
    <article className="pt-28 sm:pt-32">
      <div className="mx-auto w-full max-w-[1180px] px-5 pb-8 sm:px-8">
        <p className="text-sm text-mist">
          <Link href="/automobiles" className="transition hover:text-white">
            Automobiles
          </Link>
          <span className="px-2 text-white/30">/</span>
          {carName(car)}
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={car.image}
            alt={carName(car)}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
            style={{ objectPosition: car.position }}
          />
        </div>

        <div className="lg:sticky lg:top-28">
          <p className="text-[11px] uppercase tracking-[0.24em] text-ember">{car.status}</p>
          <h1 className="mt-3 font-display text-5xl uppercase leading-[0.92] tracking-wide">{carName(car)}</h1>
          <p className="mt-3 text-sm text-mist">{specLine(car)}</p>
          <p className="mt-6 font-display text-4xl text-ember">{formatPrice(car.price)}</p>
          <p className="mt-5 text-sm leading-7 text-mist">{car.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {car.highlights.map((item) => (
              <li key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/80">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`/contacts?vehicule=${car.slug}`}>Demander ce véhicule</ButtonLink>
            <ButtonLink href="/contacts" variant="ghost">
              Réserver une visite
            </ButtonLink>
          </div>
        </div>
      </div>

      <section className="mx-auto mt-12 w-full max-w-[1180px] px-5 sm:px-8">
        <h2 className="font-display text-3xl uppercase tracking-wide">Fiche</h2>
        <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label} className="bg-ink px-5 py-4">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-mist">{label}</dt>
              <dd className="mt-2 text-sm">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8">
        <h2 className="font-display text-3xl uppercase tracking-wide">Dans la même sélection</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <CarCard key={item.slug} car={item} />
          ))}
        </div>
      </section>
    </article>
  );
}
