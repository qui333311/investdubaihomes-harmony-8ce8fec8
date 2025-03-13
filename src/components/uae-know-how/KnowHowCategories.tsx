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
      details: [
        translate("Golden Visa: 10-year residency for investors and professionals"),
        translate("Investor Visa: 3-year residency with property investment"),
        translate("Employment Visa: Sponsored by UAE companies"),
        translate("Tourist Visa: 30-90 days for visitors"),
        translate("Retirement Visa: 5-year visa for retirees")
      ],
      path: "/uae-know-how/visa"
    },
    {
      title: translate("Bank Account Opening"),
      icon: <Building className="h-10 w-10 text-luxury-gold" />,
      description: translate("Guidelines for opening personal and corporate bank accounts in the UAE."),
      details: [
        translate("Personal Account Requirements: Emirates ID, passport, visa"),
        translate("Corporate Account Documents: Trade license, ownership proof"),
        translate("International Bank Options: HSBC, Emirates NBD, RAK Bank"),
        translate("Minimum Balance Requirements: 3,000-5,000 AED"),
        translate("Online Banking Features: Digital transfers, bill payments")
      ],
      path: "/uae-know-how/banking"
    },
    // ... keep existing code (remaining categories)
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
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              <div className="hidden group-hover:block w-full">
                <div className="h-px bg-gray-200 my-3"></div>
                <ul className="text-left text-sm text-gray-600 space-y-2">
                  {category.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowHowCategories;
