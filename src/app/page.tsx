"use client";
import { useState } from "react";
import CardsCarousel from "../components/CardsCarousel";
import IntroVideo from "../components/IntroVideo";
import Navbar from "../components/Navbar";
import AvatarCard from "@/components/AvatarCard";
import SkillsGrid from "@/components/SkillsGrid";


export default function page() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  if (!showPortfolio) {
    return <IntroVideo onEnter={() => setShowPortfolio(true)} />;
  } 
  return (
    <div className="min-h-screen bg-[#295D6E] p-8">
      <Navbar />
      <AvatarCard/>
      <SkillsGrid/>
      <CardsCarousel/>
      
   


      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
