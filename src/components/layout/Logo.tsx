import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

/**
 * Company logo lock-up.
 *
 * Renders the official logo file — the mark, wordmark and tagline are baked
 * into the image, so no separate text is drawn beside it. The file has a
 * transparent background sized for the dark header and footer surfaces.
 */
export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  /** Preload the file when the logo paints first (the site header). */
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group flex min-w-0 items-center", className)}
      aria-label={`${siteConfig.name} — home`}
    >
      <Image
        src="/images/logo/khushi-enterprises-logo.png"
        alt={`${siteConfig.name} — Solar O&M • Performance Monitoring`}
        width={1000}
        height={186}
        sizes="240px"
        priority={priority}
        className="h-9 w-auto shrink-0 transition-[transform,height] duration-300 ease-[var(--ease-out-expo)] group-hover:scale-[1.03] sm:h-10 xl:h-11 group-data-[scrolled]/header:h-9"
      />
    </Link>
  );
}
