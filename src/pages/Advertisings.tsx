import { CardMediaOption } from "../components/CardMediaOption";
import GameImage from "../assets/game-image.png";
import CoverImage from "../assets/cover-image.png";
import AdvertisingImage from "../assets/advertising-image.png";

export function Advertisings() {
  return (
    <div className="min-h-screen w-full my-0 mx-auto p-8 text-neutral-300 ">
      <h1 className="text-[4rem] text-center mb-12 text-yellow-500 text-shadow-strong-stroke">Gestalt em Filmes e Séries</h1>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-4 border-yellow-500 pb-8">
        <div className="h-[400px] w-[300px] md:w-[400px] bg-wolverine-image hover:bg-batmans-image bg-cover cursor-pointer transition-all duration-500 shadow-lg rounded-lg border-4 border-yellow-500 relative">
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/3 text-white text-center p-2">
            <p className="text-xl font-bold">Fechamento</p>
            <p>A máscara do Wolverine são dois Batmans se encarando?</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-4 border-yellow-500 pb-8">
        <div className="h-[400px] w-[500px] bg-psicose-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg rounded-lg border-4 border-yellow-500 relative">
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/3 text-white text-center p-2">
            <p className="text-xl font-bold">Pregnância</p>
            <p>A cena utiliza formas simples e abstratas para criar um efeito intenso.</p>
          </div>
        </div>
        <div className="text-center mx-8 w-[500px]">
          <h2 className="text-2xl mb-2">Psicose</h2>
          <strong className="text-xl">
            A cena, filmada em close-up e com poucos cortes, utiliza formas simples e abstratas para criar um efeito de suspense e horror intenso.
          </strong>
        </div>
        <div className="relative h-[400px] w-[500px] cursor-pointer transition-all duration-500 shadow-lg rounded-lg border-4 border-yellow-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-24 h-24 bg-gray-600 rounded-full transition-transform duration-500 hover:w-48 hover:h-48"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-4 border-yellow-500 pb-8">
        <div className="h-[400px] w-[300px] bg-soldier-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg rounded-lg border-4 border-yellow-500 relative">
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/3 text-white text-center p-2">
            <p className="text-xl font-bold">Semelhança</p>
            <p>A uniformidade dos soldados e paisagens enfatiza a natureza massiva do conflito.</p>
          </div>
        </div>
        <div className="text-center mx-8 w-[500px]">
          <h2 className="text-2xl mb-2">O Resgate do Soldado Ryan</h2>
          <strong className="text-xl">
            A uniformidade dos soldados, dos tanques e das paisagens áridas enfatiza a desindividualização e a natureza massiva do conflito.
          </strong>
        </div>
        <div className="relative h-[400px] w-[300px] cursor-pointer transition-all duration-500 shadow-lg rounded-lg border-4 border-yellow-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-neutral-300 h-8 w-8 rounded-full transition-all duration-300 hover:bg-blue-500"></div>
              <div className="bg-neutral-300 h-8 w-8 rounded-full transition-all duration-300 hover:bg-blue-500"></div>
              <div className="bg-neutral-300 h-8 w-8 rounded-full transition-all duration-300 hover:bg-blue-500"></div>
              <div className="bg-neutral-300 h-8 w-8 rounded-full transition-all duration-300 hover:bg-blue-500"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-4 border-yellow-500 pb-8">
        <div className="h-[400px] w-[400px] bg-conjuring-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg rounded-lg border-4 border-yellow-500 relative">
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/3 text-white text-center p-2">
            <p className="text-xl font-bold">Fechamento</p>
            <p>A câmera sugere a presença de entidades demoníacas sem mostrá-las explicitamente.</p>
          </div>
        </div>
        <div className="text-center mx-8 w-[500px]">
          <h2 className="text-2xl mb-2">Invocação do Mal</h2>
          <strong className="text-xl">
            A câmera frequentemente se concentra em sombras e silhuetas, sugerindo a presença de entidades demoníacas sem mostrá-las explicitamente.
          </strong>
        </div>
        <div className="relative h-[400px] w-[300px] cursor-pointer transition-all duration-500 shadow-lg rounded-lg border-4 border-yellow-500">
          <div className="absolute inset-0 bg-transparent">
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute top-0 left-0 w-16 h-16 bg-black rounded-full transition-transform duration-500 hover:w-32 hover:h-32"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-black rounded-full transition-transform duration-500 hover:w-32 hover:h-32"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-black rounded-full transition-transform duration-500 hover:w-32 hover:h-32"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-black rounded-full transition-transform duration-500 hover:w-32 hover:h-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-4 border-yellow-500 pb-8">
        <div className="h-[400px] w-[300px] bg-inception-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg rounded-lg border-4 border-yellow-500 relative">
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/3 text-white text-center p-2">
            <p className="text-xl font-bold">Proximidade</p>
            <p>O movimento das pessoas e prédios cria uma sensação de agrupamento e unidade.</p>
          </div>
        </div>
        <div className="text-center mx-8 w-[500px]">
          <h2 className="text-2xl mb-2">Inception</h2>
          <strong className="text-xl">
            O movimento das pessoas e prédios cria uma sensação de agrupamento e unidade.
          </strong>
        </div>
        <div className="relative h-[400px] w-[400px] cursor-pointer transition-all duration-500 shadow-lg rounded-lg border-4 border-yellow-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute bg-neutral-300 h-8 w-8 rounded-full top-0 left-0 transition-transform duration-500 hover:translate-x-16 hover:translate-y-16"></div>
              <div className="absolute bg-neutral-300 h-8 w-8 rounded-full top-0 right-0 transition-transform duration-500 hover:-translate-x-16 hover:translate-y-16"></div>
              <div className="absolute bg-neutral-300 h-8 w-8 rounded-full bottom-0 left-0 transition-transform duration-500 hover:translate-x-16 hover:-translate-y-16"></div>
              <div className="absolute bg-neutral-300 h-8 w-8 rounded-full bottom-0 right-0 transition-transform duration-500 hover:-translate-x-16 hover:-translate-y-16"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-4 border-yellow-500 pb-8">
        <div className="h-[400px] w-[300px] bg-lord-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg rounded-lg border-4 border-yellow-500 relative">
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/3 text-white text-center p-2">
            <p className="text-xl font-bold">Continuidade</p>
            <p>A continuidade pode ser vista no caminho de Gandalf para o condado.</p>
          </div>
        </div>
        <div className="text-center mx-8 w-[500px]">
          <h2 className="text-2xl mb-2">Senhor dos Aneis</h2>
          <strong className="text-xl text-center">
            O caminho que Gandalf deve percorrer para chegar ao condado gera uma sensação de continuidade.
          </strong>
        </div>
        <div className="relative h-[400px] flex items-center justify-center w-[400px] cursor-pointer transition-all duration-500 shadow-lg rounded-lg border-4 border-yellow-500">
          <div className="relative flex justify-center w-24 h-24 z-10 transition-all duration-500">
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
            to="/media-options/games"
            title="Jogos"
            image={ GameImage }
          />

          <CardMediaOption 
            to="/media-options/covers"
            title="Capas de Discos"
            image={ CoverImage }
            isBlue
          />

          <CardMediaOption 
            to="/media-options/advertisings"
            title="Publicidade"
            image={ AdvertisingImage }
          />
        </div>
      </div>
    </div>
  );
}
