
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Upload, 
  Building2, 
  Bed, 
  Bath, 
  SquareFoot, 
  DollarSign, 
  Map, 
  BadgeInfo, 
  Tag, 
  ImagePlus 
} from "lucide-react";

const PropertyUpload = () => {
  const { toast } = useToast();
  const { translate } = useLanguage();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  
  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    city: "dubai", // Default to Dubai
    type: "apartment", // Default to Apartment
    bedrooms: "",
    bathrooms: "",
    area: "",
    status: "for-sale", // Default to For Sale
    featured: false,
    amenities: [] as string[],
    roi: "", // Return on Investment
  });

  const amenitiesList = [
    "Pool",
    "Gym",
    "Parking",
    "Security",
    "Balcony",
    "Sea View",
    "Children's Play Area",
    "Concierge Service",
    "Smart Home",
    "Jacuzzi"
  ];
  
  const [selectedAmenities, setSelectedAmenities] = useState<Record<string, boolean>>({});
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPropertyData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setPropertyData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSwitchChange = (name: string, checked: boolean) => {
    setPropertyData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities(prev => {
      const newState = { ...prev, [amenity]: !prev[amenity] };
      
      // Update the amenities array in propertyData
      const updatedAmenities = Object.keys(newState).filter(key => newState[key]);
      setPropertyData(prev => ({ ...prev, amenities: updatedAmenities }));
      
      return newState;
    });
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      
      // Add new files to the existing array
      setImages(prev => [...prev, ...newFiles]);
      
      // Create preview URLs for the new files
      const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
      setImagePreviewUrls(prev => [...prev, ...newPreviewUrls]);
    }
  };
  
  const removeImage = (index: number) => {
    // Remove the image and its preview URL
    setImages(prev => prev.filter((_, i) => i !== index));
    
    // Revoke the object URL to free memory
    URL.revokeObjectURL(imagePreviewUrls[index]);
    setImagePreviewUrls(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate the form data here
    if (!propertyData.title || !propertyData.price || !propertyData.location || images.length === 0) {
      toast({
        title: translate("Missing Information"),
        description: translate("Please fill in all required fields and upload at least one image."),
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    // Create a FormData object to handle file uploads
    const formData = new FormData();
    
    // Append property data
    Object.entries(propertyData).forEach(([key, value]) => {
      if (key === 'amenities') {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value.toString());
      }
    });
    
    // Append images
    images.forEach(image => {
      formData.append('images', image);
    });
    
    // Simulate API call for uploading property
    console.log("Property data to be submitted:", propertyData);
    console.log("Images to be uploaded:", images);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: translate("Property Uploaded"),
        description: translate("The property has been successfully added to the database."),
      });
      
      // Reset form
      setPropertyData({
        title: "",
        description: "",
        price: "",
        location: "",
        city: "dubai",
        type: "apartment",
        bedrooms: "",
        bathrooms: "",
        area: "",
        status: "for-sale",
        featured: false,
        amenities: [],
        roi: "",
      });
      
      // Clear images
      imagePreviewUrls.forEach(url => URL.revokeObjectURL(url));
      setImages([]);
      setImagePreviewUrls([]);
      setSelectedAmenities({});
    }, 2000);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-20">
        <div className="luxury-container max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-luxury-gold/10 rounded-full">
                <Building2 className="h-6 w-6 text-luxury-gold" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{translate("Property Upload")}</h1>
                <p className="text-gray-600">{translate("Add new properties to the database")}</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <BadgeInfo className="h-5 w-5 text-luxury-gold" />
                  {translate("Basic Information")}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">{translate("Property Title")} *</Label>
                    <Input
                      id="title"
                      name="title"
                      value={propertyData.title}
                      onChange={handleInputChange}
                      placeholder={translate("Luxury Apartment with Sea View")}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="price">{translate("Price (AED)")} *</Label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      value={propertyData.price}
                      onChange={handleInputChange}
                      placeholder="1,500,000"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">{translate("Description")}</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={propertyData.description}
                    onChange={handleInputChange}
                    placeholder={translate("Detailed description of the property...")}
                    rows={4}
                  />
                </div>
              </div>
              
              {/* Location */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Map className="h-5 w-5 text-luxury-gold" />
                  {translate("Location")}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">{translate("Address/Area")} *</Label>
                    <Input
                      id="location"
                      name="location"
                      value={propertyData.location}
                      onChange={handleInputChange}
                      placeholder={translate("Dubai Marina")}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="city">{translate("City")}</Label>
                    <Select
                      value={propertyData.city}
                      onValueChange={(value) => handleSelectChange("city", value)}
                    >
                      <SelectTrigger id="city">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dubai">{translate("Dubai")}</SelectItem>
                        <SelectItem value="rak">{translate("Ras Al Khaimah")}</SelectItem>
                        <SelectItem value="abudhabi">{translate("Abu Dhabi")}</SelectItem>
                        <SelectItem value="sharjah">{translate("Sharjah")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              {/* Property Details */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <SquareFoot className="h-5 w-5 text-luxury-gold" />
                  {translate("Property Details")}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="type">{translate("Property Type")}</Label>
                    <Select
                      value={propertyData.type}
                      onValueChange={(value) => handleSelectChange("type", value)}
                    >
                      <SelectTrigger id="type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">{translate("Apartment")}</SelectItem>
                        <SelectItem value="villa">{translate("Villa")}</SelectItem>
                        <SelectItem value="penthouse">{translate("Penthouse")}</SelectItem>
                        <SelectItem value="townhouse">{translate("Townhouse")}</SelectItem>
                        <SelectItem value="office">{translate("Office")}</SelectItem>
                        <SelectItem value="retail">{translate("Retail")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="status">{translate("Status")}</Label>
                    <Select
                      value={propertyData.status}
                      onValueChange={(value) => handleSelectChange("status", value)}
                    >
                      <SelectTrigger id="status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="for-sale">{translate("For Sale")}</SelectItem>
                        <SelectItem value="for-rent">{translate("For Rent")}</SelectItem>
                        <SelectItem value="off-plan">{translate("Off-Plan")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-8">
                    <Switch
                      id="featured"
                      checked={propertyData.featured}
                      onCheckedChange={(checked) => handleSwitchChange("featured", checked)}
                    />
                    <Label htmlFor="featured">{translate("Featured Property")}</Label>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="bedrooms" className="flex items-center gap-1">
                      <Bed className="h-4 w-4" /> {translate("Bedrooms")}
                    </Label>
                    <Input
                      id="bedrooms"
                      name="bedrooms"
                      type="number"
                      value={propertyData.bedrooms}
                      onChange={handleInputChange}
                      placeholder="2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="bathrooms" className="flex items-center gap-1">
                      <Bath className="h-4 w-4" /> {translate("Bathrooms")}
                    </Label>
                    <Input
                      id="bathrooms"
                      name="bathrooms"
                      type="number"
                      value={propertyData.bathrooms}
                      onChange={handleInputChange}
                      placeholder="2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="area" className="flex items-center gap-1">
                      <SquareFoot className="h-4 w-4" /> {translate("Area (sq.ft)")}
                    </Label>
                    <Input
                      id="area"
                      name="area"
                      type="number"
                      value={propertyData.area}
                      onChange={handleInputChange}
                      placeholder="1200"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="roi" className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" /> {translate("ROI (%)")}
                  </Label>
                  <Input
                    id="roi"
                    name="roi"
                    type="number"
                    step="0.1"
                    value={propertyData.roi}
                    onChange={handleInputChange}
                    placeholder="7.5"
                  />
                </div>
              </div>
              
              {/* Amenities */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Tag className="h-5 w-5 text-luxury-gold" />
                  {translate("Amenities")}
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {amenitiesList.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Switch
                        id={`amenity-${amenity}`}
                        checked={selectedAmenities[amenity] || false}
                        onCheckedChange={() => handleAmenityToggle(amenity)}
                      />
                      <Label htmlFor={`amenity-${amenity}`}>{translate(amenity)}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Images */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <ImagePlus className="h-5 w-5 text-luxury-gold" />
                  {translate("Property Images")} *
                </h2>
                
                <div className="grid grid-cols-1 gap-4">
                  <Label htmlFor="images" className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <span className="text-gray-600">{translate("Click or drop files to upload")}</span>
                    <span className="text-sm text-gray-400 mt-1">{translate("PNG, JPG or WEBP (max 10MB)")}</span>
                    <Input
                      id="images"
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                      isFileInput
                    />
                  </Label>
                  
                  {imagePreviewUrls.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      {imagePreviewUrls.map((url, index) => (
                        <div key={index} className="relative group">
                          <img 
                            src={url} 
                            alt={`Preview ${index + 1}`} 
                            className="h-24 w-full object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Button 
                  type="submit" 
                  className="w-full bg-luxury-gold hover:bg-luxury-gold/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Upload className="h-4 w-4 animate-pulse" />
                      {translate("Uploading...")}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      {translate("Upload Property")}
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyUpload;
