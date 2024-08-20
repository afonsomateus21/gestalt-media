import { Link } from 'react-router-dom';
import { OptionButtonProps } from '../interfaces/OptionButtonProps';

export function OptionButton({ title, children, ...props }: OptionButtonProps) {
  return (
    <Link 
      {...props}
      className="flex items-center bg-white w-72 h-20 rounded-full p-4 gap-2"
    >
      <div className="size-12 rounded-full bg-blue-800 flex justify-center items-center">
        { children }
      </div>
      <strong className="text-blue-800 text-3xl">{ title }</strong>
    </Link>
  );
}