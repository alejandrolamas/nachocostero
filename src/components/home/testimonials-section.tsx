"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Destacar tu cercanía y buen trato. Gracias por formar parte del mejor día de mi vida.",
    name: "Chema",
    designation: "06/05/2024",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
  },
  {
    quote:
      "Estoy muy emocionada por todo lo que hemos vivido. Nos diste una noche mágica.",
    name: "María",
    designation: "09/09/2024",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  },
  {
    quote:
      "Veo los vídeos un año después y es imposible no sonreír, eternamente agradecidos.",
    name: "Ruth",
    designation: "09/11/2024",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
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
            Lo que dicen de nosotros
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
