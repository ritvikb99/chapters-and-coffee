import { get_all_blog_posts, get_all_categories } from "@/lib/blog";
import { ClientBlogPage } from "@/components/blog/client-blog-page";

export const metadata = {
  title: "Blog | Chapters & Coffee",
  description: "Explore our articles on books, reading, and coffee culture",
};

export default async function BlogPage() {
  // Get blog posts and categories from the JSON file via the API
  const blog_posts = await get_all_blog_posts();
  const categories = await get_all_categories();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Our Blog
          </h1>
          <p className="text-stone-600 text-lg max-w-3xl mx-auto">
            Explore our collection of articles on books, reading culture, and the perfect cup of coffee. 
            Find inspiration, recommendations, and insights from fellow book lovers.
          </p>
        </div>

        {/* Client Components for Search/Filter and Blog Grid */}
        <ClientBlogPage initialPosts={blog_posts} categories={categories} />

      </div>
    </div>
  );
} 