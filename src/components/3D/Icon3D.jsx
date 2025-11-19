"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, use, useEffect } from "react";

// Componente que carga el modelo GLTF
function Modelo({ ruta }) {
  const { scene } = useGLTF(ruta);
  return <primitive object={scene} scale={15.9} />;
}

// Preload automático del modelo para evitar delay o errores 404

// puedes añadir más modelos si los usas en la página

export default function Icon3D({ ruta }) {
    useEffect(() => {
        useGLTF.preload("/models/github.glb");
        useGLTF.preload("/models/angular.glb");
        useGLTF.preload("/models/react.glb");
        useGLTF.preload("/models/python.glb");
        useGLTF.preload("/models/csharp.glb");
        useGLTF.preload("/models/vercel.glb");
        useGLTF.preload("/models/luffy.glb");
    }, []);
    
    return (
    <div className="w-[120px] h-[140px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Suspense asegura que el render no explote si el modelo tarda en cargar */}
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[10, 10, 5]} />
          <Modelo ruta={ruta} />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
