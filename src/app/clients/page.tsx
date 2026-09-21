import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { Container, SectionKicker } from "@/components/ui";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: "Clients",
  description: "600+ organizations across Sri Lanka trust Victory Information for HR, payroll and workforce management.",
};

const placeholderClients = Array.from({ length: 12 }, (_, i) => `Client ${i + 1}`);

const industries = [
  { label: "Information Technology", color: "bg-brand-50 text-brand-700" },
  { label: "Security Services", color: "bg-rose-50 text-rose-700" },
  { label: "Movers & Logistics", color: "bg-amber-50 text-amber-700" },
  { label: "Construction", color: "bg-sky-50 text-sky-700" },
  { label: "Luxury Travel & Tours", color: "bg-teal-50 text-teal-700" },
  { label: "Electrical & Surveillance", color: "bg-violet-50 text-violet-700" },
  { label: "Seafood Exports", color: "bg-brand-50 text-brand-700" },
  { label: "Mass Media", color: "bg-rose-50 text-rose-700" },
];

export default function ClientsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 py-20 sm:py-28">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <SectionKicker>Our Clients</SectionKicker>
            <h1 className="mt-5 text-balance text-4xl font-black text-white sm:text-5xl">
              600+ organizations trust Victory Information
            </h1>
            <p className="mt-5 text-balance text-slate-300">
              Across IT, security, logistics, construction, travel, manufacturing, and more — island-wide.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {industries.map((ind) => (
              <span key={ind.label} className={`rounded-full px-4 py-1.5 text-xs font-semibold ${ind.color}`}>
                {ind.label}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-4 max-w-2xl text-center text-xs font-medium uppercase tracking-wider text-slate-400">
            Client logos placeholder — send us your current client list and logos to populate this section
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {placeholderClients.map((c) => (
              <div
                key={c}
                className="flex h-24 items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-slate-400"
              >
                <Building2 className="h-5 w-5" />
                <span className="text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionKicker>What our clients say</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">
              We help to build a better future for all
            </h2>
          </div>
          <Testimonials items={homeContent.testimonials} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
