import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#295D6E] p-4">
      
      <header className="flex bg-neutral-400/20 w-320 h-16  rounded-[90px] shadow-lg items-center px-6 justify-end ">
      
      <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4 ">Contacto</button>
      <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4">Testimonios</button>
      <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4">Proyectos</button>
      <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4">Experiencia Laboral</button>
      <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4">Hobbies</button>
      <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4">Acerca de Mi</button>
      <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4">Inicio</button>
      

      </header>
 
    </div>
  );
}
