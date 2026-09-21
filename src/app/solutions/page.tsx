import type { Metadata } from "next";
import { Container, SectionKicker } from "@/components/ui";
import { SolutionCard } from "@/components/sections/SolutionCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore Victory Information's full range of HR, payroll, attendance, meal automation, and business software solutions.",
};

export default function SolutionsPage() {
  const featured = solutions.filter((s) => s.featured);
  const rest = solutions.filter((s) => !s.featured);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 py-20 sm:py-28">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <SectionKicker>Our Solutions</SectionKicker>
            <h1 className="mt-5 text-balance text-4xl font-black text-white sm:text-5xl">
              Software built for every stage of your workforce
            </h1>
            <p className="mt-5 text-balance text-slate-300">
              From flagship HRIS platforms to specialized meal, attendance, and security systems — all engineered by
              Victory Information.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mb-10">
            <SectionKicker>Flagship HRIS Platforms</SectionKicker>
            <h2 className="mt-4 text-balance text-2xl font-black text-slate-900 sm:text-3xl">
              Our most advanced HR solutions
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((s) => (
              <SolutionCard key={s.slug} solution={s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="mb-10">
            <SectionKicker>Full Solution Range</SectionKicker>
            <h2 className="mt-4 text-balance text-2xl font-black text-slate-900 sm:text-3xl">
              Specialized systems for every business need
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s) => (
              <SolutionCard key={s.slug} solution={s} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
