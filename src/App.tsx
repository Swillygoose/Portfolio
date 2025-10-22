import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ContactPage } from "./pages/ContactPage";
import { CVPage } from "./pages/CVPage";
import { HealthTrackProject } from "./pages/projects/HealthTrackProject";
import { EcommerceProject } from "./pages/projects/EcommerceProject";
import { BrandFlowProject } from "./pages/projects/BrandFlowProject";
import { FoodShareProject } from "./pages/projects/FoodShareProject";
import { TechStartProject } from "./pages/projects/TechStartProject";
import { PortfolioWebsiteProject } from "./pages/projects/PortfolioWebsiteProject";
import { useState } from "react";
import { Toaster } from "sonner@2.0.3";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Scroll to top instantly when changing pages
    window.scrollTo({ top: 0, behavior: "instant" });
    // Also ensure we're at top after render
    setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage onNavigate={handleNavigate} />;
      case "About":
        return <AboutPage onNavigate={handleNavigate} />;
      case "Portfolio":
        return <PortfolioPage onNavigate={handleNavigate} />;
      case "CV":
        return <CVPage />;
      case "Contact":
        return <ContactPage />;
      case "project-healthtrack":
        return <HealthTrackProject onNavigate={handleNavigate} />;
      case "project-ecommerce":
        return <EcommerceProject onNavigate={handleNavigate} />;
      case "project-brandflow":
        return <BrandFlowProject onNavigate={handleNavigate} />;
      case "project-foodshare":
        return <FoodShareProject onNavigate={handleNavigate} />;
      case "project-techstart":
        return <TechStartProject onNavigate={handleNavigate} />;
      case "project-portfolio":
        return <PortfolioWebsiteProject onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFE6D4]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-to-r from-[#CD2C58] to-[#E06B80] text-center">
        <p className="text-white/80">
          © 2025 Sandra Wilmann. Designed & built with passion
        </p>
      </footer>
      
      {/* Toast notifications */}
      <Toaster position="bottom-right" richColors />
    </div>
  );
}