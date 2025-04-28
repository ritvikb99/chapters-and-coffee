import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import type { BlogPost } from '../../../lib/types';

export const dynamic = 'force-static';

const blog_posts_path = path.join(process.cwd(), 'data/blog_posts.json');

export async function GET() {
  try {
    const raw_data = fs.readFileSync(blog_posts_path, 'utf8');
    const posts = JSON.parse(raw_data) as BlogPost[];
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return NextResponse.json({ error: 'Failed to load blog posts' }, { status: 500 });
  }
} 