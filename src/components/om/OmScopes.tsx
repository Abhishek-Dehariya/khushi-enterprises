import Image from "next/image";
import { Check } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { omScopes } from "@/data/om";
import { imageSizes } from "@/lib/utils";

/**
 * The ten O&M scope areas of the /solar-om page.
 *
 * Each scope is a numbered article on a hairline-divided track: the index in the
 * left rail, the explanation in the middle, the activities covered on the right.
 * Scopes that carry a photograph show it under the explanation, so imagery is
 * spread through the page instead of being front-loaded.
 */
export function OmScopes() {
  return (
    <div className="mt-head divide-y divide-ink-200 border-y border-ink-200">
      {omScopes.map((scope) => (
        <Reveal as="article" key={scope.slug} className="py-10 lg:py-14">
          <div id={scope.slug} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-2">
              <p className="font-display text-h1 leading-none font-semibold tracking-[-0.02em] text-ink-300">
                {scope.index}
              </p>
              <p className="mt-3 text-label text-ink-500 uppercase">Scope</p>
            </div>

            <div className="lg:col-span-5">
              <h3 className="text-h2">{scope.title}</h3>
              <p className="mt-5 text-body text-ink-600">{scope.summary}</p>

              {scope.image ? (
                <figure className="mt-7">
                  <div className="relative aspect-16/10 overflow-hidden rounded-[4px] border border-ink-200 bg-navy-100">
                    <Image
                      src={scope.image.src}
                      alt={scope.image.alt}
                      fill
                      sizes={imageSizes.half}
                      className="object-cover"
                    />
                  </div>
                </figure>
              ) : null}
            </div>

            <div className="lg:col-span-5">
              <h4 className="text-label text-ink-500 uppercase">
                Covered under this scope
              </h4>
              <ul className="mt-4">
                {scope.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 border-b border-ink-100 py-3 text-detail text-ink-700"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-leaf-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
