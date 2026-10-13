import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="border-y border-white/10" aria-label="Chiffres">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <article
            key={stat.label}
            className={`px-5 py-8 sm:px-8 ${
              index % 2 === 0 ? "border-r border-white/10" : ""
            } ${index < 2 ? "border-b border-white/10 lg:border-b-0" : ""} ${
              index !== stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
            }`}
          >
            <p className="font-display text-5xl font-medium text-ember sm:text-6xl">{stat.value}</p>
            <h2 className="mt-3 text-sm font-medium uppercase tracking-[0.14em]">{stat.label}</h2>
            <p className="mt-2 max-w-[220px] text-sm leading-5 text-mist">{stat.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
