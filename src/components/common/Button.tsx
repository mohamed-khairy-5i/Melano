import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30',
    secondary: 'bg-dark-border hover:bg-dark-border/80 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30',
    success: 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30',
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};
