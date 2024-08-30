import { CardMediaOption } from "../components/CardMediaOption";
import MovieImage from "../assets/movie-image.png";
import CoverImage from "../assets/cover-image.png";
import { Gamepad2 } from "lucide-react";

export function Games() {
  return (
    <div className="min-h-screen w-full text-white p-8 flex flex-col items-center">
      <div className="relative w-[1000px] h-[300px] bg-cover bg-center rounded-[50px] border-8 shadow-lg overflow-hidden mb-10 bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
          <h2 className="text-[4rem] mb-10 text-white text-center font-extrabold leading-tight">Entre Pixels e Percepções</h2>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 bg-blue-600 text-center rounded-t-3xl">
          <h2 className="text-lg mb-2 font-bold">Gestalt em Jogos</h2>
          <strong className="text-md font-medium">
            Exemplos de como a Gestalt é aplicada em jogos.
          </strong>
        </div>
      </div>

      <div className="w-[1000px] mt-8">
        <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-white pb-8">
          <div className="relative h-[400px] w-[500px] bg-tetris-image bg-cover cursor-pointer hover:brightness-110 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[30px] block">
            <a 
              href="https://tetris.com/play-tetris"
              target="_blank" rel="noopener noreferrer"
              className="absolute bottom-3 hover:bg-neutral-300 right-3 h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Gamepad2 color="#1e40af" size={40} />
            </a>
          </div>
          <div className="text-left mx-8 w-[500px]">
            <h2 className="text-2xl mb-2 font-bold">Tetris (Pregnância)</h2>
            <strong className="text-xl font-medium">
              Em "Tetris", as peças (ou tetrominós) são compostas por formas geométricas simples e mediumes.
              A simplicidade das formas e a clareza do objetivo (organizar para preencher linhas) fazem com que 
              o jogador perceba as peças e o tabuleiro de forma ordenada e previsível, o que é essencial 
              para a jogabilidade fluida do jogo.
            </strong>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-white pb-8">
          <div className="relative h-[400px] w-[500px] bg-candy-image bg-cover cursor-pointer hover:brightness-110 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[30px] block">
            <a 
              href="https://www.microsoft.com/pt-br/p/candy-crush-saga/9nblggh18846"
              target="_blank" rel="noopener noreferrer"
              className="absolute bottom-3 hover:bg-neutral-300 right-3 h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Gamepad2 color="#1e40af" size={40} />
            </a>
          </div>
          <div className="text-left mx-8 w-[500px]">
            <h2 className="text-2xl mb-2 font-bold">Candy Crush Saga (Semelhança)</h2>
            <strong className="text-xl font-medium">
              Em "Candy Crush Saga," os doces no tabuleiro compartilham cores e formas similares. 
              O objetivo do jogo é combinar doces semelhantes em grupos de três ou mais para removê-los 
              do tabuleiro e ganhar pontos.
            </strong>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-white pb-8">
          <div className="relative h-[400px] w-[500px] bg-limbo-image bg-cover cursor-pointer hover:brightness-110 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[30px] block">
            <a 
              href="https://store.steampowered.com/app/48000/LIMBO/"
              target="_blank" rel="noopener noreferrer"
              className="absolute bottom-3 hover:bg-neutral-300 right-3 h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Gamepad2 color="#1e40af" size={40} />
            </a>
          </div>
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

        <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-white pb-8">
          <div className="relative h-[400px] w-[500px] bg-lemmings-image bg-cover cursor-pointer hover:brightness-110 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[30px] block">
            <a 
              href="https://play.google.com/store/apps/details?id=com.sadpuppy.lemmings&hl=pt_BR"
              target="_blank" rel="noopener noreferrer"
              className="absolute bottom-3 hover:bg-neutral-300 right-3 h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Gamepad2 color="#1e40af" size={40} />
            </a>
          </div>
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

        <div className="flex flex-col md:flex-row items-center mb-12 border-b-2 border-white pb-8">
          <div className="relative h-[400px] w-[500px] bg-portal-image bg-cover cursor-pointer hover:brightness-110 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[30px] block">
            <a 
              href="https://store.steampowered.com/app/400/Portal/?l=portuguese"
              target="_blank" rel="noopener noreferrer"
              className="absolute hover:bg-neutral-300 bottom-3 right-3 h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Gamepad2 color="#1e40af" size={40} />
            </a>
          </div>
          <div className="text-left mx-8 w-[500px]">
            <h2 className="text-2xl mb-2 font-bold">Portal (Continuação)</h2>
            <strong className="text-xl font-medium">
              A Lei da Continuidade é demonstrada pela forma como o jogo guia o olhar e o movimento 
              do jogador através dos portais. Quando o jogador dispara um portal em uma superfície 
              e outro portal em uma segunda superfície, a trajetória que o jogador ou objetos seguem 
              ao passar por esses portais cria uma continuidade visual e espacial.
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
