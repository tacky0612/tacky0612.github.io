import React, { ReactNode } from 'react';

export interface CardProps {
  title?: string;
  icon?: ReactNode;
  imageUrl?: string;
  headerBgColor?: string;
  headerTextColor?: string;
  children?: ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  items?: string[];
  variant?: 'default' | 'skill';
}

export const Card: React.FC<CardProps> = ({
  title,
  icon,
  imageUrl,
  headerBgColor = 'bg-gray-100',
  headerTextColor = 'text-gray-900',
  children,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  items,
  variant = 'default',
}) => {
  const hasHeader = title || icon || imageUrl;
  
  const baseCardStyles = variant === 'skill' 
    ? 'border rounded-lg h-full shadow-sm hover:shadow-md transition-shadow'
    : 'rounded-lg shadow-sm hover:shadow-md transition-shadow';

  return (
    <div className={`${baseCardStyles} ${className}`}>
      {hasHeader && (
        <div className={`${headerBgColor} ${headerTextColor} p-3 rounded-t-lg flex items-center ${headerClassName}`}>
          {icon && <span className="mr-3 text-xl">{icon}</span>}
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={title || ''} 
              className="mr-3 h-6 w-6 brightness-0 invert" 
            />
          )}
          {title && <span className="font-semibold">{title}</span>}
        </div>
      )}
      <div className={`${hasHeader ? 'rounded-b-lg' : 'rounded-lg'} bg-white p-4 ${bodyClassName}`}>
        {items && items.length > 0 ? (
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index} className="text-sm text-gray-700">
                • {item}
              </li>
            ))}
          </ul>
        ) : (
          children
        )}
      </div>
    </div>
  );
};