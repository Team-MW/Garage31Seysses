"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { IconArrow } from "./Icons";

type Errors = Partial<Record<"name" | "phone" | "consent", string>>;

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/30 focus:border-ember/80";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Indiquez votre nom.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 8) next.phone = "Indiquez un numéro joignable.";
    if (!consent) next.consent = "L’accord est nécessaire pour vous recontacter.";
    return next;
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-white/10 bg-panel p-8" role="status">
        <p className="text-[11px] uppercase tracking-[0.24em] text-ember">Demande reçue</p>
        <h3 className="mt-3 font-display text-4xl uppercase tracking-wide">Merci, {name.trim().split(" ")[0]}.</h3>
        <p className="mt-4 text-sm leading-6 text-mist">
          L&apos;équipe du Garage 31 vous rappelle dans les plus brefs délais pour convenir de votre rendez-vous.
        </p>
        <button
          type="button"
          className="mt-6 text-sm text-white underline decoration-white/30 underline-offset-4"
          onClick={() => {
            setSent(false);
            setName("");
            setPhone("");
            setModel("");
            setCity("");
            setMessage("");
            setConsent(false);
          }}
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-white/10 bg-panel p-5 sm:p-7">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Votre nom</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Votre nom"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <span className="mt-1 block text-xs text-ember">{errors.name}</span> : null}
        </label>
        <label className="block">
          <span className="sr-only">Votre téléphone</span>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Votre téléphone"
            autoComplete="tel"
            inputMode="tel"
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? <span className="mt-1 block text-xs text-ember">{errors.phone}</span> : null}
        </label>
        <label className="block">
          <span className="sr-only">Véhicule</span>
          <input
            value={model}
            onChange={(event) => setModel(event.target.value)}
            placeholder="Véhicule (Marque / Modèle)"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="sr-only">Ville</span>
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Ville (Seysses, Muret…)"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-3 block">
        <span className="sr-only">Prestation ou problème</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Prestation souhaitée (vidange, courroie, embrayage, diagnostic…)"
          rows={4}
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ember px-5 py-3.5 text-sm font-medium text-white transition hover:bg-ember-bright"
      >
        Envoyer la demande
        <IconArrow className="h-4 w-4" />
      </button>

      <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-mist">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-0.5 h-4 w-4 accent-ember"
        />
        <span>
          En envoyant ce formulaire, vous acceptez la{" "}
          <Link href="/confidentialite" className="text-white underline decoration-white/30 underline-offset-2">
            politique de confidentialité
          </Link>
          .
          {errors.consent ? <span className="mt-1 block text-ember">{errors.consent}</span> : null}
        </span>
      </label>
    </form>
  );
}
