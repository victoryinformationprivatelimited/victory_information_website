import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Container, SectionKicker } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { solutions } from "@/content/solutions";

const dedicatedSlugs = new Set(["h2so4", "peoplehub", "meal-token"]);

export function generateStaticParams() {
  return solutions.filter((s) => !dedicatedSlugs.has(s.slug)).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return { title: solution.name, description: solution.summary };
}

export default async function SolutionDetailPage(props: PageProps<"/solutions/[slug]">) {
  const { slug } = await props.params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution || dedicatedSlugs.has(slug)) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-accent-300 ring-1 ring-inset ring-white/10">
              <Icon name={solution.icon} className="h-8 w-8" />
            </div>
            <SectionKicker>Solution</SectionKicker>
            <h1 className="mt-5 text-balance text-4xl font-black text-white sm:text-5xl">{solution.name}</h1>
            <p className="mt-4 text-balance text-lg text-accent-200">{solution.tagline}</p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-balance text-center text-lg leading-relaxed text-slate-600">{solution.summary}</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                "Implemented and configured by our local support team",
                "Integrates with our other HR and workforce platforms",
                "Backed by 14+ years of Victory Information expertise",
                "Scales from single-branch to island-wide operations",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  <span className="text-sm text-slate-600">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title={`Talk to us about ${solution.name}`}
        description="Tell us about your organization and we'll show you exactly how this fits."
      />
    </>
  );
}
