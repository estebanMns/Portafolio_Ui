"use client";
import Navbar from "./Navbar";
import AvatarCard from "./AvatarCard";
import CardsCarousel from "./CardsCarousel";
import { useState } from "react";

export default function Portfolio() {
  const [index, setIndex] = useState<number>(0); // <- aquí se declara index

  // onSelect sigue siendo obligatorio y recibe números:
  // usaremos la convención:  1 => siguiente, -1 => anterior, otros (>9) => secciones específicas
  const handleSelect = (id: number) => {
    if (id === 1) {
      setIndex((prev) => prev + 1); // siguiente
    } else if (id === -1) {
      setIndex((prev) => Math.max(prev - 1, 0)); // anterior (no bajar de 0)
    } else {
      // si pasas números grandes para secciones, puedes mapearlos a un index concreto
      // ejemplo: usaste 10,20,30 en el navbar para secciones → mapeo simple:
      if (id >= 10) {
        const sectionIdx = Math.floor(id / 10) - 1; // 10 -> 0, 20 -> 1, 30 -> 2...
        setIndex(sectionIdx);
      } else {
        // en cualquier otro caso, prueba guardar directamente (protección)
        setIndex(id);
      }
    }
  };


  return (
    <div className="min-h-screen bg-[#295D6E] p-8">
      <Navbar onSelect={handleSelect} />
      <header className="flex p-20 relative">
        <AvatarCard />
      </header>

      <section className="mt-8">
        <h1 className="flex text-white justify-start text-[40px] mb-6">
          Conocimientos y Herramientas
        </h1>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl mb-4">Mi portafolio</h1>
        <CardsCarousel selectedFromNav={null} onClose={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </section>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* tu footer */}
      </footer>
    </div>
  );
}
