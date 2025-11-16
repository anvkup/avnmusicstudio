// 1. (FIX) REMOVED "use client"
import React from 'react';
import Link from 'next/link';
// 2. (FIX) REMOVED import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// 3. (FIX) This is now a fast Server Component
function Hero() {

    return (
        <section className="relative bg-transparent min-h-[70vh] flex items-center justify-center">
            <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">

                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-brand-white md:text-5xl lg:text-6xl">
                    Music Production, Mixing, Mastering & Audio Editing | Professional
                    <span className="text-red-500 inline-block mx-2">
                        Recording
                    </span>
                    Studio
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