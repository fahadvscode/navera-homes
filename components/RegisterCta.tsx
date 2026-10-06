import Link from "next/link";
import type { ReactNode } from "react";

export function RegisterCta({ children }: { children?: ReactNode }) {
  return (
    <aside className="section bg-brand-deep text-surface">
      <div className="page-wrap">
        <h2 className="font-display text-3xl text-surface md:text-4xl">Register for Priority Access</h2>
        {children}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/register" className="btn">
            Register for Priority Access
          </Link>
          <Link href="/" className="btn btn-secondary">
            Navera at Mayfield Village
          </Link>
        </div>
      </div>
    </aside>
  );
}
