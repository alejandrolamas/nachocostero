"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_KEY = "cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="mx-auto max-w-4xl bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-xl p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-zinc-300 leading-relaxed">
              Utilizamos cookies técnicas necesarias para el funcionamiento del sitio web.
              Puedes consultar nuestra{" "}
              <Link
                href="/politica-cookies"
                className="underline hover:text-white transition-colors"
              >
                Política de Cookies
              </Link>{" "}
              y nuestra{" "}
              <Link
                href="/politica-privacidad"
                className="underline hover:text-white transition-colors"
              >
                Política de Privacidad
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={reject}
              className="px-5 py-2.5 text-sm font-medium text-zinc-400 border border-zinc-700 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={accept}
              className="px-5 py-2.5 text-sm font-medium bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
