"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo'; 
// 1. (NEW) Import usePathname here
import { usePathname } from 'next/navigation';

// --- Shadcn Imports ---
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// --- Icons ---
import { Menu, Facebook, Instagram, Linkedin, ChevronDown } from 'lucide-react'; 

// --- Navigation Links (Excludes Services) ---
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
// ... (serviceLinks array) ...


// 2. (FIX) Remove 'isSticky' from props
function Navbar() { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 3. (FIX) Get the pathname *inside* the Navbar component
  const pathname = usePathname();
  const isSticky = !pathname.startsWith('/blog');

  return (
    // 4. (FIX) The 'cn' logic now works perfectly
    <nav 
      className={cn(
        "top-0 w-full relative z-50 bg-white/80 dark:bg-brand-midnight/80 backdrop-blur-sm border-b border-gray-200 dark:border-brand-teal",
        isSticky && "sticky" 
      )}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <Logo />

        {/* --- DESKTOP NAV WRAPPER --- */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* Main Nav Links */}
          {navLinks.map((link) => (
            <Button 
              key={link.href} 
              variant="link" 
              asChild
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <Link href={link.href} className="text-gray-900 dark:text-brand-white text-sm font-medium">
                {link.label}
              </Link>
            </Button>
          ))}
          
          {/* --- CUSTOM SERVICES DROPDOWN --- */}
          <div className="relative group">
            <Button 
                variant="link" 
                asChild
                className="opacity-70 hover:opacity-100 transition-opacity duration-200 text-gray-900 dark:text-brand-white text-sm font-medium"
            >
                <Link href="/services" className="flex items-center"> 
                    Services 
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </Link>
            </Button>
            
            {/* THE DROPDOWN MENU */}
            <ul 
                className="absolute left-0 mt-0.5 w-56 p-1 rounded-md shadow-lg 
                           bg-white dark:bg-brand-midnight dark:border-brand-teal border 
                           transition-all duration-300 transform scale-y-0 opacity-0 
                           group-hover:scale-y-100 group-hover:opacity-100 
                           origin-top z-40"
            >
              {/* ... (serviceLinks map) ... */}
            </ul>
          </div>
          {/* --- END CUSTOM DROPDOWN --- */}


          {/* Social Icons (Desktop) */}
          <div className="flex space-x-2 border-l border-gray-200 dark:border-brand-teal pl-4">
            {/* ... (social icons) ... */}
          </div>
          
          {/* Desktop "Call Us" Button */}
          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-brand-white">
            <a href="tel:090607 93927">Call Us</a>
          </Button>
        </div>

        {/* --- MOBILE NAV (Side-Drawer) --- */}
        <div className="flex md:hidden">
          {/* ... (Sheet component) ... */}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;