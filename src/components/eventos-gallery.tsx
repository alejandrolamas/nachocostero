"use client";

import { GallerySection } from "@/components/gallery-section";
import { eventPreviewImages, eventModalImages } from "@/lib/gallery-data";

export function EventosGallery() {
  return (
    <GallerySection
      title="Galería de Eventos"
      buttonText="Ver galería"
      previewImages={eventPreviewImages}
      modalImages={eventModalImages}
      className="bg-black"
    />
  );
}
