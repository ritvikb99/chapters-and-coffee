"use client";

import Link from "next/link";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { BlogPost } from "@/lib/types";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-stone-700">No matching posts found</h3>
        <p className="text-stone-500 mt-2">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card key={post.id} className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <Link href={`/blog/${post.slug}`} className="block relative h-56">
            <Image
              src={post.thumbnail_image}
              alt={post.title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-stone-800 text-white text-xs px-3 py-1 rounded-full">
              {post.category}
            </div>
          </Link>
          <CardContent className="p-6">
            <div className="flex items-center text-stone-500 text-sm mb-3">
              <span>{post.date}</span>
              <Separator className="h-4 mx-2" orientation="vertical" />
              <span className="flex items-center">
                <FiClock className="mr-1 h-3 w-3" />
                {post.reading_time}
              </span>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold text-stone-900 mb-2 hover:text-stone-700 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-stone-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <Button 
              asChild
              variant="link" 
              className="px-0 text-stone-800 hover:text-stone-600"
            >
              <Link href={`/blog/${post.slug}`}>
                Read Full Article
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 