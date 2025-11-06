"use client";
import { useState, useRef, useEffect } from "react";
import CardsCarousel from "../components/CardsCarousel";
import IntroVideo from "../components/IntroVideo";
import Navbar from "../components/Navbar";
import AvatarCard from "@/components/AvatarCard";
import SkillsGrid from "@/components/SkillsGrid";
import Footer from "@/components/footer"
import LuffyScene from "@/components/LuffyScene";


export default function Page() {
  const [selectedFromNav, setSelectedFromNav] = useState<number | null>(null);
  const [showPortfolio, setShowPortfolio] = useState(false);
  
  // 🪄 Referencia al carrusel para hacer scroll
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Cuando se selecciona algo desde el nav, baja hasta el carrusel
  useEffect(() => {
    if (selectedFromNav !== null && carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedFromNav]);

  if (!showPortfolio) {
    return <IntroVideo onEnter={() => setShowPortfolio(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#16394a] to-[#295D6E] flex flex-col items-start justify-center overflow-hidden p-2 gap-10">
      <Navbar onSelect={(id) => setSelectedFromNav(id)} />
        
        {/* CAMBIOS CLAVE AQUÍ: grid-cols-1 y md:grid-cols-2 */}
        <div className="grid grid-cols-1 gap-8 w-full max-w-6xl md:grid-cols-2">
        
        {/* 1. Columna Avatar + Skills */}
        {/* En móvil (por defecto), aparece primero (arriba). En desktop (md), se va a la DERECHA (order-2). */}
        <div className="flex flex-col gap-8 md:order-1">
          <AvatarCard />
          <SkillsGrid />
        </div>

        {/* 2. Columna objeto 3D (LuffyScene) */}
        {/* En móvil, aparece de segundo (abajo). En desktop (md), se queda a la IZQUIERDA (order-1). */}
        <div className="flex items-center justify-center md:order-2">
          <LuffyScene />
        </div>

      </div>

      <div ref={carouselRef} className="w-full flex justify-end">
        <CardsCarousel selectedFromNav={selectedFromNav} onClose={() => setSelectedFromNav(null)}/>
      </div>

      <Footer />
    </div>
  );
}
