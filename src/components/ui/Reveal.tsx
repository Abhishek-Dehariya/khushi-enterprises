import { cn } from "@/lib/utils";

/**
 * Scroll reveal wrapper.
 *
 * The fade-up is driven by a CSS scroll-driven animation (see `reveal-on-scroll`
 * in globals.css), so this stays a server component with zero JavaScript. In
 * browsers without support the content simply renders in place, and
 * `prefers-reduced-motion` disables the motion entirely.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  return <Tag className={cn("reveal-on-scroll", className)}>{children}</Tag>;
}

/**
 * On-load entrance used only in the hero, where content is above the fold and
 * so never triggers a scroll reveal.
 *
 * `step` staggers the sequence in 90ms increments — heading, paragraph, buttons,
 * stats — which keeps the whole entrance inside ~0.9s. Reduced motion clears
 * both the duration and the delay (globals.css), so nothing is left invisible.
 */
export function Entrance({
  children,
  className,
  step = 0,
  variant = "rise",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  step?: number;
  /** `rise` fades and slides up; `settle` fades in from a slight scale. */
  variant?: "rise" | "settle";
  as?: "div" | "p" | "h1" | "dl" | "figure";
}) {
  return (
    <Tag
      className={cn(
        variant === "rise" ? "animate-rise" : "animate-settle",
        className,
      )}
      style={step > 0 ? { animationDelay: `${step * 90}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
