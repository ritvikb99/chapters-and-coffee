import Link from "next/link";
import { FiCoffee, FiBook, FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const current_year = new Date().getFullYear();
  
  const social_links = [
    { name: "Instagram", icon: FiInstagram, url: "https://instagram.com" },
    { name: "Twitter", icon: FiTwitter, url: "https://twitter.com" },
    { name: "Facebook", icon: FiFacebook, url: "https://facebook.com" },
  ];
  
  const footer_links = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "About", url: "/about" },
  ];
  
  return (
    <footer className="bg-stone-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <FiBook className="h-5 w-5 text-stone-800" />
                <FiCoffee className="h-5 w-5 text-stone-800" />
              </div>
              <span className="font-semibold text-stone-800">Chapters & Coffee</span>
            </Link>
            <p className="text-stone-600 text-sm">
              A cozy corner where book lovers gather to discuss great reads
              over delicious coffee. Join our community of passionate readers.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-medium text-stone-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footer_links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.url}
                    className="text-stone-600 hover:text-stone-900 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social and contact */}
          <div>
            <h3 className="font-medium text-stone-800 mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {social_links.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-stone-600 text-sm">
              Sign up for our newsletter to get updates on new blog posts, book recommendations, and coffee brewing tips.
            </p>
          </div>
        </div>
        
        <Separator className="my-8 bg-stone-200" />
        
        <div className="text-center text-stone-600 text-sm">
          <p>© {current_year} Chapters & Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 