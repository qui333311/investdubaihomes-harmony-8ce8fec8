
// Email configuration file

// The target email where all contact form submissions and newsletter subscriptions will be sent
export const TARGET_EMAIL = "info@memydubai.com";

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_ezgyo6j", // Updated with your actual EmailJS Service ID
  TEMPLATE_ID: "template_contact_form", // Template for contact form
  TEMPLATE_ID_NEWSLETTER: "template_newsletter", // Template for newsletter subscriptions
  TEMPLATE_ID_CONFIRMATION: "template_confirmation", // Template for confirmation emails
  PUBLIC_KEY: "rORYyxd9CQA56h8_n", // Updated with your actual EmailJS Public Key
};

// Email content templates
export const EMAIL_TEMPLATES = {
  confirmation: {
    subject: "Thank you for contacting Me & My Dubai",
    body: `Thank you for reaching out to Me & My Dubai. We have received your message and our team will get back to you shortly.
    
Kind regards,
Me & My Dubai Team`
  },
  newsletterConfirmation: {
    subject: "Welcome to Me & My Dubai Newsletter",
    body: `Thank you for subscribing to our newsletter. You'll now receive the latest updates on Dubai's real estate market and investment opportunities.
    
Kind regards,
Me & My Dubai Team`
  }
};
