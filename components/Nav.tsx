import Link from "next/link";
import { NAV } from "@/lib/content";

export function Nav() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="page-wrap flex items-center justify-between gap-6 py-4">
        <Link href="/" aria-label="Navera at Mayfield Village, home" className="shrink-0">
          <span className="block font-display text-[1.7rem] leading-none text-brand-primary">Navera</span>
          <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
            at Mayfield Village
          </span>
          <span className="mt-2 block h-px w-10 bg-brand-accent" aria-hidden="true" />
        </Link>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-[10px] border border-border px-3 py-2 text-sm font-semibold text-brand-primary">
            Menu
          </summary>
          <nav aria-label="Primary" className="card absolute right-0 z-30 mt-2 min-w-48 p-3">
            <ul className="space-y-2 text-sm font-semibold text-brand-primary">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="underline-offset-4 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-sm font-semibold text-brand-primary">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
