import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const BASE = "https://geniclique.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICES.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${BASE}/work`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/studio`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.8 },
  ];
}
