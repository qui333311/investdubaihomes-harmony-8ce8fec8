
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutDubai from '@/components/AboutDubai';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  // Initialize any effect hooks for the main page
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Parallax effect for elements with parallax class
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach(element => {
        const scrollPosition = window.scrollY;
        const elementPosition = element.getBoundingClientRect().top + scrollPosition;
        const distance = scrollPosition - elementPosition;
        const speed = 0.15; // Adjust for more or less effect
        
        if (element instanceof HTMLElement) {
          element.style.transform = `translateY(${distance * speed}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <AboutDubai />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
