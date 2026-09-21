import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container, SectionKicker } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { contactPageContent } from "@/content/pages";
import { siteConfig } from "@/content/nav";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Victory Information (Pvt) Ltd — request a demo or ask about our HR software solutions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 py-20 sm:py-28">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <SectionKicker>{contactPageContent.hero.kicker}</SectionKicker>
            <h1 className="mt-5 text-balance text-4xl font-black text-white sm:text-5xl">{contactPageContent.hero.title}</h1>
            <p className="mt-5 text-balance text-slate-300">{contactPageContent.hero.description}</p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-4">
                <div className="rounded-2xl bg-brand-950 p-8 text-white">
                  <h3 className="text-lg font-bold">Contact</h3>
                  <ul className="mt-6 space-y-5 text-sm text-slate-300">
                    <li className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                      <span>
                        Phone: {siteConfig.phone1}
                        <br />
                        Mobile: {siteConfig.phone2}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                      <span>
                        {siteConfig.email1}
                        <br />
                        {siteConfig.email2}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                      <span>{siteConfig.address}</span>
                    </li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <iframe
                    title="Victory Information location"
                    src="https://www.google.com/maps?q=No+150+Templers+Road+Mt+Lavinia+Sri+Lanka&output=embed"
                    className="h-64 w-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
