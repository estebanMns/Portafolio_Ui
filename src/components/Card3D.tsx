"use client";
import Icon3D from "@/components/3D/Icon3D";
import { section } from "framer-motion/client";

export default function Card3D() {
    const Luffy =[
        { ruta: "/models/luffy.glb" },
    ]
    return (
        <section className="relative w-[400px] h-[400px] rounded-[50px] bg-gradient-to-b from-[#61A6C6]/40 to-[#295D6E]/30 backdrop-blur-[25px] border border-white/20 shadow-[0_8px_60px_-10px_rgba(97,166,198,0.6)] overflow-hiddenbefore:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_70%)]before:blur-2xl before:animate-[liquid_8s_infinite_linear]">
            
        </section>
    )
}