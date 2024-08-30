import { CirclePlay } from "lucide-react";
import { CardMediaOption } from "../components/CardMediaOption";
import GameImage from "../assets/game-image.png";
import MovieImage from "../assets/movie-image.png";

export function AlbumCovers() {
  return (
    <div className="min-h-screen w-full text-white p-8 flex flex-col items-center">
      <div className="relative w-[1000px] h-[300px] bg-cover bg-center rounded-[50px] border-8 shadow-lg overflow-hidden mb-10 bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
          <h2 className="text-[4rem] mb-10 text-white text-center font-extrabold leading-tight">A Melodia da Gestalt</h2>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 bg-blue-600 text-center rounded-t-3xl">
          <h2 className="text-lg mb-2 font-bold">Álbuns e Gestalt</h2>
          <strong className="text-md font-medium">
            Exemplos de como a Gestalt é aplicada em capas de álbuns com diferentes leis visuais.
          </strong>
        </div>
      </div>

      <div className="w-[1000px] mt-8">
        <div className="flex items-center justify-between mb-12 border-b-2 border-white pb-8">
          <div className="relative h-[500px] w-[500px] bg-daftpunk-image bg-cover bg-center cursor-pointer hover:brightness-110 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[30px] block">
            <a 
              href="https://www.youtube.com/watch?v=IluRBvnYMoY&list=PLSbDLF8wQ3oKcstd9ybCSv2lNm_8NTYkI"
              target="_blank" rel="noopener noreferrer"
              className="absolute bottom-3 hover:bg-neutral-300 right-3 h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-lg"
            >
              <CirclePlay color="#1e40af" size={50} />
            </a>
          </div>
          <div className="text-left mx-8 w-[500px]">
            <h2 className="text-2xl mb-2 font-bold">Daft Punk - Random Access Memories (Pregnância)</h2>
            <strong className="text-xl font-medium">
              A capa é clara e direta, apresentando uma única imagem central: os capacetes de robô dos Daft Punk.
            </strong>
          </div>
        </div>

        <div className="flex items-center justify-between mb-12 border-b-2 border-white pb-8">
          <div className="relative h-[500px] w-[500px] bg-beatles-image bg-cover bg-center cursor-pointer hover:brightness-110 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[30px] block">
            <a 
              href="https://www.youtube.com/watch?v=VtXl8xAPAtA&list=PL3PhWT10BW3VDM5IcVodrdUpVIhU8f7Z-"
              target="_blank" rel="noopener noreferrer"
              className="absolute bottom-3 hover:bg-neutral-300 right-3 h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-lg"
            >
              <CirclePlay color="#1e40af" size={50} />
            </a>
          </div>
          <div className="text-left mx-8 w-[500px]">
            <h2 className="text-2xl mb-2 font-bold">The Beatles - "Sgt. Pepper's Lonely Hearts Club Band" (Semelhança)</h2>
            <strong className="text-xl font-medium">
              Os elementos são organizados em uma composição coesa, criando uma sensação de unidade.
            </strong>
          </div>
        </div>

        <div className="flex items-center justify-between mb-12 border-b-2 border-white pb-8">
          <div className="relative h-[500px] w-[500px] bg-rolling-image bg-cover bg-center cursor-pointer hover:brightness-110 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[30px] block">
            <a 
              href="https://www.youtube.com/watch?v=Bar7SzNLnY0&list=PLu1hvmv2UyrqnZzJwPvEvA9PWIyo5M9bb"
              target="_blank" rel="noopener noreferrer"
              className="absolute bottom-3 hover:bg-neutral-300 right-3 h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-lg"
            >
              <CirclePlay color="#1e40af" size={50} />
            </a>
          </div>
          <div className="text-left mx-8 w-[500px]">
            <h2 className="text-2xl mb-2 font-bold">The Rolling Stones - "Sticky Fingers" (Fechamento)</h2>
            <strong className="text-xl font-medium">
              A capa usa a imagem de uma calça jeans com um zíper funcional, fazendo com que o observador complete mentalmente a figura.
            </strong>
          </div>
        </div>

        <div className="flex items-center justify-between mb-12 border-b-2 border-white pb-8">
          <div className="relative h-[500px] w-[500px] bg-bowie-image bg-cover bg-center cursor-pointer hover:brightness-110 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[30px] block">
            <a 
              href="https://www.youtube.com/watch?v=eQGobt4ub6U&list=PL6ogdCG3tAWjqM4m8hHMh5jaab6rs3K_i"
              target="_blank" rel="noopener noreferrer"
              className="absolute bottom-3 hover:bg-neutral-300 right-3 h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-lg"
            >
              <CirclePlay color="#1e40af" size={50} />
            </a>
          </div>
          <div className="text-left mx-8 w-[500px]">
            <h2 className="text-2xl mb-2 font-bold">David Bowie - "Aladdin Sane" (Continuidade)</h2>
            <strong className="text-xl font-medium">
              O raio cria uma linha visual contínua que guia o olhar do espectador através da imagem do rosto de Bowie.
            </strong>
          </div>
        </div>
      </div>

      <div className="w-[1000px] mt-7 bg-gradient-to-t from-blue-950 p-10 rounded-[50px] shadow-lg border-8 border-white">
        <div className="w-full flex justify-center gap-10">
          <CardMediaOption 
            to="/"
            title="Início"
            isBlue
            isHome
          />

          <CardMediaOption 
            to="/media-options/movies-series"
            title="Filmes e Séries"
            image={ MovieImage }
          />

          <CardMediaOption 
            to="/media-options/games"
            title="Jogos"
            image={ GameImage }
            isBlue
            isHome
          />
        </div>
      </div>
    </div>
  );
}
