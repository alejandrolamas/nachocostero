"use client";

import { GallerySection } from "@/components/gallery-section";
import { homePreviewImages, homeModalImages } from "@/lib/gallery-data";

export function HomeGallery() {
  return (
    <GallerySection
      title="Galería"
      buttonText="Ver galería"
      previewImages={homePreviewImages}
      modalImages={homeModalImages}
      className="bg-zinc-950"
    />
  );
}
