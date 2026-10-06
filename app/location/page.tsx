import Link from "next/link";
import { Blocks } from "@/components/Blocks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DriveTimesTable } from "@/components/DriveTimesTable";
import { JsonLd } from "@/components/JsonLd";
import { LocationMap } from "@/components/LocationMap";
import { LocationSchematic } from "@/components/LocationSchematic";
import { RegisterCta } from "@/components/RegisterCta";
import { FAQS, LOCATION_BLOCKS, PAGES, pageMeta } from "@/lib/content";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.location);

export default function LocationPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.location.h1,
            path: PAGES.location.path,
            description: PAGES.location.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Location", path: "/location" },
          ]),
        ]}
      />
      <header className="bg-brand-deep text-surface">
        <div className="page-wrap py-14 md:py-20">
          <Breadcrumbs current="Location" />
          <h1 className="mt-4 max-w-[22ch] font-display text-4xl text-surface md:text-5xl">
            {PAGES.location.h1}
          </h1>
          <p className="measure mt-6 text-lg leading-relaxed text-text-on-dark">{FAQS[2].a}</p>
        </div>
      </header>
      <section className="section">
        <div className="page-wrap">
          <Blocks
            blocks={LOCATION_BLOCKS}
            after={{
              map: (
                <>
                  <LocationMap />
                  <LocationSchematic title="Navera at Mayfield Village location schematic at Countryside Drive and Torbram Road" />
                </>
              ),
              "drive-times": <DriveTimesTable />,
              schools: (
                <p className="measure mt-4 leading-[1.7]">
                  School questions are also in the{" "}
                  <Link href="/faq#schools" className="prose-link">
                    Navera Brampton FAQ
                  </Link>
                  .
                </p>
              ),
              "same-name": (
                <div className="card mt-4 border-brand-accent p-5">
                  <p className="measure leading-[1.7]">{FAQS[12].a}</p>
                  <p className="measure mt-3 text-sm">
                    The same answer is in the{" "}
                    <Link href="/faq#regal-crest" className="prose-link">
                      Navera Brampton FAQ
                    </Link>
                    .
                  </p>
                </div>
              ),
            }}
          />
        </div>
      </section>
      <RegisterCta>
        <p className="measure mt-4 leading-relaxed text-text-on-dark">
          Registration is for release updates. It does not change the location or hold a lot.
        </p>
      </RegisterCta>
    </>
  );
}
