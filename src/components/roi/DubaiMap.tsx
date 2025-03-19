
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Info, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DubaiMap = () => {
  const { translate } = useLanguage();
  const navigate = useNavigate();
  const [activeDistrict, setActiveDistrict] = useState<string | null>(null);
  
  // Dubai districts with their positions on the map and additional information
  const districts = [
    { 
      id: "dubai-marina",
      name: "Dubai Marina", 
      top: "55%", 
      left: "15%", 
      color: "bg-blue-500",
      description: "Upscale waterfront district with luxury high-rises, a vibrant nightlife, and a stunning marina.",
      averagePrice: "AED 1,400 - 1,800/sqft",
      rentalYield: "5-7%"
    },
    { 
      id: "palm-jumeirah",
      name: "Palm Jumeirah", 
      top: "45%", 
      left: "23%", 
      color: "bg-green-500",
      description: "Iconic man-made island with luxury villas, apartments, and world-class hotels.",
      averagePrice: "AED 2,000 - 3,500/sqft",
      rentalYield: "4-6%"
    },
    { 
      id: "downtown-dubai",
      name: "Downtown Dubai", 
      top: "40%", 
      left: "40%", 
      color: "bg-red-500",
      description: "Home to Burj Khalifa, Dubai Mall, and the Dubai Fountain, representing the heart of modern Dubai.",
      averagePrice: "AED 1,800 - 2,500/sqft",
      rentalYield: "5-6.5%"
    },
    { 
      id: "dubai-hills-estate",
      name: "Dubai Hills Estate", 
      top: "30%", 
      left: "50%", 
      color: "bg-yellow-500",
      description: "Premium community with a golf course, parks, and a mix of villas and apartments.",
      averagePrice: "AED 1,300 - 2,000/sqft",
      rentalYield: "5-7%"
    },
    { 
      id: "jbr",
      name: "Jumeirah Beach Residence", 
      top: "50%", 
      left: "13%", 
      color: "bg-purple-500",
      description: "Beachfront community with apartments, retail, and dining options along The Walk.",
      averagePrice: "AED 1,400 - 1,900/sqft",
      rentalYield: "6-8%"
    },
    { 
      id: "dubai-creek-harbour",
      name: "Dubai Creek Harbour", 
      top: "35%", 
      left: "65%", 
      color: "bg-pink-500",
      description: "Waterfront development with Dubai Creek Tower and stunning views of wildlife sanctuary.",
      averagePrice: "AED 1,400 - 1,900/sqft", 
      rentalYield: "6-7.5%"
    },
    { 
      id: "business-bay",
      name: "Business Bay", 
      top: "45%", 
      left: "45%", 
      color: "bg-orange-500",
      description: "Commercial and residential hub with waterfront properties and office spaces.",
      averagePrice: "AED 1,300 - 1,800/sqft",
      rentalYield: "6-8%"
    },
    { 
      id: "dubai-land",
      name: "Dubai Land", 
      top: "20%", 
      left: "60%", 
      color: "bg-teal-500",
      description: "Expansive area with various themed residential communities and entertainment destinations.",
      averagePrice: "AED 800 - 1,300/sqft",
      rentalYield: "7-9%"
    },
  ];

  const handleDistrictClick = (districtId: string) => {
    navigate(`/area/${districtId}`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">{translate("Dubai Investment Map")}</h3>
      <div className="relative w-full" style={{ aspectRatio: "16/9", maxHeight: "500px" }}>
        {/* Base map image */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Dubai_satellietfoto.jpg/1200px-Dubai_satellietfoto.jpg" 
          alt="Dubai Map" 
          className="w-full h-full object-cover rounded-lg"
        />
        
        {/* Map overlay with gradient */}
        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
        
        {/* District markers */}
        <TooltipProvider>
          {districts.map((district, index) => (
            <div 
              key={index}
              className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: district.top, left: district.left }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleDistrictClick(district.id)}
                    onMouseEnter={() => setActiveDistrict(district.id)}
                    onMouseLeave={() => setActiveDistrict(null)}
                    className={`group relative flex items-center justify-center transition-all duration-300 ease-in-out`}
                  >
                    <MapPin 
                      className={`${
                        activeDistrict === district.id ? 'text-luxury-gold scale-150' : 'text-white'
                      } h-6 w-6 transition-all duration-300 drop-shadow-lg`} 
                      fill={activeDistrict === district.id ? "#D4AF37" : district.color.replace('bg-', '')}
                    />
                    <span 
                      className={`absolute -bottom-8 bg-white/90 px-2 py-1 rounded-md text-xs font-medium shadow-md whitespace-nowrap transition-all duration-300 ${
                        activeDistrict === district.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      {translate(district.name)}
                    </span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-luxury-navy text-white p-4 max-w-xs">
                  <div>
                    <h4 className="font-bold mb-1 text-luxury-gold flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {translate(district.name)}
                    </h4>
                    <p className="text-sm mb-2">{translate(district.description)}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                      <div>
                        <span className="text-luxury-gold/80">Average Price:</span>
                        <p>{district.averagePrice}</p>
                      </div>
                      <div>
                        <span className="text-luxury-gold/80">Rental Yield:</span>
                        <p className="text-green-400">{district.rentalYield}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-3 bg-transparent border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-navy flex items-center justify-center gap-1"
                      onClick={() => handleDistrictClick(district.id)}
                    >
                      <ExternalLink className="h-3 w-3" /> {translate("View Developments")}
                    </Button>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </TooltipProvider>
        
        {/* Map info button */}
        <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-md shadow-md max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <Info className="h-4 w-4 text-luxury-gold" />
            <h4 className="text-sm font-semibold">{translate("Interactive Map Guide")}</h4>
          </div>
          <p className="text-xs text-gray-600">
            {translate("Hover over pins to see location names. Click on any pin to explore property developments in that area.")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DubaiMap;
