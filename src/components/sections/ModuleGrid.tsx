import { Icon } from "@/components/Icon";

const palette = [
  { bg: "bg-brand-50", text: "text-brand-600", hoverBg: "group-hover:bg-brand-600" },
  { bg: "bg-teal-50", text: "text-teal-600", hoverBg: "group-hover:bg-teal-600" },
  { bg: "bg-amber-50", text: "text-amber-600", hoverBg: "group-hover:bg-amber-600" },
  { bg: "bg-rose-50", text: "text-rose-600", hoverBg: "group-hover:bg-rose-600" },
  { bg: "bg-violet-50", text: "text-violet-600", hoverBg: "group-hover:bg-violet-600" },
  { bg: "bg-sky-50", text: "text-sky-600", hoverBg: "group-hover:bg-sky-600" },
];

export function ModuleGrid({
  modules,
}: {
  modules: { icon: string; title: string; description: string }[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((m, i) => {
        const c = palette[i % palette.length];
        return (
          <div
            key={m.title}
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} ${c.text} transition-colors ${c.hoverBg} group-hover:text-white`}>
              <Icon name={m.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-slate-800">{m.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{m.description}</p>
          </div>
        );
      })}
    </div>
  );
}
