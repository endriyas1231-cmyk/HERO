import React, { useState, useEffect } from 'react';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export default function BlurImage({ src, alt, className = '', containerClassName = '', ...props }: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset loaded state when src changes
    setIsLoaded(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-slate-200/50 ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        className={`${className} transition-all duration-700 ease-in-out ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105'
        }`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
