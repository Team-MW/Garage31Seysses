"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { IconCalendar, IconClose, IconMenu, IconPhone } from "./Icons";
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
            ? "border-b border-purple-500/20 bg-[#08070c]/95 backdrop-blur-xl shadow-lg shadow-purple-950/20"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[82px] w-full max-w-[1180px] items-center justify-between px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href.startsWith("/") && item.href.length > 2 && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition ${
                    active ? "text-purple-400" : "text-white/70 hover:text-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/90 transition hover:border-purple-500/40 hover:bg-white/10"
            >
              <IconPhone className="h-3.5 w-3.5 text-purple-400" />
              {site.phone}
            </a>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-purple-900/40 transition hover:from-purple-500 hover:to-fuchsia-500 active:scale-95"
            >
              <IconCalendar className="h-3.5 w-3.5" />
              Prendre RDV
            </Link>
          </div>

          {/* Bouton burger mobile */}
          <button
            type="button"
            id="burger-toggle"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="relative z-50 grid h-11 w-11 cursor-pointer select-none place-items-center rounded-xl border border-purple-500/30 bg-purple-950/40 text-white transition hover:bg-purple-900/40 active:scale-95 lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5 text-white" /> : <IconMenu className="h-5 w-5 text-white" />}
          </button>
        </div>
      </header>

      {/* Menu mobile plein écran */}
      {open ? (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex flex-col bg-[#09070f] lg:hidden"
        >
          {/* Barre supérieure du drawer */}
          <div className="flex h-[82px] shrink-0 items-center justify-between border-b border-purple-500/20 px-5 sm:px-8">
            <div onClick={() => setOpen(false)}>
              <Logo />
            </div>
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 cursor-pointer select-none place-items-center rounded-xl border border-purple-500/30 bg-purple-950/40 text-white transition hover:bg-purple-900/40 active:scale-95"
            >
              <IconClose className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Contenu déroulant du menu */}
          <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
            <div className="mb-4 rounded-xl border border-purple-500/20 bg-purple-950/30 px-3.5 py-2 text-center text-xs text-purple-300 font-medium">
              « {site.slogan} » • Ouvert 7j/7 de 8h à 19h30
            </div>

            <nav className="flex flex-col" aria-label="Navigation mobile">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`border-b border-white/10 py-3.5 font-display text-2xl uppercase tracking-wide transition ${
                      active ? "text-purple-400" : "text-white hover:text-purple-400 active:text-purple-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions rapides mobile */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/rendez-vous"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-900/40 transition active:scale-95"
              >
                <IconCalendar className="h-5 w-5" />
                Prendre rendez-vous en ligne
              </Link>
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/40 px-5 py-3.5 text-base font-semibold text-purple-200 transition active:scale-95"
              >
                <IconPhone className="h-5 w-5" />
                Appeler : {site.phone}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/40 transition active:scale-95"
              >
                Discuter sur WhatsApp 7j/7
              </a>
            </div>

            {/* Coordonnées & Horaires */}
            <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-950/20 p-5 text-xs leading-5 text-mist">
              <p className="font-semibold text-white text-sm">{site.name}</p>
              <p className="mt-1">{site.fullAddress}</p>
              <p className="mt-1 font-semibold text-emerald-400">{site.hours}</p>
              <p className="mt-1 text-purple-300">Vidange, Distribution, Freinage, Diagnostic, Clim, Vitres teintées, Pare-brise</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
