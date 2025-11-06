"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="relative w-full mt-20 overflow-hidden bg-gradient-to-t from-[#16394a] to-[#295D6E] text-white py-10 rounded-t-3xl shadow-lg">
      {/* 🔵 Fondo líquido animado */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* 🧱 Contenido principal */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* 📬 Contacto */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">Contacto</h2>
          <p className="text-gray-300">zlesteban1008@gmail.com</p>
          <p className="text-gray-300">Pasto, Nariño - Colombia</p>
        </div>

        {/* 🌐 Redes Sociales */}
        <div className="flex gap-6 text-3xl">
          <a
            href="https://www.instagram.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* 💧 Marca personal */}
        <div className="text-center md:text-right">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} — Hecho y realizado por
          </p>
          <h3 className="text-lg font-semibold text-white tracking-wide">
            Esteban Meneses
          </h3>
        </div>
      </div>
    </footer>
  );
}
