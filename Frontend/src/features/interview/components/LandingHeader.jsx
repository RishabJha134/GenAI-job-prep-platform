import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

const LandingHeader = ({ user, handleLogout }) => {
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

  const handleLogoClick = (e) => {
    if (window.location.pathname === "/") {
      if (window.location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const displayName = capitalizeFirstLetter(user?.username || user?.name || "User");

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-surface-main/90 border-border-subtle shadow-md backdrop-blur-xl' : 'bg-surface-main/60 border-transparent backdrop-blur-xl'}`} id="navbar">
      <div className="flex justify-between items-center h-header-height px-gutter max-w-container-max mx-auto">
        <Link to="/" onClick={handleLogoClick} className="text-headline-lg font-headline-lg text-[#c0c1ff] tracking-tighter hover:scale-105 transition-transform duration-200 cursor-pointer">
          ResumeAI
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" href="#how-it-works">How it Works</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" href="#features">Features</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" href="#pricing">Pricing</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" href="#about">About</a>
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-on-surface-variant text-sm font-medium leading-normal mr-2 hidden md:inline">Welcome, {displayName}</span>
              <button onClick={() => navigate("/dashboard")} className="bg-primary-container text-white font-label-sm text-label-sm px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform duration-200 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(128,131,255,0.3)]">
                Dashboard
              </button>
              <button onClick={handleLogout} className="bg-red-500/20 text-red-400 font-label-sm text-label-sm px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform duration-200 cursor-pointer active:scale-95 ml-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/login")} className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors hover:scale-105 duration-200 cursor-pointer active:scale-95">
                Sign In
              </button>
              <button onClick={() => navigate("/register")} className="bg-primary-container text-white font-label-sm text-label-sm px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform duration-200 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(128,131,255,0.3)]">
                Get Started Free
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
