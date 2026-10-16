"use client";

import { useEffect, useRef, useState } from "react";
import { site, pricingPlans } from "@/lib/site";
import { IconCalendar, IconCheck, IconPhone } from "./Icons";

export function AppointmentBooking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Nettoyer les éléments précédents pour éviter tout doublon en navigation SPA
    container.innerHTML = "";

    // 1. Créer le script officiel Jotform fourni par le client
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://form.jotform.com/jsform/262884010548055";
    script.async = true;

    script.onload = () => {
      // Un court délai pour laisser Jotform injecter l'iframe
      setTimeout(() => setLoading(false), 400);
    };

    script.onerror = () => {
      // En cas d'erreur de chargement du script, fallback sur iframe direct
      if (container && !container.querySelector("iframe")) {
        const iframe = document.createElement("iframe");
        iframe.id = "262884010548055";
        iframe.title = "Prise de rendez vous Seysses";
        iframe.src = "https://form.jotform.com/262884010548055";
        iframe.style.width = "100%";
        iframe.style.minHeight = "720px";
        iframe.style.border = "none";
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("allowtransparency", "true");
        iframe.setAttribute("allow", "geolocation; microphone; camera; fullscreen");
        container.appendChild(iframe);
      }
      setLoading(false);
    };

    container.appendChild(script);

    // Fallback de sécurité si l'événement onload tarde
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Écouteur de redimensionnement de l'iframe Jotform
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data === "string" && e.data.indexOf("setHeight") > -1) {
        try {
          const parts = e.data.split(":");
          if (parts[1]) {
            const height = parseInt(parts[1], 10);
            const iframe = container.querySelector("iframe");
            if (iframe && !isNaN(height) && height > 300) {
              iframe.style.height = `${height}px`;
            }
          }
        } catch {
          // ignorer les messages non conformes
        }
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("message", handleMessage);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <section id="rendez-vous" className="relative isolate overflow-hidden py-16 sm:py-24">
      {/* Halo violet subtil en fond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -z-10 -translate-x-1/2 transform-gpu blur-3xl"
      >
        <div className="h-[450px] w-[800px] bg-gradient-to-tr from-purple-700/20 via-violet-600/15 to-fuchsia-600/10 opacity-70 [clip-path:polygon(74.1%_44.1%,100%_61.6%,97.5%_26.9%,85.5%_0.1%,80.7%_2%,72.5%_32.5%,60.2%_62.4%,52.4%_68.1%,47.5%_58.3%,45.2%_34.5%,27.5%_76.7%,0.1%_64.9%,17.9%_100%,27.6%_76.8%,76.1%_97.7%,74.1%_44.1%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        {/* En-tête de section */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-purple-300 backdrop-blur">
            <IconCalendar className="h-3.5 w-3.5 text-purple-400" />
            Prise de Rendez-vous en Ligne
          </span>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-wide text-white sm:text-5xl lg:text-6xl">
            Réservez votre créneau à l&apos;Atelier
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-mist sm:text-base">
            Choisissez votre prestation et votre date en quelques clics. Prise en charge réactive, devis transparent et sans avance de frais.
          </p>

          {/* Badges de réassurance */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-950/40 px-3.5 py-1.5 text-purple-200">
              <IconCheck className="h-4 w-4 text-emerald-400" />
              Ouvert 7j/7 • 8h–19h30
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-950/40 px-3.5 py-1.5 text-purple-200">
              <IconCheck className="h-4 w-4 text-emerald-400" />
              Confirmation immédiate
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-950/40 px-3.5 py-1.5 text-purple-200">
              <IconCheck className="h-4 w-4 text-emerald-400" />
              Devis 100% gratuit
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-950/40 px-3.5 py-1.5 text-purple-200">
              <IconCheck className="h-4 w-4 text-emerald-400" />
              Garantie constructeur préservée
            </span>
          </div>
        </div>

        {/* Bloc central avec le formulaire Jotform */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-purple-500/30 bg-[#0e0b16] p-3 shadow-2xl shadow-purple-950/50 sm:p-6 lg:p-8">
          {/* Bandeau d'en-tête du formulaire */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-purple-500/20 pb-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-purple-400 font-semibold">Formulaire Officiel Garage 31</p>
              <h3 className="font-display text-xl uppercase tracking-wide text-white sm:text-2xl">
                Prise de rendez-vous Seysses
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/50 px-3.5 py-1.5 text-xs font-semibold text-purple-200 transition hover:bg-purple-900/50"
              >
                <IconPhone className="h-3.5 w-3.5 text-purple-400" />
                Besoin d&apos;aide ? {site.phone}
              </a>
            </div>
          </div>

          {/* Indicateur de chargement */}
          {loading && (
            <div className="flex min-h-[300px] flex-col items-center justify-center gap-3 py-16 text-center">
              <div className="h-10 w-10 animate-spin rounded-full border-3 border-purple-500/30 border-t-purple-500" />
              <p className="text-sm font-medium text-purple-300">
                Chargement du formulaire de prise de rendez-vous...
              </p>
              <p className="text-xs text-white/40">Garage 31 Seysses • 7j/7</p>
            </div>
          )}

          {/* Conteneur du script Jotform */}
          <div
            ref={containerRef}
            className={`w-full transition-opacity duration-300 ${loading ? "opacity-0 h-0 overflow-hidden" : "opacity-100 min-h-[680px]"}`}
          />
        </div>

        {/* Rappel rapide des tarifs et contact alternatif */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#110e1a] p-6">
            <p className="text-[11px] uppercase tracking-wider text-purple-400 font-semibold">Besoin d&apos;un créneau urgent ?</p>
            <h4 className="mt-2 font-display text-xl uppercase tracking-wide text-white">Appel direct atelier</h4>
            <p className="mt-2 text-xs leading-relaxed text-mist">
              Pour une crevaison, une panne urgente ou une intervention le jour même, contactez notre équipe sans attendre.
            </p>
            <a
              href={site.phoneHref}
              className="mt-4 inline-flex items-center gap-2 font-display text-lg font-semibold text-purple-400 transition hover:text-purple-300"
            >
              <IconPhone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#110e1a] p-6">
            <p className="text-[11px] uppercase tracking-wider text-purple-400 font-semibold">Conseil express</p>
            <h4 className="mt-2 font-display text-xl uppercase tracking-wide text-white">WhatsApp 7j/7</h4>
            <p className="mt-2 text-xs leading-relaxed text-mist">
              Envoyez-nous une photo de votre voyant moteur, de votre carte grise ou de votre devis pour un chiffrage rapide.
            </p>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#20ba59]"
            >
              Ouvrir WhatsApp (7j/7) &rarr;
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#110e1a] p-6">
            <p className="text-[11px] uppercase tracking-wider text-purple-400 font-semibold">Tarifs phares enseigne</p>
            <h4 className="mt-2 font-display text-xl uppercase tracking-wide text-white">Prix clairs & nets</h4>
            <ul className="mt-3 space-y-1.5 text-xs text-mist">
              {pricingPlans.map((plan) => (
                <li key={plan.id} className="flex items-center justify-between border-b border-white/5 py-1">
                  <span>{plan.title}</span>
                  <span className="font-semibold text-purple-300">{plan.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
