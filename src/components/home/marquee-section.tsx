export function MarqueeSection() {
  return (
    <section className="w-full py-24 px-4 bg-black border-t border-zinc-900 overflow-hidden relative">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee text-7xl md:text-9xl font-black text-white/5 uppercase select-none">
          <span className="mx-8">LA VAMOS A LIAR</span>
          <span className="mx-8">LA VAMOS A LIAR</span>
          <span className="mx-8">LA VAMOS A LIAR</span>
          <span className="mx-8">LA VAMOS A LIAR</span>
          <span className="mx-8">LA VAMOS A LIAR</span>
          <span className="mx-8">LA VAMOS A LIAR</span>
          <span className="mx-8">LA VAMOS A LIAR</span>
          <span className="mx-8">LA VAMOS A LIAR</span>
        </div>
      </div>
    </section>
  );
}
