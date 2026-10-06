import { CONFIRMED, TO_BE_ANNOUNCED } from "@/lib/content";

export function ConfirmedVsTba() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <div className="card p-5">
        <h3 className="text-lg text-brand-primary">Confirmed</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
          {CONFIRMED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="card p-5">
        <h3 className="text-lg text-brand-primary">To be announced</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
          {TO_BE_ANNOUNCED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
