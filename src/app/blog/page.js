// src/app/blog/page.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- IMPORTANT: Import the MongoDB client ---
import clientPromise from '@/lib/mongodb'; 

// Shadcn Components
import { 
  Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- Function to fetch all posts from MongoDB ---
async function getPosts() {
  try {
    const client = await clientPromise;
    const db = client.db('avnmusicstudiodb'); // Use the correct DB name
    const collection = db.collection('blogposts'); // Use the correct collection name
    
    // Fetch all posts and sort by the date field descending
    const posts = await collection
      .find({})
      .sort({ date: -1 }) 
      .toArray();

    // Map the database documents to the required frontmatter structure
    return posts.map(post => ({
        slug: post.slug,
        frontmatter: {
            title: post.title,
            description: post.description,
            // Convert the date string for display purposes
            date: post.date, 
            image: post.image,
            author: post.author || 'AVN Music Studio',
            authorTitle: post.authorTitle || 'Content Team',
        }
    }));

  } catch (e) {
    console.error("MongoDB Blog List Fetch Error:", e);
    // CRITICAL: Return an empty array on failure instead of crashing
    return []; 
  }
}

export const metadata = {
    title: "AVN Music Studio Blog | Recording Tips for Artists in Ranchi",
    description: "The official blog for AVN Music Studio. Get recording, mixing, and music production tips from our expert engineers in Ranchi.",
};

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

        {/* --- Display Error Message if no posts are found --- */}
        {posts.length === 0 ? (
            <div className="text-center py-20">
                <p className="text-xl text-red-500">
                    No blog posts found. Please ensure your MongoDB cluster is running and connected.
                </p>
            </div>
        ) : (
            /* Blog Post Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Card key={post.slug} className="bg-white dark:bg-brand-midnight border-brand-teal flex flex-col justify-between overflow-hidden">
                  
                  {/* Cover Image */}
                  {post.frontmatter.image && (
                    <div className="relative w-full h-48">
                      <Image
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        width={500} 
                        height={200}
                        className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                      />
                    </div>
                  )}
                  
                  <div className="flex flex-col justify-between flex-grow">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-brand-white text-2xl">
                        {post.frontmatter.title}
                      </CardTitle>
                      <CardDescription className="text-gray-500 dark:text-gray-400 pt-2">
                        {/* Display date from database */}
                        {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                          year: 'numeric', month: 'long', day: 'numeric' 
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-100">{post.frontmatter.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-brand-white">
                        <Link href={`/blog/${post.slug}`}>Read More</Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
        )}
      </div>
    </div>
  );
}