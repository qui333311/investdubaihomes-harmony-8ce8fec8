import React, { useState, useEffect, createContext, useContext } from "react";
import { useToast } from "@/hooks/use-toast";

// Language options
export const languages = [
  { code: "en", name: "English" },
  { code: "de", name: "German" },
  { code: "fr", name: "French" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "zh", name: "Chinese" },
];

// Translations for all components and pages
export const translations: {[key: string]: {[key: string]: string}} = {
  "en": {
    // ... keep existing code (English translations)
  },
  "de": {
    // Navbar translations
    "Home": "Startseite",
    "Properties": "Immobilien",
    "About Us": "Über Uns",
    "UAE Know How": "VAE Know How",
    "ROI & Investment": "ROI & Investment",
    "Company Setup": "Firmengründung",
    "Financing": "Finanzierung",
    "Crypto Buying": "Krypto Kauf",
    "Blog": "Blog",
    "Contact": "Kontakt",
    "Book Consultation": "Beratung Buchen",
    "Language Detected": "Sprache erkannt",
    "Language Changed": "Sprache geändert",
    "browserLangMessage": "Die Sprache Ihres Browsers wurde automatisch ausgewählt.",
    "langChangeMessage": "Die Website-Sprache wurde geändert in",

    // Footer translations
    "Quick Links": "Schnelle Links",
    "Property Types": "Immobilientypen",
    "Contact Us": "Kontaktieren Sie Uns",
    "Your premier partner": "Ihr führender Partner für Luxusimmobilieninvestitionen und Firmengründung in Dubai und Ras Al Khaimah.",
    "Luxury Apartments": "Luxusapartments",
    "Premium Villas": "Premium Villen",
    "Exclusive Penthouses": "Exklusive Penthäuser",
    "Off-Plan Projects": "Off-Plan Projekte",
    "All rights reserved": "Alle Rechte vorbehalten",
    "Privacy Policy": "Datenschutzbestimmungen",
    "Terms of Service": "Nutzungsbedingungen",
    "Cookie Policy": "Cookie-Richtlinie",

    // Property page translations
    "Explore Our Properties": "Entdecken Sie Unsere Immobilien",
    "Find your perfect investment": "Finden Sie Ihre perfekte Investition in Dubai und Ras Al Khaimah",
    "Properties Found": "Gefundene Immobilien",
    "No properties found": "Keine Immobilien gefunden",
    "Try adjusting your filters": "Versuchen Sie, Ihre Filter anzupassen, um mehr Ergebnisse zu sehen",

    // Contact page translations
    "We're here to help you": "Wir sind hier, um Sie bei Ihrer Immobilieninvestition in Dubai zu unterstützen. Kontaktieren Sie noch heute unsere Experten.",
    "Get in Touch": "In Kontakt treten",
    "We're available to answer": "Wir stehen Ihnen zur Verfügung, um Ihre Fragen zu Immobilieninvestitionen, Firmengründung und Leben in den VAE zu beantworten.",
    "Information": "Informationen",
    "Our Offices": "Unsere Büros",
    "Why Book a Consultation?": "Warum eine Beratung buchen?",
    "Expert Guidance": "Expertenberatung",
    "Our specialists provide personalized advice": "Unsere Spezialisten bieten eine persönliche Beratung, die auf Ihre Anlageziele und Anforderungen zugeschnitten ist.",
    "Market Insights": "Markteinblicke",
    "Gain access to exclusive market data": "Erhalten Sie Zugang zu exklusiven Marktdaten und Trends, um fundierte Anlageentscheidungen zu treffen.",
    "Personalized Property Selection": "Personalisierte Immobilienauswahl",
    "We'll curate a selection of properties": "Wir kuratieren eine Auswahl von Immobilien, die Ihren spezifischen Kriterien und Anlagezielen entsprechen.",
    "What to Expect": "Was Sie erwartet",
    "Initial consultation (30-45 minutes)": "Erstberatung (30-45 Minuten)",
    "Needs assessment and investment goal setting": "Bedarfsanalyse und Festlegung von Anlagezielen",
    "Personalized property or service recommendations": "Personalisierte Immobilien- oder Serviceempfehlungen",
    "Follow-up with tailored options and information": "Follow-up mit maßgeschneiderten Optionen und Informationen",
    "Consultations can be conducted virtually": "Beratungen können virtuell oder persönlich in einem unserer Büros durchgeführt werden.",
    "Office Address": "Büro Adresse",
    "Call Us": "Rufen Sie Uns An",
    "Email Us": "Senden Sie Uns eine E-Mail",
    "Connect With Us": "Verbinden Sie Sich mit Uns",
    "Business Hours": "Geschäftszeiten",
    "Monday - Friday": "Montag - Freitag",
    "Saturday": "Samstag",
    "Sunday": "Sonntag",
    "Closed": "Geschlossen",
    "Dubai Office": "Dubai Büro",
    "Ras Al Khaimah Office": "Ras Al Khaimah Büro",
    "Contact": "Kontakt",
    "View on Map": "Auf der Karte anzeigen",
    "International Desk": "Internationaler Schreibtisch",
    "Our international team provides support": "Unser internationales Team bietet Unterstützung in mehreren Sprachen für Kunden weltweit.",
    "Languages": "Sprachen",
    "English, Arabic, Russian, German, Chinese, French, Portuguese": "Englisch, Arabisch, Russisch, Deutsch, Chinesisch, Französisch, Portugiesisch",
    "Email": "E-Mail",
    "WhatsApp": "WhatsApp",
    "Book International Consultation": "Buchen Sie eine internationale Beratung",

    // Form translations
    "Title": "Titel",
    "Select": "Auswählen",
    "Mr.": "Herr",
    "Mrs.": "Frau",
    "Ms.": "Frau",
    "Dr.": "Dr.",
    "First Name": "Vorname",
    "Last Name": "Nachname",
    "Phone Number": "Telefonnummer",
    "Interested In": "Interessiert An",
    "Select your interest": "Wählen Sie Ihr Interesse",
    "Property in Dubai": "Immobilie in Dubai",
    "Property in Ras Al Khaimah": "Immobilie in Ras Al Khaimah",
    "Company Setup": "Firmengründung",
    "Legal Services": "Rechtsdienstleistungen",
    "General Information": "Allgemeine Informationen",
    "Message": "Nachricht",
    "Tell us more about your requirements...": "Erzählen Sie uns mehr über Ihre Anforderungen...",
    "Fields marked with * are required": "Mit * gekennzeichnete Felder sind erforderlich",
    "Submitting...": "Wird gesendet...",
    "Form Incomplete": "Formular unvollständig",
    "Please fill in all required fields.": "Bitte füllen Sie alle erforderlichen Felder aus.",
    "Thank You!": "Vielen Dank!",
    "Your consultation request has been submitted.": "Ihre Beratungsanfrage wurde gesendet. Wir werden Sie in Kürze kontaktieren.",

    // UAE Know How translations
    "UAE Know How Categories": "VAE Know How Kategorien",
    "Explore our comprehensive guides": "Entdecken Sie unsere umfassenden Leitfäden zu verschiedenen Aspekten des Lebens, Investierens und Geschäftslebens in den VAE.",
    "Visa Information": "Visainformationen",
    "Learn about UAE visa types": "Erfahren Sie mehr über die Visatypen der VAE, Anforderungen und Vorteile für Einwohner und Investoren.",
    "Golden Visa: 10-year residency for investors and professionals": "Goldenes Visum: 10-jährige Aufenthaltsgenehmigung für Investoren und Fachkräfte",
    "Investor Visa: 3-year residency with property investment": "Investorenvisum: 3-jährige Aufenthaltsgenehmigung mit Immobilieninvestition",
    "Employment Visa: Sponsored by UAE companies": "Arbeitsvisum: Gesponsert von VAE-Unternehmen",
    "Tourist Visa: 30-90 days for visitors": "Touristenvisum: 30-90 Tage für Besucher",
    "Retirement Visa: 5-year visa for retirees": "Ruhestandsvisum: 5-Jahres-Visum für Rentner",

    "Bank Account Opening": "Bankkontoeröffnung",
    "Guidelines for opening personal": "Richtlinien für die Eröffnung von Privat- und Firmenbankkonten in den VAE.",
    "Personal Account Requirements: Emirates ID, passport, visa": "Persönliche Kontoanforderungen: Emirates ID, Reisepass, Visum",
    "Corporate Account Documents: Trade license, ownership proof": "Firmenkonto Dokumente: Handelslizenz, Eigentumsnachweis",
    "International Bank Options: HSBC, Emirates NBD, RAK Bank": "Internationale Bankoptionen: HSBC, Emirates NBD, RAK Bank",
    "Minimum Balance Requirements: 3,000-5,000 AED": "Mindestguthaben Anforderungen: 3.000-5.000 AED",
    "Online Banking Features: Digital transfers, bill payments": "Online-Banking Funktionen: Digitale Überweisungen, Rechnungszahlungen",

    "Schools in UAE": "Schulen in den VAE",
    "Information about international": "Informationen über internationale und lokale Schulen in Dubai und Ras Al Khaimah.",
    "British Curriculum Schools: GCSE and A-Levels": "Schulen mit britischem Lehrplan: GCSE und A-Levels",
    "American Curriculum Schools: US High School Diploma": "Schulen mit amerikanischem Lehrplan: US High School Diploma",
    "IB Schools: International Baccalaureate curriculum": "IB Schulen: International Baccalaureate Curriculum",
    "School Ratings: KHDA inspection results": "Schulbewertungen: KHDA Inspektionsergebnisse",
    "Admission Process: Requirements and deadlines": "Aufnahmeverfahren: Anforderungen und Fristen",

    "Universities in UAE": "Universitäten in den VAE",
    "Explore higher education options": "Entdecken Sie Hochschuloptionen in den VAE, einschließlich internationaler Standorte.",
    "Dubai International Academic City: Education hub": "Dubai International Academic City: Bildungszentrum",
    "International University Branches: NYU, Heriot-Watt, Sorbonne": "Internationale Universitätszweigstellen: NYU, Heriot-Watt, Sorbonne",
    "Undergraduate Programs: Bachelor degrees": "Bachelor-Studiengänge: Bachelor-Abschlüsse",
    "Postgraduate Options: Master's and PhD programs": "Postgraduale Optionen: Master- und PhD-Programme",
    "Student Visas: Requirements and process": "Studentenvisa: Anforderungen und Prozess",

    "Offshore Company Setup": "Offshore Firmengründung",
    "Complete guide to establishing": "Vollständige Anleitung zur Gründung von Offshore-Unternehmen in den VAE-Freizonen.",
    "JAFZA Offshore: Jebel Ali Free Zone": "JAFZA Offshore: Jebel Ali Freizone",
    "RAK ICC: Ras Al Khaimah International Corporate Centre": "RAK ICC: Ras Al Khaimah International Corporate Centre",
    "DMCC: Dubai Multi Commodities Centre": "DMCC: Dubai Multi Commodities Centre",
    "Setup Requirements: Documents and fees": "Setup Anforderungen: Dokumente und Gebühren",
    "Banking for Offshore Companies: Account opening process": "Banking für Offshore-Unternehmen: Kontoeröffnungsprozess",

    "Legal Assistance": "Rechtliche Unterstützung",
    "Legal services for property purchase": "Rechtsdienstleistungen für Immobilienkauf, Firmengründung und Aufenthaltsfragen.",
    "Property Purchase Legalities: Title deed verification": "Immobilienkauf Rechtliches: Eigentumsurkunde Überprüfung",
    "Business Setup Documentation: Legal structure advice": "Firmengründung Dokumentation: Beratung zur Rechtsstruktur",
    "Residency Permit Applications: Visa processing": "Anträge auf Aufenthaltsgenehmigung: Visabearbeitung",
    "Contract Review: Lease and purchase agreements": "Vertragsprüfung: Miet- und Kaufverträge",
    "Dispute Resolution: RERA mediation and arbitration": "Streitbeilegung: RERA Mediation und Schiedsverfahren",

    "Property Maintenance": "Immobilienwartung",
    "Maintenance services and solutions": "Wartungsdienste und -lösungen für Immobilienbesitzer in den VAE.",
    "Annual Maintenance Contracts: Comprehensive care": "Jährliche Wartungsverträge: Umfassende Betreuung",
    "Emergency Services: 24/7 support": "Notfalldienste: 24/7 Unterstützung",
    "HVAC System Servicing: AC maintenance": "HLK-Systemwartung: AC-Wartung",
    "Pool and Garden Maintenance: Outdoor upkeep": "Pool- und Gartenpflege: Außenpflege",
    "Property Inspection Services: Condition assessments": "Immobilieninspektionsdienste: Zustandsbewertungen",

    "Interior Design": "Innenarchitektur",
    "Interior design and property upgrade": "Innenarchitektur und Immobilien-Upgrade-Services für Investoren und Hausbesitzer.",
    "Full Home Design Services: Concept to completion": "Full Home Design Services: Vom Konzept bis zur Fertigstellung",
    "Furniture Packages for Investors: Ready-to-rent solutions": "Möbelpakete für Investoren: Ready-to-Rent Lösungen",
    "Kitchen and Bathroom Renovation: High-value upgrades": "Küchen- und Badrenovierung: Hochwertige Upgrades",
    "Smart Home Integration: Technology installations": "Smart Home Integration: Technologieinstallationen",
    "Upgrade Consultations: ROI-focused improvements": "Upgrade-Beratungen: ROI-fokussierte Verbesserungen",

    "Short Term Rentals": "Kurzzeitmieten",
    "Guide to short-term rental regulations": "Leitfaden zu Kurzzeitmietvorschriften, Verwaltung und potenziellen Renditen.",
    "Licensing Requirements: DTCM permits": "Lizenzanforderungen: DTCM-Genehmigungen",
    "Market Performance Data: Occupancy rates and ADR": "Marktleistungsdaten: Belegungsraten und ADR",
    "Property Management Services: Guest handling": "Immobilienverwaltungsdienste: Gästebetreuung",
    "Marketing and Listing Optimization: Platform strategies": "Marketing- und Angebotsoptimierung: Plattformstrategien",
    "Return on Investment Analysis: Cost vs. income": "Return on Investment Analyse: Kosten vs. Einkommen",

    "Long Term Rentals": "Langzeitmieten",
    "Everything you need to know": "Alles, was Sie über langfristige Immobilienmieten in den VAE wissen müssen.",
    "Tenancy Contract Requirements: Ejari registration": "Mietvertragsanforderungen: Ejari-Registrierung",
    "Landlord and Tenant Rights: Legal protections": "Vermieter- und Mieterrechte: Rechtlicher Schutz",
    "Security Deposits and Fees: Standard practices": "Kautionen und Gebühren: Standardpraktiken",
    "Rent Payment Structures: Cheque options": "Mietzahlungsstrukturen: Scheckoptionen",
    "Property Management Services: Tenant sourcing": "Immobilienverwaltungsdienste: Mietersuche",

    "Key Investment Locations": "Wichtige Investitionsstandorte",
    "Explore the most promising investment areas": "Entdecken Sie die vielversprechendsten Investitionsgebiete in Dubai und Ras Al Khaimah. Jeder Standort bietet einzigartige Vorteile für Immobilieninvestoren.",
    "Book a Consultation": "Buchen Sie eine Beratung",
    "Back to UAE Know How": "Zurück zum VAE Know How",
    "Category not found": "Kategorie nicht gefunden",
    "Expert Consultation": "Expertenberatung",
    "Quick Inquiry": "Schnelle Anfrage",

    // Property status
    "Ready": "Bereit",
    "Off-Plan": "Off-Plan",
    "View Details": "Details ansehen",

    // Email subscription
    "Subscribe for Updates": "Abonnieren Sie Updates",
    "Get the latest property news and UAE investment insights delivered to your inbox.": "Erhalten Sie die neuesten Immobiliennachrichten und VAE-Investment-Einblicke in Ihren Posteingang.",
    "Enter your email": "Geben Sie Ihre E-Mail ein",
    "Subscribe": "Abonnieren",
    "Thank you for subscribing!": "Danke für Ihre Anmeldung!",
    "You'll start receiving our updates soon.": "Sie werden bald unsere Updates erhalten."
  },
  "fr": {
    // ... keep existing code (French translations)
  },
  "pt": {
    // ... keep existing code (Portuguese translations)
  },
  "ru": {
    // ... keep existing code (Russian translations)
  },
  "zh": {
    // ... keep existing code (Chinese translations)
  }
};

