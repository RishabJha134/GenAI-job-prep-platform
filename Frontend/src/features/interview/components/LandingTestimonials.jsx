import React from "react";

const LandingTestimonials = () => {
  return (
    <section className="py-24 bg-surface-container-lowest border-t border-border-subtle" id="testimonials">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">Trusted by Professionals</h2>
          <p className="font-body-md text-body-md text-on-surface-variant font-medium">Join thousands who have successfully navigated the modern hiring landscape.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-surface-card border border-border-subtle rounded-xl p-6 flex flex-col relative overflow-hidden group text-left">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="material-symbols-outlined text-surface-variant text-4xl mb-4">format_quote</span>
            <p className="font-body-md text-on-surface-variant mb-8 flex-1 italic text-sm">
              "The ATS optimization feature is a game-changer. I was struggling to get callbacks, but after tweaking my resume with ResumeAI's keyword suggestions, my interview rate tripled."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-headline-md font-bold border border-secondary/30">
                EK
              </div>
              <div>
                <p className="font-label-sm text-on-surface font-bold">Elena K.</p>
                <p className="font-label-xs text-on-surface-variant">Senior Product Designer</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-surface-card border border-border-subtle rounded-xl p-6 flex flex-col relative overflow-hidden group text-left">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="material-symbols-outlined text-surface-variant text-4xl mb-4">format_quote</span>
            <p className="font-body-md text-on-surface-variant mb-8 flex-1 italic text-sm">
              "The AI mock interviews were incredibly realistic. It pointed out a habit I had of underselling my technical skills. I fixed it and landed a role at a FAANG company."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-md font-bold border border-primary/30">
                MR
              </div>
              <div>
                <p className="font-label-sm text-on-surface font-bold">Marcus R.</p>
                <p className="font-label-xs text-on-surface-variant">Backend Engineer</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-surface-card border border-border-subtle rounded-xl p-6 flex flex-col relative overflow-hidden group text-left">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="material-symbols-outlined text-surface-variant text-4xl mb-4">format_quote</span>
            <p className="font-body-md text-on-surface-variant mb-8 flex-1 italic text-sm">
              "I love the dark, sleek interface. It doesn't feel like a boring utility; it feels like a powerful tool. The skill gap analysis helped me focus my learning exactly where it mattered."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-headline-md font-bold border border-outline-variant">
                SJ
              </div>
              <div>
                <p className="font-label-sm text-on-surface font-bold">Sarah J.</p>
                <p className="font-label-xs text-on-surface-variant">Data Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonials;
