import { Link } from 'react-router-dom';
import { OptionButtonProps } from '../interfaces/OptionButtonProps';

export function OptionButton({ title, children, ...props }: OptionButtonProps) {
  return (
    <Link 
      {...props}
      className="group flex items-center bg-white w-72 h-20 rounded-full p-4 gap-2 hover:bg-blue-700 transition-colors duration-300"
    >
      <div className="size-12 rounded-full bg-violet-900 flex justify-center items-center">
        { children }
      </div>
      <strong className="text-blue-800 group-hover:text-white text-3xl font-extrabold transition-colors duration-300">
        { title }
      </strong>
    </Link>
  );
}