import React from "react";
import { useNavigate } from "react-router";

const LandingHero = ({ user }) => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-surface-main">
      <div className="hero-glow"></div>
      <div className="max-w-container-max mx-auto px-gutter relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl text-left">
          <h1 className="font-headline-xl text-headline-xl md:text-[56px] md:leading-[1.1] mb-6 text-on-surface tracking-tight">
            Accelerate Your Career with <span className="text-primary-container">AI.</span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant text-lg md:text-xl mb-10 max-w-xl">
            Smart resume analysis, realistic mock interviews, and personalized career coaching to land your dream job faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => navigate(user ? "/dashboard" : "/register")} className="bg-primary-container text-white px-8 py-4 rounded-lg font-label-sm text-label-sm font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(128,131,255,0.4)] flex justify-center items-center gap-2 group cursor-pointer active:scale-95 duration-200">
              {user ? "Go to Dashboard" : "Get Started Free"}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button onClick={() => {
              const el = document.getElementById("how-it-works");
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} className="border border-outline-variant text-on-surface px-8 py-4 rounded-lg font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex justify-center items-center gap-2 cursor-pointer active:scale-95 duration-200">
              View Demo
            </button>
          </div>
        </div>
        <div className="relative lg:ml-auto w-full max-w-lg aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden glass-card shadow-2xl group border border-[#333466]/30">
          <img 
            alt="Abstract tech dashboard preview showing data visualization and code." 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYi1y9Hjlg2uk89ngQ1R2OyFdD1HTkDl2JxbuTmFLBjYeUPoSFtsjXfP74xQKNIdI3v4LCejZGaA98d7YatCTtc2SjFhkGbOYxlnJVKhiZCZSmdJbH3DsJXcL00sVXv0frJ0ag95HOwXuCYwVf1ny_OHqNB3Csz9foUFVlnIk1zPgAdEZF8zx7oGBdkpPn0e5GLssAtKk5-4ejWZaW029njAFeW7kencqrRgVipOz225w77mkjl9SR1DTAJyENuqduaY6bESstEsE" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-main to-transparent opacity-60 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
