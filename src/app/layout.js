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
        <noscript>
          <iframe
            src="https://googletagmanager.com/ns.html?id=GTM-M7PGTCHS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
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
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7PGTCHS');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17202428540"
          strategy="afterInteractive"
        />
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