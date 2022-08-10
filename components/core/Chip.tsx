import cx from 'clsx';

const variants = {
  default: 'bg-gray-200 text-gray-700',
  success: 'bg-green-200 text-green-700',
  failure: 'bg-red-200 text-red-700',
  progress: 'bg-yellow-200 text-yellow-700',
};

const sizes = {
  xs: 'py-0 px-2 text-xs',
  sm: 'py-0 px-2 text-sm',
  md: 'py-2 px-4',
  lg: 'py-3 px-6',
};

type ChipProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  rounded?: boolean;
  label?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

import React, { forwardRef } from 'react';

const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  (
    {
      children,
      className,
      variant = 'default',
      size = 'md',
      rounded = true,
      label,
      ...args
    }: ChipProps,
    ref
  ) => (
    <span
      ref={ref}
      className={cx(
        `w-min flex items-center gap-1`,
        rounded ? 'rounded-full' : 'rounded',
        variants[variant],
        sizes[size],
        className
      )}
      title={label}
      aria-label={`${label}: ${children}`}
      {...args}
    >
      {/* <div className="bg-green-700 w-1.5 h-1.5 rounded-full"></div> */}
      {children}
    </span>
  )
);

Chip.displayName = 'Chip';
export default Chip;
