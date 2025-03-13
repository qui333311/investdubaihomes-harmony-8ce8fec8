
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
    {
      title: translate("Schools in UAE"),
      icon: <School className="h-10 w-10 text-luxury-gold" />,
      description: translate("Information about international and local schools in Dubai and Ras Al Khaimah."),
      details: [
        translate("British Curriculum Schools: GCSE and A-Levels"),
        translate("American Curriculum Schools: US High School Diploma"),
        translate("IB Schools: International Baccalaureate curriculum"),
        translate("School Ratings: KHDA inspection results"),
        translate("Admission Process: Requirements and deadlines")
      ],
      path: "/uae-know-how/schools"
    },
    {
      title: translate("Universities in UAE"),
      icon: <GraduationCap className="h-10 w-10 text-luxury-gold" />,
      description: translate("Explore higher education options in the UAE including international campuses."),
      details: [
        translate("Dubai International Academic City: Education hub"),
        translate("International University Branches: NYU, Heriot-Watt, Sorbonne"),
        translate("Undergraduate Programs: Bachelor degrees"),
        translate("Postgraduate Options: Master's and PhD programs"),
        translate("Student Visas: Requirements and process")
      ],
      path: "/uae-know-how/universities"
    },
    {
      title: translate("Offshore Company Setup"),
      icon: <Globe className="h-10 w-10 text-luxury-gold" />,
      description: translate("Complete guide to establishing offshore companies in the UAE free zones."),
      details: [
        translate("JAFZA Offshore: Jebel Ali Free Zone"),
        translate("RAK ICC: Ras Al Khaimah International Corporate Centre"),
        translate("DMCC: Dubai Multi Commodities Centre"),
        translate("Setup Requirements: Documents and fees"),
        translate("Banking for Offshore Companies: Account opening process")
      ],
      path: "/uae-know-how/offshore"
    },
    {
      title: translate("Legal Assistance"),
      icon: <Scale className="h-10 w-10 text-luxury-gold" />,
      description: translate("Legal services for property purchase, company formation, and residency matters."),
      details: [
        translate("Property Purchase Legalities: Title deed verification"),
        translate("Business Setup Documentation: Legal structure advice"),
        translate("Residency Permit Applications: Visa processing"),
        translate("Contract Review: Lease and purchase agreements"),
        translate("Dispute Resolution: RERA mediation and arbitration")
      ],
      path: "/uae-know-how/legal"
    },
    {
      title: translate("Property Maintenance"),
      icon: <Wrench className="h-10 w-10 text-luxury-gold" />,
      description: translate("Maintenance services and solutions for property owners in the UAE."),
      details: [
        translate("Annual Maintenance Contracts: Comprehensive care"),
        translate("Emergency Services: 24/7 support"),
        translate("HVAC System Servicing: AC maintenance"),
        translate("Pool and Garden Maintenance: Outdoor upkeep"),
        translate("Property Inspection Services: Condition assessments")
      ],
      path: "/uae-know-how/maintenance"
    },
    {
      title: translate("Interior Design"),
      icon: <Paintbrush className="h-10 w-10 text-luxury-gold" />,
      description: translate("Interior design and property upgrade services for investors and homeowners."),
      details: [
        translate("Full Home Design Services: Concept to completion"),
        translate("Furniture Packages for Investors: Ready-to-rent solutions"),
        translate("Kitchen and Bathroom Renovation: High-value upgrades"),
        translate("Smart Home Integration: Technology installations"),
        translate("Upgrade Consultations: ROI-focused improvements")
      ],
      path: "/uae-know-how/interior-design"
    },
    {
      title: translate("Short Term Rentals"),
      icon: <Calendar className="h-10 w-10 text-luxury-gold" />,
      description: translate("Guide to short-term rental regulations, management, and potential returns."),
      details: [
        translate("Licensing Requirements: DTCM permits"),
        translate("Market Performance Data: Occupancy rates and ADR"),
        translate("Property Management Services: Guest handling"),
        translate("Marketing and Listing Optimization: Platform strategies"),
        translate("Return on Investment Analysis: Cost vs. income")
      ],
      path: "/uae-know-how/short-term-rentals"
    },
    {
      title: translate("Long Term Rentals"),
      icon: <Home className="h-10 w-10 text-luxury-gold" />,
      description: translate("Everything you need to know about long-term property rentals in the UAE."),
      details: [
        translate("Tenancy Contract Requirements: Ejari registration"),
        translate("Landlord and Tenant Rights: Legal protections"),
        translate("Security Deposits and Fees: Standard practices"),
        translate("Rent Payment Structures: Cheque options"),
        translate("Property Management Services: Tenant sourcing")
      ],
      path: "/uae-know-how/long-term-rentals"
    }
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
