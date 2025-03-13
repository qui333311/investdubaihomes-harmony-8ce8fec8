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
    // Navbar translations
    "Home": "Home",
    "Properties": "Properties",
    "About Us": "About Us",
    "UAE Know How": "UAE Know How",
    "ROI & Investment": "ROI & Investment",
    "Company Setup": "Company Setup",
    "Financing": "Financing",
    "Crypto Buying": "Crypto Buying",
    "Blog": "Blog",
    "Contact": "Contact",
    "Book Consultation": "Book Consultation",
    "Language Detected": "Language Detected",
    "Language Changed": "Language Changed",
    "browserLangMessage": "Your browser language has been automatically selected.",
    "langChangeMessage": "The website language has been changed to",
    
    // Footer translations
    "Quick Links": "Quick Links",
    "Property Types": "Property Types",
    "Contact Us": "Contact Us",
    "Your premier partner": "Your premier partner for luxury property investments and company setup in Dubai and Ras Al Khaimah.",
    "Luxury Apartments": "Luxury Apartments",
    "Premium Villas": "Premium Villas",
    "Exclusive Penthouses": "Exclusive Penthouses",
    "Off-Plan Projects": "Off-Plan Projects",
    "All rights reserved": "All rights reserved",
    "Privacy Policy": "Privacy Policy",
    "Terms of Service": "Terms of Service",
    "Cookie Policy": "Cookie Policy",
    
    // Property page translations
    "Explore Our Properties": "Explore Our Properties",
    "Find your perfect investment": "Find your perfect investment in Dubai and Ras Al Khaimah",
    "Properties Found": "Properties Found",
    "No properties found": "No properties found",
    "Try adjusting your filters": "Try adjusting your filters to see more results",
    
    // Contact page translations
    "We're here to help you": "We're here to help you with your property investment journey in Dubai. Contact our experts today.",
    "Get in Touch": "Get in Touch",
    "We're available to answer": "We're available to answer your questions about property investment, company setup, and living in the UAE.",
    "Information": "Information",
    "Our Offices": "Our Offices",
    "Why Book a Consultation?": "Why Book a Consultation?",
    "Expert Guidance": "Expert Guidance",
    "Our specialists provide personalized advice": "Our specialists provide personalized advice tailored to your investment goals and requirements.",
    "Market Insights": "Market Insights",
    "Gain access to exclusive market data": "Gain access to exclusive market data and trends to make informed investment decisions.",
    "Personalized Property Selection": "Personalized Property Selection",
    "We'll curate a selection of properties": "We'll curate a selection of properties matching your specific criteria and investment objectives.",
    "What to Expect": "What to Expect",
    "Initial consultation (30-45 minutes)": "Initial consultation (30-45 minutes)",
    "Needs assessment and investment goal setting": "Needs assessment and investment goal setting",
    "Personalized property or service recommendations": "Personalized property or service recommendations",
    "Follow-up with tailored options and information": "Follow-up with tailored options and information",
    "Consultations can be conducted virtually": "Consultations can be conducted virtually or in person at one of our offices.",
    "Office Address": "Office Address",
    "Call Us": "Call Us",
    "Email Us": "Email Us",
    "Connect With Us": "Connect With Us",
    "Business Hours": "Business Hours",
    "Monday - Friday": "Monday - Friday",
    "Saturday": "Saturday",
    "Sunday": "Sunday",
    "Closed": "Closed",
    "Dubai Office": "Dubai Office",
    "Ras Al Khaimah Office": "Ras Al Khaimah Office",
    "Contact": "Contact",
    "View on Map": "View on Map",
    "International Desk": "International Desk",
    "Our international team provides support": "Our international team provides support in multiple languages for clients worldwide.",
    "Languages": "Languages",
    "English, Arabic, Russian, German, Chinese, French, Portuguese": "English, Arabic, Russian, German, Chinese, French, Portuguese",
    "Email": "Email",
    "WhatsApp": "WhatsApp",
    "Book International Consultation": "Book International Consultation",
    
    // Form translations
    "Title": "Title",
    "Select": "Select",
    "Mr.": "Mr.",
    "Mrs.": "Mrs.",
    "Ms.": "Ms.",
    "Dr.": "Dr.",
    "First Name": "First Name",
    "Last Name": "Last Name",
    "Phone Number": "Phone Number",
    "Interested In": "Interested In",
    "Select your interest": "Select your interest",
    "Property in Dubai": "Property in Dubai",
    "Property in Ras Al Khaimah": "Property in Ras Al Khaimah",
    "Company Setup": "Company Setup",
    "Legal Services": "Legal Services",
    "General Information": "General Information",
    "Message": "Message",
    "Tell us more about your requirements...": "Tell us more about your requirements...",
    "Fields marked with * are required": "Fields marked with * are required",
    "Submitting...": "Submitting...",
    "Form Incomplete": "Form Incomplete",
    "Please fill in all required fields.": "Please fill in all required fields.",
    "Thank You!": "Thank You!",
    "Your consultation request has been submitted.": "Your consultation request has been submitted. We will contact you shortly.",
    
    // UAE Know How translations
    "UAE Know How Categories": "UAE Know How Categories",
    "Explore our comprehensive guides": "Explore our comprehensive guides on various aspects of living, investing, and doing business in the UAE.",
    "Visa Information": "Visa Information",
    "Learn about UAE visa types": "Learn about UAE visa types, requirements, and benefits for residents and investors.",
    "Golden Visa: 10-year residency for investors and professionals": "Golden Visa: 10-year residency for investors and professionals",
    "Investor Visa: 3-year residency with property investment": "Investor Visa: 3-year residency with property investment",
    "Employment Visa: Sponsored by UAE companies": "Employment Visa: Sponsored by UAE companies",
    "Tourist Visa: 30-90 days for visitors": "Tourist Visa: 30-90 days for visitors",
    "Retirement Visa: 5-year visa for retirees": "Retirement Visa: 5-year visa for retirees",
    
    "Bank Account Opening": "Bank Account Opening",
    "Guidelines for opening personal": "Guidelines for opening personal and corporate bank accounts in the UAE.",
    "Personal Account Requirements: Emirates ID, passport, visa": "Personal Account Requirements: Emirates ID, passport, visa",
    "Corporate Account Documents: Trade license, ownership proof": "Corporate Account Documents: Trade license, ownership proof",
    "International Bank Options: HSBC, Emirates NBD, RAK Bank": "International Bank Options: HSBC, Emirates NBD, RAK Bank",
    "Minimum Balance Requirements: 3,000-5,000 AED": "Minimum Balance Requirements: 3,000-5,000 AED",
    "Online Banking Features: Digital transfers, bill payments": "Online Banking Features: Digital transfers, bill payments",
    
    "Schools in UAE": "Schools in UAE",
    "Information about international": "Information about international and local schools in Dubai and Ras Al Khaimah.",
    "British Curriculum Schools: GCSE and A-Levels": "British Curriculum Schools: GCSE and A-Levels",
    "American Curriculum Schools: US High School Diploma": "American Curriculum Schools: US High School Diploma",
    "IB Schools: International Baccalaureate curriculum": "IB Schools: International Baccalaureate curriculum",
    "School Ratings: KHDA inspection results": "School Ratings: KHDA inspection results",
    "Admission Process: Requirements and deadlines": "Admission Process: Requirements and deadlines",
    
    "Universities in UAE": "Universities in UAE",
    "Explore higher education options": "Explore higher education options in the UAE including international campuses.",
    "Dubai International Academic City: Education hub": "Dubai International Academic City: Education hub",
    "International University Branches: NYU, Heriot-Watt, Sorbonne": "International University Branches: NYU, Heriot-Watt, Sorbonne",
    "Undergraduate Programs: Bachelor degrees": "Undergraduate Programs: Bachelor degrees",
    "Postgraduate Options: Master's and PhD programs": "Postgraduate Options: Master's and PhD programs",
    "Student Visas: Requirements and process": "Student Visas: Requirements and process",
    
    "Offshore Company Setup": "Offshore Company Setup",
    "Complete guide to establishing": "Complete guide to establishing offshore companies in the UAE free zones.",
    "JAFZA Offshore: Jebel Ali Free Zone": "JAFZA Offshore: Jebel Ali Free Zone",
    "RAK ICC: Ras Al Khaimah International Corporate Centre": "RAK ICC: Ras Al Khaimah International Corporate Centre",
    "DMCC: Dubai Multi Commodities Centre": "DMCC: Dubai Multi Commodities Centre",
    "Setup Requirements: Documents and fees": "Setup Requirements: Documents and fees",
    "Banking for Offshore Companies: Account opening process": "Banking for Offshore Companies: Account opening process",
    
    "Legal Assistance": "Legal Assistance",
    "Legal services for property purchase": "Legal services for property purchase, company formation, and residency matters.",
    "Property Purchase Legalities: Title deed verification": "Property Purchase Legalities: Title deed verification",
    "Business Setup Documentation: Legal structure advice": "Business Setup Documentation: Legal structure advice",
    "Residency Permit Applications: Visa processing": "Residency Permit Applications: Visa processing",
    "Contract Review: Lease and purchase agreements": "Contract Review: Lease and purchase agreements",
    "Dispute Resolution: RERA mediation and arbitration": "Dispute Resolution: RERA mediation and arbitration",
    
    "Property Maintenance": "Property Maintenance",
    "Maintenance services and solutions": "Maintenance services and solutions for property owners in the UAE.",
    "Annual Maintenance Contracts: Comprehensive care": "Annual Maintenance Contracts: Comprehensive care",
    "Emergency Services: 24/7 support": "Emergency Services: 24/7 support",
    "HVAC System Servicing: AC maintenance": "HVAC System Servicing: AC maintenance",
    "Pool and Garden Maintenance: Outdoor upkeep": "Pool and Garden Maintenance: Outdoor upkeep",
    "Property Inspection Services: Condition assessments": "Property Inspection Services: Condition assessments",
    
    "Interior Design": "Interior Design",
    "Interior design and property upgrade": "Interior design and property upgrade services for investors and homeowners.",
    "Full Home Design Services: Concept to completion": "Full Home Design Services: Concept to completion",
    "Furniture Packages for Investors: Ready-to-rent solutions": "Furniture Packages for Investors: Ready-to-rent solutions",
    "Kitchen and Bathroom Renovation: High-value upgrades": "Kitchen and Bathroom Renovation: High-value upgrades",
    "Smart Home Integration: Technology installations": "Smart Home Integration: Technology installations",
    "Upgrade Consultations: ROI-focused improvements": "Upgrade Consultations: ROI-focused improvements",
    
    "Short Term Rentals": "Short Term Rentals",
    "Guide to short-term rental regulations": "Guide to short-term rental regulations, management, and potential returns.",
    "Licensing Requirements: DTCM permits": "Licensing Requirements: DTCM permits",
    "Market Performance Data: Occupancy rates and ADR": "Market Performance Data: Occupancy rates and ADR",
    "Property Management Services: Guest handling": "Property Management Services: Guest handling",
    "Marketing and Listing Optimization: Platform strategies": "Marketing and Listing Optimization: Platform strategies",
    "Return on Investment Analysis: Cost vs. income": "Return on Investment Analysis: Cost vs. income",
    
    "Long Term Rentals": "Long Term Rentals",
    "Everything you need to know": "Everything you need to know about long-term property rentals in the UAE.",
    "Tenancy Contract Requirements: Ejari registration": "Tenancy Contract Requirements: Ejari registration",
    "Landlord and Tenant Rights: Legal protections": "Landlord and Tenant Rights: Legal protections",
    "Security Deposits and Fees: Standard practices": "Security Deposits and Fees: Standard practices",
    "Rent Payment Structures: Cheque options": "Rent Payment Structures: Cheque options",
    "Property Management Services: Tenant sourcing": "Property Management Services: Tenant sourcing",
    
    "Key Investment Locations": "Key Investment Locations",
    "Explore the most promising investment areas": "Explore the most promising investment areas in Dubai and Ras Al Khaimah. Each location offers unique advantages for property investors.",
    "Book a Consultation": "Book a Consultation",
    "Back to UAE Know How": "Back to UAE Know How",
    "Category not found": "Category not found",
    "Expert Consultation": "Expert Consultation",
    "Quick Inquiry": "Quick Inquiry",
    
    // Property status
    "Ready": "Ready",
    "Off-Plan": "Off-Plan",
    "View Details": "View Details",

    // Email subscription
    "Subscribe for Updates": "Subscribe for Updates",
    "Get the latest property news and UAE investment insights delivered to your inbox.": "Get the latest property news and UAE investment insights delivered to your inbox.",
    "Enter your email": "Enter your email",
    "Subscribe": "Subscribe",
    "Thank you for subscribing!": "Thank you for subscribing!",
    "You'll start receiving our updates soon.": "You'll start receiving our updates soon."
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
    "Personal Account Requirements: Emirates ID, Reisepass, Visum": "Persönliche Kontoanforderungen: Emirates ID, Reisepass, Visum",
    "Corporate Account Documents: Handelslizenz, Eigentumsnachweis": "Firmenkonto Dokumente: Handelslizenz, Eigentumsnachweis",
    "International Bank Options: HSBC, Emirates NBD, RAK Bank": "Internationale Bankoptionen: HSBC, Emirates NBD, RAK Bank",
    "Minimum Balance Requirements: 3,000-5,000 AED": "Mindestguthaben Anforderungen: 3.000-5.000 AED",
    "Online Banking Features: Digitale Überweisungen, Rechnungszahlungen": "Online-Banking Funktionen: Digitale Überweisungen, Rechnungszahlungen",

    "Schools in UAE": "Schulen in den VAE",
    "Information about international": "Informationen über internationale und lokale Schulen in Dubai und Ras Al Khaimah.",
    "British Curriculum Schools: GCSE and A-Levels": "Schulen mit britischem Lehrplan: GCSE und A-Levels",
    "American Curriculum Schools: US High School Diploma": "Schulen mit amerikanischem Lehrplan: US High School Diploma",
    "IB Schools: International Baccalaureate curriculum": "IB Schulen: International Baccalaureate Curriculum",
    "School Ratings: KHDA inspection results": "Schulbewertungen: KHDA Inspektionsergebnisse",
    "Admission Process: Requirements and deadlines": "Aufnahmeverfahren: Anforderungen und Fristen",

    "Universities in UAE": "Universitäten in den VAE",
    "Explore higher education options": "Entdecken Sie Hochschuloptionen in den VAE, einschließlich internationaler Standorte.",
    "Dubai International Academic City: Bildungszentrum": "Dubai International Academic City: Bildungszentrum",
    "International University Branches: NYU, Heriot-Watt, Sorbonne": "Internationale Universitätszweigstellen: NYU, Heriot-Watt, Sorbonne",
    "Undergraduate Programs: Bachelor-Studiengänge": "Bachelor-Studiengänge: Bachelor-Abschlüsse",
    "Postgraduate Options: Master- und PhD-Programme": "Postgraduale Optionen: Master- und PhD-Programme",
    "Student Visas: Anforderungen und Prozess": "Studentenvisa: Anforderungen und Prozess",

    "Offshore Company Setup": "Offshore Firmengründung",
    "Complete guide to establishing": "Vollständige Anleitung zur Gründung von Offshore-Unternehmen in den VAE-Freizonen.",
    "JAFZA Offshore: Jebel Ali Freizone": "JAFZA Offshore: Jebel Ali Freizone",
    "RAK ICC: Ras Al Khaimah International Corporate Centre": "RAK ICC: Ras Al Khaimah International Corporate Centre",
    "DMCC: Dubai Multi Commodities Centre": "DMCC: Dubai Multi Commodities Centre",
    "Setup Requirements: Dokumente und Gebühren": "Setup Anforderungen: Dokumente und Gebühren",
    "Banking für Offshore-Unternehmen: Kontoeröffnungsprozess": "Banking für Offshore-Unternehmen: Kontoeröffnungsprozess",

    "Legal Assistance": "Rechtliche Unterstützung",
    "Legal services for property purchase": "Rechtsdienstleistungen für Immobilienkauf, Firmengründung und Aufenthaltsfragen.",
    "Property Purchase Legalities: Eigentumsurkunde Überprüfung": "Immobilienkauf Rechtliches: Eigentumsurkunde Überprüfung",
    "Business Setup Documentation: Beratung zur Rechtsstruktur": "Firmengründung Dokumentation: Beratung zur Rechtsstruktur",
    "Residency Permit Applications: Visabearbeitung": "Anträge auf Aufenthaltsgenehmigung: Visabearbeitung",
    "Contract Review: Miet- und Kaufverträge": "Vertragsprüfung: Miet- und Kaufverträge",
    "Dispute Resolution: RERA Mediation und Schiedsverfahren": "Streitbeilegung: RERA Mediation und Schiedsverfahren",

    "Property Maintenance": "Immobilienwartung",
    "Maintenance services and solutions": "Wartungsdienste und -lösungen für Immobilienbesitzer in den VAE.",
    "Annual Maintenance Contracts: Umfassende Betreuung": "Jährliche Wartungsverträge: Umfassende Betreuung",
    "Emergency Services: 24/7 Unterstützung": "Notfalldienste: 24/7 Unterstützung",
    "HVAC System Servicing: AC-Wartung": "HLK-Systemwartung: AC-Wartung",
    "Pool- und Gartenpflege: Außenpflege": "Pool- und Gartenpflege: Außenpflege",
    "Property Inspection Services: Zustandsbewertungen": "Immobilieninspektionsdienste: Zustandsbewertungen",

    "Interior Design": "Innenarchitektur",
    "Interior design and property upgrade": "Innenarchitektur und Immobilien-Upgrade-Services für Investoren und Hausbesitzer.",
    "Full Home Design Services: Vom Konzept bis zur Fertigstellung": "Full Home Design Services: Vom Konzept bis zur Fertigstellung",
    "Furniture Packages for Investors: Ready-to-Rent Lösungen": "Möbelpakete für Investoren: Ready-to-Rent Lösungen",
    "Kitchen and Bathroom Renovation: Hochwertige Upgrades": "Küchen- und Badrenovierung: Hochwertige Upgrades",
    "Smart Home Integration: Technologieinstallationen": "Smart Home Integration: Technologieinstallationen",
    "Upgrade-Beratungen: ROI-fokussierte Verbesserungen": "Upgrade-Beratungen: ROI-fokussierte Verbesserungen",

    "Short Term Rentals": "Kurzzeitmieten",
    "Guide to short-term rental regulations": "Leitfaden zu Kurzzeitmietvorschriften, Verwaltung und potenziellen Renditen.",
    "Licensing Requirements: DTCM-Genehmigungen": "Lizenzanforderungen: DTCM-Genehmigungen",
    "Market Performance Data: Belegungsraten und ADR": "Marktleistungsdaten: Belegungsraten und ADR",
    "Property Management Services: Gästebetreuung": "Immobilienverwaltungsdienste: Gästebetreuung",
    "Marketing- und Angebotsoptimierung: Plattformstrategien": "Marketing- und Angebotsoptimierung: Plattformstrategien",
    "Return on Investment Analyse: Kosten vs. Einkommen": "Return on Investment Analyse: Kosten vs. Einkommen",

    "Long Term Rentals": "Langzeitmieten",
    "Everything you need to know": "Alles, was Sie über langfristige Immobilienmieten in den VAE wissen müssen.",
    "Tenancy Contract Requirements: Ejari-Registrierung": "Mietvertragsanforderungen: Ejari-Registrierung",
    "Landlord and Tenant Rights: Rechtlicher Schutz": "Vermieter- und Mieterrechte: Rechtlicher Schutz",
    "Security Deposits and Fees: Standardpraktiken": "Kautionen und Gebühren: Standardpraktiken",
    "Rent Payment Structures: Scheckoptionen": "Mietzahlungsstrukturen: Scheckoptionen",
    "Property Management Services: Mietersuche": "Immobilienverwaltungsdienste: Mietersuche",

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
    // Navbar translations
    "Home": "Accueil",
    "Properties": "Propriétés",
    "About Us": "À Propos",
    "UAE Know How": "Savoir-faire EAU",
    "ROI & Investment": "ROI & Investissement",
    "Company Setup": "Création d'Entreprise",
    "Financing": "Financement",
    "Crypto Buying": "Achat Crypto",
    "Blog": "Blog",
    "Contact": "Contact",
    "Book Consultation": "Réserver une Consultation",
    "Language Detected": "Langue Détectée",
    "Language Changed": "Langue Modifiée",
    "browserLangMessage": "La langue de votre navigateur a été automatiquement sélectionnée.",
    "langChangeMessage": "La langue du site a été changée en",
    
    // Footer translations
    "Quick Links": "Liens Rapides",
    "Property Types": "Types de Propriétés",
    "Contact Us": "Contactez-nous",
    "Your premier partner": "Votre partenaire privilégié pour les investissements immobiliers de luxe et la création d'entreprise à Dubaï et Ras Al Khaimah.",
    "Luxury Apartments": "Appartements de Luxe",
    "Premium Villas": "Villas Premium",
    "Exclusive Penthouses": "Penthouses Exclusifs",
    "Off-Plan Projects": "Projets Sur Plan",
    "All rights reserved": "Tous droits réservés",
    "Privacy Policy": "Politique de Confidentialité",
    "Terms of Service": "Conditions d'Utilisation",
    "Cookie Policy": "Politique des Cookies",
    
    // Property page translations
    "Explore Our Properties": "Explorez Nos Propriétés",
    "Find your perfect investment": "Trouvez votre investissement parfait à Dubaï et Ras Al Khaimah",
    "Properties Found": "Propriétés Trouvées",
    "No properties found": "Aucune propriété trouvée",
    "Try adjusting your filters": "Essayez d'ajuster vos filtres pour voir plus de résultats",
    
    // Contact page translations
    "We're here to help you": "Nous sommes là pour vous aider dans votre parcours d'investissement immobilier à Dubaï. Contactez nos experts dès aujourd'hui.",
    "Get in Touch": "Entrez en Contact",
    "We're available to answer": "Nous sommes disponibles pour répondre à vos questions sur l'investissement immobilier, la création d'entreprise et la vie aux EAU.",
    "Information": "Informations",
    "Our Offices": "Nos Bureaux",
    "Why Book a Consultation?": "Pourquoi Réserver une Consultation?",
    "Expert Guidance": "Conseils d'Experts",
    "Our specialists provide personalized advice": "Nos spécialistes fournissent des conseils personnalisés adaptés à vos objectifs d'investissement et à vos exigences.",
    "Market Insights": "Aperçus du Marché",
    "Gain access to exclusive market data": "Accédez à des données et tendances exclusives du marché pour prendre des décisions d'investissement éclairées.",
    "Personalized Property Selection": "Sélection de Propriétés Personnalisée",
    "We'll curate a selection of properties": "Nous sélectionnerons une gamme de propriétés correspondant à vos critères spécifiques et objectifs d'investissement.",
    "What to Expect": "À quoi s'attendre",
    "Initial consultation (30-45 minutes)": "Consultation initiale (30-45 minutes)",
    "Needs assessment and investment goal setting": "Évaluation des besoins et définition des objectifs d'investissement",
    "Personalized property or service recommendations": "Recommandations personnalisées de propriétés ou de services",
    "Follow-up with tailored options and information": "Suivi avec des options et informations sur mesure",
    "Consultations can be conducted virtually": "Les consultations peuvent être menées virtuellement ou en personne dans l'un de nos bureaux.",
    "Office Address": "Adresse du Bureau",
    "Call Us": "Appelez-nous",
    "Email Us": "Écrivez-nous",
    "Connect With Us": "Connectez-vous avec Nous",
    "Business Hours": "Heures d'Ouverture",
    "Monday - Friday": "Lundi - Vendredi",
    "Saturday": "Samedi",
    "Sunday": "Dimanche",
    "Closed": "Fermé",
    "Dubai Office": "Bureau de Dubaï",
    "Ras Al Khaimah Office": "Bureau de Ras Al Khaimah",
    "Contact": "Contact",
    "View on Map": "Voir sur la Carte",
    "International Desk": "Bureau International",
    "Our international team provides support": "Notre équipe internationale fournit un support en plusieurs langues pour les clients du monde entier.",
    "Languages": "Langues",
    "English, Arabic, Russian, German, Chinese, French, Portuguese": "Anglais, Arabe, Russe, Allemand, Chinois, Français, Portugais",
    "Email": "Email",
    "WhatsApp": "WhatsApp",
    "Book International Consultation": "Réserver une Consultation Internationale",
    
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
