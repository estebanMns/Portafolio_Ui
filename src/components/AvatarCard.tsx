import Image from "next/image";

export default function AvatarCard() {
  const glassmorphismClasses = `
    bg-gradient-to-r from-[#61A6C6]/30 via-[#295D6E]/40 to-[#61A6C6]/30 
    backdrop-blur-[25px] border border-white/20 
    shadow-[0_8px_60px_-10px_rgba(97,166,198,0.6)] 
    rounded-2xl 
    before:absolute before:inset-0 before:rounded-2xl
    before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%)]
    before:blur-xl before:pointer-events-none
  `;
  
  return (
    // 🔹 Contenedor principal: Ajuste de padding/margen superior para bajar la tarjeta
    // Usamos 'pt-20' para que baje en móvil, y 'md:pt-10' para que baje un poco menos en desktop.
    // Añadimos 'mb-8' para darle un margen inferior, separándola de las habilidades.
    <div className="flex pt-20 pb-4 px-20 md:p-30 relative w-full mb-8"> 
        
        {/* 🔹 Tarjeta: Aplicamos glassmorphism, w-full, y altura responsiva. */}
        <div className={`relative flex items-centerr w-full h-[300px] md:h-[283px] ${glassmorphismClasses}`}>
          <img 
            src="./images/avatar.png" 
            alt="Avatar" 
            className="absolute -top-10 -left-10 w-[265px] h-[276px] rounded-[25px] border-2 border-[#3a0d0d] shadow-xl opacity-90 object-cover bg-[#d1d8db]" 
          />
         
          {/* 🔹 Contenedor de Texto: Hacemos el texto responsivo y lo posicionamos para evitar el avatar fijo. */}
          <div className="flex flex-col items-end justify-center text-white space-y-1 md:space-y-2 h-full pl-[180px] pt-10 md:pl-[280px] md:pt-0"> 
            
            {/* 🔹 Títulos: Tamaños de fuente responsivos */}
            <h1 className="md:text-[30px] leading-none">Esteban</h1>
            <h1 className= "md:text-[30px] leading-none">Meneses</h1>
            
            
            
            {/* 🔹 Contacto: Tamaños de fuente responsivos */}
            <h3 className=" md:text-[15px] ">zlesteban1008@gmail.com</h3>
            <p className=" md:text-[15px] ">3148762586</p>
          </div>
          
        </div>
      </div>
  );
}