import { SpecDisclaimer } from "./Disclaimer";

export function FloorPlanCard({ name, rows }: { name: string; rows: readonly (readonly [string, string])[] }) {
  return (
    <article className="card p-5">
      <h3 className="font-display text-2xl text-brand-primary">{name}</h3>
      <table className="fact-table mt-3">
        <caption className="sr-only">{name} details that are confirmed or still to be announced</caption>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SpecDisclaimer className="mt-4" />
    </article>
  );
}
