"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { showroom } from "@/lib/site";
import { IconArrow, IconClose } from "./Icons";

export function ShowroomButton() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowRight") setIndex((value) => (value + 1) % showroom.length);
      if (event.key === "ArrowLeft") setIndex((value) => (value - 1 + showroom.length) % showroom.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % showroom.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [open, index]);

  const slide = showroom[index];

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="flex items-center gap-3 text-left">
        <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/30 backdrop-blur">
          <span className="ml-0.5 border-y-[6px] border-l-[10px] border-y-transparent border-l-ember" />
        </span>
        <span>
          <span className="block text-sm font-medium">Voir l&apos;atelier</span>
          <span className="block text-xs text-mist">Ouvert 7j/7</span>
        </span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80] bg-black/80 p-4 backdrop-blur-sm sm:p-8" role="presentation">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="showroom-title"
            className="mx-auto flex h-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-ember">Showroom</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15"
                aria-label="Fermer le showroom"
              >
                <IconClose className="h-4 w-4" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1">
              <Image
                src={slide.src}
                alt={slide.text}
                fill
                className="object-cover"
                style={{ objectPosition: slide.position }}
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/20" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs text-white/60">
                  {String(index + 1).padStart(2, "0")} / {String(showroom.length).padStart(2, "0")}
                </p>
                <h2 id="showroom-title" className="mt-2 font-display text-4xl uppercase tracking-wide sm:text-5xl">
                  {slide.title}
                </h2>
                <p className="mt-2 max-w-lg text-sm text-white/75">{slide.text}</p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <div className="flex gap-2">
                {showroom.map((item, itemIndex) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Vue ${itemIndex + 1} : ${item.title}`}
                    onClick={() => setIndex(itemIndex)}
                    className={`h-1.5 rounded-full transition-all ${
                      itemIndex === index ? "w-8 bg-ember" : "w-4 bg-white/25"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Image précédente"
                  onClick={() => setIndex((value) => (value - 1 + showroom.length) % showroom.length)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15"
                >
                  <IconArrow className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  aria-label="Image suivante"
                  onClick={() => setIndex((value) => (value + 1) % showroom.length)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15"
                >
                  <IconArrow className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
