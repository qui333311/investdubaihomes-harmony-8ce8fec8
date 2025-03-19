
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { useLanguage, languages } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { currentLanguage, setLanguage, translate } = useLanguage();
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About Us", path: "/about-us" },
    { name: "UAE Know How", path: "/uae-know-how" },
    { name: "ROI & Investment", path: "/roi" },
    { name: "Company Setup", path: "/company-setup" },
    { name: "Financing", path: "/financing" },
    { name: "Crypto Buying", path: "/crypto-buying" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Function to handle language change
  const handleLanguageChange = (lang: typeof languages[0]) => {
    setLanguage(lang.code);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="luxury-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-luxury-navy">
              <span className="text-luxury-gold">ME MY</span>DUBAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Main menu dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="flex items-center border border-luxury-gold/30 bg-white hover:bg-luxury-gold/5 text-luxury-navy hover:text-luxury-gold transition-all duration-200"
                >
                  <span className="font-medium">{translate("Menu")}</span>
                  <ChevronDown className="h-4 w-4 ml-1.5 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-2">
                <DropdownMenuGroup>
                  {navLinks.map((link) => (
                    <DropdownMenuItem 
                      key={link.name}
                      asChild
                      className={`${
                        isActive(link.path)
                          ? "bg-luxury-gold/10 text-luxury-gold font-medium"
                          : "text-luxury-charcoal hover:text-luxury-gold"
                      } cursor-pointer px-4 py-2.5 rounded-md my-0.5`}
                    >
                      <Link to={link.path}>
                        {translate(link.name)}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center space-x-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center border border-luxury-gold/30 bg-white hover:bg-luxury-gold/5 text-luxury-navy hover:text-luxury-gold transition-all duration-200"
                  >
                    <Globe className="h-4 w-4 mr-1.5 text-luxury-gold" />
                    <span>{currentLanguage.code.toUpperCase()}</span>
                    <ChevronDown className="h-3.5 w-3.5 ml-1.5 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-[120px]">
                  {languages.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className={`${currentLanguage.code === lang.code 
                        ? "bg-luxury-gold/10 text-luxury-gold font-medium" 
                        : "text-luxury-charcoal hover:text-luxury-gold"} cursor-pointer px-4 py-2`}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                className="bg-luxury-gold hover:bg-luxury-navy text-white font-medium shadow-sm hover:shadow-md transition-all duration-200 px-5"
                asChild
              >
                <Link to="/contact">{translate("Book Consultation")}</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-luxury-navy">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px] pt-12">
              <div className="flex flex-col space-y-4 px-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`py-2.5 px-2 rounded-md transition-colors ${
                      isActive(link.path)
                        ? "bg-luxury-gold/10 text-luxury-gold font-medium"
                        : "text-luxury-charcoal hover:text-luxury-gold hover:bg-luxury-gold/5"
                    }`}
                  >
                    {translate(link.name)}
                  </Link>
                ))}
                
                <div className="py-4 border-t border-gray-100 mt-2">
                  <p className="text-sm text-luxury-charcoal/70 mb-3 px-2">{translate("Language")}</p>
                  <div className="flex flex-wrap gap-2 px-2">
                    {languages.map((lang) => (
                      <Button 
                        key={lang.code} 
                        variant={currentLanguage.code === lang.code ? "default" : "outline"} 
                        size="sm"
                        onClick={() => handleLanguageChange(lang)}
                        className={currentLanguage.code === lang.code 
                          ? "bg-luxury-gold text-white border-luxury-gold hover:bg-luxury-gold/90" 
                          : "border-luxury-gold/30 text-luxury-navy hover:bg-luxury-gold/10 hover:text-luxury-gold"}
                      >
                        {lang.name}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="bg-luxury-gold hover:bg-luxury-navy text-white font-medium shadow-sm hover:shadow-md transition-all duration-200 w-full mt-2"
                  asChild
                >
                  <Link to="/contact">{translate("Book Consultation")}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
