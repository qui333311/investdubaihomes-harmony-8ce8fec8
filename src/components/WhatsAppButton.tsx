
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  variant?: "fixed" | "inline";
  className?: string;
}

const WhatsAppButton = ({
  phoneNumber,
  message = "Hello! I'm interested in learning more about Dubai properties.",
  variant = "inline",
  className = "",
}: WhatsAppButtonProps) => {
  // Format the phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  
  // Create the WhatsApp URL with the phone number and optional message
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  // For fixed position button (floating)
  if (variant === "fixed") {
    return (
      <a 
        href={whatsappUrl} 
        target="_blank"
        rel="noopener noreferrer" 
        className={`fixed bottom-6 right-6 z-50 shadow-lg rounded-full ${className}`}
      >
        <Button 
          size="lg"
          className="bg-[#25D366] hover:bg-[#25D366]/90 rounded-full h-16 w-16 p-0 flex items-center justify-center"
        >
          <MessageSquare className="h-8 w-8 text-white" />
        </Button>
      </a>
    );
  }
  
  // Default inline button
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2">
        <MessageSquare className="h-5 w-5" />
        WhatsApp Contact
      </Button>
    </a>
  );
};

export default WhatsAppButton;
