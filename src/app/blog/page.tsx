import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { Button, Container, SectionKicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on HR technology, payroll, and workforce management from Victory Information.",
};

export default function BlogPage() {
  return (
    <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 py-28 sm:py-36">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-accent-300 ring-1 ring-inset ring-white/10">
            <Newspaper className="h-8 w-8" />
          </div>
          <SectionKicker>Blog</SectionKicker>
          <h1 className="mt-5 text-balance text-4xl font-black text-white sm:text-5xl">New insights coming soon</h1>
          <p className="mt-5 text-balance text-slate-300">
            We&apos;re preparing articles on HR technology, payroll compliance, and workforce management best
            practices for Sri Lankan organizations. Check back soon, or get in touch with our team directly.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
