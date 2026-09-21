import { Button, Container } from "@/components/ui";

export function CtaBanner({
  title = "See it running on your own workforce data",
  description = "Book a walkthrough with our team — no commitment required.",
  ctaLabel = "Request a Demo",
  ctaHref = "/contact",
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-brand-950 via-brand-800 to-brand-700 py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-grid px-8 py-14 text-center sm:px-16">
          <h2 className="text-balance text-3xl font-black text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-slate-300">{description}</p>
          <div className="mt-8 flex justify-center">
            <Button href={ctaHref} variant="secondary">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
