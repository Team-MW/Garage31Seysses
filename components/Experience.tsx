"use client";

import { useState } from "react";
import { advantages, site } from "@/lib/site";
import { advantageIcons } from "./Icons";

export function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="scroll-mt-28 border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ember">Pourquoi Garage 31</p>
          <h2 className="mt-3 max-w-md font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl">
            Un garage indépendant à votre écoute
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-mist sm:text-base">
            Situé au {site.fullAddress}, Garage 31 est un garage indépendant en plein essor. Nous accueillons nos clients {site.hours} avec un suivi transparent, des prix justes et une note Google irréprochable de {site.rating}.
          </p>
        </div>

        <div className="space-y-3">
          {advantages.map((item, index) => {
            const Icon = advantageIcons[index % advantageIcons.length];
            const expanded = open === index;
            return (
              <div key={item.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : index)}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ember/15 text-ember">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 font-display text-lg uppercase tracking-[0.08em] sm:text-xl">
                    {item.title}
                  </span>
                  <span className="text-2xl leading-none text-white/70" aria-hidden="true">
                    {expanded ? "–" : "+"}
                  </span>
                </button>
                {expanded ? <p className="px-5 pb-5 pl-[4.75rem] text-sm leading-6 text-mist sm:pr-8">{item.text}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
