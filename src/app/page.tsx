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
      <div className="flex flex-col flex-row gap-10">
          <div className="lg:w-[60%] p-5">
            <AvatarCard />
            <SkillsGrid />
          </div>

          <div className="flex w-[40%] h-[600px] md:h-[700px] p-27">
            <LuffyScene />
          </div>
        </div>
      
      <CardsCarousel selectedFromNav={selectedFromNav} onClose={() => setSelectedFromNav(null)}/>
      <Footer />
    </div>
  );
}
