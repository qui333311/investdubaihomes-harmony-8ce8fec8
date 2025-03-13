import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CreditCard, GraduationCap, Home, Paintbrush, Scale, School, Stamp, Wrench, Building, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import EnhancedContactForm from "@/components/EnhancedContactForm";

// Category content mapping
const categoryContent = {
  visa: {
    title: "Visa Information",
    subtitle: "Learn about UAE visa types, requirements, and benefits for residents and investors",
    icon: <Stamp className="h-12 w-12 text-luxury-gold mb-4" />,
    heroImage: "https://images.unsplash.com/photo-1577969077925-f4db42e953fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    sections: [
      {
        title: "Golden Visa (10-year residency)",
        content: "The UAE Golden Visa offers long-term residency (5 or 10 years) to investors, entrepreneurs, specialized talents, researchers, outstanding students, and graduates. For property investors, the minimum investment required is AED 2 million. Golden Visa holders enjoy benefits such as 100% business ownership, sponsoring family members including spouse and children, and the ability to stay outside the UAE for more than the usual 6-month period."
      },
      {
        title: "Investor Visa (3-year property investor visa)",
        content: "Property investors who purchase real estate worth at least AED 1 million can obtain a 3-year renewable residence visa. This visa allows investors to live in the UAE and sponsor their immediate family members. The property must be in a freehold area and should be completed (not off-plan)."
      },
      {
        title: "Employment Visa",
        content: "UAE employment visas are sponsored by UAE-based companies and typically valid for 2 years. The process involves the employer obtaining initial approval from the Ministry of Human Resources and Emiratisation, followed by the employee completing medical tests and biometric scanning upon arrival. Family members can be sponsored if the employee meets minimum salary requirements (usually AED 4,000-10,000 depending on profession)."
      },
      {
        title: "Tourist Visa",
        content: "Tourists from many countries can obtain visa-on-arrival for 30-90 days. Others need to apply in advance through a UAE-based sponsor (hotel, tour company, or resident). Tourist visas can be extended for an additional 30 days twice, without leaving the country."
      },
      {
        title: "Retirement Visa",
        content: "The UAE offers a 5-year retirement visa for individuals aged 55 and above who meet one of these criteria: investment in property worth AED 2 million, financial savings of at least AED 1 million, or an active income of at least AED 20,000 per month."
      }
    ],
    consultationText: "Need personalized visa advice for your situation? Book a consultation with our specialists."
  },
  banking: {
    title: "Bank Account Opening",
    subtitle: "Guidelines for opening personal and corporate bank accounts in the UAE",
    icon: <Building className="h-12 w-12 text-luxury-gold mb-4" />,
    heroImage: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    sections: [
      {
        title: "Personal Account Requirements",
        content: "To open a personal bank account in the UAE, you typically need your passport with valid visa, Emirates ID (for residents), proof of address (utility bill or rental contract), salary certificate or proof of income, and completed bank application forms. Some banks may require a minimum deposit ranging from AED 3,000-5,000. The process usually takes 2-5 working days."
      },
      {
        title: "Non-Resident Banking Options",
        content: "Non-residents can open bank accounts in the UAE with certain banks. The requirements usually include passport, proof of address from home country, bank reference letter, and a higher minimum deposit (typically AED 20,000-100,000). Some banks may require in-person visits, while others allow remote account opening for certain nationalities."
      },
      {
        title: "Corporate Account Documents",
        content: "For corporate accounts, you'll need the company's trade license, memorandum and articles of association, board resolution approving account opening, passport copies of all shareholders/directors, and additional KYC (Know Your Customer) documents. Free zone companies and offshore companies have slightly different requirements. The process typically takes 2-4 weeks."
      },
      {
        title: "Popular Banks for Expats and Investors",
        content: "Some popular banks for expats and investors in the UAE include Emirates NBD, ADCB, RAK Bank, HSBC, and Mashreq Bank. Each offers different advantages in terms of international transfers, multi-currency accounts, and investment services. Digital banks like NEO and Liv. are also gaining popularity for their streamlined services."
      },
      {
        title: "Islamic Banking Options",
        content: "The UAE offers numerous Islamic banking options that comply with Sharia principles. These include Dubai Islamic Bank, Abu Dhabi Islamic Bank, and Islamic divisions of conventional banks. Islamic accounts offer profit-sharing instead of interest and avoid investments in prohibited activities."
      }
    ],
    consultationText: "Would you like assistance with opening a bank account in the UAE? Our financial consultants can guide you through the process."
  },
  schools: {
    title: "Schools in UAE",
    subtitle: "Information about international and local schools in Dubai and Ras Al Khaimah",
    icon: <School className="h-12 w-12 text-luxury-gold mb-4" />,
    heroImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    sections: [
      {
        title: "British Curriculum Schools",
        content: "British curriculum schools follow the National Curriculum of England, offering GCSE and A-Level qualifications. Top options include Dubai College, Jumeirah College, and GEMS Wellington International. Annual fees range from AED 45,000 to AED 100,000. These schools typically have strong academic records and extracurricular programs."
      },
      {
        title: "American Curriculum Schools",
        content: "American curriculum schools follow the US education system, offering Advanced Placement (AP) courses and American High School Diplomas. Notable schools include the American School of Dubai, Dubai American Academy, and GEMS American Academy. Annual fees range from AED 50,000 to AED 90,000."
      },
      {
        title: "IB Schools",
        content: "International Baccalaureate (IB) schools offer globally recognized programs: Primary Years Programme (PYP), Middle Years Programme (MYP), and Diploma Programme (DP). Leading IB schools include Gems World Academy, Dubai International Academy, and Raffles World Academy. Annual fees range from AED 60,000 to AED 110,000."
      },
      {
        title: "Admission Process and Timeline",
        content: "The school admission process typically begins 6-12 months before the academic year starts (usually September for most international schools). It involves application submission, assessment tests, interviews, and payment of registration fees. Popular schools have waiting lists, so early application is recommended."
      },
      {
        title: "School Ratings and Inspections",
        content: "UAE schools are regularly inspected by the Knowledge and Human Development Authority (KHDA) in Dubai or the Ministry of Education. Schools receive ratings from Outstanding to Weak. These ratings, along with inspection reports, are publicly available and should be consulted when choosing a school."
      }
    ],
    consultationText: "Planning your child's education in the UAE? Our education consultants can help you find the right school and navigate the admission process."
  },
  universities: {
    title: "Universities in UAE",
    subtitle: "Explore higher education options in the UAE including international campuses",
    icon: <GraduationCap className="h-12 w-12 text-luxury-gold mb-4" />,
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    sections: [
      {
        title: "Top Universities in Dubai",
        content: "Dubai hosts branches of prestigious international universities such as Heriot-Watt University Dubai, University of Wollongong Dubai, and Middlesex University Dubai. Local institutions include the American University in Dubai and Zayed University. These universities offer a wide range of undergraduate and postgraduate programs across various disciplines."
      },
      {
        title: "Abu Dhabi Higher Education",
        content: "Abu Dhabi is home to NYU Abu Dhabi, Sorbonne University Abu Dhabi, and Khalifa University, offering world-class education with strong research capabilities. The UAE capital has invested heavily in creating an educational hub with state-of-the-art facilities and international faculty."
      },
      {
        title: "Free Zones for Education",
        content: "Dubai Knowledge Park and Dubai International Academic City are free zones dedicated to higher education, hosting over 30 international university branches. These zones offer special regulations that allow 100% foreign ownership and tax benefits to educational institutions."
      },
      {
        title: "Admission Requirements and Process",
        content: "Admission requirements vary by institution but typically include completed application forms, academic transcripts, standardized test scores (SAT, IELTS/TOEFL), personal statements, and letters of recommendation. International students need to verify their previous qualifications through the Ministry of Education's equivalency process."
      },
      {
        title: "Student Visas and Accommodation",
        content: "Universities sponsor student visas for enrolled international students. The visa process typically takes 2-3 weeks and requires a confirmed offer letter, passport copies, medical tests, and visa fees. Most universities offer on-campus accommodation or assist with finding off-campus housing options."
      }
    ],
    consultationText: "Interested in pursuing higher education in the UAE? Our education consultants can guide you through university selection and application processes."
  },
  offshore: {
    title: "Offshore Company Setup",
    subtitle: "Complete guide to establishing offshore companies in the UAE free zones",
    icon: <Globe className="h-12 w-12 text-luxury-gold mb-4" />,
    heroImage: "https://images.unsplash.com/photo-1444633275972-174d70bd1096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    sections: [
      {
        title: "Types of Offshore Companies in UAE",
        content: "The main offshore jurisdictions in the UAE are Jebel Ali Free Zone (JAFZA), Ras Al Khaimah International Corporate Centre (RAK ICC), and DMCC. Each offers different advantages in terms of cost, flexibility, and international recognition. Offshore companies are ideal for international business, asset protection, and investments."
      },
      {
        title: "Benefits of UAE Offshore Companies",
        content: "UAE offshore companies offer numerous benefits: 0% corporate and personal tax, 100% foreign ownership, no currency restrictions, complete privacy and confidentiality, no requirement for physical presence or office, minimal reporting requirements, and protection from political and economic instability in home countries."
      },
      {
        title: "Setup Process and Timeline",
        content: "The setup process involves name approval, document submission, due diligence checks, and license issuance. Required documents include passport copies of shareholders/directors, proof of address, bank reference letters, and business plan. The process typically takes 3-7 working days, with costs starting from AED 15,000 annually."
      },
      {
        title: "Banking for Offshore Companies",
        content: "Opening bank accounts for offshore companies has become more stringent due to global banking regulations. Banks require clear business purpose, detailed business plans, proof of business activities, and sometimes in-person meetings. Popular banking options include RAK Bank, Emirates NBD, and international banks with UAE presence."
      },
      {
        title: "Compliance and Renewal",
        content: "UAE offshore companies must comply with economic substance regulations if engaged in relevant activities. Annual renewal involves paying license fees and submitting updated KYC documents. Failure to renew can result in penalties and eventual strike-off of the company from the register."
      }
    ],
    consultationText: "Ready to establish your offshore company in the UAE? Our corporate specialists can handle the entire setup process for you."
  },
  legal: {
    title: "Legal Assistance",
    subtitle: "Legal services for property purchase, company formation, and residency matters",
    icon: <Scale className="h-12 w-12 text-luxury-gold mb-4" />,
    heroImage: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    sections: [
      {
        title: "Property Purchase Legal Support",
        content: "Our legal team provides comprehensive support for property transactions, including: title deed verification, SPA (Sale and Purchase Agreement) review and negotiation, handling escrow arrangements, representation during property registration (Oqood for off-plan or title deed for ready properties), and resolving any legal disputes related to property transactions."
      },
      {
        title: "Business Setup Documentation",
        content: "We provide expert legal assistance for company formation, including: preparation of memorandum and articles of association, shareholder agreements, trade license applications, corporate structuring advice, intellectual property registration, and employment contract drafting and review."
      },
      {
        title: "Residency Permit Applications",
        content: "Our legal experts can handle all types of residency permit applications including: investor visas based on property ownership, company establishment visas, family sponsorship visas, golden visas for qualified individuals, and assistance with documentation for medical tests and Emirates ID applications."
      },
      {
        title: "Contract Review and Drafting",
        content: "Our legal service includes comprehensive contract solutions: drafting and reviewing commercial contracts, lease agreements for residential and commercial properties, employment contracts compliant with UAE labor law, distributor and agency agreements, and non-disclosure and confidentiality agreements."
      },
      {
        title: "Dispute Resolution",
        content: "When conflicts arise, our legal team provides representation in: RERA (Real Estate Regulatory Agency) mediation for property disputes, arbitration proceedings under various rules (DIAC, DIFC-LCIA), local court proceedings in civil and commercial matters, and negotiation of settlement agreements to avoid lengthy litigation."
      }
    ],
    consultationText: "Need legal assistance with property, business, or residency matters? Schedule a consultation with our legal experts."
  },
  maintenance: {
    title: "Property Maintenance",
    subtitle: "Maintenance services and solutions for property owners in the UAE",
    icon: <Wrench className="h-12 w-12 text-luxury-gold mb-4" />,
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    sections: [
      {
        title: "Annual Maintenance Contracts (AMC)",
        content: "Our Annual Maintenance Contracts provide comprehensive property maintenance with regular inspections, preventive maintenance, and priority response to emergencies. AMCs typically cover AC servicing, plumbing, electrical systems, minor repairs, and periodic deep cleaning. Plans are customizable based on property size and requirements, with prices starting from AED 3,000 annually."
      },
      {
        title: "24/7 Emergency Services",
        content: "We offer round-the-clock emergency response for critical issues like water leaks, electrical failures, AC breakdowns, plumbing emergencies, and lock-outs. Our emergency team has an average response time of 60 minutes within Dubai and 90 minutes in other emirates. Emergency call-out fees start from AED 250, with additional charges for parts and extensive repairs."
      },
      {
        title: "HVAC System Servicing",
        content: "Our HVAC maintenance includes cleaning of filters, coils, and ducts, checking refrigerant levels, inspecting electrical connections, testing system performance, and calibrating thermostats. Regular HVAC maintenance improves energy efficiency, extends system lifespan, and ensures clean air quality. Basic AC servicing starts from AED 250 per unit."
      },
      {
        title: "Pool and Garden Maintenance",
        content: "Our outdoor maintenance services cover pool cleaning, chemical balancing, equipment checks, garden landscaping, irrigation system maintenance, pest control, and outdoor lighting maintenance. Regular pool maintenance starts from AED 500 monthly, while garden maintenance starts from AED 300 monthly depending on size and complexity."
      },
      {
        title: "Property Inspection Services",
        content: "We provide thorough property inspections for new purchases, off-plan handovers, tenant move-in/move-out, and periodic condition assessments. Our detailed reports include photographs, recommendations, and cost estimates for any required repairs. Inspection services start from AED 1,000 for apartments and AED 1,500 for villas."
      }
    ],
    consultationText: "Want to keep your property in perfect condition? Speak with our maintenance team about customized solutions."
  },
  "interior-design": {
    title: "Interior Design",
    subtitle: "Interior design and property upgrade services for investors and homeowners",
    icon: <Paintbrush className="h-12 w-12 text-luxury-gold mb-4" />,
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
    sections: [
      {
        title: "Full Home Design Services",
        content: "Our comprehensive interior design services include concept development, space planning, 3D visualization, material selection, furniture procurement, and project management. We create custom designs that reflect your personal style while maximizing functionality. Full design packages start from AED 100 per square foot, with flexible options for different budgets."
      },
      {
        title: "Furniture Packages for Investors",
        content: "We offer pre-designed furniture packages specifically for investment properties. These packages provide high-quality, durable furnishings that appeal to the rental market while maximizing your ROI. Options range from basic (AED 25,000 for a 1-bedroom), to premium (AED 45,000 for a 1-bedroom), with packages available for all property sizes."
      },
      {
        title: "Kitchen and Bathroom Renovation",
        content: "Our specialized renovation services for high-value areas include custom cabinetry, countertop installation, appliance upgrades, fixture replacement, lighting enhancements, and smart storage solutions. Kitchen renovations start from AED 35,000, while bathroom renovations start from AED 25,000, depending on size and materials selected."
      },
      {
        title: "Smart Home Integration",
        content: "Transform your property with integrated smart home technology including automated lighting, climate control, security systems, entertainment systems, and voice-controlled assistants. Our solutions can be retrofitted to existing properties or integrated during renovation. Basic smart home packages start from AED 15,000."
      },
      {
        title: "Upgrade Consultations",
        content: "If you're considering property upgrades to increase rental yield or resale value, our consultation service identifies the most cost-effective improvements with the highest ROI. We provide detailed recommendations, budget estimates, and implementation timelines. Property upgrade consultations are AED 1,500, redeemable against design services."
      }
    ],
    consultationText: "Ready to transform your property? Our interior design team is available for personalized consultations."
  },
  "short-term-rentals": {
    title: "Short Term Rentals",
    subtitle: "Guide to short-term rental regulations, management, and potential returns",
    icon: <Calendar className="h-12 w-12 text-luxury-gold mb-4" />,
    heroImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    sections: [
      {
        title: "Licensing Requirements",
        content: "In Dubai, short-term rentals require a license from the Department of Tourism and Commerce Marketing (DTCM). Requirements include: property ownership deed, NOC from developer/building management, passport copy, property photos, and payment of fees (starting from AED 1,020). Properties must meet specific standards for furnishings, safety features, and services."
      },
      {
        title: "Market Performance Data",
        content: "Dubai's short-term rental market shows strong performance with average occupancy rates of 70-85% annually. Average daily rates range from AED 500-800 for 1-bedroom apartments to AED 1,500-3,000 for luxury villas. Peak season (October-April) typically sees 30-40% higher rates than low season. Prime locations like Dubai Marina, Downtown, and Palm Jumeirah command premium rates."
      },
      {
        title: "Property Management Services",
        content: "Our full-service short-term rental management includes: guest communication, check-in/check-out handling, cleaning and maintenance, listing creation and optimization, pricing strategy, legal compliance, financial reporting, and 24/7 guest support. Management fees typically range from 15-25% of rental revenue, depending on service level."
      },
      {
        title: "Marketing and Listing Optimization",
        content: "Successful short-term rentals require presence on multiple platforms including Airbnb, Booking.com, VRBO, and specialized local platforms. Professional photography, compelling descriptions, competitive pricing, and excellent guest reviews are essential. Our marketing services ensure maximum visibility to potential guests."
      },
      {
        title: "Return on Investment Analysis",
        content: "Well-managed short-term rentals typically generate 8-12% annual ROI, compared to 5-7% for long-term rentals. Additional costs to consider include: management fees, platform commissions (3-5%), cleaning (AED 150-300 per turnover), utilities, internet, licensing, and maintenance. We provide detailed ROI projections based on your specific property."
      }
    ],
    consultationText: "Interested in maximizing returns through short-term rentals? Our property management experts can guide you through the process."
  },
  "long-term-rentals": {
    title: "Long Term Rentals",
    subtitle: "Everything you need to know about long-term property rentals in the UAE",
    icon: <Home className="h-12 w-12 text-luxury-gold mb-4" />,
    heroImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    sections: [
      {
        title: "Tenancy Contract Requirements",
        content: "Long-term rental contracts in the UAE are typically for 12 months and must be registered with Ejari (Dubai) or Tawtheeq (Abu Dhabi). Required documents include: landlord's title deed, both parties' passport copies and Emirates ID, and trade license (for commercial properties). Registration fees are approximately AED 220 for residential properties."
      },
      {
        title: "Landlord and Tenant Rights",
        content: "UAE rental laws provide comprehensive protection for both parties. Landlords can evict tenants for non-payment of rent, property damage, or if they wish to sell or use the property themselves (with 12 months' notice). Tenants are protected from arbitrary eviction and excessive rent increases. RERA (Real Estate Regulatory Agency) in Dubai provides mediation for disputes."
      },
      {
        title: "Security Deposits and Fees",
        content: "Standard security deposits are 5% of the annual rent for unfurnished properties and 10% for furnished properties. Additional fees may include: maintenance deposits, agency fees (typically 5% of annual rent), and utility connection fees. Deposits should be returned within 30-60 days after tenancy ends, less any deductions for damages or outstanding bills."
      },
      {
        title: "Rent Payment Structures",
        content: "Traditionally, rent in the UAE was paid with 1-4 post-dated checks annually, but more flexible options are becoming available. Some landlords now accept monthly payments or credit card arrangements. Rent can be inclusive or exclusive of maintenance fees, chiller charges, and utilities, so it's important to clarify these details before signing."
      },
      {
        title: "Property Management Services",
        content: "Our property management services for landlords include: tenant sourcing and screening, contract preparation and Ejari registration, rent collection, maintenance coordination, periodic inspections, annual renewals, and move-out processing. Management fees typically range from 5-8% of annual rent, providing hassle-free ownership and optimal returns."
      }
    ],
    consultationText: "Looking to invest in rental property or need help managing your existing properties? Book a consultation with our property management specialists."
  }
};

