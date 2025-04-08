'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

interface ProductFilterProps {
  initialFilter?: string; // Initial filter value
  onFilterChange: (filter: string) => void; // Callback when filter changes
}

// Define available filter categories
const filterCategories = [
  { value: 'all', label: 'Tümü' },
  { value: 'window', label: 'Pencere Sineklikleri' },
  { value: 'door', label: 'Kapı Sineklikleri' },
  // Add more categories like material, size later if needed
];

export function ProductFilter({ initialFilter = 'all', onFilterChange }: ProductFilterProps) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const handleFilterClick = (filterValue: string) => {
    setActiveFilter(filterValue);
    onFilterChange(filterValue);
  };

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {filterCategories.map((category) => (
        <Button
          key={category.value}
          variant={activeFilter === category.value ? 'default' : 'outline'} // Highlight active filter
          onClick={() => handleFilterClick(category.value)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
} 