import Image from "next/image";
import { PAGES } from "@/lib/content";
import { AERIAL, MEDIA } from "@/lib/media";
import { LeadForm } from "./LeadForm";

export function Hero() {
  return (
    <section className="bg-brand-deep text-surface">
      <div className="page-wrap grid items-start gap-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-16">
        <div>
          <Image
            src={MEDIA.naveraTag}
            alt="Navera at Mayfield Village. A new home, a new era."
            width={676}
            height={343}
            priority
            className="h-auto w-40 max-w-full sm:w-56 lg:w-72"
          />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-text-on-dark lg:mt-6">
            Coming this fall · Priority Access open
          </p>
          <h1 className="mt-3 max-w-[18ch] font-display text-3xl text-surface lg:mt-4 lg:text-5xl">
            {PAGES.home.h1}
          </h1>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-text-on-dark lg:text-lg">
            Detached homes by Digreen Homes at Countryside Drive and Torbram Road. Priority Access
            registration is free.{" "}
            <a href="#quick-facts" className="font-semibold text-surface underline underline-offset-4">
              See what is confirmed
            </a>
          </p>
          <Image
            src={AERIAL.src}
            alt={AERIAL.alt}
            width={AERIAL.width}
            height={AERIAL.height}
            priority
            className="mt-6 hidden h-auto w-full max-w-full rounded-[10px] lg:block"
          />
        </div>
        <div className="card bg-surface p-4 text-text-primary sm:p-6">
          <h2 className="font-display text-2xl text-brand-primary">Get Priority Access</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            Free registration for floor plans, pricing, and release updates. It does not reserve a home.
          </p>
          <div className="mt-4">
            <LeadForm variant="hero" location="hero" />
          </div>
        </div>
        <Image
          src={AERIAL.src}
          alt={AERIAL.alt}
          width={AERIAL.width}
          height={AERIAL.height}
          className="h-auto w-full max-w-full rounded-[10px] lg:hidden"
        />
      </div>
    </section>
  );
}
