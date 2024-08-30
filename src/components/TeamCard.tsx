interface TeamCardProps {
  name: string;
  url: string;
}

export function TeamCard({ name, url } : TeamCardProps) {
  return (
    <div className="hover:bg-violet-950 w-full flex justify-center items-center gap-5 bg-blue-700 rounded-[24px] p-5 shadow-lg">
      <div 
        className="size-24 bg-cover bg-center rounded-[20px] bg-white shadow-lg border-4 border-white" 
        style={{ backgroundImage: `url(${ url })` }} 
      />
      
      <div className="flex-1">
        <span className="text-white font-regukar text-lg">
          { name }
        </span>
      </div>
    </div>
  );
}