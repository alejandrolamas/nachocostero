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

const advisoryItems = [
  {
    icon: Heart,
    title: "Ceremonia",
    subtitle: "Asesoramiento",
    description:
      "Os asesoro en la selección musical perfecta para vuestra entrada, lecturas y salida. Preparo la playlist ideal para que todo fluya con la emoción que merece.",
  },
  {
    icon: Sparkles,
    title: "Cóctel",
    subtitle: "Asesoramiento",
    description:
      "Os ayudo a diseñar la ambientación sonora ideal: desde Jazz y Bossa Nova hasta Deep House sofisticado. Creo la playlist perfecta para que vuestros invitados disfruten.",
  },
  {
    icon: Users,
    title: "Banquete",
    subtitle: "Asesoramiento",
    description:
      "Os oriento con la música de fondo ideal para la cena: selecciones que acompañan la conversación y realzan los momentos especiales como entregas de regalos.",
  },
];

const mainItem = {
  icon: Music,
  title: "Barra Libre",
  subtitle: "¡Aquí aparezco yo!",
  description:
    "Este es MI momento. Me pongo al frente de la cabina para hacer bailar a todos hasta que duela. Mezclas en directo, lectura de pista constante y la energía por las nubes. Aquí es donde la magia ocurre.",
};

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
              Os asesoro en cada fase musical de vuestra boda y, cuando llega la
              barra libre, me pongo al frente de la cabina para que la fiesta
              sea inolvidable.
            </p>
          </div>
          {/* Asesoramiento */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-zinc-800" />
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-[0.3em]">
                Os asesoro antes del evento
              </span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisoryItems.map((item) => (
                <div
                  key={item.title}
                  className="group bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/50 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5"
                >
                  <div className="flex flex-col items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-xs font-mono mt-1 uppercase tracking-widest">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Barra Libre — Presencia física */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-zinc-800" />
              <span className="text-white text-xs font-mono uppercase tracking-[0.3em]">
                Mi presencia en vuestra boda
              </span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
            <div className="group bg-zinc-900/40 p-10 md:p-12 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-black shrink-0">
                  <mainItem.icon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold tracking-tight mb-1">
                    {mainItem.title}
                  </h3>
                  <p className="text-white text-sm font-mono mt-1 uppercase tracking-widest mb-4">
                    {mainItem.subtitle}
                  </p>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    {mainItem.description}
                  </p>
                </div>
              </div>
            </div>
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
