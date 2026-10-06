import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="page-wrap py-10">
        <h1 className="font-display text-4xl text-brand-primary">Page not found</h1>
        <p className="measure mt-4 leading-[1.7]">
          This address is not part of the Navera at Mayfield Village information site.
        </p>
        <p className="mt-6">
          <Link href="/" className="prose-link">
            Navera at Mayfield Village
          </Link>
        </p>
      </div>
    </section>
  );
}
