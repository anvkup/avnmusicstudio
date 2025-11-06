import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, Smartphone } from 'lucide-react';
import Logo from './Logo'; // Use the Logo component

function Footer() {
    return (
        <footer className="relative z-40 bg-white dark:bg-brand-midnight border-t border-gray-200 dark:border-brand-teal">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    
                    {/* --- COLUMN 1: LOGO & CONTACT INFO --- */}
                    <div className="mb-6 md:mb-0">
                        <Logo /> 
                        <p className="mt-2 text-gray-600 dark:text-gray-100">AB/8, Adarsh Nagar, Dhurwa, Ranchi, Jharkhand 834004</p>
                        <a href="tel:090607 93927" className="text-gray-600 dark:text-gray-100 hover:underline">090607 93927</a>
                    </div>

                    {/* --- COLUMN 2/3: LINKS --- */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        
                        {/* Navigate To column */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-brand-white">Navigate To</h2>
                            <ul className="text-gray-600 dark:text-gray-100 font-medium">
                                <li className="mb-4">
                                    <Link href="/" aria-current="page" className="hover:underline">Home</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/about" className="hover:underline">About</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/services" className="hover:underline">Services</Link>
                                </li>
                                {/* --- ADDED BLOG LINK --- */}
                                <li className="mb-4">
                                    <Link href="/blog" className="hover:underline">Blog</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/contact" className="hover:underline">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Follow Us column */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-brand-white">Follow us</h2>
                            <ul className="text-gray-600 dark:text-gray-100 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.facebook.com/profile.php?id=61566925568567" className="hover:underline ">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/avn.music1/" className="hover:underline">Instagram</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discordapp.com/users/avn.m1" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        
                        {/* --- LEGAL COLUMN (COMMENTED OUT) --- */}
                        {/* <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-brand-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-100 font-medium">
                                <li className="mb-4"><Link href="/pnp" className="hover:underline">Privacy Policy</Link></li>
                                <li><Link href="/tnc" className="hover:underline">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                        */}
                    </div>
                </div>
                
                {/* --- BOTTOM ROW: COPYRIGHT & SOCIAL ICONS --- */}
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-brand-teal lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-100">© 2024 <a href="https://avnmusic.shop/" className="hover:underline">AVN Music Studio</a>. All Rights Reserved.
                    </span>
                    
                    {/* Social Icon Buttons (Shadcn style) */}
                    <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
                        <Button variant="outline" size="icon" asChild>
                          <a href="https://www.facebook.com/profile.php?id=61566925568567" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook className="h-5 w-5" />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <a href="https://www.instagram.com/avn.music1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram className="h-5 w-5" />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <a href="https://www.linkedin.com/company/avn-productions1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <a href="https://wa.link/vcj8tv" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <Smartphone className="h-5 w-5" />
                          </a>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;