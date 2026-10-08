import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Mail, Phone } from "@/components/ui/Icons";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { omExpert } from "@/data/om";
import { mailtoHref, telHref } from "@/lib/utils";

/**
 * Solar O&M & Asset Management expertise.
 *
 * Introduces Abhishek Dehariya as a key technical professional associated with
 * the company's O&M and asset management capability. Only the supplied details
 * are published: name, experience, focus area, email and phone — no
 * designation, employer history, project count or certification is claimed.
 *
 * Email and phone are real links (the shared Button handles the target
 * attributes).
 */
export function OmExpertise() {
  const contactRows = [
    {
      label: "Email",
      value: omExpert.email,
      href: mailtoHref(omExpert.email),
      Icon: Mail,
      external: false,
    },
    {
      label: "Phone",
      value: omExpert.phoneDisplay,
      href: telHref(omExpert.phoneDial),
      Icon: Phone,
      external: false,
    },
  ] as const;

  return (
    <section
      id="om-expertise"
      className="relative isolate overflow-hidden bg-navy-900 text-navy-100"
    >
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 -z-10 opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_80%_at_15%_0%,rgb(233_122_19/0.12),transparent_65%)]"
      />

      <Container className="py-section">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          {/* ---- Name and focus ---- */}
          <div className="lg:col-span-7">
            <Eyebrow tone="dark">
              Solar O&amp;M &amp; Asset Management Expertise
            </Eyebrow>

            <div className="mt-7 flex items-start gap-6">
              <span
                aria-hidden="true"
                className="font-display hidden h-20 w-20 shrink-0 items-center justify-center border border-white/20 bg-navy-950/60 text-h2 font-semibold text-solar-400 sm:flex"
              >
                AD
              </span>

              <div>
                <p className="font-display text-display font-semibold text-white">
                  {omExpert.name}
                </p>
                <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="font-display text-h4 font-semibold text-navy-100">
                    {omExpert.experience}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-4 w-px shrink-0 bg-solar-500"
                  />
                  <span className="font-display text-h4 font-semibold text-navy-100">
                    {omExpert.focus}
                  </span>
                </p>
              </div>
            </div>

            <p className="measure mt-7 text-detail text-navy-300">
              Key technical professional associated with the company&rsquo;s
              Solar O&amp;M and Asset Management capability.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={mailtoHref(omExpert.email)}
                variant="ghost"
                size="lg"
                plainAnchor
              >
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </div>
          </div>

          {/* ---- Direct contact register ---- */}
          <div className="lg:col-span-5">
            <dl className="divide-y divide-white/12 border border-white/15 bg-navy-950/50">
              {contactRows.map((row) => (
                <div key={row.label} className="px-5 py-5">
                  <dt className="text-label text-navy-300 uppercase">
                    {row.label}
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={row.href}
                      {...(row.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-start gap-2.5 text-detail font-medium break-all text-white underline-offset-4 transition-colors hover:text-solar-400 hover:underline"
                    >
                      <row.Icon className="mt-0.5 h-4 w-4 shrink-0 text-solar-400" />
                      {row.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
