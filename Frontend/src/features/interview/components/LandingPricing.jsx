import React from "react";
import { useNavigate } from "react-router";

const LandingPricing = ({ user }) => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-surface-container-lowest" id="pricing">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Simple, Transparent Pricing</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Start for free, upgrade when you need advanced career firepower.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="glass-card rounded-2xl p-8 border-border-subtle flex flex-col text-left border border-[#333466]/30">
            <div className="mb-8">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Basic</h3>
              <div className="flex items-baseline gap-2">
                <span className="font-headline-xl text-headline-xl text-on-surface">$0</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">/month</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-4 text-sm">Perfect for getting started with AI resume analysis.</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm text-on-surface">
                <span className="material-symbols-outlined text-accent-emerald text-[20px]">check_circle</span>
                1 Resume Parse per month
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface">
                <span className="material-symbols-outlined text-accent-emerald text-[20px]">check_circle</span>
                Basic ATS Compatibility Score
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant opacity-50">
                <span className="material-symbols-outlined text-[20px]">cancel</span>
                AI Mock Interviews
              </li>
            </ul>
            <button onClick={() => navigate(user ? "/dashboard" : "/register")} className="w-full border border-outline-variant text-on-surface py-3 rounded-lg font-label-sm text-label-sm hover:bg-surface-container-high transition-colors cursor-pointer">
              Start Free
            </button>
          </div>
          
          {/* Pro Tier */}
          <div className="glass-card rounded-2xl p-8 border-primary-container relative flex flex-col shadow-[0_0_30px_rgba(128,131,255,0.1)] text-left border border-indigo-500/50">
            <div className="absolute top-0 right-0 bg-primary text-on-primary px-4 py-1 rounded-bl-xl rounded-tr-xl font-label-xs font-bold tracking-wider uppercase">Most Popular</div>
            <div className="mb-8">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Pro Command Center</h3>
              <div className="flex items-baseline gap-2">
                <span className="font-headline-xl text-headline-xl text-on-surface">$19</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">/month</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-4 text-sm">Unlock full AI capabilities to land your dream job faster.</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm text-on-surface">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                Unlimited Resume Parsing
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                Advanced ATS Optimization &amp; Rewriting
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                Unlimited AI Mock Interviews
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                Personalized Career Coaching Insights
              </li>
            </ul>
            <button onClick={() => navigate(user ? "/dashboard" : "/register")} className="w-full bg-primary-container text-white py-3 rounded-lg font-label-sm text-label-sm font-bold hover:scale-105 transition-transform shadow-lg cursor-pointer">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPricing;
