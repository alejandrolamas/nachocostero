"use client";

import { GallerySection } from "@/components/gallery-section";
import { weddingPreviewImages, weddingModalImages } from "@/lib/gallery-data";

export function BodasGallery() {
  return (
    <GallerySection
      title="Galería de Bodas"
      buttonText="Ver galería"
      previewImages={weddingPreviewImages}
      modalImages={weddingModalImages}
      className="bg-zinc-950"
    />
  );
}
