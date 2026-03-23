"use client";

import { motion, cubicBezier } from "framer-motion";
import { Headphones } from "lucide-react";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-zinc-950 overflow-hidden" id="about">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        {/* Lado de la Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: cubicBezier(0.16, 1, 0.3, 1) }}
          className="w-full lg:w-5/12 relative flex justify-center lg:justify-end"
        >
          <div className="relative aspect-[9/16] w-full max-w-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img
              src="/images/personal/me.jpg"
              alt="Nacho Costero DJ"
              className="w-full h-full object-cover"
            />
            {/* Borde sutil */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 z-20 pointer-events-none transition-all duration-500 hover:ring-white/30" />
          </div>
          
          {/* Tarjeta flotante decorativa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="absolute -bottom-8 -left-4 md:-left-12 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl z-30 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg leading-tight">Garantía</h4>
                <p className="text-zinc-400 text-sm font-medium">de pista llena</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Lado del Contenido */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-7/12 flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 w-max">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest">Sobre Mí</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            El arte de hacer las cosas bien <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
              (y liarla como se merece)
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6 text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            <p>
              Esto va de una cosa muy simple: que vuestro evento sea inolvidable y que la pista no se vacíe en toda la noche.
            </p>
            <p>
              Me encargo de todo lo que suena y de cómo suena. Desde el montaje del equipo más adecuado para el espacio, hasta la canción exacta que tiene que sonar en el momento perfecto. <span className="text-white font-medium">Cada detalle cuenta, y ahí es donde marco la diferencia.</span>
            </p>
            <p>
              Os asesoro en la parte técnica, os ayudo a definir el estilo musical y adapto cada sesión al tipo de evento y al público. Profesionalidad, energía y cero improvisaciones que puedan salir mal.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="mt-10 p-8 md:p-10 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Vosotros traéis las ganas.</h3>
              <p className="text-zinc-400 text-lg md:text-xl">
                Yo pongo la música, la técnica... y el ambiente.
              </p>
              <div className="mt-8 pt-6 border-t border-zinc-800/80">
                <p className="text-white font-medium text-lg md:text-xl italic">
                  &ldquo;La idea está clara: hacerlo bien y, cuando toque, liarla como se merece.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
