import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Nacho Costero DJ",
};

export default function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidad</h1>

        <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Responsable del tratamiento</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-white">Responsable:</strong> Nacho Costero</li>
              <li><strong className="text-white">Email:</strong> info@nachocostero.com</li>
              <li><strong className="text-white">Sitio web:</strong> nachocostero.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Finalidad del tratamiento</h2>
            <p>Los datos personales recogidos a través del formulario de contacto serán tratados con las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Atender y gestionar las consultas y solicitudes de información recibidas.</li>
              <li>Contactar con el usuario para ofrecer presupuestos y servicios de DJ profesional.</li>
              <li>Mantener la comunicación comercial cuando exista consentimiento previo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos es el consentimiento expreso del usuario,
              otorgado al marcar la casilla de aceptación en el formulario de contacto, conforme al
              artículo 6.1.a) del Reglamento General de Protección de Datos (RGPD) — Reglamento (UE) 2016/679.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Datos recogidos</h2>
            <p>A través del formulario de contacto se recogen los siguientes datos:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nombre (obligatorio)</li>
              <li>Dirección de correo electrónico (obligatorio)</li>
              <li>Teléfono (opcional)</li>
              <li>Tipo de evento (obligatorio)</li>
              <li>Fecha del evento (opcional)</li>
              <li>Mensaje/descripción del evento (obligatorio)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Conservación de los datos</h2>
            <p>
              Los datos personales se conservarán mientras sea necesario para atender la consulta
              y, en su caso, durante el tiempo necesario para cumplir con las obligaciones legales
              aplicables. Se eliminarán cuando dejen de ser necesarios para la finalidad para la que
              fueron recogidos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Destinatarios</h2>
            <p>
              Los datos no serán cedidos a terceros salvo obligación legal. El envío de correos se
              realiza a través de un proveedor de servicios SMTP, que actúa como encargado del
              tratamiento y con el que se han establecido las garantías contractuales adecuadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Derechos del usuario</h2>
            <p>El usuario tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-white">Acceso:</strong> conocer qué datos personales se están tratando.</li>
              <li><strong className="text-white">Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
              <li><strong className="text-white">Supresión:</strong> solicitar la eliminación de sus datos.</li>
              <li><strong className="text-white">Oposición:</strong> oponerse al tratamiento de sus datos.</li>
              <li><strong className="text-white">Limitación:</strong> solicitar la limitación del tratamiento.</li>
              <li><strong className="text-white">Portabilidad:</strong> recibir los datos en un formato estructurado.</li>
            </ul>
            <p>
              Para ejercer estos derechos, puede enviar un email a{" "}
              <strong className="text-white">info@nachocostero.com</strong> indicando el derecho que
              desea ejercer y adjuntando copia de su DNI o documento identificativo equivalente.
            </p>
            <p>
              Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de
              Protección de Datos (
              <Link href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                www.aepd.es
              </Link>
              ).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Seguridad</h2>
            <p>
              Se han adoptado las medidas técnicas y organizativas necesarias para garantizar la
              seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso
              no autorizado, conforme al estado de la tecnología y la naturaleza de los datos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">9. Modificaciones</h2>
            <p>
              Esta política de privacidad puede ser actualizada en cualquier momento. Se recomienda
              revisarla periódicamente. La fecha de última actualización se indica a continuación.
            </p>
            <p className="text-zinc-500 text-sm">Última actualización: Julio 2025</p>
          </section>
        </div>
      </div>
    </main>
  );
}
