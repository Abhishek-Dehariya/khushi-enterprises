"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { GalleryAspect, GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { Lightbox } from "./Lightbox";

/* Each photograph keeps its own shape — site photography is not all landscape,
   and forcing a single ratio would crop work out of the frame. */
const aspectClasses: Record<GalleryAspect, string> = {
  landscape: "aspect-4/3",
  portrait: "aspect-3/4",
  square: "aspect-square",
};

const tileSizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw";

/**
 * Masonry gallery grid with an accessible lightbox.
 * Client component because the viewer and focus handling are interactive.
 *
 * The caption sits below each tile rather than inside the hover overlay, so
 * every photograph is captioned on touch devices too; the overlay repeats the
 * title only as a pointer affordance.
 */
export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggersRef = useRef<Array<HTMLButtonElement | null>>([]);

  function close() {
    const previousIndex = openIndex;
    setOpenIndex(null);
    if (previousIndex !== null) {
      // Return focus to the tile that opened the viewer.
      requestAnimationFrame(() => triggersRef.current[previousIndex]?.focus());
    }
  }

  return (
    <>
      <div className="masonry">
        {items.map((item, index) => (
          <figure
            key={item.id}
            className="group/tile border border-ink-200 bg-white transition-[border-color,box-shadow,transform] duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-ink-300 hover:shadow-[var(--shadow-panel-hover)] focus-within:border-ink-300"
          >
            <button
              ref={(element) => {
                triggersRef.current[index] = element;
              }}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open larger view of ${item.title}`}
              className="block w-full cursor-zoom-in bg-navy-100 p-0 text-left"
            >
              <span
                className={cn(
                  "relative block w-full overflow-hidden",
                  aspectClasses[item.aspect],
                )}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes={tileSizes}
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover/tile:scale-[1.05]"
                />

                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-navy-950/0 transition-colors duration-300 group-hover/tile:bg-navy-950/35"
                />

                {/* Title lifts in over the photograph on pointer devices. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-[opacity,transform] duration-300 ease-[var(--ease-out-expo)] group-hover/tile:translate-y-0 group-hover/tile:opacity-100"
                >
                  <span className="flex items-center gap-2 text-label text-white uppercase">
                    <span className="h-1.5 w-1.5 shrink-0 bg-solar-500" />
                    {item.title}
                  </span>
                </span>
              </span>
            </button>

            <figcaption className="border-t border-ink-200 px-4 py-3.5">
              <p className="text-detail font-semibold text-navy-900">
                {item.title}
              </p>
              <p className="mt-1 text-micro text-ink-500">{item.caption}</p>
              {item.location || item.capacity ? (
                <p className="mt-2 text-label text-solar-700 uppercase">
                  {[item.location, item.capacity].filter(Boolean).join(" · ")}
                </p>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>

      {openIndex !== null ? (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={close}
          onNavigate={setOpenIndex}
        />
      ) : null}
    </>
  );
}
