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
          `border-input ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border bg-neutral-900
          px-3 py-2 text-sm file:border-0 file:bg-transparent
          file:text-sm file:font-medium placeholder:text-neutral-500
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50`,
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
