import { BarChart3, Bell, CalendarCheck, CircleUserRound, Fingerprint, TrendingUp } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-lg select-none">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-accent-400/20 blur-3xl" />

      {/* Main dashboard card */}
      <div className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/95 p-5 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Workforce Overview</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-brand-50 p-3">
            <TrendingUp className="h-4 w-4 text-brand-600" />
            <div className="mt-2 text-lg font-black text-brand-700">98%</div>
            <div className="text-[10px] font-medium text-slate-500">Attendance</div>
          </div>
          <div className="rounded-xl bg-accent-50 p-3" style={{ backgroundColor: "#f0fdfa" }}>
            <Fingerprint className="h-4 w-4 text-accent-600" />
            <div className="mt-2 text-lg font-black text-accent-600">642</div>
            <div className="text-[10px] font-medium text-slate-500">Meals Today</div>
          </div>
          <div className="rounded-xl bg-amber-50 p-3">
            <CalendarCheck className="h-4 w-4 text-amber-500" />
            <div className="mt-2 text-lg font-black text-amber-600">24</div>
            <div className="text-[10px] font-medium text-slate-500">On Leave</div>
          </div>
        </div>

        <div className="mt-4 flex items-end gap-1.5 rounded-xl bg-slate-50 p-3">
          {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-full bg-gradient-to-t from-brand-600 to-accent-400"
              style={{ height: `${h * 0.5}px` }}
            />
          ))}
        </div>
      </div>

      {/* Floating notification card */}
      <div className="absolute -right-4 top-2 flex items-center gap-2.5 rounded-xl bg-white p-3 shadow-xl ring-1 ring-slate-100 sm:-right-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Bell className="h-4 w-4" />
        </span>
        <div>
          <div className="text-xs font-semibold text-slate-800">Payroll processed</div>
          <div className="text-[10px] text-slate-400">2 minutes ago</div>
        </div>
      </div>

      {/* Floating profile card */}
      <div className="absolute -left-4 bottom-4 flex items-center gap-2.5 rounded-xl bg-white p-3 shadow-xl ring-1 ring-slate-100 sm:-left-10">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-600">
          <CircleUserRound className="h-4 w-4" />
        </span>
        <div>
          <div className="text-xs font-semibold text-slate-800">Leave approved</div>
          <div className="text-[10px] text-slate-400">by Supervisor</div>
        </div>
      </div>

      {/* Floating chart chip */}
      <div className="absolute bottom-0 right-6 hidden items-center gap-2 rounded-xl bg-brand-950 px-3 py-2 shadow-xl sm:flex">
        <BarChart3 className="h-4 w-4 text-accent-400" />
        <span className="text-xs font-semibold text-white">+18% YoY</span>
      </div>
    </div>
  );
}
