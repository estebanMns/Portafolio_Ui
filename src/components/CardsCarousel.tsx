"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Props {
  index: number;
}

const cards = [
  {
    id: 1,
    title: "Acerca de mí",
    description: `
      Soy ingeniero en software, me apasiona el conocimiento y poder dar soluciones a las problemáticas de la sociedad.
      Me gusta la innovación y la creación de productos que hagan el mundo diferente y mejor.
      Me llama mucho la atención el mundo tecnológico y me gusta crecer rápidamente en conocimiento.`,
    image: "/images/sobre_Mi.png",
  },
  {
    id: 2,
    title: "Experiencia",
    description: `
      He trabajado en el desarrollo de aplicaciones web modernas con frameworks como React, Next.js y tecnologías backend como Flask y Spring Boot.`,
    image: "/images/experiencia_Laboral.png",
  },
  {
    id: 3,
    title: "Proyectos",
    description: `
      He desarrollado sistemas de inteligencia artificial, portafolios 3D y aplicaciones empresariales enfocadas en rendimiento y experiencia de usuario.`,
    image: "/images/proyectos.png",
  },
  {
    id: 4,
    title: "Hobbies",
    description:
      "Me gusta mucho el cine, la música y los videojuegos. Disfruto explorar nuevas tecnologías y aprender sobre desarrollo de software en mi tiempo libre.",
    image: "/images/hobbies.png",
  },
  {
    id: 5,
    title: "Contacto",
    description:
      "Puedes contactarme por cualquiera de los siguioentes medios posibles estoy atento y activo a cuqlueira de las platasformas que estab disponibles en mi portafolio.",
    image: "/images/contacto.png",
  },
  {
    id: 6,
    title: "testimonios",
    description:
      "He tenido la oportunidad de trabajar con varios profesionales y clientes que han compartido sus experiencias positivas sobre mi trabajo y dedicación.",
    image: "/images/testimonios.png",
  },
];

export default function CardsCarousel({
  selectedFromNav,
  onClose,
}: {
  selectedFromNav: number | null;
  onClose: () => void;
}) {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // 🕒 Rotación automática cada 4s
  useEffect(() => {
    if (isPaused || selected !== null) return;
    const interval = setInterval(() => {
      setRotation((prev) => prev + 120);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, selected]);

  useEffect(() => {
    if (selectedFromNav !== null) {
      setSelected(selectedFromNav);
    }
  }, [selectedFromNav]);

  return (

    
    <div
      className="relative flex flex-col items-center justify-center w-full mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 🔠 Título dinámico */}
      <h2 className="text-white text-lg mb-8 uppercase tracking-widest">
        {cards[(Math.round(rotation / 120) % cards.length + cards.length) % cards.length].title}
      </h2>

      {/* 🌀 Carrusel 3D */}
      <div className="relative w-[900px] h-[500px] [perspective:1400px] z-10 flex items-center justify-center">
        {/* ⬅️ Flecha izquierda */}
        <button
          className="absolute left-[-60px] bg-[#61A6C6]/40 hover:bg-[#61A6C6]/80 text-white text-3xl px-4 py-2 rounded-full shadow-lg z-50 transition-all"
          onClick={() => setRotation((prev) => prev - 120)}
        >
          ‹
        </button>

        {/* Carrusel */}
        <motion.div
          animate={{ rotateY: rotation }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 [transform-style:preserve-3d]"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="absolute top-[60px] left-1/2 -translate-x-1/2 cursor-pointer"
              style={{
                transform: `rotateY(${index * (360 / cards.length)}deg) translateZ(500px)`,
                zIndex: 500 - index,
              }}
              onClick={() => setSelected(card.id === selected ? null : card.id)}
            >
              <div
                className={`w-[360px] h-[360px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(97,166,198,0.6)] border border-[#61A6C6]/50 transition-transform duration-700 hover:scale-110 hover:shadow-[0_0_50px_rgba(97,166,198,0.8)] ${
                  selected === card.id ? "ring-4 ring-[#61A6C6]" : ""
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* ➡️ Flecha derecha */}
        <button
          className="absolute right-[-60px] bg-[#61A6C6]/40 hover:bg-[#61A6C6]/80 text-white text-3xl px-4 py-2 rounded-full shadow-lg z-50 transition-all"
          onClick={() => setRotation((prev) => prev + 120)}
        >
          ›
        </button>
      </div>

      {/* 💬 Card informativa */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="infoCard"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-[140px] z-[999] w-[1376px] h-[656px] rounded-[35px]
            bg-gradient-to-b from-[#61A6C6]/30 to-[#295D6E]/30
            backdrop-blur-[25px] border border-white/20 shadow-[0_8px_60px_-10px_rgba(97,166,198,0.6)]
            flex flex-col items-center justify-center p-10 text-white text-center
            before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%)]
            before:rounded-[35px] before:blur-xl before:pointer-events-none"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 left-5 bg-red-600 hover:bg-red-700 text-white
              rounded-full w-4 h-4 flex items-center justify-center text-xl font-bold shadow-lg
              transition-transform transform hover:scale-120"
            >
              x
            </button>

            <h3 className="text-3xl font-semibold mb-6 drop-shadow-md font-[cursive]">
              {cards.find((c) => c.id === selected)?.title}
            </h3>
            <p className="text-[19px] leading-relaxed whitespace-pre-line italic font-[cursive] drop-shadow-sm">
              {cards.find((c) => c.id === selected)?.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
