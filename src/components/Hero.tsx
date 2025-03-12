
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MousePointer } from 'lucide-react';
import { useParallax } from '@/utils/animations';

const Hero = () => {
  const parallaxRef = useParallax(0.2);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Image preload effect
  useEffect(() => {
    setLoaded(true);
    
    // Auto-play video if exists
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video or Image with Parallax */}
      <div 
        ref={parallaxRef} 
        className="absolute inset-0 w-full h-full z-0"
      >
        {/* Fallback image if video doesn't load */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000')",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease"
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4 md:px-6 flex flex-col justify-end pb-20 sm:justify-center sm:pb-0">
        <div className="max-w-4xl mx-auto md:mx-0 text-center sm:text-left">
          <div 
            className={`stagger-animation ${loaded ? 'active' : ''}`}
          >
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded text-sm font-medium mb-4 opacity-0 animate-slideUp">Premium Dubai Real Estate</span>
            <h1 className="text-display text-white mb-6 opacity-0 animate-slideUp">
              <span className="block">Exclusive Properties</span>
              <span className="block text-primary">In The Heart Of Dubai</span>
            </h1>
            <p className="text-body text-white/90 mb-8 max-w-2xl opacity-0 animate-slideUp">
              Discover premium real estate opportunities in the world's most luxurious city. Invest in your future with properties that offer unparalleled returns.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start opacity-0 animate-slideUp">
              <button 
                onClick={scrollToProperties}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all hover-lift"
              >
                Explore Properties
              </button>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-md hover:bg-white/20 transition-all hover-lift"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center opacity-0 animate-fadeIn" style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
        <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
        <ChevronDown className="h-5 w-5 text-white/70 animate-bounce" />
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 py-4 z-20 hidden lg:block opacity-0 animate-slideUp" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <StatItem value="250+" label="Premium Properties" />
            <div className="h-12 w-px bg-white/20"></div>
            <StatItem value="15+" label="Years of Experience" />
            <div className="h-12 w-px bg-white/20"></div>
            <StatItem value="$2B+" label="Property Value Sold" />
            <div className="h-12 w-px bg-white/20"></div>
            <StatItem value="100%" label="Client Satisfaction" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="font-serif text-2xl text-white">{value}</p>
    <p className="text-sm text-white/70">{label}</p>
  </div>
);

export default Hero;
