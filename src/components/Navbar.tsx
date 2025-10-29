"use client";

import React from "react";
import Link from "next/link";

export default function Navbar({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="flex flex-row gap-[32px] row-start-2 items-center sm:items-start justify-center relative z-50">
      {/* Logo */}
      <img src="./icons/m.svg" alt="Logo" className="h-20 shadow-lg rounded-xl transition-transform duration-300"/>
      {/* 🔹 Textura líquida mejorada */}
      <nav
        className="relative flex bg-gradient-to-r from-[#61A6C6]/30 via-[#295D6E]/40 to-[#61A6C6]/30
        backdrop-blur-[25px] border border-white/20 shadow-[0_8px_60px_-10px_rgba(97,166,198,0.6)]
        w-auto h-16 rounded-[90px] items-center px-8 justify-center gap-3
        before:absolute before:inset-0 before:rounded-[90px]
        before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%)]
        before:blur-xl before:pointer-events-none
        transition-all duration-500"
      >
        {/* 🔗 Cada Link abre una card */}
        <Link
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            onSelect("inicio");
          }}
          className="text-[22px] text-white hover:bg-white/15 border border-white/20
          rounded-[60px] px-4 py-2 mx-1 backdrop-blur-[2px] transition-all duration-300 hover:scale-105"
        >
          Inicio
        </Link>

        <Link
          href="#acerca"
          onClick={(e) => {
            e.preventDefault();
            onSelect("acerca");
          }}
          className="text-[22px] text-white hover:bg-white/15 border border-white/20
          rounded-[60px] px-4 py-2 mx-1 backdrop-blur-[2px] transition-all duration-300 hover:scale-105"
        >
          Acerca de Mi
        </Link>

        <Link
          href="#experiencia"
          onClick={(e) => {
            e.preventDefault();
            onSelect("experiencia");
          }}
          className="text-[22px] text-white hover:bg-white/15 border border-white/20
          rounded-[60px] px-4 py-2 mx-1 backdrop-blur-[2px] transition-all duration-300 hover:scale-105"
        >
          Experiencia Laboral
        </Link>

        <Link
          href="#proyectos"
          onClick={(e) => {
            e.preventDefault();
            onSelect("proyectos");
          }}
          className="text-[22px] text-white hover:bg-white/15 border border-white/20
          rounded-[60px] px-4 py-2 mx-1 backdrop-blur-[2px] transition-all duration-300 hover:scale-105"
        >
          Proyectos
        </Link>

        <Link
          href="#testimonios"
          onClick={(e) => {
            e.preventDefault();
            onSelect("testimonios");
          }}
          className="text-[22px] text-white hover:bg-white/15 border border-white/20
          rounded-[60px] px-4 py-2 mx-1 backdrop-blur-[2px] transition-all duration-300 hover:scale-105"
        >
          Testimonios
        </Link>

        <Link
          href="#hobbies"
          onClick={(e) => {
            e.preventDefault();
            onSelect("hobbies");
          }}
          className="text-[22px] text-white hover:bg-white/15 border border-white/20
          rounded-[60px] px-4 py-2 mx-1 backdrop-blur-[2px] transition-all duration-300 hover:scale-105"
        >
          Hobbies
        </Link>

        <Link
          href="#contacto"
          onClick={(e) => {
            e.preventDefault();
            onSelect("contacto");
          }}
          className="text-[22px] text-white hover:bg-white/15 border border-white/20
          rounded-[60px] px-4 py-2 mx-1 backdrop-blur-[2px] transition-all duration-300 hover:scale-105"
        >
          Contacto
        </Link>
      </nav>
    </div>
  );
}
