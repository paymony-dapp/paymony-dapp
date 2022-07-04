import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: VoidFunction;
  variant?: 'primary' | 'secondary';
  icon: () => JSX.Element;
}

const Button: FC<ButtonProps> = (
  { text, onClick, type = 'button', icon: Icon, variant = 'primary' },
  props
) => {
  const primaryClass =
    'bg-blue-700 border border-blue-600 rounded-lg hover:bg-transparent hover:text-blue-500 hover:border-blue-500 active:text-blue-500';
  const secondaryClass =
    'bg-transparent border border-zinc-100 rounded-lg hover:bg-transparent hover:text-blue-500 hover:border-blue-500 active:text-blue-500';
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={`inline-flex items-center px-6 py-3 space-x-2 text-white  focus:outline-none focus:ring ${
        variant === 'primary' ? primaryClass : secondaryClass
      }`}
    >
      <Icon />
      <span className='text-sm font-medium mt-1'>{text} </span>
    </button>
  );
};

export default Button;
