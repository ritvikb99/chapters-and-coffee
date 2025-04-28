import { get_random_featured_posts } from "@/lib/blog";
import HomePageClient from "@/components/home-page-client";

export default async function Home() {
  // Get random featured posts from the JSON file
  const featured_posts = await get_random_featured_posts(3);
  
  return (
    <HomePageClient initialFeaturedPosts={featured_posts} />
  );
}
