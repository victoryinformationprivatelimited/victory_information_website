import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, siteConfig } from "@/content/nav";
import { solutions } from "@/content/solutions";
import { Container } from "./ui";
import { LogoLight } from "./Logo";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300">
      <Container className="grid gap-10 py-16 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/">
            <LogoLight />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Sri Lanka&apos;s fastest-growing HR technology company, building HRIS, payroll and workforce platforms
            trusted by 600+ organizations island-wide.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navItems
              .filter((i) => !i.children)
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Solutions</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {solutions.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="text-slate-400 hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>
                {siteConfig.phone1}
                <br />
                {siteConfig.phone2}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>
                {siteConfig.email1}
                <br />
                {siteConfig.email2}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} Victory Information (Pvt) Ltd. All rights reserved.</span>
          <span>Built with care in Sri Lanka.</span>
        </Container>
      </div>
    </footer>
  );
}
