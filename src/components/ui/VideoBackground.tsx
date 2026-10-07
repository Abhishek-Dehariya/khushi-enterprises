const VIDEO_SRC =
  "/images/gallery/video/vidssave.com%20Solar%20panels%20and%20solar%20power%20fields%20drone%20video%208k%20480P.mp4";

/**
 * Local solar-plant video background layer (Server Component — no client JS).
 * Layer stack (bottom → top):
 *   video → light base tint → top scrim (seats nav) → bottom scrim (seats hero
 *   copy) → left scrim (copy column) → vignette → blueprint grid.
 * Directional scrims replace one flat veil so the footage stays vivid in the
 * open frame while text areas stay legible.
 * Parent section must be `relative isolate` with page content at `z-10`.
 */
export function VideoBackground({ poster }: { poster?: string }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-brand-black">
      <video
        autoPlay
        loop
        muted={true}
        playsInline
        preload="auto"
        poster={poster}
        disablePictureInPicture
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center contrast-110 saturate-110"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Base tint — gentle overall grade, no washed-out grey veil */}
      <div className="absolute inset-0 z-[1] bg-black/20" />

      {/* Top scrim — seats logo + navigation over bright sky/panels */}
      <div className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-black/65 via-black/25 to-transparent" />

      {/* Bottom scrim — hero content is bottom-aligned on every page */}
      <div className="absolute inset-x-0 bottom-0 z-[1] h-2/3 bg-gradient-to-t from-brand-black/90 via-brand-black/35 to-transparent" />

      {/* Left scrim — headline + description column */}
      <div className="absolute inset-y-0 left-0 z-[1] w-full bg-gradient-to-r from-black/55 via-black/15 to-transparent sm:w-3/4" />

      {/* Vignette — pulls focus toward centre frame */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,8,12,0.5)_100%)]" />

      <div className="absolute inset-0 z-[1] blueprint-grid opacity-20 pointer-events-none" />
    </div>
  );
}
