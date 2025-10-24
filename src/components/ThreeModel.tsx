"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/"); // ruta del modelo
  return <primitive object={scene} scale={1.5} />;
}

export default function ThreeModel() {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gray-900">
      <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} intensity={1.2} />
        <Model />
        <OrbitControls enableZoom={true} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
