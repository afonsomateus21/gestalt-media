import { CirclePlay } from "lucide-react";
import { CardMediaOptionProps } from "../interfaces/CardMediaOptionProps";
import { Link } from "react-router-dom";

export function CardMediaOption({ title, isBlue, image, ...props } : CardMediaOptionProps) {
  return (
    <Link 
      className={`${isBlue ? 'bg-blue-800' : 'bg-neutral-300'} relative w-64 h-80 rounded-3xl border-4 opacity-40 hover:opacity-100 hover:brightness-125 flex flex-col items-center justify-center p-2`}
      {...props}
    >
      <strong className={`${isBlue ? 'text-neutral-300' : 'text-blue-800'} text-3xl mb-5`}>{ title }</strong>
      {
        image ? <img src={ image } alt="" className="size-40" /> : <div/> 
      }
      <div className={`absolute right-3 bottom-3 h-20 w-20 ${isBlue ? 'bg-neutral-300' : 'bg-blue-800'} rounded-3xl flex items-center justify-center`}>
        <CirclePlay 
          color={`${isBlue ? "#1e40af" : "#fff"}`}
          size={60}
        />
      </div>
    </Link>
  );
}