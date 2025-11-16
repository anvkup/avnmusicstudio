// src/app/services/mixing/page.js

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// Updated icons to include BadgeCheck for the new section
import { SlidersHorizontal, DollarSign, Target, Zap, Clock, TrendingUp, BadgeCheck } from 'lucide-react'; 

export const metadata = {
    title: "Professional Mixing & Mastering Services in Ranchi | Online Audio Engineers",
    description: "Achieve a radio-ready sound with professional mixing and mastering services in Ranchi. Get clarity, punch, and balance for your music projects with fast, affordable turnaround.",
};

export default function MixingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-brand-deep-space py-12">
            <div className="max-w-screen-lg mx-auto px-6 space-y-12">
                
                {/* --- HERO HEADER --- */}
                <header className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-brand-white mb-4">
                        Affordable Online Mixing & Mastering Services
                    </h1>
                    <p className="text-xl text-blue-400 dark:text-blue-300">
                        Get world-class, radio-ready audio quality delivered straight to your inbox. Serving Ranchi and all of India.
                    </p>
                </header>

                {/* --- SECTION 1: CORE DIFFERENCE --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <SlidersHorizontal className="w-6 h-6 mr-3 text-blue-500" />
                            Mixing vs. Mastering: What Your Track Needs
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-100">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Mixing (The Balance)</h3>
                            <p>This is the process of balancing all individual tracks (vocals, drums, bass, synths) within your song. We apply EQ, compression, panning, and effects to ensure clarity, separation, and depth, preparing it for the final stage.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Mastering (The Polish)</h3>
                            <p>This is the final quality control and optimization step. We apply limiting, stereo widening, and final EQ adjustments to achieve commercial loudness (LUFS) and technical compliance across all streaming platforms.</p>
                        </div>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 2: WHAT DO YOU GET (NEW HIGH-VALUE SECTION) --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <BadgeCheck className="w-6 h-6 mr-3 text-green-500" />
                            Exclusive Value Included
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-100">
                        
                        {/* 1. UNLIMITED REVISIONS */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Unlimited Revisions</h3>
                            <p>Request as many changes as you want (no extra charge) because we want you to get exactly what you want.</p>
                        </div>
                        
                        {/* 2. INSTRUMENTAL & ACAPELLA */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Instrumental & Acapella Files</h3>
                            <p>When we finish your project, we&apos;ll also send you the Instrumental and Acapella of your song in WAV format, ready for distribution or performance.</p>
                        </div>
                        
                        {/* 3. PITCH CORRECTION */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Precision Pitch Correction</h3>
                            <p>We&apos;ll make sure that your vocals and instruments are correctly pitched and moving together for a cohesive and professional sound.</p>
                        </div>

                        {/* 4. FREE MASTERING */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">FREE Mastering Included</h3>
                            <p>You don&apos;t need to spend separately for Mastering as it is already included in our Mixing Packages, saving you time and money.</p>
                        </div>

                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 3: WHY CHOOSE AVN --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <Zap className="w-6 h-6 mr-3 text-blue-500" />
                            Why Choose Our Online Service?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-3 gap-8 text-gray-600 dark:text-gray-100">
                         <div className="flex flex-col items-center text-center">
                            <Clock className="w-8 h-8 mb-2 text-blue-400" />
                            <h3 className="text-xl font-semibold mb-1 text-blue-400">Fast Turnaround</h3>
                            <p className="text-sm">Quick delivery times for both mixing and mastering projects, ensuring your music gets heard sooner.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <DollarSign className="w-8 h-8 mb-2 text-blue-400" />
                            <h3 className="text-xl font-semibold mb-1 text-blue-400">Affordable Rates</h3>
                            <p className="text-sm">World-class quality without the heavy studio overhead, making professional audio accessible to every artist.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <TrendingUp className="w-8 h-8 mb-2 text-blue-400" />
                            <h3 className="text-xl font-semibold mb-1 text-blue-400">Mastering Guarantee</h3>
                            <p className="text-sm">We guarantee optimization for all major platforms (Spotify, Apple Music) with correct LUFS/dB standards.</p>
                        </div>
                    </CardContent>
                </Card>


                <Separator className="dark:bg-brand-teal" />


                {/* --- FINAL CTA --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal text-center p-8">
                    <CardTitle className="text-2xl font-bold dark:text-brand-white mb-4 flex items-center justify-center">
                        <Target className="w-6 h-6 mr-3 text-blue-500" />
                        Ready for Your Final Mix?
                    </CardTitle>
                    <p className="text-lg text-gray-600 dark:text-gray-100 mb-6">
                        Upload your stems today and experience the AVN difference. We&apos;ll handle the polish so your music can shine.
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex justify-center items-center py-3 px-6 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                        Get a Free Quote Now
                    </a>
                </Card>
            </div>
        </div>
    );
}