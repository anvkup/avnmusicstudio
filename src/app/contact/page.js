"use client" 

import React from 'react'
// 1. Make sure EnquiryForm is imported from the correct path
import EnquiryForm from '../components/EnquiryForm' 
import { Facebook, Instagram, Linkedin } from 'lucide-react';

// 2. Import all the shadcn components needed for this layout
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button'; 
import { Separator } from "@/components/ui/separator";

export default function Contact() {
    return (
        // This page is transparent
        <div className="min-h-screen">
            {/* 3. We use a wider 'max-w-screen-xl' container for a 2-column layout */}
            <div className="max-w-screen-xl mx-auto p-6 space-y-8"> 
                
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-brand-white">Contact Us</h1>
                <p className="text-center text-gray-600 dark:text-gray-100 max-w-2xl mx-auto">
                    We’d love to hear from you! Whether you have questions, feedback, or inquiries about our services, please feel free to reach out.
                </p>
                
                {/* --- 4. MAIN LAYOUT GRID: Form (2/3) + Info (1/3) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* === COLUMN 1: ENQUIRY FORM & FAQ === */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* 5. The form is now wrapped in a Card */}
                        <Card className="bg-white dark:bg-brand-midnight border-brand-teal p-0">
                            <CardHeader>
                                <CardTitle className="text-gray-900 dark:text-brand-white text-xl">Send Us a Message</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0">
                                <EnquiryForm />
                            </CardContent>
                        </Card>
                        
                        {/* FAQ Card */}
                        <Card className="bg-white dark:bg-brand-midnight border-brand-teal">
                            <CardHeader>
                                <CardTitle className="text-gray-900 dark:text-brand-white text-center">Frequently Asked Questions</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-600 dark:text-gray-100">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-gray-900 dark:text-brand-white hover:no-underline">What services do you offer?</AccordionTrigger>
                                        <AccordionContent>We provide music production, original compositions, covers, and audio engineering services tailored to your needs.</AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="text-gray-900 dark:text-brand-white hover:no-underline">Can I collaborate with AVN Music Studio?</AccordionTrigger>
                                        <AccordionContent>Absolutely! We are always open to collaborations. Please reach out to us through the contact form or email.</AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className="text-gray-900 dark:text-brand-white hover:no-underline">How can I book you for an event?</AccordionTrigger>
                                        <AccordionContent>You can inquire about bookings by contacting us via the form above or emailing us directly.</AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>

                    {/* === COLUMN 2: SIDEBAR INFO === */}
                    <div className="lg:col-span-1 space-y-8">
                        
                        {/* Contact Info Card */}
                        <Card className="bg-white dark:bg-brand-midnight border-brand-teal text-center">
                            <CardHeader>
                                <CardTitle className="text-gray-900 dark:text-brand-white">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-gray-600 dark:text-gray-100">
                                <p><strong>Email:</strong> <a href="mailto:contact@avnmusic.site" className="text-blue-500">info@avnmusic.site</a></p>
                                <p><strong>Phone:</strong> 93927</p>
                                <p>
                                    <strong>Address:</strong><br />
                                    AVN Music Studio<br />
                                    AB/8, Adarsh Nagar, Dhurwa,<br />
                                    Ranchi, 834004<br />
                                    India
                                </p>
                            </CardContent>
                        </Card>

                        <Separator className="dark:bg-brand-teal" /> 

                        {/* Find Us (Map) Card */}
                        <Card className="bg-white dark:bg-brand-midnight border-brand-teal text-center">
                            <CardHeader>
                                <CardTitle className="text-gray-900 dark:text-brand-white">Find Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <iframe 
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=AVN%20Music%20Studio%2C%20Adarsh%20Nagar%2C%20Dhurwa%2C%20Ranchi%2C%20Jharkhand%2C%20India&maptype=roadmap" 
                                    width="100%" height="250" 
                                    className="rounded-lg border-none dark:filter dark:invert-90 dark:hue-rotate-200 dark:brightness-75"
                                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
                                >
                                </iframe>
                            </CardContent>
                        </Card>
                        
                        <Separator className="dark:bg-brand-teal" /> 

                        {/* Follow Us Card */}
                        <Card className="bg-white dark:bg-brand-midnight border-brand-teal text-center">
                            <CardHeader>
                                <CardTitle className="text-gray-900 dark:text-brand-white">Follow Us</CardTitle>
                            </CardHeader>
                            <CardContent className="flex justify-center space-x-4">
                                <Button variant="outline" size="icon" asChild><a href="https.www.facebook.com/profile.php?id=61566925568567" target="_blank" aria-label="Facebook"><Facebook className="h-5 w-5" /></a></Button>
                                <Button variant="outline" size="icon" asChild><a href="https.www.instagram.com/avn.music1/" target="_blank" aria-label="Instagram"><Instagram className="h-5 w-5" /></a></Button>
                                <Button variant="outline" size="icon" asChild><a href="https.www.linkedin.com/company/avn-productions1" target="_blank" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a></Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                
                <div className="text-center pt-8 text-gray-600 dark:text-gray-100">
                    <p>Thank you for your interest in AVN Music Studio! We look forward to connecting with you.</p>
                </div>
            </div>
        </div>
    )
}