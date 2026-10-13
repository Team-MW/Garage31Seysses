import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Garage 31 Seysses, accueil">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-ember text-ink">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path d="M4 19 12 4l8 15h-3.1L12 9.4 7.1 19H4Z" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-[22px] font-medium tracking-[0.16em]">GARAGE 31</span>
        <span className="mt-1 block text-[9px] tracking-[0.42em] text-white/55">SEYSSES</span>
      </span>
    </Link>
  );
}
