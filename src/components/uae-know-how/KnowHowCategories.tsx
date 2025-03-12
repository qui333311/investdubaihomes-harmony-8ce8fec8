
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Stamp, 
  Building, 
  GraduationCap, 
  School, 
  Globe, 
  Scale, 
  Wrench, 
  Paintbrush, 
  Calendar, 
  Home 
} from "lucide-react";

const KnowHowCategories = () => {
  const { translate } = useLanguage();
  const navigate = useNavigate();

  const categories = [
    {
      title: translate("Visa Information"),
      icon: <Stamp className="h-10 w-10 text-luxury-gold" />,
      description: translate("Learn about UAE visa types, requirements, and benefits for residents and investors."),
      path: "/uae-know-how/visa"
    },
    {
      title: translate("Bank Account Opening"),
      icon: <Building className="h-10 w-10 text-luxury-gold" />,
      description: translate("Guidelines for opening personal and corporate bank accounts in the UAE."),
      path: "/uae-know-how/banking"
    },
    {
      title: translate("Schools"),
      icon: <School className="h-10 w-10 text-luxury-gold" />,
      description: translate("Information about international and local schools in Dubai and Ras Al Khaimah."),
      path: "/uae-know-how/schools"
    },
    {
      title: translate("Universities"),
      icon: <GraduationCap className="h-10 w-10 text-luxury-gold" />,
      description: translate("Explore higher education options in the UAE including international campuses."),
      path: "/uae-know-how/universities"
    },
    {
      title: translate("Offshore Company Setup"),
      icon: <Globe className="h-10 w-10 text-luxury-gold" />,
      description: translate("Complete guide to establishing offshore companies in the UAE free zones."),
      path: "/uae-know-how/offshore"
    },
    {
      title: translate("Legal Assistance"),
      icon: <Scale className="h-10 w-10 text-luxury-gold" />,
      description: translate("Legal services for property purchase, company formation, and residency matters."),
      path: "/uae-know-how/legal"
    },
    {
      title: translate("Property Maintenance"),
      icon: <Wrench className="h-10 w-10 text-luxury-gold" />,
      description: translate("Maintenance services and solutions for property owners in the UAE."),
      path: "/uae-know-how/maintenance"
    },
    {
      title: translate("Interior Design"),
      icon: <Paintbrush className="h-10 w-10 text-luxury-gold" />,
      description: translate("Interior design and property upgrade services for investors and homeowners."),
      path: "/uae-know-how/interior-design"
    },
    {
      title: translate("Short Term Rentals"),
      icon: <Calendar className="h-10 w-10 text-luxury-gold" />,
      description: translate("Guide to short-term rental regulations, management, and potential returns."),
      path: "/uae-know-how/short-term-rentals"
    },
    {
      title: translate("Long Term Rentals"),
      icon: <Home className="h-10 w-10 text-luxury-gold" />,
      description: translate("Everything you need to know about long-term property rentals in the UAE."),
      path: "/uae-know-how/long-term-rentals"
    },
  ];

  const handleCategoryClick = (path: string) => {
    navigate(path);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="luxury-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{translate("UAE Know How Categories")}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {translate("Explore our comprehensive guides on various aspects of living, investing, and doing business in the UAE.")}
          </p>
          <div className="gold-separator mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              onClick={() => handleCategoryClick(category.path)}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <div className="mb-4">
                {category.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowHowCategories;
