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

  return (
    
    <section className="flex flex-col items-start mt-16 w-full ">
      <div className="flex w-[680px] mb-8 justify-center">
        <h1 className="text-white text-[36px] mb-8 font-semibold tracking-wide">Conocimientos y Herramientas</h1>
      </div>

      <div className="grid grid-cols-5 gap-8 justify-items-center bg-[#2c6074]/40 backdrop-blur-md p-8 w-[680px]">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-center items-center w-[100px] h-[100px]">
            <Icon3D ruta={skill.ruta} />
          </div>
        ))}
      </div>
    </section>
  );
}
