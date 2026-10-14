"use client";

import { useEffect, useState } from "react";
import { site } from "../lib/site";
import { IconArrow, IconCalendar, IconCheck, IconPhone } from "./Icons";

export interface ServiceItem {
  id: string;
  label: string;
  price: string;
}

export interface UpcomingDay {
  iso: string;
  dayName: string;
  dayNumber: number;
  monthName: string;
  fullDate: string;
  isToday: boolean;
  slotsLeft: number;
}

const SERVICES_LIST: ServiceItem[] = [
  { id: "vidange-simple", label: "Vidange Simple", price: "99 €" },
  { id: "vidange-3-filtres", label: "Vidange avec 3 Filtres", price: "159 € TTC" },
  { id: "distribution", label: "Courroie de Distribution", price: "494,99 €" },
  { id: "amortisseurs", label: "Changement d'Amortisseurs", price: "159 €" },
  { id: "diagnostic", label: "Diagnostic Électronique Valise", price: "Devis / Bilan" },
  { id: "pneumatique", label: "Pneumatique (Montage / Équilibrage)", price: "Service rapide" },
  { id: "freinage", label: "Système de Freinage (Disques / Plaquettes)", price: "Contrôle & Devis" },
  { id: "climatisation", label: "Recharge & Entretien Climatisation", price: "Recharge express" },
  { id: "nettoyage", label: "Nettoyage Automobile Professionnel", price: "Intérieur / Extérieur" },
  { id: "lustrage", label: "Lustrage Carrosserie Haute Brillance", price: "Effet miroir" },
  { id: "vitres-teintees", label: "Vitres Teintées Homologuées", price: "Sur mesure" },
  { id: "pare-brise", label: "Pare-brise (Réparation ou Remplacement)", price: "Prise en charge rapide" },
  { id: "autre", label: "Autre Réparation / Mécanique générale", price: "Devis gratuit" },
];

const TIME_SLOTS = [
  { time: "08:30", available: true },
  { time: "09:15", available: true },
  { time: "10:00", available: true },
  { time: "10:45", available: false, label: "Complet" },
  { time: "11:30", available: true },
  { time: "14:00", available: true },
  { time: "14:45", available: true },
  { time: "15:30", available: false, label: "Complet" },
  { time: "16:15", available: true },
  { time: "17:00", available: true },
  { time: "17:45", available: true },
  { time: "18:30", available: true },
];

function getUpcomingDays(count = 12): UpcomingDay[] {
  const result: UpcomingDay[] = [];
  const now = new Date();

  for (let i = 0; i < count; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const rawDayName = d.toLocaleDateString("fr-FR", { weekday: "short" });
    const dayName = rawDayName.charAt(0).toUpperCase() + rawDayName.slice(1).replace(".", "");
    const dayNumber = d.getDate();
    const monthName = d.toLocaleDateString("fr-FR", { month: "short" });
    const fullDate = d.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    const iso = d.toISOString().split("T")[0];

    result.push({
      iso,
      dayName,
      dayNumber,
      monthName,
      fullDate,
      isToday: i === 0,
      slotsLeft: i % 3 === 0 ? 4 : i % 2 === 0 ? 6 : 8,
    });
  }
  return result;
}

