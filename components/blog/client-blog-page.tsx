"use client";

import { useState } from "react";
import { BlogFilter } from "@/components/blog/blog-filter";
import { BlogGrid } from "@/components/blog/blog-grid";
import type { BlogPost } from "@/lib/types";

interface ClientBlogPageProps {
  initialPosts: BlogPost[];
  categories: string[];
}

export function ClientBlogPage({ initialPosts, categories }: ClientBlogPageProps) {
  const [filteredPosts, set_filtered_posts] = useState(initialPosts);

  return (
    <>
      <BlogFilter 
        posts={initialPosts} 
        categories={categories} 
        onFilterChange={set_filtered_posts} 
      />
      <BlogGrid posts={filteredPosts} />
    </>
  );
} 