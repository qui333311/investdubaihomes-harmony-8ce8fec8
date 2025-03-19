import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the language options with proper typing
export interface LanguageOption {
  code: string;
  name: string;
}

export const languages: LanguageOption[] = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" }
];

// Define the type for the context
type TranslationType = { [key: string]: string };
type TranslationsType = { [lang: string]: TranslationType };

interface LanguageContextType {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  translate: (key: string) => string;
  currentLanguage: LanguageOption;
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
      "Consent Required": "Consent Required",
      "Please agree to our terms and privacy policy before subscribing.": "Please agree to our terms and privacy policy before subscribing.",
      "I agree to receive marketing emails and understand I can unsubscribe at any time.": "I agree to receive marketing emails and understand I can unsubscribe at any time.",
      "By subscribing, you agree to our": "By subscribing, you agree to our",
      "Terms of Service": "Terms of Service",
      "and": "and",
      "Privacy Policy": "Privacy Policy",
      "Message Sent!": "Message Sent!",
      "Thank you for your inquiry. We'll get back to you soon.": "Thank you for your inquiry. We'll get back to you soon.",
      "Error": "Error",
      "There was a problem sending your message. Please try again.": "There was a problem sending your message. Please try again.",
      "Contact Us": "Contact Us",
      "Interested in investing in Dubai or Ras Al Khaimah properties? Fill out the form and our investment consultants will get back to you shortly.": "Interested in investing in Dubai or Ras Al Khaimah properties? Fill out the form and our investment consultants will get back to you shortly.",
      "Location": "Location",
      "Business Bay, Dubai, UAE": "Business Bay, Dubai, UAE",
      "Email": "Email",
      "Phone": "Phone",
      "Connect With Us": "Connect With Us",
      "Full Name": "Full Name",
      "Subject": "Subject",
      "Message": "Message",
      "Sending...": "Sending...",
      "Send Message": "Send Message",
      "Subscribe to Updates": "Subscribe to Updates",
      "Get UAE market insights delivered to your inbox": "Get UAE market insights delivered to your inbox",
      "Your Email": "Your Email",
      "Subscribe": "Subscribe",
      "Thanks for subscribing!": "Thanks for subscribing!",
      "You'll receive our latest UAE market insights.": "You'll receive our latest UAE market insights.",
      "There was a problem with your subscription. Please try again.": "There was a problem with your subscription. Please try again.",
      "We're here to help you with your Dubai property investment journey. Get in touch with our experts today.": "We're here to help you with your Dubai property investment journey. Get in touch with our experts today.",
      "Send Us a Message": "Send Us a Message",
      "Our Location": "Our Location",
      "Call Us": "Call Us",
      "Email Us": "Email Us",
      "Instant Messaging": "Instant Messaging",
      "WhatsApp": "WhatsApp",
      "Telegram": "Telegram",
      "Social Media": "Social Media",
      // GDPR and Compliance translations
      "Data Protection Notice": "Data Protection Notice",
      "We collect and process your personal data in accordance with applicable data protection laws, including GDPR and CCPA.": "We collect and process your personal data in accordance with applicable data protection laws, including GDPR and CCPA.",
      "Your Rights": "Your Rights",
      "You have the right to access, rectify, delete, and port your personal data. You can also object to or restrict its processing.": "You have the right to access, rectify, delete, and port your personal data. You can also object to or restrict its processing.",
      "Data Storage": "Data Storage",
      "Your data is securely stored and will be retained only for as long as necessary for the purposes it was collected.": "Your data is securely stored and will be retained only for as long as necessary for the purposes it was collected.",
      "Cookie Consent": "Cookie Consent",
      "This website uses cookies to enhance your browsing experience and provide personalized services.": "This website uses cookies to enhance your browsing experience and provide personalized services.",
      "Accept All Cookies": "Accept All Cookies",
      "Reject Non-Essential Cookies": "Reject Non-Essential Cookies",
      "Customize Cookie Preferences": "Customize Cookie Preferences",
      "Learn more about how we use cookies in our": "Learn more about how we use cookies in our",
      "Cookie Policy": "Cookie Policy",
      "GDPR Compliance": "GDPR Compliance",
      "Your data, your control": "Your data, your control",
      // Impressum translations
      "Impressum": "Impressum",
      "Legal Notice": "Legal Notice",
      "Company Information": "Company Information",
      "Represented by": "Represented by",
      "Managing Director": "Managing Director",
      "Registration": "Registration",
      "Commercial Registry Number": "Commercial Registry Number",
      "Tax Identification Number": "Tax Identification Number",
      "Regulatory Authority": "Regulatory Authority",
      "Real Estate Regulatory Authority (RERA) License Number": "Real Estate Regulatory Authority (RERA) License Number",
      "Dubai Land Department Registration": "Dubai Land Department Registration",
      "Disclaimer": "Disclaimer",
      "The contents of our website have been created with the greatest possible care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content. As a service provider, we are responsible for our own content on these pages according to general laws. However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.": "The contents of our website have been created with the greatest possible care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content. As a service provider, we are responsible for our own content on these pages according to general laws. However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
      "Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. If we become aware of such infringements, we will remove this content immediately.": "Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. If we become aware of such infringements, we will remove this content immediately."
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
      "Message Sent!": "Message envoyé!",
      "Thank you for your inquiry. We'll get back to you soon.": "Merci pour votre demande. Nous vous répondrons bientôt.",
      "Error": "Erreur",
      "There was a problem sending your message. Please try again.": "Un problème est survenu lors de l'envoi de votre message. Veuillez réessayer.",
      "Contact Us": "Contactez-nous",
      "Interested in investing in Dubai or Ras Al Khaimah properties? Fill out the form and our investment consultants will get back to you shortly.": "Intéressé par investir dans des propriétés à Dubaï ou à Ras Al Khaimah? Remplissez le formulaire et nos consultants en investissement vous recontacteront rapidement.",
      "Location": "Emplacement",
      "Business Bay, Dubai, UAE": "Business Bay, Dubaï, EAU",
      "Email": "Email",
      "Phone": "Téléphone",
      "Connect With Us": "Connectez-vous avec nous",
      "Full Name": "Nom complet",
      "Subject": "Sujet",
      "Message": "Message",
      "Sending...": "Envoi en cours...",
      "Send Message": "Envoyer le message",
      "Subscribe to Updates": "Abonnez-vous aux mises à jour",
      "Get UAE market insights delivered to your inbox": "Recevez des informations sur le marché des EAU dans votre boîte de réception",
      "Your Email": "Votre email",
      "Subscribe": "S'abonner",
      "Thanks for subscribing!": "Merci de vous être abonné!",
      "You'll receive our latest UAE market insights.": "Vous recevrez nos dernières informations sur le marché des EAU.",
      "There was a problem with your subscription. Please try again.": "Un problème est survenu avec votre abonnement. Veuillez réessayer.",
      "We're here to help you with your Dubai property investment journey. Get in touch with our experts today.": "Nous sommes là pour vous aider dans votre parcours d'investissement immobilier à Dubaï. Contactez nos experts dès aujourd'hui.",
      "Send Us a Message": "Envoyez-nous un message",
      "Our Location": "Notre emplacement",
      "Call Us": "Appelez-nous",
      "Email Us": "Envoyez-nous un email",
      "Instant Messaging": "Messagerie instantanée",
      "WhatsApp": "WhatsApp",
      "Telegram": "Telegram",
      "Social Media": "Réseaux sociaux",
      // GDPR and Compliance translations
      "Data Protection Notice": "Avis de protection des données",
      "We collect and process your personal data in accordance with applicable data protection laws, including GDPR and CCPA.": "Nous collectons et traitons vos données personnelles conformément aux lois applicables sur la protection des données, y compris le RGPD et le CCPA.",
      "Your Rights": "Vos droits",
      "You have the right to access, rectify, delete, and port your personal data. You can also object to or restrict its processing.": "Vous avez le droit d'accéder, de rectifier, de supprimer et de transférer vos données personnelles. Vous pouvez également vous opposer à leur traitement ou le restreindre.",
      "Data Storage": "Stockage des données",
      "Your data is securely stored and will be retained only for as long as necessary for the purposes it was collected.": "Vos données sont stockées en toute sécurité et ne seront conservées que le temps nécessaire aux fins pour lesquelles elles ont été collectées.",
      "Cookie Consent": "Consentement aux cookies",
      "This website uses cookies to enhance your browsing experience and provide personalized services.": "Ce site web utilise des cookies pour améliorer votre expérience de navigation et fournir des services personnalisés.",
      "Accept All Cookies": "Accepter tous les cookies",
      "Reject Non-Essential Cookies": "Rejeter les cookies non essentiels",
      "Customize Cookie Preferences": "Personnaliser les préférences de cookies",
      "Learn more about how we use cookies in our": "En savoir plus sur notre utilisation des cookies dans notre",
      "Cookie Policy": "Politique de cookies",
      "GDPR Compliance": "Conformité RGPD",
      "Your data, your control": "Vos données, votre contrôle",
      // Impressum translations
      "Impressum": "Mentions Légales",
      "Legal Notice": "Notice Légale",
      "Company Information": "Informations sur l'Entreprise",
      "Represented by": "Représenté par",
      "Managing Director": "Directeur Général",
      "Registration": "Enregistrement",
      "Commercial Registry Number": "Numéro du Registre du Commerce",
      "Tax Identification Number": "Numéro d'Identification Fiscale",
      "Regulatory Authority": "Autorité Réglementaire",
      "Real Estate Regulatory Authority (RERA) License Number": "Numéro de Licence de l'Autorité de Réglementation Immobilière (RERA)",
      "Dubai Land Department Registration": "Enregistrement au Département des Terres de Dubaï",
      "Disclaimer": "Avertissement",
      "The contents of our website have been created with the greatest possible care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content. As a service provider, we are responsible for our own content on these pages according to general laws. However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.": "Le contenu de notre site Web a été créé avec le plus grand soin possible. Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité et l'actualité du contenu. En tant que prestataire de services, nous sommes responsables de notre propre contenu sur ces pages conformément aux lois générales. Cependant, nous ne sommes pas obligés de surveiller les informations transmises ou stockées par des tiers ou d'enquêter sur des circonstances qui indiquent une activité illégale.",
      "Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. If we become aware of such infringements, we will remove this content immediately.": "Les obligations de supprimer ou de bloquer l'utilisation d'informations conformément aux lois générales restent inchangées. Cependant, la responsabilité à cet égard n'est possible qu'à partir du moment où l'on a connaissance d'une violation légale spécifique. Si nous avons connaissance de telles infractions, nous supprimerons immédiatement ce contenu."
    },
  };

  const translate = (key: string) => {
    return translations[language][key] || key;
  };

  // Get the current language object for the Navbar
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate, currentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
