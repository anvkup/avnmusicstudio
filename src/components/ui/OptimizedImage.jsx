'use client';

import Image from 'next/image';

/**
 * Wrapper component for optimized image loading
 * Handles responsive sizing, priority, and blur placeholders
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes,
  className = '',
  blurDataURL,
  objectFit = 'cover',
  ...props
}) {
  const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={defaultSizes}
      className={className}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
      style={{ objectFit }}
      {...props}
    />
  );
}