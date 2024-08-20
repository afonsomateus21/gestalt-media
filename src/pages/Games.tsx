import { CardMediaOption } from "../components/CardMediaOption";
import MovieImage from "../assets/movie-image.png";
import CoverImage from "../assets/cover-image.png";

export function Games() {
  return (
    <div className="min-h-screen w-full my-0 mx-auto p-8 text-neutral-300 bg-blue-800 relative">
      <h1 className="text-[4rem] text-center mb-12 text-yellow-500 text-shadow-strong-stroke relative z-20">
        Gestalt em Jogos
      </h1>

      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-2 bg-blue-800">
      </div>

      <div className="relative flex flex-col md:flex-row items-center mb-12 border-4 border-yellow-500 pb-8 bg-gray-900 shadow-lg rounded-lg">
        <div className="h-[400px] w-[500px] bg-tetris-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 border-4 border-yellow-500 rounded-lg relative"/>
        <div className="text-center mx-8 w-[500px]">
          <h2 className="text-2xl mb-2">Tetris (Pregnância)</h2>
          <strong className="text-xl">
            Em "Tetris", as peças (ou tetrominós) são compostas por formas geométricas simples e regulares.
            A simplicidade das formas e a clareza do objetivo (organizar para preencher linhas) fazem com que 
            o jogador perceba as peças e o tabuleiro de forma ordenada e previsível, o que é essencial 
            para a jogabilidade fluida do jogo.
          </strong>
        </div>
        <div className="relative h-[400px] w-[500px] cursor-pointer transition-all duration-500 shadow-lg rounded-lg border-4 border-yellow-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-24 h-24 bg-gray-600 rounded-full transition-transform duration-500 hover:w-48 hover:h-48"></div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center mb-12 border-4 border-yellow-500 pb-8 bg-gray-900 shadow-lg rounded-lg">
        <div className="h-[300px] w-[500px] bg-candy-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 border-4 border-yellow-500 rounded-lg relative"/>
        <div className="text-center mx-8 w-[500px]">
          <h2 className="text-2xl mb-2">Candy Crush Saga (Semelhança)</h2>
          <strong className="text-xl">
            Em "Candy Crush Saga," os doces no tabuleiro compartilham cores e formas similares. 
            O objetivo do jogo é combinar doces semelhantes em grupos de três ou mais para removê-los 
            do tabuleiro e ganhar pontos.
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

      <div className="relative flex flex-col md:flex-row items-center mb-12 border-4 border-yellow-500 pb-8 bg-gray-900 shadow-lg rounded-lg">
        <div className="h-[400px] w-[400px] bg-limbo-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 border-4 border-yellow-500 rounded-lg relative"/>
        <div className="text-center mx-8 w-[500px]">
          <h2 className="text-2xl mb-2">Limbo (Fechamento)</h2>
          <strong className="text-xl">
            Em Limbo, o uso de silhuetas e sombras cria um ambiente em que muitas vezes 
            apenas partes dos objetos e personagens são visíveis. O jogador precisa preencher as 
            lacunas visuais e entender a forma completa dos elementos do jogo, mesmo quando partes 
            deles estão ocultas na escuridão.
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

      <div className="relative flex flex-col md:flex-row items-center mb-12 border-4 border-yellow-500 pb-8 bg-gray-900 shadow-lg rounded-lg">
        <div className="h-[400px] w-[300px] bg-lemmings-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 border-4 border-yellow-500 rounded-lg relative"/>
        <div className="text-center mx-8 w-[500px]">
          <h2 className="text-2xl mb-2">Lemmings (Proximidade)</h2>
          <strong className="text-xl">
            A Lei da Proximidade é demonstrada pelo fato de que os lemmings tendem 
            a se mover juntos em grupos compactos. Quando próximos uns dos outros, 
            eles são percebidos como uma unidade, e isso ajuda o jogador a planejar 
            ações estratégicas, como bloquear, construir ou escavar para guiar o grupo 
            inteiro de forma eficaz.
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

      <div className="relative flex flex-col md:flex-row items-center mb-12 border-4 border-yellow-500 pb-8 bg-gray-900 shadow-lg rounded-lg">
        <div className="h-[300px] w-[500px] bg-portal-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 border-4 border-yellow-500 rounded-lg relative"/>
        <div className="text-center mx-8 w-[500px]">
          <h2 className="text-2xl mb-2">Portal (Continuação)</h2>
          <strong className="text-xl text-center">
            A Lei da Continuidade é demonstrada pela forma como o jogo guia o olhar e o movimento 
            do jogador através dos portais. Quando o jogador dispara um portal em uma superfície 
            e outro portal em uma segunda superfície, a trajetória que o jogador ou objetos seguem 
            ao passar por esses portais cria uma continuidade visual e espacial.
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
            to="/media-options/movies-series"
            title="Filmes e Séries"
            image={ MovieImage }
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
