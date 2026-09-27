"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";
import { ChevronLeft, ChevronRight, Close } from "@/components/ui/Icons";

/** Horizontal travel, in pixels, that counts as a swipe rather than a tap. */
const SWIPE_THRESHOLD = 48;

/**
 * Accessible image viewer for the gallery.
 *
 * Keyboard: Escape closes, arrow keys move between photographs, and Tab is
 * trapped inside the dialog so focus cannot wander onto the page behind it.
 * Touch: a horizontal swipe moves between photographs. Focus moves to the close
 * button on open and the background is scroll-locked while open.
 */
export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const item = items[index];
  const total = items.length;

  const goNext = useCallback(
    () => onNavigate((index + 1) % total),
    [index, total, onNavigate],
  );
  const goPrevious = useCallback(
    () => onNavigate((index - 1 + total) % total),
    [index, total, onNavigate],
  );

  // Scroll lock — kept in its own effect so it is only applied once.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        goNext();
        return;
      }
      if (event.key === "ArrowLeft") {
        goPrevious();
        return;
      }
      if (event.key !== "Tab") return;

      // Focus trap: cycle between the first and last control in the dialog.
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        "button:not([disabled])",
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, goNext, goPrevious]);

  function onTouchStart(event: React.TouchEvent) {
    const touch = event.changedTouches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }

  function onTouchEnd(event: React.TouchEvent) {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;

    // Ignore mostly-vertical gestures so scrolling intent is never hijacked.
    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) goNext();
    else goPrevious();
  }

  const navButtonClasses =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — enlarged view`}
      className="fixed inset-0 z-[70] flex animate-rise flex-col bg-navy-950/96 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
        <p className="min-w-0 truncate text-detail text-navy-200">
          <span className="font-semibold text-white">{item.title}</span>
          <span aria-live="polite" className="ml-2 text-navy-400">
            {index + 1} / {total}
          </span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className={navButtonClasses}
        >
          <Close className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative flex-1 overflow-hidden p-3 sm:p-6"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          onClick={goPrevious}
          aria-label="Previous image"
          className={`absolute top-1/2 left-3 z-10 -translate-y-1/2 bg-navy-950/60 ${navButtonClasses}`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="relative h-full w-full">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className={`absolute top-1/2 right-3 z-10 -translate-y-1/2 bg-navy-950/60 ${navButtonClasses}`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center sm:px-6">
        <p className="text-detail text-navy-100">{item.caption}</p>
        {item.location || item.capacity ? (
          <p className="mt-1.5 text-label text-navy-400 uppercase">
            {[item.location, item.capacity].filter(Boolean).join(" · ")}
          </p>
        ) : null}
        <p className="mt-2 text-micro text-navy-300 sm:hidden">
          Swipe to move between photographs
        </p>
      </div>
    </div>
  );
}
