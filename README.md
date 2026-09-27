# Khushi Enterprises — Website

Corporate website for **Khushi Enterprises**, a proprietor-led solar O&M and
asset management firm based at Lohari Bujurg, Dhar (Madhya Pradesh), with
additional solar installation, electrical, fabrication, civil and industrial
execution capability. Built with Next.js (App Router), React, TypeScript and
Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # development server on http://localhost:3000
npm run lint     # eslint
npm run build    # production build
npm run start    # serve the production build
```

Set the public site URL before deploying (used for canonical URLs, `sitemap.xml`,
`robots.txt` and Open Graph tags):

```bash
cp .env.example .env.local
# then set NEXT_PUBLIC_SITE_URL to the production domain
```

## Pages

| Route | Contents |
| --- | --- |
| `/` | O&M hero, Solar O&M & Asset Management scope register, asset management lifecycle, O&M expertise, business hierarchy, about preview, solar installation preview, featured projects, execution approach, clients, quality & safety, O&M CTA |
| `/about` | Company overview, vision & mission, team & capability, nature of business |
| `/services` | Seven execution scopes — solar O&M and asset management first — with capabilities and service index |
| `/solar-om` | Solar O&M & Asset Management: operating lifecycle, ten scope areas, expertise, supporting capabilities |
| `/solar-services` | Solar installation & commissioning, rooftop, ground mount, cleaning, structure work, execution process |
| `/projects` | Project record with category filtering |
| `/gallery` | Project photographs with lightbox |
| `/clients` | Clients & project associations with the project record per organisation |
| `/quality-safety` | Quality assurance, quality control, inspection, health & safety |
| `/contact` | Contact details, map, enquiry form |

## Project structure

```
src/
  app/                    routes (App Router) + sitemap, robots, 404
  components/
    layout/               Header, DesktopNav, MobileNav, Footer, Logo
    home/                 Hero and home page sections
    services/             ServiceCard, ServiceSection
    projects/             ProjectCard, ProjectFilters, ProjectsExplorer
    gallery/              GalleryGrid, Lightbox
    clients/              ClientLogoGrid
    contact/              InquiryForm
    seo/                  StructuredData (JSON-LD)
    ui/                   Button, Container/Section, SectionHeading, PageHeader,
                          Reveal, ServiceIcon, Icons
  data/                   company content — site, company, services, om,
                          projects, gallery, clients
  lib/                    metadata helper and small utilities
scripts/
  generate-image-placeholders.mjs
public/images/            logo, hero, projects, gallery, services, clients
```

All company content lives in `src/data/*` — client names, locations, capacities
and scopes are rendered from there, so content changes never require touching
component code.

## Content rules followed on this site

- Only details supplied in the company profile are published. Locations,
  capacities and scopes appear only where they are recorded.
- No invented certifications, awards, ratings, testimonials, revenue figures,
  branch offices or statistics.
- Client names are presented as **project associations**; logos appear only when
  an official logo file is provided.

## Images

Every image is served through `next/image`. Paths are referenced from the data
files, and the folder layout is documented in
[`public/images/README.md`](public/images/README.md).

While a company photograph is missing, a flat navy placeholder file exists at
that path so the layout renders correctly. To add images:

1. Drop the real photograph into the matching folder in `public/images/` using
   the existing file name (or update the path in `src/data/*.ts`).
2. Run `node scripts/generate-image-placeholders.mjs` after adding new image
   paths — it creates placeholders only for files that do not exist yet and
   never overwrites a real photograph.

## Notes

- The enquiry form validates on the client and then opens the visitor's email
  application with the enquiry details addressed to the company inbox. There is
  no backend on this site, so no data is stored and no message is claimed to
  have been sent until the visitor sends it.
- Scroll reveal animations use CSS scroll-driven animations, so they add no
  JavaScript and are disabled automatically under `prefers-reduced-motion`.

