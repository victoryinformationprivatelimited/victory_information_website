import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container, SectionKicker } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { servicesContent } from "@/content/pages";

export const metadata: Metadata = {
  title: "Services",
  description: "Payroll outsourcing and consultancy services from Victory Information (Pvt) Ltd.",
};

const iconStyles = [
  "bg-brand-600 shadow-brand-600/20",
  "bg-teal-600 shadow-teal-600/20",
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 py-20 sm:py-28">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <SectionKicker>{servicesContent.hero.kicker}</SectionKicker>
            <h1 className="mt-5 text-balance text-4xl font-black text-white sm:text-5xl">{servicesContent.hero.title}</h1>
            <p className="mt-5 text-balance text-slate-300">{servicesContent.hero.description}</p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="space-y-16">
            {servicesContent.services.map((service, i) => (
              <div
                key={service.title}
                className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${iconStyles[i % iconStyles.length]}`}>
                    <Icon name={service.icon} className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 text-2xl font-black text-slate-900 sm:text-3xl">{service.title}</h2>
                  <p className="mt-4 leading-relaxed text-slate-500">{service.description}</p>
                </div>
                <div className="grid gap-3">
                  {service.points.map((p) => (
                    <div key={p} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                      <span className="text-sm text-slate-600">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Let's talk about your HR and payroll needs"
        description="Our consultants will recommend the right service or software fit for your organization."
      />
    </>
  );
}
