import { Blocks } from "@/components/Blocks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FloorPlanCard } from "@/components/FloorPlanCard";
import { FloorPlanView } from "@/components/FloorPlanView";
import { JsonLd } from "@/components/JsonLd";
import { LotWidthDiagram } from "@/components/LotWidthDiagram";
import { RegisterCta } from "@/components/RegisterCta";
import { COMPARE_WHEN_RELEASED, FLOOR_PLAN_BLOCKS, FLOOR_PLAN_LEDE, PAGES, SERIES, pageMeta } from "@/lib/content";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.floorPlans);

export default function FloorPlansPage() {
  return (
    <>
      <FloorPlanView />
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.floorPlans.h1,
            path: PAGES.floorPlans.path,
            description: PAGES.floorPlans.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Floor plans", path: "/floor-plans" },
          ]),
        ]}
      />
      <header className="bg-brand-deep text-surface">
        <div className="page-wrap py-14 md:py-20">
          <Breadcrumbs current="Floor plans" />
          <h1 className="mt-4 max-w-[20ch] font-display text-3xl text-surface md:text-5xl">
            {PAGES.floorPlans.h1}
          </h1>
          <p className="measure mt-6 text-lg leading-relaxed text-text-on-dark">{FLOOR_PLAN_LEDE}</p>
        </div>
      </header>
      <section className="section">
        <div className="page-wrap">
          <Blocks
            blocks={FLOOR_PLAN_BLOCKS}
            after={{
              series: (
                <LotWidthDiagram title="Navera Brampton floor plans depend on 38-foot and 41-foot lot widths that are not yet drawn" />
              ),
              collection: (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {SERIES.map((series) => (
                    <FloorPlanCard key={series.name} name={series.name} rows={series.rows} />
                  ))}
                </div>
              ),
              compare: (
                <ul className="measure mt-4 list-disc space-y-2 pl-5">
                  {COMPARE_WHEN_RELEASED.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ),
            }}
          />
        </div>
      </section>
      <RegisterCta>
        <p className="measure mt-4 leading-relaxed text-text-on-dark">
          Ask to be told when Digreen Homes releases the 38 and 41 Series drawings.
        </p>
      </RegisterCta>
    </>
  );
}
