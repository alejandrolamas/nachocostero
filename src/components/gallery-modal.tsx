"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import {
  DraggableContainer,
  GridBody,
  GridItem,
} from "@/components/infinite-drag-scroll";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

interface GalleryModalProps {
  images: GalleryImage[];
  open: boolean;
  onClose: () => void;
}

export function GalleryModal({ images, open, onClose }: GalleryModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-[#141414]">
      <button
        onClick={onClose}
        className="absolute bottom-6 right-6 z-[210] w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800/80 backdrop-blur-sm text-white hover:bg-zinc-700 transition-colors cursor-pointer"
        aria-label="Cerrar galería"
      >
        <X className="w-6 h-6" />
      </button>
      <DraggableContainer variant="masonry">
        <GridBody>
          {images.map((image) => (
            <GridItem
              key={image.id}
              className="relative h-54 w-36 md:h-96 md:w-64"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="pointer-events-none absolute h-full w-full object-cover"
              />
            </GridItem>
          ))}
        </GridBody>
      </DraggableContainer>
    </div>
  );
}
