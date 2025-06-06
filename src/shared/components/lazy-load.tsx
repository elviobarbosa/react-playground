import { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
}

const LazyImage = ({
  src,
  alt,
  className = "",
  placeholderSrc = "/elo.svg",
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (observedImg) {
            observer.unobserve(observedImg);
          }
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.01,
      }
    );
    const observedImg = imgRef.current;
    if (observedImg) {
      observer.observe(observedImg);
    }

    return () => {
      if (observedImg) {
        observer.unobserve(observedImg);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <img
        ref={imgRef}
        src={isVisible ? src : placeholderSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default LazyImage;
