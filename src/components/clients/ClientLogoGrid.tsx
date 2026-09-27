import Image from "next/image";
import { clients } from "@/data/clients";
import { cn } from "@/lib/utils";

/**
 * Client & project association grid.
 *
 * Where a real logo file is available (set in `src/data/clients.ts`) the logo is
 * displayed, de-saturated at rest and brought to full colour on hover so the
 * grid reads as one set rather than as competing brand marks. Otherwise the
 * organisation name is set as a typographic tile — the site never shows a drawn
 * or imitation logo.
 */
export function ClientLogoGrid({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-4",
        isDark ? "bg-white/12" : "bg-ink-200",
        className,
      )}
    >
      {clients.map((client) => (
        <li
          key={client.name}
          className={cn(
            "group/logo relative flex min-h-28 items-center justify-center px-5 py-7 text-center transition-colors duration-300",
            isDark ? "bg-navy-900 hover:bg-navy-800" : "bg-white hover:bg-ink-50",
          )}
        >
          {/* Accent rule wipes in under the tile on hover. */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-solar-500 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover/logo:scale-x-100"
          />

          {client.logo ? (
            <Image
              src={client.logo.src}
              alt={client.logo.alt}
              width={160}
              height={56}
              className="h-10 w-auto object-contain grayscale opacity-75 transition-[filter,opacity] duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
            />
          ) : (
            <span
              className={cn(
                "font-display text-detail font-semibold tracking-[0.08em] uppercase transition-colors duration-300",
                isDark
                  ? "text-navy-200 group-hover/logo:text-white"
                  : "text-ink-600 group-hover/logo:text-navy-900",
              )}
            >
              {client.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
