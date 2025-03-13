import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building, MapPin, BedSingle, Bath, Ruler, PercentCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";

export interface PropertyProps {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  roi: number;
  imageUrl: string;
  status: 'ready' | 'offplan';
  city?: string; // Added city property as optional
}

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { translate } = useLanguage();
  const { formatPrice, currentCurrency } = useCurrency();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/properties/${property.id}`} className="block relative">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={property.imageUrl} 
            alt={property.title} 
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          <Badge className={`absolute top-3 right-3 capitalize ${
            property.status === 'ready' ? 'bg-green-500' : 'bg-blue-500'
          }`}>
            {translate(property.status === 'ready' ? 'Ready' : 'Off-Plan')}
          </Badge>
        </div>
      </Link>
      
      <div className="p-5">
        <div className="mb-3">
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <MapPin size={14} className="mr-1" />
            {property.location}
          </div>
          <Link to={`/properties/${property.id}`} className="block">
            <h3 className="text-lg font-bold text-luxury-navy hover:text-luxury-gold transition-colors">
              {property.title}
            </h3>
          </Link>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-luxury-gold">
            <span className="text-xl font-bold">{formatPrice(property.price)}</span>
            <span className="text-xs ml-1 text-gray-500">
              {currentCurrency.code !== "AED" && `(${currentCurrency.code})`}
            </span>
          </div>
          <div className="flex items-center text-green-600">
            <PercentCircle size={18} className="mr-1" />
            <span className="font-medium">ROI: {property.roi}%</span>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="flex flex-col items-center text-sm text-gray-700">
            <Building size={16} className="mb-1 text-luxury-navy" />
            <span>{property.type}</span>
          </div>
          <div className="flex flex-col items-center text-sm text-gray-700">
            <BedSingle size={16} className="mb-1 text-luxury-navy" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex flex-col items-center text-sm text-gray-700">
            <Bath size={16} className="mb-1 text-luxury-navy" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex flex-col items-center text-sm text-gray-700">
            <Ruler size={16} className="mb-1 text-luxury-navy" />
            <span>{property.area} m²</span>
          </div>
        </div>
        
        <Button className="w-full bg-luxury-navy hover:bg-luxury-navy/90" asChild>
          <Link to={`/properties/${property.id}`}>
            {translate("View Details")}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
