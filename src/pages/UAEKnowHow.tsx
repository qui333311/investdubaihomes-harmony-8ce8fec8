
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAndIntro from "@/components/uae-know-how/HeroAndIntro";
import LocationTabs from "@/components/uae-know-how/LocationTabs";
import FactsAndFigures from "@/components/uae-know-how/FactsAndFigures";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Building, Plus } from "lucide-react";

const UAEKnowHow = () => {
  const { translate } = useLanguage();
  const navigate = useNavigate();
  
  const handlePropertyUpload = () => {
    navigate("/admin/property-upload");
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroAndIntro />
        
        <section className="section-padding bg-white">
          <div className="luxury-container mb-8">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-4">{translate("Key Investment Locations")}</h2>
                <p className="text-gray-600 max-w-3xl">
                  {translate("Explore the most promising investment areas in Dubai and Ras Al Khaimah. Each location offers unique advantages for property investors.")}
                </p>
              </div>
              
              <Button 
                onClick={handlePropertyUpload} 
                className="bg-luxury-navy hover:bg-luxury-navy/90"
              >
                <Building className="mr-2 h-4 w-4" />
                <span>{translate("Admin: Upload Property")}</span>
              </Button>
            </div>
            <div className="gold-separator mt-4" />
          </div>
          
          <LocationTabs />
        </section>
        
        <FactsAndFigures />
      </main>
      
      <Footer />
    </div>
  );
};

export default UAEKnowHow;
