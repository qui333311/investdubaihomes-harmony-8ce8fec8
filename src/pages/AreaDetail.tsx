
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AreaDevelopments from "@/components/uae-know-how/AreaDevelopments";
import { useLanguage } from "@/contexts/LanguageContext";
import PropertyYearlyCosts from "@/components/uae-know-how/PropertyYearlyCosts";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AreaDetail = () => {
  const { translate } = useLanguage();
  const { areaId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const handleGoBack = () => {
    navigate("/uae-know-how");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="luxury-container py-8">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={handleGoBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {translate("Back to UAE Know How")}
          </Button>
          
          {areaId === "category" ? (
            <div>
              <h1 className="text-3xl font-bold mb-4">{translate("Category Details")}</h1>
              <p className="text-gray-600 mb-8">
                Detailed information about this category will be available soon.
              </p>
            </div>
          ) : (
            <>
              <AreaDevelopments />
              <PropertyYearlyCosts />
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AreaDetail;
