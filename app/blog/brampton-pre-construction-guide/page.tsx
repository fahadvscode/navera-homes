import { Blocks } from "@/components/Blocks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LotWidthDiagram } from "@/components/LotWidthDiagram";
import { RegisterCta } from "@/components/RegisterCta";
import { BLOG_BLOCKS, BLOG_LEDE, PAGES, SIGNING_QUESTIONS, pageMeta } from "@/lib/content";
import { articleLd, breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.blog);

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.blog.h1,
            path: PAGES.blog.path,
            description: PAGES.blog.description,
          }),
          articleLd,
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Pre-construction homes in Brampton", path: PAGES.blog.path },
          ]),
        ]}
      />
      <header className="bg-brand-deep text-surface">
        <div className="page-wrap py-14 md:py-20">
          <Breadcrumbs current="Buyer's guide" />
          <h1 className="mt-4 max-w-[20ch] font-display text-4xl text-surface md:text-5xl">{PAGES.blog.h1}</h1>
          <p className="measure mt-6 text-lg leading-relaxed text-text-on-dark">{BLOG_LEDE}</p>
        </div>
      </header>
      <article className="section">
        <div className="page-wrap">
          <Blocks
            blocks={BLOG_BLOCKS}
            after={{
              "lot-widths": (
                <LotWidthDiagram title="Pre-construction homes in Brampton include 38-foot and 41-foot lots at Navera at Mayfield Village" />
              ),
              questions: (
                <ol className="measure mt-4 list-decimal space-y-2 pl-5">
                  {SIGNING_QUESTIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              ),
            }}
          />
        </div>
      </article>
      <RegisterCta>
        <p className="measure mt-4 leading-relaxed text-text-on-dark">
          Priority Access registration for Navera at Mayfield Village is free and does not reserve a
          home.
        </p>
      </RegisterCta>
    </>
  );
}
