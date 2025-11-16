// src/app/layout.js

// 1. (FIX) REMOVED "use client"
// 2. (FIX) REMOVED Framer Motion and usePathname imports
// 3. (FIX) REMOVED the 4 extra animation fonts

import { Inter } from "next/font/google"; // Only import Inter
import Script from "next/script";
import "./globals.css";
import dynamic from 'next/dynamic'; 

import { SpeedInsights } from "@vercel/speed-insights/next"; 

// --- Components ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// 4. (NEW) Import the wrapper we just created
import PageTransitionWrapper from "./components/PageTransitionWrapper";

// 5. (NEW) Dynamically load the particle background so it doesn't block FCP
const ParticleBackground = dynamic(
  () => import('./components/ParticleBackground'),
  { 
    ssr: false, // This component will only render on the client
    loading: () => <div className="absolute inset-0 z-0 bg-brand-deep-space" /> 
  } 
);

// --- FONT CONFIGURATION (Simplified) ---
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'] 
});
// 6. (FIX) All other 4 font definitions are GONE

// 7. (NEW) Metadata is now allowed in this Server Component
export const metadata = {
  title: "AVN Music Studio - Recording Studio in Ranchi",
  description: "AVN Music Studio is a professional music studio in Ranchi, offering recording, mixing, mastering, and production services.",
};

// --- The Layout Component (Now a Server Component) ---
export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="dark">
      {/* 8. (FIX) Body className is now simple and clean */}
      <body
        className={`${inter.variable} antialiased text-gray-900 dark:text-brand-white bg-white dark:bg-brand-deep-space relative`}
      >
        <noscript>
          <iframe
            src="https.googletagmanager.com/ns.html?id=GTM-M7PGTCHS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        <SpeedInsights />
        <ParticleBackground />

        <div className="relative z-10">
          <Navbar />
          
          {/* 9. (FIX) Wrap children in the NEW client component wrapper */}
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>

          <Footer />
        </div>

        {/* ... (Scripts) ... */}
        
      </body>
    </html>
  );
}