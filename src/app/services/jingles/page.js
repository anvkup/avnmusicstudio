// src/app/services/jingles/page.js

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Volume2, DollarSign, Users, Zap } from 'lucide-react'; // Icons

export const metadata = {
    title: "Commercial Jingles & Audio Ads in Ranchi | Brand Sound Design",
    description: "We create catchy jingles, voiceovers, and custom audio tracks for advertising and corporate needs in Ranchi. Royalty-free commercial music production.",
};

export default function JinglesPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-brand-deep-space py-12">
            <div className="max-w-screen-lg mx-auto px-6 space-y-12">
                
                {/* --- HERO HEADER: Target Keyword Focus --- */}
                <header className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-brand-white mb-4">
                        Catchy Commercial Jingles & Audio Advertising
                    </h1>
                    <p className="text-xl text-blue-400 dark:text-blue-300">
                        Sonic branding that makes your business memorable in the Ranchi market.
                    </p>
                </header>

                {/* --- SECTION 1: CORE SERVICES --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <Volume2 className="w-6 h-6 mr-3 text-blue-500" />
                            High-Impact Brand Audio
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-100">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Custom Jingle Production</h3>
                            <p>We compose original, **copyright-free** jingles designed to be instantly recognizable and effective across radio, TV, and digital platforms.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Voiceover & Audio Editing</h3>
                            <p>Need a professional voice for your ad? We offer talent sourcing, clean recording, precise audio timing, and final delivery compliant with broadcast standards.</p>
                        </div>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 2: COMMERCIAL FOCUS & DELIVERY --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <Users className="w-6 h-6 mr-3 text-blue-500" />
                            Efficiency for Your Campaign
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-600 dark:text-gray-100">
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>**Royalty-Free Guarantee:** All audio produced for commercials is 100% owned by your company upon final payment.</li>
                            <li>**Fast Turnaround:** Essential for rapid campaign deployment and tight marketing deadlines.</li>
                            <li>**Audio Post-Production:** Seamlessly integrate your audio into video, ensuring sound levels and synchronization are perfect.</li>
                        </ul>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 3: CALL TO ACTION --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal text-center p-8">
                    <CardTitle className="text-2xl font-bold dark:text-brand-white mb-4 flex items-center justify-center">
                        <DollarSign className="w-6 h-6 mr-3 text-blue-500" />
                        Launch Your Campaign Audio
                    </CardTitle>
                    <p className="text-lg text-gray-600 dark:text-gray-100 mb-6">
                        Let&apos;s discuss your brand&apos;s voice and create an impactful, unforgettable jingle today.
                    </p>
                    <a 
                        href="/contact"
                        className="inline-flex justify-center items-center py-3 px-6 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                        Start Audio Project
                    </a>
                </Card>
            </div>
        </div>
    );
}