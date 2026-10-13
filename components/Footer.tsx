import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Maison",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/services", label: "Prestations" },
      { href: "/avantages", label: "Avantages" },
      { href: "/contacts", label: "Contact" },
    ],
  },
  {
    title: "Prestations",
    links: [
      { href: "/services", label: "Mécanique générale" },
      { href: "/services", label: "Distribution & pompe à eau" },
      { href: "/services", label: "Diagnostic valise" },
      { href: "/services", label: "Révision & vidange" },
    ],
  },
  {
    title: "Informations",
    links: [
      { href: "/a-propos", label: "Garage indépendant" },
      { href: "/avantages", label: "Ouvert 7j/7" },
      { href: "/#avis", label: "Avis Google (5★)" },
      { href: "/#faq", label: "Foire Aux Questions" },
      { href: "/confidentialite", label: "Confidentialité" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-mist">
            Garage automobile indépendant à Seysses (31600). Mécanique toutes marques, entretien, diagnostic et révision, ouvert 7j/7.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">{column.title}</p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-white/75 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">Contacts</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <a href={site.phoneHref} className="transition hover:text-white font-medium text-ember">
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
                WhatsApp : {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              {site.address}
              <br />
              {site.postalCode} {site.city}
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-3 px-5 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Garage 31 Seysses. Tous droits réservés.</p>
          <p>
            {site.fullAddress} &bull; Réalisé par{" "}
            <a
              href="https://microdidact.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition hover:text-ember underline underline-offset-2"
            >
              Microdidact
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
