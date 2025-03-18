
import React from "react";
import { Building, Palmtree, Landmark, Home, Globe, Ship, Waves, Mountain } from "lucide-react";
import LocationCard from "./LocationCard";
import { useNavigate } from "react-router-dom";

const DubaiLocations = () => {
  const navigate = useNavigate();

  const handleViewDevelopments = (area: string) => {
    navigate(`/area/${area.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Building}
          title="Dubai Marina"
          imageUrl="https://www.dubai.it/en/wp-content/uploads/sites/142/dubai-marina-hd.jpg"
          description="One of Dubai's most iconic waterfront communities, featuring over 200 residential towers, a 7km promenade, and a vibrant lifestyle."
          propertyTypes="Apartments, Penthouses"
          averagePrice="AED 1,500 - 2,200/sqft"
          rentalYield="6-8%"
          established="2003"
          onViewDevelopments={() => handleViewDevelopments("Dubai Marina")}
        />
        
        <LocationCard 
          icon={Palmtree}
          title="Palm Jumeirah"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdsg5Y6Gl3nvunFZ7DJP3990WckCGtA-4fA&s"
          description="The world-famous man-made island shaped like a palm tree, featuring luxury villas, high-end apartments, and 5-star hotels."
          propertyTypes="Villas, Apartments, Penthouses"
          averagePrice="AED 2,500 - 4,000/sqft"
          rentalYield="4-6%"
          established="2001"
          onViewDevelopments={() => handleViewDevelopments("Palm Jumeirah")}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Landmark}
          title="Downtown Dubai"
          imageUrl="https://imagedelivery.net/cyTHrsLOsnLPkuSeNd2_9g/d2fc98c1-f3d0-4b85-5b0a-ad65370b7f00/public"
          description="Home to the iconic Burj Khalifa, Dubai Mall, and Dubai Fountain, Downtown is the prestigious central district of Dubai."
          propertyTypes="Apartments, Penthouses"
          averagePrice="AED 2,000 - 3,500/sqft"
          rentalYield="5-7%"
          established="2006"
          onViewDevelopments={() => handleViewDevelopments("Downtown Dubai")}
        />
        
        <LocationCard 
          icon={Home}
          title="Dubai Hills Estate"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryx7Q3PA0D1RiVs7NW7fSxVXsMqeOMQdOvg&s"
          description="A premium community developed by Emaar, featuring an 18-hole championship golf course, parks, and luxury villas and apartments."
          propertyTypes="Villas, Townhouses, Apartments"
          averagePrice="AED 1,400 - 2,200/sqft"
          rentalYield="5-7%"
          established="2014"
          onViewDevelopments={() => handleViewDevelopments("Dubai Hills Estate")}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Waves}
          title="Jumeirah Beach Residence (JBR)"
          imageUrl="https://focus.hidubai.com/content/images/2022/10/jbr.png"
          description="A 1.7 km beachfront community offering luxury apartments, retail outlets, and dining options with direct beach access."
          propertyTypes="Apartments, Penthouses"
          averagePrice="AED 1,600 - 2,400/sqft"
          rentalYield="6-8%"
          established="2007"
          onViewDevelopments={() => handleViewDevelopments("Jumeirah Beach Residence")}
        />
        
        <LocationCard 
          icon={Ship}
          title="Dubai Creek Harbour"
          imageUrl="https://cdn.dxbproperties.ae/media/seo_images_property/dubai_creek_harbour_thumbnail_1_1200.webp?width=1200&height=630&format=jpeg&quality=15"
          description="A new waterfront development set to become one of Dubai's most iconic areas, featuring the towering Dubai Creek Tower."
          propertyTypes="Apartments, Penthouses, Townhouses"
          averagePrice="AED 1,300 - 2,000/sqft"
          rentalYield="5-7%"
          established="2016"
          onViewDevelopments={() => handleViewDevelopments("Dubai Creek Harbour")}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LocationCard 
          icon={Building}
          title="Business Bay"
          imageUrl="https://www.visitdubai.com/-/media/images/leisure/detail-pages/explore-dubai/1-3-dubai-neighbourhoods-t34/dubai-neighborhood-business-bay.jpg"
          description="A business hub with a mix of commercial and residential properties, offering canal views and proximity to Downtown Dubai."
          propertyTypes="Apartments, Office Spaces"
          averagePrice="AED 1,300 - 2,000/sqft"
          rentalYield="6-8%"
          established="2005"
          onViewDevelopments={() => handleViewDevelopments("Business Bay")}
        />
        
        <LocationCard 
          icon={Mountain}
          title="Dubai Land"
          imageUrl="https://emirates.estate/uploads/images/2021-10/ad_5b184299f0dea4.49096784.jpg"
          description="A massive residential and entertainment development featuring theme parks, sports venues, and a variety of housing options."
          propertyTypes="Villas, Townhouses, Apartments"
          averagePrice="AED 900 - 1,400/sqft"
          rentalYield="7-9%"
          established="2005"
          onViewDevelopments={() => handleViewDevelopments("Dubai Land")}
        />
      </div>
    </div>
  );
};

export default DubaiLocations;
