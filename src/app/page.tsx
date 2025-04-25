import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import MovieCard from "@/components/filmcard";



export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] p-12">
      <main className="flex flex-col row-start-2">
        <div className="w-[500] mx-auto bg-[#2f4156] p-2 px-4 rounded-xl flex items-center">
          <button className="text-white">
          <CiSearch />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 bg-transparent text-white border-none focus:outline-none placeholder:text-gray-300 ml-2"
          />
        </div>

        <div className="">
        <h1 className="text-[#2f4156] text-center p-8 text-4xl text-shadow-black">TOP 10 MOVIES</h1>
        <div className="grid grid-cols-5 lg:grid-cols-5 sm:grid-cols-3 place-items-center gap-y-15">
        <MovieCard number={1} imageSrc="/poster/poster-1.jpeg" />
        <MovieCard number={2} imageSrc="/poster/poster-1.jpeg" />
        <MovieCard number={3} imageSrc="/poster/poster-1.jpeg" />
        <MovieCard number={4} imageSrc="/poster/poster-1.jpeg" />
        <MovieCard number={5} imageSrc="/poster/poster-1.jpeg" />
        <MovieCard number={6} imageSrc="/poster/poster-1.jpeg" />
        <MovieCard number={7} imageSrc="/poster/poster-1.jpeg" />
        <MovieCard number={8} imageSrc="/poster/poster-1.jpeg" />
        <MovieCard number={9} imageSrc="/poster/poster-1.jpeg" />
        <MovieCard number={0} imageSrc="/poster/poster-1.jpeg" />
        </div>
        </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
