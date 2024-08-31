import { CardMediaOption } from "../components/CardMediaOption";
import { CardGestaltConcepts } from "../components/CardGestaltConcepts";
import GameImage from "../assets/game-image.png";
import CoverImage from "../assets/cover-image.png";
import MovieImage from "../assets/movie-image.png";

export function MediaOptions() {
  return (
    <div 
      className="w-full h-full flex flex-col items-center"
    >
      <div className="w-[1200px] h-screen mx-auto my-0 flex flex-col justify-evenly">
        <div className="w-full">
          <h1 className="font-extrabold text-[5rem] text-white text-shadow-extrastrong-violet-stroke animate-blink">Explorar</h1>
        </div>
        
        <div className="w-full flex justify-evenly">
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
            isBlue
            title="Jogos"
            image={ GameImage }
            isHome
          />

          <CardMediaOption 
            to="/media-options/album-covers"
            title="Capas de Discos"
            image={ CoverImage }
          />
        </div>

        <div className="ml-auto">
        <h1 className="font-extrabold text-[5rem] text-white text-shadow-extrastrong-blue-stroke animate-blink">Mídias</h1>
        </div>
      </div>

      <div className="w-[1200px] h-full h-[1000px] mx-auto my-20 flex flex-col justify-evenly">
        <div className="w-full">
          <h1 className="font-extrabold text-[5rem] text-white text-shadow-extrastrong-violet-stroke  animate-blink">Explorar</h1>
        </div>
        
        <div className="w-full flex justify-center gap-10 overflow-hidden">
          <CardGestaltConcepts 
            link="https://www.youtube.com/embed/8kQfT9k1Fuw"
            title="Vídeo 01"
          />

          <CardGestaltConcepts 
            link="https://www.youtube.com/embed/KSMvh0eiQtg"
            title="Vídeo 02"
          />

          <CardGestaltConcepts 
            link="https://www.youtube.com/embed/KSMvh0eiQtg"
            title="Vídeo 03"
          />
        </div>
        <div className="ml-auto">
          <h1 className="font-extrabold text-[5rem] text-white text-shadow-extrastrong-blue-stroke animate-blink">Conceitos</h1>
        </div>
      </div>
    </div>
  );
}