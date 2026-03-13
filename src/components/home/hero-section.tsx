"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden bg-black z-0"
      id="home"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Poster image shown until video loads */}
        <img
          src="/images/personal/portada.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 animate-slow-zoom transition-opacity duration-1000 ease-in-out"
          style={{ opacity: videoLoaded ? 0 : 0.4 }}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className="w-full h-full object-cover animate-slow-zoom transition-opacity duration-1000 ease-in-out"
          style={{ opacity: videoLoaded ? 0.4 : 0 }}
        >
          <source
            src="/videos/general/video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
          <span className="text-xs font-medium text-white uppercase tracking-widest">
            Madrid, España
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">
          Nacho Costero DJ
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-medium mb-10">
          Música · Emoción · Profesionalidad
        </p>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
          Con más de 10 años de experiencia, transformo cada celebración en una
          experiencia inolvidable. La banda sonora perfecta para tus mejores
          momentos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacto"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
          >
            Reserva tu fecha
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/eventos"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 text-white font-bold rounded-full hover:bg-zinc-800 transition-colors flex items-center justify-center"
          >
            Ver servicios
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-zinc-400 animate-bounce" />
      </div>
    </section>
  );
}
