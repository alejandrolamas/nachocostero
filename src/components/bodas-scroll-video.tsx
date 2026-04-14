"use client";

import HeroScrollVideo from "@/components/ui/scroll-animated-video";

export function BodasScrollVideo() {
  return (
    <HeroScrollVideo
      media="/videos/bodas/NCboda.mp4"
      showHeroExitAnimation={false}
      smoothScroll={false}
      initialBoxSize={320}
      scrollHeightVh={300}
      overlay={{
        caption: "NACHO COSTERO DJ • BODAS",
        heading: "Donde la música cuenta vuestra historia",
        paragraphs: [
          "Cada boda es única. Os asesoro en cada detalle musical para que todo suene perfecto.",
          "Y cuando llega la barra libre, me pongo al frente de la cabina para que nadie pare de bailar.",
        ],
      }}
    />
  );
}
