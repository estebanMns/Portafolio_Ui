export default function Navbar() {
  return (
    <nav className="flex bg-neutral-400/20 w-320 h-16 rounded-[90px] shadow-lg items-center px-6 justify-center mb-8">
      {["Contacto", "Testimonios", "Proyectos", "Experiencia", "Hobbies", "Acerca de mí", "Inicio"].map((item) => (
        <button
          key={item}
          className="text-[22px] text-neutral-300 hover:bg-neutral-400/30 backdrop-blur-[1px] border border-neutral-400/20 rounded-[60px] p-4 mx-1"
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
