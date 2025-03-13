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
    "Bank Account Opening": "Ouverture de Compte Bancaire",
    "Guidelines for opening personal": "Directives pour l'ouverture de comptes bancaires personnels et d'entreprise aux EAU.",
    "Schools": "Écoles",
    "Information about international": "Informations sur les écoles internationales et locales à Dubaï et Ras Al Khaimah.",
    "Universities": "Universités",
    "Explore higher education options": "Explorez les options d'enseignement supérieur aux EAU, y compris les campus internationaux.",
    "Offshore Company Setup": "Création de Société Offshore",
    "Complete guide to establishing": "Guide complet pour l'établissement de sociétés offshore dans les zones franches des EAU.",
    "Legal Assistance": "Assistance Juridique",
    "Legal services for property purchase": "Services juridiques pour l'achat de propriétés, la formation d'entreprises et les questions de résidence.",
    "Property Maintenance": "Entretien de Propriété",
    "Maintenance services and solutions": "Services et solutions d'entretien pour les propriétaires aux EAU.",
    "Interior Design": "Design d'Intérieur",
    "Interior design and property upgrade": "Services de design d'intérieur et d'amélioration des propriétés pour les investisseurs et les propriétaires.",
    "Short Term Rentals": "Locations à Court Terme",
    "Guide to short-term rental regulations": "Guide sur les réglementations, la gestion et les rendements potentiels des locations à court terme.",
    "Long Term Rentals": "Locations à Long Terme",
    "Everything you need to know": "Tout ce que vous devez savoir sur les locations de propriétés à long terme aux EAU.",
    "Back to UAE Know How": "Retour au Savoir-faire EAU",
    "Category not found": "Catégorie non trouvée",
    "Expert Consultation": "Consultation Expert",
    "Quick Inquiry": "Demande Rapide",
    
    // Property status
    "Ready": "Prêt",
    "Off-Plan": "Sur Plan",
    "View Details": "Voir les Détails"
  },
  "pt": {
    // Navbar translations
    "Home": "Início",
    "Properties": "Propriedades",
    "About Us": "Sobre Nós",
    "UAE Know How": "Guia dos EAU",
    "ROI & Investment": "ROI & Investimento",
    "Company Setup": "Abertura de Empresa",
    "Financing": "Financiamento",
    "Crypto Buying": "Compra com Crypto",
    "Blog": "Blog",
    "Contact": "Contato",
    "Book Consultation": "Agendar Consulta",
    "Language Detected": "Idioma Detectado",
    "Language Changed": "Idioma Alterado",
    "browserLangMessage": "O idioma do seu navegador foi selecionado automaticamente.",
    "langChangeMessage": "O idioma do site foi alterado para",
    
    // Footer translations
    "Quick Links": "Links Rápidos",
    "Property Types": "Tipos de Propriedades",
    "Contact Us": "Fale Conosco",
    "Your premier partner": "Seu parceiro principal para investimentos em propriedades de luxo e abertura de empresas em Dubai e Ras Al Khaimah.",
    "Luxury Apartments": "Apartamentos de Luxo",
    "Premium Villas": "Vilas Premium",
    "Exclusive Penthouses": "Coberturas Exclusivas",
    "Off-Plan Projects": "Projetos na Planta",
    "All rights reserved": "Todos os direitos reservados",
    "Privacy Policy": "Política de Privacidade",
    "Terms of Service": "Termos de Serviço",
    "Cookie Policy": "Política de Cookies",
    
    // Property page translations
    "Explore Our Properties": "Explore Nossas Propriedades",
    "Find your perfect investment": "Encontre sua oportunidade de investimento perfeita em Dubai e Ras Al Khaimah",
    "Properties Found": "Propriedades Encontradas",
    "No properties found": "Nenhuma propriedade encontrada",
    "Try adjusting your filters": "Tente ajustar seus filtros para ver mais resultados",
    
    // Contact page translations
    "We're here to help you": "Estamos aqui para ajudá-lo em sua jornada de investimento imobiliário em Dubai. Entre em contato com nossos especialistas hoje mesmo.",
    "Get in Touch": "Entre em Contato",
    "We're available to answer": "Estamos disponíveis para responder suas perguntas sobre investimentos imobiliários, abertura de empresas e vida nos EAU.",
    "Information": "Informações",
    "Our Offices": "Nossos Escritórios",
    "Why Book a Consultation?": "Por Que Agendar uma Consulta?",
    "Expert Guidance": "Orientação Especializada",
    "Our specialists provide personalized advice": "Nossos especialistas fornecem conselhos personalizados adaptados aos seus objetivos e requisitos de investimento.",
    "Market Insights": "Insights de Mercado",
    "Gain access to exclusive market data": "Tenha acesso a dados e tendências exclusivos do mercado para tomar decisões de investimento informadas.",
    "Personalized Property Selection": "Seleção Personalizada de Propriedades",
    "We'll curate a selection of properties": "Selecionaremos propriedades que correspondam aos seus critérios específicos e objetivos de investimento.",
    "What to Expect": "O Que Esperar",
    "Initial consultation (30-45 minutes)": "Consulta inicial (30-45 minutos)",
    "Needs assessment and investment goal setting": "Avaliação de necessidades e definição de objetivos de investimento",
    "Personalized property or service recommendations": "Recomendações personalizadas de propriedades ou serviços",
    "Follow-up with tailored options and information": "Acompanhamento com opções e informações personalizadas",
    "Consultations can be conducted virtually": "As consultas podem ser realizadas virtualmente ou presencialmente em um de nossos escritórios.",
    "Office Address": "Endereço do Escritório",
    "Call Us": "Ligue para Nós",
    "Email Us": "Envie-nos um Email",
    "Connect With Us": "Conecte-se Conosco",
    "Business Hours": "Horário de Funcionamento",
    "Monday - Friday": "Segunda - Sexta",
    "Saturday": "Sábado",
    "Sunday": "Domingo",
    "Closed": "Fechado",
    "Dubai Office": "Escritório em Dubai",
    "Ras Al Khaimah Office": "Escritório em Ras Al Khaimah",
    "Contact": "Contato",
    "View on Map": "Ver no Mapa",
    "International Desk": "Mesa Internacional",
    "Our international team provides support": "Nossa equipe internacional oferece suporte em vários idiomas para clientes em todo o mundo.",
    "Languages": "Idiomas",
    "English, Arabic, Russian, German, Chinese, French, Portuguese": "Inglês, Árabe, Russo, Alemão, Chinês, Francês, Português",
    "Email": "Email",
    "WhatsApp": "WhatsApp",
    "Book International Consultation": "Agendar Consulta Internacional",
    
    // Form translations
    "Title": "Título",
    "Select": "Selecionar",
    "Mr.": "Sr.",
    "Mrs.": "Sra.",
    "Ms.": "Srta.",
    "Dr.": "Dr.",
    "First Name": "Nome",
    "Last Name": "Sobrenome",
    "Phone Number": "Número de Telefone",
    "Interested In": "Interesse Em",
    "Select your interest": "Selecione seu interesse",
    "Property in Dubai": "Propriedade em Dubai",
    "Property in Ras Al Khaimah": "Propriedade em Ras Al Khaimah",
    "Company Setup": "Abertura de Empresa",
    "Legal Services": "Serviços Jurídicos",
    "General Information": "Informações Gerais",
    "Message": "Mensagem",
    "Tell us more about your requirements...": "Conte-nos mais sobre seus requisitos...",
    "Fields marked with * are required": "Campos marcados com * são obrigatórios",
    "Submitting...": "Enviando...",
    "Form Incomplete": "Formulário Incompleto",
    "Please fill in all required fields.": "Por favor, preencha todos os campos obrigatórios.",
    "Thank You!": "Obrigado!",
    "Your consultation request has been submitted.": "Sua solicitação de consulta foi enviada. Entraremos em contato em breve.",
    
    // UAE Know How translations
    "UAE Know How Categories": "Categorias do Guia dos EAU",
    "Explore our comprehensive guides": "Explore nossos guias abrangentes sobre vários aspectos de vida, investimento e negócios nos EAU.",
    "Visa Information": "Informações de Visto",
    "Learn about UAE visa types": "Saiba mais sobre tipos de visto dos EAU, requisitos e benefícios para residentes e investidores.",
    "Bank Account Opening": "Abertura de Conta Bancária",
    "Guidelines for opening personal": "Diretrizes para abertura de contas bancárias pessoais e corporativas nos EAU.",
    "Schools": "Escolas",
    "Information about international": "Informações sobre escolas internacionais e locais em Dubai e Ras Al Khaimah.",
    "Universities": "Universidades",
    "Explore higher education options": "Explore opções de ensino superior nos EAU, incluindo campus internacionais.",
    "Offshore Company Setup": "Criação de Empresa Offshore",
    "Complete guide to establishing": "Guia completo para estabelecer empresas offshore nas zonas francas dos EAU.",
    "Legal Assistance": "Assistência Jurídica",
    "Legal services for property purchase": "Serviços jurídicos para compra de propriedades, formação de empresas e questões de residência.",
    "Property Maintenance": "Manutenção de Propriedades",
    "Maintenance services and solutions": "Serviços e soluções de manutenção para proprietários nos EAU.",
    "Interior Design": "Design de Interiores",
    "Interior design and property upgrade": "Serviços de design de interiores e upgrade de propriedades para investidores e proprietários.",
    "Short Term Rentals": "Aluguéis de Curto Prazo",
    "Guide to short-term rental regulations": "Guia para regulamentos, gestão e retornos potenciais de aluguéis de curto prazo.",
    "Long Term Rentals": "Aluguéis de Longo Prazo",
    "Everything you need to know": "Tudo o que você precisa saber sobre aluguéis de propriedades de longo prazo nos EAU.",
    "Back to UAE Know How": "Voltar ao Guia dos EAU",
    "Category not found": "Categoria não encontrada",
    "Expert Consultation": "Consulta Especializada",
    "Quick Inquiry": "Consulta Rápida",
    
    // Property status
    "Ready": "Pronto",
    "Off-Plan": "Na Planta",
    "View Details": "Ver Detalhes"
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
