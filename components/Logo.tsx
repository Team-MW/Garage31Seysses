import Link from "next/link";
import { site } from "@/lib/site";

interface LogoProps {
  showSlogan?: boolean;
  className?: string;
}

export function Logo({ showSlogan = false, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3.5 select-none ${className}`}
      aria-label="Garage 31 Seysses — Accueil"
    >
      {/* Emblème / Écusson Enseigne Garage 31 */}
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1b152e] via-[#0f0d1a] to-[#08070c] p-0.5 shadow-lg shadow-purple-950/60 ring-1 ring-purple-500/30 transition-all duration-300 group-hover:scale-105 group-hover:ring-purple-400/60 group-hover:shadow-purple-600/30">
        {/* Glow interne */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-transparent to-transparent opacity-60" />
        
        {/* SVG Emblème Enseigne : Hexagone & Rouage Mécanique + 31 */}
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative h-9 w-9"
        >
          {/* Liseré extérieur hexagonal dynamique */}
          <path
            d="M22 2.5L38.5 12V32L22 41.5L5.5 32V12L22 2.5Z"
            stroke="url(#purpleGrad)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Accent mécanique interne */}
          <path
            d="M22 6.5L34.5 14V30L22 37.5L9.5 30V14L22 6.5Z"
            stroke="rgba(192, 132, 252, 0.25)"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* Lignes aérodynamiques sport */}
          <path
            d="M10 22H15M29 22H34"
            stroke="#c084fc"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Chiffre 31 au centre */}
          <text
            x="22"
            y="27.5"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="15"
            fontWeight="800"
            fontFamily="var(--font-oswald), sans-serif"
            letterSpacing="-0.5px"
          >
            31
          </text>
          {/* Petit point néon violet */}
          <circle cx="22" cy="11" r="1.5" fill="#c084fc" />
          <defs>
            <linearGradient id="purpleGrad" x1="5.5" y1="2.5" x2="38.5" y2="41.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c084fc" />
              <stop offset="0.5" stopColor="#a855f7" />
              <stop offset="1" stopColor="#6b21a8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typographie de l'Enseigne */}
      <div className="leading-tight">
        <div className="flex items-center gap-1.5">
          <span className="font-display text-[22px] font-bold tracking-[0.12em] text-white transition group-hover:text-purple-300 sm:text-[25px]">
            GARAGE <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">31</span>
          </span>
          <span className="hidden rounded bg-purple-500/20 px-1.5 py-0.5 text-[8px] font-semibold tracking-wider text-purple-300 uppercase sm:inline-block">
            Seysses
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="block text-[8.5px] font-medium tracking-[0.34em] text-purple-200/60 uppercase">
            31600 Haute-Garonne
          </span>
          {showSlogan && (
            <span className="hidden text-[9px] font-medium text-purple-400/90 md:inline">
              • {site.slogan}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
