import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

/**
 * Default social sharing image. Replace the placeholder file at this path with
 * a company photograph (ideally 1200 × 630 px or larger) and every page picks
 * it up automatically.
 */
export const defaultOgImage = "/images/hero/hero-solar-field.png";

/**
 * Builds per-page metadata so every route gets a unique title, description,
 * canonical URL and Open Graph block. Used by all pages in the App Router.
 */
export function createMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
}: {
  title: string;
  description: string;
  /** Route path, e.g. "/solar-services". */
  path: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: "en_IN",
      title,
      description,
      url: path,
      images: [{ url: ogImage ?? defaultOgImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage ?? defaultOgImage],
    },
  };
}
