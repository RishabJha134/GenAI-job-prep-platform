import React from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import LandingHeader from "../components/LandingHeader";
import LandingHero from "../components/LandingHero";
import LandingHowItWorks from "../components/LandingHowItWorks";
import LandingFeatures from "../components/LandingFeatures";
import LandingPricing from "../components/LandingPricing";
import LandingAbout from "../components/LandingAbout";
import LandingTestimonials from "../components/LandingTestimonials";
import LandingFooter from "../components/LandingFooter";

const Landing = () => {
  const { user, handleLogout } = useAuth();

  return (
    <div className="font-body-md antialiased overflow-x-hidden selection:bg-primary/30 selection:text-primary-fixed bg-surface-main text-on-surface min-h-screen flex flex-col relative">
      
      {/* Top Navbar */}
      <LandingHeader user={user} handleLogout={handleLogout} />

      {/* Main Content Area */}
      <main className="flex-grow pt-header-height">
        
        {/* Hero Section */}
        <LandingHero user={user} />

        {/* How It Works Section */}
        <LandingHowItWorks />

        {/* Features Bento Grid */}
        <LandingFeatures />

        {/* Pricing Section */}
        <LandingPricing user={user} />

        {/* About Us Section */}
        <LandingAbout />

        {/* Testimonials Section */}
        <LandingTestimonials />

      </main>

      {/* Footer */}
      <LandingFooter />

    </div>
  );
};

export default Landing;
