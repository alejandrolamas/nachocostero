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
          "Cada boda es única. La música que suena en vuestro gran día debe serlo también.",
          "Desde la ceremonia hasta el último baile, cada momento tiene su banda sonora perfecta.",
        ],
      }}
    />
  );
}
