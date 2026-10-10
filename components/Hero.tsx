import Image from "next/image";
import { PAGES } from "@/lib/content";
import { AERIAL } from "@/lib/media";
import { LeadForm } from "./LeadForm";

export function Hero() {
  return (
    <section className="bg-surface">
      <div className="relative h-36 sm:h-64 lg:h-[26rem]">
        <Image
          src={AERIAL.src}
          alt={AERIAL.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
      </div>
      <div className="page-wrap grid items-start gap-6 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:gap-16 lg:py-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent-ink">
            Coming this fall · Priority Access open
          </p>
          <h1 className="mt-2 font-display text-[1.65rem] leading-tight text-brand-primary sm:text-4xl lg:mt-3 lg:max-w-[14ch] lg:text-5xl">
            {PAGES.home.h1}
          </h1>
          <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-text-muted lg:mt-4 lg:text-base">
            Detached homes by Digreen Homes at Countryside Drive and Torbram Road. Registration is
            free and does not reserve a home.{" "}
            <a href="#quick-facts" className="prose-link">
              See what is confirmed
            </a>
          </p>
        </div>
        <LeadForm variant="hero" location="hero" />
      </div>
    </section>
  );
}
