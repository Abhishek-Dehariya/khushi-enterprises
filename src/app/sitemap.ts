import type { MetadataRoute } from "next";
import { navItems, secondaryRoutes, siteConfig } from "@/data/site";

/**
 * Sitemap generated from the published routes — the primary navigation plus the
 * routes that sit outside it (`secondaryRoutes`) — so every live page is listed
 * without maintaining a second list.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    ...navItems.map((item) => item.href),
    ...secondaryRoutes.filter((route) => !navItems.some((item) => item.href === route)),
  ];

  return paths.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/solar-om" ? 0.9 : 0.7,
  }));
}
