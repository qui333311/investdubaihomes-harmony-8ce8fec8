
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PropertyCard from "@/components/PropertyCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import type { PropertyProps } from "@/components/PropertyCard";

// Property data
const properties: PropertyProps[] = [
  // Dubai Properties
  {
    id: "d1",
    title: "Luxury Apartment in Downtown Dubai",
    price: 2500000,
    location: "Downtown Dubai",
    bedrooms: 2,
    bathrooms: 2.5,
    area: 1250,
    imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    type: "Apartment",
    roi: 7.2,
    status: "ready",
    city: "Dubai"
  },
  {
    id: "d2",
    title: "Marina Penthouse with Sea View",
    price: 5800000,
    location: "Dubai Marina",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 2300,
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    type: "Penthouse",
    roi: 6.8,
    status: "ready",
    city: "Dubai"
  },
  {
    id: "d3",
    title: "Exclusive Villa on Palm Jumeirah",
    price: 12000000,
    location: "Palm Jumeirah",
    bedrooms: 5,
    bathrooms: 5.5,
    area: 5500,
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    type: "Villa",
    roi: 5.9,
    status: "ready",
    city: "Dubai"
  },
  {
    id: "d4",
    title: "Modern Apartment in Business Bay",
    price: 1800000,
    location: "Business Bay",
    bedrooms: 1,
    bathrooms: 1.5,
    area: 950,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    type: "Apartment",
    roi: 7.5,
    status: "ready",
    city: "Dubai"
  },
  
  // Ras Al Khaimah Properties
  {
    id: "r1",
    title: "Beachfront Villa in Al Marjan Island",
    price: 4200000,
    location: "Al Marjan Island",
    bedrooms: 4,
    bathrooms: 4.5,
    area: 3200,
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    type: "Villa",
    roi: 6.5,
    status: "ready",
    city: "Ras Al Khaimah"
  },
  {
    id: "r2",
    title: "Luxury Chalet with Mountain View",
    price: 2800000,
    location: "Jebel Jais",
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    type: "Villa",
    roi: 7.1,
    status: "ready",
    city: "Ras Al Khaimah"
  },
  {
    id: "r3",
    title: "Waterfront Apartment in Mina Al Arab",
    price: 1600000,
    location: "Mina Al Arab",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    type: "Apartment",
    roi: 7.8,
    status: "ready",
    city: "Ras Al Khaimah"
  },
  {
    id: "r4",
    title: "Golf View Villa in Al Hamra",
    price: 3500000,
    location: "Al Hamra Village",
    bedrooms: 4,
    bathrooms: 3.5,
    area: 2800,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    type: "Villa",
    roi: 6.9,
    status: "ready",
    city: "Ras Al Khaimah"
  }
];

const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState("dubai");
  const navigate = useNavigate();
  const { translate } = useLanguage();

  const handleViewProperty = (id: string) => {
    navigate(`/properties/${id}`);
  };

  const dubaiProperties = properties.filter(property => property.city === "Dubai");
  const rakProperties = properties.filter(property => property.city === "Ras Al Khaimah");

  return (
    <section className="section-padding bg-white">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{translate("Featured Properties")}</h2>
          <div className="gold-separator mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            {translate("Discover our handpicked selection of premium properties in Dubai and Ras Al Khaimah, offering exceptional investment potential and luxurious lifestyles.")}
          </p>
        </div>
        
        <Tabs defaultValue="dubai" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="dubai" className="text-base">{translate("Dubai")}</TabsTrigger>
            <TabsTrigger value="rak" className="text-base">{translate("Ras Al Khaimah")}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dubai" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dubaiProperties.map(property => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="rak" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rakProperties.map(property => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-10">
          <button 
            onClick={() => navigate("/properties")}
            className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-3 rounded-md transition-colors"
          >
            {translate("View All Properties")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;

