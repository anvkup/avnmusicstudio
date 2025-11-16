// src/app/services/page.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { MoveRight } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


// --- Service Data (Used for the Directory Cards) ---
const serviceDirectory = [
  {
    title: 'Full Music Production',
    description: 'Full-scope arrangement, instrumentation, sound design, and engineering expertise to build your raw idea into a professional, finished track.',
    image: '/image/music-production.jpg',
    href: '/services/production' 
  },
  {
    title: 'Mixing & Mastering',
    description: 'The final, essential stage of production: balancing every element and mastering the track for clarity, punch, and commercial loudness.',
    image: '/image/audio-mixing.jpg',
    href: '/services/mixing' 
  },
  {
    title: 'Recording & Dubbing',
    description: 'Capture vocals and instruments with pristine clarity. Dedicated services for music artists and film dialogue replacement (ADR).',
    image: '/image/songwriting.jpg', 
    href: '/services/recording' 
  },
  {
    title: 'Commercial Audio & Jingles',
    description: 'Custom sonic branding, voiceovers, and memorable jingle creation tailored for advertising and media campaigns in the local market.',
    image: '/image/ads.jpg',
    href: '/services/jingles' 
  },
];


export default function Services() {
    return (
        <div className="min-h-screen bg-white dark:bg-white py-12">
            <div className="max-w-screen-xl mx-auto px-6 space-y-12">
                
                {/* --- HEADER: Service Overview --- */}
                <header className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-900 mb-4">
                        Explore Our Full Range of Services
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-600 max-w-3xl mx-auto">
                        We offer specialized packages for every stage of audio production—from tracking vocals to final commercial mastering.
                    </p>
                </header>

                {/* --- SERVICE DIRECTORY GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {serviceDirectory.map((service, index) => (
                        
                        <Link key={index} href={service.href}>
                            <Card 
                                // Make the card look clickable with cursor-pointer and shadow
                                className="bg-gray-50 dark:bg-gray-50 border-gray-200 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-blue-500 cursor-pointer"
                            >
                                <div className="relative overflow-hidden h-48">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30" /> 
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-900">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="text-gray-600 dark:text-gray-600 text-sm">
                                    <p>{service.description}</p>
                                </CardContent>

                                {/* 2. FIX: Use Button just for visual styling, removing the redundant <a> wrapper */}
                                <CardFooter>
                                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                                        <span>
                                            Learn More <MoveRight className="w-4 h-4 ml-2 inline-block" />
                                        </span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* --- FINAL CTA --- */}
                <footer className="text-center pt-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-brand-white">Ready to start your project?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                        Contact us directly for a custom quote in minutes.
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex justify-center items-center py-3 px-6 text-lg font-semibold rounded-full bg-brand-teal hover:bg-brand-teal/80 text-brand-white transition-colors"
                    >
                        Get a Quick Quote
                    </a>
                </footer>
            </div>
        </div>
    );
}