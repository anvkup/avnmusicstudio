// src/app/blog/page.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import matter from 'gray-matter';

// Shadcn Components
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- Function to fetch posts from local file system ---
async function getPosts() {
  const postsPath = path.join(process.cwd(), 'content/blog');
  
  if (!fs.existsSync(postsPath)) {
    console.warn("Blog content directory not found at: ", postsPath);
    return [];
  }
  
  const postFiles = await glob('*.mdx', { cwd: postsPath }); 

  const posts = postFiles.map((filename) => {
    const filePath = path.join(postsPath, filename);
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    
    return {
      slug: filename.replace('.mdx', ''),
      frontmatter,
    };
  });

  return posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
}

export const metadata = {
    title: "AVN Music Studio Blog | Recording Tips for Artists in Ranchi",
    description: "The official blog for AVN Music Studio. Get recording, mixing, and music production tips from our expert engineers in Ranchi.",
};

// Helper function for safe date parsing
function formatDate(dateString) {
  try {
    const parsableDateString = dateString.replace(/-/g, '/');
    const dateObj = new Date(parsableDateString);
    
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric' 
    });
  } catch (error) {
    return "Invalid Date";
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-lg mx-auto px-6 py-16">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-brand-white mb-4">
            The AVN Studio Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
            Recording insights, production tips, and news from our Ranchi studio.
          </p>
        </header>

        {posts.length === 0 ? (
            <div className="text-center py-20">
                <p className="text-xl text-red-500">
                    No blog posts found. (Ensure MDX files are in the /content/blog directory).
                </p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                // --- 1. (FIX) The Card is the ONLY flex container ---
                <Card key={post.slug} className="bg-white dark:bg-brand-midnight border-brand-teal flex flex-col overflow-hidden">
                  
                  {/* --- Cover Image --- */}
                  {post.frontmatter.image && (
                    <div className="relative w-full h-48">
                      {/* --- 2. (FIX) Using modern 'fill' prop and 'style' for object-fit --- */}
                      <Image
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 ease-in-out hover:scale-105"
                      />
                    </div>
                  )}
                  
                  {/* --- 3. (FIX) Removed the extra wrapper div --- */}
                  {/* These components are now direct children of the 'flex-col' Card */}
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-brand-white text-2xl">
                      {post.frontmatter.title}
                    </CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400 pt-2">
                      {formatDate(post.frontmatter.date)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow"> {/* 'flex-grow' pushes the footer down */}
                    <p className="text-gray-600 dark:text-gray-100">{post.frontmatter.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-brand-white">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
        )}
      </div>
    </div>
  );
}