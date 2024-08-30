import { CardMediaOption } from "../components/CardMediaOption";
import GameImage from "../assets/game-image.png";
import MovieImage from "../assets/movie-image.png";

export function AlbumCovers() {
  return (
    <div className="min-h-screen w-full text-white p-8 flex flex-col items-center">
      <div className="relative w-full w-[500px] h-[300px] bg-cover bg-center rounded-[50px] border-8 shadow-lg overflow-hidden mb-10">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-gradient-to-t from-blue-950 to-transparent">
          <h2 className="text-[4rem] mb-10 text-white text-center font-bold leading-tight">A Melodia da Gestalt</h2>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 bg-blue-700 text-center">
          <h2 className="text-sm mb-2 font-bold">Álbuns e Gestalt</h2>
          <strong className="text-sm font-medium">
            Exemplos de como a Gestalt é aplicada em capas de álbuns com diferentes leis visuais.
          </strong>
        </div>
      </div>

      <div className="w-[1000px] mt-8">
        <div className="flex items-center justify-between mb-12">
          <div className="h-[500px] w-[500px] bg-daftpunk-image bg-cover bg-center cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg border-8 border-white rounded-[50px]"></div>
          <div className="text-left mx-8 w-[500px]">
            <h2 className="text-2xl mb-2 font-bold">Daft Punk - Random Access Memories (Pregnância)</h2>
            <strong className="text-xl font-medium">
              A capa é clara e direta, apresentando uma única imagem central: os capacetes de robô dos Daft Punk.
            </strong>
          </div>
        </div>

        <div className="flex items-center justify-between mb-12">
          <div className="h-[500px] w-[500px] bg-beatles-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg border-8 border-white rounded-[50px]"></div>
          <div className="text-left mx-8 w-[500px]">
            <h2 className="text-2xl mb-2 font-bold">The Beatles - "Sgt. Pepper's Lonely Hearts Club Band" (Semelhança)</h2>
            <strong className="text-xl font-medium">
              Os elementos são organizados em uma composição coesa, criando uma sensação de unidade.
            </strong>
          </div>
        </div>

        <div className="flex items-center justify-between mb-12">
          <div className="h-[500px] w-[500px] bg-rolling-image bg-cover bg-center cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg border-8 border-white rounded-[50px]"></div>
          <div className="text-left mx-8 w-[500px]">
            <h2 className="text-2xl mb-2 font-bold">The Rolling Stones - "Sticky Fingers" (Fechamento)</h2>
            <strong className="text-xl font-medium">
              A capa usa a imagem de uma calça jeans com um zíper funcional, fazendo com que o observador complete mentalmente a figura.
            </strong>
          </div>
        </div>

        <div className="flex items-center justify-between mb-12 relative">
          <div className="relative h-[500px] w-[500px] bg-bowie-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg border-8 border-white rounded-[50px] overflow-hidden z-10">
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          <div className="relative flex flex-col text-left mx-8 w-[500px] z-10">
            <h2 className="text-2xl mb-2 font-bold">David Bowie - "Aladdin Sane" (Continuidade)</h2>
            <strong className="text-xl font-medium">
              O raio cria uma linha visual contínua que guia o olhar do espectador através da imagem do rosto de Bowie.
            </strong>
          </div>
        </div>
      </div>

      <div className="w-full mt-7 bg-gradient-to-t from-blue-950 p-10 rounded-[50px] shadow-lg border-8 border-white">
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
