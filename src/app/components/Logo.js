// src/app/components/Logo.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// This component handles the rendering of the image and text title.
export default function Logo({ size = 'default' }) {
    // Determine size classes based on the prop
    const imageSize = size === 'default' ? 30 : 20;
    const textSize = size === 'default' ? 'text-xl' : 'text-lg';

    return (
        // The entire component is a Link to the homepage
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* Using the static image path and dynamic size */}
            <Image 
                src={"/image/a.png"} 
                width={imageSize} 
                height={imageSize} 
                alt='AVN Music Studio Logo' 
            />
            {/* Dynamic text size and color - white for navbar/footer */}
            <span className={`self-center font-semibold whitespace-nowrap text-white dark:text-white ${textSize}`}>
                AVN Music Studio
            </span>
        </Link>
    );
}