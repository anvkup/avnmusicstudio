// src/app/services/recording/page.js

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DollarSign, Mic, Music, Headset, Film, CalendarCheck } from 'lucide-react'; // Icons

export const metadata = {
    title: "Vocal, Flute, & Live Guitar Recording Studio Ranchi | Expert Tracking",
    description: "Book professional vocal, flute, live guitar, and Indian percussion tracking services in Ranchi. Capture clear audio at AVN Music Studio.",
};

export default function RecordingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-brand-deep-space py-12">
            <div className="max-w-screen-lg mx-auto px-6 space-y-12">
                
                {/* --- HERO HEADER: Focus on Booking Ease --- */}
                <header className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-brand-white mb-4">
                        Hassle-Free Recording & Dubbing Session Booking 🎙️
                    </h1>
                    <p className="text-xl text-blue-400 dark:text-blue-300">
                        Capture the perfect take with easy scheduling and transparent rates.
                    </p>
                </header>

                {/* --- ATTRACTION 1: BOOKING PROCESS --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <CalendarCheck className="w-6 h-6 mr-3 text-green-500" />
                            Your 3-Step Session Booking
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-3 gap-8 text-center text-gray-600 dark:text-gray-100">
                        <div className="space-y-1">
                            <h3 className="text-4xl font-extrabold text-blue-400">1. Quote 💰</h3>
                            <h4 className="text-lg font-semibold">Inquire & Quote</h4>
                            <p className="text-sm">Submit your project details via our contact form for a personalized rate.</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-4xl font-extrabold text-blue-400">2. Confirm ✅</h3>
                            <h4 className="text-lg font-semibold">Schedule & Confirm</h4>
                            <p className="text-sm">We confirm the session time and date, securing your slot with a deposit.</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-4xl font-extrabold text-blue-400">3. Create 🎧</h3>
                            <h4 className="text-lg font-semibold">Create & Deliver</h4>
                            <p className="text-sm">Record your audio and receive the final tracks quickly.</p>
                        </div>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 2: DUAL SERVICE OFFERING (SPECIALIZED TRACKING) --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <Music className="w-6 h-6 mr-3 text-blue-500" />
                            Specialized Tracking Services
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-100">
                        
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Vocal & Flute Recording 🎤</h3>
                            <p>Capture the nuance and air of high-register vocals and woodwind instruments (like the *Flute*). Our specialized microphone placement ensures every detail is recorded without distortion.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Live Guitar & Stereo Tracking 🎸</h3>
                            <p>Achieve professional depth and width with <em>Live Guitar Stereo Recording</em>. We use multiple microphones and proper acoustic treatment to capture the instrument&apos;s full, realistic sound.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Indian Percussion & Instruments 🥁</h3>
                            <p>Expert recording for complex dynamics of <em>Tabla, Djembe, Harmonium</em>, and other Indian percussion and folk instruments, ensuring rhythmic clarity and true tone.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Expert Engineering & Editing 🔧</h3>
                            <p>Dedicated engineering support for every session, offering real-time guidance on performance and technical settings to guarantee a perfect foundation for your mix.</p>
                        </div>
                        
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 3: DUBBING & POST-PRODUCTION (Media Focus) --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <Film className="w-6 h-6 mr-3 text-blue-500" />
                            Post-Production & Dialogue (Media)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-100">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Dialogue Replacement (ADR) 🎥</h3>
                            <p>Seamlessly replace flawed location audio or re-record dialogue for foreign markets with perfect sync and acoustic matching for film and video projects.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Sound Effects & Foley 🦶</h3>
                            <p>We offer specialized <em>Foley</em> and custom sound effects recording to add realistic depth, texture, and immersion to your visual storytelling.</p>
                        </div>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 4: CALL TO ACTION (Main Funnel) --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal text-center p-8">
                    <CardTitle className="text-2xl font-bold dark:text-brand-white mb-4 flex items-center justify-center">
                        <DollarSign className="w-6 h-6 mr-3 text-blue-500" />
                        Book Your Studio Time
                    </CardTitle>
                    <p className="text-lg text-gray-600 dark:text-gray-100 mb-6">
                        Contact us today to discuss your project needs or book your vocal tracking session.
                    </p>
                    <a 
                        href="/contact"
                        className="inline-flex justify-center items-center py-3 px-6 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                        Check Availability Now
                    </a>
                </Card>
            </div>
        </div>
    );
}