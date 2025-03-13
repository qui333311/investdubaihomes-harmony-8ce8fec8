
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import ROI from "./pages/ROI";
import CompanySetup from "./pages/CompanySetup";
import Contact from "./pages/Contact";
import Financing from "./pages/Financing";
import Blog from "./pages/Blog";
import CryptoBuying from "./pages/CryptoBuying";
import NotFound from "./pages/NotFound";
import UAEKnowHow from "./pages/UAEKnowHow";
import AboutUs from "./pages/AboutUs";
import AreaDetail from "./pages/AreaDetail";
import PropertyUpload from "./pages/Admin/PropertyUpload";
import UAEKnowHowDetail from "./pages/UAEKnowHowDetail";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import ScrollReset from "./components/ScrollReset";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <CurrencyProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollReset />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:id" element={<PropertyDetail />} />
              <Route path="/roi" element={<ROI />} />
              <Route path="/company-setup" element={<CompanySetup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/financing" element={<Financing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/crypto-buying" element={<CryptoBuying />} />
              <Route path="/uae-know-how" element={<UAEKnowHow />} />
              <Route path="/uae-know-how/:areaId" element={<AreaDetail />} />
              <Route path="/uae-know-how/:categoryId" element={<UAEKnowHowDetail />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/admin/property-upload" element={<PropertyUpload />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CurrencyProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
