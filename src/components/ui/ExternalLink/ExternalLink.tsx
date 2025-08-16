import { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
  variant?: 'default' | 'primary' | 'secondary';
}

const variantStyles = {
  default: 'text-blue-600 hover:text-blue-800',
  primary: 'text-white hover:text-gray-200',
  secondary: 'text-gray-600 hover:text-gray-800',
};

export const ExternalLink = ({
  href,
  children,
  className = '',
  showIcon = false,
  variant = 'default',
}: ExternalLinkProps) => {
  const variantStyle = variantStyles[variant];
  const baseStyles = 'transition-colors underline-offset-2';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyle} ${className}`}
    >
      {children}
      {showIcon && (
        <svg
          className="inline-block ml-1 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </a>
  );
};