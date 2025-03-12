
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  Passport, 
  CreditCard, 
  School, 
  GraduationCap, 
  Building2, 
  Scale, 
  Wrench, 
  PaintBucket, 
  Bed, 
  Home 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const KnowHowCategories = () => {
  const { translate } = useLanguage();
  const [activeTab, setActiveTab] = useState("visa");

  const categories = [
    {
      id: "visa",
      title: "Visa Information",
      icon: <Passport className="h-5 w-5" />,
      content: {
        title: "UAE Visa Information",
        description: "UAE offers various visa types to cater to different needs of visitors, residents, and investors.",
        sections: [
          {
            subtitle: "Tourist Visa",
            text: "Validity: 30-90 days. Perfect for exploring the UAE before making investment decisions. Apply through airlines, hotels, or travel agencies.",
            benefits: ["Easy application process", "Multiple entry options available", "Can be extended"]
          },
          {
            subtitle: "Golden Visa",
            text: "Long-term residency (5-10 years) for investors, entrepreneurs, and specialists. Minimum property investment: AED 2 million.",
            benefits: ["No sponsor required", "100% business ownership", "Family sponsorship included"]
          },
          {
            subtitle: "Retirement Visa",
            text: "5-year visa for retirees aged 55+ who own property worth AED 2 million, have savings of AED 1 million, or an income of AED 20,000/month.",
            benefits: ["Renewable every 5 years", "Property investment pathway", "Full residence benefits"]
          },
          {
            subtitle: "Investor Visa",
            text: "For property investors. Requires minimum investment of AED 1 million. 3-year validity with renewable options.",
            benefits: ["Family sponsorship", "Business establishment rights", "No minimum stay requirements"]
          }
        ]
      }
    },
    {
      id: "bank",
      title: "Bank Account Opening",
      icon: <CreditCard className="h-5 w-5" />,
      content: {
        title: "Banking in the UAE",
        description: "Opening a bank account in the UAE is straightforward for both individuals and companies.",
        sections: [
          {
            subtitle: "For Individuals",
            text: "Requirements: Valid passport, UAE visa, Emirates ID (for residents), proof of address, and income certificate or employment letter.",
            benefits: ["Multi-currency accounts", "Digital banking solutions", "International transfers"]
          },
          {
            subtitle: "For Companies",
            text: "Requirements: Trade license, company documents, passport copies of shareholders, and initial deposit (varies by bank).",
            benefits: ["Business loan options", "Trade financing", "Merchant services"]
          },
          {
            subtitle: "Offshore Banking",
            text: "Available through DIFC and ADGM for international investors seeking privacy and asset protection.",
            benefits: ["Asset protection", "Tax efficiency", "Confidentiality"]
          },
          {
            subtitle: "Recommended Banks",
            text: "Emirates NBD, ADCB, Mashreq, and FAB offer excellent services for property investors with dedicated relationship managers.",
            benefits: ["Mortgage services", "Wealth management", "Property advisory"]
          }
        ]
      }
    },
    {
      id: "schools",
      title: "Schools",
      icon: <School className="h-5 w-5" />,
      content: {
        title: "Schools in the UAE",
        description: "The UAE offers world-class education with international curricula and modern facilities.",
        sections: [
          {
            subtitle: "British Curriculum Schools",
            text: "Following the National Curriculum of England. Popular options include GEMS Wellington, Dubai College, and Jumeirah College.",
            benefits: ["IGCSE and A-Level qualifications", "British-trained teachers", "Strong university placement"]
          },
          {
            subtitle: "American Curriculum Schools",
            text: "Following US standards with AP courses. Notable schools include Dubai American Academy, American School of Dubai.",
            benefits: ["US High School Diploma", "SAT preparation", "Strong sports programs"]
          },
          {
            subtitle: "IB Schools",
            text: "Offering the International Baccalaureate program. Examples include Repton School, GEMS World Academy.",
            benefits: ["Globally recognized diploma", "Holistic education approach", "Strong critical thinking focus"]
          },
          {
            subtitle: "Admission Process",
            text: "Applications typically require previous school reports, assessment tests, and interviews. Registration fees range from AED 500-2,000.",
            benefits: ["Year-round admissions", "Virtual tours available", "Waiting list options"]
          }
        ]
      }
    },
    {
      id: "universities",
      title: "Universities",
      icon: <GraduationCap className="h-5 w-5" />,
      content: {
        title: "Higher Education in the UAE",
        description: "The UAE hosts prestigious international universities offering world-recognized degrees.",
        sections: [
          {
            subtitle: "International Branch Campuses",
            text: "Campuses of renowned universities like NYU Abu Dhabi, Sorbonne University Abu Dhabi, and Heriot-Watt Dubai.",
            benefits: ["Same degree as home campus", "International faculty", "Global alumni network"]
          },
          {
            subtitle: "Local Universities",
            text: "UAE universities like American University of Sharjah, University of Dubai, and Zayed University offer quality education.",
            benefits: ["Strong local connections", "Industry partnerships", "Scholarships for residents"]
          },
          {
            subtitle: "Business Education",
            text: "Institutions like INSEAD, London Business School, and SP Jain offer world-class business education in the UAE.",
            benefits: ["Executive education", "MBA programs", "Industry networking"]
          },
          {
            subtitle: "Research Opportunities",
            text: "Khalifa University, MBZUAI, and UAEU lead in research across AI, renewable energy, and healthcare sectors.",
            benefits: ["Research funding", "Innovation centers", "Industry collaboration"]
          }
        ]
      }
    },
    {
      id: "offshore",
      title: "Offshore Company Setup",
      icon: <Building2 className="h-5 w-5" />,
      content: {
        title: "Offshore Company Formation in the UAE",
        description: "The UAE offers attractive offshore company structures with significant tax benefits and privacy.",
        sections: [
          {
            subtitle: "JAFZA Offshore",
            text: "Jebel Ali Free Zone offshore companies offer 100% foreign ownership, no corporate tax, and complete repatriation of capital and profits.",
            benefits: ["100% foreign ownership", "No corporate tax", "No audit requirements"]
          },
          {
            subtitle: "RAK ICC",
            text: "Ras Al Khaimah International Corporate Centre provides cost-effective offshore solutions with minimal documentation.",
            benefits: ["Privacy protection", "No physical presence required", "Fast incorporation (2-3 days)"]
          },
          {
            subtitle: "DIFC/ADGM Offshore",
            text: "Financial free zones offering common law jurisdiction and sophisticated legal frameworks for international businesses.",
            benefits: ["Common law framework", "Double tax treaties", "Legal certainty"]
          },
          {
            subtitle: "Setup Process",
            text: "Process includes name approval, document submission, payment of fees, and receipt of incorporation documents. Average cost: USD 2,500-5,000.",
            benefits: ["Remote formation possible", "Corporate bank account", "Annual renewal simplified"]
          }
        ]
      }
    },
    {
      id: "legal",
      title: "Legal Assistance",
      icon: <Scale className="h-5 w-5" />,
      content: {
        title: "Legal Services in the UAE",
        description: "Navigating UAE's legal system requires professional assistance, especially for property investments and business setup.",
        sections: [
          {
            subtitle: "Property Legal Services",
            text: "Services include title deed verification, contract review, dispute resolution, and inheritance planning for property assets.",
            benefits: ["Due diligence", "Contract protection", "Dispute resolution"]
          },
          {
            subtitle: "Business Legal Services",
            text: "Support for company formation, commercial contracts, employment law, and regulatory compliance across free zones and mainland.",
            benefits: ["Licensing advice", "Commercial agreements", "Regulatory compliance"]
          },
          {
            subtitle: "Residency & Immigration",
            text: "Legal assistance for visa applications, residency processes, golden visa applications, and compliance with immigration laws.",
            benefits: ["Visa processing", "Status regularization", "Family sponsorship"]
          },
          {
            subtitle: "Wills & Succession",
            text: "DIFC Wills Service Centre offers non-Muslims the ability to register a will under common law, ensuring assets are distributed according to their wishes.",
            benefits: ["Asset protection", "Succession planning", "Inheritance security"]
          }
        ]
      }
    },
    {
      id: "maintenance",
      title: "Property Maintenance",
      icon: <Wrench className="h-5 w-5" />,
      content: {
        title: "Property Maintenance Services",
        description: "Maintaining your UAE property investment ensures long-term value appreciation and optimal rental returns.",
        sections: [
          {
            subtitle: "Regular Maintenance",
            text: "Standard maintenance packages include AC servicing, plumbing checks, electrical inspections, and general repairs from AED 1,500-4,000 annually.",
            benefits: ["Preserve property value", "Prevent major damages", "Extended appliance life"]
          },
          {
            subtitle: "Emergency Services",
            text: "24/7 emergency response for water leaks, electrical failures, AC breakdowns, and other urgent issues throughout Dubai and RAK.",
            benefits: ["Rapid response", "Certified technicians", "Transparent pricing"]
          },
          {
            subtitle: "Property Management",
            text: "Full-service property management including tenant relations, rent collection, maintenance coordination, and financial reporting.",
            benefits: ["Passive income", "Professional tenant screening", "Financial reporting"]
          },
          {
            subtitle: "Preventive Maintenance",
            text: "Scheduled inspections and maintenance to prevent costly repairs and extend the lifespan of your property and its systems.",
            benefits: ["Cost savings", "Fewer disruptions", "Enhanced property longevity"]
          }
        ]
      }
    },
    {
      id: "interior",
      title: "Interior Design",
      icon: <PaintBucket className="h-5 w-5" />,
      content: {
        title: "Interior Design & Property Upgrading",
        description: "Enhance your property's appeal and value through professional interior design services and strategic upgrades.",
        sections: [
          {
            subtitle: "Design Consultation",
            text: "Professional assessment of your property with tailored recommendations for improvements. Services start from AED 5,000 for consultation and concept development.",
            benefits: ["Personalized solutions", "Trend awareness", "Space optimization"]
          },
          {
            subtitle: "Full Renovation",
            text: "Complete property transformation including structural changes, flooring, kitchen, bathrooms, and lighting. Costs range from AED 300-800 per square foot.",
            benefits: ["Increased property value", "Enhanced rental appeal", "Modern amenities"]
          },
          {
            subtitle: "Furniture Packages",
            text: "Turnkey furnishing solutions for investors, with packages ranging from AED 30,000 for studios to AED 120,000+ for luxury villas.",
            benefits: ["Rental-ready property", "Designer-curated", "Time-saving"]
          },
          {
            subtitle: "Smart Home Integration",
            text: "Implementation of smart home technology for lighting, climate, security, and entertainment systems to increase property attractiveness.",
            benefits: ["Higher rental rates", "Energy efficiency", "Modern appeal"]
          }
        ]
      }
    },
    {
      id: "short-term",
      title: "Short Term Rentals",
      icon: <Bed className="h-5 w-5" />,
      content: {
        title: "Short Term Rental Management",
        description: "Maximize your investment returns through strategic short-term rental management in the UAE's vibrant tourism market.",
        sections: [
          {
            subtitle: "Holiday Home Licensing",
            text: "Licensing process through DTCM in Dubai or RAK Tourism for legal holiday home operation. Service includes application, inspection preparation, and documentation.",
            benefits: ["Legal compliance", "Access to booking platforms", "Higher daily rates"]
          },
          {
            subtitle: "Property Marketing",
            text: "Professional photography, compelling listings, and strategic pricing across Airbnb, Booking.com, and other platforms to maximize visibility.",
            benefits: ["Global visibility", "Professional presentation", "Optimized pricing"]
          },
          {
            subtitle: "Guest Management",
            text: "Complete guest services including screening, communication, check-in/out, cleaning, maintenance, and 24/7 support for seamless stays.",
            benefits: ["5-star reviews", "Repeat bookings", "Premium service"]
          },
          {
            subtitle: "Financial Performance",
            text: "Average returns of 8-12% in prime locations, with daily rates ranging from AED 350 for studios to AED 3,000+ for luxury properties.",
            benefits: ["Higher yield potential", "Occupancy optimization", "Detailed reporting"]
          }
        ]
      }
    },
    {
      id: "long-term",
      title: "Long Term Rentals",
      icon: <Home className="h-5 w-5" />,
      content: {
        title: "Long Term Rental Management",
        description: "Secure stable returns and hassle-free property ownership through professional long-term rental management.",
        sections: [
          {
            subtitle: "Tenant Sourcing",
            text: "Comprehensive tenant finding services including property marketing, applicant screening, background checks, and contract negotiation.",
            benefits: ["Quality tenants", "Reduced vacancy", "Market-appropriate pricing"]
          },
          {
            subtitle: "Property Management",
            text: "Full-service management including rent collection, maintenance coordination, regular inspections, and tenant relations at 5-8% of annual rent.",
            benefits: ["Passive income", "Property preservation", "Legal compliance"]
          },
          {
            subtitle: "Lease Administration",
            text: "Handling of all documentation, Ejari registration, security deposits, renewals, and compliance with UAE tenancy laws and regulations.",
            benefits: ["Legal protection", "Paperwork management", "Dispute prevention"]
          },
          {
            subtitle: "Investment Returns",
            text: "Average returns of 5-8% in established areas with potential for capital appreciation of 3-6% annually in growth corridors.",
            benefits: ["Predictable income", "Lower management intensity", "Tenant stability"]
          }
        ]
      }
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="luxury-container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">{translate("UAE Know How Categories")}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Essential information for investors and residents about living, investing, and establishing businesses in the UAE.
          </p>
          <div className="gold-separator mt-6 mx-auto" />
        </div>

        <Tabs 
          defaultValue="visa" 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full max-w-6xl mx-auto"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-2 bg-transparent h-auto mb-8">
            {categories.map((category, index) => (
              <TabsTrigger 
                key={category.id}
                value={category.id} 
                className={`flex items-center gap-2 p-3 data-[state=active]:bg-luxury-gold data-[state=active]:text-white rounded-md transition-all ${
                  index >= 5 ? 'mt-2 md:mt-2 lg:mt-0' : ''
                }`}
              >
                {category.icon}
                <span className="hidden md:inline">{translate(category.title)}</span>
                <span className="md:hidden">{category.icon}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-luxury-navy text-white rounded-t-lg">
                  <CardTitle className="text-2xl">{translate(category.content.title)}</CardTitle>
                  <CardDescription className="text-gray-200">
                    {category.content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.content.sections.map((section, index) => (
                      <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="text-lg font-semibold mb-2 text-luxury-navy">{section.subtitle}</h4>
                        <p className="text-gray-600 mb-4">{section.text}</p>
                        <div className="space-y-2">
                          <p className="font-medium text-gray-700">Key Benefits:</p>
                          <ul className="space-y-1">
                            {section.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600">
                                <ArrowRight className="h-4 w-4 text-luxury-gold mt-1 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default KnowHowCategories;
