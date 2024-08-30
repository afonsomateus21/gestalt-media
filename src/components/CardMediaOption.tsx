import { CirclePlay } from "lucide-react";
import { CardMediaOptionProps } from "../interfaces/CardMediaOptionProps";
import { Link } from "react-router-dom";

export function CardMediaOption({ title, isBlue, isHome, image, ...props } : CardMediaOptionProps) {
  return (
    <Link 
      className={`${isBlue ? 'bg-gradient-to-b from-blue-950 to-violet-900' : 'bg-white'} relative w-64 h-80 rounded-3xl border-4 border-white opacity-40 hover:opacity-100 hover:brightness-125 flex flex-col items-center justify-center p-2`}
      {...props}
    >
      <strong className={`${isBlue ? 'text-white' : 'text-blue-800'} ${isHome ? 'pl-0' : 'pl-5'} text-3xl mb-5 font-extrabold`}>{ title }</strong>
      {
        image ? <img src={ image } alt="" className="size-40" /> : <div/> 
      }
      <div className={`absolute right-3 bottom-3 h-20 w-20 ${isBlue ? 'bg-white' : 'bg-blue-800'} rounded-3xl flex items-center justify-center`}>
        <CirclePlay 
          color={`${isBlue ? "#1e40af" : "#fff"}`}
          size={60}
        />
      </div>
    </Link>
  );
}