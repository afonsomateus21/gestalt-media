import { CardMediaOption } from "../components/CardMediaOption";
import GameImage from "../assets/game-image.png";
import MovieImage from "../assets/movie-image.png";

export function AlbumCovers() {
  return (
    <div className="min-h-screen w-full  text-white p-8 flex flex-col items-center">
      <div className="relative w-full max-w-[500px] h-[500px] bg-cover bg-center rounded-lg border-4 border-white shadow-lg">
        <div className="absolute inset-0 p-4 flex flex-col items-center justify-center">
          <h1 className="text-[3rem] mb-4">Gestalt em Capas de Álbuns</h1>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex-1 flex items-center justify-center">
            <div className="relative h-[80%] w-[80%] bg-cover bg-center cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg rounded-lg">
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black opacity-50"></div>
            </div>
          </div>

          <div className="text-center mx-8 py-4">
            <h2 className="text-2xl mb-2">Álbuns e Gestalt</h2>
            <strong className="text-xl">
              Exemplos de como a Gestalt é aplicada em capas de álbuns com diferentes leis visuais.
            </strong>
          </div>
        </div>
      </div>

      <div className="w-[1000px] mt-8">
        <div className="flex items-center justify-between mb-12">
          <div className="h-[500px] w-[500px] bg-daftpunk-image bg-cover bg-center cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg rounded-lg"></div>
          <div className="text-center mx-8 w-[500px]">
            <h2 className="text-2xl mb-2">Daft Punk - Random Access Memories (Pregnância)</h2>
            <strong className="text-xl">
              A capa é clara e direta, apresentando uma única imagem central: os capacetes de robô dos Daft Punk.
            </strong>
          </div>
          <div className="flex justify-center">
            <div className="relative w-32 h-32 border-2 border-neutral-300 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-neutral-300 clip-path-circle transition-all duration-500 hover:clip-path-polygon"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-12">
          <div className="h-[400px] w-[400px] bg-beatles-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg rounded-lg"></div>
          <div className="text-center mx-8 w-[500px]">
            <h2 className="text-2xl mb-2">The Beatles - "Sgt. Pepper's Lonely Hearts Club Band" (Semelhança)</h2>
            <strong className="text-xl">
              Os elementos são organizados em uma composição coesa, criando uma sensação de unidade.
            </strong>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-neutral-300 h-8 w-8 rounded-full hover:bg-blue-500 transition-all duration-300"></div>
              <div className="bg-neutral-300 h-8 w-8 rounded-full hover:bg-blue-500 transition-all duration-300"></div>
              <div className="bg-neutral-300 h-8 w-8 rounded-full hover:bg-blue-500 transition-all duration-300"></div>
              <div className="bg-neutral-300 h-8 w-8 rounded-full hover:bg-blue-500 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-12">
          <div className="h-[400px] w-[400px] bg-rolling-image bg-cover bg-center cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg rounded-lg"></div>
          <div className="text-center mx-8 w-[500px]">
            <h2 className="text-2xl mb-2">The Rolling Stones - "Sticky Fingers" (Fechamento)</h2>
            <strong className="text-xl">
              A capa usa a imagem de uma calça jeans com um zíper funcional, fazendo com que o observador complete mentalmente a figura.
            </strong>
          </div>
          <div className="flex justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute bg-neutral-300 h-8 w-8 rounded-full top-0 left-0 transition-all duration-500 hover:transform hover:translate-x-12 hover:translate-y-12"></div>
              <div className="absolute bg-neutral-300 h-8 w-8 rounded-full top-0 right-0 transition-all duration-500 hover:transform hover:-translate-x-12 hover:translate-y-12"></div>
              <div className="absolute bg-neutral-300 h-8 w-8 rounded-full bottom-0 left-0 transition-all duration-500 hover:transform hover:translate-x-12 hover:-translate-y-12"></div>
              <div className="absolute bg-neutral-300 h-8 w-8 rounded-full bottom-0 right-0 transition-all duration-500 hover:transform hover:-translate-x-12 hover:-translate-y-12"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-12 relative">
          <div className="relative h-[300px] w-[300px] bg-bowie-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg rounded-lg z-10">
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black opacity-50"></div>
          </div>
          <div className="relative flex flex-col items-center mx-8 w-[500px] z-10">
            <h2 className="text-2xl mb-2">David Bowie - "Aladdin Sane" (Continuidade)</h2>
            <strong className="text-xl text-center">
              O raio cria uma linha visual contínua que guia o olhar do espectador através da imagem do rosto de Bowie.
            </strong>
          </div>
          <div className="relative flex justify-center w-24 h-24 z-10">
            <div className="relative w-full h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full transition-transform duration-500 transform scale-100 hover:scale-110"></div>
            <div className="absolute inset-0 border-l-4 border-dashed border-gray-400 transform translate-x-[-20px] transition-transform duration-500 hover:translate-x-0"></div>
          </div>
        </div>
      </div>

      <div className="w-full mt-7">
        <div className="w-full flex justify-evenly">
          <CardMediaOption 
            to="/"
            title="Inicio"
            isBlue
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
          />
        </div>
      </div>
    </div>
  );
}
