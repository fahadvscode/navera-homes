"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, CONSENT_KEY } from "@/lib/consent";
import { captureUtm } from "@/lib/utm";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

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
    <div className="border-b border-border bg-surface-alt">
      <div className="page-wrap flex flex-wrap items-center justify-between gap-3 py-3">
        <p className="max-w-3xl text-sm leading-relaxed">
          Analytics (Google Analytics, Tag Manager, and Meta Pixel) stay off until you accept. The
          choice is stored in this browser.
        </p>
        <div className="flex gap-3">
          <button type="button" className="btn" onClick={() => choose("accepted")}>
            Accept
          </button>
          <button type="button" className="btn btn-light" onClick={() => choose("declined")}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
