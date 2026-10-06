import { QUICK_FACTS } from "@/lib/content";
import { SpecDisclaimer } from "./Disclaimer";

export function QuickFacts() {
  return (
    <div>
      <div className="card overflow-x-auto">
        <table className="fact-table">
          <caption className="sr-only">Quick facts for Navera at Mayfield Village</caption>
          <tbody>
            {QUICK_FACTS.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SpecDisclaimer className="mt-4" />
    </div>
  );
}
