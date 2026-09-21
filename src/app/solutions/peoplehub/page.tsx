import type { Metadata } from "next";
import { CheckCircle2, XCircle } from "lucide-react";
import { Container, SectionKicker } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { peoplehub } from "@/content/solutions";

export const metadata: Metadata = {
  title: "PeopleHub HRIS — Newly Launched",
  description: "PeopleHub is Victory Information's newest HR platform — five connected pillars, fifteen modules, one shared workforce record.",
};

export default function PeopleHubPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 py-20 sm:py-28">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-accent-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Newly Launched HRIS
            </span>
            <h1 className="mt-6 text-balance text-4xl font-black leading-tight text-white sm:text-5xl">
              {peoplehub.hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance leading-relaxed text-slate-300">{peoplehub.hero.description}</p>
          </div>
        </Container>
      </section>

      {/* Challenge */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionKicker>The Modern HR Challenge</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">{peoplehub.challenge.title}</h2>
            <p className="mt-5 leading-relaxed text-slate-500">{peoplehub.challenge.description}</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {peoplehub.challenge.problems.map((p) => (
              <div key={p} className="flex items-center gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-sm text-slate-700">
                <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                {p}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-center font-medium text-brand-700">
            {peoplehub.challenge.conclusion}
          </p>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionKicker>Platform Overview</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">The PeopleHub ecosystem</h2>
            <p className="mt-3 text-slate-500">
              Five pillars, one data model. Every module reads and writes to the same workforce record.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-5">
            {peoplehub.pillars.map((p) => (
              <div key={p.number} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-3xl font-black text-brand-100">{p.number}</span>
                <h3 className="mt-2 font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Module groups */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionKicker>Modules</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">
              Fifteen modules. One shared record.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {peoplehub.moduleGroups.map((g) => (
              <div key={g.group} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-900">{g.group}</h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Engagement & productivity */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionKicker>Engagement & Productivity</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">
              Beyond HR: tools that keep teams moving
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {peoplehub.engagement.map((e) => (
              <div key={e.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={e.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{e.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{e.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Security & tech */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionKicker>Intelligence, Security & Tech</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">
              Insight, governance, and a modern foundation
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {peoplehub.security.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-brand-950 p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Technology Platform</span>
            {peoplehub.tech.map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Why + industries */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionKicker>Why PeopleHub</SectionKicker>
              <h2 className="mt-5 text-balance text-2xl font-black text-slate-900 sm:text-3xl">
                Ten reasons HR & IT teams choose PeopleHub
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {peoplehub.why.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionKicker>Industries We Serve</SectionKicker>
              <h2 className="mt-5 text-balance text-2xl font-black text-slate-900 sm:text-3xl">
                Designed to support organizations across sectors
              </h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {peoplehub.industries.map((i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-100"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Turn scattered HR data into one connected platform"
        description="PeopleHub is more than an HRIS — it's a workforce management platform designed to help you attract, manage, develop, engage, and retain your people."
      />
    </>
  );
}
