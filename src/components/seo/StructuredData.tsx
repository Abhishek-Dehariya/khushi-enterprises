import { businessLines, siteConfig } from "@/data/site";

/**
 * Organisation structured data for search engines.
 *
 * Contains only details the company has published — no ratings, review counts,
 * certifications or employee figures that were not supplied.
 */
export function StructuredData() {
  const { contact } = siteConfig;

  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "GeneralContractor"],
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    founder: { "@type": "Person", name: siteConfig.proprietor },
    telephone: contact.phoneDial,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.addressLine1,
      addressLocality: "Lohari Bujurg, Dhar",
      addressRegion: "Madhya Pradesh",
      postalCode: "454001",
      addressCountry: "IN",
    },
    areaServed: ["Indore", "Dhar", "Pithampur", "Dewas", "Madhya Pradesh", "India"],
    knowsAbout: businessLines,
  };

  return (
    <script
      type="application/ld+json"
      // Serialised from data defined above — no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
