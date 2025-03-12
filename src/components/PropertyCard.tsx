
import { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLazyImage } from '@/utils/animations';

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured?: boolean;
}

const PropertyCard = ({ 
  id, 
  title, 
  price, 
  location, 
  bedrooms, 
  bathrooms, 
  area, 
  image,
  featured = false 
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { imgRef, imgClass } = useLazyImage();

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg bg-white border border-border/50 hover:shadow-luxe transition-all duration-500",
        featured ? "md:col-span-2" : "",
        isHovered ? "scale-[1.02]" : "scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#" className="block h-full">
        {/* Card Top - Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            ref={imgRef}
            src={image}
            alt={title}
            className={cn(
              imgClass,
              "w-full h-full object-cover transition-transform duration-700 ease-out-expo",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          
          {/* Favorite button */}
          <button
            onClick={toggleFavorite}
            className={cn(
              "absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white z-10 transition-all duration-300",
              isFavorite ? "text-red-500" : "text-gray-600"
            )}
          >
            <Heart 
              className={cn(
                "h-5 w-5 transition-all",
                isFavorite ? "fill-red-500" : "fill-transparent"
              )} 
            />
          </button>
          
          {featured && (
            <div className="absolute top-3 left-3 py-1 px-3 bg-primary/90 text-white text-xs font-medium rounded-full backdrop-blur-sm z-10">
              Featured
            </div>
          )}
        </div>
        
        {/* Card Bottom - Content */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-lg font-medium leading-tight">{title}</h3>
            <p className="font-serif text-lg font-medium text-primary">{price}</p>
          </div>
          
          <div className="flex items-center text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <p className="text-sm truncate">{location}</p>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center text-muted-foreground">
              <Bed className="h-4 w-4 mr-1" />
              <span className="text-sm">{bedrooms}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Bath className="h-4 w-4 mr-1" />
              <span className="text-sm">{bathrooms}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Square className="h-4 w-4 mr-1" />
              <span className="text-sm">{area} sqft</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PropertyCard;
