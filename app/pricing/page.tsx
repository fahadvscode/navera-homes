import Link from "next/link";
import { Blocks } from "@/components/Blocks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SpecDisclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { DepositTable, PricingTable } from "@/components/PricingTable";
import { RegisterCta } from "@/components/RegisterCta";
import {
  FAQS,
  INVESTMENT_FACTORS,
  INVESTMENT_RISKS,
  ONTARIO_COSTS,
  PAGES,
  PRICING_BLOCKS,
  pageMeta,
} from "@/lib/content";
import { breadcrumbLd, offerLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.pricing);

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.pricing.h1,
            path: PAGES.pricing.path,
            description: PAGES.pricing.description,
          }),
          offerLd,
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />
      <header className="bg-brand-deep text-surface">
        <div className="page-wrap py-14 md:py-20">
          <Breadcrumbs current="Pricing" />
          <h1 className="mt-4 max-w-[16ch] font-display text-3xl text-surface md:text-5xl">
            {PAGES.pricing.h1}
          </h1>
          <p className="measure mt-6 text-lg leading-relaxed text-text-on-dark">{FAQS[3].a}</p>
          <p className="measure mt-4 text-sm leading-relaxed text-text-on-dark">
            Prices, sizes, specifications, and availability are subject to change without notice. Lot
            specifications are approximate and certain lots and configurations may be subject to
            premiums. E.&O.E. Information current as of October 5, 2026.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="page-wrap">
          <Blocks
            blocks={PRICING_BLOCKS}
            after={{
              "starting-price": <PricingTable />,
              deposit: (
                <>
                  <p className="measure mt-4 leading-[1.7]">{FAQS[6].a}</p>
                  <DepositTable />
                  <p className="measure mt-4 leading-[1.7]">
                    The deposit questions are also answered in the{" "}
                    <Link href="/faq#deposit" className="prose-link">
                      Navera Brampton FAQ
                    </Link>
                    .
                  </p>
                </>
              ),
              incentives: <SpecDisclaimer className="mt-4" />,
              "other-costs": (
                <>
                  <ul className="measure mt-4 list-disc space-y-2 pl-5">
                    {ONTARIO_COSTS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <SpecDisclaimer className="mt-4" />
                </>
              ),
              investment: (
                <>
                  <p className="measure mt-4 leading-[1.7]">{FAQS[11].a}</p>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <article className="card p-5">
                      <h3 className="text-lg text-brand-primary">Factors buyers weigh</h3>
                      <ul className="mt-3 list-disc space-y-2 pl-5">
                        {INVESTMENT_FACTORS.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                    <article className="card p-5">
                      <h3 className="text-lg text-brand-primary">Risks to weigh</h3>
                      <ul className="mt-3 list-disc space-y-2 pl-5">
                        {INVESTMENT_RISKS.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  </div>
                  <SpecDisclaimer className="mt-4" />
                </>
              ),
            }}
          />
        </div>
      </section>
      <RegisterCta>
        <p className="measure mt-4 leading-relaxed text-text-on-dark">
          Registrants are told when Digreen Homes releases pricing beyond the starting figure.
        </p>
      </RegisterCta>
    </>
  );
}
