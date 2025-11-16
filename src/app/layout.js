// src/app/layout.js

import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next"; 
import { defaultMetadata, generateOrganizationSchema } from '@/lib/metadata';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransitionWrapper from "./components/PageTransitionWrapper";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'],
  display: 'swap',
  preload: true
});

export const metadata = defaultMetadata;
export default function RootLayout({ children }) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} bg-white text-gray-900`}>
        
        <SpeedInsights />

        <div className="relative z-10 bg-white">
          <Navbar />
          
          {/* Wrap children in the page transition wrapper */}
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