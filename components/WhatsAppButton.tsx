import { site } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <aside aria-label="Assistance WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter le Garage 31 sur WhatsApp au 07 43 32 33 43"
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] p-3.5 text-white shadow-2xl shadow-black/60 transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] hover:shadow-[#25D366]/30 sm:px-5 sm:py-3.5"
      >
        {/* Pulsing online indicator dot */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-ink bg-[#25D366]" />
        </span>

        {/* WhatsApp official SVG icon */}
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 fill-current drop-shadow"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.72.7-.72 1.71 0 1.01.74 1.99.84 2.13.1.13 1.43 2.25 3.52 3.12.5.21.89.34 1.2.44.5.16.96.14 1.33.08.41-.06 1.27-.52 1.45-1.02.18-.51.18-.94.13-1.03-.06-.1-.2-.16-.42-.26-.22-.11-1.27-.63-1.47-.7-.2-.07-.35-.11-.5.11-.15.22-.59.7-.72.85-.13.15-.27.17-.48.06-.22-.11-.92-.34-1.75-1.08-.65-.58-1.08-1.29-1.21-1.51-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.53-1.28-.73-1.75-.19-.47-.39-.4-.53-.41-.14-.01-.3-.01-.46-.01" />
        </svg>

        {/* Label on desktop & larger screens */}
        <span className="hidden flex-col text-left sm:flex">
          <span className="text-xs font-bold uppercase tracking-wider text-white">WhatsApp</span>
          <span className="text-[11px] text-white/90 font-medium">Réponse rapide</span>
        </span>
      </a>
    </aside>
  );
}
