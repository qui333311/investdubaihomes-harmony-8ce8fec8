import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropertyProps } from "@/components/PropertyCard";
import { MapPin, Building, Bed, Bath, Home, Calendar, ArrowLeft, ArrowRight, Phone, Mail, Percent, ChevronLeft } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useLanguage } from "@/contexts/LanguageContext";

const propertyData: Record<string, PropertyProps> = {
  "prop1": {
    id: "prop1",
    title: "Luxury Apartment in Dubai Marina",
    location: "Dubai Marina",
    price: 2500000,
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2.5,
    area: 1500,
    roi: 7.2,
    imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    status: "ready",
  },
  "prop2": {
    id: "prop2",
    title: "Beachfront Villa on Palm Jumeirah",
    location: "Palm Jumeirah",
    price: 15000000,
    type: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    area: 7000,
    roi: 5.8,
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    status: "ready",
  },
  "prop3": {
    id: "prop3",
    title: "Off-Plan Apartment in Downtown Dubai",
    location: "Downtown Dubai",
    price: 1800000,
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1.5,
    area: 950,
    roi: 9.1,
    imageUrl: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    status: "offplan",
  },
  "prop4": {
    id: "prop4",
    title: "Penthouse in Downtown Dubai",
    location: "Downtown Dubai",
    price: 7800000,
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 4,
    area: 3200,
    roi: 6.5,
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    status: "ready",
  },
  "prop5": {
    id: "prop5",
    title: "Off-Plan Villa in Dubai Hills",
    location: "Dubai Hills",
    price: 5500000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 4.5,
    area: 3800,
    roi: 7.8,
    imageUrl: "https://images.unsplash.com/photo-1604014056470-831f2f1bcd4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    status: "offplan",
  },
  "prop6": {
    id: "prop6",
    title: "Luxury Villa in Ras Al Khaimah",
    location: "Ras Al Khaimah",
    price: 3900000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 5,
    area: 4200,
    roi: 8.2,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    status: "ready",
  },
};

