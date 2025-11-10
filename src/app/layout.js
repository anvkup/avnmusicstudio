"use client"; 

// --- FONT IMPORTS ---
import { Inter, Montserrat, Lato, Roboto_Condensed, Titillium_Web } from "next/font/google"; 
import Script from "next/script";
import "./globals.css";
// --- FRAMEWORK IMPORTS ---
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation"; 

// --- VERCEL SPEED INSIGHTS ---
import { SpeedInsights } from "@vercel/speed-insights/next"; 

// --- Components ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";


// --- FONT CONFIGURATION ---
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'] 
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', 
  weight: '700',
  display: 'swap'
});
const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato', 
  weight: '400', 
  display: 'swap'
});
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed', 
  weight: '700',
  display: 'swap'
});
const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  variable: '--font-titillium-web', 
  weight: '900', 
  display: 'swap'
});


// --- The Layout Component ---
export default function RootLayout({ children }) {
  const pathname = usePathname(); 

  // --- 1. (NEW) This logic makes the Navbar non-sticky on blog pages ---
  const isSticky = !pathname.startsWith('/blog');

  // Page transition variants
  const fadeVariants = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${montserrat.variable} ${lato.variable} ${robotoCondensed.variable} ${titilliumWeb.variable} antialiased text-gray-900 dark:text-brand-white bg-white dark:bg-brand-deep-space relative`}
      >
        {/* --- GTM NOSCRIPT --- */}
        <noscript>
          <iframe
            src="https://googletagmanager.com/ns.html?id=GTM-M7PGTCHS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        {/* --- VERCEL SPEED INSIGHTS --- */}
        <SpeedInsights />

        {/* --- GLOBAL PARTICLE BACKGROUND --- */}
        <ParticleBackground />

        {/* --- MAIN CONTENT WRAPPER --- */}
        <div className="relative z-10">
          
          {/* --- 2. (NEW) Pass the 'isSticky' prop to the Navbar --- */}
          <Navbar isSticky={isSticky} />
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.main
              key={pathname} 
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25, type: "tween", delay: 0.1 }} 
            >
              {children}
            </motion.main>
          </AnimatePresence>

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
          src="httpsM://www.googletagmanager.com/gtag/js?id=AW-17202428540"
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