
import { useReveal, useParallax } from '@/utils/animations';
import { cn } from '@/lib/utils';
import { TrendingUp, Building, Award, Users } from 'lucide-react';

const AboutDubai = () => {
  const { ref, isVisible } = useReveal(0.1);
  const parallaxRef = useParallax(0.15);

  return (
    <section id="about" className="section-padding overflow-hidden relative">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          ref={parallaxRef}
          className="w-full h-[130%] bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1582673345446-fa676af69738?auto=format&fit=crop&q=80&w=2000')"
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          ref={ref} 
          className={cn(
            "transition-all duration-1000 ease-out-expo",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded text-sm font-medium mb-4">
              Investment Destination
            </span>
            <h2 className="text-heading mb-4">Why Invest in Dubai</h2>
            <p className="text-body text-muted-foreground">
              Dubai offers one of the world's most attractive real estate investment environments, 
              combining tax benefits, high rental yields, and a secure investment framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="rounded-lg overflow-hidden shadow-luxe">
              <img 
                src="https://images.unsplash.com/photo-1546412414-e1885e51148b?auto=format&fit=crop&q=80&w=1000" 
                alt="Dubai Skyline" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out-expo"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-8">
              <h3 className="text-subheading">Dubai's Real Estate Market</h3>
              <p className="text-body">
                With its strategic location, world-class infrastructure, and business-friendly 
                environment, Dubai continues to attract global investors seeking strong 
                returns and capital appreciation.
              </p>
              
              <div className="space-y-6">
                <BenefitItem 
                  icon={<TrendingUp className="h-6 w-6 text-primary" />}
                  title="High ROI"
                  description="Dubai consistently offers rental yields of 6-10%, significantly higher than many global cities."
                />
                
                <BenefitItem 
                  icon={<Building className="h-6 w-6 text-primary" />}
                  title="World-Class Developments"
                  description="Innovative architecture and premium amenities define Dubai's prestigious developments."
                />
                
                <BenefitItem 
                  icon={<Award className="h-6 w-6 text-primary" />}
                  title="Tax Advantages"
                  description="Benefit from zero property taxes, income tax, and capital gains tax."
                />
                
                <BenefitItem 
                  icon={<Users className="h-6 w-6 text-primary" />}
                  title="Residency Options"
                  description="Property investment can qualify you for residency visas through Dubai's investment programs."
                />
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center font-medium text-primary hover:underline"
              >
                Download our Dubai Investment Guide
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-24">
            <StatCard value="9.1%" label="Average Rental Yield" />
            <StatCard value="31%" label="Property Value Growth (5Y)" />
            <StatCard value="0%" label="Property & Income Tax" />
            <StatCard value="3.5M+" label="Expatriate Population" />
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 mt-1">
      <div className="p-2 bg-primary/10 rounded-full">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="font-medium text-lg mb-1">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-soft text-center hover-lift">
    <p className="font-serif text-4xl text-primary mb-2">{value}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

export default AboutDubai;
