// src/app/page.js

import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import ReviewSection from "./components/ReviewSection"; // Added Review Section
import Script from 'next/script';

// --- IMPORTANT: Ensure this file exists in src/app/schema.js ---
import { localBusinessSchema } from './schema'; 

export const metadata = {
    title: "AVN Music Studio | Best Recording Studio in Ranchi",
    description: "AVN Music Studio is the Best Recording Studio in Ranchi, Either you need Music Producer, Recording Studio Services or Jingles and Advetisments.",
};


export default function Home() {
  return (
    // <main> is transparent, allowing the global particle animation to show.
    <main>
      {/* --- 1. SEO: Structured Data (Schema Markup) --- */}
      <Script 
        id="local-business-schema" 
        type="application/ld+json" 
        // Render the imported object as a JSON string
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* --- 2. HERO SECTION (Animated Title) --- */}
      <Hero />
      
      {/* --- 3. REVIEWS/TESTIMONIALS --- */}
      <ReviewSection /> 
      
      {/* --- 4. SERVICE OVERVIEW CARDS --- */}
      <CardSection />
      
      {/* You can add more sections here, like a small CTA banner or a list of partners. */}

    </main>
  );
}