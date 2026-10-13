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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-50 transition duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-ink/95 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] w-full max-w-[1180px] items-center gap-6 px-5 sm:px-8">
          <Logo />

          <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
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

          <a
            href={site.phoneHref}
            className="ml-auto hidden items-center gap-2 text-sm text-white/90 lg:ml-2 lg:flex"
          >
            <IconPhone className="h-4 w-4 text-ember" />
            {site.phone}
          </a>

          <a
            href={site.phoneHref}
            className="hidden rounded-full bg-ember px-4 py-2.5 text-sm font-medium text-white transition hover:bg-ember-bright xl:inline-flex"
          >
            Appeler
          </a>

          <button
            type="button"
            className="relative z-50 ml-auto grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10 active:scale-95 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[76px] bottom-0 z-40 flex flex-col overflow-y-auto bg-ink/98 px-5 py-6 backdrop-blur-2xl sm:px-8 lg:hidden"
        >
          <nav className="mx-auto flex w-full max-w-[1180px] flex-col" aria-label="Navigation mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-2xl uppercase tracking-wide text-white transition hover:text-ember"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-ember px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-ember/25 transition active:scale-95"
              >
                <IconPhone className="h-4 w-4" />
                Appeler : {site.phone}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/40 transition active:scale-95"
              >
                Discuter sur WhatsApp
              </a>
            </div>
            <div className="mt-8 border-t border-white/10 pt-5 text-xs leading-5 text-mist">
              <p className="font-semibold text-white">{site.name}</p>
              <p className="mt-1">{site.fullAddress}</p>
              <p className="mt-1 font-medium text-ember">{site.hours}</p>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
