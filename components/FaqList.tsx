import type { Faq } from "@/lib/content";

export function FaqList({ items, heading = "h2" }: { items: Faq[]; heading?: "h2" | "h3" }) {
  const Heading = heading;
  return (
    <div className="mt-6 space-y-3">
      {items.map((faq) => (
        <details key={faq.id} id={faq.id} className="faq card px-5 py-4" open>
          <summary>
            <Heading className="inline text-xl text-brand-primary">{faq.q}</Heading>
          </summary>
          <p className="measure mt-3 leading-[1.7]">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
