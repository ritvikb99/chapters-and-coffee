# Chapters & Coffee

A modern blog site for book lovers and coffee enthusiasts built with Next.js, Tailwind CSS, and Shadcn UI.

## Features

- Responsive design with a subtle, sleek, and professional look
- Full-page scroll design for the homepage
- Blog listing page with filtering and search capabilities
- Detailed blog post pages with rich content display
- Admin center with login for content management
- Social media integration

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Database**: SQLite (development) / Vercel supported DB (production)
- **Icons**: React Icons
- **Authentication**: Next Auth
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/chapters-and-coffee.git
cd chapters-and-coffee
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Project Structure

```
chapters-and-coffee/
├── app/                   # Next.js App Router
│   ├── (routes)/          # Route groups
│   │   ├── (admin)/       # Admin routes
│   │   ├── (auth)/        # Auth routes
│   │   └── (main)/        # Main public routes
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   ├── login/             # Login page
│   └── admin/             # Admin dashboard
├── components/            # Reusable components
│   ├── shared/            # Shared components (navigation, footer, etc.)
│   └── ui/                # UI components from Shadcn
├── lib/                   # Utility functions and helpers
│   └── db/                # Database utilities
├── prisma/                # Database schema and migrations
├── public/                # Static assets
│   ├── images/            # Image files
│   └── fonts/             # Font files
└── ...
```

## Deployment

This project is configured to be deployed on Vercel. The deployment will automatically handle the database connection change from SQLite (development) to a Vercel-supported database.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Beautifully designed components
- [Vercel](https://vercel.com/) - Deployment platform

## How to Update Blog Content

To add or modify blog posts, you can edit the JSON file located at `data/blog_posts.json`. This file contains an array of blog post objects, each with the following structure:

```json
{
  "id": 1,                              // Unique identifier for the post
  "title": "Post Title",                // The title of your blog post
  "slug": "post-title",                 // URL-friendly version of the title (used in URLs)
  "excerpt": "Brief summary...",        // Short summary shown in listings
  "content": "<p>HTML content...</p>",  // Full HTML content of the post
  "thumbnail_image": "/images/thumb.jpg", // Image shown in blog listings (360x240px recommended)
  "hero_image": "/images/hero.jpg",     // Larger image for the post header (1200x600px recommended)
  "date": "March 15, 2024",             // Publication date
  "reading_time": "5 min read",         // Estimated reading time
  "category": "Category Name",          // Category for filtering
  "featured": true,                     // Whether post should be featured
  "author": {                           // Author information
    "name": "Author Name",
    "image": "/images/author.jpg",
    "bio": "Short author bio..."
  },
  "related_posts": [2, 3]               // IDs of related posts
}
```

### Steps to add a new blog post:

1. Add your post images to the `/public/images/` directory (both thumbnail and hero images)
2. Open the `data/blog_posts.json` file
3. Add a new object to the array, following the structure above
4. Give the post a unique ID (increment from the highest existing ID)
5. Write your content in HTML format in the "content" field
6. Make sure to escape special characters in your HTML content
7. Save the file

### Adding a new post with proper formatting:

1. For HTML content, follow these guidelines:
   - Use `<p>` tags for paragraphs
   - Use `<h2>`, `<h3>` for headings
   - Use `<ul>` and `<li>` for lists
   - Use `<blockquote>` for quotes
   - Use `<strong>` for bold text
   - Add the class "lead" to the first paragraph for emphasis: `<p class="lead">...</p>`

2. For images in your content, use the full HTML format:
   ```html
   <div class="my-8">
     <img src="/images/your-image.jpg" alt="Description" class="rounded-lg" />
     <p class="text-sm text-stone-500 mt-2">Image caption</p>
   </div>
   ```

3. Sample code blocks can be added with:
   ```html
   <pre class="bg-stone-100 p-4 rounded-lg overflow-x-auto">
     <code>
       // Your code here
     </code>
   </pre>
   ```

### Updating the JSON file:

The simplest way to update the JSON file is by using VS Code or another code editor. Make sure to maintain valid JSON syntax, especially when adding HTML content.

After updating the JSON file, your changes will be automatically reflected on the website the next time the page loads.
