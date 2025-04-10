
// Email configuration file

// The target email where all contact form submissions and newsletter subscriptions will be sent
export const TARGET_EMAIL = "info@memydubai.com";

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_z7j9tk4", // Your EmailJS Service ID
  TEMPLATE_ID: "template_contact_form", // Template for contact form
  TEMPLATE_ID_NEWSLETTER: "template_newsletter", // Template for newsletter subscriptions
  TEMPLATE_ID_CONFIRMATION: "template_confirmation", // Template for confirmation emails
  PUBLIC_KEY: "rORYyxd9CQA56h8_n", // Your EmailJS Public Key
};

// Email template parameters structure (for proper integration with EmailJS templates)
export const EMAIL_TEMPLATE_PARAMS = {
  newsletter: {
    // Template variables that must be present in your EmailJS template
    required: [
      "from_name", // Name of the subscription form (e.g., "Website Newsletter")
      "from_email", // Email of the subscriber
      "to_name", // Name of the recipient (e.g., "Me & My Dubai Team")
      "to_email", // Email of the recipient (should be TARGET_EMAIL)
      "subject", // Subject of the email
      "message", // Message body
    ]
  },
  contactForm: {
    // Template variables that must be present in your EmailJS template
    required: [
      "from_name", // Name of the person contacting
      "from_email", // Email of the person contacting
      "phone", // Phone number (optional)
      "subject", // Subject of the message
      "message", // Message body
      "to_email", // Email of the recipient (should be TARGET_EMAIL)
      "to_name", // Name of the recipient (added to ensure it's included)
    ]
  },
  confirmation: {
    // Template variables that must be present in your EmailJS confirmation template
    required: [
      "to_name", // Name of the person to receive confirmation
      "to_email", // Email of the person to receive confirmation
      "from_name", // Name of your company
      "from_email", // Email of your company (should be TARGET_EMAIL)
      "reply_to", // Reply-to email (should be TARGET_EMAIL)
      "subject", // Subject of the confirmation email
      "message", // Message body
    ]
  }
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
