import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/content";
import { leadSchema } from "@/lib/lead-schema";
import { createAnonClient } from "@/lib/supabase";

export async function POST(req: Request) {
  const parsed = leadSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });
  const { website, elapsed_ms, ...lead } = parsed.data;
  if (website) return NextResponse.json({ ok: false }, { status: 400 });
  if (elapsed_ms < 3000) return NextResponse.json({ ok: false }, { status: 400 });

  const supabase = createAnonClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 500 });

  const { error } = await supabase.from("navera_homes_leads").insert({
    ...lead,
    source: SITE_URL,
    consent_timestamp: new Date().toISOString(),
  });
  if (error) return NextResponse.json({ ok: false }, { status: 500 });
  return NextResponse.json({ ok: true });
}
