"use client";
import Icon3D from "@/components/3D/Icon3D";

export default function SkillsGrid() {
  // Lista de modelos 3D
  const skills = [
    { ruta: "/models/angular.glb" },
    { ruta: "/models/react.glb" },
    { ruta: "/models/github.glb" },
    { ruta: "/models/java.glb" },
    { ruta: "/models/python.glb" },
    { ruta: "/models/csharp.glb" },
    { ruta: "/models/vercel.glb" },
  ];

  // 🔹 Clases de Glassmorphism (Textura Líquida)
  const glassmorphismClasses = `
    bg-gradient-to-r from-[#61A6C6]/30 via-[#295D6E]/40 to-[#61A6C6]/30 
    backdrop-blur-[25px] border border-white/20 
    shadow-[0_8px_60px_-10px_rgba(97,166,198,0.6)] 
    rounded-2xl 
    
    /* Efecto de brillo de glassmorphism */
    before:absolute before:inset-0 before:rounded-2xl
    before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%)]
    before:blur-xl before:pointer-events-none
  `;

  return (
    // 🔹 Contenedor principal: Quitamos 'mt-16' para darle más control al layout principal.
    <section className="flex flex-col items-start w-full px-2 md:px-10">
      
      {/* 🔹 Título: Lo centramos en móvil y le damos margen horizontal. */}
      <div className="flex w-full mb-6 justify-center md:justify-start">
        <h1 className="text-white text-[30px] md:text-[36px] font-semibold tracking-wide">Conocimientos y Herramientas</h1>
      </div>

      {/* 🔹 Cuadrícula de Íconos: Aplicamos responsividad y textura líquida */}
      <div className={`relative w-full p-4 md:p-8 ${glassmorphismClasses}`}>
        <div 
            // CAMBIO CLAVE: Cuadrícula responsiva
            // Móvil: 3 columnas | Pantalla pequeña (sm): 4 columnas | Escritorio (md): 5 columnas
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8 justify-items-center"
        >
          {skills.map((skill, index) => (
            // Contenedor de cada ícono
            <div key={index} className="flex justify-center items-center w-full h-[80px] md:h-[100px]">
              <Icon3D ruta={skill.ruta} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}