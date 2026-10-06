import Link from "next/link";
import { DISPLAY_DATE, NAV } from "@/lib/content";
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
        <p className="mt-8 text-sm font-semibold">Last updated: {DISPLAY_DATE}</p>
        <div className="mt-4 space-y-3">
          <IndependenceDisclaimer />
          <SpecDisclaimer />
        </div>
      </div>
    </footer>
  );
}
