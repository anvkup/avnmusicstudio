// src/app/blog/[slug]/page.js

import React from 'react';
// 1. (REVERT) Import file system modules
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"; 
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Components
import PublisherDetails from "@/app/components/PublisherDetails";

// --- Utility function to calculate read time ---
function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime}`;
}

// --- 2. (REVERT) This function gets the single post from the FILE SYSTEM ---
async function getPost(slug) {
  const postsPath = path.join(process.cwd(), 'content/blog');
  const filePath = path.join(postsPath, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const readTime = calculateReadTime(content);

  return {
    frontmatter: {
      ...frontmatter,
      author: frontmatter.author || 'AVN Music Studio',
      authorTitle: frontmatter.authorTitle || 'Content Team',
      authorImage: frontmatter.authorImage || '/blog/avn-logo-publisher.png',
    },
    content,
    readTime,
  };
}

// --- 3. (REVERT) This function gets other posts from the FILE SYSTEM ---
async function getOtherPosts(currentSlug) {
  const postsPath = path.join(process.cwd(), 'content/blog');
  const postFiles = await glob('*.mdx', { cwd: postsPath });

  const posts = postFiles.map((filename) => {
    const filePath = path.join(postsPath, filename);
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    const slug = filename.replace('.mdx', '');
    
    return { slug, frontmatter };
  });

  return posts
    .filter(post => post.slug !== currentSlug)
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    .slice(0, 5);
}

// --- Generate Metadata (Title) for SEO ---
export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug); // Uses the file system getPost
  if (!post) return { title: 'Post not found' };
  
  return {
    title: `${post.frontmatter.title} | AVN Studio Blog`,
    description: post.frontmatter.description,
  };
}

// --- 4. (REVERT) Generate all blog post URLs from the FILE SYSTEM ---
export async function generateStaticParams() {
  const postsPath = path.join(process.cwd(), 'content/blog');
  const postFiles = await glob('*.mdx', { cwd: postsPath });

  return postFiles.map(filename => ({
    slug: filename.replace('.mdx', ''),
  }));
}

// --- The Page Component ---
export default async function PostPage({ params: { slug } }) {
  const post = await getPost(slug);
  const otherPosts = await getOtherPosts(slug);

  if (!post) {
    return <div className="text-center py-20 text-red-500">Post not found. (Check /content/blog folder)</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-brand-deep-space py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* --- Breadcrumbs --- */}
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.frontmatter.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* --- Main Content Area --- */}
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

          {/* --- RIGHT COLUMN: Featured Image + Sidebar --- */}
          <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-28 h-fit">
            
            {/* Featured Image */}
            {post.frontmatter.image && (
              <div className="relative w-full h-72 rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-lg"
                />
              </div>
            )}

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