"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiCoffee, FiBook, FiFeather } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/types";

interface HomePageClientProps {
  initialFeaturedPosts: BlogPost[];
}

export default function HomePageClient({ initialFeaturedPosts }: HomePageClientProps) {
  const [current_section, set_current_section] = useState(0);
  const [featured_posts] = useState<BlogPost[]>(initialFeaturedPosts);
  const sections_ref = useRef<(HTMLElement | null)[]>([]);
  const total_sections = 4;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sections_ref.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (
            scrollY >= sectionTop - windowHeight / 3 &&
            scrollY < sectionTop + sectionHeight - windowHeight / 3
          ) {
            set_current_section(index);
          }
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll_to_section = (index: number) => {
    if (sections_ref.current[index]) {
      window.scrollTo({
        top: sections_ref.current[index]?.offsetTop || 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {Array.from({ length: total_sections }).map((_, index) => (
            <button
              key={index}
              onClick={() => scroll_to_section(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current_section === index
                  ? "bg-stone-800 scale-125"
                  : "bg-stone-400 hover:bg-stone-600"
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={(el) => {
          sections_ref.current[0] = el;
        }}
        className="min-h-screen flex items-center relative pt-16"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-800/40 to-stone-700/30 z-10" />
          <div className="h-full w-full bg-[url('/images/hero-bg.png')] bg-cover bg-center" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center backdrop-blur-sm bg-stone-900/10 p-8 rounded-xl border border-stone-200/20">
            <div className="flex justify-center mb-4">
              <div className="flex items-center space-x-2">
                <FiBook className="h-8 w-8 text-stone-100" />
                <FiCoffee className="h-8 w-8 text-stone-100" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-sm">
              Where Stories & Brews <br /> Come Together
            </h1>
            <p className="text-lg md:text-xl text-stone-200 mb-8">
              Discover thoughtful book reviews, reading insights, and coffee culture,
              all in one cozy corner of the internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-stone-100 hover:bg-white text-stone-900 font-medium"
              >
                <Link href="/blog">
                  Explore Our Blog <FiArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-stone-200 text-black hover:bg-stone-800/60"
              >
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <button
            onClick={() => scroll_to_section(1)}
            aria-label="Scroll down"
            className="text-stone-200 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => {
          sections_ref.current[1] = el;
        }}
        className="min-h-screen flex items-center bg-stone-100 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-image.png"
                alt="Coffee and books"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent"></div>
            </div>
            
            <div className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div className="inline-block p-2 bg-stone-200 rounded-lg">
                <FiFeather className="h-6 w-6 text-stone-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
                Our Story
              </h2>
              <p className="text-stone-700">
                Founded in 2023, Chapters & Coffee was born from a simple love of literature
                and perfectly brewed coffee. We believe both are best enjoyed slowly, mindfully,
                and in good company.
              </p>
              <p className="text-stone-700">
                Our blog explores the intersection of reading culture and coffee appreciation,
                offering thoughtful reviews, brewing guides, and reflections on the reading life.
              </p>
              <Button
                asChild
                className="bg-stone-800 hover:bg-stone-700 text-white mt-4"
              >
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section
        ref={(el) => {
          sections_ref.current[2] = el;
        }}
        className="min-h-screen flex items-center py-16 bg-gradient-to-b from-white to-stone-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Dive into our most popular content exploring the world of books and coffee.
              Each piece is crafted to inspire your reading journey and enhance your coffee experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured_posts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-56">
                  <Image
                    src={post.thumbnail_image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-stone-500 mb-2">
                    {post.date} · {post.reading_time}
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-stone-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="px-0 text-stone-800 hover:text-stone-700"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read Article
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-stone-800 hover:bg-stone-700 text-white"
            >
              <Link href="/blog">
                View All Articles <FiArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        ref={(el) => {
          sections_ref.current[3] = el;
        }}
        className="min-h-screen flex items-center py-16 relative"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-stone-900/80 z-10" />
          <div className="h-full w-full bg-[url('/images/hero-bg.png')] bg-cover bg-center" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-stone-800 rounded-xl mb-6">
              <div className="flex items-center space-x-2">
                <FiBook className="h-6 w-6 text-stone-100" />
                <FiCoffee className="h-6 w-6 text-stone-100" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-stone-200 mb-8">
              Subscribe to our newsletter for book recommendations, brewing tips, and exclusive content
              delivered straight to your inbox. No spam, just the good stuff.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg bg-white/90 text-stone-900 flex-grow focus:outline-none focus:ring-2 focus:ring-stone-500"
              />
              <Button className="bg-stone-100 hover:bg-white text-stone-900 px-6 py-3">
                Subscribe
              </Button>
            </div>
            
            <p className="text-stone-400 mt-4 text-sm">
              By subscribing, you agree to receive email updates from Chapters & Coffee.
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 