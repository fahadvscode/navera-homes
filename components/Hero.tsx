import Image from "next/image";
import Link from "next/link";
import { PAGES } from "@/lib/content";
import { AERIAL, MEDIA } from "@/lib/media";

export function Hero() {
  return (
    <section className="bg-brand-deep text-surface">
      <div className="page-wrap grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
        <div>
          <Image
            src={MEDIA.naveraTag}
            alt="Navera at Mayfield Village. A new home, a new era."
            width={676}
            height={343}
            priority
            className="h-auto w-56 md:w-72"
          />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-text-on-dark">
            Coming this fall · Priority Access open
          </p>
          <h1 className="mt-4 max-w-[16ch] font-display text-4xl text-surface md:text-5xl">
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
        <Image
          src={AERIAL.src}
          alt={AERIAL.alt}
          width={AERIAL.width}
          height={AERIAL.height}
          priority
          className="h-auto w-full rounded-[10px]"
        />
      </div>
    </section>
  );
}
