import Image from "next/image";
import { PAGES } from "@/lib/content";
import { AERIAL } from "@/lib/media";
import { LeadForm } from "./LeadForm";

const [title, subtitle] = PAGES.home.h1.split(" — ");

export function Hero() {
  return (
    <section className="bg-surface lg:grid lg:grid-cols-[minmax(0,1.25fr)_minmax(22rem,30rem)]">
      <div className="relative h-72 sm:h-96 lg:h-auto lg:min-h-[40rem]">
        <Image
          src="/images/media/aerial-hero.jpg"
          alt={AERIAL.alt}
          fill
          priority
          unoptimized
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover object-[center_68%]"
        />
      </div>
      <div className="flex flex-col justify-center px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        <h1 className="text-balance text-brand-primary">
          <span className="block font-display text-[2.35rem] leading-[1.02] sm:text-5xl">{title}</span>
          {subtitle ? (
            <span className="mt-3 block max-w-[28ch] font-sans text-base font-normal leading-snug text-text-muted">
              {`— ${subtitle}`}
            </span>
          ) : null}
        </h1>
        <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-text-muted">
          Coming this fall from Digreen Homes, at Countryside Drive and Torbram Road. Registration
          is free and does not reserve a home.{" "}
          <a href="#quick-facts" className="prose-link">
            See what is confirmed
          </a>
        </p>
        <div className="mt-6">
          <LeadForm variant="hero" location="hero" />
        </div>
      </div>
    </section>
  );
}
