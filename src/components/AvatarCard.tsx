import Image from "next/image";

export default function AvatarCard() {
  // 🔹 Clases de Glassmorphism (Textura Líquida)
  const glassmorphismClasses = `
    bg-gradient-to-r from-[#61A6C6]/30 via-[#295D6E]/40 to-[#61A6C6]/30 
    backdrop-blur-[25px] border border-white/20 
    shadow-[0_8px_60px_-10px_rgba(97,166,198,0.6)] 
    rounded-2xl 
    
    /* Efecto de brillo de glassmorphism */
    before:absolute before:inset-0 before:rounded-2xl
    before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%)]
    before:blur-xl before:pointer-events-none
  `;
  
  return (
    
    <div className="flex p-4 md:p-10 relative w-full"> 
        <div className={`relative flex items-center w-full h-[300px] md:h-[283px] ${glassmorphismClasses}`}>
          <img 
            src="./images/avatar.png" 
            alt="Avatar" 
            className="absolute -top-10 -left-10 w-[265px] h-[276px] rounded-[25px] border-2 border-[#3a0d0d] shadow-xl opacity-90 object-cover bg-[#d1d8db]" 
          />
         
          {/* 🔹 Contenedor de Texto: Hacemos el texto responsivo y lo posicionamos para evitar el avatar fijo. */}
          <div className="flex flex-col items-start justify-center text-white space-y-1 md:space-y-2 h-full 
                        
            /* Padding ajustado responsivamente para evitar la imagen FIJA (265px de ancho) */
            pl-[180px] pt-10 md:pl-[280px] md:pt-0"> 
            
            {/* 🔹 Títulos: Tamaños de fuente responsivos */}
            <h1 className="text-[35px] md:text-[50px] leading-none font-serif italic">Esteban</h1>
            <h1 className="text-[35px] md:text-[50px] leading-none font-serif italic">Meneses</h1>
            
            {/* 🔹 Contacto: Tamaños de fuente responsivos */}
            <h3 className="text-[18px] md:text-[30px] font-serif italic pt-2">zlesteban1008@gmail.com</h3>
            <p className="text-[20px] md:text-[35px] font-serif italic">3148762586</p>
          </div>
          
        </div>
      </div>
  );
}