"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, CONSENT_KEY } from "@/lib/consent";
import { captureUtm } from "@/lib/utm";

export function CookieNotice() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const aboveMobileCta = pathname !== "/register" && pathname !== "/thank-you";

  useEffect(() => {
    captureUtm();
    try {
      setVisible(localStorage.getItem(CONSENT_KEY) === null);
    } catch {
      setVisible(false);
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* storage unavailable */
    }
    setVisible(false);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-x-3 z-50 md:inset-x-auto md:right-4 md:w-[22rem] ${aboveMobileCta ? "bottom-[5.5rem] md:bottom-4" : "bottom-4"}`}
    >
      <div className="flex items-center justify-between gap-3 rounded-xl bg-brand-deep px-3.5 py-3 text-text-on-dark shadow-lg">
        <p className="text-xs leading-snug">Analytics stay off until you allow them.</p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className="rounded-md bg-surface px-2.5 py-1.5 text-xs font-semibold text-brand-deep"
            onClick={() => choose("accepted")}
          >
            Allow
          </button>
          <button
            type="button"
            className="rounded-md px-2 py-1.5 text-xs font-semibold text-text-on-dark underline underline-offset-2"
            onClick={() => choose("declined")}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
