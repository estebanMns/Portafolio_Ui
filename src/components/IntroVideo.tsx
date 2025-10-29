"use client";
import { motion } from "framer-motion";

export default function IntroVideo({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Video de fondo */}
      <video
        src="/videos/fondo.mp4"
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Capa de opacidad */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Bienvenido a mi portafolio</h1>
        <p className="text-lg md:text-xl">Descubre mis proyectos y habilidades</p>

        <button
          onClick={onEnter}
          className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
        >
          Iniciemos
        </button>
      </motion.div>
    </div>
  );
}
