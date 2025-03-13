
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Define the categories data structure
interface CategoryDetail {
  id: string;
  title: string;
  heroImage: string;
  introduction: string;
  sections: {
    title: string;
    content: string;
    listItems?: string[];
  }[];
}

const UAEKnowHowDetail = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { translate } = useLanguage();
  
  // This data would ideally come from a database or API
  const categoriesData: Record<string, CategoryDetail> = {
    "visa": {
      id: "visa",
      title: translate("Visa Information"),
      heroImage: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop",
      introduction: translate("The UAE offers various visa options for investors, professionals, tourists, and retirees, each with specific requirements and benefits."),
      sections: [
        {
          title: translate("Golden Visa"),
          content: translate("The UAE Golden Visa offers long-term residency (5 or 10 years) to investors, entrepreneurs, specialized talents, and researchers."),
          listItems: [
            translate("Eligibility: Investors in public investments (min. AED 2 million), real estate (min. AED 2 million)"),
            translate("No sponsor required for the duration of stay"),
            translate("100% business ownership in UAE mainland"),
            translate("Residence for family members including spouse and children"),
            translate("No minimum stay required to maintain residency")
          ]
        },
        {
          title: translate("Investor Visa"),
          content: translate("Property investors can obtain residency visas based on their real estate investments."),
          listItems: [
            translate("Requires property worth at least AED 750,000"),
            translate("Visa duration: 2-3 years renewable"),
            translate("Allows sponsorship of family members"),
            translate("Property must be residential and completed (not off-plan)"),
            translate("Multiple properties can be combined to reach the minimum value")
          ]
        },
        {
          title: translate("Employment Visa"),
          content: translate("Professionals working in the UAE require employment visas sponsored by their employers."),
          listItems: [
            translate("Validity: 2 years, renewable"),
            translate("Employer handles visa processing and costs"),
            translate("Medical examination required"),
            translate("Emirates ID card issued alongside the visa"),
            translate("Allows sponsorship of dependents if salary criteria met (min. AED 4,000)")
          ]
        },
        {
          title: translate("Tourist Visa"),
          content: translate("Short-term visas for visitors to the UAE with various duration options."),
          listItems: [
            translate("30-day single entry visa"),
            translate("90-day multiple entry visa"),
            translate("5-year multiple entry tourist visa for certain nationalities"),
            translate("Visa on arrival for many countries"),
            translate("Extensions possible in some cases")
          ]
        },
        {
          title: translate("Retirement Visa"),
          content: translate("The UAE offers a retirement visa for those aged 55 and above meeting certain financial criteria."),
          listItems: [
            translate("5-year renewable visa"),
            translate("Requires one of: AED 1 million in savings, property worth AED 1 million, or active income of AED 20,000/month"),
            translate("Medical insurance requirement"),
            translate("No employment allowed on this visa"),
            translate("Available to all nationalities")
          ]
        }
      ]
    },
    "banking": {
      id: "banking",
      title: translate("Bank Account Opening"),
      heroImage: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop",
      introduction: translate("Opening a bank account in the UAE is an essential step for residents and investors. The process varies depending on your residency status and the type of account you need."),
      sections: [
        {
          title: translate("Personal Account Requirements"),
          content: translate("Documents and requirements for opening a personal bank account in the UAE."),
          listItems: [
            translate("Valid passport and UAE visa/residence permit"),
            translate("Emirates ID (for residents)"),
            translate("Proof of address (utility bill, tenancy contract)"),
            translate("Salary certificate or proof of income"),
            translate("Minimum deposit requirements vary by bank")
          ]
        },
        {
          title: translate("Corporate Account Documents"),
          content: translate("Required documentation for opening a business bank account in the UAE."),
          listItems: [
            translate("Trade license and company registration documents"),
            translate("Memorandum and Articles of Association"),
            translate("Board resolution for opening the account"),
            translate("Passport copies and visas of all shareholders/directors"),
            translate("Proof of company address (office lease agreement)")
          ]
        },
        {
          title: translate("Non-Resident Banking Options"),
          content: translate("Banking solutions for non-residents investing in the UAE."),
          listItems: [
            translate("Available at select banks including ENBD, ADCB, RAK Bank"),
            translate("Higher minimum balance requirements (typically AED 100,000+)"),
            translate("May require reference letter from home country bank"),
            translate("Account opening may require in-person visit"),
            translate("Some banks offer remote account opening processes")
          ]
        },
        {
          title: translate("Digital Banking Solutions"),
          content: translate("Modern digital banking options available in the UAE."),
          listItems: [
            translate("Neo banks and digital-only solutions (e.g., NEO, CBD Now)"),
            translate("Simplified documentation requirements"),
            translate("Lower or zero minimum balance requirements"),
            translate("Mobile app-based account management"),
            translate("Instant account opening for residents in many cases")
          ]
        },
        {
          title: translate("Wealth Management Services"),
          content: translate("Premium banking services for high-net-worth individuals."),
          listItems: [
            translate("Priority banking with dedicated relationship managers"),
            translate("Minimum balance typically AED 350,000+"),
            translate("Exclusive investment opportunities"),
            translate("Preferential rates and reduced fees"),
            translate("Additional services including tax planning and global account access")
          ]
        }
      ]
    },
    "schools": {
      id: "schools",
      title: translate("Schools"),
      heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
      introduction: translate("The UAE offers a wide range of educational options with international curriculums and world-class facilities for families moving to the country."),
      sections: [
        {
          title: translate("British Curriculum Schools"),
          content: translate("Schools following the National Curriculum of England are among the most popular in the UAE."),
          listItems: [
            translate("GEMS Wellington International School - Premium British education"),
            translate("Dubai British School - Offers GCSE and A-Levels"),
            translate("Horizon International School - British curriculum with inclusive approach"),
            translate("Dubai English Speaking College - Strong focus on academics and sports"),
            translate("Fees range: AED 45,000-90,000 per year")
          ]
        },
        {
          title: translate("American Curriculum Schools"),
          content: translate("Schools following the US curriculum with Advanced Placement (AP) courses."),
          listItems: [
            translate("American School of Dubai - One of the oldest American schools"),
            translate("Dubai American Academy - IB and AP programs"),
            translate("American International School - Aligned with US standards"),
            translate("GEMS Dubai American Academy - US standards with international perspective"),
            translate("Fees range: AED 50,000-100,000 per year")
          ]
        },
        {
          title: translate("IB Schools"),
          content: translate("International Baccalaureate schools offering globally recognized programs."),
          listItems: [
            translate("Dubai International Academy - All IB programs (PYP, MYP, DP)"),
            translate("Greenfield Community School - IB World School"),
            translate("Uptown International School - Strong IB results"),
            translate("Emirates International School - Long-established IB curriculum"),
            translate("Fees range: AED 55,000-110,000 per year")
          ]
        },
        {
          title: translate("Admission Process"),
          content: translate("Understanding the school application and enrollment process in the UAE."),
          listItems: [
            translate("Applications open approximately one year before admission"),
            translate("Assessment tests for academic ability and English proficiency"),
            translate("Parent and student interviews"),
            translate("Required documents: previous school reports, passport copies, visa copies"),
            translate("Registration fees: AED 500-2,000 (non-refundable)")
          ]
        },
        {
          title: translate("School Transport and Facilities"),
          content: translate("Additional services and facilities offered by UAE schools."),
          listItems: [
            translate("Bus transportation available (additional fees apply)"),
            translate("State-of-the-art sports facilities including Olympic pools, football pitches"),
            translate("Technology integration with smart boards, coding labs"),
            translate("Performing arts centers with music and drama programs"),
            translate("Cafeterias with healthy meal options")
          ]
        }
      ]
    },
    "universities": {
      id: "universities",
      title: translate("Universities"),
      heroImage: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop",
      introduction: translate("The UAE has established itself as a regional education hub with prestigious local universities and international campuses offering diverse programs."),
      sections: [
        {
          title: translate("Top Universities in UAE"),
          content: translate("Leading higher education institutions in the UAE."),
          listItems: [
            translate("New York University Abu Dhabi - Liberal arts focus with global recognition"),
            translate("American University of Sharjah - US-accredited degrees"),
            translate("Khalifa University - STEM-focused with research emphasis"),
            translate("University of Dubai - Business and IT specializations"),
            translate("United Arab Emirates University - Comprehensive public university")
          ]
        },
        {
          title: translate("International Branch Campuses"),
          content: translate("Global university branches operating in the UAE."),
          listItems: [
            translate("Heriot-Watt University Dubai - UK engineering and business programs"),
            translate("INSEAD Abu Dhabi - Global MBA program"),
            translate("Sorbonne University Abu Dhabi - French education system"),
            translate("University of Birmingham Dubai - UK Russell Group university"),
            translate("Middlesex University Dubai - UK-based undergraduate and postgraduate degrees")
          ]
        },
        {
          title: translate("Program Types and Degrees"),
          content: translate("Different academic programs available at UAE universities."),
          listItems: [
            translate("Undergraduate: Bachelor's degrees (3-4 years)"),
            translate("Postgraduate: Master's degrees (1-2 years)"),
            translate("Doctoral: PhD programs (3-5 years)"),
            translate("Professional certifications and diplomas"),
            translate("Executive education and part-time study options")
          ]
        },
        {
          title: translate("Tuition and Scholarships"),
          content: translate("Financial aspects of higher education in the UAE."),
          listItems: [
            translate("Undergraduate tuition: AED 40,000-120,000 per year"),
            translate("Postgraduate tuition: AED 60,000-200,000 per year"),
            translate("Merit scholarships available (up to 100% of tuition)"),
            translate("Emirati student scholarships and government support"),
            translate("Financial aid options for international students")
          ]
        },
        {
          title: translate("Student Visa Process"),
          content: translate("Requirements for obtaining student visas in the UAE."),
          listItems: [
            translate("University sponsorship required"),
            translate("Visa duration matches program length (renewable)"),
            translate("Required documents: offer letter, passport, photographs, medical tests"),
            translate("Health insurance mandatory"),
            translate("Costs approximately AED 3,000-4,000 for processing")
          ]
        }
      ]
    },
    "offshore": {
      id: "offshore",
      title: translate("Offshore Company Setup"),
      heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      introduction: translate("Setting up an offshore company in the UAE provides tax advantages, asset protection, and business flexibility with straightforward incorporation processes."),
      sections: [
        {
          title: translate("Free Zone Options"),
          content: translate("Popular free zones for offshore company registration in the UAE."),
          listItems: [
            translate("Jebel Ali Free Zone (JAFZA) - Established trading hub"),
            translate("Dubai Multi Commodities Centre (DMCC) - 50+ business activities"),
            translate("Ras Al Khaimah International Corporate Centre (RAK ICC) - Cost-effective option"),
            translate("Ajman Free Zone - Competitive pricing"),
            translate("IFZA - Flexible packages for various business sizes")
          ]
        },
        {
          title: translate("Setup Requirements"),
          content: translate("Documentation and requirements for establishing an offshore company."),
          listItems: [
            translate("Passport copies of all shareholders and directors"),
            translate("Proof of address (utility bills, bank statements)"),
            translate("Bank reference letters"),
            translate("Business plan for certain jurisdictions"),
            translate("KYC (Know Your Customer) documentation")
          ]
        },
        {
          title: translate("Costs and Timeline"),
          content: translate("Financial aspects and timeframe for offshore company formation."),
          listItems: [
            translate("Setup costs: Starting from AED 15,000"),
            translate("Annual renewal: AED 10,000-20,000"),
            translate("Additional fees for virtual office if required"),
            translate("Setup timeline: 3-7 working days"),
            translate("Bank account opening: 2-4 weeks additional time")
          ]
        },
        {
          title: translate("Benefits and Limitations"),
          content: translate("Advantages and restrictions of UAE offshore companies."),
          listItems: [
            translate("0% corporate and personal income tax"),
            translate("100% foreign ownership permitted"),
            translate("No currency restrictions"),
            translate("Cannot conduct business within the UAE"),
            translate("No physical office space in the UAE permitted")
          ]
        },
        {
          title: translate("Banking for Offshore Companies"),
          content: translate("Banking options for offshore entities registered in the UAE."),
          listItems: [
            translate("Local UAE banks: Emirates NBD, RAK Bank, Commercial Bank of Dubai"),
            translate("International banks with UAE presence: HSBC, Standard Chartered"),
            translate("Required minimum deposits: AED 50,000-100,000"),
            translate("Corporate credit cards and merchant services available"),
            translate("Online banking platforms with international transfer capabilities")
          ]
        }
      ]
    },
    "legal": {
      id: "legal",
      title: translate("Legal Assistance"),
      heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      introduction: translate("Professional legal services are essential for navigating UAE regulations regarding property purchases, business setup, and residency matters."),
      sections: [
        {
          title: translate("Property Purchase Legal Support"),
          content: translate("Legal assistance for real estate transactions in the UAE."),
          listItems: [
            translate("Title deed verification and due diligence"),
            translate("Sale and purchase agreement (SPA) review"),
            translate("Property registration with relevant authorities (DLD in Dubai)"),
            translate("Escrow account setup and management"),
            translate("Property transfer tax (4%) and fee guidance")
          ]
        },
        {
          title: translate("Business Setup Documentation"),
          content: translate("Legal services for establishing businesses in the UAE."),
          listItems: [
            translate("Company formation in mainland, free zones, or offshore"),
            translate("Trade license application and processing"),
            translate("Corporate structure and shareholder agreements"),
            translate("Intellectual property registration and protection"),
            translate("Commercial agency agreements and distributions")
          ]
        },
        {
          title: translate("Residency Permit Applications"),
          content: translate("Legal assistance with visa and residency matters."),
          listItems: [
            translate("Investor visa application and processing"),
            translate("Family sponsorship and dependent visas"),
            translate("Golden Visa qualification assessment"),
            translate("Visa renewals and status adjustments"),
            translate("Immigration compliance advice")
          ]
        },
        {
          title: translate("Contract Review and Drafting"),
          content: translate("Legal document preparation and review services."),
          listItems: [
            translate("Commercial contracts and agreements"),
            translate("Employment contracts compliant with UAE labor law"),
            translate("Non-disclosure and confidentiality agreements"),
            translate("Lease agreements for residential and commercial properties"),
            translate("Terms and conditions for businesses")
          ]
        },
        {
          title: translate("Dispute Resolution Services"),
          content: translate("Legal representation for resolving disagreements and conflicts."),
          listItems: [
            translate("Commercial dispute resolution"),
            translate("Real estate dispute mediation"),
            translate("Arbitration proceedings"),
            translate("Court representation in civil matters"),
            translate("Enforcement of foreign judgments in the UAE")
          ]
        }
      ]
    },
    "maintenance": {
      id: "maintenance",
      title: translate("Property Maintenance"),
      heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
      introduction: translate("Proper maintenance is essential for preserving property value and ensuring tenant satisfaction in the UAE's climate conditions."),
      sections: [
        {
          title: translate("Annual Maintenance Contracts"),
          content: translate("Comprehensive maintenance packages for property owners."),
          listItems: [
            translate("Full-service AMCs covering all systems and repairs"),
            translate("Pricing: AED 5-15 per sq ft annually based on property type"),
            translate("Preventative maintenance schedules"),
            translate("Regular system inspections and reports"),
            translate("Discounted rates for repairs outside contract scope")
          ]
        },
        {
          title: translate("HVAC System Servicing"),
          content: translate("Air conditioning maintenance crucial in UAE's hot climate."),
          listItems: [
            translate("Quarterly AC servicing recommended"),
            translate("Filter cleaning and replacement"),
            translate("Condenser and evaporator coil cleaning"),
            translate("Refrigerant level checks and top-ups"),
            translate("Annual deep cleaning for optimal efficiency")
          ]
        },
        {
          title: translate("Pool and Garden Maintenance"),
          content: translate("Outdoor area upkeep for villas and properties with external spaces."),
          listItems: [
            translate("Weekly pool chemical balance checks"),
            translate("Monthly filter backwashing and pump inspection"),
            translate("Regular garden irrigation system maintenance"),
            translate("Seasonal plant care and landscaping"),
            translate("Quarterly pool deep cleaning recommended")
          ]
        },
        {
          title: translate("24/7 Emergency Services"),
          content: translate("Urgent maintenance and repair services."),
          listItems: [
            translate("Water leak response within 1-2 hours"),
            translate("Electrical emergency services"),
            translate("Lockout assistance and lock repairs"),
            translate("Plumbing emergencies and blockage clearance"),
            translate("AC breakdown emergency response")
          ]
        },
        {
          title: translate("Building Systems Inspection"),
          content: translate("Regular checks for property infrastructure and safety systems."),
          listItems: [
            translate("Annual fire safety system inspections (required by law)"),
            translate("Elevator maintenance and certification"),
            translate("Structural inspections for older properties"),
            translate("Water tank cleaning and sterilization"),
            translate("Electrical system safety checks")
          ]
        }
      ]
    },
    "interior-design": {
      id: "interior-design",
      title: translate("Interior Design"),
      heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop",
      introduction: translate("Professional interior design services can transform properties into stylish, functional spaces that maximize both livability and rental returns."),
      sections: [
        {
          title: translate("Full Home Design Services"),
          content: translate("Comprehensive interior design solutions for entire properties."),
          listItems: [
            translate("Concept development and mood boards"),
            translate("Space planning and 3D visualizations"),
            translate("Material and finish selection"),
            translate("Custom furniture design and procurement"),
            translate("Lighting design and fixture selection")
          ]
        },
        {
          title: translate("Kitchen and Bathroom Renovation"),
          content: translate("Specialized design services for high-impact areas."),
          listItems: [
            translate("Kitchen layout optimization"),
            translate("Cabinetry design and installation"),
            translate("Countertop and backsplash selection"),
            translate("Bathroom fixture upgrades"),
            translate("Waterproofing and tiling specialists")
          ]
        },
        {
          title: translate("Furniture Selection and Procurement"),
          content: translate("Furnishing services for new and existing properties."),
          listItems: [
            translate("Furniture packages for investment properties"),
            translate("Custom furniture design and manufacturing"),
            translate("Luxury brand procurement with trade discounts"),
            translate("Delivery and installation coordination"),
            translate("Accessory and art curation")
          ]
        },
        {
          title: translate("Smart Home Integration"),
          content: translate("Technology solutions for modern living."),
          listItems: [
            translate("Smart lighting control systems"),
            translate("Home automation integration"),
            translate("Audio-visual system design"),
            translate("Security and access control"),
            translate("Climate control optimization")
          ]
        },
        {
          title: translate("Project Management Services"),
          content: translate("End-to-end management of renovation and design projects."),
          listItems: [
            translate("Contractor selection and supervision"),
            translate("Budget management and cost control"),
            translate("Timeline development and progress tracking"),
            translate("Quality control and snagging"),
            translate("Handover and maintenance recommendations")
          ]
        }
      ]
    },
    "short-term-rentals": {
      id: "short-term-rentals",
      title: translate("Short Term Rentals"),
      heroImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
      introduction: translate("Short-term rentals can provide higher yields than traditional leasing but require proper licensing, management, and marketing strategies."),
      sections: [
        {
          title: translate("Licensing Requirements"),
          content: translate("Regulatory compliance for short-term rental operations."),
          listItems: [
            translate("DTCM (Department of Tourism and Commerce Marketing) permit required in Dubai"),
            translate("RAKTDA approval needed in Ras Al Khaimah"),
            translate("Annual license fees (approximately AED 1,500)"),
            translate("Property must meet safety and quality standards"),
            translate("NOC from building management often required")
          ]
        },
        {
          title: translate("Property Management Services"),
          content: translate("Professional management options for short-term rental investors."),
          listItems: [
            translate("Full-service management: 20-30% of rental income"),
            translate("Listing creation and optimization"),
            translate("Guest communication and check-in services"),
            translate("Cleaning and maintenance coordination"),
            translate("Revenue management and dynamic pricing")
          ]
        },
        {
          title: translate("Marketing Platforms"),
          content: translate("Channels for promoting short-term rental properties."),
          listItems: [
            translate("Airbnb - Global reach with strong UAE presence"),
            translate("Booking.com - Popular with international travelers"),
            translate("Agoda and Expedia - Additional booking channels"),
            translate("Direct booking websites - Build your own brand"),
            translate("Local platforms: Dubai Holiday Homes, UAE Holiday Homes")
          ]
        },
        {
          title: translate("Revenue Potential"),
          content: translate("Earning possibilities from short-term rental investments."),
          listItems: [
            translate("Prime Dubai locations: AED 500-2,000 per night"),
            translate("Average occupancy: 70-85% in peak season"),
            translate("Seasonal variation in rates (30-50% higher in peak season)"),
            translate("Annual ROI: 8-12% possible with optimal management"),
            translate("Additional revenue from extra services and experiences")
          ]
        },
        {
          title: translate("Property Setup Requirements"),
          content: translate("Preparing a property for the short-term rental market."),
          listItems: [
            translate("High-quality furnishings and appliances"),
            translate("Fast, reliable WiFi connection"),
            translate("Smart locks for keyless entry"),
            translate("Welcome guide and local recommendations"),
            translate("Amenities such as toiletries, coffee machines, and kitchen essentials")
          ]
        }
      ]
    },
    "long-term-rentals": {
      id: "long-term-rentals",
      title: translate("Long Term Rentals"),
      heroImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
      introduction: translate("Long-term property rentals in the UAE offer stable returns and lower management requirements while still providing attractive yields for investors."),
      sections: [
        {
          title: translate("Tenancy Contract Requirements"),
          content: translate("Legal aspects of long-term rental agreements in the UAE."),
          listItems: [
            translate("Ejari registration required in Dubai (Tawtheeq in Abu Dhabi)"),
            translate("Standard contracts typically 12 months with renewal options"),
            translate("Payment terms: 1-4 cheques (fewer cheques command higher rents)"),
            translate("Security deposit: 5% of annual rent (refundable)"),
            translate("Agency fee: 5% paid by tenant, landlord, or split")
          ]
        },
        {
          title: translate("Maintenance Responsibilities"),
          content: translate("Understanding maintenance obligations in rental properties."),
          listItems: [
            translate("Landlord responsible for major maintenance and structural issues"),
            translate("Tenant typically handles minor repairs (under AED 500)"),
            translate("AC servicing responsibility should be clearly defined in contract"),
            translate("Annual maintenance contracts recommended for landlords"),
            translate("Property handover inspection essential before and after tenancy")
          ]
        },
        {
          title: translate("Rental Yield Expectations"),
          content: translate("Return on investment projections for long-term rentals."),
          listItems: [
            translate("Downtown Dubai: 5-6% annual yield"),
            translate("Dubai Marina: 6-7% annual yield"),
            translate("Jumeirah Village Circle: 7-8% annual yield"),
            translate("Ras Al Khaimah: 8-9% annual yield"),
            translate("Studios and 1-bedrooms typically offer higher yields than larger units")
          ]
        },
        {
          title: translate("Rent Increases and Regulations"),
          content: translate("Understanding rental increase restrictions and tenant rights."),
          listItems: [
            translate("Dubai rent increase calculator (RERA) determines allowable increases"),
            translate("No increases permitted for first renewal period"),
            translate("90 days notice required for rent increases"),
            translate("Market value assessment required for disputes"),
            translate("Rental dispute resolution centers handle conflicts")
          ]
        },
        {
          title: translate("Property Management Options"),
          content: translate("Professional services for landlords renting properties long-term."),
          listItems: [
            translate("Full property management: 5-8% of annual rent"),
            translate("Tenant finding services: Fixed fee or 5% of annual rent"),
            translate("Rent collection and financial reporting"),
            translate("Maintenance coordination and emergency response"),
            translate("Legal compliance and documentation management")
          ]
        }
      ]
    }
  };
  
  // Get the current category details
  const currentCategory = categoryId ? categoriesData[categoryId] : null;
  
  // Handle case where invalid category ID is provided
  useEffect(() => {
    if (categoryId && !categoriesData[categoryId]) {
      navigate("/uae-know-how");
    }
  }, [categoryId, navigate]);
  
  if (!currentCategory) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <HeroSection
          title={currentCategory.title}
          subtitle={currentCategory.introduction}
          backgroundImage={currentCategory.heroImage}
          showCta={false}
        />
        
        <section className="py-16 bg-white">
          <div className="luxury-container">
            {/* Back button */}
            <Button 
              variant="outline" 
              className="mb-8 flex items-center gap-2"
              onClick={() => navigate("/uae-know-how")}
            >
              <ArrowLeft className="h-4 w-4" />
              {translate("Back to Know How Categories")}
            </Button>
            
            {/* Content sections */}
            {currentCategory.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-gray-700 mb-6">{section.content}</p>
                
                {section.listItems && (
                  <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <ul className="space-y-3">
                      {section.listItems.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-luxury-gold font-bold mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* Contact section */}
        <section className="py-16 bg-gray-50">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-3">
                {translate("Need more information about")} {currentCategory.title}?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {translate("Our experts are ready to assist you with personalized advice and solutions for your specific needs.")}
              </p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UAEKnowHowDetail;
