"use client";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-row gap-[32px] row-start-2 items-center sm:items-start">
      {/* Logo */}
      <img
        src="./icons/m.svg"
        alt="Logo"
        className="h-20 shadow-lg rounded-lg"
      />

      {/* Barra de navegación */}
      <nav className="flex bg-neutral-400/20 w-320 h-16 rounded-[90px] shadow-lg items-center px-6 justify-center">
        <a
          href="#contacto"
          className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4"
        >
          Contacto
        </a>
        <a
          href="#testimonios"
          className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4"
        >
          Testimonios
        </a>
        <a
          href="#proyectos"
          className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4"
        >
          Proyectos
        </a>
        <a
          href="#experiencia"
          className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4"
        >
          Experiencia Laboral
        </a>
        <a
          href="#hobbies"
          className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4"
        >
          Hobbies
        </a>
        <a
          href="#acerca"
          className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4"
        >
          Acerca de Mi
        </a>
        <a
          href="#inicio"
          className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4"
        >
          Inicio
        </a>
      </nav>
    </div>
  );
}
