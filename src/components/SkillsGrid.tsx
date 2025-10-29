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
    <section className="mt-8">
      <h1 className="flex text-white justify-start text-[40px] mb-6">
        Conocimientos y Herramientas
      </h1>

      <div className="grid grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <Icon3D key={index} ruta={skill.ruta} />
        ))}
      </div>
    </section>
  );
}
