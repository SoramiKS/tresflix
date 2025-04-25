import Image from "next/image";

export default function MovieCard({ number, imageSrc }: { number: number; imageSrc: string }) {
  return (
    <div className="relative w-72 h-52 group transition-all duration-300 ease-in-out">
      {/* Angka di background */}
      <div className="absolute text-[7rem] sm:text-[10rem] font-extrabold text-[#2f4156] opacity-40 z-0 leading-none 
        transition-transform duration-300 ease-in-out group-hover:translate-x-4">
        {number}
      </div>

      {/* Gambar poster */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 
        transition-transform duration-300 ease-in-out group-hover:-translate-x-2">
        <Image
          src={imageSrc}
          alt={`Movie ${number}`}
          width={200}
          height={280}
          className="shadow-md rounded-xl"
        />
      </div>
    </div>
  );
}
