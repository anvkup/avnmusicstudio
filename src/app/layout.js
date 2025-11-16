// src/app/layout.js

// 1. (FIX) REMOVED "use client"
import { Inter } from "next/font/google"; // 2. (FIX) Only import Inter
import Script from "next/script";
import "./globals.css";
import dynamic from 'next/dynamic'; // For lazy loading

import { SpeedInsights } from "@vercel/speed-insights/next"; 

// --- Components ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// 3. (NEW) Import the wrapper
import PageTransitionWrapper from "./components/PageTransitionWrapper";

// 4. (NEW) Dynamically load the particle background
const ParticleBackground = dynamic(
  () => import('./components/ParticleBackground'),
  { 
    ssr: false, // Don't run this on the server
    loading: () => <div className="absolute inset-0 z-0 bg-brand-deep-space" /> 
  } 
);

// --- FONT CONFIGURATION (Simplified) ---
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'] 
});
// 5. (FIX) All other 4 font definitions are GONE

// 6. (NEW) Metadata is now allowed in this Server Component
export const metadata = {
  title: "AVN Music Studio - Recording Studio in Ranchi",
  description: "AVN Music Studio is a professional music studio in Ranchi, offering recording, mixing, mastering, and production services.",
};

// --- The Layout Component (Now a Server Component) ---
export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="dark">
      {/* 7. (FIX) Body className is now simple and clean */}
      <body
        className={`${inter.variable} antialiased text-gray-900 dark:text-brand-white bg-white dark:bg-brand-deep-space relative`}
      >
        
        
        <SpeedInsights />
        <ParticleBackground />

        <div className="relative z-10">
          <Navbar />
          
          {/* 8. (FIX) Wrap children in the NEW client component wrapper */}
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>

          <Footer />
        </div>

        {/* --- SCRIPTS --- */}
       
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17202428540');
          `}
        </Script>
        
      </body>
    </html>
  );
}