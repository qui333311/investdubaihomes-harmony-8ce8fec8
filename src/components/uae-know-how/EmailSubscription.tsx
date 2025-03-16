
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const EmailSubscription = () => {
  const { translate } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send an API request to your backend
      // Example with fetch:
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     email: email,
      //     listName: "UAE Market Insights"
      //   })
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubscribed(true);
      setEmail("");
      
      toast({
        title: translate("Thanks for subscribing!"),
        description: translate("You'll receive our latest UAE market insights."),
      });
    } catch (error) {
      console.error("Error subscribing:", error);
      toast({
        title: translate("Error"),
        description: translate("There was a problem with your subscription. Please try again."),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="luxury-container">
        <div className="bg-gradient-to-r from-luxury-navy to-[#0d3659] rounded-xl p-8 md:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/10 p-5 rounded-full">
                <Mail className="h-12 w-12 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {translate("Subscribe to Updates")}
                </h3>
                <p className="text-gray-200 mb-6">
                  {translate("Get UAE market insights delivered to your inbox")}
                </p>
                
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder={translate("Your Email")}
                      className="bg-white/20 text-white placeholder:text-gray-300 border-0 focus-visible:ring-2 focus-visible:ring-luxury-gold"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-luxury-gold hover:bg-luxury-gold/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "..." : translate("Subscribe")}
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="h-5 w-5 text-luxury-gold" />
                    <span>{translate("Thanks for subscribing!")}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
