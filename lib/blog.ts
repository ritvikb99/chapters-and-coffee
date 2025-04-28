import type { BlogPost } from './types';
import fs from 'fs';
import path from 'path';

// Get all blog posts
export async function get_all_blog_posts(): Promise<BlogPost[]> {
  try {
    // Use direct file system access for server components
    // This works because this function is only called from server components
    const blog_posts_path = path.join(process.cwd(), 'data/blog_posts.json');
    const raw_data = fs.readFileSync(blog_posts_path, 'utf8');
    const posts = JSON.parse(raw_data) as BlogPost[];
    
    // Sort posts by date (newest first)
    return posts.sort((a: BlogPost, b: BlogPost) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

// Get a specific blog post by slug
export async function get_blog_post_by_slug(slug: string): Promise<BlogPost | null> {
  const posts = await get_all_blog_posts();
  return posts.find(post => post.slug === slug) || null;
}

// Get featured blog posts
export async function get_featured_blog_posts(): Promise<BlogPost[]> {
  const posts = await get_all_blog_posts();
  return posts.filter(post => post.featured);
}

// Get random featured posts (for homepage)
export async function get_random_featured_posts(count: number = 3): Promise<BlogPost[]> {
  const featured_posts = await get_featured_blog_posts();
  
  // If we have fewer featured posts than requested, return all of them
  if (featured_posts.length <= count) {
    return featured_posts;
  }
  
  // Shuffle the featured posts and return the requested count
  return [...featured_posts]
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}

// Get related blog posts by IDs
export async function get_related_blog_posts(post_ids: number[]): Promise<BlogPost[]> {
  const all_posts = await get_all_blog_posts();
  return all_posts.filter(post => post_ids.includes(post.id));
}

// Get posts by category
export async function get_posts_by_category(category: string): Promise<BlogPost[]> {
  const posts = await get_all_blog_posts();
  if (category === 'All Categories') {
    return posts;
  }
  return posts.filter(post => post.category === category);
}

// Get all unique categories
export async function get_all_categories(): Promise<string[]> {
  const posts = await get_all_blog_posts();
  const categories = new Set<string>();
  
  posts.forEach(post => {
    categories.add(post.category);
  });
  
  return ['All Categories', ...Array.from(categories)];
} 