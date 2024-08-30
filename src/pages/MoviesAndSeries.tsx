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

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-slate-200 pb-8 mt-10">
        <a href="https://www.tiktok.com/@falasun/video/7402750521355947270" target="_blank" rel="noopener noreferrer">
          <div className="relative h-[400px] w-[300px] md:w-[400px] bg-wolverine-image hover:bg-batmans-image bg-cover cursor-pointer transition-all duration-500 shadow-lg shadow-inner rounded-[50px] border-8 border-white overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/3 text-white text-center p-2">
              <p className="text-xl font-bold">Fechamento</p>
              <p>A máscara do Wolverine são dois Batmans se encarando?</p>
            </div>
          </div>
        </a>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-slate-200 pb-8">
          <a href="https://www.youtube.com/watch?v=BwVKSGu8wEA" target="_blank" rel="noopener noreferrer">
            <div className="relative h-[400px] w-[500px] bg-psicose-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg shadow-inner rounded-[50px] border-8 border-white overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent text-white text-center p-2 rounded-b-lg">
                <p className="text-xl font-bold">Pregnância</p>
                <p>A cena utiliza formas simples e abstratas para criar um efeito intenso.</p>
              </div>
            </div>
          </a>
        <div className="text-left mx-8">
          <h2 className="text-2xl mb-2 font-bold">Psicose</h2>
          <strong className="text-xl font-medium">
            A cena, filmada em close-up e com poucos cortes, utiliza formas simples e abstratas para criar um efeito de suspense e horror intenso.
          </strong>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-slate-200 pb-8">
          <a href="https://www.youtube.com/watch?v=aTkeduQ81Kw" target="_blank" rel="noopener noreferrer">
            <div className="relative h-[400px] w-[300px] bg-soldier-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg shadow-inner rounded-[50px] border-8 border-white overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent text-white text-center p-2 rounded-b-[50px]">
                <p className="text-xl font-bold">Semelhança</p>
                <p>A uniformidade dos soldados e paisagens enfatiza a natureza massiva do conflito.</p>
              </div>
            </div>
          </a>
        <div className="text-left mx-8">
          <h2 className="text-2xl mb-2 font-bold">O Resgate do Soldado Ryan</h2>
          <strong className="text-xl font-medium">
            A uniformidade dos soldados, dos tanques e das paisagens áridas enfatiza a desindividualização e a natureza massiva do conflito.
          </strong>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-slate-200 pb-8">
          <a href="https://www.youtube.com/watch?v=GQrrXceHn2E" target="_blank" rel="noopener noreferrer">
            <div className="relative h-[400px] w-[400px] bg-conjuring-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg shadow-inner rounded-[50px] border-8 border-white overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent text-white text-center p-2 rounded-b-[50px]">
                <p className="text-xl font-bold">Fechamento</p>
                <p>A câmera sugere a presença de entidades demoníacas sem mostrá-las explicitamente.</p>
              </div>
            </div>
          </a>
        <div className="text-left mx-8">
          <h2 className="text-2xl mb-2 font-bold">Invocação do Mal</h2>
          <strong className="text-xl font-medium">
            A câmera frequentemente se concentra em sombras e silhuetas, sugerindo a presença de entidades demoníacas sem mostrá-las explicitamente.
          </strong>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-slate-200 pb-8">
          <a href="https://www.youtube.com/watch?v=8hP9D6kZseM" target="_blank" rel="noopener noreferrer">
            <div className="relative h-[400px] w-[300px] bg-inception-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg shadow-inner rounded-[50px] border-8 border-white overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent text-white text-center p-2 rounded-b-[50px]">
                <p className="text-xl font-bold">Proximidade</p>
                <p>O movimento das pessoas e prédios cria uma sensação de agrupamento e unidade.</p>
              </div>
            </div>
          </a>
        <div className="text-left mx-8">
          <h2 className="text-2xl mb-2 font-bold">Inception</h2>
          <strong className="text-xl font-medium">
            O movimento das pessoas e prédios cria uma sensação de agrupamento e unidade.
          </strong>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-slate-200 pb-8">
          <a href="https://www.youtube.com/watch?v=0i86oM1nHjM" target="_blank" rel="noopener noreferrer">
            <div className="relative h-[400px] w-[300px] bg-lord-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 shadow-lg shadow-inner rounded-[50px] border-8 border-white overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent text-white text-center p-2 rounded-b-[50px]">
                <p className="text-xl font-bold">Continuidade</p>
                <p>A continuidade pode ser vista no caminho de Gandalf para o condado.</p>
              </div>
            </div>
          </a>
        <div className="text-left mx-8">
          <h2 className="text-2xl mb-2 font-bold">Senhor dos Aneis</h2>
          <strong className="text-xl text-center font-medium">
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
