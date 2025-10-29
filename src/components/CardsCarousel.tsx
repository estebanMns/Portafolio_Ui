"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Acerca de mí",
    description: `
Soy ingeniero en software, me apasiona el conocimiento y poder dar soluciones a las problemáticas de la sociedad.
Me gusta la innovación y la creación de productos que hagan el mundo diferente y mejor.
Me llama mucho la atención el mundo tecnológico y me gusta crecer rápidamente en conocimiento.
    `,
    image: "/images/sobre_Mi.png",
  },
  {
    id: 2,
    title: "Experiencia",
    description: `
He trabajado en el desarrollo de aplicaciones web modernas con frameworks como React, Next.js y tecnologías backend como Flask y Spring Boot.
    `,
    image: "/images/experiencia_Laboral.png",
  },
  {
    id: 3,
    title: "Proyectos",
    description: `
He desarrollado sistemas de inteligencia artificial, portafolios 3D y aplicaciones empresariales enfocadas en rendimiento y experiencia de usuario.
    `,
    image: "/images/proyectos.png",
  },
];

export default function CardsCarousel() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // ⏱️ Rotación automática cada 4 segundos
  useEffect(() => {
    if (isPaused || selected !== null) return; // Pausar al interactuar
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, selected]);

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className="text-white text-lg mb-8 uppercase tracking-widest">
        {cards[current].title}
      </h2>

      {/* 🌀 Carrusel circular */}
      <div className="relative w-[1000px] h-[400px] perspective">
        {cards.map((card, index) => {
          const offset = (index - current + cards.length) % cards.length;
          const angle = offset * 45; // ángulo de separación
          const translateZ = 350; // distancia radial
          const opacity = offset === 0 ? 1 : 0.6;

          return (
            <motion.div
              key={card.id}
              animate={{
                rotateY: angle,
                translateZ,
                opacity,
                scale: offset === 0 ? 1.1 : 1,
                zIndex: offset === 0 ? 10 : 0,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer"
              onClick={() => setSelected(card.id === selected ? null : card.id)}
            >
              <div
                className={`w-[240px] h-[240px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 ${
                  offset === 0 ? "ring-2 ring-[#61A6C6]" : "opacity-70"
                }`}
              >
                <Image
                  src="{card.image}"
                  alt={card.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 💬 Card expandible */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="infoCard"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-[480px] w-[750px] h-[340px] rounded-2xl
             bg-gradient-to-b from-[#61A6C6]/90 to-[#295D6E]/90 shadow-xl border border-white/10 
             backdrop-blur-md text-white p-10 flex flex-col items-center justify-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {cards.find((c) => c.id === selected)?.title}
            </h3>
            <p className="text-[17px] text-justify leading-relaxed whitespace-pre-line">
              {cards.find((c) => c.id === selected)?.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
