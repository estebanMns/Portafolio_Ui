"use client";
import { useState, useRef, useEffect } from "react";
import CardsCarousel from "../components/CardsCarousel";
import IntroVideo from "../components/IntroVideo";
import Navbar from "../components/Navbar";
import AvatarCard from "@/components/AvatarCard";
import SkillsGrid from "@/components/SkillsGrid";
import Footer from "@/components/footer"

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
    <div className="min-h-screen bg-[#295D6E] flex flex-col items-start justify-center overflow-hidden p-10 gap-10">
      <Navbar onSelect={(id) => setSelectedFromNav(id)} />
      <AvatarCard />
      <SkillsGrid />

      <div ref={carouselRef} className="w-full flex justify-center">
        <CardsCarousel selectedFromNav={selectedFromNav} onClose={() => setSelectedFromNav(null)}/>
      </div>

      <Footer />
    </div>
  );
}
