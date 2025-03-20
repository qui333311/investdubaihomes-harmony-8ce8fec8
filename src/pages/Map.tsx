
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Info, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Map = () => {
  const { translate } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  
  // Sample location data - in a real app, this would come from your database
  const locations: LocationData[] = [
    {
      id: "dubai-marina",
      name: "Dubai Marina",
      description: "A vibrant waterfront community with luxury high-rises and a stunning marina.",
      coordinates: { top: "55%", left: "15%" },
      rentalYield: "5-7%",
      priceRange: "$500-1,500/sqft",
      type: "Apartments, Penthouses",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: "palm-jumeirah",
      name: "Palm Jumeirah",
      description: "Iconic man-made island with luxury villas, apartments, and hotels.",
      coordinates: { top: "45%", left: "23%" },
      rentalYield: "4-6%",
      priceRange: "$800-3,000/sqft",
      type: "Villas, Townhouses, Apartments",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: "downtown-dubai",
      name: "Downtown Dubai",
      description: "Home to Burj Khalifa and Dubai Mall, representing the heart of modern Dubai.",
      coordinates: { top: "40%", left: "40%" },
      rentalYield: "5-6.5%",
      priceRange: "$600-1,200/sqft",
      type: "Apartments, Penthouses",
      image: "https://images.unsplash.com/photo-1583947581924-a46a1c3dcfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: "dubai-hills",
      name: "Dubai Hills",
      description: "Premium community with a golf course, parks, and luxury homes.",
      coordinates: { top: "30%", left: "50%" },
      rentalYield: "5-7%",
      priceRange: "$400-900/sqft",
      type: "Villas, Townhouses, Apartments",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: "jbr",
      name: "Jumeirah Beach Residence",
      description: "Beachfront community with apartments and retail along The Walk.",
      coordinates: { top: "50%", left: "13%" },
      rentalYield: "6-8%",
      priceRange: "$500-1,000/sqft",
      type: "Apartments",
      image: "https://images.unsplash.com/photo-1596435163709-b374d09f0d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: "business-bay",
      name: "Business Bay",
      description: "Commercial and residential hub with waterfront properties.",
      coordinates: { top: "45%", left: "45%" },
      rentalYield: "6-8%",
      priceRange: "$400-900/sqft",
      type: "Apartments, Office Spaces",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: "dubai-creek-harbour",
      name: "Dubai Creek Harbour",
      description: "Waterfront development with views of wildlife sanctuary.",
      coordinates: { top: "35%", left: "65%" },
      rentalYield: "6-7.5%",
      priceRange: "$450-950/sqft",
      type: "Apartments, Penthouses",
      image: "https://images.unsplash.com/photo-1534477435673-a76aea060edf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="section-padding pt-28 md:pt-32">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                {translate("Investment Locations Map")}
              </h1>
              <div className="gold-separator mx-auto" />
              <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
                {translate("Explore prime investment areas in Dubai and Ras Al Khaimah. Click on any location to learn more about investment opportunities and market performance.")}
              </p>
            </div>
            
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl border border-gray-200" style={{ height: "70vh", minHeight: "500px" }}>
              {/* Map background image */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Dubai_satellietfoto.jpg/1200px-Dubai_satellietfoto.jpg" 
                alt="Dubai Map" 
                className="w-full h-full object-cover"
              />
              
              {/* Map overlay with gradient */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Location markers */}
              {locations.map((location) => (
                <AlertDialog key={location.id}>
                  <AlertDialogTrigger asChild>
                    <button
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 group"
                      style={{ top: location.coordinates.top, left: location.coordinates.left }}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className="relative">
                        <MapPin 
                          className="h-8 w-8 text-white drop-shadow-lg group-hover:text-luxury-gold group-hover:scale-125 transition-all duration-300" 
                          fill="#D4AF37"
                        />
                        <div className="bg-white/90 px-2 py-1 rounded text-xs font-medium shadow-md absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {translate(location.name)}
                        </div>
                      </div>
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="max-w-md">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-xl font-bold text-luxury-navy">
                        {translate(location.name)}
                      </AlertDialogTitle>
                      <AlertDialogDescription asChild>
                        <div>
                          <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
                            <img 
                              src={location.image} 
                              alt={location.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-4">
                            {translate(location.description)}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                            <div>
                              <h4 className="font-semibold text-luxury-navy">
                                {translate("Rental Yield")}
                              </h4>
                              <p className="text-green-600">{location.rentalYield}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-luxury-navy">
                                {translate("Price Range")}
                              </h4>
                              <p>{location.priceRange}</p>
                            </div>
                            <div className="col-span-2">
                              <h4 className="font-semibold text-luxury-navy">
                                {translate("Property Types")}
                              </h4>
                              <p>{translate(location.type)}</p>
                            </div>
                          </div>
                          
                          <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white" asChild>
                            <Link to={`/area/${location.id}`}>
                              {translate("View Properties")} <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                  </AlertDialogContent>
                </AlertDialog>
              ))}
              
              {/* Map info box */}
              <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-md shadow-md max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-luxury-gold" />
                  <h4 className="text-sm font-semibold">{translate("Interactive Map Guide")}</h4>
                </div>
                <p className="text-xs text-gray-600">
                  {translate("Hover over pins to see location names. Click on any pin to explore investment opportunities in that area.")}
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-3">{translate("Explore Our Featured Areas")}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                {translate("Discover more about these prime investment locations and their unique opportunities.")}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {locations.slice(0, 4).map((location) => (
                  <Link 
                    key={location.id} 
                    to={`/area/${location.id}`}
                    className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                  >
                    <h3 className="font-semibold text-luxury-navy group-hover:text-luxury-gold transition-colors">
                      {translate(location.name)}
                    </h3>
                    <p className="text-sm text-green-600 font-medium mt-1">
                      {location.rentalYield} {translate("Yield")}
                    </p>
                  </Link>
                ))}
              </div>
              
              <Button asChild className="mt-8 bg-luxury-navy hover:bg-luxury-navy/90">
                <Link to="/properties">
                  {translate("View All Properties")} <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Type definition for location data
interface LocationData {
  id: string;
  name: string;
  description: string;
  coordinates: {
    top: string;
    left: string;
  };
  rentalYield: string;
  priceRange: string;
  type: string;
  image: string;
}

export default Map;
