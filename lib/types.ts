// Types for blog posts and related data
export interface Author {
  name: string;
  image: string;
  bio: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail_image: string;
  hero_image: string;
  date: string;
  reading_time: string;
  category: string;
  featured: boolean;
  author: Author;
  related_posts: number[];
} 