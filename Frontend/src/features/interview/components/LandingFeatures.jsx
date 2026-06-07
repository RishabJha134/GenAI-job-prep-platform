import React from "react";

const LandingFeatures = () => {
  return (
    <section className="py-24 bg-surface-main" id="features">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="mb-16 text-left">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Core Capabilities</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">A comprehensive suite of tools designed to perfect your professional presentation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Feature 1 (Large) */}
          <div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col justify-end group border border-[#333466]/30">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-highest to-surface-main opacity-50"></div>
            <div className="relative z-10 w-full md:w-2/3 text-left">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center mb-4 border border-primary/20">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>circles_ext</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Resume Optimization</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Ensure your resume passes Applicant Tracking Systems (ATS) with flying colors. Get keyword suggestions and formatting fixes instantly.</p>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity mix-blend-screen pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #8083ff 0%, transparent 70%)' }}></div>
          </div>
          
          {/* Feature 2 */}
          <div className="glass-card rounded-2xl p-8 flex flex-col hover:border-primary/50 transition-colors text-left border border-[#333466]/30">
            <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center mb-auto border border-primary/20">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>smartphone</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Mock Interviews</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Practice with our AI persona tailored to your target role. Receive real-time feedback on tone and content.</p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="glass-card rounded-2xl p-8 flex flex-col hover:border-primary/50 transition-colors text-left border border-[#333466]/30">
            <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center mb-auto border border-primary/20">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>agender</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Skill Gap Analysis</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Identify missing skills compared to industry standards and top candidates in your field.</p>
            </div>
          </div>
          
          {/* Feature 4 (Large) */}
          <div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col justify-end group border border-[#333466]/30">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-highest to-surface-main opacity-50"></div>
            <div className="relative z-10 w-full md:w-2/3 text-left">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center mb-4 border border-primary/20">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>description</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Generate ATS Resume</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Instantly build a professional, perfectly formatted, and ATS-compliant resume matching job descriptions perfectly.</p>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity mix-blend-screen pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #8083ff 0%, transparent 70%)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
