export const site = {
  name: "Garage 31 Seysses",
  shortName: "Garage 31",
  phone: "07 43 32 33 43",
  phoneHref: "tel:0743323343",
  email: "contact@garage31seysses.fr",
  address: "2 Avenue Pierre Semard",
  postalCode: "31600",
  city: "Seysses",
  fullAddress: "2 Avenue Pierre Semard, 31600 Seysses",
  hours: "Ouvert 7j/7 • 08:00–19:30",
  schedule: "Du lundi au dimanche de 08:00 à 19:30 sans interruption",
  rating: "5/5",
  reviewsCount: 45,
  whatsapp: "07 43 32 33 43",
  whatsappHref: "https://wa.me/33743323343?text=Bonjour%20Garage%2031%2C%20je%20souhaite%20un%20renseignement%20ou%20un%20devis.",
  googleMapsUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x12aeb7083b5a85ff:0xa92ff0550ffa7f45?sa=X&ved=1t:8290&ictx=111",
  googleReviewUrl: "https://www.google.com/search?q=GARAGE+31+SEYSSES#lrd=0x12aeb7083b5a85ff:0xa92ff0550ffa7f45,3,,,",
};

export const googleReviews = [
  {
    name: "Mina",
    initial: "M",
    avatarBg: "bg-[#673ab7]",
    starBadge: true,
    time: "il y a 3 heures",
    rating: 5,
    badge: "Nouveau",
    text: "Super Garage, de confiance au top\nRien à dire ...",
    visited: "Visité en octobre",
  },
  {
    name: "Salman Youssoupov",
    initial: "S",
    avatarBg: "bg-[#e65100]",
    time: "il y a 6 jours",
    rating: 5,
    badge: "Nouveau",
    text: "Très bon garage, avec un excellent service, une équipe professionnelle et un accueil chaleureux !",
    visited: "Visité en octobre",
  },
  {
    name: "Мохмад",
    initial: "М",
    avatarBg: "bg-[#202124]",
    time: "il y a une semaine",
    rating: 5,
    badge: "Nouveau",
    text: "Très satisfait de l’intervention. Le garage m’a remplacé un triangle ainsi que les deux amortisseurs arrière de mon véhicule. Travail sérieux, rapide et ...",
    visited: "Visité en octobre",
  },
  {
    name: "amina 3lot",
    initial: "a",
    avatarBg: "bg-[#b71c1c]",
    time: "il y a une semaine",
    rating: 5,
    badge: "Nouveau",
    text: "Très bon garage, équipe sympa et professionnelle. Travail sérieux et rapide, je suis très satisfait de la réparation. Je recommande !",
    visited: "Visité en octobre",
  },
];

export const nav = [
  { href: "/services", label: "Prestations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/avantages", label: "Avantages" },
  { href: "/contacts", label: "Contact" },
];

export const stats = [
  {
    value: "5/5",
    label: "Note Google",
    text: "45 avis vérifiés sur Google. 100% de clients satisfaits.",
  },
  {
    value: "7j/7",
    label: "Ouverture",
    text: "De 08:00 à 19:30 du lundi au dimanche sans interruption.",
  },
  {
    value: "31",
    label: "Seysses & Agglo",
    text: "2 Avenue Pierre Semard, 31600 Seysses (Haute-Garonne).",
  },
  {
    value: "100%",
    label: "Garage indépendant",
    text: "Mécanique auto toutes marques, conseils honnêtes et prix justes.",
  },
];

export const advantages = [
  {
    id: "garage-independant",
    title: "Garage indépendant en plein essor",
    text: "Un garage à taille humaine, réactif et transparent. Nous prenons le temps de vous expliquer chaque intervention sans surcoût inutile de grande concession.",
  },
  {
    id: "ouvert-7j7",
    title: "Ouvert 7 jours sur 7",
    text: "Parce qu'une panne ou un besoin d'entretien n'attend pas le lundi, Garage 31 Seysses vous accueille toute la semaine pour réparer et entretenir votre voiture.",
  },
  {
    id: "mecanique-toutes-marques",
    title: "Mécanique générale toutes marques",
    text: "Vidange, courroie de distribution, kit d'embrayage, système de freinage, amortisseurs et trains roulants réalisés avec des pièces de qualité certifiée.",
  },
  {
    id: "diagnostic-revision",
    title: "Diagnostic électronique & révision",
    text: "Recherche de pannes, valise de diagnostic multimarque, extinction des voyants moteur et révision conforme aux préconisations constructeur.",
  },
];

