import { useEffect, useCallback, useState } from "react";
import { cn } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
}

interface CollectionGalleryProps {
  images: GalleryImage[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function CollectionGallery({
  images,
  title,
  isOpen,
  onClose,
}: CollectionGalleryProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setIndex(0);
  }, [isOpen]);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, next, prev]);

  if (!isOpen || images.length === 0) return null;

  const current = images[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} galerisi`}
      className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex shrink-0 items-center justify-between border-b border-border px-6 py-4">
        <p className="eyebrow">{title}</p>
        <button
          type="button"
          onClick={onClose}
          className="text-[0.72rem] uppercase tracking-[0.22em] text-primary transition-colors hover:text-foreground"
        >
          Kapat
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-6 py-6 md:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={prev}
          aria-label="Önceki görsel"
          className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-primary transition-colors hover:border-primary hover:text-foreground md:left-8"
        >
          ←
        </button>

        <img
          src={current.src}
          alt={current.alt}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />

        <button
          type="button"
          onClick={next}
          aria-label="Sonraki görsel"
          className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-primary transition-colors hover:border-primary hover:text-foreground md:right-8"
        >
          →
        </button>
      </div>

      <div className="shrink-0 border-t border-border px-6 py-4" onClick={(e) => e.stopPropagation()}>
        <div className="mx-auto flex max-w-3xl justify-center gap-3 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`${i + 1}. görsele git`}
              aria-current={i === index ? "true" : undefined}
              className={cn(
                "relative shrink-0 overflow-hidden border transition-all",
                i === index
                  ? "border-primary"
                  : "border-border opacity-70 hover:opacity-100"
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={72}
                height={96}
                className="h-20 w-14 object-cover md:h-24 md:w-16"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
