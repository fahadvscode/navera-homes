import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

const ai = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...ai.map((userAgent) => ({ userAgent, allow: "/" })),
      { userAgent: "*", allow: "/", disallow: ["/thank-you", "/api/"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
