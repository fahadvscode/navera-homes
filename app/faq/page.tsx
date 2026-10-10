import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { RegisterCta } from "@/components/RegisterCta";
import { DISPLAY_DATE, FAQS, PAGES, pageMeta } from "@/lib/content";
import { breadcrumbLd, faqLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.faq);

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({ name: PAGES.faq.h1, path: PAGES.faq.path, description: PAGES.faq.description }),
          faqLd(FAQS),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <header className="bg-brand-deep text-surface">
        <div className="page-wrap py-14 md:py-20">
          <Breadcrumbs current="FAQ" />
          <h1 className="mt-4 max-w-[18ch] font-display text-3xl text-surface md:text-5xl">{PAGES.faq.h1}</h1>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-text-on-dark">
            Last updated: {DISPLAY_DATE}
          </p>
          <p className="measure mt-4 leading-relaxed text-text-on-dark">
            These answers cover builder, price, lot sizes, launch, deposit, schools, and VIP access
            for Navera at Mayfield Village. Each one states what is known and what is still to be
            announced. Deposit details link with the{" "}
            <Link href="/pricing#deposit" className="underline">
              Navera Brampton prices
            </Link>{" "}
            page. School and Regal Crest questions link with the{" "}
            <Link href="/location#schools" className="underline">
              Navera at Mayfield Village location
            </Link>{" "}
            page.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="page-wrap">
          <FaqList items={FAQS} heading="h2" />
        </div>
      </section>
      <RegisterCta />
    </>
  );
}
