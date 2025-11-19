"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense } from "react";

function LuffyModel() {
  const { scene } = useGLTF("/models/luffy.glb");
  return <primitive object={scene} scale={3.5} position={[0, -1.5, 0]} />;
}

export default function LuffyScene() {
  return (
    <div
      className="relative w-[50rem] h-[550px] md:h-[900px] flex items-center 
      bg-gradient-to-r from-[#61A6C6]/30 via-[#295D6E]/40 to-[#61A6C6]/30
      backdrop-blur-[25px] border border-white/20
      shadow-[0_8px_60px_-10px_rgba(97,166,198,0.6)]
      rounded-[35px] overflow-hidden
      before:absolute before:inset-0 before:rounded-[35px]
      before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%)]
      before:blur-xl before:pointer-events-none"
    >
      {/* 🔹 Contenedor interno para alinear a la DERECHA */}
      <div className="flex top-0 bottom-0 w-full h-full">
        <Canvas camera={{ position: [0, 1.5, 6], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} />
            <Environment preset="sunset" />
            <LuffyModel />
            <OrbitControls 
              enableZoom={true} 
              minDistance={4} 
              maxDistance={10} 
              enablePan={false}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}