export const showroom = [
  {
    src: "/images/hero.jpg",
    title: "L'atelier Garage 31",
    text: "2 Avenue Pierre Semard, 31600 Seysses — Ouvert 7j/7.",
    position: "center 65%",
  },
  {
    src: "/images/detail.jpg",
    title: "Mécanique générale",
    text: "Distribution, embrayage, freinage et révision constructeur.",
    position: "center",
  },
  {
    src: "/images/p-steer.jpg",
    title: "Rigueur & qualité",
    text: "Travail minutieux avec pièces certifiées et garantie.",
    position: "center",
  },
  {
    src: "/images/amg.jpg",
    title: "Entretien toutes marques",
    text: "Véhicules légers, citadines, berlines et SUV.",
    position: "center 62%",
  },
];

export const services = [
  {
    id: "distribution",
    category: "Moteur & Mécanique",
    title: "Courroie de Distribution & Pompe à Eau",
    shortDesc: "Remplacement préventif et curatif du kit de distribution complet et pompe à eau pour protéger votre moteur.",
    fullDesc:
      "La courroie de distribution est l'organe vital de synchronisation de votre moteur. Nous remplaçons le kit complet (courroie crantée, galets tendeurs, enrouleurs) ainsi que la pompe à eau et renouvelons le liquide de refroidissement avec calage précis selon les données constructeur.",
    points: [
      "Kit distribution complet haute résistance",
      "Pompe à eau neuve et joints d'étanchéité",
      "Purge et liquide de refroidissement neuf",
      "Respect strict des intervalles kilométriques constructeur",
    ],
    status: "Sur devis gratuit",
    badge: "Moteur",
    image: "/images/detail.jpg",
  },
  {
    id: "embrayage",
    category: "Transmission & Moteur",
    title: "Kit d'Embrayage & Volant Moteur",
    shortDesc: "Remplacement du disque, mécanisme d'embrayage, butée hydraulique et volant moteur bi-masse.",
    fullDesc:
      "Un embrayage usé patine, durcit ou provoque des bruits au passage des rapports. Nous intervenons sur l'ensemble de la transmission : dépose boîte, remplacement du disque, du mécanisme et de la butée, contrôle du volant moteur et vidange de boîte de vitesses.",
    points: [
      "Disque, mécanisme et butée hydraulique/mécanique",
      "Contrôle et remplacement du volant moteur bi-masse",
      "Vidange et niveau d'huile de boîte de vitesses",
      "Purge du circuit hydraulique de commande",
    ],
    status: "Sur devis gratuit",
    badge: "Transmission",
    image: "/images/amg.jpg",
  },
  {
    id: "freinage",
    category: "Sécurité & Liaison au sol",
    title: "Système de Freinage Complet",
    shortDesc: "Disques, plaquettes, mâchoires et purge du liquide de frein pour garantir des distances d'arrêt optimales.",
    fullDesc:
      "Élément n°1 de votre sécurité, le freinage nécessite un suivi rigoureux. Nous contrôlons l'épaisseur des disques et plaquettes, inspectons les étriers, les flexibles et renouvelons le liquide de frein pour éviter toute perte d'efficacité à chaud.",
    points: [
      "Plaquettes et disques de frein certifiés d'origine",
      "Freins avant et arrière (disques ou tambours)",
      "Purge et remplacement du liquide de frein DOT4 / DOT5.1",
      "Contrôle étriers, flexibles et frein de stationnement",
    ],
    status: "Prise en charge rapide",
    badge: "Sécurité",
    image: "/images/p-steer.jpg",
  },
  {
    id: "diagnostic",
    category: "Électronique & Valise",
    title: "Diagnostic Électronique & Voyants Moteur",
    shortDesc: "Recherche de pannes complexes, valise diagnostic multimarque et lecture des calculateurs en temps réel.",
    fullDesc:
      "Voyant moteur allumé, perte de puissance, problème d'injection ou défaut antipollution ? Notre valise diagnostic professionnelle interroge l'ensemble des calculateurs du véhicule (moteur, ABS, ESP, airbags) pour identifier la cause exacte sans changer de pièces à l'aveugle.",
    points: [
      "Lecture et effacement des codes défauts (DTC)",
      "Analyse des paramètres d'injection et capteurs en direct",
      "Test actionneurs (vannes, pompes, injecteurs)",
      "Rapport détaillé et devis de réparation précis",
    ],
    status: "Diagnostic rapide",
    badge: "Électronique",
    image: "/images/mercedes-front.jpg",
  },
  {
    id: "revision",
    category: "Entretien périodique",
    title: "Révision Constructeur & Vidange Complète",
    shortDesc: "Vidange avec huiles homologuées, remplacement des 4 filtres et vérification des points de contrôle.",
    fullDesc:
      "La révision périodique garantit la longévité de votre moteur et maintient votre garantie constructeur. Nous sélectionnons l'huile spécifique homologuée pour votre motorisation et remplaçons les filtres (huile, air, habitacle, carburant) avec remise à zéro du compteur d'entretien.",
    points: [
      "Huile moteur 100% homologuée normes constructeur",
      "Remplacement filtre à huile, air, habitacle et carburant",
      "Vérification des niveaux et des 30 points de sécurité",
      "Remise à zéro du compteur d'entretien périodique",
    ],
    status: "Sans ou avec RDV 7j/7",
    badge: "Entretien",
    image: "/images/hero.jpg",
  },
  {
    id: "suspension",
    category: "Sécurité & Liaison au sol",
    title: "Amortisseurs, Triangles & Trains Roulants",
    shortDesc: "Remplacement amortisseurs, coupelles, triangles de suspension, rotules et biellettes pour une tenue de route parfaite.",
    fullDesc:
      "Un claquement sur route dégradée ou une usure irrégulière des pneus ? Nous remplaçons les amortisseurs avant/arrière, les coupelles de suspension, les triangles, rotules de direction et silentblocs pour retrouver confort et précision de conduite.",
    points: [
      "Amortisseurs avant et arrière avec coupelles neuves",
      "Triangles de suspension et silentblocs renforcés",
      "Rotules de suspension et de direction",
      "Suppression des claquements et bruits de train avant",
    ],
    status: "Sur devis gratuit",
    badge: "Châssis",
    image: "/images/detail.jpg",
  },
  {
    id: "depollution",
    category: "Moteur & Échappement",
    title: "Vanne EGR, FAP & Dépollution",
    shortDesc: "Diagnostic antipollution, régénération et nettoyage FAP, contrôle vanne EGR et passage contrôle technique.",
    fullDesc:
      "L'encrassement des circuits de dépollution entraîne des pertes de puissance et le refus au contrôle technique. Nous diagnostiquons et traitons les dysfonctionnements du filtre à particules (FAP), de la vanne EGR et des sondes lambda pour restaurer les performances d'origine.",
    points: [
      "Diagnostic complet du circuit antipollution",
      "Régénération forcée et contrôle des pressions",
      "Nettoyage ou remplacement de la vanne EGR",
      "Mise en conformité avant passage au contrôle technique",
    ],
    status: "Sur devis gratuit",
    badge: "Antipollution",
    image: "/images/p-steer.jpg",
  },
  {
    id: "controle-technique",
    category: "Entretien périodique",
    title: "Pré-Contrôle Technique Gratuit",
    shortDesc: "Bilan complet de votre véhicule avant le contrôle technique officiel pour éviter toute contre-visite.",
    fullDesc:
      "Évitez les contre-visites coûteuses et chronophages. Nous effectuons une vérification minutieuse des points critiques soumis à contre-visite : éclairage, système de freinage, pneumatiques, trains roulants, ceintures, niveau de pollution et fuites visibles.",
    points: [
      "Inspection complète des points critiques du CT",
      "Contrôle éclairage, visibilité, freinage et rotules",
      "Devis immédiat sans engagement en cas d'anomalie",
      "Gain de temps garanti et sérénité au contrôle",
    ],
    status: "Bilan gratuit",
    badge: "Contrôle",
    image: "/images/amg.jpg",
  },
];
