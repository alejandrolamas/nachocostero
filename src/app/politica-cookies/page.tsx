import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Nacho Costero DJ",
};

export default function PoliticaCookies() {
  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Política de Cookies</h1>

        <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en su
              dispositivo (ordenador, móvil o tablet) cuando los visita. Se utilizan ampliamente
              para hacer que los sitios web funcionen de manera más eficiente, así como para
              proporcionar información a los propietarios del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. ¿Qué cookies utilizamos?</h2>
            <p>Este sitio web utiliza los siguientes tipos de cookies:</p>

            <h3 className="text-lg font-semibold text-white mt-4">Cookies técnicas (necesarias)</h3>
            <p>
              Son imprescindibles para el funcionamiento del sitio web y no pueden desactivarse.
              Generalmente se configuran en respuesta a acciones realizadas por usted, como
              establecer sus preferencias de privacidad o rellenar formularios.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-zinc-800 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-zinc-900">
                    <th className="px-4 py-2 text-left text-white">Cookie</th>
                    <th className="px-4 py-2 text-left text-white">Finalidad</th>
                    <th className="px-4 py-2 text-left text-white">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-800">
                    <td className="px-4 py-2">cookie_consent</td>
                    <td className="px-4 py-2">Almacena la preferencia del usuario sobre cookies</td>
                    <td className="px-4 py-2">365 días</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mt-4">Cookies analíticas (opcionales)</h3>
            <p>
              Actualmente este sitio web no utiliza cookies analíticas ni de seguimiento de terceros.
              En caso de implementarse en el futuro, se actualizará esta política y se solicitará
              su consentimiento previo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Base legal</h2>
            <p>
              De acuerdo con la Ley 34/2002 (LSSICE) y el Reglamento (UE) 2016/679 (RGPD):
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Las <strong className="text-white">cookies técnicas</strong> se utilizan en base al interés
                legítimo para el correcto funcionamiento del sitio web (art. 6.1.f RGPD).
              </li>
              <li>
                Las <strong className="text-white">cookies no esenciales</strong> requieren el consentimiento
                previo del usuario (art. 6.1.a RGPD), que se recaba mediante el banner de cookies
                mostrado en la primera visita.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. ¿Cómo gestionar las cookies?</h2>
            <p>
              Puede configurar su navegador para rechazar todas las cookies o para que le avise
              cuando se envía una cookie. Sin embargo, si bloquea o elimina las cookies, es posible
              que algunas funcionalidades del sitio web no funcionen correctamente.
            </p>
            <p>Enlaces para gestionar cookies en los principales navegadores:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-white">Chrome:</strong>{" "}
                Configuración → Privacidad y seguridad → Cookies
              </li>
              <li>
                <strong className="text-white">Firefox:</strong>{" "}
                Opciones → Privacidad y seguridad → Cookies
              </li>
              <li>
                <strong className="text-white">Safari:</strong>{" "}
                Preferencias → Privacidad → Cookies
              </li>
              <li>
                <strong className="text-white">Edge:</strong>{" "}
                Configuración → Cookies y permisos del sitio
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Actualizaciones</h2>
            <p>
              Esta política de cookies puede ser modificada en cualquier momento para adaptarse a
              novedades legislativas o cambios en nuestro sitio web. Se recomienda revisarla
              periódicamente.
            </p>
            <p className="text-zinc-500 text-sm">Última actualización: Julio 2025</p>
          </section>
        </div>
      </div>
    </main>
  );
}
