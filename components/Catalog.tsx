"use client";

import { useMemo, useState } from "react";
import { cars as allCars, type Car } from "@/lib/cars";
import { CarCard } from "./CarCard";

export function Catalog({ cars = allCars }: { cars?: Car[] }) {
  const brands = useMemo(() => ["Tous", ...Array.from(new Set(cars.map((car) => car.brand)))], [cars]);
  const [brand, setBrand] = useState("Tous");
  const visible = brand === "Tous" ? cars : cars.filter((car) => car.brand === brand);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer par marque">
        {brands.map((item) => {
          const active = item === brand;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setBrand(item)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active
                  ? "border-ember bg-ember text-white"
                  : "border-white/15 text-white/75 hover:border-white/40 hover:text-white"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-mist">
        {visible.length > 1 ? `${visible.length} véhicules` : `${visible.length} véhicule`}
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((car) => (
          <CarCard key={car.slug} car={car} />
        ))}
      </div>
    </div>
  );
}
