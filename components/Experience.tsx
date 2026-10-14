"use client";

import Image from "next/image";
import { useState } from "react";
import { advantages, site } from "@/lib/site";
import { advantageIcons } from "./Icons";

export function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="relative isolate overflow-hidden scroll-mt-28 border-t border-white/10 py-20 sm:py-28">
      {/* Silhouette véhicule en fond d'écran */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 sm:-left-10 bottom-4 -z-10 select-none w-[380px] sm:w-[580px] lg:w-[720px] opacity-[0.07] sm:opacity-[0.09]"
      >
        <Image
          src="/images/vw_golf_bg.png"
          alt=""
          width={1024}
          height={536}
          className="h-auto w-full object-contain pointer-events-none select-none filter contrast-125"
        />
      </div>
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-400">
            Pourquoi Garage 31 • {site.slogan}
          </p>
          <h2 className="mt-3 max-w-md font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl text-white">
            Un atelier indépendant rapide & efficace
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-mist sm:text-base">
            Situé au {site.fullAddress}, Garage 31 est réputé pour sa disponibilité 7j/7, ses forfaits transparents (vidange dès 99 €, amortisseurs 159 €, distribution 494,99 €) et sa note de 5/5 sur Google.
          </p>
        </div>

        <div className="space-y-3">
          {advantages.map((item, index) => {
            const Icon = advantageIcons[index % advantageIcons.length];
            const expanded = open === index;
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border transition duration-300 ${
                  expanded
                    ? "border-purple-500/50 bg-[#161125] shadow-lg shadow-purple-950/40"
                    : "border-white/10 bg-[#110e1a]/80 hover:border-purple-500/30"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : index)}
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition ${
                    expanded ? "bg-purple-600 text-white" : "bg-purple-950/50 text-purple-300"
                  }`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 font-display text-lg uppercase tracking-[0.08em] sm:text-xl text-white">
                    {item.title}
                  </span>
                  <span className="text-2xl leading-none text-purple-400" aria-hidden="true">
                    {expanded ? "–" : "+"}
                  </span>
                </button>
                {expanded ? (
                  <p className="px-5 pb-5 pl-[4.75rem] text-sm leading-6 text-mist sm:pr-8 animate-fadeIn">
                    {item.text}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
