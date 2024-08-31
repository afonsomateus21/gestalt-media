import { CardGestaltConceptsProps } from "../interfaces/CardGestaltConceptsProps";

export function CardGestaltConcepts(props: Readonly<CardGestaltConceptsProps>) {
  const { link, title } = props;
  return (
    <div 
      className='relative w-[500px] h-[400px] rounded-3xl flex flex-col items-center justify-center p-2'
    >
        <div className="relative h-[400px] w-[500px] md:w-[500px]">
            <iframe 
                width="500" 
                height="400" 
                src={ link } 
                title={ title } 
                className="rounded-[50px] border-8 border-white overflow-hidden shadow-lg shadow-inner">
            </iframe>
        </div>
    </div>
  );
}