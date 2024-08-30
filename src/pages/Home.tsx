import { CirclePlay, Globe, Users } from "lucide-react";
import { OptionButton } from "../components/OptionButton";
import { ProximitySection } from "../components/ProximitySection";

export function Home() {
  return (
    <div className="h-screen flex items-center">
      <div 
        className="shadow-inner relative mx-auto my-0 border-4 hover:border-blue-700 h-[500px] w-[800px] flex flex-col items-center justify-center gap-3 rounded-[50px]"
      >
        <div className="absolute -left-20 top-0">
          <ProximitySection />
        </div>
        <OptionButton 
          to="/media-options"
          title="Começar"
        >
          <CirclePlay 
            color="#fff" 
            size={40} 
          />
        </OptionButton>
        <OptionButton 
          to="/references"
          title="Referências"
        >
          <Globe 
            color="#fff" 
            size={40} 
          />
        </OptionButton>
        <OptionButton
          to="/credits" 
          title="Créditos"
        >
          <Users 
            color="#fff" 
            size={40} 
          />
        </OptionButton>
      </div>
    </div>
  );
}