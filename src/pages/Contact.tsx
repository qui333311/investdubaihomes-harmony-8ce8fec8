
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Linkedin, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";

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
        
        {/* Contact Form Section - Now at the top */}
        <section className="py-12 bg-gray-50">
          <div className="luxury-container">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">{translate("Send Us a Message")}</h2>
              <ContactForm />
            </div>
            
            {/* Map Section */}
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] mb-12">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2042407294456!2d55.282264275971275!3d25.18470828389628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25fd4d%3A0x683fec19fc5cc068!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1714059122392!5m2!1sen!2sae"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            {/* Contact Information moved to the bottom */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-luxury-gold mr-2" /> {translate("Our Location")}
                </h3>
                <p className="text-gray-600 pl-7">
                  Business Bay<br />
                  Dubai, United Arab Emirates
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Phone className="h-5 w-5 text-luxury-gold mr-2" /> {translate("Call Us")}
                </h3>
                <p className="text-gray-600 pl-7">
                  +971 58 599 9458<br />
                  +971 4 566 7890
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Mail className="h-5 w-5 text-luxury-gold mr-2" /> {translate("Email Us")}
                </h3>
                <p className="text-gray-600 pl-7">
                  contact@memydubai.com<br />
                  sales@memydubai.com
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">{translate("Connect With Us")}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-4">{translate("Instant Messaging")}</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90">
                      <MessageCircle className="mr-2 h-5 w-5" /> {translate("WhatsApp")}
                    </Button>
                    
                    <Button size="lg" className="bg-[#0088cc] hover:bg-[#0088cc]/90">
                      <MessageCircle className="mr-2 h-5 w-5" /> {translate("Telegram")}
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-4">{translate("Social Media")}</h4>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                      <Youtube className="h-6 w-6" />
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
