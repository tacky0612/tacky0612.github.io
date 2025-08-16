import { ReactNode } from 'react';

interface SectionBackgroundProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  background?: 'white' | 'gray' | 'blue' | 'green' | 'transparent';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  centered?: boolean;
}

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

const roundedStyles = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
};

const backgroundStyles = {
  white: 'bg-white',
  gray: 'bg-gray-100',
  blue: 'bg-blue-50',
  green: 'bg-green-50',
  transparent: 'bg-transparent',
};

const maxWidthStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
};

export const SectionBackground = ({
  children,
  className = '',
  padding = 'lg',
  rounded = '3xl',
  background = 'gray',
  maxWidth = '4xl',
  centered = true,
}: SectionBackgroundProps) => {
  const baseStyles = paddingStyles[padding];
  const roundedStyle = roundedStyles[rounded];
  const bgStyle = backgroundStyles[background];
  const maxWidthStyle = maxWidthStyles[maxWidth];
  const centerStyles = centered ? 'mx-auto' : '';

  return (
    <div
      className={`${baseStyles} ${roundedStyle} ${bgStyle} ${maxWidthStyle} ${centerStyles} ${className}`}
    >
      {children}
    </div>
  );
};