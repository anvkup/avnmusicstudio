"use client"; // Still a client component for the simple blink

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion"; // We still use motion
import { Button } from "@/components/ui/button";

function Hero() {
    
  // 1. (FIX) The fontCycle array is GONE

  return (
    <section className="relative bg-transparent min-h-[70vh] flex items-center justify-center"> 
      <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-brand-white md:text-5xl lg:text-6xl">
          Want 
          {/* 2. (FIX) Reverted to simple opacity blink */}
          <motion.span
            className="text-blue-400 inline-block mx-2"
            animate={{ opacity: [0.3, 1, 0.3] }} // Simple blink
            transition={{ 
                duration: 2.5, 
                ease: "easeInOut",
                repeat: Infinity, 
                repeatType: "loop"
            }}
          >
            Recording
          </motion.span>
          , Music Production and Audio related Services in Ranchi?
        </h1>
        
        <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">
          At <strong>AVN Music Studio</strong>, we specialize in delivering high-quality <strong>music production</strong>, <strong>mixing</strong>, and <strong>recording services in ranchi</strong> in <strong>Ranchi</strong>. Whether you&apos;re an artist looking to create a hit single, or a band needing to record an entire album, our team of professionals is here to bring your vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-y-0 space-y-4 sm:space-x-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-brand-white">
              <a href="tel:090607 93927">Call Us</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">About Us</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;