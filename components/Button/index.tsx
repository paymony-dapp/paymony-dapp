import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: VoidFunction;
  variant?: 'primary' | 'secondary';
  icon: () => JSX.Element;
}

const Button: FC<ButtonProps> = (
  { text, onClick, type = 'button', icon: Icon, variant = 'primary' },
  ...props
) => {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className='inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-600 border border-blue-600 rounded hover:bg-transparent hover:text-blue-600 active:text-blue-500 focus:outline-none focus:ring'
    >
      <Icon />
      <span className='text-sm font-medium'>{text} </span>
    </button>
  );
};

export default Button;