// Create language context
export interface LanguageContextType {
  currentLanguage: {code: string, name: string};
  setLanguage: (lang: {code: string, name: string}) => void;
  translate: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: { code: "en", name: "English" },
  setLanguage: () => {},
  translate: (key: string) => key,
});

// Language provider component
export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<{code: string, name: string}>({ code: "en", name: "English" });
  const { toast } = useToast();
  
  // Detect browser language on component mount
  useEffect(() => {
    const detectBrowserLanguage = () => {
      const browserLang = navigator.language.split('-')[0]; // Get language code (e.g., "en" from "en-US")
      
      // Find matching language in our supported languages
      const matchedLang = languages.find(lang => lang.code === browserLang);
      
      if (matchedLang) {
        setCurrentLanguage(matchedLang);
        toast({
          title: translations[matchedLang.code]["Language Detected"] || "Language Detected",
          description: translations[matchedLang.code]["browserLangMessage"] || "Your browser language has been automatically selected.",
        });
      }
    };
    
    // Only detect language if it hasn't been manually set before
    if (!localStorage.getItem('preferredLanguage')) {
      detectBrowserLanguage();
    } else {
      // If there's a saved preference, use that
      const savedLang = localStorage.getItem('preferredLanguage');
      const matchedLang = languages.find(lang => lang.code === savedLang);
      if (matchedLang) {
        setCurrentLanguage(matchedLang);
      }
    }
  }, []);

  const handleLanguageChange = (lang: {code: string, name: string}) => {
    setCurrentLanguage(lang);
    // Save preference
    localStorage.setItem('preferredLanguage', lang.code);
    
    toast({
      title: translations[lang.code]["Language Changed"] || "Language Changed",
      description: `${translations[lang.code]["langChangeMessage"] || "The website language has been changed to"} ${lang.name}`,
    });
  };

  // Translation function
  const translate = (key: string) => {
    return translations[currentLanguage.code]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage,
      setLanguage: handleLanguageChange,
      translate 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language
export const useLanguage = () => useContext(LanguageContext);
