import { CardMediaOption } from "../components/CardMediaOption";
import MovieImage from "../assets/movie-image.png";
import GameImage from "../assets/game-image.png";
import CoverImage from "../assets/cover-image.png";
import AdvertisingImage from "../assets/advertising-image.png";

export function MediaOptions() {
  return (
    <div 
      className="w-full h-full flex items-center"
    >
      <div className="w-[1200px] h-[800px] mx-auto my-0 flex flex-col justify-evenly">
        <div className="w-full">
          <h1 className="text-[5rem] text-neutral-300 text-shadow-strong-stroke">EXPLORAR</h1>
        </div>
        
        <div className="w-full flex justify-evenly">
          <CardMediaOption 
            title="Filmes e Séries"
            image={ MovieImage }
          />

          <CardMediaOption 
            title="Jogos"
            image={ GameImage }
            isBlue
          />

          <CardMediaOption 
            title="Capas de Discos"
            image={ CoverImage }
          />

          <CardMediaOption 
            title="Publicidade"
            image={ AdvertisingImage }
            isBlue
          />
        </div>

        <div className="ml-auto">
        <h1 className="text-[5rem] text-neutral-300 text-shadow-strong-stroke">MÍDIAS</h1>
        </div>
      </div>
    </div>
  );
}