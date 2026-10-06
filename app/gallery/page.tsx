import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RegisterCta } from "@/components/RegisterCta";
import { GALLERY_COPY, LOCATION_DIAGRAM, LOT_DIAGRAM, PAGES, pageMeta } from "@/lib/content";
import { breadcrumbLd, imageLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.gallery);

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.gallery.h1,
            path: PAGES.gallery.path,
            description: PAGES.gallery.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
          imageLd(LOT_DIAGRAM),
          imageLd(LOCATION_DIAGRAM),
        ]}
      />
      <header className="bg-brand-deep text-surface">
        <div className="page-wrap py-14 md:py-20">
          <Breadcrumbs current="Gallery" />
          <h1 className="mt-4 max-w-[18ch] font-display text-4xl text-surface md:text-5xl">
            {PAGES.gallery.h1}
          </h1>
          <p className="measure mt-6 text-lg leading-relaxed text-text-on-dark">{GALLERY_COPY}</p>
        </div>
      </header>
      <section className="section">
        <div className="page-wrap">
          <h2 className="font-display text-3xl text-brand-primary">What is on this page today</h2>
          <p className="measure mt-4 leading-[1.7]">
            Navera Brampton renderings are not hosted here. There is no exterior, interior, or site
            plan image from Digreen Homes on this independent site. The two drawings below were made
            for this page. One compares the approximate 38-foot and 41-foot lot widths. The other is
            a location schematic for Countryside Drive and Torbram Road. Neither is a photograph and
            neither is a builder rendering.
          </p>
          <figure className="card mt-8 p-4">
            <Image
              src={LOT_DIAGRAM.path}
              alt="Navera Brampton renderings are not released; this diagram compares approximate 38-foot and 41-foot lots at Navera at Mayfield Village"
              width={640}
              height={280}
              unoptimized
            />
            <figcaption className="mt-3 text-sm text-text-muted">{LOT_DIAGRAM.caption}</figcaption>
          </figure>
          <figure className="card mt-6 p-4">
            <Image
              src={LOCATION_DIAGRAM.path}
              alt="Navera at Mayfield Village photos are not released; this schematic shows Countryside Drive and Torbram Road"
              width={640}
              height={360}
              unoptimized
            />
            <figcaption className="mt-3 text-sm text-text-muted">{LOCATION_DIAGRAM.caption}</figcaption>
          </figure>
        </div>
      </section>
      <RegisterCta>
        <p className="measure mt-4 leading-relaxed text-text-on-dark">
          Register to be notified when the builder releases renderings and a site plan.
        </p>
      </RegisterCta>
    </>
  );
}
