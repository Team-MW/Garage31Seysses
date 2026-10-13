import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center" aria-label="Garage 31 Seysses, accueil">
      <span className="leading-none">
        <span className="block font-display text-[24px] font-semibold tracking-[0.16em] text-white transition group-hover:text-ember sm:text-[26px]">
          GARAGE <span className="text-ember">31</span>
        </span>
        <span className="mt-1 block text-[9px] font-medium tracking-[0.42em] text-white/55">SEYSSES</span>
      </span>
    </Link>
  );
}
