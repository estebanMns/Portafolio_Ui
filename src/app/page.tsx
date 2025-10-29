"use client";
import { useState } from "react";
import CardsCarousel from "../components/CardsCarousel";
import IntroVideo from "../components/IntroVideo";
import Navbar from "../components/Navbar";
import AvatarCard from "@/components/AvatarCard";
import SkillsGrid from "@/components/SkillsGrid";


export default function page() {
  const [selectedFromNav, setSelectedFromNav] = useState<number | null>(null);
  const [showPortfolio, setShowPortfolio] = useState(false);
  if (!showPortfolio) {
    return <IntroVideo onEnter={() => setShowPortfolio(true)} />;
  } 
  return (
    <div className="min-h-screen bg-[#295D6E] p-8 lex flex-col items-center justify-center min-h-screen bg-[#295D6E] overflow-hidden">
      
      <Navbar onSelect={(id) => setSelectedFromNav(id)} />
      <AvatarCard/>
      <SkillsGrid/>
      <CardsCarousel selectedFromNav={selectedFromNav} onClose={() => setSelectedFromNav(null)} />
   


      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
