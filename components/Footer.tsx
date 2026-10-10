import Image from "next/image";
import Link from "next/link";
import { DISPLAY_DATE, NAV } from "@/lib/content";
import { BUILDER_SOCIAL } from "@/lib/media";
import { IndependenceDisclaimer, SpecDisclaimer } from "./Disclaimer";
import { LeadForm } from "./LeadForm";
import { FooterFormGate } from "./FooterFormGate";

const MORE = [
  { href: "/blog/brampton-pre-construction-guide", label: "pre-construction homes in Brampton" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-alt">
      <div className="page-wrap section">
        <FooterFormGate>
          <h2 className="font-display text-3xl text-brand-primary">Register for Priority Access</h2>
          <p className="measure mt-3 text-sm leading-relaxed text-text-muted">
            Free registration for floor plans, pricing, and release updates. It does not reserve a
            home or a price.
          </p>
          <div className="mt-6">
            <LeadForm variant="compact" location="footer" />
          </div>
        </FooterFormGate>
        <nav aria-label="Footer" className="mt-12">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="prose-link">
                  {item.href === "/" ? "Navera at Mayfield Village" : item.label}
                </Link>
              </li>
            ))}
            {MORE.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="prose-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8">
          <p className="text-sm font-semibold">Digreen Homes</p>
          <ul className="mt-3 flex gap-3">
            {BUILDER_SOCIAL.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <Image src={item.src} alt={item.label} width={30} height={30} className="h-8 w-8" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-sm font-semibold">Last updated: {DISPLAY_DATE}</p>
        <div className="mt-4 space-y-3">
          <IndependenceDisclaimer />
          <SpecDisclaimer />
        </div>
      </div>
    </footer>
  );
}
