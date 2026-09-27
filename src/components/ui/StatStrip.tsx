import { cn } from "@/lib/utils";

export type Stat = {
  readonly label: string;
  readonly value: string;
};

/**
 * Horizontal data strip for the team-strength figures.
 *
 * Deliberately not a set of cards — the figures read as one row of data,
 * divided by hairline rules rather than boxed individually. Two columns on
 * phones, four from `sm` up.
 *
 * The rules are drawn as left/top borders on the cells themselves (rather than
 * as gaps showing a parent colour through) so the strip sits correctly over
 * photography as well as over a flat surface. The first cell of each row drops
 * its left rule and its left padding, which keeps the first figure aligned with
 * the copy above it.
 */
export function StatStrip({
  stats,
  tone = "dark",
  className,
}: {
  stats: readonly Stat[];
  /** `dark` sits on navy or photography, `light` on white or ink-50. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <dl
      className={cn(
        "grid grid-cols-2 sm:grid-cols-4",
        "[&>div]:py-4 [&>div]:pl-5 sm:[&>div]:py-5",
        // Vertical rule between columns — dropped for the first cell in a row.
        "[&>div]:border-l [&>div:nth-child(odd)]:border-l-0 [&>div:nth-child(odd)]:pl-0",
        "sm:[&>div:nth-child(odd)]:border-l sm:[&>div:nth-child(odd)]:pl-5",
        "sm:[&>div:first-child]:border-l-0 sm:[&>div:first-child]:pl-0",
        // Horizontal rule only on phones, where the strip wraps to two rows.
        "[&>div:nth-child(n+3)]:border-t sm:[&>div:nth-child(n+3)]:border-t-0",
        isDark
          ? "[&>div]:border-white/15"
          : "[&>div]:border-ink-200",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt
            className={cn(
              "text-label uppercase",
              isDark ? "text-navy-300" : "text-ink-500",
            )}
          >
            {stat.label}
          </dt>
          <dd
            className={cn(
              "font-display mt-2.5 text-stat font-semibold",
              isDark ? "text-white" : "text-navy-900",
            )}
          >
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
