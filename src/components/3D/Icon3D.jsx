"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense } from "react";

function Modelo({ ruta }) {
  const { scene } = useGLTF(ruta);
  return <primitive object={scene} scale={2} />;
}

export default function Icon3D({ ruta }) {
  return (
    <div className="w-[120px] h-[120px] bg-[#1e293b] rounded-2xl shadow-md flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <Suspense fallback={null}>
          <Modelo ruta={ruta} />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
