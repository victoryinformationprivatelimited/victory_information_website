import type { Metadata } from "next";
import { Compass, Target } from "lucide-react";
import { Button, CardShell, Container, SectionKicker } from "@/components/ui";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Journey } from "@/components/sections/Journey";
import { aboutContent } from "@/content/pages";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Victory Information (Pvt) Ltd — 14+ years building HR technology trusted by 600+ organizations across Sri Lanka.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 py-20 sm:py-28">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <SectionKicker>{aboutContent.hero.kicker}</SectionKicker>
            <h1 className="mt-5 text-balance text-4xl font-black text-white sm:text-5xl">{aboutContent.hero.title}</h1>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionKicker>{aboutContent.profile.title}</SectionKicker>
              <h2 className="mt-5 text-balance text-2xl font-black text-slate-900 sm:text-3xl">
                A trusted HR technology partner since 2012
              </h2>
              <p className="mt-5 leading-relaxed text-slate-500">{aboutContent.profile.description}</p>
            </div>
            <div className="space-y-4 lg:col-span-3">
              {aboutContent.profile.body.map((p) => (
                <p key={p.slice(0, 20)} className="leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <CardShell className="bg-gradient-to-br from-brand-600 to-brand-800 text-white">
              <Compass className="h-8 w-8 text-accent-300" />
              <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-slate-200">{aboutContent.vision}</p>
            </CardShell>
            <CardShell>
              <Target className="h-8 w-8 text-brand-600" />
              <h3 className="mt-4 text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-slate-500">{aboutContent.mission}</p>
            </CardShell>
          </div>

          <div className="mt-16 mx-auto max-w-3xl">
            <h3 className="text-center text-xl font-bold text-slate-900">Our Business Goals</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutContent.goals.map((goal, i) => (
                <div key={goal} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionKicker>{aboutContent.brands.title}</SectionKicker>
            <p className="mt-5 leading-relaxed text-slate-500">{aboutContent.brands.description}</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {aboutContent.pillars.map((pillar) => (
              <CardShell key={pillar.title} className="flex flex-col">
                <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{pillar.description}</p>
                <Button href={pillar.cta.href} variant="ghost" className="mt-4 px-0">
                  {pillar.cta.label}
                </Button>
              </CardShell>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionKicker>Our Journey</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">From 2012 to today</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <Journey items={homeContent.journey} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to see Victory Information in action?"
        description="Talk to our team about the right platform and modules for your organization."
      />
    </>
  );
}
