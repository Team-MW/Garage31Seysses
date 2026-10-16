import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Navigation",
    links: [
      { href: "/services", label: "Prestations" },
      { href: "/tarifs", label: "Tarifs & Forfaits" },
      { href: "/rendez-vous", label: "Prendre RDV en ligne" },
      { href: "/a-propos", label: "À propos" },
      { href: "/avantages", label: "Avantages" },
      { href: "/contacts", label: "Contact" },
    ],
  },
  {
    title: "Prestations Enseigne",
    links: [
      { href: "/services#vidange", label: "Vidange (dès 99 €)" },
      { href: "/services#diagnostic", label: "Diagnostic valise" },
      { href: "/services#pneumatique", label: "Pneumatique & montage" },
      { href: "/services#freinage", label: "Freinage (plaquettes/disques)" },
      { href: "/services#climatisation", label: "Climatisation (recharge gaz)" },
      { href: "/services#nettoyage", label: "Nettoyage pro & pressing" },
      { href: "/services#lustrage", label: "Lustrage & polissage" },
      { href: "/services#vitres-teintees", label: "Vitres teintées" },
      { href: "/services#pare-brise", label: "Pare-brise & vitrage" },
    ],
  },
  {
    title: "Tarifs Forfaits",
    links: [
      { href: "/tarifs#vidange-simple", label: "Vidange simple : 99 €" },
      { href: "/tarifs#vidange-3-filtres", label: "Vidange 3 filtres : 159 € TTC" },
      { href: "/tarifs#courroie-distribution", label: "Distribution : 494,99 €" },
      { href: "/tarifs#changement-amortisseurs", label: "Amortisseurs : 159 €" },
      { href: "/rendez-vous", label: "Prendre RDV (7j/7)" },
      { href: "/confidentialite", label: "Confidentialité" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-[#07060a]">
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.3fr_1fr_1.1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-purple-400">
            « {site.slogan} »
          </p>
          <p className="mt-2 max-w-xs text-xs sm:text-sm leading-6 text-mist">
            Garage automobile indépendant à Seysses (31600). Mécanique toutes marques, entretien, esthétique et vitrage, ouvert 7j/7 sans interruption.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-[11px] uppercase tracking-[0.22em] text-purple-300/70 font-semibold">{column.title}</p>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-xs sm:text-sm text-white/70 transition hover:text-purple-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-purple-300/70 font-semibold">Contacts Directs</p>
          <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-white/75">
            <li>
              <a href={site.phoneHref} className="transition hover:text-white font-semibold text-purple-400">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#25D366] transition hover:text-white"
              >
                WhatsApp 7j/7
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="text-mist leading-relaxed">
              {site.fullAddress}
            </li>
            <li className="font-semibold text-emerald-400">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-3 px-5 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {site.name} — « {site.slogan} ». Tous droits réservés.</p>
          <p>
            {site.fullAddress}
          </p>
        </div>
      </div>
    </footer>
  );
}
