import { Blocks } from "@/components/Blocks";
import { RegisterCta } from "@/components/RegisterCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PAGES, TERMS_BLOCKS, pageMeta } from "@/lib/content";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.terms);

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.terms.h1,
            path: PAGES.terms.path,
            description: PAGES.terms.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Terms", path: "/terms" },
          ]),
        ]}
      />
      <header className="bg-brand-deep text-surface">
        <div className="page-wrap py-14 md:py-20">
          <Breadcrumbs current="Terms" />
          <h1 className="mt-4 font-display text-3xl text-surface md:text-5xl">{PAGES.terms.h1}</h1>
        </div>
      </header>
      <section className="section">
        <div className="page-wrap">
          <Blocks blocks={TERMS_BLOCKS} />
        </div>
      </section>
      <RegisterCta />
    </>
  );
}
