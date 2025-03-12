
import { useState } from 'react';
import { useReveal } from '@/utils/animations';
import { cn } from '@/lib/utils';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const { ref, isVisible } = useReveal(0.1);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: 'apartment'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          phone: '',
          message: '',
          propertyType: 'apartment'
        });
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50/50">
      <div 
        ref={ref} 
        className={cn(
          "container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out-expo",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div>
              <div className="mb-8">
                <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded text-sm font-medium mb-4">
                  Get In Touch
                </span>
                <h2 className="text-heading mb-4">Contact Us</h2>
                <p className="text-body text-muted-foreground">
                  Interested in Dubai real estate? Our experts are ready to assist with your investment journey.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Your phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-foreground mb-1">
                        Property Interest
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formState.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                        <option value="penthouse">Penthouse</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Tell us about your requirements"
                      required
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full px-6 py-3 bg-primary text-primary-foreground rounded-md transition-all hover-lift flex items-center justify-center",
                        isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column - Contact Info & Map */}
            <div className="lg:pl-12">
              <div className="rounded-lg overflow-hidden shadow-luxe mb-8 h-[300px]">
                {/* Map placeholder - would be implemented with an actual map in production */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1548181459-00ce93150938?auto=format&fit=crop&q=80&w=1000" 
                    alt="Dubai Map" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-subheading mb-4">Contact Information</h3>
                  <p className="text-muted-foreground mb-5">
                    Visit our office or get in touch with our experts to discuss your real estate needs.
                  </p>
                </div>

                <div className="space-y-5">
                  <ContactInfoItem
                    icon={<MapPin className="h-5 w-5 text-primary" />}
                    label="Office Address"
                    value="Dubai Marina, JBR Walk, Tower B, Floor 25"
                  />
                  <ContactInfoItem
                    icon={<Phone className="h-5 w-5 text-primary" />}
                    label="Phone Number"
                    value="+971 4 123 4567"
                  />
                  <ContactInfoItem
                    icon={<Mail className="h-5 w-5 text-primary" />}
                    label="Email Address"
                    value="info@investdubaihomes.com"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-3">Office Hours</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Monday - Friday</div>
                    <div>9:00 AM - 6:00 PM</div>
                    <div>Saturday</div>
                    <div>10:00 AM - 4:00 PM</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ 
  icon, 
  label, 
  value 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string;
}) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mt-1">
      <div className="p-2 bg-primary/10 rounded-full">
        {icon}
      </div>
    </div>
    <div className="ml-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

export default ContactForm;
