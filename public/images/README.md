# Website images

Place the company's own photographs in these folders. **Do not** replace them
with AI-generated or stock imagery — the site is built around real site
photographs.

Until a real photograph is placed at a path, a flat navy placeholder file exists
at that path so the layout renders correctly. Run `node scripts/generate-image-placeholders.mjs`
after adding new image paths to the code: it creates placeholders only for files
that do not exist yet and never overwrites a real photograph.

## Folders

| Folder | Used for |
| --- | --- |
| `logo/` | The official logo file, if you want to use it instead of the drawn wordmark in the header and footer. |
| `hero/` | The home page hero image (`hero-solar-field.png`). |
| `projects/` | One photograph per project record on the Projects page and project cards. |
| `gallery/` | Gallery photographs, shown in the masonry grid and lightbox. |
| `services/` | Photographs for each service section on the Services page. |
| `om/` | Photographs for the solar O&M and asset management sections — plant monitoring, inspections, preventive maintenance, site operations and asset management. |
| `clients/` | Client logos — only where an official logo file has been provided. |

## How to replace a placeholder

1. Keep the existing file name and put the real photograph at the same path
   (for example `projects/moira-sariya-pithampur.png`). Filenames are referenced
   from `src/data/*.ts`.
2. If the photograph is a different file type, either convert it to PNG/JPEG at
   the same name, or update the path in the matching data file.
3. Recommended sizes: hero images around 2400 × 1350 px, project and gallery
   photographs around 1600 × 1000 px or larger. Keep files under about 500 KB —
   Next.js serves correctly sized, optimised versions of whatever you provide.

## Where each file is referenced

- Projects: `src/data/projects.ts`
- Gallery: `src/data/gallery.ts`
- Services: `src/data/services.ts`
- Solar O&M and asset management: `src/data/om.ts`
- Client logos: `src/data/clients.ts` (`logo` field — `null` means the
  organisation name is used as a typographic tile)
- Hero: `src/components/home/Hero.tsx`
