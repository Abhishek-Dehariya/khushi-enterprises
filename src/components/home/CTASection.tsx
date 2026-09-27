import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ArrowRight, Mail, Phone } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";
import { mailtoHref, telHref } from "@/lib/utils";

/**
 * Closing call-to-action band used at the bottom of interior pages and the
 * home page. Keeps one strong, honest conversion point on every route.
 *
 * A site photograph sits behind the band at low opacity for texture; it is
 * decorative, so it carries an empty alt and is never the reason the copy is
 * readable — the navy beneath it already provides the contrast.
 */
export function CTASection({
  eyebrow = "Next Step",
  title = "Planning a Solar, Electrical or Industrial Project?",
  description = "Share your project requirements with our team. We will review the scope and revert with a clear execution approach, manpower plan and timeline.",
  primaryLabel = "Discuss Your Project",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  showContactActions = true,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  /** Optional second action — used where an O&M route is worth offering. */
  secondaryLabel?: string;
  secondaryHref?: string;
  showContactActions?: boolean;
}) {
  const { contact } = siteConfig;

  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <Image
        src="/images/services/pipeline-industrial-services.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-[0.16]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/92 to-navy-950/70"
      />
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 -z-10 opacity-50"
      />
      {/* Hairline of solar across the top edge seats the band on the page. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-solar-500/60 to-transparent"
      />

      <Container className="py-section">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
            <h2 className="mt-5 text-h2 text-white">{title}</h2>
            <p className="measure mt-5 text-lede text-navy-200">{description}</p>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
              {secondaryLabel && secondaryHref ? (
                <Button href={secondaryHref} variant="ghost" size="lg">
                  {secondaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : null}
              {showContactActions ? (
                <Button
                  href={telHref(contact.phoneDial)}
                  variant="ghost"
                  size="lg"
                  plainAnchor
                >
                  <Phone className="h-4 w-4" />
                  Call {contact.phoneDisplay}
                </Button>
              ) : null}
            </div>

            {showContactActions ? (
              <a
                href={mailtoHref(contact.email)}
                className="mt-5 inline-flex items-center gap-2 text-detail break-all text-navy-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-solar-400" />
                {contact.email}
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
