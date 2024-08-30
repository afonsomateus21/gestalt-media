import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { TeamCard } from "../components/TeamCard";
import { photos } from "../constants/photos";

export function Credits() {
  return (
    <div className="h-screen p-2 md:p-6 my-0 mx-auto w-full flex flex-col justify-center md:gap-5 items-center relative">
      <div className="absolute top-2 left-2 md:top-8 md:left-8">
        <Link
          to="/" 
          color="bg-yellow-600"
          children={ 
            <ArrowLeft 
              color="#fff" 
              size={60} 
            /> 
          }
        />
      </div>
      
      <h1 className="text-white font-bold text-5xl text-center text-shadow-strong-stroke">
        Equipe
      </h1>
      
      <div className="flex flex-col md:flex-row justify-around w-full mt-8 md:mt-0 gap-2 lg:gap-0"> 
        <section className="border-4 h-auto w-full md:w-[400px] lg:w-[500px] rounded-[30px] flex flex-col justify-evenly items-center mb-8 md:mb-0 p-4">

          <div className="w-full flex flex-col gap-5 justify-center p-4">
            {photos.map((photo, index) => (
              <TeamCard 
                key={index}
                url={photo.url}
                name={photo.name}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}