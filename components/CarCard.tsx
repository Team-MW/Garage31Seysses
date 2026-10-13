import Image from "next/image";
import Link from "next/link";
import { carName, formatPrice, specLine, type Car } from "@/lib/cars";
import { IconArrow } from "./Icons";

export function CarCard({ car }: { car: Car }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-panel transition duration-300 hover:border-ember/50">
      <Link href={`/automobiles/${car.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={car.image}
            alt={carName(car)}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            style={{ objectPosition: car.position }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/85 backdrop-blur">
            {car.status}
          </span>
        </div>
        <div className="flex items-end justify-between gap-4 p-5">
          <div>
            <h3 className="text-base font-medium sm:text-lg">{carName(car)}</h3>
            <p className="mt-1 text-sm text-mist">{specLine(car)}</p>
            <p className="mt-3 text-lg font-semibold">{formatPrice(car.price)}</p>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 transition group-hover:border-ember group-hover:bg-ember">
            <IconArrow className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}
