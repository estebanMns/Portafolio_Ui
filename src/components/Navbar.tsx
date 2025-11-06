"use client";

import React, { useState } from "react";
import Link from "next/link";
import useTranslation from "../hooks/useTranslation";

export default function Navbar({ onSelect }: { onSelect: (id: number) => void }) {
  const { t, lang, toggleLang } = useTranslation();
  // 🔹 Nuevo estado para controlar la apertura del menú móvil
  const [isOpen, setIsOpen] = useState(false);

  // 🔹 Define los ítems de navegación con sus IDs y traducciones
  const navItems = [
    { id: 1, label: t.navbar.about || "Acerca de Mi", href: "#inicio" },
    { id: 2, label: t.navbar.experience || "Experiencia Laboral", href: "#experiencia" },
    { id: 3, label: t.navbar.projects || "Proyectos", href: "#proyectos" },
    { id: 4, label: t.navbar.hobbies || "Hobbies", href: "#hobbies" },
    { id: 5, label: t.navbar.contact || "Contacto", href: "#contacto" },
    { id: 6, label: t.navbar.testimonials || "Testimonios", href: "#testimonios" },
  ];

  // 🔹 Clases base para los enlaces, simplificadas para usar en el bucle
  const baseLinkClasses = `text-white hover:bg-white/15 border border-white/20 text-[20px] 
                          rounded-[60px] px-4 py-2 mx-1 backdrop-blur-[2px] transition-all 
                          duration-300 hover:scale-105 whitespace-nowrap`;

  const handleItemClick = (id: number) => {
    onSelect(id);
    setIsOpen(false); // Cierra el menú al hacer clic en un ítem (solo afecta al menú móvil)
  };

  return (
    // Contenedor principal: Fijo en la parte superior para que la barra de navegación no se mueva.
    <div className="fixed top-0 left-0 right-0 z-50 p-2">
        
      {/* Contenedor flexible para alinear el Logo, el NAV y el Botón de Hamburguesa */}
      <div className="flex justify-center md:justify-start items-center relative max-w-7xl mx-auto">
      
        {/* Logo (Movido al borde superior izquierdo para mejor UX móvil/escritorio) */}
        <img 
          src="./icons/m.svg" 
          alt="Logo" 
          className="h-16 md:h-20 shadow-lg rounded-xl transition-transform duration-300 absolute left-2 md:relative md:left-0 md:mr-8" 
        />

        {/* 1. NAV para ESCRITORIO (hidden en móvil, flex en mediano) */}
        <nav
          className="hidden md:flex relative bg-gradient-to-r from-[#61A6C6]/30 via-[#295D6E]/40 to-[#61A6C6]/30
          backdrop-blur-[25px] border border-white/20 shadow-[0_8px_60px_-10px_rgba(97,166,198,0.6)]
          w-auto h-16 rounded-[90px] items-center px-8 justify-center gap-1.5 
          before:absolute before:inset-0 before:rounded-[90px]
          before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%)]
          before:blur-xl before:pointer-events-none
          transition-all duration-500"
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleItemClick(item.id); }}
              className={`${baseLinkClasses} text-[22px]`}
            >
              {item.label}
            </Link>
          ))}

          {/* Botón de idioma ESCRITORIO */}
          <button
            onClick={toggleLang}
            className="text-[20px] text-white border border-white/20 rounded-[60px] px-4 py-2 ml-3 hover:bg-white/15 transition-all duration-300 hover:scale-105"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </nav>
        
        {/* 2. BOTÓN HAMBURGUESA (visible solo en móvil) */}
        <button
          className="md:hidden absolute right-2 top-0 mt-3 p-3 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {/* Icono de Hamburguesa o Cerrar */}
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* 3. MENÚ DESPLEGABLE MÓVIL (visible solo si isOpen es true y es móvil) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-2 right-2 p-4 mt-1 
                        bg-gradient-to-b from-[#295D6E] to-[#61A6C6]/90 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex flex-col space-y-3 items-center">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleItemClick(item.id); }}
                // w-full para que el botón ocupe todo el ancho
                className={`${baseLinkClasses} w-full text-center text-[22px]`} 
              >
                {item.label}
              </Link>
            ))}

            {/* Botón de idioma MÓVIL */}
            <button
                onClick={toggleLang}
                className={`${baseLinkClasses} w-full text-center text-[20px]`}
            >
                {lang === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}