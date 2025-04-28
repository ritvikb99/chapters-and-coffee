"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiCoffee, FiBook } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [is_open, set_is_open] = useState(false);
  const [scrolled, set_scrolled] = useState(false);
  const pathname = usePathname();

  // Check if current page is Blog or About
  const is_light_page = pathname === "/blog" || pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        set_scrolled(true);
      } else {
        set_scrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle_menu = () => set_is_open(!is_open);
  const close_menu = () => set_is_open(false);

  const nav_items = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-100/90 backdrop-blur-md shadow-sm py-2"
          : is_light_page 
            ? "bg-stone-100/70 backdrop-blur-sm py-4" 
            : "bg-stone-900/20 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <FiBook className={`h-6 w-6 ${scrolled || is_light_page ? "text-stone-800" : "text-white"}`} />
              <FiCoffee className={`h-6 w-6 ${scrolled || is_light_page ? "text-stone-800" : "text-white"}`} />
            </div>
            <span className={`font-semibold text-lg ${scrolled || is_light_page ? "text-stone-800" : "text-white"}`}>
              Chapters & Coffee
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {nav_items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.path
                    ? scrolled || is_light_page
                      ? "text-stone-900 border-b-2 border-stone-800" 
                      : "text-white border-b-2 border-white"
                    : scrolled || is_light_page
                      ? "text-stone-700 hover:text-stone-900" 
                      : "text-stone-200 hover:text-white"
                }`}
                onClick={close_menu}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggle_menu}
              className={scrolled || is_light_page ? "text-stone-800" : "text-white"}
              aria-label="Toggle menu"
            >
              {is_open ? <FiX size={24} /> : <FiMenu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {is_open && (
          <div className="md:hidden mt-4 py-4 bg-stone-800/90 backdrop-blur-md rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              {nav_items.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium p-2 rounded ${
                    pathname === item.path 
                      ? "bg-stone-700 text-white"
                      : "text-stone-200 hover:bg-stone-700"
                  }`}
                  onClick={close_menu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 