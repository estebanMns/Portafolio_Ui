"use client";
import Icon3D from "@/components/3D/Icon3D";

export default function Card3D() {
  // Lista de modelos (puedes agregar más fácilmente)
  const modelos = [
    { ruta: "/models/luffy.glb", nombre: "Luffy" },
    { ruta: "/models/nuevo_icono.glb", nombre: "Nuevo Icono" },
  ];

  return (
    <section
      className="relative w-full h-[600px] mt-20 overflow-hidden 
      flex justify-center items-center gap-20 rounded-[35px] 
      bg-gradient-to-r from-[#61A6C6]/30 via-[#295D6E]/40 to-[#61A6C6]/30
      backdrop-blur-[25px] border border-white/20 
      shadow-[0_8px_60px_-10px_rgba(97,166,198,0.6)]
      before:absolute before:inset-0 before:rounded-[35px]
      before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%)]
      before:blur-xl before:pointer-events-none
      transition-all duration-500"
    >
      {modelos.map((modelo, index) => (
        <div
          key={index}
          className="flex flex-col justify-end items-center z-10"
        >
          <Icon3D ruta={modelo.ruta} />
          <p className="text-white text-lg mt-4 font-[cursive] drop-shadow-md">
            {modelo.nombre}
          </p>
        </div>
      ))}
    </section>
  );
}
