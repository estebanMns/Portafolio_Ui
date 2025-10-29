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
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // 🕒 Rotación automática cada 4s
  useEffect(() => {
    if (isPaused || selected !== null) return;
    const interval = setInterval(() => {
      setRotation((prev) => prev + 120); // gira 120° por cada card
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
        {cards[(Math.round(rotation / 120) % cards.length + cards.length) % cards.length].title}
      </h2>

      {/* 🌀 Carrusel 3D */}
      <div className="relative w-[900px] h-[400px] [perspective:1200px]">
        <motion.div
          animate={{ rotateY: rotation }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 [transform-style:preserve-3d]"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer"
              style={{
                transform: `rotateY(${index * 120}deg) translateZ(400px)`,
              }}
              onClick={() => setSelected(card.id === selected ? null : card.id)}
            >
              <div
                className={`w-[240px] h-[240px] rounded-2xl overflow-hidden shadow-lg border border-[#61A6C6]/40 transition-transform duration-700 hover:scale-105 ${
                  selected === card.id ? "ring-2 ring-[#61A6C6]" : ""
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 💬 Card informativa */}
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
