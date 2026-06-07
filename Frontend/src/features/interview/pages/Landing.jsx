import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../auth/hooks/useAuth";

const Landing = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-body-md antialiased overflow-x-hidden selection:bg-primary/30 selection:text-primary-fixed bg-surface-main text-on-surface">
      {/* Immutable Shared Component: TopNavBar + Hero + Features */}
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#111122] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              
              <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#242447] px-10 py-3">
                <div className="flex items-center gap-4 text-white">
                  <div className="size-4">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_6_543)">
                        <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                        <path clipRule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fillRule="evenodd"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_543"><rect fill="white" height="48" width="48"></rect></clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">ResumeAI</h2>
                </div>
                
                <div className="flex flex-1 justify-end gap-8">
                  <div className="flex items-center gap-9">
                    <a className="text-white text-sm font-medium leading-normal hover:text-indigo-400 transition-colors cursor-pointer" href="#how-it-works">How it Works</a>
                    <a className="text-white text-sm font-medium leading-normal hover:text-indigo-400 transition-colors cursor-pointer" href="#features">Features</a>
                    <a className="text-white text-sm font-medium leading-normal hover:text-indigo-400 transition-colors cursor-pointer" href="#pricing">Pricing</a>
                    <a className="text-white text-sm font-medium leading-normal hover:text-indigo-400 transition-colors cursor-pointer" href="#about">About</a>
                  </div>
                  <div className="flex gap-2 items-center">
                    {user ? (
                      <>
                        <span className="text-white text-sm font-medium leading-normal mr-4">Welcome, {user.username || user.name || "User"}</span>
                        <button onClick={() => navigate("/dashboard")} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-indigo-500 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-indigo-600 transition-colors">
                          <span className="truncate">Dashboard</span>
                        </button>
                        <button onClick={handleLogout} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-500/20 text-red-400 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-500/30 transition-colors">
                          <span className="truncate">Logout</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => navigate("/register")} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-indigo-500 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-indigo-600 transition-colors">
                          <span className="truncate">Get Started Free</span>
                        </button>
                        <button onClick={() => navigate("/login")} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#242447] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#333366] transition-colors">
                          <span className="truncate">Sign In</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </header>
              
              <div className="@container">
                <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6EP7ptgfBAP_GQ-nFgInPXD3HAXiy9gc7IC8S3PTzufD_nFapzB2hyyO8nHVH4YxqpVEW49eb_jdhHY5z8id3GFDB14b5TZRYaHhsDqVdUg8uYgOFOzQ6Y2Q_Ys6iSNkb23gT4zCjf2zvCvdQ_LIYppiot516d0y3GFzlqcxevEtz_Gr6Y4d9LTcSvGPE7y3UUYKeK7yYvrCfm2mpTQqi5QZe3DFaYGbOhsB0NaV3zUZ4xs8lDe67k6h5jCaH53rBPopDKL_rZv0")' }}></div>
                  <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                    <div className="flex flex-col gap-2 text-left">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        Accelerate Your Career with AI.
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        Smart resume analysis, realistic mock interviews, and personalized career coaching.
                      </h2>
                    </div>
                    <button onClick={() => navigate(user ? "/dashboard" : "/register")} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-indigo-500 text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-indigo-600 transition-colors">
                      <span className="truncate">{user ? "Go to Dashboard" : "Get Started Free"}</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5" id="how-it-works">How It Works</h2>
              <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                <div className="flex flex-col items-center gap-1 pt-3">
                  <div className="text-white flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>upload</span>
                  </div>
                  <div className="w-[1.5px] bg-[#333466] h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col pt-3 pb-5"><p className="text-white text-base font-medium leading-normal">Upload Resume</p></div>
                
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[1.5px] bg-[#333466] h-2"></div>
                  <div className="text-white flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>article</span>
                  </div>
                  <div className="w-[1.5px] bg-[#333466] h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col pt-3 pb-5"><p className="text-white text-base font-medium leading-normal">AI Analysis</p></div>
                
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[1.5px] bg-[#333466] h-2"></div>
                  <div className="text-white flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>highlighter_size_1</span>
                  </div>
                  <div className="w-[1.5px] bg-[#333466] h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col pt-3 pb-5"><p className="text-white text-base font-medium leading-normal">Personalized Insights</p></div>
                
                <div className="flex flex-col items-center gap-1 pb-3">
                  <div className="w-[1.5px] bg-[#333466] h-2"></div>
                  <div className="text-white flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>description</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col pt-3 pb-5"><p className="text-white text-base font-medium leading-normal">Generate ATS Resume</p></div>
              </div>
              
              <div className="flex flex-col gap-10 px-4 py-10 @container" id="features">
                <div className="flex flex-col gap-4">
                  <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Core Features
                  </h1>
                  <p className="text-white text-base font-normal leading-normal max-w-[720px]">Everything you need to land your dream job faster.</p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#333466] bg-[#1a1a33] p-4 flex-col">
                    <div className="text-white flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>circles_ext</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-white text-base font-bold leading-tight">Resume Optimization</h2>
                      <p className="text-[#9293c8] text-sm font-normal leading-normal">Ensure your resume is ATS-friendly with smart keywords.</p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#333466] bg-[#1a1a33] p-4 flex-col">
                    <div className="text-white flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>smartphone</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-white text-base font-bold leading-tight">Mock Interviews</h2>
                      <p className="text-[#9293c8] text-sm font-normal leading-normal">AI-powered feedback for realistic interview prep.</p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#333466] bg-[#1a1a33] p-4 flex-col">
                    <div className="text-white flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>agender</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-white text-base font-bold leading-tight">Skill Gap Analysis</h2>
                      <p className="text-[#9293c8] text-sm font-normal leading-normal">Identify and bridge your skill gaps for your desired role.</p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#333466] bg-[#1a1a33] p-4 flex-col">
                    <div className="text-white flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>description</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-white text-base font-bold leading-tight">Generate ATS Resume</h2>
                      <p className="text-[#9293c8] text-sm font-normal leading-normal">Instantly create a beautiful, perfectly formatted, ATS-compliant resume.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="py-24 px-8 max-w-[1280px] mx-auto border-t border-border-subtle bg-surface-main" id="pricing">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-on-surface mb-4" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Simple, Transparent Pricing</h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto">Invest in your career with plans designed for every stage of your journey. No hidden fees.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-surface-container-high border border-outline-variant rounded-xl p-8 flex flex-col hover:border-primary/50 transition-colors duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-on-surface mb-2" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Basic</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-on-surface" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>$0</span>
                <span className="text-on-surface-variant text-base">/ month</span>
              </div>
              <p className="text-sm text-on-surface-variant">Perfect for getting started with AI resume analysis.</p>
            </div>
            <ul className="flex-1 space-y-4 mb-8 text-sm font-medium text-on-surface">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                1 Resume Parse per month
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                Basic ATS Compatibility Score
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant/50">
                <span className="material-symbols-outlined text-sm">cancel</span>
                AI Mock Interviews
              </li>
            </ul>
            <button onClick={() => navigate(user ? "/dashboard" : "/register")} className="w-full py-3 rounded-lg border border-outline-variant text-on-surface text-sm font-bold hover:bg-surface-container-highest transition-colors">
              Start Free
            </button>
          </div>
          
          {/* Pro Tier */}
          <div className="bg-gradient-to-br from-surface-container-high to-surface-main border border-primary rounded-xl p-8 flex flex-col relative transform hover:-translate-y-1 transition-transform duration-300 shadow-[0_4px_30px_rgba(192,193,255,0.1)]">
            <div className="absolute top-0 right-0 bg-primary text-on-primary px-4 py-1 rounded-bl-xl rounded-tr-xl text-xs font-bold tracking-wider">
              RECOMMENDED
            </div>
            <div className="mb-8 mt-2">
              <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                Pro AI <span className="material-symbols-outlined text-primary text-xl">temp_preferences_custom</span>
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-on-surface" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>$19</span>
                <span className="text-on-surface-variant text-base">/ month</span>
              </div>
              <p className="text-sm text-on-surface-variant">Unlock full AI capabilities to land your dream job faster.</p>
            </div>
            <ul className="flex-1 space-y-4 mb-8 text-sm font-medium text-on-surface">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Unlimited Resume Parsing
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Advanced ATS Optimization &amp; Rewriting
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Unlimited AI Mock Interviews
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Personalized Career Coaching Insights
              </li>
            </ul>
            <button onClick={() => navigate(user ? "/dashboard" : "/register")} className="w-full py-3 rounded-lg bg-primary text-on-primary text-sm font-bold hover:bg-primary-fixed transition-colors shadow-[0_0_15px_rgba(192,193,255,0.3)]">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-8 border-t border-border-subtle bg-surface-container-lowest" id="about">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative rounded-xl overflow-hidden aspect-video border border-outline-variant/30">
            <div className="absolute inset-0 bg-surface-overlay backdrop-blur-[2px] z-10 pointer-events-none mix-blend-overlay"></div>
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzFjVi_JDjI6A-nBwgb61eekS1bzD--tv59Md_nd6sMtVAuEOaZYC4PMasvMRKSWTlJfmVG-syJtl-5TdUaycpKSeVoPQAh0CxrasZl61EWjjIdpg6d2iS7Vv72du748x9YSfHG6iUmbVShKTgVB6mwG6Us68VVYuwdwQD5K0hfYYh14OllD1FPYw_quJr-9TSr7jeQUharDlck39kM-NJeZpKW726iTozc531tUsHQvy_VoTE-aDrRa17RHXD74d-Q8fpme2YjkQ')" }}></div>
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/10 border border-secondary/20 w-fit">
              <span className="material-symbols-outlined text-secondary text-sm">radar</span>
              <span className="text-secondary text-xs font-medium tracking-wide uppercase">Our Mission</span>
            </div>
            <h2 className="text-4xl font-bold text-on-surface" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Democratizing Career Growth</h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              At ResumeAI, we believe that everyone deserves access to enterprise-grade career coaching. The traditional job application process is broken, often filtering out incredible talent due to biased or rigid ATS systems.
            </p>
            <p className="text-base text-on-surface-variant leading-relaxed">
              We built our Neo-Noir intelligence engine to level the playing field. By combining deep learning with recruitment expertise, we provide you with the tools to showcase your true potential, bypass arbitrary filters, and step into the role you deserve with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8 bg-surface-main" id="testimonials">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-on-surface mb-4" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Trusted by Professionals</h2>
            <p className="text-base text-on-surface-variant">Join thousands who have successfully navigated the modern hiring landscape.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-surface-card border border-border-subtle rounded-xl p-6 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="material-symbols-outlined text-surface-variant text-4xl mb-4">format_quote</span>
              <p className="text-base text-on-surface-variant mb-8 flex-1 italic">
                "The ATS optimization feature is a game-changer. I was struggling to get callbacks, but after tweaking my resume with ResumeAI's keyword suggestions, my interview rate tripled."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-xl font-bold border border-secondary/30" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                  EK
                </div>
                <div>
                  <p className="text-sm text-on-surface font-bold">Elena K.</p>
                  <p className="text-xs text-on-surface-variant">Senior Product Designer</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-surface-card border border-border-subtle rounded-xl p-6 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="material-symbols-outlined text-surface-variant text-4xl mb-4">format_quote</span>
              <p className="text-base text-on-surface-variant mb-8 flex-1 italic">
                "The AI mock interviews were incredibly realistic. It pointed out a habit I had of underselling my technical skills. I fixed it and landed a role at a FAANG company."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-xl font-bold border border-primary/30" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                  MR
                </div>
                <div>
                  <p className="text-sm text-on-surface font-bold">Marcus R.</p>
                  <p className="text-xs text-on-surface-variant">Backend Engineer</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-surface-card border border-border-subtle rounded-xl p-6 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="material-symbols-outlined text-surface-variant text-4xl mb-4">format_quote</span>
              <p className="text-base text-on-surface-variant mb-8 flex-1 italic">
                "I love the dark, sleek interface. It doesn't feel like a boring utility; it feels like a powerful tool. The skill gap analysis helped me focus my learning exactly where it mattered."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center text-xl font-bold border border-outline-variant" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                  SJ
                </div>
                <div>
                  <p className="text-sm text-on-surface font-bold">Sarah J.</p>
                  <p className="text-xs text-on-surface-variant">Data Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-surface-container-lowest pt-16 pb-8 px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-on-surface mb-2">
              <span className="material-symbols-outlined text-primary">psychology</span>
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>ResumeAI</span>
            </div>
            <p className="text-sm text-on-surface-variant max-w-xs">
              Your personal AI career command center. Navigate the modern job market with intelligence and precision.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-on-surface mb-2">Product</h4>
            <Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="#features">Features</Link>
            <Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="#pricing">Pricing</Link>
            <Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="#about">Use Cases</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-on-surface mb-2">Company</h4>
            <Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="#about">About Us</Link>
            <Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="#">Careers</Link>
            <Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="#">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-on-surface mb-2">Legal</h4>
            <Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="#">Privacy Policy</Link>
            <Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="#">Terms of Service</Link>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-surface-variant">© 2024 ResumeAI. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="text-on-surface-variant hover:text-primary transition-colors" to="#">
              <span className="material-symbols-outlined text-xl">share</span>
            </Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors" to="#">
              <span className="material-symbols-outlined text-xl">mail</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
