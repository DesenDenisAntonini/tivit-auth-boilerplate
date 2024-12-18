import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild, className,...props }: ButtonProps){
  const Comp = asChild ? Slot : 'button';
  return(
    <Comp
    className={clsx(
      'py-3 px-4 bg-red-500 rounded font-semibold text-white text-sm w-full transition-colors hover:bg-white hover:text-red-500 focus:ring-2 ring-white',
      className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}