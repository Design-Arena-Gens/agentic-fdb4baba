type TimelineEvent = {
  title: string;
  era: string;
  detail: string;
};

type TimelineProps = {
  events: TimelineEvent[];
};

export function Timeline({ events }: TimelineProps) {
  return (
    <ol className="relative space-y-10 border-l border-white/10 pl-10">
      {events.map((event, index) => (
        <li key={`${event.title}-${index}`} className="relative">
          <span className="absolute -left-[37px] mt-1 h-3 w-3 rounded-full border border-white/60 bg-auric shadow-auric" />
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {event.era}
          </p>
          <h4 className="mt-2 text-xl font-semibold text-white">{event.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {event.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}
