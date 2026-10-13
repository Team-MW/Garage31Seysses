import Image from "next/image";

const vehicleConfig = {
  peugeot: {
    src: "/images/308_gt_bg.avif",
    width: 1620,
    height: 1080,
    className: "w-[340px] sm:w-[500px] lg:w-[680px] -right-12 sm:-right-6 lg:right-4 -bottom-6 sm:-bottom-12",
  },
  mercedes: {
    src: "/images/mercedes_bg.webp",
    width: 600,
    height: 400,
    className: "w-[300px] sm:w-[440px] lg:w-[580px] -right-10 sm:-right-4 lg:right-6 -bottom-4 sm:-bottom-8",
  },
  golf: {
    src: "/images/vw_golf_bg.png",
    width: 1024,
    height: 536,
    className: "w-[320px] sm:w-[480px] lg:w-[640px] -right-10 sm:-right-6 lg:right-6 -bottom-4 sm:-bottom-8",
  },
};

export function PageHero({
  eyebrow,
  title,
  text,
  vehicle = "golf",
}: {
  eyebrow: string;
  title: string;
  text: string;
  vehicle?: "peugeot" | "mercedes" | "golf";
}) {
  const v = vehicleConfig[vehicle] || vehicleConfig.golf;

  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-32 pb-14 sm:pt-40 sm:pb-16">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-16 select-none font-display text-[22vw] font-medium leading-none text-white/[0.04]"
      >
        GARAGE 31
      </p>

      {/* Silhouette véhicule en fond d'écran */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute z-0 select-none opacity-[0.11] sm:opacity-[0.14] transition-opacity ${v.className}`}
      >
        <Image
          src={v.src}
          alt=""
          width={v.width}
          height={v.height}
          priority
          className="h-auto w-full object-contain pointer-events-none select-none filter contrast-125"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ember">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[0.92] tracking-wide sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-mist sm:text-base">{text}</p>
      </div>
    </section>
  );
}
