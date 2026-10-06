export function LotWidthDiagram({ title }: { title: string }) {
  return (
    <figure className="card mt-6 p-4 md:p-6">
      <svg
        viewBox="0 0 640 280"
        width="640"
        height="280"
        role="img"
        aria-labelledby="lot-title lot-desc"
        className="h-auto w-full"
      >
        <title id="lot-title">{title}</title>
        <desc id="lot-desc">
          Two rectangles. The left lot is marked approximately 38 feet wide. The right lot is marked
          approximately 41 feet wide, three feet wider. This is a schematic, not a floor plan.
        </desc>
        <rect x="0" y="0" width="640" height="280" fill="#FAF7F0" />
        <rect x="36" y="48" width="228" height="150" fill="#EFE9DB" stroke="#2F4A3A" strokeWidth="2" />
        <rect x="320" y="48" width="246" height="150" fill="#EFE9DB" stroke="#2F4A3A" strokeWidth="2" />
        <text x="150" y="128" textAnchor="middle" fill="#1B1F1C" fontSize="18" fontFamily="Georgia, serif">
          38 ft
        </text>
        <text x="443" y="128" textAnchor="middle" fill="#1B1F1C" fontSize="18" fontFamily="Georgia, serif">
          41 ft
        </text>
        <line x1="566" y1="48" x2="566" y2="198" stroke="#8F5B38" strokeWidth="2" />
        <line x1="560" y1="48" x2="572" y2="48" stroke="#8F5B38" strokeWidth="2" />
        <line x1="560" y1="198" x2="572" y2="198" stroke="#8F5B38" strokeWidth="2" />
        <text x="590" y="128" fill="#8F5B38" fontSize="14" fontFamily="Georgia, serif">
          +3 ft
        </text>
        <text x="36" y="230" fill="#5A625C" fontSize="14" fontFamily="Georgia, serif">
          Approximate widths only. Plans are to be announced.
        </text>
      </svg>
      <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">
        The 41-foot series is about three feet wider than the 38-foot series. Floor plans for Navera
        at Mayfield Village have not been released.
      </figcaption>
    </figure>
  );
}
