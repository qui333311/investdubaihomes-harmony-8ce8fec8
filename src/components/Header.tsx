
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 backdrop-blur-sm",
      isScrolled ? "bg-white/90 shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="z-50">
            <h1 className="font-serif text-2xl md:text-3xl font-light tracking-wide">
              <span className="text-primary">Invest</span>
              <span className="font-medium">Dubai</span>
              <span className="font-light text-muted-foreground">Homes</span>
            </h1>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#properties">Properties</NavLink>
            <NavLink href="#about">About Dubai</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="relative group">
              <button className="flex items-center space-x-1 py-2 font-medium text-foreground hover:text-primary transition-colors">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full w-48 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="glass-panel rounded-md py-2 px-4 shadow-luxe overflow-hidden">
                  <div className="space-y-1">
                    <DropdownLink href="#">Investment Guide</DropdownLink>
                    <DropdownLink href="#">Market Reports</DropdownLink>
                    <DropdownLink href="#">Buyer's FAQ</DropdownLink>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden z-50 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white/95 backdrop-blur-md md:hidden z-40 transition-all duration-300 ease-out-expo",
        isMobileMenuOpen 
          ? "opacity-100 pointer-events-auto" 
          : "opacity-0 pointer-events-none translate-x-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          <MobileNavLink href="#properties" onClick={toggleMobileMenu}>Properties</MobileNavLink>
          <MobileNavLink href="#about" onClick={toggleMobileMenu}>About Dubai</MobileNavLink>
          <MobileNavLink href="#contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
          <MobileNavLink href="#" onClick={toggleMobileMenu}>Resources</MobileNavLink>
        </div>
      </div>
    </header>
  );
};

// Desktop nav link
const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="py-2 font-medium text-foreground hover:text-primary transition-colors"
  >
    {children}
  </a>
);

// Mobile nav link with animation
const MobileNavLink = ({ href, onClick, children }: { 
  href: string, 
  onClick: () => void, 
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    onClick={onClick} 
    className="text-3xl font-serif font-light hover:text-primary transition-colors"
  >
    {children}
  </a>
);

// Dropdown link
const DropdownLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
  >
    {children}
  </a>
);

export default Header;
