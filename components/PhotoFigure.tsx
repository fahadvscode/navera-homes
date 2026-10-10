import Image from "next/image";
import type { SitePhoto } from "@/lib/media";

export function PhotoFigure({ photo, priority = false }: { photo: SitePhoto; priority?: boolean }) {
  return (
    <figure className="card overflow-hidden">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        priority={priority}
        className="h-auto w-full"
      />
      <figcaption className="p-4 text-sm leading-relaxed text-text-muted">{photo.caption}</figcaption>
    </figure>
  );
}
