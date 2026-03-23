"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "La seguridad y confianza que transmite Nacho nos permitió disfrutar del proceso con total tranquilidad, sabiendo que estabamos en buenas manos. Se implica al máximo desde la contratación hasta el gran día, cuidando cada momento para que la celebración sea inolvidable.",
    name: "ISMAEL Y ELENA",
    designation: "Boda",
    src: "/images/bodas/IMG_8424.jpg",
  },
  {
    quote:
      "Lo que más nos sorprendió de Nacho fue su habilidad para mezclar canciones conocidas con un estilo propio que hace imposible quedarse sentado. Sabe elegir el momento perfecto para cada tema, manteniendo la energía siempre arriba y sin que la pista pierda fuerza. Fue un lujazo contar con él.",
    name: "ENRIQUE Y ALICIA",
    designation: "Boda",
    src: "/images/bodas/IMG_8425.jpg",
  },
  {
    quote:
      "Tiene la capacidad de conectar con todo tipo de invitados y consigue que la fiesta se mantenga animada desde el primer baile hasta el último. Después de haber asistido a muchas bodas y verle trabajar en varias de ellas, tuvimos clarísimo que queríamos que fuera el DJ de la nuestra. Y sin duda, fue todo un acierto: la fiesta fue un auténtico éxito.",
    name: "BORJA Y ANA",
    designation: "Boda",
    src: "/images/bodas/IMG_8426.jpg",
  },
  {
    quote:
      "Desde aquel día, para nosotros no es solo nuestro DJ, es alguien a quien consideramos un amigo.",
    name: "EDER Y JUDITH",
    designation: "Boda",
    src: "/images/bodas/IMG_8427.jpg",
  },
  {
    quote:
      "Solo podemos darle las gracias. Nos acompañó y asesoró durante todo el proceso, desde la elección de proveedores hasta la selección de las canciones perfectas para cada momento. Es de esas personas que conectan de verdad y que, más allá de su profesionalidad como DJ, aportan algo especial.",
    name: "CHEMA Y MARINA",
    designation: "Boda",
    src: "/images/bodas/IMG_8428.jpg",
  },
  {
    quote:
      "Que Nacho formara parte de nuestra boda fue, sencillamente, increíble. No solo por su cercanía y calidad humana, sino porque consiguió que viviéramos un día inolvidable. Tanto fue así que, después de nuestra experiencia, muchos amigos decidieron contar con él para sus propias bodas.",
    name: "CARLOS Y PATRICIA",
    designation: "Boda",
    src: "/images/bodas/IMG_8519.jpg",
  },
  {
    quote:
      "Le conocí en una salida nocturna con amigas. Desde que le escuché pinchar supe que él sería el dj de mi boda. Estoy muy emocionada por cómo fue todo.",
    name: "JAIME Y ANA",
    designation: "Boda",
    src: "/images/bodas/NC_070226_89-Mejorado-NR.jpeg",
  },
  {
    quote:
      "Veo los vídeos un año después y es imposible no sonreír. Que recuerdos tan bonitos. Eternamente agradecidos",
    name: "NACHO Y ALEJANDRA",
    designation: "Boda",
    src: "/images/bodas/NC_070226_99-Mejorado-NR.jpeg",
  },
  {
    quote:
      "No pudimos elegir mejor para poner el broche final a nuestro evento anual. Contar con Nacho fue un éxito total: disfrutamos muchísimo, el ambiente fue inmejorable y ya estamos esperando con ilusión la próxima edición. Profesionalidad y buen hacer de principio a fin.",
    name: "LARA (LOUIS VUITTON)",
    designation: "Evento empresa",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop&q=80",
  },
  {
    quote:
      "Elegir a Nacho es apostar sobre seguro. Se adapta en todo momento a las necesidades de cada cliente y trabaja cada detalle para que el evento resulte perfecto y todo fluya sin contratiempos.",
    name: "ELENA (CARRERA Y CARRERA)",
    designation: "Evento empresa",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop&q=80",
  },
  {
    quote:
      "Nacho es, ante todo, una gran persona, y eso se nota en la forma en la que trabaja. Como profesional es impecable: cercano, atento y siempre pendiente de que el cliente se sienta tranquilo y respaldado en todo momento. Cada vez que hemos contado con él para un evento ha conectado de forma natural con el público, entendiendo perfectamente el ambiente que necesitábamos crear.",
    name: "CLARA (KPMG)",
    designation: "Evento empresa",
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop&q=80",
  },
  {
    quote:
      "Su música, actual y bien seleccionada, está cuidada al detalle. Es un placer confiar en alguien que combina trato humano y máxima profesionalidad. Sin duda, esperamos seguir contando con él en muchas ocasiones más.",
    name: "MARÍA (MAKING SCIENCE)",
    designation: "Evento empresa",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="w-full py-32 px-4 bg-black text-white overflow-hidden"
      id="testimonials"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <span className="text-zinc-500 text-sm uppercase tracking-widest mb-4 block font-bold">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Lo que dicen de mi
          </h2>
          <div className="w-24 h-1.5 bg-white mx-auto mb-8" />
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto italic">
            &ldquo;El arte de hacer las cosas bien. Esto es sencillo, quiero
            haceros bailar hasta que os duelan los pies... LA VAMOS A
            LIAR&rdquo;
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}
