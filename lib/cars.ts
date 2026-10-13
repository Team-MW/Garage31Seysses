export type Car = {
  slug: string;
  brand: string;
  model: string;
  year: number;
  engine: string;
  fuel: string;
  transmission: string;
  drivetrain: string;
  power: string;
  mileage: string;
  color: string;
  price: number | null;
  image: string;
  position: string;
  featured: boolean;
  status: "En stock" | "Sur commande";
  summary: string;
  highlights: string[];
};

export const cars: Car[] = [
  {
    slug: "mercedes-amg-gt-r",
    brand: "Mercedes-AMG",
    model: "GT R",
    year: 2023,
    engine: "4.0 V8",
    fuel: "Essence",
    transmission: "Automatique",
    drivetrain: "Propulsion",
    power: "585 ch",
    mileage: "8 400 km",
    color: "Gris sélénite",
    price: 189900,
    image: "/images/mercedes.jpg",
    position: "center",
    featured: true,
    status: "En stock",
    summary:
      "Coupé AMG préparé pour la route, avec un dossier complet et une préparation atelier déjà réalisée.",
    highlights: ["Historique suivi", "Freinage céramique", "Garantie 12 mois"],
  },
  {
    slug: "porsche-panamera-turbo",
    brand: "Porsche",
    model: "Panamera Turbo",
    year: 2024,
    engine: "4.0 V8",
    fuel: "Essence",
    transmission: "Automatique",
    drivetrain: "Intégrale",
    power: "630 ch",
    mileage: "6 200 km",
    color: "Noir",
    price: 164500,
    image: "/images/porsche.jpg",
    position: "center",
    featured: true,
    status: "En stock",
    summary:
      "Berline de grand tourisme, silencieuse en ville et très vive dès que la route s’ouvre.",
    highlights: ["Toit panoramique", "Châssis sport", "Livraison Paris"],
  },
  {
    slug: "range-rover-autobiography",
    brand: "Range Rover",
    model: "Autobiography",
    year: 2024,
    engine: "4.4 V8",
    fuel: "Essence",
    transmission: "Automatique",
    drivetrain: "Intégrale",
    power: "530 ch",
    mileage: "11 800 km",
    color: "Noir",
    price: 142800,
    image: "/images/amg.jpg",
    position: "center 62%",
    featured: true,
    status: "En stock",
    summary:
      "SUV long-courrier, sellerie claire et finition Autobiography, idéal pour un usage quotidien exigeant.",
    highlights: ["Sept places", "Suspension pneumatique", "Reprise possible"],
  },
  {
    slug: "audi-rs6-avant",
    brand: "Audi",
    model: "RS 6 Avant",
    year: 2023,
    engine: "4.0 V8",
    fuel: "Essence",
    transmission: "Automatique",
    drivetrain: "Quattro",
    power: "630 ch",
    mileage: "14 600 km",
    color: "Noir",
    price: 128500,
    image: "/images/mercedes-front.jpg",
    position: "center 62%",
    featured: false,
    status: "En stock",
    summary:
      "Le break qui remplace une sportive sans rien céder au quotidien. Dossier d’entretien à jour.",
    highlights: ["Pack dynamique", "Freins céramique", "Contrôle 150 points"],
  },
  {
    slug: "audi-r8",
    brand: "Audi",
    model: "R8 V10",
    year: 2022,
    engine: "5.2 V10",
    fuel: "Essence",
    transmission: "Automatique",
    drivetrain: "Quattro",
    power: "570 ch",
    mileage: "9 150 km",
    color: "Gris",
    price: 214000,
    image: "/images/audi.jpg",
    position: "center 55%",
    featured: false,
    status: "En stock",
    summary:
      "V10 atmosphérique, son rare et châssis encore très actuel. Un exemplaire suivi en concession.",
    highlights: ["Échappement sport", "Sièges baquets", "Deux clés"],
  },
  {
    slug: "bmw-m4-competition",
    brand: "BMW",
    model: "M4 Competition",
    year: 2024,
    engine: "3.0 L6",
    fuel: "Essence",
    transmission: "Automatique",
    drivetrain: "Propulsion",
    power: "530 ch",
    mileage: "4 900 km",
    color: "Rouge",
    price: 96900,
    image: "/images/mercedes-2.jpg",
    position: "center",
    featured: false,
    status: "En stock",
    summary:
      "Coupé M récent, première main, livré avec son carnet numérique et une préparation esthétique.",
    highlights: ["Pack M Race", "Carbone intérieur", "Disponible immédiatement"],
  },
  {
    slug: "bmw-m5-competition",
    brand: "BMW",
    model: "M5 Competition",
    year: 2023,
    engine: "4.4 V8",
    fuel: "Essence",
    transmission: "Automatique",
    drivetrain: "xDrive",
    power: "625 ch",
    mileage: "16 200 km",
    color: "Blanc",
    price: 112900,
    image: "/images/bmw.jpg",
    position: "center",
    featured: false,
    status: "En stock",
    summary:
      "Berline capable d’un usage familial et d’une journée circuit. Pneumatiques récents, entretien suivi.",
    highlights: ["xDrive", "Toit carbone", "Garantie maison"],
  },
  {
    slug: "audi-rs7",
    brand: "Audi",
    model: "RS 7 Sportback",
    year: 2024,
    engine: "4.0 V8",
    fuel: "Essence",
    transmission: "Automatique",
    drivetrain: "Quattro",
    power: "630 ch",
    mileage: "7 750 km",
    color: "Blanc glacier",
    price: 139700,
    image: "/images/cabin.jpg",
    position: "center 70%",
    featured: false,
    status: "En stock",
    summary:
      "Sportback très équipé, peinture claire et jantes forgées. Un grand tourisme discret jusqu’au premier feu.",
    highlights: ["Suspension active", "Bang & Olufsen", "Livraison sous 7 jours"],
  },
  {
    slug: "rolls-royce-ghost",
    brand: "Rolls-Royce",
    model: "Ghost",
    year: 2022,
    engine: "6.75 V12",
    fuel: "Essence",
    transmission: "Automatique",
    drivetrain: "Propulsion",
    power: "571 ch",
    mileage: "12 400 km",
    color: "Blanc",
    price: 318000,
    image: "/images/p-roll.jpg",
    position: "center",
    featured: false,
    status: "En stock",
    summary:
      "Ghost configurée sobrement. Visite sur rendez-vous, dossier et provenance présentés avant toute offre.",
    highlights: ["Starlight", "Provenance documentée", "Présentation privée"],
  },
  {
    slug: "lamborghini-huracan",
    brand: "Lamborghini",
    model: "Huracán",
    year: 2021,
    engine: "5.2 V10",
    fuel: "Essence",
    transmission: "Automatique",
    drivetrain: "Intégrale",
    power: "640 ch",
    mileage: "10 300 km",
    color: "Gris",
    price: 249000,
    image: "/images/p-lux.jpg",
    position: "center",
    featured: false,
    status: "En stock",
    summary:
      "Huracán en configuration visible, lifting et géométrie contrôlés. Essai possible après validation du dossier.",
    highlights: ["V10 atmosphérique", "Lift avant", "Entretien à jour"],
  },
  {
    slug: "mercedes-amg-gt",
    brand: "Mercedes-AMG",
    model: "GT",
    year: 2023,
    engine: "4.0 V8",
    fuel: "Essence",
    transmission: "Automatique",
    drivetrain: "Propulsion",
    power: "585 ch",
    mileage: "5 600 km",
    color: "Orange",
    price: 164000,
    image: "/images/p-merc.jpg",
    position: "center",
    featured: false,
    status: "En stock",
    summary:
      "Teinte franche, peu kilométrée, pensée pour qui veut une GT visible sans compromis sur l’état.",
    highlights: ["Peinture d’origine", "Pack aérodynamique", "Deuxième jeu de jantes"],
  },
  {
    slug: "bugatti-chiron",
    brand: "Bugatti",
    model: "Chiron",
    year: 2020,
    engine: "8.0 W16",
    fuel: "Essence",
    transmission: "Automatique",
    drivetrain: "Intégrale",
    power: "1 500 ch",
    mileage: "3 200 km",
    color: "Blanc",
    price: null,
    image: "/images/porsche-2.jpg",
    position: "center",
    featured: false,
    status: "Sur commande",
    summary:
      "Recherche confidentielle. Nous présentons le véhicule, sa provenance et les conditions uniquement en rendez-vous.",
    highlights: ["Mandat de recherche", "Inspection indépendante", "Accompagnement complet"],
  },
];

export function getCar(slug: string) {
  return cars.find((car) => car.slug === slug);
}

export function carName(car: Car) {
  return `${car.brand} ${car.model}`;
}

export function formatPrice(price: number | null) {
  if (price == null) return "Sur demande";
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function specLine(car: Car) {
  return `${car.year} · ${car.engine} · ${car.fuel} · ${car.transmission}`;
}
