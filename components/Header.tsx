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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl" : "bg-transparent"
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
          className="ml-auto grid h-11 w-11 place-items-center rounded-full border border-white/15 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-[76px] z-40 overflow-y-auto bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-[1180px] flex-col px-5 py-4 sm:px-8" aria-label="Navigation mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/8 py-4 font-display text-3xl uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="py-4 text-ember font-medium">
              {site.phone}
            </a>
            <a
              href={site.phoneHref}
              className="mb-4 mt-2 inline-flex items-center justify-center rounded-full bg-ember px-5 py-3 text-sm font-medium text-white"
            >
              Appeler
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
