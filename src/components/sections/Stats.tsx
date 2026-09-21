export function Stats({
  stats,
  variant = "light",
}: {
  stats: { value: string; label: string; helper?: string }[];
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-6 rounded-3xl p-8 sm:grid-cols-4 sm:p-10 ${
        variant === "dark" ? "bg-white/5 ring-1 ring-inset ring-white/10" : "bg-slate-50 ring-1 ring-inset ring-slate-100"
      }`}
    >
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className={`text-3xl font-black sm:text-4xl ${variant === "dark" ? "text-white" : "text-brand-700"}`}>
            {s.value}
          </div>
          <div className={`mt-1 text-xs font-medium sm:text-sm ${variant === "dark" ? "text-slate-300" : "text-slate-500"}`}>
            {s.label}
          </div>
          {s.helper && <div className="mt-0.5 text-[11px] text-slate-400">{s.helper}</div>}
        </div>
      ))}
    </div>
  );
}
