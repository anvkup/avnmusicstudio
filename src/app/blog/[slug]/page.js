// src/app/blog/[slug]/page.js

import React from 'react';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import clientPromise from '@/lib/mongodb'; // Import MongoDB client

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"; 
import { Separator } from "@/components/ui/separator";
import PublisherDetails from "@/app/components/PublisherDetails";


// --- Function to fetch the current post from MongoDB (PRIORITY) ---
async function getPost(slug) {
  try {
    const client = await clientPromise; 
    const db = client.db('avnmusicstudiodb'); 
    const collection = db.collection('blogposts');
    
    // 1. ATTEMPT TO FETCH FROM MONGODB ATLAS
    const post = await collection.findOne({ slug: slug });
    
    if (post) {
      // 2. SUCCESS: Return the data from MongoDB
      return {
        frontmatter: {
          title: post.title,
          description: post.description,
          date: post.date.toISOString(),
          image: post.image,
          author: post.author || 'AVN Music Studio',
          authorTitle: post.authorTitle || 'Content Team',
          authorImage: post.authorImage || '/blog/avn-logo-publisher.png',
        },
        content: post.content, // The raw MDX content string
        readTime: Math.ceil(post.content.split(/\s+/).length / 200),
      };
    }
    
    // 3. FAILURE: If not found in DB, return null (or fall back to file system)
    return null;

  } catch (e) {
    console.error("MongoDB Single Post Fetch Failed:", e);
    // If DB connection fails, we return null, letting the app handle the failure gracefully.
    return null; 
  }
}

// --- Function to fetch other posts for sidebar (Also prioritized from DB) ---
async function getOtherPosts(currentSlug) {
  try {
    const client = await clientPromise; 
    const db = client.db('avnmusicstudiodb');
    const collection = db.collection('blogposts');
    
    const posts = await collection
      .find({ slug: { $ne: currentSlug } })
      .sort({ date: -1 })
      .limit(5)
      .toArray();

    return posts.map(post => ({
        slug: post.slug,
        frontmatter: {
            title: post.title,
            description: post.description,
            date: post.date.toISOString(),
        }
    }));
  } catch (e) {
    console.error("MongoDB Other Posts Fetch Failed:", e);
    return [];
  }
}

// --- Generate Metadata (Still requires a local file fallback if the DB is empty at build time) ---
// This function needs to be a hybrid if you are using static exports.
// For now, we keep it simple since Next.js can infer the title from the component if this fails.

// --- The New Page Component (No structural change needed here) ---
export default async function PostPage({ params: { slug } }) {
  const post = await getPost(slug);
  const otherPosts = await getOtherPosts(slug);

  if (!post) {
    // If post is null, it means it wasn't found in the DB.
    return <div className="text-center py-20">Post not found. Please ensure the post was successfully migrated to MongoDB Atlas.</div>;
  }
  return (
    <div className="min-h-screen bg-white dark:bg-brand-deep-space py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* --- Breadcrumbs (Use post.frontmatter.title) --- */}
        {/* ... (Your breadcrumb component structure) ... */}

        {/* --- Main Content Area (Layout structure remains the same) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- LEFT COLUMN: Title, Publisher, Article --- */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-brand-white mb-6 leading-tight">
              {post.frontmatter.title}
            </h1>

            {/* --- Publisher Section --- */}
            <PublisherDetails
              author={post.frontmatter.author}
              authorImage={post.frontmatter.authorImage}
              authorTitle={post.frontmatter.authorTitle}
              date={post.frontmatter.date}
              readTime={post.readTime}
              className="mb-8"
            />
            
            <Separator className="dark:bg-brand-teal mb-10" />

            {/* --- Article Content --- */}
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote source={post.content} />
            </article>
          </div>

          {/* --- RIGHT COLUMN: Sidebar --- */}
          <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-28 h-fit">
            
            {/* Search Bar Card */}
            <Card className="bg-white dark:bg-brand-midnight border-brand-teal">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-brand-white text-xl">Search Blog</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10 bg-white dark:bg-brand-deep-space dark:border-brand-teal"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Other Posts Card */}
            <Card className="bg-white dark:bg-brand-midnight border-brand-teal">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-brand-white text-xl">Other Posts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {otherPosts.map(p => (
                  <div key={p.slug}>
                    <Link 
                      href={`/blog/${p.slug}`} 
                      className="block font-medium text-blue-500 dark:text-blue-400 hover:underline text-lg"
                    >
                      {p.frontmatter.title}
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(p.frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric', month: 'short', day: 'numeric' 
                      })}
                    </p>
                    <Separator className="dark:bg-brand-teal mt-4" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}