export function AppointmentBooking() {
  const [days, setDays] = useState<UpcomingDay[]>(() => getUpcomingDays(12));
  const [selectedDay, setSelectedDay] = useState<UpcomingDay>(() => {
    const initialDays = getUpcomingDays(12);
    return initialDays[0];
  });
  const [selectedSlot, setSelectedSlot] = useState("09:15");
  const [selectedService, setSelectedService] = useState(SERVICES_LIST[0].label);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [plate, setPlate] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [confirmed, setConfirmed] = useState(false);

  // Mettre à jour les jours lors du montage côté client pour éviter tout décalage d'hydratation
  useEffect(() => {
    const clientDays = getUpcomingDays(12);
    setDays(clientDays);
    setSelectedDay((prev) => {
      const match = clientDays.find((d) => d.iso === prev?.iso);
      return match || clientDays[0];
    });
  }, []);

  // Écouteur pour sélection depuis les forfaits
  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ service?: string }>;
      if (custom.detail?.service) {
        const found = SERVICES_LIST.find((s) =>
          s.label.toLowerCase().includes(custom.detail.service!.toLowerCase()) ||
          custom.detail.service!.toLowerCase().includes(s.label.toLowerCase())
        );
        if (found) {
          setSelectedService(found.label);
        } else {
          setSelectedService(custom.detail.service);
        }
      }
    };
    window.addEventListener("select-service-booking", handler);
    return () => window.removeEventListener("select-service-booking", handler);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; phone?: string } = {};

    if (name.trim().length < 2) {
      nextErrors.name = "Veuillez renseigner votre nom.";
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 8) {
      nextErrors.phone = "Veuillez renseigner un numéro de téléphone valide.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setConfirmed(true);
    }
  };

  const whatsappBookingUrl = `https://wa.me/33743323343?text=${encodeURIComponent(
    `Bonjour Garage 31, je souhaite confirmer mon rendez-vous :\n` +
    `• Prestation : ${selectedService}\n` +
    `• Date : ${selectedDay?.fullDate || ""}\n` +
    `• Heure : ${selectedSlot}\n` +
    `• Client : ${name}\n` +
    `• Téléphone : ${phone}\n` +
    (vehicle ? `• Véhicule : ${vehicle}\n` : "") +
    (plate ? `• Immatriculation : ${plate}\n` : "") +
    (notes ? `• Remarques : ${notes}` : "")
  )}`;

  return (
    <section id="rendez-vous" className="relative isolate overflow-hidden scroll-mt-24 py-20 sm:py-28 border-t border-white/10">
      {/* Lueur d'ambiance violette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[130px]"
      />

      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Créneaux Ouverts 7j/7 de 08:00 à 19:30
          </div>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl text-white">
            Prise de Rendez-vous en Ligne
          </h2>
          <p className="mt-3 text-sm sm:text-base text-mist max-w-2xl leading-relaxed">
            Choisissez votre prestation, sélectionnez votre date et votre horaire parmi les créneaux disponibles. Confirmation instantanée avec l&apos;équipe du Garage 31 Seysses.
          </p>
        </div>

        {confirmed ? (
          /* Écran de Confirmation */
          <div className="rounded-3xl border border-purple-500/40 bg-gradient-to-b from-[#1a142c] via-[#120e20] to-[#0c0a14] p-8 sm:p-12 shadow-2xl shadow-purple-950/80">
            <div className="flex items-center gap-4 text-emerald-400">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30">
                <IconCheck className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-purple-300 font-semibold">Demande Enregistrée</p>
                <h3 className="font-display text-3xl uppercase tracking-wide text-white">
                  Rendez-vous réservé avec succès !
                </h3>
              </div>
            </div>

            {/* Récapitulatif du rendez-vous */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/50">Prestation</p>
                <p className="mt-1 font-semibold text-purple-300 text-sm">{selectedService}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/50">Date retenue</p>
                <p className="mt-1 font-semibold text-white text-sm capitalize">{selectedDay?.fullDate}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/50">Heure du créneau</p>
                <p className="mt-1 font-semibold text-emerald-400 text-sm">{selectedSlot} (sans attente)</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/50">Lieu de prise en charge</p>
                <p className="mt-1 font-semibold text-white text-sm">{site.shortName} • {site.city}</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-mist leading-relaxed">
              Merci <span className="font-semibold text-white">{name}</span>. Notre chef d&apos;atelier a bien reçu votre créneau. Vous pouvez également valider et synchroniser directement ce rendez-vous sur WhatsApp pour un rappel automatique :
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#20ba5a]"
              >
                Confirmer mon RDV sur WhatsApp &rarr;
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/40 px-6 py-3.5 text-sm font-semibold text-purple-200 transition hover:bg-purple-900/40"
              >
                <IconPhone className="h-4 w-4" />
                Appeler l&apos;atelier : {site.phone}
              </a>
              <button
                type="button"
                onClick={() => setConfirmed(false)}
                className="text-xs text-white/60 hover:text-white underline underline-offset-4 self-center ml-2"
              >
                Modifier ou réserver un autre créneau
              </button>
            </div>
          </div>
        ) : (
          /* Formulaire Interactif 3 Étapes */
          <form
            onSubmit={handleBookingSubmit}
            noValidate
            className="rounded-3xl border border-white/10 bg-[#100d18]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
          >
            {/* Étape 1 : Choix de la Prestation */}
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-purple-600 text-xs font-bold text-white">
                  1
                </span>
                <h3 className="font-display text-xl uppercase tracking-wide text-white">
                  Sélectionnez la Prestation
                </h3>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {SERVICES_LIST.map((srv) => {
                  const isChosen = selectedService === srv.label;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.label)}
                      className={`flex items-center justify-between gap-3 rounded-2xl border p-3.5 text-left transition ${
                        isChosen
                          ? "border-purple-500 bg-purple-600/20 text-white shadow-md shadow-purple-900/30"
                          : "border-white/10 bg-white/[0.02] text-white/80 hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-medium">{srv.label}</span>
                      <span className={`shrink-0 rounded-lg px-2 py-0.5 text-[11px] font-semibold ${
                        isChosen ? "bg-purple-500 text-white" : "bg-white/10 text-purple-300"
                      }`}>
                        {srv.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Étape 2 : Choix du Jour & Créneau */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-purple-600 text-xs font-bold text-white">
                    2
                  </span>
                  <h3 className="font-display text-xl uppercase tracking-wide text-white">
                    Choisissez votre Date & Heure
                  </h3>
                </div>
                <span className="text-xs text-purple-300 font-medium">
                  Atelier ouvert du lundi au dimanche
                </span>
              </div>

              {/* Barre de défilement des jours */}
              <div className="mt-4 flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
                {days.map((day) => {
                  const isSelected = selectedDay?.iso === day.iso;
                  return (
                    <button
                      key={day.iso}
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={`flex min-w-[92px] flex-col items-center rounded-2xl border p-3 text-center transition ${
                        isSelected
                          ? "border-purple-500 bg-gradient-to-b from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-900/40"
                          : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/25 hover:bg-white/[0.04]"
                      }`}
                    >
                      <span className="text-[11px] uppercase tracking-wider font-medium opacity-80">
                        {day.dayName}
                      </span>
                      <span className="mt-1 font-display text-2xl font-bold">
                        {day.dayNumber}
                      </span>
                      <span className="text-[10px] uppercase opacity-75">
                        {day.monthName}
                      </span>
                      <span className={`mt-2 rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${
                        isSelected ? "bg-black/30 text-purple-200" : "bg-emerald-500/15 text-emerald-400"
                      }`}>
                        {day.slotsLeft} dispo
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Grille des créneaux horaires */}
              <div className="mt-6">
                <p className="text-xs uppercase tracking-wider text-white/50 mb-3">
                  Créneaux disponibles le <span className="capitalize font-semibold text-white">{selectedDay?.fullDate}</span> :
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedSlot === slot.time && slot.available;
                    if (!slot.available) {
                      return (
                        <div
                          key={slot.time}
                          className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-white/[0.01] py-2.5 text-center opacity-40 cursor-not-allowed"
                        >
                          <span className="text-xs font-medium text-white/50 line-through">{slot.time}</span>
                          <span className="text-[9px] text-red-400 uppercase tracking-wider">Complet</span>
                        </div>
                      );
                    }
                    return (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setSelectedSlot(slot.time)}
                        className={`flex flex-col items-center justify-center rounded-xl border py-2.5 transition active:scale-95 ${
                          isSelected
                            ? "border-purple-400 bg-purple-600 text-white shadow-md shadow-purple-900/50"
                            : "border-white/10 bg-white/[0.02] text-white/90 hover:border-purple-500/40 hover:bg-white/[0.06]"
                        }`}
                      >
                        <span className="font-display text-sm sm:text-base font-semibold">{slot.time}</span>
                        <span className={`text-[9px] tracking-wider uppercase ${
                          isSelected ? "text-purple-200 font-semibold" : "text-emerald-400"
                        }`}>
                          Disponible
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Étape 3 : Coordonnées Client & Véhicule */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-purple-600 text-xs font-bold text-white">
                  3
                </span>
                <h3 className="font-display text-xl uppercase tracking-wide text-white">
                  Vos Coordonnées & Véhicule
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                    Nom & Prénom <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex : Alexandre Martin"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                  {errors.name && <p className="mt-1 text-xs text-purple-400">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                    Numéro de Téléphone <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex : 06 12 34 56 78"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-purple-400">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                    Véhicule (Marque / Modèle)
                  </label>
                  <input
                    type="text"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    placeholder="Ex : Renault Clio 4, Peugeot 308, VW Golf..."
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                    Plaque d&apos;immatriculation (facultatif)
                  </label>
                  <input
                    type="text"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value.toUpperCase())}
                    placeholder="Ex : AA-123-BB"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white uppercase placeholder:text-white/30 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                  Précisions ou symptômes éventuels (facultatif)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex : Bruit de claquement à l'avant, voyant orange allumé, besoin d'un véhicule de prêt..."
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
                />
              </div>

              {/* Bouton de confirmation */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
                <div className="text-xs text-mist leading-relaxed text-center sm:text-left">
                  <span>Créneau retenu : </span>
                  <span className="font-semibold text-white capitalize">{selectedDay?.fullDate} à {selectedSlot}</span>
                  <br />
                  <span>Atelier : </span>
                  <span className="text-purple-300 font-medium">{site.fullAddress}</span>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-fuchsia-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-purple-900/40 transition hover:from-purple-500 hover:to-fuchsia-500 active:scale-95"
                >
                  <IconCalendar className="h-4 w-4" />
                  Valider mon Rendez-vous
                  <IconArrow className="h-4 w-4" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
