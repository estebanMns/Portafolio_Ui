"use client";
import Navbar from "./Navbar";
import AvatarCard from "./AvatarCard";
import CardsCarousel from "./CardsCarousel";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#295D6E] p-8">
      <Navbar />
      <header className="flex p-30 relative">
        <AvatarCard />
      </header>

      <section className="mt-8">
        <h1 className="flex text-white justify-start text-[40px] mb-6">
          Conocimientos y Herramientas
        </h1>
        <KnowledgeGrid />
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl mb-4">Mi portafolio</h1>
        <CardsCarousel />
      </section>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* tu footer */}
      </footer>
    </div>
  );
}
