import Image from "next/image";
import { clients } from "@/data/clients";
import { cn } from "@/lib/utils";

/**
 * Client & project association grid.
 *
 * Where a real logo file is available (set in `src/data/clients.ts`) the logo is
 * displayed in full colour (on a light plate against dark tiles so dark brand
 * marks stay legible); the tile itself still reacts on hover with an accent
 * rule wipe. Otherwise the organisation name is set as a typographic tile —
 * the site never shows a drawn or imitation logo.
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
            /**
             * Backing plate only where the tile colour would swallow the mark:
             * dark artwork gets a white plate on dark tiles (most logos are
             * dark-on-transparent), while a light/white mark — e.g. Linamar's
             * header SVG — sits straight on the dark tile or gets a navy plate
             * on light tiles. width/height come from the natural pixel size of
             * each file (set in `src/data/clients.ts`) to reserve layout.
             */
            <span
              className={cn(
                "flex items-center justify-center rounded-lg px-4 py-3",
                client.logo &&
                  (client.logo.artwork === "light"
                    ? !isDark && "bg-navy-900"
                    : isDark && "bg-white"),
              )}
            >
              <Image
                src={client.logo.src}
                alt={client.logo.alt}
                width={client.logo.width}
                height={client.logo.height}
                className="h-auto w-auto max-h-12 max-w-[min(10rem,100%)] object-contain sm:max-h-14"
              />
            </span>
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
