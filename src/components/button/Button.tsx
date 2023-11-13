import { ReactNode } from 'react';

interface IButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

const Button = ({ onClick, children }: IButtonProps) => {
  return (
    <div
      className='px-5 py-2 text-base font-bold text-white rounded-md cursor-pointer bg-green'
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
