import React from "react";
import { Link } from "react-router";

const LandingFooter = () => {
  const handleScrollToTop = (e) => {
    if (window.location.pathname === "/") {
      if (window.location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <footer className="border-t border-border-subtle bg-surface-main py-12 w-full">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" onClick={handleScrollToTop} className="font-headline-md text-headline-md text-[#c0c1ff] tracking-tight hover:opacity-80 transition-opacity cursor-pointer">
          ResumeAI
        </Link>
        <nav className="flex flex-wrap justify-center gap-6">
          <a className="font-label-xs text-label-xs text-on-surface-variant hover:text-secondary transition-colors cursor-pointer" href="#how-it-works">How it Works</a>
          <a className="font-label-xs text-label-xs text-on-surface-variant hover:text-secondary transition-colors cursor-pointer" href="#features">Features</a>
          <a className="font-label-xs text-label-xs text-on-surface-variant hover:text-secondary transition-colors cursor-pointer" href="#pricing">Pricing</a>
          <a className="font-label-xs text-label-xs text-on-surface-variant hover:text-secondary transition-colors cursor-pointer" href="#about">About</a>
        </nav>
        <div className="font-label-xs text-label-xs text-on-surface-variant">
          © 2026 ResumeAI Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
