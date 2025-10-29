"use client";
import { useState } from "react";
import Icon3D from "@/components/3D/Icon3D";
import CardsCarousel from "../components/CardsCarousel";
import IntroVideo from "../components/IntroVideo";


export default function page() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  if (!showPortfolio) {
    return <IntroVideo onEnter={() => setShowPortfolio(true)} />;
  } 
  return (
    <div className="min-h-screen bg-[#295D6E] p-8">
      <div className="flex flex-row gap-[32px] row-start-2 items-center sm:items-start">
        <img src="./icons/m.svg" alt="Logo" className="h-20 shadow-lg rounded-lg" />
        <nav className="flex bg-neutral-400/20 w-320 h-16  rounded-[90px] shadow-lg items-center px-6 justify-center ">
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4 ">Contacto</button>
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4">Testimonios</button>
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4">Proyectos</button>
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4">Experiencia Laboral</button>
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4">Hobbies</button>
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4">Acerca de Mi</button>
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4">Inicio</button>
        </nav>
        
      </div>
      <header className="flex p-30 relative">
        <div className="relative flex items-center w-[700px] h-[283px] bg-gradient-to-r from-[#42788a] to-[#6fb5cc] rounded-2xl shadow-2xl">
          <img src="./images/avatar.png" 
          alt="Avatar" 
          className="absolute -top-10 -left-10 w-[265px] h-[276px] rounded-[25px] border-2 border-[#3a0d0d] shadow-xl opacity-90 object-cover bg-[#d1d8db]" />
         
          <div className="flex flex-col items-start justify-end text-white space-y-2 p-80 "> 
            <h1 className=" text-[50px] leading-none">Esteban</h1>
            <h1 className=" text-[50px] leading-none">Meneses</h1>
            <h3 className=" text-[30px] x-20">zlesteban1008@gmail.com</h3>
            <p className="  text-[35px] ">3148762586</p>
          </div>
          <div className="relative w-[400px] h-[400px] rounded-2xl shadow-xl overflow-hidden">
            <video
              src="/videos/vecteezy_3d-rendering-seamless-loop-motion-of-sci-fi-corridor-with_5357509.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            ></video>

            {/* capa de sombra opcional */}
            <div className="absolute inset-0 bg-black/30 rounded-2xl" />

            {/* contenido encima */}
            <div className="relative z-10 flex items-center justify-center h-full text-white font-semibold text-xl">
              Tu contenido o texto aquí
            </div>
          </div>
        </div>
      </header>
      

     <section className="mt-8">
      <h1 className="flex text-white justify-start text-[40px] mb-6">
        Conocimientos y Herramientas
      </h1>

      <div className="grid grid-cols-5 ">
        <Icon3D ruta="/models/angular.glb" />
        <Icon3D ruta="/models/react.glb" />
        <Icon3D ruta="/models/github.glb" />
        <Icon3D ruta="/models/java.glb" />
        <Icon3D ruta="/models/python.glb" />
        <Icon3D ruta="/models/csharp.glb" />
        <Icon3D ruta="/models/vercel.glb" />
      </div>
    </section>

    <section className="min-h-screen bg-[#295D6E] flex flex-col items-center justify-center">
      <h1>Mi portafolio</h1>
      <CardsCarousel />
      
    </section>


      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
