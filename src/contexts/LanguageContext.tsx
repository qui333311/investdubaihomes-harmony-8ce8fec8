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
    // ... keep existing code (German translations)
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
    "Title": "Titre",
    "Select": "Sélectionner",
    "Mr.": "M.",
    "Mrs.": "Mme",
    "Ms.": "Mlle",
    "Dr.": "Dr",
    "First Name": "Prénom",
    "Last Name": "Nom",
    "Phone Number": "Numéro de Téléphone",
    "Interested In": "Intéressé par",
    "Select your interest": "Sélectionnez votre intérêt",
    "Property in Dubai": "Propriété à Dubaï",
    "Property in Ras Al Khaimah": "Propriété à Ras Al Khaimah",
    "Company Setup": "Création d'Entreprise",
    "Legal Services": "Services Juridiques",
    "General Information": "Informations Générales",
    "Message": "Message",
    "Tell us more about your requirements...": "Dites-nous en plus sur vos besoins...",
    "Fields marked with * are required": "Les champs marqués d'un * sont obligatoires",
    "Submitting...": "Envoi en cours...",
    "Form Incomplete": "Formulaire Incomplet",
    "Please fill in all required fields.": "Veuillez remplir tous les champs obligatoires.",
    "Thank You!": "Merci!",
    "Your consultation request has been submitted.": "Votre demande de consultation a été soumise. Nous vous contacterons prochainement.",
    
    // UAE Know How translations
    "UAE Know How Categories": "Catégories de Savoir-faire EAU",
    "Explore our comprehensive guides": "Explorez nos guides complets sur divers aspects de la vie, de l'investissement et des affaires aux EAU.",
    "Visa Information": "Informations sur les Visas",
    "Learn about UAE visa types": "Renseignez-vous sur les types de visas aux EAU, les exigences et les avantages pour les résidents et les investisseurs.",
    "Golden Visa: 10-year residency for investors and professionals": "Visa Doré: Résidence de 10 ans pour les investisseurs et professionnels",
    "Investor Visa: 3-year residency with property investment": "Visa Investisseur: Résidence de 3 ans avec investissement immobilier",
    "Employment Visa: Sponsored by UAE companies": "Visa de Travail: Sponsorisé par des sociétés des EAU",
    "Tourist Visa: 30-90 days for visitors": "Visa Touristique: 30-90 jours pour les visiteurs",
    "Retirement Visa: 5-year visa for retirees": "Visa Retraite: Visa de 5 ans pour les retraités",
    
    "Bank Account Opening": "Ouverture de Compte Bancaire",
    "Guidelines for opening personal": "Directives pour l'ouverture de comptes bancaires personnels et d'entreprise aux EAU.",
    "Personal Account Requirements: Emirates ID, passport, visa": "Exigences pour Compte Personnel: Carte d'identité Emirates, passeport, visa",
    "Corporate Account Documents: Trade license, ownership proof": "Documents pour Compte d'Entreprise: Licence commerciale, preuve de propriété",
    "International Bank Options: HSBC, Emirates NBD, RAK Bank": "Options Bancaires Internationales: HSBC, Emirates NBD, RAK Bank",
    "Minimum Balance Requirements: 3,000-5,000 AED": "Exigences de Solde Minimum: 3 000-5 000 AED",
    "Online Banking Features: Digital transfers, bill payments": "Fonctionnalités de Banque en Ligne: Transferts numériques, paiements de factures",
    
    "Schools in UAE": "Écoles aux EAU",
    "Information about international": "Informations sur les écoles internationales et locales à Dubaï et Ras Al Khaimah.",
    "British Curriculum Schools: GCSE and A-Levels": "Écoles au Programme Britannique: GCSE et A-Levels",
    "American Curriculum Schools: US High School Diploma": "Écoles au Programme Américain: Diplôme Américain",
    "IB Schools: International Baccalaureate curriculum": "Écoles IB: Programme du Baccalauréat International",
    "School Ratings: KHDA inspection results": "Évaluations des Écoles: Résultats d'inspection KHDA",
    "Admission Process: Requirements and deadlines": "Processus d'Admission: Exigences et délais",
    
    "Universities in UAE": "Universités aux EAU",
    "Explore higher education options": "Explorez les options d'enseignement supérieur aux EAU, y compris les campus internationaux.",
    "Dubai International Academic City: Education hub": "Cité Académique Internationale de Dubaï: Pôle éducatif",
    "International University Branches: NYU, Heriot-Watt, Sorbonne": "Filiales d'Universités Internationales: NYU, Heriot-Watt, Sorbonne",
    "Undergraduate Programs: Bachelor degrees": "Programmes de Premier Cycle: Licences",
    "Postgraduate Options: Master's and PhD programs": "Options de Troisième Cycle: Programmes de Master et Doctorat",
    "Student Visas: Requirements and process": "Visas Étudiants: Exigences et processus",
    
    "Offshore Company Setup": "Création de Société Offshore",
    "Complete guide to establishing": "Guide complet pour l'établissement de sociétés offshore dans les zones franches des EAU.",
    "JAFZA Offshore: Jebel Ali Free Zone": "JAFZA Offshore: Zone Franche de Jebel Ali",
    "RAK ICC: Ras Al Khaimah International Corporate Centre": "RAK ICC: Centre Corporatif International de Ras Al Khaimah",
    "DMCC: Dubai Multi Commodities Centre": "DMCC: Centre Multi-Produits de Dubaï",
    "Setup Requirements: Documents and fees": "Exigences d'Établissement: Documents et frais",
    "Banking for Offshore Companies: Account opening process": "Services Bancaires pour Sociétés Offshore: Processus d'ouverture de compte",
    
    "Legal Assistance": "Assistance Juridique",
    "Legal services for property purchase": "Services juridiques pour l'achat de propriétés, la formation d'entreprises et les questions de résidence.",
    "Property Purchase Legalities: Title deed verification": "Aspects Juridiques d'Achat de Propriété: Vérification de l'acte de propriété",
    "Business Setup Documentation: Legal structure advice": "Documentation de Création d'Entreprise: Conseils sur la structure juridique",
    "Residency Permit Applications: Visa processing": "Demandes de Permis de Résidence: Traitement des visas",
    "Contract Review: Lease and purchase agreements": "Révision de Contrat: Contrats de location et d'achat",
    "Dispute Resolution: RERA mediation and arbitration": "Résolution des Différends: Médiation et arbitrage RERA",
    
    "Property Maintenance": "Entretien de Propriété",
    "Maintenance services and solutions": "Services et solutions d'entretien pour les propriétaires aux EAU.",
    "Annual Maintenance Contracts: Comprehensive care": "Contrats d'Entretien Annuel: Soins complets",
    "Emergency Services: 24/7 support": "Services d'Urgence: Assistance 24/7",
    "HVAC System Servicing: AC maintenance": "Entretien des Systèmes CVC: Maintenance de climatisation",
    "Pool and Garden Maintenance: Outdoor upkeep": "Entretien Piscine et Jardin: Maintenance extérieure",
    "Property Inspection Services: Condition assessments": "Services d'Inspection de Propriété: Évaluations de l'état",
    
    "Interior Design": "Design d'Intérieur",
    "Interior design and property upgrade": "Services de design d'intérieur et d'amélioration des propriétés pour les investisseurs et les propriétaires.",
    "Full Home Design Services: Concept to completion": "Services de Design Complet: Du concept à la réalisation",
    "Furniture Packages for Investors: Ready-to-rent solutions": "Forfaits Mobilier pour Investisseurs: Solutions prêtes à louer",
    "Kitchen and Bathroom Renovation: High-value upgrades": "Rénovation Cuisine et Salle de Bain: Améliorations à forte valeur",
    "Smart Home Integration: Technology installations": "Intégration Maison Intelligente: Installations technologiques",
    "Upgrade Consultations: ROI-focused improvements": "Consultations d'Amélioration: Améliorations axées sur le ROI",
    
    "Short Term Rentals": "Locations à Court Terme",
    "Guide to short-term rental regulations": "Guide sur les réglementations, la gestion et les rendements potentiels des locations à court terme.",
    "Licensing Requirements: DTCM permits": "Exigences de Licence: Permis DTCM",
    "Market Performance Data: Occupancy rates and ADR": "Données de Performance du Marché: Taux d'occupation et TQM",
    "Property Management Services: Guest handling": "Services de Gestion Immobilière: Gestion des invités",
    "Marketing and Listing Optimization: Platform strategies": "Optimisation Marketing et Annonces: Stratégies de plateforme",
    "Return on Investment Analysis: Cost vs. income": "Analyse du Retour sur Investissement: Coûts vs. revenus",
    
    "Long Term Rentals": "Locations à Long Terme",
    "Everything you need to know": "Tout ce que vous devez savoir sur les locations de propriétés à long terme aux EAU.",
    "Tenancy Contract Requirements: Ejari registration": "Exigences de Contrat de Location: Enregistrement Ejari",
    "Landlord and Tenant Rights: Legal protections": "Droits des Propriétaires et Locataires: Protections légales",
    "Security Deposits and Fees: Standard practices": "Dépôts de Garantie et Frais: Pratiques standard",
    "Rent Payment Structures: Cheque options": "Structures de Paiement de Loyer: Options de chèque",
    "Property Management Services: Tenant sourcing": "Services de Gestion Immobilière: Recherche de locataires",
    
    "Key Investment Locations": "Emplacements d'Investissement Clés",
    "Explore the most promising investment areas": "Explorez les zones d'investissement les plus prometteuses à Dubaï et Ras Al Khaimah. Chaque emplacement offre des avantages uniques pour les investisseurs immobiliers.",
    "Book a Consultation": "Réserver une Consultation",
    "Back to UAE Know How": "Retour au Savoir-faire EAU",
    "Category not found": "Catégorie non trouvée",
    "Expert Consultation": "Consultation Expert",
    "Quick Inquiry": "Demande Rapide",
    
    // Property status
    "Ready": "Prêt",
    "Off-Plan": "Sur Plan",
    "View Details": "Voir les Détails",

    // Email subscription
    "Subscribe for Updates": "S'abonner aux Mises à Jour",
    "Get the latest property news and UAE investment insights delivered to your inbox.": "Recevez les dernières nouvelles immobilières et les informations sur les investissements aux ÉAU directement dans votre boîte de réception.",
    "Enter your email": "Entrez votre email",
    "Subscribe": "S'abonner",
    "Thank you for subscribing!": "Merci de vous être abonné!",
    "You'll start receiving our updates soon.": "Vous commencerez à recevoir nos mises à jour bientôt."
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
