
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Linkedin, Instagram, Twitter, Youtube, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import EnhancedContactForm from "@/components/EnhancedContactForm";

const Contact = () => {
  const { translate } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title={translate("Contact Us")}
          subtitle={translate("We're here to help you with your Dubai property investment journey. Get in touch with our experts today.")}
          videoUrl="https://player.vimeo.com/external/477941605.sd.mp4?s=3c99fe958315fa9fb3adac0af48e9bef53fe9905&profile_id=164&oauth2_token_id=57447761"
          backgroundImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          showCta={false}
        />
        
        {/* Main contact section with split layout */}
        <section className="py-16 bg-gray-50">
          <div className="luxury-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Contact form */}
              <div className="bg-white rounded-xl shadow-xl p-8">
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-luxury-gold mb-4">
                    <Calendar className="h-6 w-6" />
                    <h2 className="text-2xl font-bold">{translate("Book a Consultation")}</h2>
                  </div>
                  <p className="text-gray-600">
                    {translate("Fill out the form below to schedule a personalized consultation with our property or investment experts.")}
                  </p>
                </div>
                
                <EnhancedContactForm />
              </div>
              
              {/* Right side - Contact information and map */}
              <div className="space-y-10">
                <div className="bg-white rounded-xl shadow-xl p-8">
                  <h3 className="text-xl font-bold mb-6">{translate("Contact Information")}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-gray-100 rounded-full p-3">
                        <MapPin className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{translate("Office Address")}</h4>
                        <p className="text-gray-600">
                          Marina Plaza, Dubai Marina<br />
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="bg-gray-100 rounded-full p-3">
                        <Phone className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{translate("Call Us")}</h4>
                        <p className="text-gray-600">
                          +971 50 123 4567<br />
                          +971 4 123 4567
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="bg-gray-100 rounded-full p-3">
                        <Mail className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{translate("Email Us")}</h4>
                        <p className="text-gray-600">
                          info@memydubai.com<br />
                          sales@memydubai.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-xl h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1867105621236!2d55.13459287596828!3d25.076993077812768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46d7c!2sDubai%20Marina!5e0!3m2!1sen!2sae!4v1697106781320!5m2!1sen!2sae" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                {/* Social media */}
                <div className="bg-white rounded-xl shadow-xl p-8">
                  <h3 className="text-xl font-bold mb-6">{translate("Connect With Us")}</h3>
                  
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                      <Youtube className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                      <MessageCircle className="h-5 w-5" />
                    </a>
                  </div>
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

export default Contact;
