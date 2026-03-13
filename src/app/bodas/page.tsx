import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Sparkles, Users, Music, ArrowDown } from "lucide-react";
import { BodasGallery } from "@/components/bodas-gallery";
import { BodasScrollVideo } from "@/components/bodas-scroll-video";

export const metadata: Metadata = {
  title: "Bodas | Nacho Costero DJ - Música · Emoción · Magia",
  description:
    "Cada boda es un mundo. Dedico tiempo a conoceros y diseñar una experiencia musical única, adaptada a vuestro estilo y al de vuestros invitados.",
};

const coverageItems = [
  {
    icon: Heart,
    title: "Ceremonia",
    subtitle: "The Beginning",
    description:
      "Música elegante y emotiva para el momento más importante. Selección personalizada para vuestra entrada, lecturas y salida.",
  },
  {
    icon: Sparkles,
    title: "Cóctel",
    subtitle: "Social Vibes",
    description:
      "Una selección cuidada que va desde el Jazz y Bossa Nova hasta el Deep House más sofisticado. El ambiente perfecto para socializar.",
  },
  {
    icon: Users,
    title: "Banquete",
    subtitle: "The Dinner",
    description:
      "Música de fondo que permite la conversación pero mantiene la energía alta durante las entregas de regalos y momentos especiales.",
  },
  {
    icon: Music,
    title: "Baile",
    subtitle: "The Party",
    description:
      "Hacer bailar a todos hasta que duela. Mezclas dinámicas, lectura de pista constante y los hits que vuestros invitados esperan.",
  },
];

export default function BodasPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 animate-slow-zoom"
          >
            <source
              src="/videos/general/video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-xs font-medium text-white uppercase tracking-widest">
              Amor · Emoción · Magia
            </span>
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black text-white mb-6 leading-tight tracking-tighter">
            BODAS
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light mb-8 italic">
            &ldquo;El día más importante merece la mejor música&rdquo;
          </p>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Cada boda es un mundo. Dedico tiempo a conoceros y diseñar una
            experiencia musical única, adaptada a vuestro estilo y al de
            vuestros invitados.
          </p>
          <div className="mt-12">
            <a
              href="#coverage"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all transform hover:scale-105"
            >
              Descubre mis servicios
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Scroll Animated Video */}
      <BodasScrollVideo />

      {/* Coverage Section */}
      <section
        className="w-full py-32 px-4 bg-zinc-950 text-white border-y border-zinc-900"
        id="coverage"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 space-y-4">
            <span className="text-white/40 text-sm uppercase tracking-[0.3em] block">
              Servicio Integral
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Cobertura Musical Completa
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Me encargo de todos los momentos musicales de vuestra boda,
              cuidando la calidad del sonido y la selección de cada tema.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageItems.map((item) => (
              <div
                key={item.title}
                className="group bg-zinc-900/40 p-10 rounded-3xl border border-zinc-800/50 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-sm font-mono mt-1 uppercase tracking-widest">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <BodasGallery />

      {/* CTA */}
      <section className="w-full py-24 px-4 bg-black overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            ¿Hablamos de vuestra boda?
          </h2>
          <p className="text-zinc-400 text-xl mb-12">
            La agenda se llena rápido. Asegúrate de tener la mejor música para
            tu gran día.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform text-center"
            >
              Pedir Presupuesto
            </Link>
            <a
              href="tel:+34600000000"
              className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white font-bold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all text-center"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
