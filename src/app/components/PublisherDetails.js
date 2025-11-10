// src/app/components/PublisherDetails.js

import React from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils"; // For conditional classes

// Icons (assuming you have them or will add them)
import { Calendar, Clock } from 'lucide-react';

function PublisherDetails({ author, authorImage, authorTitle, date, readTime, className }) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric' 
  });

  return (
    <div className={cn("flex items-center gap-4 text-gray-600 dark:text-gray-300", className)}>
      {authorImage && (
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-teal">
          <Image
            src={authorImage}
            alt={author || "Author"}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      )}
      <div className="flex flex-col">
        {author && <p className="font-semibold text-gray-900 dark:text-brand-white">{author}</p>}
        {authorTitle && <p className="text-sm">{authorTitle}</p>}
        <div className="flex items-center text-sm gap-4 mt-1">
          {date && (
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {formattedDate}
            </span>
          )}
          {readTime && (
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {readTime} min read
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PublisherDetails;