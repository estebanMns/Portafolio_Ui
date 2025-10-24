import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#295D6E] p-8">
      <main className="flex flex-row gap-[32px] row-start-2 items-center sm:items-start">
        <img src="./icons/m.svg" alt="Logo" className="h-20 shadow-lg rounded-lg" />
        <nav className="flex bg-neutral-400/20 w-320 h-16  rounded-[90px] shadow-lg items-center px-6 justify-center ">
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4 ">Contacto</button>
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4">Testimonios</button>
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4">Proyectos</button>
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4">Experiencia Laboral</button>
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4">Hobbies</button>
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4">Acerca de Mi</button>
          <button className="text-[25px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px]border border-neutral-400/20 rounded-[60px] p-4">Inicio</button>
        </nav>
      </main>
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

          <div className="">

          </div>

        </div>
      </header>

      <section>
        <h1 className="flex text-white justify-start text-[40px]">Conocimientos y Herramientas</h1>
        // iconos de herramientas y conocimientos
          <div className="grid grid-cols-5 p-30">  
            <img src="./icnons/angular.jpg" alt="Angular" className="w-[110] h-[120]"/>
            <img src="./images/" alt="React" className="w-[90] h-[90]"/>
            <img src="./images/" alt="Python" className="w-[90] h-[90]"/>
            <img src="./images/" alt="Csharp" className="w-[110] h-[120]"/>
            <img src="./icons/vercel.svg" alt="Vercel" className="w-[110] h-[120]"/>
            <img src="./images/java.jpeg" alt="Java" className="w-[110] h-[120]"/>
            <img src="./images/" alt="R" className="w-[110] h-[120]"/>
            <img src="./images/js.png" alt="JavaScript" className="w-[110] h-[120]"/>
            <img src="./images/vsc.jpeg" alt="Visual Studio" className="w-[110] h-[120]"/>
            <img src="./images/Github.png" alt="GitHub" className="w-[110] h-[120]"/>
          </div>
      </section>



      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
