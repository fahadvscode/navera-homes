import { Blocks } from "@/components/Blocks";
import { RegisterCta } from "@/components/RegisterCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PAGES, PRIVACY_BLOCKS, pageMeta } from "@/lib/content";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.privacy);

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.privacy.h1,
            path: PAGES.privacy.path,
            description: PAGES.privacy.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Privacy", path: "/privacy" },
          ]),
        ]}
      />
      <header className="bg-brand-deep text-surface">
        <div className="page-wrap py-14 md:py-20">
          <Breadcrumbs current="Privacy" />
          <h1 className="mt-4 font-display text-3xl text-surface md:text-5xl">{PAGES.privacy.h1}</h1>
        </div>
      </header>
      <section className="section">
        <div className="page-wrap">
          <Blocks blocks={PRIVACY_BLOCKS} />
          <p className="measure mt-6 leading-[1.7]">
            Privacy requests:{" "}
            <a className="prose-link" href="mailto:privacy@naverahomes.com">
              privacy@naverahomes.com
            </a>
          </p>
        </div>
      </section>
      <RegisterCta />
    </>
  );
}
