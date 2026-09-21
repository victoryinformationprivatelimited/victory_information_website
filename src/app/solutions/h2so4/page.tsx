import type { Metadata } from "next";
import { Container, SectionKicker } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Stats } from "@/components/sections/Stats";
import { ModuleGrid } from "@/components/sections/ModuleGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { h2so4 } from "@/content/solutions";

export const metadata: Metadata = {
  title: "H2SO4 HRIS",
  description: "H2SO4 is a complete HRIS platform trusted by 600+ organizations island-wide — 24 modules covering payroll, attendance, performance, training and self-service.",
};

export default function H2SO4Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 py-20 sm:py-28">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <SectionKicker>{h2so4.hero.kicker}</SectionKicker>
            <h1 className="mt-5 text-balance text-4xl font-black text-white sm:text-5xl">{h2so4.hero.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance leading-relaxed text-slate-300">{h2so4.hero.description}</p>
          </div>
          <div className="mt-14">
            <Stats
              stats={h2so4.stats.map((s) => ({ value: s.value, label: s.label, helper: s.helper }))}
              variant="dark"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {h2so4.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={h.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{h.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionKicker>Modules</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">
              Everything HR needs to run the employee lifecycle
            </h2>
            <p className="mt-3 text-slate-500">
              From onboarding to payroll to performance — 24 integrated modules covering every stage of the employee
              journey.
            </p>
          </div>
          <ModuleGrid modules={h2so4.modules} />
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionKicker>Why H2SO4</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">
              Built to reduce admin work, not create more of it
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {h2so4.why.map((block) => (
              <div key={block.title} className="rounded-2xl border border-slate-200 bg-white p-8">
                <h3 className="text-lg font-bold text-slate-900">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{block.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {block.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
