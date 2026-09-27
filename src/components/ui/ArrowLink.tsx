import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const tones = {
  /* Dark text on light surfaces — turns solar on hover. */
  light: "text-navy-900 hover:text-solar-700",
  /* White text on navy panels — turns solar on hover. */
  dark: "text-white hover:text-solar-400",
  /* Already accented, for use inside cards that carry their own hover. */
  accent: "text-solar-700 hover:text-solar-600",
} as const;

/**
 * Inline "action" link with an arrow that steps to the right on hover.
 *
 * `parentHover` lets a card own the interaction: the arrow also moves when the
 * card around it is hovered, so the whole tile reads as one target. The card
 * must set `group/card` for that to apply.
 *
 * `stretch` expands the link's hit area to fill its nearest positioned
 * ancestor, which makes a whole card clickable while keeping exactly one link
 * in the accessibility tree.
 */
export function ArrowLink({
  href,
  children,
  tone = "light",
  parentHover = false,
  stretch = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: keyof typeof tones;
  parentHover?: boolean;
  stretch?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/arrow inline-flex min-h-8 items-center gap-2 py-1 text-detail font-semibold tracking-[0.01em] transition-colors duration-200",
        tones[tone],
        stretch && "after:absolute after:inset-0 after:content-['']",
        className,
      )}
    >
      {children}
      <ArrowRight
        className={cn(
          "h-4 w-4 transition-transform duration-200 ease-[var(--ease-out-expo)] group-hover/arrow:translate-x-1",
          parentHover && "group-hover/card:translate-x-1",
        )}
      />
    </Link>
  );
}
