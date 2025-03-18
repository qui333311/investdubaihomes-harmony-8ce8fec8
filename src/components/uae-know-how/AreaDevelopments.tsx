
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Building, HomeIcon, Hotel, MapPin } from "lucide-react";

// Development data by area
const developmentData: Record<string, any> = {
  "dubai-marina": {
    title: "Dubai Marina",
    description: "Dubai Marina is an affluent residential neighborhood known for its skyscrapers and marina lifestyle.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    developments: [
      {
        name: "Marina Towers",
        type: "Residential",
        developer: "Emaar Properties",
        icon: Building,
        description: "Luxury high-rise residential towers with marina views",
        units: "350+ apartments",
        priceRange: "AED 1.2M - 7M",
        completionDate: "2010"
      },
      {
        name: "Marina Promenade",
        type: "Mixed-use",
        developer: "Emaar Properties",
        icon: Building2,
        description: "Waterfront apartments with retail spaces on the ground floor",
        units: "200+ apartments",
        priceRange: "AED 1.5M - 5M",
        completionDate: "2008"
      },
      {
        name: "Marina Heights",
        type: "Residential",
        developer: "DAMAC Properties",
        icon: Building,
        description: "Premium residences with full marina views",
        units: "280+ apartments",
        priceRange: "AED 1.3M - 6M",
        completionDate: "2009"
      },
      {
        name: "Marina Quays",
        type: "Residential",
        developer: "Dubai Properties",
        icon: Building,
        description: "Waterfront apartments with direct marina access",
        units: "150+ apartments",
        priceRange: "AED 1.7M - 8M",
        completionDate: "2011"
      }
    ]
  },
  "palm-jumeirah": {
    title: "Palm Jumeirah",
    description: "Palm Jumeirah is a man-made island shaped like a palm tree and known for its luxury resorts and residences.",
    image: "https://images.unsplash.com/photo-1578974721235-91bea6f095c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    developments: [
      {
        name: "Signature Villas",
        type: "Residential",
        developer: "Nakheel",
        icon: HomeIcon,
        description: "Beachfront signature villas with private beach access",
        units: "100+ villas",
        priceRange: "AED 15M - 70M",
        completionDate: "2007"
      },
      {
        name: "Marina Residences",
        type: "Residential",
        developer: "Nakheel",
        icon: Building,
        description: "Luxury apartments overlooking the marina",
        units: "200+ apartments",
        priceRange: "AED 3M - 12M",
        completionDate: "2009"
      },
      {
        name: "Atlantis Residences",
        type: "Hotel & Residential",
        developer: "Kerzner International",
        icon: Hotel,
        description: "Premium branded residences attached to the Atlantis Hotel",
        units: "180+ apartments",
        priceRange: "AED 5M - 25M",
        completionDate: "2016"
      },
      {
        name: "FIVE Palm Jumeirah",
        type: "Hotel & Residential",
        developer: "FIVE Holdings",
        icon: Hotel,
        description: "Luxury hotel with residential units",
        units: "250+ units",
        priceRange: "AED 2.5M - 15M",
        completionDate: "2017"
      }
    ]
  },
  "downtown-dubai": {
    title: "Downtown Dubai",
    description: "Downtown Dubai is a central district known for the Burj Khalifa, Dubai Mall, and Dubai Fountain.",
    image: "https://images.unsplash.com/photo-1546412414-e1885e51cfa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    developments: [
      {
        name: "Burj Khalifa",
        type: "Mixed-use",
        developer: "Emaar Properties",
        icon: Building2,
        description: "Iconic skyscraper with residential, commercial, and hotel units",
        units: "900+ apartments",
        priceRange: "AED 2M - 30M",
        completionDate: "2010"
      },
      {
        name: "The Address Downtown",
        type: "Hotel & Residential",
        developer: "Emaar Properties",
        icon: Hotel,
        description: "Luxury hotel and serviced residences in prime Downtown location",
        units: "200+ units",
        priceRange: "AED 2.5M - 15M",
        completionDate: "2008"
      },
      {
        name: "Boulevard Point",
        type: "Residential",
        developer: "Emaar Properties",
        icon: Building,
        description: "Modern residential tower overlooking Dubai Fountain",
        units: "300+ apartments",
        priceRange: "AED 1.8M - 10M",
        completionDate: "2015"
      },
      {
        name: "Opera Grand",
        type: "Residential",
        developer: "Emaar Properties",
        icon: Building,
        description: "Luxury residences next to Dubai Opera",
        units: "250+ apartments",
        priceRange: "AED 2.2M - 12M",
        completionDate: "2019"
      }
    ]
  },
  // Add more areas and their developments here
  "jumeirah-beach-residence": {
    title: "Jumeirah Beach Residence (JBR)",
    description: "JBR is a beachfront community with luxury apartments, retail outlets, and dining options.",
    image: "https://images.unsplash.com/photo-1572383672419-ab35444a5d0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    developments: [
      {
        name: "Sadaf Towers",
        type: "Residential",
        developer: "Dubai Properties",
        icon: Building,
        description: "Beachfront residential complex with direct beach access",
        units: "400+ apartments",
        priceRange: "AED 1.5M - 6M",
        completionDate: "2007"
      },
      {
        name: "Murjan Towers",
        type: "Residential",
        developer: "Dubai Properties",
        icon: Building,
        description: "Beachfront residential complex with retail options",
        units: "350+ apartments",
        priceRange: "AED 1.4M - 5.5M",
        completionDate: "2007"
      }
    ]
  },
  "al-marjan-island": {
    title: "Al Marjan Island",
    description: "Al Marjan Island is a man-made archipelago in Ras Al Khaimah offering waterfront living.",
    image: "https://images.unsplash.com/photo-1580223530027-c6a0d516b523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    developments: [
      {
        name: "Pacific by Select Group",
        type: "Residential",
        developer: "Select Group",
        icon: Building,
        description: "Luxury waterfront apartments with panoramic views",
        units: "200+ apartments",
        priceRange: "AED 800K - 3M",
        completionDate: "2016"
      },
      {
        name: "Gateway Residences",
        type: "Residential",
        developer: "RAK Properties",
        icon: Building,
        description: "Modern apartments with water views",
        units: "150+ apartments",
        priceRange: "AED 750K - 2.5M",
        completionDate: "2018"
      }
    ]
  }
};

