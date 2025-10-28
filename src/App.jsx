import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { ModernNavbar } from "./components/ModernNavbar";
import { EnhancedLandingPage } from "./components/EnhancedLandingPage";
import { GlassmorphismUpload } from "./components/GlassmorphismUpload";
import { PremiumResults } from "./components/PremiumResults";
import { LeafUpload } from "./components/LeafUpload";
import { BarkUpload } from "./components/BarkUpload";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentState, setCurrentState] = useState("home");

  const handleNavigation = (page) => setCurrentState(page);
  const handleBackToHome = () => setCurrentState("home");
  const handleGoToUpload = () => setCurrentState("upload");

  return (
    <ThemeProvider defaultTheme="light" storageKey="plantid-theme">
      <div className="min-h-screen">
        <Toaster position="top-right" />
        {currentState !== "home" && (
          <ModernNavbar
            onLogoClick={handleBackToHome}
            onNavigate={handleNavigation}
            currentPage={currentState}
          />
        )}

        <div className={currentState !== "home" ? "pt-16" : ""}>
          {currentState === "home" && (
            <EnhancedLandingPage
              onGetStarted={handleGoToUpload}
              onHowItWorks={() => setCurrentState("about")}
            />
          )}

          {currentState === "upload" && (
            <GlassmorphismUpload
              onNavigate={setCurrentState}
              onBack={handleBackToHome}
            />
          )}

          {currentState === "leaf" && (
            <LeafUpload onBack={() => setCurrentState("upload")} />
          )}

          {currentState === "bark" && (
            <BarkUpload onBack={() => setCurrentState("upload")} />
          )}

          {currentState === "results" && (
            <PremiumResults
              onBack={() => setCurrentState("upload")}
              onNewAnalysis={() => setCurrentState("upload")}
            />
          )}

          {currentState === "about" && <AboutPage />}
          {currentState === "contact" && <ContactPage />}
        </div>
      </div>
    </ThemeProvider>
  );
}
