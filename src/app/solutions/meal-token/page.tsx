import type { Metadata } from "next";
import { Container, SectionKicker } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { mealToken } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Meal Token System — New Product",
  description: "Meal Token is Victory Information's fingerprint-verified meal automation system with real-time kitchen reporting.",
};

export default function MealTokenPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 py-20 sm:py-28">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-accent-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              New Product
            </span>
            <h1 className="mt-6 text-balance text-4xl font-black leading-tight text-white sm:text-5xl">
              {mealToken.hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance leading-relaxed text-slate-300">
              {mealToken.hero.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionKicker>How It Works</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">
              From fingerprint to kitchen report, instantly
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mealToken.highlights.map((h) => (
              <div
                key={h.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/20">
                  <Icon name={h.icon} className="h-6 w-6" />
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
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-100">
            <h2 className="text-balance text-2xl font-black text-slate-900 sm:text-3xl">
              Works seamlessly with H2SO4 and PeopleHub
            </h2>
            <p className="mt-4 leading-relaxed text-slate-500">
              Meal Token was built as a natural extension of Victory Information&apos;s HRIS platforms — meal
              consumption data flows straight into payroll for accurate deductions or subsidy tracking, without a
              single manual reconciliation step.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Bring fingerprint-verified meal management to your site"
        description="Talk to our team about deploying Meal Token across your factory, estate, or office canteen."
      />
    </>
  );
}
