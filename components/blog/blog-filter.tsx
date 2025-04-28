"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { BlogPost } from "@/lib/types";

interface BlogFilterProps {
  posts: BlogPost[];
  categories: string[];
  onFilterChange: (filteredPosts: BlogPost[]) => void;
}

export function BlogFilter({ posts, categories, onFilterChange }: BlogFilterProps) {
  const [searchTerm, set_search_term] = useState("");
  const [activeCategory, set_active_category] = useState("All Categories");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    set_search_term(value);
    applyFilters(value, activeCategory);
  };

  const handleCategoryClick = (category: string) => {
    set_active_category(category);
    applyFilters(searchTerm, category);
  };

  const applyFilters = (search: string, category: string) => {
    let filtered = [...posts];
    
    // Apply category filter
    if (category !== "All Categories") {
      filtered = filtered.filter(post => post.category === category);
    }
    
    // Apply search filter
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchLower) || 
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.category.toLowerCase().includes(searchLower)
      );
    }
    
    onFilterChange(filtered);
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="w-full md:w-auto">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" />
            <Input 
              type="search" 
              placeholder="Search articles..." 
              className="pl-10 bg-white border-stone-200 focus-visible:ring-stone-500"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-2 w-full md:w-auto">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category === activeCategory ? "default" : "outline"}
              size="sm"
              className={category === activeCategory 
                ? "bg-stone-800 hover:bg-stone-700 whitespace-nowrap"
                : "border-stone-200 text-stone-700 hover:bg-stone-50 whitespace-nowrap"
              }
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
} 