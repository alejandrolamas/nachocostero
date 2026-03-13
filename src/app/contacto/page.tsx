import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
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
                    <p className="text-zinc-400 hover:text-white transition-colors">
                      nacho@djcostero.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Teléfono</h4>
                    <p className="text-zinc-400 hover:text-white transition-colors">
                      +34 600 000 000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ubicación</h4>
                    <p className="text-zinc-400">Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-4">Sígueme en Redes</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-11 h-11 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
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
