"use client";

import React, { useState } from "react";
import Link from "next/link";
import useTranslation from "../hooks/useTranslation";

// 🔹 Componente aparte: Botón de Tema (Dark/Light)
export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Aquí iría la lógica real para cambiar el tema (ej: document.documentElement.classList.toggle('dark'))
  };
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 bg-white/10 backdrop-blur-lg border border-white/20 
                 shadow-lg rounded-full hover:bg-white/20 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        // Luna
        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        // Sol
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar({ onSelect }: { onSelect: (id: number) => void }) {
  const { t } = useTranslation(); // ✅ Sin `lang` ni `toggleLang`
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, label: t.navbar.about || "Acerca de Mi", href: "#inicio" },
    { id: 2, label: t.navbar.experience || "Experiencia Laboral", href: "#experiencia" },
    { id: 3, label: t.navbar.projects || "Proyectos", href: "#proyectos" },
    { id: 4, label: t.navbar.hobbies || "Hobbies", href: "#hobbies" },
    { id: 5, label: t.navbar.contact || "Contacto", href: "#contacto" },
    { id: 6, label: t.navbar.testimonials || "Testimonios", href: "#testimonios" },
  ];

  const baseLinkClasses = `text-white hover:bg-white/15 border border-white/20 text-[20px] 
                          rounded-[60px] px-4 py-2 mx-1 backdrop-blur-[2px] transition-all 
                          duration-300 hover:scale-105 whitespace-nowrap`;

  const handleItemClick = (id: number) => {
    onSelect(id);
    setIsOpen(false);
  };

  return (
    <>
      <ThemeToggle />

      <div className="fixed top-0 left-0 right-0 z-50 p-2">
        <div className="flex justify-center md:justify-start items-center relative max-w-7xl mx-auto">
          <img 
            src="./icons/m.svg" 
            alt="Logo" 
            className="h-14 sm:h-16 md:h-18 lg:h-20 shadow-lg rounded-xl transition-transform duration-300 
                       absolute left-2 md:relative md:left-0 md:mr-6 lg:mr-8" 
          />

          {/* ✅ Sin botón de idioma */}
          <nav
            className="hidden md:flex relative bg-gradient-to-r from-[#61A6C6]/30 via-[#295D6E]/40 to-[#61A6C6]/30
            backdrop-blur-[25px] border border-white/20 shadow-[0_8px_60px_-10px_rgba(97,166,198,0.6)]
            w-auto h-16 rounded-[90px] items-center px-6 lg:px-8 justify-center gap-1.5 
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
                className={`${baseLinkClasses} text-[20px] sm:text-[22px]`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <button
            className="md:hidden absolute right-2 top-0 mt-3 p-3 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-full"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden absolute top-20 left-2 right-2 p-4 mt-1 
                          bg-gradient-to-b from-[#295D6E] to-[#61A6C6]/90 rounded-2xl shadow-2xl border border-white/20">
            <div className="flex flex-col space-y-3 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleItemClick(item.id); }}
                  className={`${baseLinkClasses} w-full text-center text-[20px] sm:text-[22px]`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}