// Eventos images
export const eventPreviewImages = [
  { src: "/images/eventos/394DEF19-5B86-4CD8-828D-C569C4523638.jpg", alt: "Evento" },
  { src: "/images/eventos/95C5241F-47C5-4065-B109-C7F044020166.jpg", alt: "Evento" },
  { src: "/images/eventos/95f49981-3170-4fdb-a97d-4739c49aba81.jpg", alt: "Evento" },
  { src: "/images/eventos/beeb3694-c31f-4258-aec8-92350868ab54.jpg", alt: "Evento" },
  { src: "/images/eventos/IMG_1876.jpg", alt: "Evento" },
  { src: "/images/eventos/IMG_2128.jpg", alt: "Evento" },
  { src: "/images/eventos/IMG_2161.jpg", alt: "Evento" },
  { src: "/images/eventos/IMG_4208.jpg", alt: "Evento" },
  { src: "/images/eventos/IMG_7634.jpg", alt: "Evento" },
  { src: "/images/eventos/IMG_7645.jpg", alt: "Evento" },
  { src: "/images/eventos/IMG_8001.jpg", alt: "Evento" },
  { src: "/images/eventos/IMG_8251.jpg", alt: "Evento" },
  { src: "/images/eventos/IMG_8262.jpg", alt: "Evento" },
  { src: "/images/eventos/JSC01691.jpg", alt: "Evento" },
];

export const eventModalImages = eventPreviewImages.map((img, i) => ({
  id: i + 1,
  ...img,
}));

// Bodas images
export const weddingPreviewImages = [
  { src: "/images/bodas/IMG_4552.jpg", alt: "Boda" },
  { src: "/images/bodas/IMG_7632.jpg", alt: "Boda" },
  { src: "/images/bodas/IMG_8424.jpg", alt: "Boda" },
  { src: "/images/bodas/IMG_8425.jpg", alt: "Boda" },
  { src: "/images/bodas/IMG_8426.jpg", alt: "Boda" },
  { src: "/images/bodas/IMG_8427.jpg", alt: "Boda" },
  { src: "/images/bodas/IMG_8428.jpg", alt: "Boda" },
  { src: "/images/bodas/IMG_8519.jpg", alt: "Boda" },
  { src: "/images/bodas/NC_070226_89-Mejorado-NR.jpeg", alt: "Boda" },
  { src: "/images/bodas/NC_070226_99-Mejorado-NR.jpeg", alt: "Boda" },
];

export const weddingModalImages = weddingPreviewImages.map((img, i) => ({
  id: i + 1,
  ...img,
}));

// Personal images
const personalImages = [
  { src: "/images/personal/2y6a6341(1).jpg", alt: "Personal" },
  { src: "/images/personal/2y6a6341.jpg", alt: "Personal" },
  { src: "/images/personal/2y6a6351(1).jpg", alt: "Personal" },
  { src: "/images/personal/2y6a6351.jpg", alt: "Personal" },
  { src: "/images/personal/2y6a6359(1).jpg", alt: "Personal" },
  { src: "/images/personal/2y6a6359.jpg", alt: "Personal" },
  { src: "/images/personal/2y6a6380(1).jpg", alt: "Personal" },
  { src: "/images/personal/2y6a6380.jpg", alt: "Personal" },
  { src: "/images/personal/2y6a6383(1).jpg", alt: "Personal" },
  { src: "/images/personal/2y6a6383.jpg", alt: "Personal" },
  { src: "/images/personal/portada.jpeg", alt: "Portada" },
];

// Home (mixed) images - all images from every folder
export const homePreviewImages = [
  ...weddingPreviewImages,
  ...eventPreviewImages,
  ...personalImages,
];

export const homeModalImages = homePreviewImages.map((img, i) => ({
  id: i + 1,
  ...img,
}));
