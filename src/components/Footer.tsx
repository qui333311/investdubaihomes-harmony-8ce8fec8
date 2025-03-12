
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <h2 className="font-serif text-2xl font-light mb-5">
              <span className="text-primary">Invest</span>
              <span className="font-medium">Dubai</span>
              <span className="font-light text-gray-400">Homes</span>
            </h2>
            <p className="text-gray-400 mb-5">
              Premium real estate expertise in Dubai, providing exceptional investment opportunities and unparalleled service.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-4 w-4" />} />
              <SocialLink href="#" icon={<Instagram className="h-4 w-4" />} />
              <SocialLink href="#" icon={<Twitter className="h-4 w-4" />} />
              <SocialLink href="#" icon={<Linkedin className="h-4 w-4" />} />
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#properties">Properties</FooterLink>
              <FooterLink href="#about">About Dubai</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
              <FooterLink href="#">Investment Guide</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
            </ul>
          </div>

          {/* Column 3 - Property Types */}
          <div>
            <h3 className="text-lg font-medium mb-5">Property Types</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Luxury Apartments</FooterLink>
              <FooterLink href="#">Beachfront Villas</FooterLink>
              <FooterLink href="#">Penthouses</FooterLink>
              <FooterLink href="#">Townhouses</FooterLink>
              <FooterLink href="#">Off-Plan Properties</FooterLink>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-5">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive the latest property updates and investment opportunities.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} InvestDubaiHomes. All rights reserved.
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href}
    className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href}
      className="text-gray-400 hover:text-primary transition-colors hover-transition"
    >
      {children}
    </a>
  </li>
);

export default Footer;
