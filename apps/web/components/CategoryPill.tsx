import React from 'react';

interface CategoryPillProps {
  category: string;
  className?: string;
}

const CategoryPill: React.FC<CategoryPillProps> = ({ category, className }) => {
  return (
    <span
      className={`inline-block bg-[#0900FF] text-white dark:bg-[#0900FF] dark:text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${className || ''}`}
    >
      {category}
    </span>
  );
};

export default CategoryPill; 