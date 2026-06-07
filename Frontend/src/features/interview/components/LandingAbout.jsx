import React from "react";

const LandingAbout = () => {
  return (
    <section className="py-24 bg-surface-main border-t border-border-subtle" id="about">
      <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative rounded-xl overflow-hidden aspect-video border border-outline-variant/30 glass-card">
          <div className="absolute inset-0 bg-surface-overlay backdrop-blur-[2px] z-10 pointer-events-none mix-blend-overlay"></div>
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzFjVi_JDjI6A-nBwgb61eekS1bzD--tv59Md_nd6sMtVAuEOaZYC4PMasvMRKSWTlJfmVG-syJtl-5TdUaycpKSeVoPQAh0CxrasZl61EWjjIdpg6d2iS7Vv72du748x9YSfHG6iUmbVShKTgVB6mwG6Us68VVYuwdwQD5K0hfYYh14OllD1FPYw_quJr-9TSr7jeQUharDlck39kM-NJeZpKW726iTozc531tUsHQvy_VoTE-aDrRa17RHXD74d-Q8fpme2YjkQ')" }}
          ></div>
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/10 border border-secondary/20 w-fit">
            <span className="material-symbols-outlined text-secondary text-sm">radar</span>
            <span className="text-secondary font-label-xs tracking-wide uppercase">Our Mission</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Democratizing Career Growth</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            At ResumeAI, we believe that everyone deserves access to enterprise-grade career coaching. The traditional job application process is broken, often filtering out incredible talent due to biased or rigid ATS systems.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We built our Neo-Noir intelligence engine to level the playing field. By combining deep learning with recruitment expertise, we provide you with the tools to showcase your true potential, bypass arbitrary filters, and step into the role you deserve with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
