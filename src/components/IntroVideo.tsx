"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroVideo({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Video de fondo */}
        <video
              src="/videos/vecteezy_3d-rendering-seamless-loop-motion-of-sci-fi-corridor-with_5357509.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            ></video>
      {/* Capa oscura para mejorar contraste */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Botón centrado */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl text-white font-semibold mb-8 drop-shadow-lg">
          Bienvenido a mi Portafolio
        </h1>
        <button
          onClick={onEnter}
          className="px-8 py-3 bg-[#00bcd4] hover:bg-[#0097a7] text-white font-bold text-lg rounded-xl shadow-lg transition-all"
        >
          Iniciemos
        </button>
      </motion.div>
    </div>
  );
}
