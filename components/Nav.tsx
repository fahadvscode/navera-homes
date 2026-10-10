import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/lib/content";
import { MEDIA } from "@/lib/media";

export function Nav() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="page-wrap flex items-center justify-between gap-6 py-4">
        <Link href="/" aria-label="Navera at Mayfield Village, home" className="shrink-0">
          <Image
            src={MEDIA.naveraBlk}
            alt="Navera at Mayfield Village"
            width={649}
            height={165}
            priority
            className="h-9 w-auto max-w-[11.5rem] sm:h-11 sm:max-w-none"
          />
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
