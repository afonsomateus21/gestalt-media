import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { references } from "../constants/references";
import { ReferencesCard } from "../components/ReferencesCard";

export function References() {
  return (
    <div className="p-2 md:p-6 my-0 mx-auto h-screen w-full lg:w-[90%] flex flex-col justify-center md:gap-5 items-center relative">
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
          Referências
        </h1>
        
        <div className="flex flex-col md:flex-row justify-around w-full mt-8 md:mt-0 gap-2 lg:gap-0"> 
          <section className="border-4 h-auto w-full md:w-[400px] lg:w-[500px] rounded-[30px] flex flex-col items-center p-4">

            <ul className="w-full flex flex-col gap-5 items-start p-4">
              {references.map((reference, index) => (
                <li className="list-none" key={index}>
                  <a className="hover:underline hover:text-blue-700 text-white" href={reference} target="_blank" rel="noopener noreferrer">
                    <ReferencesCard url={reference} />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
  );
}