import type { MetadataRoute } from "next";
import { cars } from "@/lib/cars";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/automobiles", "/services", "/a-propos", "/avantages", "/contacts", "/confidentialite"].map(
    (path) => ({
      url: path || "/",
      lastModified: new Date(),
    }),
  );

  const vehicles = cars.map((car) => ({
    url: `/automobiles/${car.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...vehicles];
}
