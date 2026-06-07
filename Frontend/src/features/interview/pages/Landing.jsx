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
      
      <LandingHeader user={user} handleLogout={handleLogout} />

      <main className="flex-grow pt-header-height">
        
        <LandingHero user={user} />

        <LandingHowItWorks />

        <LandingFeatures />

        <LandingPricing user={user} />

        <LandingAbout />

        <LandingTestimonials />

      </main>

      <LandingFooter />

    </div>
  );
};

export default Landing;
