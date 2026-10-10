import Image from "next/image";
import { PAGES } from "@/lib/content";
import { AERIAL } from "@/lib/media";
import { LeadForm } from "./LeadForm";

const [title, subtitle] = PAGES.home.h1.split(" — ");

export function Hero() {
  return (
    <section className="relative bg-surface">
      <div className="relative h-52 sm:h-72 lg:h-[32rem]">
        <Image
          src="/images/media/aerial-hero.jpg"
          alt={AERIAL.alt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/75 to-transparent lg:bg-gradient-to-l lg:from-brand-deep/50 lg:via-transparent lg:to-transparent" />
      </div>
      <div className="page-wrap relative -mt-8 pb-2 sm:-mt-12 lg:-mt-[28rem] lg:flex lg:justify-end lg:pb-10">
        <div className="w-full rounded-2xl bg-surface p-5 shadow-[0_18px_50px_rgba(29,47,37,0.35)] sm:p-7 lg:w-[26.5rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent-ink">
            Coming this fall
          </p>
          <h1 className="mt-2 text-brand-primary">
            <span className="block font-display text-[1.85rem] leading-[1.05] sm:text-[2.15rem]">
              {title}
            </span>
            {subtitle ? (
              <span className="mt-2 block font-sans text-sm font-normal leading-snug text-text-muted">
                — {subtitle}
              </span>
            ) : null}
          </h1>
          <dl className="mt-4 grid grid-cols-3 gap-2 border-y border-border py-3">
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-text-muted">From</dt>
              <dd className="font-display text-base leading-tight text-brand-primary">$999,999</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-text-muted">Lots</dt>
              <dd className="font-display text-base leading-tight text-brand-primary">38' & 41'</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-text-muted">Place</dt>
              <dd className="font-display text-base leading-tight text-brand-primary">Brampton</dd>
            </div>
          </dl>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Detached homes by Digreen Homes at Countryside Drive and Torbram Road. Free, and it does
            not reserve a home.{" "}
            <a href="#quick-facts" className="prose-link">
              See what is confirmed
            </a>
          </p>
          <div className="mt-4">
            <LeadForm variant="hero" location="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
