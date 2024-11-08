import React from 'react';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'lg';
  isLight?: boolean;
  outline?: boolean;
  isIcon?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size,
  isLight = false,
  outline = false,
  isIcon = false,
  className = '',
  ...props
}) => {
  const variantClass = outline
    ? `btn-outline-${variant}` 
    : isLight
    ? `btn-light-${variant}` 
    : `btn-${variant}`;
  
  const sizeClass = size ? `btn-${size}` : '';
  const iconClass = isIcon ? 'btn-icon' : '';
  
  return (
    <button
      className={`${className} btn ${variantClass} ${sizeClass} ${iconClass}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
