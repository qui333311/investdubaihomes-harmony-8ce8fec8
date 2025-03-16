
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the language options
export const languages = ["en", "fr"];

// Define the type for the context
type TranslationType = { [key: string]: string };
type TranslationsType = { [lang: string]: TranslationType };

interface LanguageContextType {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  translate: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");

  const translations: TranslationsType = {
    en: {
      "Title": "Title",
      "Select": "Select",
      "Mr.": "Mr.",
      "Mrs.": "Mrs.",
      "Ms.": "Ms.",
      "Dr.": "Dr",
      "First Name": "First Name",
      "Last Name": "Last Name",
      "Phone Number": "Phone Number",
      "Interested In": "Interested In",
      "Select your interest": "Select your interest",
      "Property in Dubai": "Property in Dubai",
      "Property in Ras Al Khaimah": "Property in Ras Al Khaimah",
      "Company Setup": "Company Setup",
      "Legal Services": "Legal Services",
      "Consent Required": "Consent Required",
      "Please agree to our terms and privacy policy before subscribing.": "Please agree to our terms and privacy policy before subscribing.",
      "I agree to receive marketing emails and understand I can unsubscribe at any time.": "I agree to receive marketing emails and understand I can unsubscribe at any time.",
      "By subscribing, you agree to our": "By subscribing, you agree to our",
      "Terms of Service": "Terms of Service",
      "and": "and",
      "Privacy Policy": "Privacy Policy",
    },
    fr: {
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
      "Consent Required": "Consentement requis",
      "Please agree to our terms and privacy policy before subscribing.": "Veuillez accepter nos conditions et notre politique de confidentialité avant de vous abonner.",
      "I agree to receive marketing emails and understand I can unsubscribe at any time.": "J'accepte de recevoir des e-mails marketing et je comprends que je peux me désabonner à tout moment.",
      "By subscribing, you agree to our": "En vous abonnant, vous acceptez nos",
      "Terms of Service": "Conditions d'utilisation",
      "and": "et",
      "Privacy Policy": "Politique de confidentialité",
    },
  };

  const translate = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext) as LanguageContextType;
};
