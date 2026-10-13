export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-32 pb-14 sm:pt-40 sm:pb-16">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-16 select-none font-display text-[22vw] font-medium leading-none text-white/[0.05]"
      >
        GARAGE 31
      </p>
      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ember">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[0.92] tracking-wide sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-mist sm:text-base">{text}</p>
      </div>
    </section>
  );
}
