"use client";

import { LogoCloud } from "@/components/ui/logo-cloud";

const logos = [
  { src: "/images/logos/lv.webp", alt: "Louis Vuitton" },
  { src: "/images/logos/Loewe.webp", alt: "Loewe" },
  { src: "/images/logos/hola.webp", alt: "¡Hola!", keepOriginal: true },
  { src: "/images/logos/casilda.webp", alt: "Casilda" },
  { src: "/images/logos/tenis.webp", alt: "Tenis" },
];

export function BrandsSection() {
  return (
    <section className="w-full bg-zinc-950 py-20 md:py-5">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-10">
          <span className="text-zinc-500 text-sm uppercase tracking-widest mb-4 block font-bold">
            Confían en mí
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Marcas que me eligen
          </h2>
          <div className="w-24 h-1.5 bg-white mx-auto" />
        </div>

        <div className="mx-auto my-6 h-px max-w-sm bg-zinc-800 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} />

        <div className="mt-6 h-px bg-zinc-800 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>
    </section>
  );
}
