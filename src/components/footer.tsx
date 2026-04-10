import Link from "next/link";
import { Instagram } from "lucide-react";

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
            <a
              href="https://www.instagram.com/nachocostero"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://open.spotify.com/artist/nachocostero"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
            </a>
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
