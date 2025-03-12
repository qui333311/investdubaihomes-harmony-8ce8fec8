
import { useEffect, useRef, useState } from 'react';

// Hook to reveal elements when they enter viewport
export function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// Parallax scrolling effect
export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offsetTop = element.getBoundingClientRect().top + scrollTop;
      const parallaxOffset = (scrollTop - offsetTop) * speed;
      
      if (element.classList.contains('parallax-bg')) {
        element.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return ref;
}

// Image lazy loading with fade in effect
export function useLazyImage() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    if (img.complete) {
      setIsLoaded(true);
    } else {
      img.onload = () => {
        setIsLoaded(true);
      };
    }
  }, []);

  return { imgRef, isLoaded, imgClass: `image-fade-in ${isLoaded ? 'loaded' : ''}` };
}

// Staggered animation for multiple elements
export function useStaggerAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { containerRef, isVisible, containerClass: `stagger-animation ${isVisible ? 'active' : ''}` };
}
