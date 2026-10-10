import Image from "next/image";
import Link from "next/link";
import { AREA_ICON_LINKS, MEDIA } from "@/lib/media";

export function AreaIcons() {
  return (
    <section className="relative overflow-hidden bg-pattern" aria-label="Nearby categories">
      <Image
        src={MEDIA.pattern}
        alt=""
        width={2879}
        height={923}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <ul className="page-wrap relative flex flex-wrap justify-center gap-x-8 gap-y-6 py-10">
        {AREA_ICON_LINKS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="flex w-24 flex-col items-center gap-2 text-center">
              <Image
                src={item.src}
                alt=""
                width={416}
                height={104}
                className="h-14 w-14 object-cover object-center"
              />
              <span className="text-sm font-semibold text-surface">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
