import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FiCalendar, FiClock, FiTag, FiArrowLeft, FiShare2 } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { get_blog_post_by_slug, get_related_blog_posts, get_all_blog_posts } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = await get_all_blog_posts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await get_blog_post_by_slug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Chapters & Coffee',
      description: 'The requested blog post could not be found',
    };
  }
  
  return {
    title: `${post.title} | Chapters & Coffee`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await get_blog_post_by_slug(slug);
  
  if (!post) {
    notFound();
  }
  
  // Get related posts
  const related_posts = await get_related_blog_posts(post.related_posts);
  
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src={post.hero_image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center text-white/80 text-sm mb-4 space-x-4">
              <span className="flex items-center">
                <FiCalendar className="mr-2 h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center">
                <FiClock className="mr-2 h-4 w-4" />
                {post.reading_time}
              </span>
              <span className="flex items-center">
                <FiTag className="mr-2 h-4 w-4" />
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-4 border-2 border-white">
                <AvatarImage src={post.author.image} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-white/70 text-sm">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section - Full Width Reading Experience */}
      <div className="bg-white py-16 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Main Content */}
            <article className="prose prose-stone prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }} 
                className="leading-relaxed space-y-6 text-stone-800"
              />
            </article>
            
            {/* Author Bio Card */}
            <div className="mt-16 mb-12 bg-stone-50 p-6 rounded-lg border border-stone-100">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 border-2 border-stone-200">
                  <AvatarImage src={post.author.image} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg text-stone-900">About {post.author.name}</h3>
                  <p className="text-stone-600 mt-2">{post.author.bio}</p>
                </div>
              </div>
            </div>
            
            {/* Share Section */}
            <div className="border-t border-stone-200 pt-8 pb-12">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-stone-900 mb-2">Share this article</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                      <FiShare2 className="h-4 w-4 text-stone-700" />
                    </Button>
                  </div>
                </div>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-stone-200"
                >
                  <Link href="/blog" className="flex items-center">
                    <FiArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Related Posts - Moved from sidebar to end of content */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-stone-900 mb-8 flex items-center">
                <span className="w-10 h-0.5 bg-stone-300 mr-3"></span>
                Related Articles
                <span className="w-10 h-0.5 bg-stone-300 ml-3"></span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {related_posts.map((related) => (
                  <Card key={related.id} className="border-stone-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-44 w-full">
                      <Image
                        src={related.thumbnail_image}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="text-stone-500 text-sm mb-2 flex items-center">
                        <FiCalendar className="h-3 w-3 mr-1" />
                        {related.date}
                      </div>
                      <Link href={`/blog/${related.slug}`} className="group">
                        <h3 className="text-xl font-medium text-stone-900 group-hover:text-stone-700 transition-colors line-clamp-2 mb-2">
                          {related.title}
                        </h3>
                      </Link>
                      <p className="text-stone-600 line-clamp-2 text-sm mb-4">{related.excerpt}</p>
                      <Button 
                        asChild
                        variant="ghost" 
                        className="px-0 text-stone-700 hover:text-stone-900 hover:bg-transparent"
                      >
                        <Link href={`/blog/${related.slug}`}>
                          Read Article
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-stone-200 hover:bg-stone-100"
                >
                  <Link href="/blog">
                    Explore All Articles
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 