import React from "react";

const LandingHowItWorks = () => {
  return (
    <section className="py-24 bg-surface-container-lowest" id="how-it-works">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">How ResumeAI Works</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Four simple steps to transform your career trajectory using our advanced AI engine.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="glass-card p-6 rounded-xl relative overflow-hidden group hover:border-primary-container transition-colors text-left border border-[#333466]/30">
            <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 border border-primary-container/20 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '24px' }}>upload_file</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">1. Upload Resume</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Simply upload your current resume in PDF or Word format. Our parser immediately extracts your experience.</p>
            <div className="absolute top-0 right-0 p-4 text-outline-variant font-headline-xl opacity-20">01</div>
          </div>
          {/* Step 2 */}
          <div className="glass-card p-6 rounded-xl relative overflow-hidden group hover:border-primary-container transition-colors text-left border border-[#333466]/30">
            <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 border border-primary-container/20 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '24px' }}>psychology</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">2. AI Analysis</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Our neo-noir tech engine scans your profile against thousands of successful candidates and ATS requirements.</p>
            <div className="absolute top-0 right-0 p-4 text-outline-variant font-headline-xl opacity-20">02</div>
          </div>
          {/* Step 3 */}
          <div className="glass-card p-6 rounded-xl relative overflow-hidden group hover:border-primary-container transition-colors text-left border border-[#333466]/30">
            <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 border border-primary-container/20 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '24px' }}>lightbulb</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">3. Personalized Insights</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Receive actionable feedback, optimized bullet points, and a customized mock interview plan.</p>
            <div className="absolute top-0 right-0 p-4 text-outline-variant font-headline-xl opacity-20">03</div>
          </div>
          {/* Step 4 */}
          <div className="glass-card p-6 rounded-xl relative overflow-hidden group hover:border-primary-container transition-colors text-left border border-[#333466]/30">
            <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 border border-primary-container/20 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '24px' }}>description</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">4. Generate ATS Resume</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Instantly generate a beautifully formatted, fully optimized, and ATS-compliant resume.</p>
            <div className="absolute top-0 right-0 p-4 text-outline-variant font-headline-xl opacity-20">04</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHowItWorks;