const AreaDevelopments = () => {
  const { translate } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const areaData = developmentData[id || ""] || null;
  
  if (!areaData) {
    return (
      <div className="section-padding bg-white">
        <div className="luxury-container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{translate("Area Not Found")}</h2>
            <Button onClick={() => navigate("/uae-know-how")} className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {translate("Back to Areas")}
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="section-padding bg-white">
      <div className="luxury-container">
        <Button 
          onClick={() => navigate("/uae-know-how")} 
          variant="outline" 
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {translate("Back to Areas")}
        </Button>
        
        <div className="relative h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
          <img 
            src={areaData.image} 
            alt={areaData.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-overlay flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {translate(areaData.title)}
            </h1>
          </div>
        </div>
        
        <div className="mb-10">
          <p className="text-lg text-gray-700 mb-6">
            {translate(areaData.description)}
          </p>
          
          <h2 className="text-2xl font-bold mb-4">{translate("Key Developments")}</h2>
          <div className="gold-separator mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areaData.developments.map((dev: any, index: number) => {
              const DevIcon = dev.icon || Building;
              
              return (
                <Card key={index} className="h-full">
                  <CardHeader className="bg-gray-50 rounded-t-lg">
                    <div className="flex items-center">
                      <DevIcon className="h-5 w-5 mr-2 text-luxury-navy" />
                      <CardTitle className="text-xl">{dev.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        {translate(dev.description)}
                      </p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-semibold">{translate("Type")}:</span>
                          <span className="text-gray-600">{dev.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">{translate("Developer")}:</span>
                          <span className="text-gray-600">{dev.developer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">{translate("Units")}:</span>
                          <span className="text-gray-600">{dev.units}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">{translate("Price Range")}:</span>
                          <span className="text-gray-600">{dev.priceRange}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">{translate("Completion")}:</span>
                          <span className="text-gray-600">{dev.completionDate}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaDevelopments;
