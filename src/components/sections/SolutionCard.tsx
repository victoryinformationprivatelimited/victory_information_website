import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import type { Solution, SolutionAccent } from "@/content/solutions";

const accentStyles: Record<SolutionAccent, { iconBg: string; ring: string; wash: string; badge: string; tagline: string }> = {
  brand: {
    iconBg: "bg-brand-600 shadow-brand-600/20",
    ring: "hover:border-brand-200",
    wash: "from-brand-50",
    badge: "bg-accent-500",
    tagline: "text-brand-600",
  },
  teal: {
    iconBg: "bg-teal-600 shadow-teal-600/20",
    ring: "hover:border-teal-200",
    wash: "from-teal-50",
    badge: "bg-teal-500",
    tagline: "text-teal-600",
  },
  amber: {
    iconBg: "bg-amber-500 shadow-amber-500/20",
    ring: "hover:border-amber-200",
    wash: "from-amber-50",
    badge: "bg-amber-500",
    tagline: "text-amber-600",
  },
  rose: {
    iconBg: "bg-rose-500 shadow-rose-500/20",
    ring: "hover:border-rose-200",
    wash: "from-rose-50",
    badge: "bg-rose-500",
    tagline: "text-rose-600",
  },
  violet: {
    iconBg: "bg-violet-600 shadow-violet-600/20",
    ring: "hover:border-violet-200",
    wash: "from-violet-50",
    badge: "bg-violet-500",
    tagline: "text-violet-600",
  },
  sky: {
    iconBg: "bg-sky-600 shadow-sky-600/20",
    ring: "hover:border-sky-200",
    wash: "from-sky-50",
    badge: "bg-sky-500",
    tagline: "text-sky-600",
  },
};

export function SolutionCard({ solution }: { solution: Solution }) {
  const c = accentStyles[solution.accent];
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
        solution.featured
          ? `border-slate-200 bg-gradient-to-br ${c.wash} to-white shadow-md`
          : `border-slate-200 bg-white ${c.ring}`
      }`}
    >
      {solution.badge && (
        <span className={`absolute right-5 top-5 rounded-full ${c.badge} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white`}>
          {solution.badge}
        </span>
      )}
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg ${c.iconBg}`}>
        <Icon name={solution.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-900">{solution.name}</h3>
      <p className={`mt-1 text-sm font-medium ${c.tagline}`}>{solution.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{solution.summary}</p>
      <span className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${c.tagline}`}>
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
