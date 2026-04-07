// Eventos images (all from /images/eventos)
export const eventPreviewImages = [
  { src: "/images/eventos/394DEF19-5B86-4CD8-828D-C569C4523638.webp", alt: "Evento" },
  { src: "/images/eventos/95C5241F-47C5-4065-B109-C7F044020166.webp", alt: "Evento" },
  { src: "/images/eventos/95f49981-3170-4fdb-a97d-4739c49aba81.webp", alt: "Evento" },
  { src: "/images/eventos/beeb3694-c31f-4258-aec8-92350868ab54.webp", alt: "Evento" },
  { src: "/images/eventos/IMG_1876.webp", alt: "Evento" },
  { src: "/images/eventos/IMG_2128.webp", alt: "Evento" },
  { src: "/images/eventos/IMG_2161.webp", alt: "Evento" },
  { src: "/images/eventos/IMG_4208.webp", alt: "Evento" },
  { src: "/images/eventos/IMG_7634.webp", alt: "Evento" },
  { src: "/images/eventos/IMG_7645.webp", alt: "Evento" },
  { src: "/images/eventos/IMG_8001.webp", alt: "Evento" },
  { src: "/images/eventos/IMG_8251.webp", alt: "Evento" },
  { src: "/images/eventos/IMG_8262.webp", alt: "Evento" },
  { src: "/images/eventos/IMG_8926.webp", alt: "Evento" },
  { src: "/images/eventos/IMG_8938.webp", alt: "Evento" },
  { src: "/images/eventos/IMG_8949.webp", alt: "Evento" },
  { src: "/images/eventos/JSC01691.webp", alt: "Evento" },
];

export const eventModalImages = eventPreviewImages.map((img, i) => ({
  id: i + 1,
  ...img,
}));

// Bodas images (all from /images/bodas)
export const weddingPreviewImages = [
  { src: "/images/bodas/IMG_4552.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_7632.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_8424.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_8425.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_8426.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_8427.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_8428.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_8519.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_8936.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_8937.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_8938.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_8940.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_8941.webp", alt: "Boda" },
  { src: "/images/bodas/IMG_8943.webp", alt: "Boda" },
  { src: "/images/bodas/NC_070226_89-Mejorado-NR.webp", alt: "Boda" },
  { src: "/images/bodas/NC_070226_99-Mejorado-NR.webp", alt: "Boda" },
];

export const weddingModalImages = weddingPreviewImages.map((img, i) => ({
  id: i + 1,
  ...img,
}));

// Personal images (excluding "(1)" variants)
const personalImages = [
  { src: "/images/personal/2y6a6341.webp", alt: "Personal" },
  { src: "/images/personal/2y6a6351.webp", alt: "Personal" },
  { src: "/images/personal/2y6a6359.webp", alt: "Personal" },
  { src: "/images/personal/2y6a6380.webp", alt: "Personal" },
  { src: "/images/personal/2y6a6383.webp", alt: "Personal" },
  { src: "/images/personal/IMG_8938.webp", alt: "Personal" },
  { src: "/images/personal/IMG_8960.webp", alt: "Personal" },
  { src: "/images/personal/IMG_8961.webp", alt: "Personal" },
  { src: "/images/personal/IMG_8962.webp", alt: "Personal" },
  { src: "/images/personal/IMG_8963.webp", alt: "Personal" },
  { src: "/images/personal/IMG_8964.webp", alt: "Personal" },
  { src: "/images/personal/IMG_8966.webp", alt: "Personal" },
  { src: "/images/personal/me.webp", alt: "Personal" },
  { src: "/images/personal/portada.webp", alt: "Personal" },
];

// Seeded shuffle for consistent SSR/client hydration
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Home (mixed) images — all folders, excluding "(1)" images, shuffled
export const homePreviewImages = seededShuffle(
  [...weddingPreviewImages, ...eventPreviewImages, ...personalImages],
  42,
);

export const homeModalImages = homePreviewImages.map((img, i) => ({
  id: i + 1,
  ...img,
}));
