import Link from "next/link";
import { PAGES } from "@/lib/content";

export function Hero() {
  return (
    <section className="bg-brand-deep text-surface">
      <div className="page-wrap py-12 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-on-dark">
          Coming this fall · Priority Access open
        </p>
        <h1 className="mt-4 max-w-[16ch] font-display text-4xl text-surface md:text-6xl">
          {PAGES.home.h1}
        </h1>
        <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-text-on-dark">
          Detached homes by Digreen Homes at Countryside Drive and Torbram Road. Priority Access
          registration is free.{" "}
          <a href="#quick-facts" className="font-semibold text-surface underline underline-offset-4 md:hidden">
            See what is confirmed
          </a>
        </p>
        <div className="mt-8 hidden flex-wrap gap-3 md:flex">
          <Link href="/register" className="btn">
            Get Priority Access
          </Link>
          <a href="#quick-facts" className="btn btn-secondary">
            See what is confirmed
          </a>
        </div>
      </div>
    </section>
  );
}
