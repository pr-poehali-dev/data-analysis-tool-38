import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/f6896d48-e205-49df-af17-035c1f19647f/files/aeb311c9-1b6f-4836-a2d7-8606414f3fd5.jpg"
          alt="Reptiles in tropical landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white" style={{textShadow: '0 2px 20px rgba(0,0,0,0.7)'}}>
        <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-80">Биология · 7 класс · BBC Live</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ПРЕСМЫКАЮЩИЕСЯ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Многообразие рептилий: от древних крокодилов до ярких хамелеонов — властелины всех экосистем планеты
        </p>
      </div>
    </div>
  );
}