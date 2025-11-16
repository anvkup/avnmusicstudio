import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const serviceCards = [
  {
    title: 'Music Production',
    description: 'From the initial idea to a fully produced track. We handle arrangement, instrumentation, and sound design to bring your musical vision to life.',
    image: '/image/music-production.jpg',
  },
  {
    title: 'Mixing & Mastering',
    description: 'Get a professional, polished, and radio-ready sound. We balance every element and master your track for clarity, punch, and loudness.',
    image: '/image/audio-mixing.jpg', // Assumes this image is in your /public/image folder
  },
  {
    title: 'Recording & Dubbing',
    description: 'Capture crystal-clear vocals and instruments in our acoustically treated booth. We also provide high-quality dubbing services for film and media.',
    image: '/image/songwriting.jpg', // Using this image for recording
  },
  {
    title: 'Commercial Audio & Jingles',
    description: 'Need a catchy jingle for your brand or clean audio for your ad? We create memorable sound branding that makes your message stick.',
    image: '/image/ads.jpg', // Assumes this image is in your /public/image folder
  },
];


function CardSection() { 
    return (
        // This section "floats" on the particle background
        <section className="bg-white dark:bg-white py-16">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                
                {/* --- 2. New Heading for this section --- */}
                <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-900">
                        What We Do
                    </h2>
                    <p className="text-gray-600 sm:text-xl dark:text-gray-600">
                        We offer a complete suite of audio services to bring your projects from concept to completion.
                    </p>
                </div>
                
                {/* --- 3. Grid updated to 4 columns --- */}
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0">
                    
                    {/* --- 4. Mapping over your new service cards --- */}
                    {serviceCards.map((service) => (
                        <Card 
                            key={service.title} 
                            className="bg-gray-50 dark:bg-gray-50 border border-gray-200 flex flex-col justify-start overflow-hidden 
                                       transition-all duration-300 ease-in-out
                                       hover:shadow-2xl hover:border-blue-600/60 hover:-translate-y-1"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <CardHeader>
                                <CardTitle className="text-gray-900 dark:text-gray-900">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-600">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default CardSection;