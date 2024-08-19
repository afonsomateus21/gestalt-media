import { OptionButtonProps } from '../interfaces/OptionButtonProps';

export function OptionButton({ title, children, ...props }: OptionButtonProps) {
  return (
    <button 
      {...props}
      className="flex items-center bg-white w-72 h-20 rounded-full p-4 gap-2"
    >
      { children }
      <strong className="text-blue-800 text-3xl">{ title }</strong>
    </button>
  );
}