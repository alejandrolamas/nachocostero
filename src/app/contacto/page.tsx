import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Nacho Costero DJ",
  description:
    "¿Listo para hacer de tu evento algo inolvidable? Cuéntame tu idea y diseñemos la banda sonora perfecta.",
};

export default function ContactoPage() {
  return (
    <main className="w-full min-h-screen pt-32 pb-20 px-4 bg-black text-white">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-zinc-400 text-sm uppercase tracking-wider mb-2 block">
            Hablemos
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            LA VAMOS A LIAR
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            ¿Listo para hacer de tu evento algo inolvidable? Cuéntame tu idea y
            diseñemos la banda sonora perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:costeronacho@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                      costeronacho@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Teléfono</h4>
                    <a href="https://wa.me/34656348618" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                      +34 656 348 618
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ubicación</h4>
                    <p className="text-zinc-400">Me desplazo a cualquier punto de España y fuera de ella</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-4">Sígueme en Redes</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/nachocostero"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://open.spotify.com/playlist/3aN1fAJf8nacJ8hTaSffWb?si=4BAg9r_BQjOCC7WzfM4cFg&pi=UqYwR_WbTuCuU"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Spotify"
                  className="w-11 h-11 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
