import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from './utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full rounded-md border border-neutral-300 bg-white px-3
          py-2 text-sm transition-colors duration-200 ease-in-out file:border-0 file:bg-transparent file:text-sm
          file:font-medium placeholder:text-neutral-400 hover:border-neutral-400 focus:border-neutral-600
          focus:outline-none focus:ring-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
