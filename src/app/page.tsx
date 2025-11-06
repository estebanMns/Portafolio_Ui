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
    <div className="min-h-screen bg-[#295D6E] flex flex-col items-start justify-center overflow-hidden p-2 gap-10">
      <Navbar onSelect={(id) => setSelectedFromNav(id)} />
        
        <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
        
        {/* Columna izquierda: Avatar + Skills */}
        <div className="flex flex-col gap-8">
          <AvatarCard />
          <SkillsGrid />
        </div>

        {/* Columna derecha: objeto 3D */}
        <div className="flex items-center justify-center">
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
