import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-black border-t border-zinc-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Nacho Costero
            </h3>
            <p className="text-zinc-400">DJ Profesional · Madrid</p>
          </div>
          <div className="flex gap-6">
            <Link
              href="#"
              aria-label="Instagram"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Nacho Costero. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/aviso-legal" className="hover:text-white transition-colors">
              Aviso Legal
            </Link>
            <Link href="/politica-privacidad" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/politica-cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
