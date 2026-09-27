import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

/**
 * Company logo lock-up.
 *
 * Rendered as a drawn mark plus a typographic wordmark so the site never shows
 * a fake logo. To use the official logo file instead, place it at
 * /public/images/logo/ and swap the <LogoMark /> below for a next/image.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-10 w-10 shrink-0", className)}
      role="img"
      aria-label={`${siteConfig.name} logo`}
    >
      <rect width="40" height="40" rx="3" fill="#0f1c2e" />
      <path d="M7 15.6 9.1 8.8h15.4l2.1 6.8H7Z" fill="#e97a13" />
      <path
        d="M13.7 8.8 12 15.6M20.5 8.8l1.7 6.8"
        stroke="#0f1c2e"
        strokeWidth="1.3"
      />
      <path
        d="M19.4 15.6V24.4"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13.4 24.4h12"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  tone = "light",
  withSubline = true,
}: {
  className?: string;
  /** `light` = dark text for light headers, `dark` = white text for navy panels. */
  tone?: "light" | "dark";
  withSubline?: boolean;
}) {
  const isDark = tone === "dark";

  return (
    <Link
      href="/"
      className={cn("group flex min-w-0 items-center gap-2.5 sm:gap-3", className)}
      aria-label={`${siteConfig.name} — home`}
    >
      <LogoMark className="h-9 w-9 transition-[transform,height,width] duration-300 ease-[var(--ease-out-expo)] group-hover:scale-[1.03] sm:h-10 sm:w-10 xl:h-11 xl:w-11 group-data-[scrolled]/header:h-9 group-data-[scrolled]/header:w-9" />
      <span className="flex min-w-0 flex-col">
        <span
          className={cn(
            "font-display text-[0.95rem] leading-none font-bold tracking-[0.02em] whitespace-nowrap uppercase sm:text-[1.02rem] xl:text-[1.14rem]",
            isDark ? "text-white" : "text-navy-900",
          )}
        >
          Khushi Enterprises
        </span>
        {withSubline ? (
          <span
            className={cn(
              "mt-1.5 text-[7.5px] leading-snug font-semibold tracking-[0.13em] uppercase min-[400px]:truncate min-[400px]:leading-none sm:text-[8.5px] sm:tracking-[0.19em]",
              isDark ? "text-navy-300" : "text-ink-500",
            )}
          >
            Solar · Electrical · Fabrication
          </span>
        ) : null}
      </span>
    </Link>
  );
}
