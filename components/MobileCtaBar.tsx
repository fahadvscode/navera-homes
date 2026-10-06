"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileCtaBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/register" || pathname === "/thank-you") return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t bg-surface p-3 md:hidden ${scrolled ? "border-brand-primary" : "border-border"}`}
    >
      <Link href="/register" className="btn w-full">
        Get Priority Access
      </Link>
    </div>
  );
}
