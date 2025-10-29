export default function AvatarCard() {
  return (
    <div className="relative flex items-center w-[700px] h-[283px] bg-gradient-to-r from-[#42788a] to-[#6fb5cc] rounded-2xl shadow-2xl">
      <img
        src="./images/avatar.png"
        alt="Avatar"
        className="absolute -top-10 -left-10 w-[265px] h-[276px] rounded-[25px] border-2 border-[#3a0d0d] shadow-xl opacity-90 object-cover bg-[#d1d8db]"
      />
      <div className="flex flex-col items-start justify-end text-white space-y-2 p-80">
        <h1 className="text-[50px] leading-none">Esteban</h1>
        <h1 className="text-[50px] leading-none">Meneses</h1>
        <h3 className="text-[30px]">zlesteban1008@gmail.com</h3>
        <p className="text-[35px]">3148762586</p>
      </div>
    </div>
  );
}
