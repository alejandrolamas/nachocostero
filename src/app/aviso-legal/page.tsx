import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Nacho Costero DJ",
};

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Aviso Legal</h1>

        <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Datos identificativos</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa al usuario de
              los datos del titular de este sitio web:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-white">Titular:</strong> Nacho Costero (nombre comercial)</li>
              <li><strong className="text-white">Domicilio:</strong> Madrid, España</li>
              <li><strong className="text-white">Email de contacto:</strong> info@nachocostero.com</li>
              <li><strong className="text-white">Sitio web:</strong> nachocostero.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Objeto</h2>
            <p>
              El presente aviso legal regula el uso y las condiciones de acceso al sitio web
              nachocostero.com, puesto a disposición de los usuarios de Internet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, iconos,
              tecnología, software, enlaces y demás contenidos audiovisuales o sonoros), así como su
              diseño gráfico y códigos fuente, son propiedad intelectual del titular o de terceros,
              sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación
              reconocidos por la normativa vigente en materia de propiedad intelectual.
            </p>
            <p>
              Queda expresamente prohibida la reproducción, distribución, comunicación pública y
              transformación de la totalidad o parte de los contenidos de este sitio web, con fines
              comerciales, sin la autorización expresa y por escrito del titular.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Condiciones de uso</h2>
            <p>
              El usuario se compromete a utilizar el sitio web de conformidad con la ley, el presente
              aviso legal, las buenas costumbres y el orden público. El usuario se obliga a no
              utilizar el sitio web con fines ilícitos o contrarios a lo establecido.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Exclusión de responsabilidad</h2>
            <p>
              El titular no se hace responsable de los daños y perjuicios de cualquier naturaleza que
              pudieran derivarse del uso del sitio web, ni de la información contenida en el mismo,
              incluyendo, sin limitación, los producidos por la falta de disponibilidad o continuidad
              del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Enlaces externos</h2>
            <p>
              Este sitio web puede contener enlaces a sitios de terceros. El titular no asume
              ninguna responsabilidad sobre el contenido, políticas de privacidad o prácticas de
              sitios web de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Legislación aplicable y jurisdicción</h2>
            <p>
              Para la resolución de cualquier controversia relacionada con el uso de este sitio web,
              será de aplicación la legislación española, sometidas las partes a los Juzgados y
              Tribunales de Madrid.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
