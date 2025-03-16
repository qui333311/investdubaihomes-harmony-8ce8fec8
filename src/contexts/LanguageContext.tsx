import React, { createContext, useContext, useState, ReactNode } from "react";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");

  const translations = {
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
  return useContext(LanguageContext);
};
