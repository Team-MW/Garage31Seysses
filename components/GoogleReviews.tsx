import { googleReviews, site } from "@/lib/site";

function GoogleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.34z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function StarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function GoogleReviews() {
  return (
    <section id="avis" className="relative isolate overflow-hidden scroll-mt-28 border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        {/* En-tête Google Avis */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
              <GoogleIcon className="h-4 w-4" />
              <span>Avis vérifiés sur Google</span>
              <span className="text-white/40">&bull;</span>
              <span className="text-ember font-semibold">5,0 / 5</span>
            </div>
            <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl">
              Ce que disent nos clients
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex text-[#fbbc04]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
              <p className="text-sm font-medium text-white/80">
                <span className="font-bold text-white">5,0 sur 5</span> basé sur {site.reviewsCount} avis Google
              </p>
            </div>
          </div>

          <a
            href={site.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-white/10 transition hover:bg-zinc-100 hover:scale-[1.02] active:scale-95"
          >
            <GoogleIcon className="h-4 w-4" />
            Laisser un avis sur Google
          </a>
        </div>

        {/* Grille des avis avec le design fidèle aux cartes blanches Google */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {googleReviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col justify-between rounded-2xl bg-white p-5 text-[#202124] shadow-xl shadow-black/20 ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                {/* Header carte : Avatar, Nom, Badge Google, Menu */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div
                        className={`grid h-10 w-10 place-items-center rounded-full text-base font-bold text-white ${review.avatarBg}`}
                      >
                        {review.initial}
                      </div>
                      {review.starBadge ? (
                        <span className="absolute -bottom-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-amber-400 text-white shadow-sm">
                          <StarIcon className="h-2.5 w-2.5" />
                        </span>
                      ) : null}
                    </div>

                    <div>
                      <p className="font-semibold text-sm leading-tight text-[#202124]">{review.name}</p>
                      <div className="mt-0.5 flex items-center gap-1 text-[11px] text-zinc-500">
                        <span>Avis de</span>
                        <span className="inline-flex items-center font-medium text-zinc-700">
                          <GoogleIcon className="mr-0.5 h-3 w-3 inline" /> Google
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-zinc-400 text-lg leading-none select-none" aria-hidden="true">
                    &#8942;
                  </span>
                </div>

                {/* Note 5/5, Étoiles jaunes, Date, Badge Nouveau */}
                <div className="mt-3.5 flex flex-wrap items-center gap-1.5 text-xs text-zinc-600">
                  <span className="font-bold text-[#202124]">{review.rating}/5</span>
                  <div className="flex text-[#fbbc04]">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <span className="text-zinc-400">&bull;</span>
                  <span className="text-zinc-500">{review.time}</span>
                  {review.badge ? (
                    <span className="ml-1 rounded border border-zinc-300 bg-zinc-50 px-1.5 py-0.5 text-[10px] font-medium text-zinc-600">
                      {review.badge}
                    </span>
                  ) : null}
                </div>

                {/* Commentaire */}
                <p className="mt-3 text-sm leading-relaxed text-[#3c4043] whitespace-pre-line">
                  {review.text}
                </p>
              </div>

              {/* Pied de carte : Date de visite */}
              <div className="mt-5 border-t border-zinc-100 pt-3 text-xs text-zinc-500">
                {review.visited}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
