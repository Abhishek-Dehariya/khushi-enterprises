/**
 * Project gallery.
 *
 * Titles and locations come from the company's own photograph list. Captions
 * only restate the work shown — no invented dates, capacities or clients.
 */

export type GalleryAspect = "landscape" | "portrait" | "square";

export type GalleryItem = {
  id: string;
  title: string;
  location?: string;
  capacity?: string;
  caption: string;
  /** Drives the tile shape in the masonry grid. */
  aspect: GalleryAspect;
  image: { src: string; alt: string };
};

export const galleryItems: GalleryItem[] = [
  {
    id: "shracom-pipeline-work",
    title: "Shracom Site Pipe Line Work",
    caption: "Pipeline work carried out at the Shracom project site.",
    aspect: "landscape",
    image: {
      src: "/images/gallery/shracom-site-pipeline-work.png",
      alt: "Pipeline work executed at the Shracom project site",
    },
  },
  {
    id: "avtec-pithampur",
    title: "AVTEC Pithampur",
    location: "Pithampur",
    caption: "Site work executed at the AVTEC facility, Pithampur.",
    aspect: "landscape",
    image: {
      src: "/images/gallery/avtec-pithampur.png",
      alt: "Site work executed at the AVTEC facility in Pithampur",
    },
  },
  {
    id: "walmart-indore",
    title: "Walmart Indore",
    location: "Indore",
    caption: "Project execution at the Walmart site, Indore.",
    aspect: "portrait",
    image: {
      src: "/images/gallery/walmart-indore.png",
      alt: "Project execution work at the Walmart site in Indore",
    },
  },
  {
    id: "dmart-rajendra-nagar-indore",
    title: "D-Mart Rajendra Nagar Indore",
    location: "Indore",
    caption: "Site work at D-Mart, Rajendra Nagar, Indore.",
    aspect: "landscape",
    image: {
      src: "/images/gallery/dmart-rajendra-nagar-indore.png",
      alt: "Site work at D-Mart, Rajendra Nagar, Indore",
    },
  },
  {
    id: "ttp-daman-silwasa",
    title: "TTP Daman and Silwasa",
    location: "Daman and Silwasa",
    caption: "Project work executed across the TTP sites at Daman and Silwasa.",
    aspect: "landscape",
    image: {
      src: "/images/gallery/ttp-daman-silwasa.png",
      alt: "Project work executed at the TTP sites in Daman and Silwasa",
    },
  },
  {
    id: "jalpadevi-engineering-pipeline",
    title: "Jalpadevi Engineering Pipe Line Work",
    caption: "Pipeline work carried out at the Jalpadevi Engineering site.",
    aspect: "portrait",
    image: {
      src: "/images/gallery/jalpadevi-engineering-pipeline-work.png",
      alt: "Pipeline work carried out at the Jalpadevi Engineering site",
    },
  },
  {
    id: "shracom-cable-tray",
    title: "Shracom Cable Tray Work",
    caption: "Cable tray execution at the Shracom site.",
    aspect: "square",
    image: {
      src: "/images/gallery/shracom-cable-tray-work.png",
      alt: "Cable tray execution at the Shracom site",
    },
  },
  {
    id: "avtec-skylight-mesh",
    title: "AVTEC Skylight Mesh Installation",
    caption: "Skylight mesh installation at the AVTEC site.",
    aspect: "landscape",
    image: {
      src: "/images/gallery/avtec-skylight-mesh-installation.png",
      alt: "Skylight mesh installation at the AVTEC site",
    },
  },
  {
    id: "ve-commercial-ss-railing",
    title: "VE Commercial SS Railing Work",
    caption: "SS railing work executed at the VE Commercial site.",
    aspect: "portrait",
    image: {
      src: "/images/gallery/ve-commercial-ss-railing-work.png",
      alt: "SS railing work executed at the VE Commercial site",
    },
  },
  {
    id: "dmart-ratnagiri-solar",
    title: "D-Mart Ratnagiri Solar I&C",
    location: "Ratnagiri",
    capacity: "68.48 kWp",
    caption:
      "68.48 kWp solar installation and commissioning at D-Mart, Ratnagiri.",
    aspect: "landscape",
    image: {
      src: "/images/gallery/dmart-ratnagiri-68-48-kwp.png",
      alt: "68.48 kWp solar installation and commissioning at D-Mart, Ratnagiri",
    },
  },
];
