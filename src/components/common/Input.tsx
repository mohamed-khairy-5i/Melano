import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = ({ label, error, hint, className = '', ...props }: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {props.required && <span className="text-red-500 mr-1">*</span>}
        </label>
      )}
      <input
        {...props}
        className={`
          w-full px-4 py-2.5 rounded-lg border 
          ${error 
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
            : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500'
          }
          bg-white dark:bg-gray-800 
          text-gray-900 dark:text-white
          placeholder-gray-400 dark:placeholder-gray-500
          focus:ring-2 focus:outline-none
          transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
      />
      {hint && !error && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {hint}
        </p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
