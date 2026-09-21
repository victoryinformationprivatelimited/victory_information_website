export function Journey({ items }: { items: { year: string; title: string }[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 sm:left-1/2" />
      <div className="space-y-8">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`relative flex flex-col gap-2 sm:flex-row sm:items-center ${
              i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <div className="absolute left-4 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-brand-600 ring-4 ring-brand-100 sm:left-1/2" />
            <div className={`w-full pl-10 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-600">{item.year}</span>
              <p className="mt-1 text-sm font-medium text-slate-700 sm:text-base">{item.title}</p>
            </div>
            <div className="hidden w-1/2 sm:block" />
          </div>
        ))}
      </div>
    </div>
  );
}
