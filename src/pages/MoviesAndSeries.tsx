import { CirclePlay } from "lucide-react";
import { CardMediaOption } from "../components/CardMediaOption";
import GameImage from "../assets/game-image.png";
import CoverImage from "../assets/cover-image.png";

export function MoviesAndSeries() {
  return (
    <div className="min-h-screen w-full my-0 mx-auto p-8 text-white">
      <div className="relative w-full w-[500px] h-[300px] bg-cover bg-center rounded-[50px] border-8 shadow-lg overflow-hidden mb-10">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-gradient-to-t from-blue-950 to-transparent">
          <h2 className="text-[4rem] mb-10 text-white text-center font-bold leading-tight">Do Roteiro à Realidade</h2>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 bg-blue-700 text-center">
          <h2 className="text-sm mb-2 font-bold">Gestalt em Cinema e TV</h2>
          <strong className="text-sm font-medium">
            Exemplos de como a Gestalt é aplicada em séries e filmes.
          </strong>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-white pb-8 mt-10 max-w-[1000px] mx-auto">
        <div className="relative h-[400px] w-[650px] md:w-[650px] bg-wolverine-image hover:bg-batmans-image bg-cover cursor-pointer transition-all duration-500 shadow-lg shadow-inner rounded-[50px] border-8 border-white overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/3 text-white text-center p-2"></div>
          <a 
            href="https://www.tiktok.com/@falasun/video/7402750521355947270"
            target="_blank" rel="noopener noreferrer"
            className="absolute bottom-5 right-5 h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-lg"
          >
            <CirclePlay color="#1e40af" size={40} />
          </a>
        </div>
        <div className="text-left mx-8 max-w-[500px]">
          <h2 className="text-2xl mb-2 font-bold">Wolverine (Fechamento)</h2>
          <strong className="text-xl font-medium">
            A máscara do Wolverine são dois Batmans se encarando?
          </strong>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-white pb-8 max-w-[1000px] mx-auto">
        <a href="https://www.youtube.com/watch?v=BwVKSGu8wEA" target="_blank" rel="noopener noreferrer">
          <iframe 
            width="500" 
            height="400" 
            src="https://www.youtube.com/embed/BwVKSGu8wEA" 
            title="Pregnância - Psicose" 
            className="rounded-[50px] border-8 border-white overflow-hidden shadow-lg shadow-inner">
          </iframe>
        </a>
        <div className="text-left mx-8 max-w-[500px]">
          <h2 className="text-2xl mb-2 font-bold">Psicose (Pregnância)</h2>
          <strong className="text-xl font-medium">
            A cena, filmada em close-up e com poucos cortes, utiliza formas simples e abstratas para criar um efeito de suspense e horror intenso.
          </strong>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-white pb-8 max-w-[1000px] mx-auto">
        <a href="https://www.youtube.com/watch?v=aTkeduQ81Kw" target="_blank" rel="noopener noreferrer">
          <iframe 
            width="500" 
            height="400" 
            src="https://www.youtube.com/embed/aTkeduQ81Kw" 
            title="Pregnância - O Resgate do Soldado Ryan" 
            className="rounded-[50px] border-8 border-white overflow-hidden shadow-lg shadow-inner">
          </iframe>
        </a>
        <div className="text-left mx-8 max-w-[500px]">
          <h2 className="text-2xl mb-2 font-bold">O Resgate do Soldado Ryan (Semelhança)</h2>
          <strong className="text-xl font-medium">
            A uniformidade dos soldados, dos tanques e das paisagens áridas enfatiza a desindividualização e a natureza massiva do conflito.
          </strong>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-white pb-8 max-w-[1000px] mx-auto">
        <a href="https://www.youtube.com/watch?v=GQrrXceHn2E" target="_blank" rel="noopener noreferrer">
          <iframe 
            width="500" 
            height="400" 
            src="https://www.youtube.com/embed/GQrrXceHn2E" 
            title="Fechamento - Invocação do Mal" 
            className="rounded-[50px] border-8 border-white overflow-hidden shadow-lg shadow-inner">
          </iframe>
        </a>
        <div className="text-left mx-8 max-w-[500px]">
          <h2 className="text-2xl mb-2 font-bold">Invocação do Mal (Fechamento)</h2>
          <strong className="text-xl font-medium">
            A câmera frequentemente se concentra em sombras e silhuetas, sugerindo a presença de entidades demoníacas sem mostrá-las explicitamente.
          </strong>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-white pb-8 max-w-[1000px] mx-auto">
        <a href="https://www.youtube.com/watch?v=8hP9D6kZseM" target="_blank" rel="noopener noreferrer">
          <iframe 
            width="500" 
            height="400" 
            src="https://www.youtube.com/embed/8hP9D6kZseM" 
            title="Proximidade - Inception" 
            className="rounded-[50px] border-8 border-white overflow-hidden shadow-lg shadow-inner">
          </iframe>
        </a>
        <div className="text-left mx-8 max-w-[500px]">
          <h2 className="text-2xl mb-2 font-bold">Inception (Proximidade)</h2>
          <strong className="text-xl font-medium">
            O movimento das pessoas e prédios cria uma sensação de agrupamento e unidade.
          </strong>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-white pb-8 max-w-[1000px] mx-auto">
        <a href="https://www.youtube.com/watch?v=0i86oM1nHjM" target="_blank" rel="noopener noreferrer">
          <iframe 
            width="500" 
            height="400" 
            src="https://www.youtube.com/embed/0i86oM1nHjM" 
            title="Continuidade - Senhor dos Anéis" 
            className="rounded-[50px] border-8 border-white overflow-hidden shadow-lg shadow-inner">
          </iframe>
        </a>
        <div className="text-left mx-8 max-w-[500px]">
          <h2 className="text-2xl mb-2 font-bold">Senhor dos Anéis (Continuidade)</h2>
          <strong className="text-xl font-medium">
            O caminho que Gandalf deve percorrer para chegar ao condado gera uma sensação de continuidade.
          </strong>
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
            to="/media-options/games"
            title="Jogos"
            image={ GameImage }
            isHome
          />

          <CardMediaOption 
            to="/media-options/album-covers"
            title="Capas de Discos"
            image={ CoverImage }
            isBlue
          />
        </div>
      </div>
    </div>
  );
}
