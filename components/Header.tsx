"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { IconClose, IconMenu, IconPhone } from "./Icons";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu lors du changement d'URL
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquer le scroll d'arrière-plan quand le menu est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-ink/95 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] w-full max-w-[1180px] items-center justify-between px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition ${active ? "text-white" : "text-white/65 hover:text-white"}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm text-white/90"
            >
              <IconPhone className="h-4 w-4 text-ember" />
              {site.phone}
            </a>
            <a
              href={site.phoneHref}
              className="rounded-full bg-ember px-4 py-2.5 text-sm font-medium text-white transition hover:bg-ember-bright"
            >
              Appeler
            </a>
          </div>

          {/* Bouton burger mobile ultra réactif */}
          <button
            type="button"
            id="burger-toggle"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="relative z-50 grid h-12 w-12 cursor-pointer select-none place-items-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20 active:scale-95 lg:hidden"
          >
            {open ? <IconClose className="h-6 w-6 text-white" /> : <IconMenu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </header>

      {/* Menu mobile plein écran indépendant à z-index élevé */}
      {open ? (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex flex-col bg-[#070708] lg:hidden"
        >
          {/* Barre supérieure du drawer avec logo et bouton de fermeture */}
          <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-white/10 px-5 sm:px-8">
            <div onClick={() => setOpen(false)}>
              <Logo />
            </div>
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="grid h-12 w-12 cursor-pointer select-none place-items-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20 active:scale-95"
            >
              <IconClose className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Contenu déroulant du menu */}
          <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
            <nav className="flex flex-col" aria-label="Navigation mobile">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`border-b border-white/10 py-4 font-display text-2xl uppercase tracking-wide transition ${
                      active ? "text-ember" : "text-white hover:text-ember active:text-ember"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions rapides */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-ember px-5 py-4 text-base font-semibold text-white shadow-lg shadow-ember/25 transition active:scale-95"
              >
                <IconPhone className="h-5 w-5" />
                Appeler : {site.phone}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-base font-semibold text-white shadow-lg shadow-black/40 transition active:scale-95"
              >
                Discuter sur WhatsApp
              </a>
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Itinéraire Google Maps
              </a>
            </div>

            {/* Coordonnées & Horaires */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-xs leading-5 text-mist">
              <p className="font-semibold text-white text-sm">{site.name}</p>
              <p className="mt-1">{site.fullAddress}</p>
              <p className="mt-1 font-semibold text-emerald-400">{site.hours}</p>
              <p className="mt-1 text-white/70">Mécanique auto toutes marques &bull; 7j/7</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
