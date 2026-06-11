import { useState } from 'react';
import type { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  onCategoryChange?: (categoryId: string) => void;
  defaultCategory?: string;
}

export default function CategoryFilter({
  categories,
  onCategoryChange,
  defaultCategory = categories[0]?.id,
}: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const handleClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  return (
    <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleClick(category.id)}
          className={`whitespace-nowrap px-4 py-2 rounded-full font-label-bold text-label-bold transition-all ${
            activeCategory === category.id
              ? 'bg-primary text-white shadow-sm'
              : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container'
          }`}
        >
          {category.icon && <span className="mr-1">{category.icon}</span>}
          {category.name}
        </button>
      ))}
    </div>
  );
}
