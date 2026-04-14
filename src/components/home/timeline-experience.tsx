"use client";
import { Timeline } from "@/components/ui/timeline";
import {
  MessageCircle,
  Video,
  FileText,
  Building2,
  CheckCircle2,
  PartyPopper,
} from "lucide-react";

export function TimelineExperience() {
  const data = [
    {
      title: "Contacta conmigo",
      content: (
        <div className="flex flex-col gap-6">
          <div className="flex items-start md:items-center gap-4">
            <MessageCircle className="w-8 h-8 text-zinc-300 shrink-0 mt-1 md:mt-0" />
            <p className="text-zinc-300">
              Escríbeme o llámame para comprobar la disponibilidad de tu fecha. Cuéntame qué tienes en mente: ¿una boda elegante, un fiestón privado, un evento de empresa? Me encantará escuchar tus primeras ideas.
            </p>
          </div>
          <img
            src="/images/personal/2y6a6359.webp"
            alt="DJ Nacho Costero"
            className="rounded-xl object-cover w-full shadow-2xl border border-zinc-800"
          />
        </div>
      ),
    },
    {
      title: "Primera toma de contacto",
      content: (
        <div className="flex flex-col gap-6">
          <div className="flex items-start md:items-center gap-4">
            <Video className="w-8 h-8 text-zinc-300 shrink-0 mt-1 md:mt-0" />
            <div className="flex flex-col gap-2">
              <p className="text-zinc-300">
                Para mí es fundamental que conectemos. Haremos una videollamada sin compromiso para conocernos mejor.
              </p>
              <p className="text-zinc-400 text-sm md:text-base">
                Hablaremos de vuestros gustos musicales, los estilos que no pueden faltar, las canciones "prohibidas" y cómo imagináis la energía de la pista de baile.
              </p>
            </div>
          </div>
          <img
            src="/images/bodas/IMG_8941.webp"
            alt="Pareja riendo y planificando"
            className="rounded-xl object-cover w-full shadow-2xl border border-zinc-800"
          />
        </div>
      ),
    },
    {
      title: "Presupuesto personalizado",
      content: (
        <div className="flex flex-col gap-6">
          <div className="flex items-start md:items-center gap-4">
            <FileText className="w-8 h-8 text-zinc-300 shrink-0 mt-1 md:mt-0" />
            <div className="flex flex-col gap-2">
              <p className="text-zinc-300">
                Cada evento es único y merece un presupuesto a medida. Tras conocer vuestras necesidades, os preparo una propuesta personalizada, clara y sin letra pequeña, adaptada 100% a lo que buscáis.
              </p>
              <p className="text-zinc-400 text-sm md:text-base">
                No hay dos eventos iguales: el espacio, el aforo, el estilo musical y vuestra visión determinan la propuesta. Todo se adapta a vosotros.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Empresas de sonido",
      content: (
        <div className="flex flex-col gap-6">
          <div className="flex items-start md:items-center gap-4">
            <Building2 className="w-8 h-8 text-zinc-300 shrink-0 mt-1 md:mt-0" />
            <div className="flex flex-col gap-2">
              <p className="text-zinc-300">
                Si tu evento requiere una producción enorme (como una boda en una gran finca con múltiples espacios), no te preocupes.
              </p>
              <p className="text-zinc-400 text-sm md:text-base">
                Colaboro con las mejores empresas de audiovisuales de España para montar puentes de luces, sonido de concierto, pantallas LED y cualquier locura técnica que tengas en mente.
              </p>
            </div>
          </div>
          <img
            src="/images/eventos/IMG_8926.webp"
            alt="Estructura de luces y sonido en evento"
            className="rounded-xl object-cover w-full shadow-2xl border border-zinc-800"
          />
        </div>
      ),
    },
    {
      title: "Aceptación y preparación",
      content: (
        <div className="flex flex-col gap-6">
          <div className="flex items-start md:items-center gap-4">
            <CheckCircle2 className="w-8 h-8 text-zinc-300 shrink-0 mt-1 md:mt-0" />
            <div className="flex flex-col gap-2">
              <p className="text-zinc-300">
                Una vez formalizamos la reserva, empieza lo divertido. Me encantará escuchar vuestros gustos y preferencias musicales: canciones imprescindibles, estilos favoritos y esas canciones que no pueden faltar.
              </p>
              <p className="text-zinc-400 text-sm md:text-base">
                Os asesoro en cada momento musical de la boda —ceremonia, cóctel, banquete— para que todo suene perfecto aunque yo no esté físicamente. Juntos elegiremos el montaje de sonido ideal para vuestro espacio y dejaré todo preparado al detalle.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "¡A darlo todo!",
      content: (
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <PartyPopper className="w-8 h-8 text-zinc-300 shrink-0 mt-1" />
            <p className="text-zinc-300">
              Llegó el gran día. Cuando arranca la barra libre, aparezco yo. Me pongo al frente de la cabina para leer la pista, mantener la energía por las nubes, hacer transiciones perfectas y asegurarme de que tanto vosotros como vuestros invitados no podáis parar de bailar. ¡Vosotros solo encargaros de disfrutar!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/eventos/IMG_1876.webp"
              alt="Gente bailando en la fiesta"
              className="rounded-xl object-cover w-full shadow-2xl border border-zinc-800"
            />
            <img
              src="/images/eventos/IMG_7634.webp"
              alt="Fiesta con luces y DJ"
              className="rounded-xl object-cover w-full shadow-2xl border border-zinc-800"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-zinc-950 py-20 md:py-32 px-4 md:px-8 lg:px-10">
      <Timeline data={data} />
    </section>
  );
}
