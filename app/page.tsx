import Link from "next/link";
import { ConfirmedVsTba } from "@/components/ConfirmedVsTba";
import { FaqList } from "@/components/FaqList";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { LotWidthDiagram } from "@/components/LotWidthDiagram";
import { QuickFacts } from "@/components/QuickFacts";
import { SpecDisclaimer } from "@/components/Disclaimer";
import { FadeIn } from "@/components/FadeIn";
import {
  BUILDER_COPY,
  FAQS,
  HOME_ABOUT,
  HOME_FAQ_IDS,
  LOT_WIDTH_COPY,
  NEIGHBOURHOOD,
  PAGES,
  PRIORITY_BENEFITS,
  WHY_REGISTER_NOTE,
  faqsById,
  pageMeta,
} from "@/lib/content";
import { developerLd, faqLd, orgLd, projectLd, websiteLd } from "@/lib/schema";
import { RichText } from "@/components/RichText";

export const metadata = pageMeta(PAGES.home);

export default function HomePage() {
  const homeFaqs = faqsById(HOME_FAQ_IDS);
  return (
    <>
      <JsonLd data={[websiteLd, orgLd, projectLd, developerLd, faqLd(homeFaqs)]} />
      <Hero />
      <section className="section">
        <div className="page-wrap">
          <p className="measure text-lg leading-[1.7]">{FAQS[0].a}</p>
          <p className="measure mt-4 leading-[1.7]">
            Use the links below to go straight to{" "}
            <Link href="/floor-plans" className="prose-link">
              Navera floor plans
            </Link>
            ,{" "}
            <Link href="/pricing" className="prose-link">
              Navera Brampton prices
            </Link>
            , the{" "}
            <Link href="/location" className="prose-link">
              Navera at Mayfield Village location
            </Link>
            , the{" "}
            <Link href="/faq" className="prose-link">
              Navera Brampton FAQ
            </Link>
            , or a longer look at{" "}
            <Link href="/blog/brampton-pre-construction-guide" className="prose-link">
              pre-construction homes in Brampton
            </Link>
            .
          </p>
        </div>
      </section>
      <section id="quick-facts" className="section bg-surface-alt">
        <div className="page-wrap">
          <h2 className="font-display text-3xl text-brand-primary md:text-4xl">Quick facts</h2>
          <div className="mt-6">
            <QuickFacts />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="page-wrap">
          <h2 className="font-display text-3xl text-brand-primary md:text-4xl">
            About Navera at Mayfield Village
          </h2>
          {HOME_ABOUT.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="measure mt-4 leading-[1.7]">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <FadeIn>
        <section className="section bg-surface-alt">
          <div className="page-wrap">
            <h2 className="max-w-[28ch] font-display text-3xl text-brand-primary md:text-4xl">
              What is confirmed vs. still to be announced
            </h2>
            <p className="measure mt-4 leading-[1.7]">
              Confirmed rows come from Digreen Homes&apos; Navera information. Open items stay
              labelled until the builder publishes them.
            </p>
            <ConfirmedVsTba />
            <SpecDisclaimer className="mt-4" />
          </div>
        </section>
      </FadeIn>
      <section className="section">
        <div className="page-wrap">
          <h2 className="max-w-[24ch] font-display text-3xl text-brand-primary md:text-4xl">
            38-foot vs 41-foot lots: what the difference means
          </h2>
          <p className="measure mt-4 leading-[1.7]">{LOT_WIDTH_COPY}</p>
          <LotWidthDiagram title="Navera at Mayfield Village 38-foot and 41-foot lot width diagram" />
          <SpecDisclaimer className="mt-4" />
        </div>
      </section>
      <section className="section bg-surface-alt">
        <div className="page-wrap">
          <h2 className="font-display text-3xl text-brand-primary md:text-4xl">Why people register early</h2>
          <p className="measure mt-4 leading-[1.7]">
            Digreen Homes describes these Priority Access benefits for Navera at Mayfield Village.
            They are information benefits, not a discount and not a hold.
          </p>
          <ul className="measure mt-4 list-disc space-y-2 pl-5">
            {PRIORITY_BENEFITS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="measure mt-4 font-semibold leading-[1.7]">{WHY_REGISTER_NOTE}</p>
          <Link href="/register" className="btn mt-6">
            Get Priority Access
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="page-wrap">
          <h2 className="font-display text-3xl text-brand-primary md:text-4xl">Neighbourhood at a glance</h2>
          <p className="measure mt-4 leading-[1.7]">
            Drive times, schools, and the Regal Crest distinction are on the{" "}
            <Link href="/location" className="prose-link">
              Navera at Mayfield Village location
            </Link>{" "}
            page.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {NEIGHBOURHOOD.map((card) => (
              <article key={card.title} className="card p-5">
                <h3 className="text-lg text-brand-primary">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-surface-alt">
        <div className="page-wrap">
          <h2 className="font-display text-3xl text-brand-primary md:text-4xl">About the builder</h2>
          <RichText text={BUILDER_COPY} />
        </div>
      </section>
      <section className="section">
        <div className="page-wrap">
          <h2 className="font-display text-3xl text-brand-primary md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="measure mt-4 leading-[1.7]">
            The full set of 20 is on the{" "}
            <Link href="/faq" className="prose-link">
              Navera Brampton FAQ
            </Link>
            .
          </p>
          <FaqList items={homeFaqs} heading="h3" />
        </div>
      </section>
      <section className="section bg-surface-alt">
        <div className="page-wrap">
          <h2 className="font-display text-3xl text-brand-primary md:text-4xl">
            Register for Priority Access
          </h2>
          <p className="measure mt-4 leading-[1.7]">
            Free registration for floor plans, pricing, and release updates. It does not reserve a home.
          </p>
          <div className="card mt-6 p-5 md:p-8">
            <LeadForm location="home" />
          </div>
        </div>
      </section>
    </>
  );
}
