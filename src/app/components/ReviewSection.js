"use client"; 

import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

// Shadcn Components
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardFooter 
} from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"; 
import { Button } from "@/components/ui/button";

// --- Import data from the clean file ---
import { staticReviews } from "@/lib/reviewData"; 

// --- Custom Star Rating Component (No Change) ---
const RatingStars = ({ rating }) => {
    const fullStars = Math.round(rating);
    return (
        <div className="flex items-center space-x-0.5">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`h-4 w-4 fill-yellow-500 ${i < fullStars ? 'text-yellow-500' : 'text-gray-600'}`}
                />
            ))}
            <span className="ml-1 text-sm font-semibold text-gray-300 dark:text-gray-400">
                ({rating.toFixed(1)})
            </span>
        </div>
    );
};


export default function ReviewSection() {
    
    // Calculate total rating
    const totalRating = staticReviews.reduce((sum, review) => sum + review.rating, 0) / staticReviews.length;
    const totalReviews = staticReviews.length;

    return (
        <section className="py-16 bg-white dark:bg-white">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* --- HEADER --- */}
                <header className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-900 mb-2">
                        Client Testimonials
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-600">
                        Rated {totalRating.toFixed(1)} out of 5 stars based on {totalReviews} Reviews and 26 Ratings.
                    </p>
                </header>

                {/* --- CAROUSEL: Now the main container for both slides AND arrows --- */}
                <Carousel className="w-full">
                    <CarouselContent>
                        {staticReviews.map((review, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="bg-gray-50 dark:bg-gray-50 border border-gray-200 h-full flex flex-col justify-between">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <RatingStars rating={review.rating} />
                                            <MessageSquare className="h-4 w-4 text-blue-600" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-gray-700 dark:text-gray-700 italic text-sm min-h-[80px]">
                                        <p>&ldquo;{review.text}&rdquo;</p>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center text-xs text-gray-500">
                                        <div className="flex items-center">
                                            <span className="font-semibold text-gray-900 dark:text-gray-900">{review.author}</span>
                                        </div>
                                        <span>{review.time}</span>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* 1. FIXED: Arrows are INSIDE the Carousel context, but styled to appear below. */}
                    {/* 2. They now have class 'static' so they flow below the content instead of floating over it. */}
                    <div className="flex justify-center space-x-4 pt-6">
                        <CarouselPrevious 
                            className="relative static border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" 
                        />
                        <CarouselNext 
                            className="relative static border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" 
                        />
                    </div>
                </Carousel>
                
                {/* 3. The View All link is placed correctly below the carousel */}
                <div className="text-center mt-8">
                    <Button asChild variant="link" className="text-blue-600 hover:underline">
                        <a href="https://search.google.com/local/writereview?placeid=ChIJ-_K5RmEh9TkRmsOnefwPe5I" target="_blank" rel="noopener noreferrer">
                            View All Reviews on Google
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}