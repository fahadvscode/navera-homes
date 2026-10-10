import Image from "next/image";
import { PAGES } from "@/lib/content";
import { LIFESTYLE_PHOTOS } from "@/lib/media";
import { LeadForm } from "./LeadForm";

const [title, subtitle] = PAGES.home.h1.split(" — ");
const family = LIFESTYLE_PHOTOS[0];

export function Hero() {
  return (
    <section className="relative isolate bg-brand-deep lg:min-h-[40rem]">
      <Image
        src={family.src}
        alt={family.alt}
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-[center_22%] lg:object-[68%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/80 via-brand-deep/35 to-brand-deep/75 lg:bg-gradient-to-r lg:from-brand-deep/88 lg:via-brand-deep/45 lg:to-brand-deep/15" />
      <div className="page-wrap relative grid items-center gap-8 py-10 lg:min-h-[40rem] lg:grid-cols-[minmax(0,1fr)_minmax(19rem,23.5rem)] lg:gap-16 lg:py-16">
        <div>
          <h1 className="text-balance text-surface">
            <span className="block max-w-[12ch] font-display text-[2.6rem] leading-[0.98] sm:text-6xl lg:text-[4.25rem]">
              {title}
            </span>
            {subtitle ? (
              <span className="mt-4 block max-w-[28ch] font-sans text-base font-normal leading-snug text-text-on-dark lg:text-lg">
                {`— ${subtitle}`}
              </span>
            ) : null}
          </h1>
          <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-text-on-dark lg:text-base">
            Coming this fall from Digreen Homes, at Countryside Drive and Torbram Road. Registration
            is free and does not reserve a home.{" "}
            <a href="#quick-facts" className="font-semibold text-surface underline underline-offset-4">
              See what is confirmed
            </a>
          </p>
        </div>
        <div className="rounded-2xl bg-surface p-4 text-text-primary shadow-[0_20px_50px_rgb(29_47_37_/_0.28)] sm:p-5">
          <LeadForm variant="hero" location="hero" />
        </div>
      </div>
    </section>
  );
}
