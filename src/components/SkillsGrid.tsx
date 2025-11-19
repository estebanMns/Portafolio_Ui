"use client";
import Icon3D from "@/components/3D/Icon3D";

export default function SkillsGrid() {
  const skills = [
    { ruta: "/models/angular.glb" },
    { ruta: "/models/react.glb" },
    { ruta: "/models/github.glb" },
    { ruta: "/models/java.glb" },
    { ruta: "/models/python.glb" },
    { ruta: "/models/csharp.glb" },
    { ruta: "/models/vercel.glb" },
  ];

  const glassmorphismClasses = `
    bg-gradient-to-r from-[#61A6C6]/30 via-[#295D6E]/40 to-[#61A6C6]/30 
    backdrop-blur-[25px] border border-white/20 
    shadow-[0_8px_60px_-10px_rgba(97,166,198,0.6)] 
    rounded-2xl 
    before:absolute before:inset-0 before:rounded-2xl
    before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%)]
    before:blur-xl before:pointer-events-none
  `;

  return (
    <section className="flex flex-col items-start w-[50rem] px-4 md:px-8 lg:px-12 xl:px-16">
      
      <div className="w-full mb-6 flex justify-center md:justify-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-semibold tracking-wide text-center ">
          Conocimientos y Herramientas
        </h1>
      </div>

      <div className={`relative w-full p-4 sm:p-6 md:p-6 lg:p-8 ${glassmorphismClasses}`}>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center w-full min-h-[70px] sm:min-h-[80px] md:min-h-[90px] lg:min-h-[100px]"
            >
              <Icon3D ruta={skill.ruta} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}