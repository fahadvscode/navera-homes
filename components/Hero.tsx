import Image from "next/image";
import { PAGES } from "@/lib/content";
import { LIFESTYLE_PHOTOS } from "@/lib/media";
import { LeadForm } from "./LeadForm";

const [title, subtitle] = PAGES.home.h1.split(" — ");
const family = LIFESTYLE_PHOTOS[0];

export function Hero() {
  return (
    <section className="relative isolate bg-brand-deep">
      <Image
        src={family.src}
        alt={family.alt}
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-brand-deep/45 lg:bg-gradient-to-r lg:from-brand-deep/70 lg:via-brand-deep/50 lg:to-brand-deep/40" />
      <div className="page-wrap relative grid items-center gap-8 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,26rem)] lg:gap-12 lg:py-16">
        <div>
          <h1 className="text-balance text-surface">
            <span className="block font-display text-[2.35rem] leading-[1.02] sm:text-5xl lg:text-6xl">
              {title}
            </span>
            {subtitle ? (
              <span className="mt-3 block max-w-[24ch] font-sans text-base font-normal leading-snug text-text-on-dark lg:text-lg">
                {`— ${subtitle}`}
              </span>
            ) : null}
          </h1>
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-text-on-dark lg:text-base">
            Coming this fall from Digreen Homes, at Countryside Drive and Torbram Road. Registration
            is free and does not reserve a home.{" "}
            <a href="#quick-facts" className="font-semibold text-surface underline underline-offset-4">
              See what is confirmed
            </a>
          </p>
        </div>
        <div className="hero-on-photo">
          <LeadForm variant="hero" location="hero" />
        </div>
      </div>
    </section>
  );
}
