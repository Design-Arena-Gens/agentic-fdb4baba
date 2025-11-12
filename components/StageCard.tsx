type Stage = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  badge?: string;
};

export function StageCard({
  title,
  subtitle,
  description,
  highlights,
  badge
}: Stage) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate/40 p-6 shadow-auric transition-all hover:-translate-y-1 hover:border-auric/60 hover:bg-slate/60">
      <div className="absolute inset-0 bg-gold-noise opacity-0 blur-xl transition-opacity group-hover:opacity-30" />
      <div className="relative space-y-5">
        <header>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-semibold text-auric">{title}</h3>
            {badge && (
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white/80">
                {badge}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm uppercase tracking-[0.35em] text-white/60">
            {subtitle}
          </p>
        </header>
        <p className="text-base text-white/80">{description}</p>
        <ul className="space-y-2">
          {highlights.map((fact) => (
            <li
              key={fact}
              className="flex items-start gap-3 text-sm text-white/80"
            >
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-auric" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
