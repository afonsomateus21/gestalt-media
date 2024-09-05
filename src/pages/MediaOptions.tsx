import { MouseEvent, useRef, useState } from "react";
import { CardMediaOption } from "../components/CardMediaOption";
import { CardGestaltConcepts } from "../components/CardGestaltConcepts";
import GameImage from "../assets/game-image.png";
import CoverImage from "../assets/cover-image.png";
import MovieImage from "../assets/movie-image.png";

export function MediaOptions() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  function handleMouseDown(e: MouseEvent<HTMLDivElement>) {
    const element = scrollRef.current;
    if (!element) return;

    setIsDown(true);
    scrollRef.current?.classList.add('cursor-grabbing');
    scrollRef.current?.classList.remove('cursor-grab');
    setStartX(e.pageX - element.offsetLeft);
    setScrollLeft(element.scrollLeft);
  };

  function handleMouseLeave() {
    setIsDown(false);
    scrollRef.current?.classList.add('cursor-grab');
    scrollRef.current?.classList.remove('cursor-grabbing');
  };

  function handleMouseUp() {
    setIsDown(false);
    scrollRef.current?.classList.add('cursor-grab');
    scrollRef.current?.classList.remove('cursor-grabbing');
  };

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const element = scrollRef.current;
    if (!element) return; 

    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX - element.offsetLeft;
    const walk = (x - startX) * 2; 
    element.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
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

      <div className="w-[1200px] h-full mx-auto mt-[-80px] flex flex-col justify-evenly">
        <div className="w-full">
          <h1 className="font-extrabold text-[5rem] text-white text-shadow-extrastrong-violet-stroke animate-blink">Explorar</h1>
        </div>
        
        <div 
          className="w-full flex gap-10 overflow-hidden cursor-grab"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <CardGestaltConcepts 
            link="https://www.youtube.com/embed/kcNgyPNNyBw"
            title="Vídeo 01"
          />

          <CardGestaltConcepts 
            link="https://www.youtube.com/embed/ZvM4nQ8aYzE"
            title="Vídeo 02"
          />

          <CardGestaltConcepts 
            link="https://www.youtube.com/embed/8kQfT9k1Fuw"
            title="Vídeo 03"
          />

          <CardGestaltConcepts 
            link="https://www.youtube.com/embed/KSMvh0eiQtg"
            title="Vídeo 04"
          />

          <CardGestaltConcepts 
            link="https://www.youtube.com/embed/yPlGJuPQwho"
            title="Vídeo 05"
          />
        </div>

        <div className="ml-auto">
          <h1 className="font-extrabold text-[5rem] text-white text-shadow-extrastrong-blue-stroke animate-blink">Conceitos</h1>
        </div>
      </div>
    </div>
  );
}
