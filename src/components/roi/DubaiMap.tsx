
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const DubaiMap = () => {
  const { translate } = useLanguage();
  
  // Dubai districts with their positions on the map
  const districts = [
    { name: "Dubai Marina", top: "55%", left: "15%", color: "bg-blue-500" },
    { name: "Palm Jumeirah", top: "45%", left: "23%", color: "bg-green-500" },
    { name: "Downtown Dubai", top: "40%", left: "40%", color: "bg-red-500" },
    { name: "Dubai Hills Estate", top: "30%", left: "50%", color: "bg-yellow-500" },
    { name: "Jumeirah Beach Residence", top: "50%", left: "13%", color: "bg-purple-500" },
    { name: "Dubai Creek Harbour", top: "35%", left: "65%", color: "bg-pink-500" },
    { name: "Business Bay", top: "45%", left: "45%", color: "bg-orange-500" },
    { name: "Dubai Land", top: "20%", left: "60%", color: "bg-teal-500" },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">{translate("Dubai Investment Map")}</h3>
      <div className="relative w-full" style={{ aspectRatio: "16/9", maxHeight: "500px" }}>
        {/* Base map image */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Dubai_satellietfoto.jpg/1200px-Dubai_satellietfoto.jpg" 
          alt="Dubai Map" 
          className="w-full h-full object-cover rounded-lg"
        />
        
        {/* Map overlay with gradient */}
        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
        
        {/* District markers */}
        {districts.map((district, index) => (
          <div 
            key={index}
            className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
            style={{ top: district.top, left: district.left }}
          >
            <div className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full ${district.color} border-2 border-white shadow-md`}></div>
              <div className="bg-white/80 px-2 py-1 rounded-md text-xs font-medium shadow-sm mt-1 whitespace-nowrap">
                {translate(district.name)}
              </div>
            </div>
          </div>
        ))}
        
        {/* Map legend */}
        <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-md shadow-md">
          <h4 className="text-sm font-semibold mb-1">{translate("Key Investment Areas")}</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {districts.map((district, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-2 h-2 rounded-full ${district.color} mr-1`}></div>
                <span>{translate(district.name)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mt-3">
        {translate("Map showing key investment locations in Dubai. Click on any area for more details.")}
      </p>
    </div>
  );
};

export default DubaiMap;
