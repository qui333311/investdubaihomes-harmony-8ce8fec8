
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PropertyFilter from "@/components/PropertyFilter";
import PropertyCard, { PropertyProps } from "@/components/PropertyCard";
import { useLanguage } from "@/contexts/LanguageContext";
import CurrencySelector from "@/components/CurrencySelector";

const Properties = () => {
  const { translate } = useLanguage();
  
  // Filter state
  const [activeFilters, setActiveFilters] = useState({
    priceRange: [500000, 10000000],
    location: "",
    propertyType: "",
    bedrooms: "",
    status: "",
    minRoi: 5,
  });

  // Sample properties data
  const allProperties: PropertyProps[] = [
    {
      id: "prop1",
      title: "Luxury Apartment in Dubai Marina",
      location: "Dubai Marina",
      price: 2500000,
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2.5,
      area: 1500,
      roi: 7.2,
      imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "ready",
    },
    {
      id: "prop2",
      title: "Beachfront Villa on Palm Jumeirah",
      location: "Palm Jumeirah",
      price: 15000000,
      type: "Villa",
      bedrooms: 5,
      bathrooms: 6,
      area: 7000,
      roi: 5.8,
      imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "ready",
    },
    {
      id: "prop3",
      title: "Off-Plan Apartment in Downtown Dubai",
      location: "Downtown Dubai",
      price: 1800000,
      type: "Apartment",
      bedrooms: 1,
      bathrooms: 1.5,
      area: 950,
      roi: 9.1,
      imageUrl: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "offplan",
    },
    {
      id: "prop4",
      title: "Penthouse in Downtown Dubai",
      location: "Downtown Dubai",
      price: 7800000,
      type: "Penthouse",
      bedrooms: 3,
      bathrooms: 4,
      area: 3200,
      roi: 6.5,
      imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "ready",
    },
    {
      id: "prop5",
      title: "Off-Plan Villa in Dubai Hills",
      location: "Dubai Hills",
      price: 5500000,
      type: "Villa",
      bedrooms: 4,
      bathrooms: 4.5,
      area: 3800,
      roi: 7.8,
      imageUrl: "https://images.unsplash.com/photo-1604014056470-831f2f1bcd4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "offplan",
    },
    {
      id: "prop6",
      title: "Luxury Villa in Ras Al Khaimah",
      location: "Ras Al Khaimah",
      price: 3900000,
      type: "Villa",
      bedrooms: 4,
      bathrooms: 5,
      area: 4200,
      roi: 8.2,
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "ready",
    },
  ];

  // Filter properties based on activeFilters
  const filteredProperties = allProperties.filter((property) => {
    const withinPriceRange =
      property.price >= activeFilters.priceRange[0] &&
      property.price <= activeFilters.priceRange[1];
      
    const matchesLocation = activeFilters.location
      ? activeFilters.location === "all" 
        ? true
        : property.location.toLowerCase().includes(activeFilters.location.toLowerCase())
      : true;
      
    const matchesType = activeFilters.propertyType
      ? activeFilters.propertyType === "all"
        ? true
        : property.type.toLowerCase() === activeFilters.propertyType.toLowerCase()
      : true;
      
    const matchesBedrooms = activeFilters.bedrooms
      ? activeFilters.bedrooms === "any"
        ? true
        : activeFilters.bedrooms === "4+"
          ? property.bedrooms >= 4
          : property.bedrooms === parseInt(activeFilters.bedrooms)
      : true;
      
    const matchesStatus = activeFilters.status
      ? activeFilters.status === "all"
        ? true
        : property.status === activeFilters.status
      : true;
      
    const matchesRoi = property.roi >= activeFilters.minRoi;
    
    return (
      withinPriceRange &&
      matchesLocation &&
      matchesType &&
      matchesBedrooms &&
      matchesStatus &&
      matchesRoi
    );
  });

  const handleFilter = (filters: any) => {
    setActiveFilters(filters);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title={translate("Explore Our Properties")}
          subtitle={translate("Find your perfect investment")}
          videoUrl="https://player.vimeo.com/external/367892685.sd.mp4?s=a376c6a45d95db6143fc54c0d225565bcd684eba&profile_id=164&oauth2_token_id=57447761"
          backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          showCta={false}
        />
        
        <section className="section-padding">
          <div className="luxury-container">
            <div className="flex justify-between items-center mb-6">
              <PropertyFilter onFilter={handleFilter} />
            </div>
            
            <div className="mt-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {filteredProperties.length} {translate("Properties Found")}
                </h2>
                <CurrencySelector />
              </div>
              
              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{translate("No properties found")}</h3>
                  <p className="text-gray-600">
                    {translate("Try adjusting your filters")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;
