import { CheckCircle, Users, Calendar, Star } from "lucide-react";

const stats = [
  { icon: CheckCircle, value: "150+", label: "Eventos Anuales" },
  { icon: Users, value: "500+", label: "Clientes Felices" },
  { icon: Calendar, value: "10+", label: "Años de Carrera" },
  { icon: Star, value: "98%", label: "Satisfacción" },
];

export function StatsSection() {
  return (
    <section className="relative w-full pt-32 pb-32 px-4 bg-zinc-950 text-white z-10">
      {/* Fade-to-black gradient overlaying the hero video */}
      <div className="absolute -top-48 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-zinc-950 pointer-events-none" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-24">
          <span className="text-zinc-500 text-sm uppercase tracking-widest mb-4 block font-bold">
            Trayectoria
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Experiencia que marca la diferencia
          </h2>
          <div className="w-24 h-1.5 bg-white mx-auto mb-8" />
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            No solo pongo música, creo atmósferas. Leo al público en tiempo real
            y garantizo que la pista nunca se vacíe con una selección musical
            impecable.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group bg-zinc-900/40 p-10 rounded-2xl text-center border border-zinc-800 hover:border-zinc-500 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white mx-auto group-hover:scale-110 transition-transform">
                <s.icon className="w-8 h-8 text-zinc-300" />
              </div>
              <div className="text-5xl font-black text-white mb-3">
                {s.value}
              </div>
              <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
