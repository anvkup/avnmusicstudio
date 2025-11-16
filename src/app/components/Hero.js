import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

function Hero() {

    return (
        <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Background image with WebP support */}
            <picture className="absolute inset-0 w-full h-full">
              <source srcSet="/image/studiobg.webp" type="image/webp" />
              <img 
                src="/image/ads.jpg" 
                alt="Studio background" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
            
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 z-[5]" />
            
            <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">

                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl drop-shadow-lg">
                    Music Production, Mixing, Mastering & Audio Editing | Professional
                    <span className="text-blue-600 inline-block mx-2">
                        Recording
                    </span>
                    Studio
                </h1>

                <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48 drop-shadow-md">
                    At <strong>AVN Music Studio</strong>, we specialize in delivering high-quality <strong>music production</strong>, <strong>mixing</strong>, and <strong>recording services</strong> in <strong>Ranchi</strong>. Whether you&apos;re an artist looking to create a hit single, or a band needing to record an entire album, our team of professionals is here to bring your vision to life.
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-center sm:space-y-0 space-y-4 sm:space-x-4">
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold drop-shadow-lg">
                        <a href="tel:09060793927">Call Us</a>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="text-gray-900 border-gray-900 hover:bg-gray-100 font-bold drop-shadow-lg">
                        <Link href="/about">About Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Hero;