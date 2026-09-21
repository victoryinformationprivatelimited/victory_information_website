import { CheckCircle2 } from "lucide-react";
import { Button, CardShell, Container, SectionKicker } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Journey } from "@/components/sections/Journey";
import { SolutionCard } from "@/components/sections/SolutionCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HeroIllustration } from "@/components/sections/HeroIllustration";
import { homeContent } from "@/content/home";
import { solutions } from "@/content/solutions";

export default function Home() {
  const featuredSolutions = homeContent.featured
    .map((f) => solutions.find((s) => s.slug === f.slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <Container className="relative py-24 sm:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-300 ring-1 ring-inset ring-white/10">
                {homeContent.hero.kicker}
              </span>
              <h1 className="mt-6 text-balance text-4xl font-black leading-tight text-white sm:text-6xl">
                {homeContent.hero.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-300 lg:mx-0">
                {homeContent.hero.description}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Button href={homeContent.hero.ctaPrimary.href}>{homeContent.hero.ctaPrimary.label}</Button>
                <Button href={homeContent.hero.ctaSecondary.href} variant="secondary">
                  {homeContent.hero.ctaSecondary.label}
                </Button>
              </div>
            </div>
            <HeroIllustration />
          </div>

          <div className="mt-16">
            <Stats stats={homeContent.stats} variant="dark" />
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionKicker>{homeContent.intro.kicker}</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">{homeContent.intro.title}</h2>
            <p className="mt-6 text-balance leading-relaxed text-slate-500">{homeContent.intro.description}</p>
          </div>
        </Container>
      </section>

      {/* Featured solutions */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionKicker>Our Top Solutions</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">
              Explore our top rated products
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSolutions.map((s) => (
              <SolutionCard key={s.slug} solution={s} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/solutions" variant="ghost">
              View all solutions
            </Button>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionKicker>Why Choose Us?</SectionKicker>
              <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">
                Engrossed in delivering the best HR solution software
              </h2>
              <p className="mt-5 leading-relaxed text-slate-500">
                Victory Information (Pvt) Ltd is engrossed in delivering the best HR Solution Software that an
                organisation needs to overcome challenges faced through managing, handling and record keeping.
              </p>
              <ul className="mt-6 space-y-3">
                {["600+ organizations trust our platforms island-wide", "14+ years of dedicated HR technology expertise", "24/7 supported, cloud-hosted systems"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-500" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="grid gap-5">
              {homeContent.whyUs.map((item, i) => (
                <CardShell key={item.title} className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      [
                        "bg-brand-50 text-brand-600",
                        "bg-teal-50 text-teal-600",
                        "bg-amber-50 text-amber-600",
                      ][i % 3]
                    }`}
                  >
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
                  </div>
                </CardShell>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionKicker>Our Industrial Clientele</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">
              We help to build a better future for all
            </h2>
          </div>
          <Testimonials items={homeContent.testimonials} />
        </Container>
      </section>

      {/* Journey */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionKicker>Our Journey</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">
              14+ years of building for Sri Lanka&apos;s workforce
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <Journey items={homeContent.journey} />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionKicker>F.A.Q</SectionKicker>
            <h2 className="mt-5 text-balance text-3xl font-black text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-slate-500">Here are some frequently asked questions from us.</p>
          </div>
          <Faq items={homeContent.faqs} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
