import Image from "next/image";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Check } from "@/components/ui/Icons";
import type { ServiceGroup } from "@/data/services";
import { cn, imageSizes } from "@/lib/utils";

/**
 * Full-width service block for the Services page. Alternating image placement
 * keeps long pages readable without adding decorative clutter.
 */
export function ServiceSection({
  service,
  reversed = false,
}: {
  service: ServiceGroup;
  reversed?: boolean;
}) {
  return (
    <article
      id={service.slug}
      className="border-t border-ink-200 pt-12 first:border-t-0 first:pt-0 lg:pt-16"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className={cn("lg:col-span-7", reversed && "lg:order-2")}>
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-ink-200 bg-ink-50 text-navy-800">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <div>
              <p className="text-eyebrow text-solar-700 uppercase">
                {service.index} · {service.category}
              </p>
              <h2 className="mt-2 text-h2">
                {service.title}
              </h2>
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-lede text-ink-600">
            {service.summary}
          </p>

          <h3 className="mt-8 text-label text-ink-500 uppercase">
            Scope covered
          </h3>
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {service.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-2.5 border-b border-ink-100 py-3 text-detail text-ink-700"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-leaf-500" />
                {capability}
              </li>
            ))}
          </ul>

          {service.note ? (
            <p className="mt-6 border-l-2 border-solar-500 bg-ink-50 px-4 py-3 text-detail text-ink-700">
              {service.note}
            </p>
          ) : null}
        </div>

        <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
          <figure className="group/photo relative">
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-0 hidden translate-y-3 rounded-[4px] border border-solar-500/30 sm:block",
                reversed ? "-translate-x-3" : "translate-x-3",
              )}
            />
            <div className="relative aspect-4/3 overflow-hidden rounded-[4px] border border-ink-200 bg-navy-100 shadow-[var(--shadow-panel)]">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes={imageSizes.twoUp}
                className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover/photo:scale-[1.04]"
              />
            </div>
          </figure>
        </div>
      </div>
    </article>
  );
}
