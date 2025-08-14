import React from 'react';

interface SkillCardProps {
  skill: string;
  icon?: React.ReactNode;
  imageLink?: string;
  items: string[];
  bgColor?: string;
  textColor?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  icon,
  imageLink,
  items,
  bgColor = 'bg-blue-600',
  textColor = 'text-white',
}) => {
  return (
    <li className="m-2 w-64">
      <div className="border rounded-lg h-full shadow-sm hover:shadow-md transition-shadow">
        <div className={`${bgColor} ${textColor} p-3 rounded-t-lg flex items-center`}>
          {icon && <span className="mr-3 text-xl">{icon}</span>}
          {imageLink && (
            <img src={imageLink} alt={skill} className="mr-3 h-6 w-6 brightness-0 invert" />
          )}
          <span className="font-semibold">{skill}</span>
        </div>
        <div className="p-4 bg-white rounded-b-lg">
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index} className="text-sm text-gray-700">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default SkillCard;