const extendedPropertyData: Record<string, {
  description: string;
  features: string[];
  paymentPlan?: {
    downPayment: number;
    installments: {
      percentage: number;
      milestone: string;
    }[];
  };
  developer: string;
  completionDate?: string;
  nearbyPlaces: string[];
  propertyImages: string[];
}> = {
  "prop1": {
    description: "Experience luxury living in this beautifully designed apartment in Dubai Marina. With breathtaking views of the marina and the sea, this property offers an unparalleled lifestyle in one of Dubai's most sought-after neighborhoods. The apartment features high-end finishes, spacious living areas, and access to world-class amenities.",
    features: ["Floor-to-ceiling windows", "Smart home technology", "Private balcony", "Marble flooring", "Custom kitchen cabinets", "Walk-in closets", "Maid's room"],
    developer: "Emaar Properties",
    nearbyPlaces: ["Dubai Marina Mall", "JBR Beach", "The Walk", "Dubai Metro Station", "Marina Yacht Club"],
    propertyImages: [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  "prop2": {
    description: "This magnificent beachfront villa on Palm Jumeirah offers an exclusive lifestyle with direct access to a private beach. The property features panoramic sea views, expansive living spaces, and the finest materials and craftsmanship throughout. Perfect for those seeking the ultimate luxury lifestyle in Dubai's most prestigious address.",
    features: ["Private beach access", "Infinity pool", "Home theater", "Smart home system", "Driver's room", "Private gym", "Wine cellar", "Landscaped garden"],
    developer: "Nakheel",
    nearbyPlaces: ["Atlantis The Palm", "The Pointe", "Palm West Beach", "Nakheel Mall", "One&Only The Palm"],
    propertyImages: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1581974206967-93856b25aa13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  "prop3": {
    description: "Invest in this off-plan apartment in the heart of Downtown Dubai. With thoughtful design and premium finishes, this residence offers the perfect blend of comfort and convenience. Located within walking distance of major attractions and with exceptional facilities, this property presents an excellent investment opportunity.",
    features: ["Burj Khalifa views", "Contemporary design", "Premium appliances", "Balcony", "Built-in wardrobes", "Floor-to-ceiling windows"],
    paymentPlan: {
      downPayment: 20,
      installments: [
        { percentage: 30, milestone: "Construction milestone (30%)" },
        { percentage: 30, milestone: "Construction milestone (60%)" },
        { percentage: 20, milestone: "Completion" }
      ]
    },
    developer: "Emaar Properties",
    completionDate: "Q4 2024",
    nearbyPlaces: ["Burj Khalifa", "Dubai Mall", "Dubai Fountain", "Dubai Opera", "Souk Al Bahar"],
    propertyImages: [
      "https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  "prop4": {
    description: "This stunning penthouse in Downtown Dubai offers the ultimate in luxury living. With expansive living spaces, high ceilings, and panoramic views of Dubai's iconic skyline, this residence represents the pinnacle of urban sophistication. Exceptional finishes and attention to detail are evident throughout this exceptional property.",
    features: ["Panoramic city views", "Private terrace", "Designer kitchen", "Italian marble flooring", "Double-height ceilings", "Home automation system", "Private elevator access"],
    developer: "DAMAC Properties",
    nearbyPlaces: ["Dubai Mall", "Burj Khalifa", "Business Bay", "DIFC", "City Walk"],
    propertyImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  "prop5": {
    description: "This off-plan villa in Dubai Hills offers the perfect blend of luxury and comfort in one of Dubai's most prestigious communities. With spacious interiors, premium finishes, and beautiful landscaped gardens, this property provides an exceptional living experience for families. The development boasts world-class amenities and is surrounded by lush greenery.",
    features: ["Private garden", "Swimming pool", "Smart home features", "Premium finishes", "Family living areas", "Guest suite", "Covered parking"],
    paymentPlan: {
      downPayment: 25,
      installments: [
        { percentage: 25, milestone: "Foundation completion" },
        { percentage: 25, milestone: "Structure completion" },
        { percentage: 25, milestone: "Handover" }
      ]
    },
    developer: "Emaar Properties",
    completionDate: "Q2 2025",
    nearbyPlaces: ["Dubai Hills Mall", "Dubai Hills Golf Club", "Dubai Hills Park", "International schools", "Healthcare facilities"],
    propertyImages: [
      "https://images.unsplash.com/photo-1604014056470-831f2f1bcd4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  "prop6": {
    description: "Discover tranquil luxury in this exquisite villa in Ras Al Khaimah. Set against the backdrop of the majestic Hajar Mountains and the Arabian Gulf, this property offers a serene retreat with all the amenities of modern living. The spacious layout and premium finishes make this an ideal home for families seeking comfort and exclusivity.",
    features: ["Mountain views", "Private pool", "Outdoor entertaining area", "High ceilings", "Modern design", "Landscaped garden", "BBQ area"],
    developer: "RAK Properties",
    nearbyPlaces: ["Al Hamra Mall", "Al Hamra Golf Club", "Waldorf Astoria", "RAK Beach", "Jebel Jais"],
    propertyImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    ]
  }
};

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = id ? propertyData[id] : null;
  const extendedInfo = id ? extendedPropertyData[id] : null;
  const { formatPrice, currentCurrency } = useCurrency();
  const { translate } = useLanguage();
  
  if (!property || !extendedInfo) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="luxury-container py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">{translate("Property Not Found")}</h1>
            <p className="mb-8">{translate("The property you are looking for does not exist or has been removed.")}</p>
            <Button asChild>
              <Link to="/properties">
                <ChevronLeft className="mr-2 h-4 w-4" />
                {translate("Back to Properties")}
              </Link>
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
      
      <main className="flex-grow pt-20">
        <div className="bg-gray-100 py-4">
          <div className="luxury-container">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/properties">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  {translate("Back to Properties")}
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <Link to={`/properties/${Number(id) > 1 ? `prop${Number(id?.replace('prop', '')) - 1}` : 'prop6'}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {translate("Previous")}
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <Link to={`/properties/${Number(id?.replace('prop', '')) < 6 ? `prop${Number(id?.replace('prop', '')) + 1}` : 'prop1'}`}>
                    {translate("Next")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <section className="luxury-container py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-3xl font-bold text-luxury-gold">
                {formatPrice(property.price)}
                <span className="text-xs ml-1 text-gray-500">
                  {currentCurrency.code !== "AED" && `(${currentCurrency.code})`}
                </span>
              </p>
              <Badge className={`${property.status === "ready" ? "bg-green-600" : "bg-luxury-gold"}`}>
                {property.status === "ready" ? translate("Ready to Move") : translate("Off-Plan")}
              </Badge>
            </div>
          </div>
        </section>
        
        <section className="luxury-container pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 h-96">
              <img 
                src={extendedInfo.propertyImages[0]} 
                alt={property.title} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="h-[11rem]">
                <img 
                  src={extendedInfo.propertyImages[1]} 
                  alt={`${property.title} interior`} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-[11rem]">
                <img 
                  src={extendedInfo.propertyImages[2]} 
                  alt={`${property.title} another view`} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="luxury-container pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">{translate("Overview")}</TabsTrigger>
                  <TabsTrigger value="features">{translate("Features")}</TabsTrigger>
                  {property.status === "offplan" && (
                    <TabsTrigger value="payment">{translate("Payment Plan")}</TabsTrigger>
                  )}
                  {property.status === "ready" && (
                    <TabsTrigger value="roi">{translate("ROI Analysis")}</TabsTrigger>
                  )}
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 mb-6">
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{translate("Type")}</span>
                          <span className="font-medium flex items-center">
                            <Building className="h-4 w-4 mr-1 text-luxury-navy" />
                            {property.type}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{translate("Bedrooms")}</span>
                          <span className="font-medium flex items-center">
                            <Bed className="h-4 w-4 mr-1 text-luxury-navy" />
                            {property.bedrooms}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{translate("Bathrooms")}</span>
                          <span className="font-medium flex items-center">
                            <Bath className="h-4 w-4 mr-1 text-luxury-navy" />
                            {property.bathrooms}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{translate("Area")}</span>
                          <span className="font-medium flex items-center">
                            <Home className="h-4 w-4 mr-1 text-luxury-navy" />
                            {property.area} sqft
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{translate("Developer")}</span>
                          <span className="font-medium">{extendedInfo.developer}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{translate("ROI")}</span>
                          <span className="font-medium flex items-center">
                            <Percent className="h-4 w-4 mr-1 text-luxury-navy" />
                            {property.roi}%
                          </span>
                        </div>
                        {extendedInfo.completionDate && (
                          <div className="flex flex-col">
                            <span className="text-muted-foreground text-sm">{translate("Completion")}</span>
                            <span className="font-medium flex items-center">
                              <Calendar className="h-4 w-4 mr-1 text-luxury-navy" />
                              {extendedInfo.completionDate}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">{translate("Description")}</h3>
                        <p className="text-muted-foreground">
                          {extendedInfo.description}
                        </p>
                        
                        <h3 className="text-lg font-medium pt-4">{translate("Nearby Places")}</h3>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {extendedInfo.nearbyPlaces.map((place, index) => (
                            <li key={index}>{place}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="features" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-4">{translate("Key Features")}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {extendedInfo.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-luxury-gold mr-2"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {property.status === "offplan" && extendedInfo.paymentPlan && (
                  <TabsContent value="payment" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-medium mb-4">{translate("Payment Plan")}</h3>
                        <div className="space-y-4">
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{translate("Down Payment")}</span>
                              <span className="text-luxury-gold font-bold">{extendedInfo.paymentPlan.downPayment}%</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {formatPrice(property.price * extendedInfo.paymentPlan.downPayment / 100)}
                            </p>
                          </div>
                          
                          {extendedInfo.paymentPlan.installments.map((installment, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{translate(installment.milestone)}</span>
                                <span className="text-luxury-gold font-bold">{installment.percentage}%</span>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {formatPrice(property.price * installment.percentage / 100)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )}
                
                {property.status === "ready" && (
                  <TabsContent value="roi" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-medium mb-4">{translate("Investment Analysis")}</h3>
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-100 p-4 rounded-lg text-center">
                              <p className="text-sm text-muted-foreground">{translate("Annual ROI")}</p>
                              <p className="text-2xl font-bold text-luxury-gold">{property.roi}%</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg text-center">
                              <p className="text-sm text-muted-foreground">{translate("Est. Annual Income")}</p>
                              <p className="text-2xl font-bold text-luxury-navy">
                                {formatPrice(Math.round(property.price * property.roi / 100))}
                              </p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg text-center">
                              <p className="text-sm text-muted-foreground">{translate("Est. Monthly Rent")}</p>
                              <p className="text-2xl font-bold text-luxury-navy">
                                {formatPrice(Math.round(property.price * property.roi / 100 / 12))}
                              </p>
                            </div>
                          </div>
                          
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground">{translate("Yearly Service Charge")}</p>
                            <p className="text-xl font-bold text-luxury-navy mt-1">
                              {formatPrice(Math.round(property.price * 0.01))}
                            </p>
                          </div>
                          
                          <div className="bg-luxury-navy/10 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">{translate("Investment Advantages")}</h4>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                              <li>{translate("0% Property Tax")}</li>
                              <li>{translate("0% Income Tax on Rental Income")}</li>
                              <li>{translate("Strong Tenant Demand in")} {property.location}</li>
                              <li>{translate("High Capital Appreciation Potential")}</li>
                              <li>{translate("Eligible for Residence Visa")}</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )}
              </Tabs>
            </div>
            
            <div>
              <Card className="bg-white shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">{translate("Schedule a Viewing")}</h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                      <Phone className="mr-2 h-4 w-4" />
                      {translate("Schedule Viewing")}
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      {translate("Request Information")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">{translate("Similar Properties")}</h3>
                <div className="space-y-4">
                  {Object.values(propertyData)
                    .filter(p => p.id !== property.id && p.type === property.type)
                    .slice(0, 2)
                    .map(p => (
                      <Link key={p.id} to={`/properties/${p.id}`}>
                        <div className="flex space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <img
                            src={p.imageUrl}
                            alt={p.title}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium line-clamp-1">{p.title}</h4>
                            <p className="text-sm text-muted-foreground">{p.location}</p>
                            <p className="text-luxury-gold font-medium">{formatPrice(p.price)}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-luxury-navy text-white py-12">
          <div className="luxury-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{translate("Ready to invest in Dubai real estate?")}</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {translate("Our team of experts is ready to help you find the perfect property investment opportunity.")}
            </p>
            <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
              {translate("Book a Consultation")}
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
