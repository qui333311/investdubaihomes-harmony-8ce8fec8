
import { useState } from 'react';
import { useReveal } from '@/utils/animations';
import PropertyCard from './PropertyCard';
import { cn } from '@/lib/utils';

// Mock property data
const properties = [
  {
    id: "p1",
    title: "Luxury Penthouse with Sky Terrace",
    price: "$3,500,000",
    location: "Downtown Dubai",
    bedrooms: 4,
    bathrooms: 5,
    area: 4200,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1000",
    featured: true
  },
  {
    id: "p2",
    title: "Marina Waterfront Apartment",
    price: "$1,200,000",
    location: "Dubai Marina",
    bedrooms: 2,
    bathrooms: 2.5,
    area: 1800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "p3",
    title: "Palm Jumeirah Villa",
    price: "$5,900,000",
    location: "Palm Jumeirah",
    bedrooms: 5,
    bathrooms: 6,
    area: 7500,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "p4",
    title: "Modern Townhouse in Dubai Hills",
    price: "$2,100,000",
    location: "Dubai Hills Estate",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3200,
    image: "https://images.unsplash.com/photo-1600566753376-12c4724b1e5d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "p5",
    title: "Business Bay Executive Apartment",
    price: "$950,000",
    location: "Business Bay",
    bedrooms: 1,
    bathrooms: 1.5,
    area: 1100,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000"
  }
];

// Filter options
const categories = [
  { value: "all", label: "All Properties" },
  { value: "apartment", label: "Apartments" },
  { value: "villa", label: "Villas" },
  { value: "penthouse", label: "Penthouses" },
  { value: "townhouse", label: "Townhouses" }
];

const FeaturedProperties = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref, isVisible } = useReveal(0.1);

  // In a real app, we would filter properties based on category
  const filteredProperties = properties;

  return (
    <section id="properties" className="section-padding bg-gray-50/50">
      <div 
        ref={ref} 
        className={cn(
          "container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out-expo",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded text-sm font-medium mb-4">
            Exclusive Listings
          </span>
          <h2 className="text-heading mb-4">Featured Properties</h2>
          <p className="text-body text-muted-foreground">
            Discover our hand-picked selection of Dubai's most prestigious properties,
            offering the perfect blend of luxury, location, and investment potential.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-muted-foreground hover:bg-gray-100"
              )}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md transition-all hover-lift">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
