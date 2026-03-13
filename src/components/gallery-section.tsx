"use client";

import { useState, useCallback } from "react";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { GalleryModal } from "@/components/gallery-modal";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

interface GallerySectionProps {
  title?: string;
  buttonText?: string;
  /** Preview images for the portfolio gallery (overlapping cards) */
  previewImages: Array<{ src: string; alt: string }>;
  /** Full images for the draggable modal gallery */
  modalImages: GalleryImage[];
  className?: string;
}

export function GallerySection({
  title = "Galería",
  buttonText = "Ver galería",
  previewImages,
  modalImages,
  className = "",
}: GallerySectionProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <PortfolioGallery
        title={title}
        archiveButton={{ text: buttonText, href: "#" }}
        images={previewImages}
        onImageClick={handleOpen}
        onButtonClick={handleOpen}
        className={className}
      />
      <GalleryModal images={modalImages} open={open} onClose={handleClose} />
    </>
  );
}
