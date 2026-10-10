import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { FAQS, PAGES, PRIORITY_BENEFITS, pageMeta } from "@/lib/content";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.register);

export default function RegisterPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.register.h1,
            path: PAGES.register.path,
            description: PAGES.register.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Register", path: "/register" },
          ]),
        ]}
      />
      <header className="bg-brand-deep text-surface">
        <div className="page-wrap py-14 md:py-16">
          <Breadcrumbs current="Register" />
          <h1 className="mt-4 max-w-[18ch] font-display text-3xl text-surface md:text-5xl">
            {PAGES.register.h1}
          </h1>
        </div>
      </header>
      <section className="section">
        <div className="page-wrap grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-5 md:p-8">
            <LeadForm location="register" />
          </div>
          <div>
            <h2 className="font-display text-3xl text-brand-primary">What registration includes</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {PRIORITY_BENEFITS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="measure mt-6 leading-[1.7]">{FAQS[9].a}</p>
            <p className="measure mt-4 leading-[1.7]">{FAQS[10].a}</p>
          </div>
        </div>
      </section>
    </>
  );
}
