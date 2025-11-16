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

// --- Service Links (For Dropdown) ---
const serviceLinks = [
    { href: "/services/production", label: "Music Production" },
    { href: "/services/mixing", label: "Mixing & Mastering" },
    { href: "/services/recording", label: "Recording & Dubbing" },
    { href: "/services/jingles", label: "Commercial Audio" },
];


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
        "top-0 w-full relative z-50 bg-blue-600 dark:bg-blue-600 backdrop-blur-sm border-b border-blue-700",
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
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <Link href={link.href} className="text-white dark:text-white text-sm font-medium">
                {link.label}
              </Link>
            </Button>
          ))}
          
          {/* --- CUSTOM SERVICES DROPDOWN --- */}
          <div className="relative group">
            <Button 
                variant="link" 
                asChild
                className="opacity-80 hover:opacity-100 transition-opacity duration-200 text-white dark:text-white text-sm font-medium"
            >
                <Link href="/services" className="flex items-center"> 
                    Services 
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </Link>
            </Button>
            
            {/* THE DROPDOWN MENU */}
            <ul 
                className="absolute left-0 mt-0.5 w-56 p-1 rounded-md shadow-lg 
                           bg-blue-600 dark:bg-blue-600 border-blue-700
                           transition-all duration-300 transform scale-y-0 opacity-0 
                           group-hover:scale-y-100 group-hover:opacity-100 
                           origin-top z-40"
            >
                {serviceLinks.map((service) => (
                    <li key={service.href}>
                        <Link 
                            href={service.href} 
                            className="block px-3 py-2 text-sm text-white dark:text-white hover:bg-blue-700 dark:hover:bg-blue-700 rounded-sm transition-colors duration-150"
                        >
                            {service.label}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>
          {/* --- END CUSTOM DROPDOWN --- */}


          {/* Social Icons (Desktop) */}
          <div className="flex space-x-2 border-l border-blue-500 dark:border-blue-500 pl-4">
            <Button variant="ghost" size="icon" asChild className="opacity-70 hover:opacity-100 transition-opacity duration-200 text-white">
                <a href="https://www.facebook.com/profile.php?id=61566925568567" target="_blank" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="opacity-70 hover:opacity-100 transition-opacity duration-200 text-white">
                <a href="https://www.instagram.com/avn.music1/" target="_blank" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="opacity-70 hover:opacity-100 transition-opacity duration-200 text-white">
                <a href="https://www.linkedin.com/company/avn-productions1" target="_blank" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            </Button>
          </div>
          
          {/* Desktop "Call Us" Button */}
          <Button asChild size="sm" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold">
            <a href="tel:090607 93927">Call Us</a>
          </Button>
        </div>

        {/* --- MOBILE NAV (Side-Drawer) --- */}
        <div className="flex md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-white text-white hover:bg-blue-700">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="bg-white dark:bg-white border-l dark:border-l">
              <SheetHeader>
                <Logo size="small" />
                <SheetTitle className="text-gray-900 dark:text-gray-900">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6 pt-8">
                
                {/* Mobile: Home, About, Blog, Contact */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xl font-medium opacity-70 hover:opacity-100 transition-opacity duration-200 text-gray-900 dark:text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)} 
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile: All individual service links */}
                <h3 className="text-base font-semibold pt-4 text-gray-500 dark:text-gray-500">Services</h3>
                {serviceLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg pl-4 opacity-70 hover:opacity-100 transition-opacity duration-200 text-gray-900 dark:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)} 
                    >
                        {link.label}
                    </Link>
                ))}
                
                {/* Mobile Social Icons */}
                <div className="flex space-x-6 pt-4 border-t border-gray-200 dark:border-gray-200">
                    <a href="https://www.facebook.com/profile.php?id=61566925568567" target="_blank" aria-label="Facebook"><Facebook className="h-6 w-6 text-blue-600" /></a>
                    <a href="https://www.instagram.com/avn.music1/" target="_blank" aria-label="Instagram"><Instagram className="h-6 w-6 text-blue-600" /></a>
                    <a href="https://www.linkedin.com/company/avn-productions1" target="_blank" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-blue-600" /></a>
                </div>

                {/* Mobile "Call Us" Button */}
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white mt-6">
                  <a href="tel:090607 93927">Call Us</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;