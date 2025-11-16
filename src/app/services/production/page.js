// src/app/services/production/page.js

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Brain, Zap, DollarSign, Headset, Music } from 'lucide-react'; // Icons

export const metadata = {
    // Keeping the original, optimized titles
    title: "Full Music Production Services in Ranchi | Song Arrangement & Beats",
    description: "End-to-end music production, from composition and arrangement to final mixdown. Collaborate with expert producers at AVN Music Studio to create your next hit.",
};

export default function ProductionPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-brand-deep-space py-12">
            <div className="max-w-screen-lg mx-auto px-6 space-y-12">
                
                {/* --- HERO HEADER: Focus on High-Value Services --- */}
                <header className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-brand-white mb-4">
                        Full-Service Music Production: From Idea to Master
                    </h1>
                    <p className="text-xl text-blue-400 dark:text-blue-300">
                        We handle every creative and technical detail to realize your unique sound.
                    </p>
                </header>

                {/* --- SECTION 1: CREATIVE DEVELOPMENT & ARRANGEMENT --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <Brain className="w-6 h-6 mr-3 text-blue-500" />
                            Creative Development & Arrangement
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-100">
                        {/* CARD 1: Composition & Beat Making */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Composition & Beat Making</h3>
                            <p>Our process begins with a consultation to understand your artistic vision and target audience. We specialize in building original compositions and professional beat production across all major genres.</p>
                        </div>
                        {/* CARD 2: Structural Arrangement */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Structural Arrangement & Flow</h3>
                            <p>A great song needs a compelling journey. We focus on structural arrangement, dynamics, and flow, ensuring your track maintains energy and lands with maximum commercial impact.</p>
                        </div>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 2: TECHNICAL MASTERY & DELIVERY --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <Zap className="w-6 h-6 mr-3 text-blue-500" />
                            Technical Mastery & Final Deliverables
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-100">
                        {/* CARD 3: Production Supervision */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Full Production Supervision</h3>
                            <p>We manage the entire project lifecycle, minimizing stress. This includes session planning, detailed MIDI/audio editing, and overseeing mixing/mastering phases for a polished product.</p>
                        </div>
                        {/* CARD 4: Final Deliverables */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Final Deliverables & Optimization</h3>
                            <p>Your finished master is delivered in multiple required formats (24-bit/48kHz WAV, MP3) with all necessary metadata correctly embedded for distribution and streaming platforms.</p>
                        </div>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 3: FINAL CALL TO ACTION --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal text-center p-8">
                    <CardTitle className="text-2xl font-bold dark:text-brand-white mb-4 flex items-center justify-center">
                        <DollarSign className="w-6 h-6 mr-3 text-blue-500" />
                        Start Your Production Journey
                    </CardTitle>
                    <p className="text-lg text-gray-600 dark:text-gray-100 mb-6">
                        Ready to bring your vision to life? Contact us today for a free consultation and project quote.
                    </p>
                    <a 
                        href="/contact"
                        className="inline-flex justify-center items-center py-3 px-6 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                        Book Your Free Consultation
                    </a>
                </Card>
            </div>
        </div>
    );
}