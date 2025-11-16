// src/app/about/page.js

"use client" 

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveRight, Star, Mic, Heart } from 'lucide-react'; 
import { Separator } from "@/components/ui/separator";

export default function About() {
    // State for the tabs component
    const [activeTab, setActiveTab] = React.useState("services");
    
    const handleTabChange = (newValue) => {
        setActiveTab(newValue); 
    };

    const fadeVariants = {
        initial: { opacity: 0 }, 
        animate: { opacity: 1 },   
        exit: { opacity: 0 },    
    };

    return (
        <div className="min-h-screen">
            <div className="max-w-screen-xl mx-auto px-6 py-16">
                
                {/* Header Section */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-brand-white mb-4">
                        Welcome to AVN Music Studio
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
                        Your gateway to a world of creative sound and soul-stirring music.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    
                    {/* === LEFT COLUMN: Story & Mission & Artist === */}
                    <div className="lg:col-span-3 space-y-8">
                        
                        {/* 1. OUR STORY & MISSION */}
                        <Card className="bg-white dark:bg-brand-midnight border-brand-teal p-0">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-brand-white flex items-center">
                                    <MoveRight className="w-6 h-6 mr-3 text-blue-500" />
                                    Our Story & Mission
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-gray-600 dark:text-gray-100 leading-relaxed text-lg">
                                    <strong>AVN Music Studio</strong> was founded on a simple belief: that every artist deserves a professional, budget-friendly space to realize their sound. Starting as a small, passion-driven project focused solely on **audio excellence**, we have grown into a full-suite production house. We thrive on taking raw concepts and shaping them into polished, commercially competitive tracks, serving the vibrant creative community in Ranchi and beyond.
                                </p>
                                <p className="text-gray-600 dark:text-gray-100 leading-relaxed text-xl font-semibold">
                                    Our mission is clear: to be the reliable technical and creative partner you need. We focus on transparent communication and technical mastery so you can concentrate entirely on your art.
                                </p>
                            </CardContent>
                        </Card>

                        <Separator className="dark:bg-brand-teal" /> 
                        
                        {/* 2. MEET THE ARTIST */}
                        <Card className="bg-white dark:bg-brand-midnight border-brand-teal p-0">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-brand-white flex items-center">
                                    <Mic className="w-5 h-5 mr-3 text-blue-500" />
                                    Meet the Artist
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-100 text-lg">
                                    The studio is led by a dedicated <strong>music producer</strong> whose journey began over seven years ago with a single laptop and a powerful drive to create flawless sound. Our producer specializes in <strong>Hip Hop, Bollywood, and commercial audio</strong>, bringing a deep understanding of modern industry standards. This hands-on experience means every project benefits from a producer who not only understands the equipment but also the creative pressure and ambition behind each song.
                                </p>
                            </CardContent>
                        </Card>

                        <Separator className="dark:bg-brand-teal" /> 

                        <div className="text-center mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-brand-white">Let&apos;s Create Together</h2>
                            <p className="mt-2 text-lg text-gray-600 dark:text-gray-100">
                                Whether you&apos;re an artist looking for professional music production or a listener searching for something fresh and exciting, AVN Music Studio is here to deliver.
                            </p>
                        </div>
                    </div>
                    
                    {/* === RIGHT COLUMN: STACKED CARDS (What We Offer / Why Choose Us) === */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* CARD 1: What We Offer */}
                        <Card className="bg-white dark:bg-brand-midnight border-brand-teal p-0">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-brand-white flex items-center">
                                    <Star className="w-5 h-5 mr-2 text-blue-500" />
                                    What We Offer
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-100 space-y-3 pl-4">
                                    <li><h4 className="text-lg font-semibold text-blue-400 dark:text-blue-400">Original Compositions</h4><p className="text-sm text-gray-600 dark:text-gray-100">Creating fresh, original music...</p></li>
                                    <li><h4 className="text-lg font-semibold text-blue-400 dark:text-blue-400">Cover Songs</h4><p className="text-sm text-gray-600 dark:text-gray-100">Reimagining popular tracks...</p></li>
                                    <li><h4 className="text-lg font-semibold text-blue-400 dark:text-blue-400">Music Production</h4><p className="text-sm text-gray-600 dark:text-gray-100">Professional-grade production...</p></li>
                                </ul>
                            </CardContent>
                        </Card>
                        
                        {/* CARD 2: Why Choose Us */}
                        <Card className="bg-white dark:bg-brand-midnight border-brand-teal p-0">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-brand-white flex items-center">
                                    <Heart className="w-5 h-5 mr-2 text-blue-500" />
                                    Why Choose Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-100 space-y-3 pl-4">
                                    <li><h4 className="text-lg font-semibold text-blue-400 dark:text-blue-400">Passion-Driven</h4><p className="text-sm">Music is our passion...</p></li>
                                    <li><h4 className="text-lg font-semibold text-blue-400 dark:text-blue-400">Innovative Approach</h4><p className="text-sm">We blend traditional and modern elements...</p></li>
                                    <li><h4 className="text-lg font-semibold text-blue-400 dark:text-blue-400">High-Quality Sound</h4><p className="text-sm">Our production quality is top-notch...</p></li>
                                </ul>
                            </CardContent>
                        </Card>
                        
                    </div>
                </div>

                <div className="text-center mt-16 text-gray-600 dark:text-gray-100">
                    <p>Whether you&apos;re an artist looking for professional music production or a listener searching for something fresh and exciting, AVN Music Studio is here to deliver.</p>
                </div>
            </div>
        </div>
    );
}