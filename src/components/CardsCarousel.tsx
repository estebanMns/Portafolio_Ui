"use client";
import { useState } from "react";
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
    title: "!Experiencia Laboral",
    description: "he tenido varios trabajos como auxiliar logistico  y ayudante de inveatrios sistematizados, he trabajado como mesero, no tengo experiencia laboral en el desarrollo de software de manera formal pero tengo varias proyectos diseñados ",
    image: "/images/experiencia_Laboral.png",
  }
];

export default function CardsCarousel() {
  const [selected, setSelected] = useState<Card | null>(null);

  return (
    <div className="relative flex w-full overflow-x-auto gap-6 py-10 px-4 scrollbar-hide justify-center">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          whileHover={{ scale: 1.05 }}
          className="min-w-[240px] bg-[#295D6E]/60 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-white/10"
          onClick={() => setSelected(card)}
        >
          <Image
            src={card.image}
            alt={card.title}
            width={240}
            height={160}
            className="w-full h-[160px] object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-white font-semibold text-lg">{card.title}</h3>
          </div>
        </motion.div>
      ))}

      {/* Modal */}
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
              <h2 className="text-2xl font-semibold mb-3">{selected.title}</h2>
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
