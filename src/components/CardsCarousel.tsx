"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Sobre mí",
    description:
      "Soy ingeniero en software apasionado por la innovación, el diseño y el desarrollo de soluciones tecnológicas creativas.",
    image: "/images/sobre_Mi.png",
  },
  {
    id: 2,
    title: "Habilidades",
    description:
      "Desarrollo en Python, JavaScript, React, Next.js, y creación de sistemas inteligentes con IA.",
    image: "/images/contacto.png",
  },
  {
    id: 3,
    title: "Proyectos",
    description:
      "He trabajado en proyectos de IA, portafolios 3D, y sistemas de gestión automatizados.",
    image: "/images/proyectos.png",
  },
  {
    id: 4,
    title: "Experiencia Laboral",
    description:
      "He tenido varios trabajos como auxiliar logístico y ayudante de inventarios sistematizados. No tengo experiencia formal en desarrollo de software, pero he diseñado varios proyectos personales.",
    image: "/images/experiencia_Laboral.png",
  },
];

export default function CardsCarousel() {
  const [selected, setSelected] = useState<Card | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // 🔁 Rotación automática
  useEffect(() => {
    if (paused || selected) return; // no rota si está en pausa o modal abierto
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000); // cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [paused, selected]);

  // 🔄 Control manual con botones o clics
  const handleClick = (card: Card, i: number) => {
    setSelected(card);
    setIndex(i);
  };

  return (
    <div
      className="relative w-full flex justify-center items-center flex-col mt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 🌀 Carrusel deslizante */}
      <div className="relative flex w-full overflow-hidden justify-center items-center">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: `-${index * 260}px` }} // movimiento horizontal
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        >
          {cards.concat(cards).map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[240px] bg-[#295D6E]/60 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-white/10"
              onClick={() => handleClick(card, i % cards.length)}
            >
              <Image
                src={card.image}
                alt={card.title}
                width={240}
                height={160}
                className="w-full h-[160px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-white font-semibold text-lg">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔘 Indicadores */}
      <div className="flex gap-3 mt-5">
        {cards.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white scale-110" : "bg-gray-400"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* 💬 Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-[#2C3E50] text-white rounded-2xl shadow-2xl w-[400px] max-w-[90%] p-6 relative"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-white text-lg hover:text-red-400"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
              <h2 className="text-2xl font-semibold mb-3">
                {selected.title}
              </h2>
              <p className="text-gray-200 leading-relaxed">
                {selected.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
