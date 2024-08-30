import { CardMediaOption } from "../components/CardMediaOption";
import MovieImage from "../assets/movie-image.png";
import CoverImage from "../assets/cover-image.png";

export function Games() {
  return (
    <div className="min-h-screen w-full my-0 mx-auto p-8 text-white relative">
      <div className="relative w-full w-[500px] h-[300px] bg-cover bg-center rounded-[50px] border-8 shadow-lg overflow-hidden mb-10">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-gradient-to-t from-blue-950 to-transparent">
          <h2 className="text-[4rem] mb-10 text-white text-center font-bold leading-tight">Entre Pixels e Percepções</h2>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 bg-blue-700 text-center">
          <h2 className="text-sm mb-2 font-bold">Gestalt em Jogos</h2>
          <strong className="text-sm font-medium">
            Exemplos de como a Gestalt é aplicada em jogos.
          </strong>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center mb-12 mt-10 pb-8 rounded-[50px]">
        <div className="h-[400px] w-[500px] bg-tetris-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 border-8 border-white rounded-[50px] relative"/>
        <div className="text-left mx-8 w-[500px]">
          <h2 className="text-2xl mb-2 font-bold">Tetris (Pregnância)</h2>
          <strong className="text-xl font-medium">
            Em "Tetris", as peças (ou tetrominós) são compostas por formas geométricas simples e regulares.
            A simplicidade das formas e a clareza do objetivo (organizar para preencher linhas) fazem com que 
            o jogador perceba as peças e o tabuleiro de forma ordenada e previsível, o que é essencial 
            para a jogabilidade fluida do jogo.
          </strong>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center mb-12 pb-8 rounded-[50px]">
        <div className="h-[400px] w-[500px] bg-candy-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 border-8 border-white rounded-[50px] relative"/>
        <div className="text-left mx-8 w-[500px]">
          <h2 className="text-2xl mb-2 font-bold">Candy Crush Saga (Semelhança)</h2>
          <strong className="text-xl font-medium">
            Em "Candy Crush Saga," os doces no tabuleiro compartilham cores e formas similares. 
            O objetivo do jogo é combinar doces semelhantes em grupos de três ou mais para removê-los 
            do tabuleiro e ganhar pontos.
          </strong>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center mb-12 pb-8 rounded-[50px]">
        <div className="h-[400px] w-[500px] bg-limbo-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 border-8 border-white rounded-[50px] relative"/>
        <div className="text-left mx-8 w-[500px]">
          <h2 className="text-2xl mb-2 font-bold">Limbo (Fechamento)</h2>
          <strong className="text-xl font-medium">
            Em Limbo, o uso de silhuetas e sombras cria um ambiente em que muitas vezes 
            apenas partes dos objetos e personagens são visíveis. O jogador precisa preencher as 
            lacunas visuais e entender a forma completa dos elementos do jogo, mesmo quando partes 
            deles estão ocultas na escuridão.
          </strong>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center mb-12 pb-8 rounded-[50px]">
        <div className="h-[400px] w-[500px] bg-lemmings-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 border-8 border-white rounded-[50px] relative"/>
        <div className="text-left mx-8 w-[500px]">
          <h2 className="text-2xl mb-2 font-bold">Lemmings (Proximidade)</h2>
          <strong className="text-xl font-medium">
            A Lei da Proximidade é demonstrada pelo fato de que os lemmings tendem 
            a se mover juntos em grupos compactos. Quando próximos uns dos outros, 
            eles são percebidos como uma unidade, e isso ajuda o jogador a planejar 
            ações estratégicas, como bloquear, construir ou escavar para guiar o grupo 
            inteiro de forma eficaz.
          </strong>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center mb-12 pb-8 rounded-[50px]">
        <div className="h-[400px] w-[500px] bg-portal-image bg-cover cursor-pointer hover:brightness-125 transition-all duration-500 border-8 border-white rounded-[50px] relative"/>
        <div className="text-left mx-8 w-[500px] font-bold">
          <h2 className="text-2xl mb-2 font-bold">Portal (Continuação)</h2>
          <strong className="text-xl font-medium font-medium">
            A Lei da Continuidade é demonstrada pela forma como o jogo guia o olhar e o movimento 
            do jogador através dos portais. Quando o jogador dispara um portal em uma superfície 
            e outro portal em uma segunda superfície, a trajetória que o jogador ou objetos seguem 
            ao passar por esses portais cria uma continuidade visual e espacial.
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