const UAEKnowHowDetail = () => {
  const { areaId } = useParams();
  const navigate = useNavigate();
  const { translate } = useLanguage();
  
  // Get content for the current category
  const content = areaId && categoryContent[areaId as keyof typeof categoryContent];
  
  if (!content) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{translate("Category not found")}</h2>
            <Button onClick={() => navigate("/uae-know-how")}>
              {translate("Back to UAE Know How")}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title={translate(content.title)}
          subtitle={translate(content.subtitle)}
          backgroundImage={content.heroImage}
          showCta={false}
        />
        
        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="luxury-container">
            <Button 
              variant="outline" 
              className="mb-8" 
              onClick={() => navigate("/uae-know-how")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {translate("Back to UAE Know How")}
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                  <div className="flex justify-center mb-6">
                    {content.icon}
                  </div>
                  <h1 className="text-3xl font-bold text-center mb-6">{translate(content.title)}</h1>
                  
                  <div className="space-y-8 mt-8">
                    {content.sections.map((section, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                        <h3 className="text-xl font-semibold mb-3 text-luxury-navy">{translate(section.title)}</h3>
                        <p className="text-gray-700 leading-relaxed">{translate(section.content)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Sidebar */}
              <div className="space-y-8">
                {/* Consultation CTA */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">{translate("Expert Consultation")}</h3>
                  <p className="text-gray-700 mb-4">{translate(content.consultationText)}</p>
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90" asChild>
                    <a href="/contact#consultation">{translate("Book a Consultation")}</a>
                  </Button>
                </div>
                
                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">{translate("Quick Inquiry")}</h3>
                  <EnhancedContactForm defaultInterest={areaId === "visa" || areaId === "offshore" || areaId === "legal" ? "company-setup" : "general"} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UAEKnowHowDetail;

