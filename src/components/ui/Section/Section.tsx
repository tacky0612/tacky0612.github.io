import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  containerized?: boolean;
}

const paddingStyles = {
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-20',
};

export const Section = ({
  id,
  children,
  className = '',
  padding = 'lg',
  containerized = false,
}: SectionProps) => {
  const paddingStyle = paddingStyles[padding];
  const baseStyles = 'scroll-mt-20';
  
  const content = containerized ? (
    <div className="container mx-auto px-4">
      {children}
    </div>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={`${baseStyles} ${paddingStyle} ${className}`}
    >
      {content}
    </section>
  );
};