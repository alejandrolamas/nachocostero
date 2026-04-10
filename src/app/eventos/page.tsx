import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Users,
  Music,
  Check,
  Phone,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { EventosGallery } from "@/components/eventos-gallery";

export const metadata: Metadata = {
  title: "Eventos Privados | Nacho Costero DJ",
  description:
    "Desde eventos corporativos hasta fiestas privadas, me adapto a cualquier formato y público con una propuesta musical única y profesional.",
};

const services = [
  {
    icon: Building2,
    title: "Eventos Corporativos",
    description:
      "Presentaciones de producto, inauguraciones, cenas de empresa y aniversarios corporativos. Música profesional adaptada a la identidad de tu marca.",
    features: [
      "Sonorización profesional",
      "Selección musical a medida",
      "Microfonía inalámbrica",
    ],
  },
  {
    icon: Users,
    title: "Fiestas Privadas",
    description:
      "Cumpleaños, aniversarios, puestas de largo o cualquier celebración familiar. Sesiones personalizadas que garantizan el éxito de la fiesta.",
    features: [
      "Lectura de pista constante",
      "Iluminación espectacular",
      "Lista de canciones favorita",
    ],
  },
  {
    icon: Music,
    title: "Clubs & Locales",
    description:
      "He tenido el privilegio de pinchar en algunas de las salas más emblemáticas del país: Florida Park, Starlite Marbella, Teatro Kapital, Gunilla Club o Lust in Rio en Lisboa, entre muchas otras. A día de hoy soy DJ residente de la prestigiosa Gabana Club.",
    features: [
      "DJ residente en Gabana Club",
      "Mezclas armónicas y técnica impecable",
      "Experiencia en gran formato",
    ],
  },
];

export default function EventosPage() {
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
            className="w-full h-full object-cover opacity-40"
          >
            <source
              src="https://nachocosterodj.com/media/video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-xs font-medium text-white uppercase tracking-wider">
                Corporativo · Privado · Clubs
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              Eventos Privados
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-semibold mb-8">
              Para cada ocasión, la música perfecta
            </p>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
              Desde eventos corporativos hasta fiestas privadas, me adapto a
              cualquier formato y público con una propuesta musical única y
              profesional.
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-zinc-500 w-6 h-6" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-32 px-4 bg-black text-white" id="servicios">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Servicios para Eventos
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Sea cual sea tu evento, me encargo de crear el ambiente perfecto,
              cuidando cada detalle técnico y musical.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-500 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-zinc-800 group-hover:bg-white group-hover:text-black transition-colors flex items-center justify-center mb-6 text-white">
                  <s.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-zinc-400 mb-6">{s.description}</p>
                <ul className="space-y-3 text-sm text-zinc-500">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-white" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <EventosGallery />

      {/* Bodas */}
      <section className="w-full py-32 px-4 bg-zinc-950 border-t border-zinc-900 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-zinc-500 text-sm uppercase tracking-widest mb-4 block font-bold">Servicio Especial</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Bodas</h2>
          <div className="w-24 h-1.5 bg-white mx-auto mb-8" />
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            El día más importante merece la mejor música. Cobertura musical completa: ceremonia, cóctel, banquete y baile.
          </p>
          <Link
            href="/bodas"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Descubre el servicio de bodas
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            ¿Hablamos de tu próximo evento?
          </h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Cuéntame los detalles y diseñaremos juntos la banda sonora perfecta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Pedir Presupuesto
            </Link>
            <Link
              href="/contacto"
              className="w-full sm:w-auto border border-zinc-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contactar ahora
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
