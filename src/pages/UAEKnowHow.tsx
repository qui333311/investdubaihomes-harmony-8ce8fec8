
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAndIntro from "@/components/uae-know-how/HeroAndIntro";
import LocationTabs from "@/components/uae-know-how/LocationTabs";
import FactsAndFigures from "@/components/uae-know-how/FactsAndFigures";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Briefcase, 
  Building, 
  GraduationCap, 
  School, 
  Banknote, 
  Passport, 
  GanttChart,
  PaintBucket, 
  PaintRoller, 
  CalendarDays,
  Calendar, 
  Scale,
  Mail
} from "lucide-react";

const UAEKnowHow = () => {
  const { translate } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  
  const handleCategoryClick = (category: string) => {
    // In a real application, this would navigate to the specific category page
    console.log(`Navigating to category: ${category}`);
    // For now, just navigate to the area detail page as a placeholder
    navigate("/uae-know-how/category");
  };
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      // In a real application, this would send the email to a backend service
      console.log(`Subscribing email: ${email}`);
      
      toast({
        title: translate("Thanks for subscribing!"),
        description: translate("You'll receive our latest UAE market insights.")
      });
      
      setEmail("");
    }
  };
  
  const categories = [
    { 
      title: "Visa Information", 
      icon: Passport, 
      description: "Learn about visa types, requirements and benefits for UAE residency." 
    },
    { 
      title: "Bank Account Opening", 
      icon: Banknote, 
      description: "Guide to opening personal and business bank accounts in the UAE." 
    },
    { 
      title: "Schools", 
      icon: School, 
      description: "Information about international and local schools for families." 
    },
    { 
      title: "Universities", 
      icon: GraduationCap, 
      description: "Higher education options and opportunities in the UAE." 
    },
    { 
      title: "Offshore Company Setup", 
      icon: Briefcase, 
      description: "Process and benefits of establishing offshore companies in the UAE." 
    },
    { 
      title: "Legal Assistance", 
      icon: Scale, 
      description: "Legal services and support for property buyers and investors." 
    },
    { 
      title: "Property Maintenance", 
      icon: GanttChart, 
      description: "Maintenance services and solutions for property owners." 
    },
    { 
      title: "Interior Design", 
      icon: PaintBucket, 
      description: "Interior design and property upgrading services in Dubai & RAK." 
    },
    { 
      title: "Short Term Rentals", 
      icon: CalendarDays, 
      description: "Guide to managing and profiting from short-term rental properties." 
    },
    { 
      title: "Long Term Rentals", 
      icon: Calendar, 
      description: "Long-term rental market information and property management." 
    },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroAndIntro />
        
        <section className="section-padding bg-white">
          <div className="luxury-container mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">{translate("Key Investment Locations")}</h2>
              <p className="text-gray-600 max-w-3xl">
                {translate("Explore the most promising investment areas in Dubai and Ras Al Khaimah. Each location offers unique advantages for property investors.")}
              </p>
            </div>
            <div className="gold-separator mt-4" />
          </div>
          
          <LocationTabs />
        </section>
        
        <section className="section-padding bg-gray-50">
          <div className="luxury-container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">{translate("UAE Know How Categories")}</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                {translate("Comprehensive guides and information for investors and residents in the UAE")}
              </p>
              <div className="gold-separator mx-auto mt-4" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-shadow cursor-pointer bg-white"
                  onClick={() => handleCategoryClick(category.title)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <category.icon className="h-6 w-6 text-luxury-gold" />
                      <CardTitle className="text-xl">{translate(category.title)}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {translate(category.description)}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-luxury-navy text-white">
          <div className="luxury-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <Mail className="h-8 w-8 mr-3 text-luxury-gold" />
                  <h2 className="text-2xl font-bold">{translate("Subscribe to Updates")}</h2>
                </div>
                <p className="mb-6">
                  {translate("Get UAE market insights delivered to your inbox")}
                </p>
              </div>
              
              <div className="md:w-1/2">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder={translate("Your Email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 placeholder:text-white/60 text-white"
                    required
                  />
                  <Button type="submit" className="bg-luxury-gold hover:bg-luxury-gold/90 text-white">
                    {translate("Subscribe")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <FactsAndFigures />
      </main>
      
      <Footer />
    </div>
  );
};

export default UAEKnowHow;
