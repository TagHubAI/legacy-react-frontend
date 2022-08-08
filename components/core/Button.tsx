import cx from 'clsx';

const variants = {
  primary: 'bg-black text-white hover:opacity-[85%] active:opacity-80',
  secondary: 'bg-white text-gray-700 hover:bg-gray-50',
  subtle: 'text-black border-none hover:bg-gray-100 active:bg-gray-200',
};

const sizes = {
  sm: 'py-1 px-2',
  md: 'py-2 px-4',
  lg: 'py-3 px-6',
  xl: 'py-4 px-8',
  square: 'py-1.5 px-1.5 aspect-square',
};

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  rounded?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

import React, { forwardRef } from 'react';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = 'button',
      className,
      variant = 'primary',
      size = 'md',
      rounded = false,
      ...args
    }: ButtonProps,
    ref
  ) => (
    <button
      type={type}
      ref={ref}
      className={cx(
        `transition-all border active:scale-[98%] ease-out
        focus-visible:shadow-outline outline-none`,
        variants[variant],
        sizes[size],
        rounded ? 'rounded-full' : 'rounded',
        className
      )}
      {...args}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';
export { Button };
