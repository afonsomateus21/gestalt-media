import { CirclePlay, Globe, Users } from "lucide-react";
import { OptionButton } from "../components/OptionButton";
import { ProximitySection } from "../components/ProximitySection";

export function Home() {
  return (
    <div 
      className="relative mx-auto my-0 border-4 h-[500px] w-[800px] flex flex-col items-center justify-center gap-3"
    >
      <div className="absolute -left-20 top-0">
        <ProximitySection />
      </div>
      <OptionButton 
        title="Começar"
      >
        <CirclePlay 
          color="#fff" 
          size={40} 
        />
      </OptionButton>
      <OptionButton 
        title="Referências"
      >
        <Globe 
          color="#fff" 
          size={40} 
        />
      </OptionButton>
      <OptionButton 
        title="Créditos"
      >
        <Users 
          color="#fff" 
          size={40} 
        />
      </OptionButton>
    </div>
  );
}