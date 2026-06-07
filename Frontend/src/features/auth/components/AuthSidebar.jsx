import React from "react";
import { Link } from "react-router";

const AuthSidebar = () => {
  return (
    <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-between p-12 overflow-hidden" style={{ background: '#000000' }}>
      {/* PURE CSS Animated Background (No SVG to avoid routing bugs) */}
      <div className="absolute inset-0 w-full h-full opacity-60 pointer-events-none overflow-hidden">
        {/* Dark base */}
        <div className="absolute inset-0 bg-[#09090b]"></div>
        
        {/* Indigo Glow Circle */}
        <div 
          className="absolute rounded-full bg-[#6366f1] opacity-40 blur-[80px]"
          style={{
            width: '600px',
            height: '600px',
            top: 'calc(50% - 300px)',
            left: 'calc(50% - 300px)',
            animation: 'float1 15s infinite ease-in-out alternate'
          }}
        ></div>

        {/* Purple Glow Circle */}
        <div 
          className="absolute rounded-full bg-[#a855f7] opacity-30 blur-[80px]"
          style={{
            width: '700px',
            height: '700px',
            top: 'calc(80% - 350px)',
            left: 'calc(50% - 350px)',
            animation: 'float2 20s infinite ease-in-out alternate'
          }}
        ></div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float1 {
          0% { transform: translate(-200px, -100px) scale(1); }
          100% { transform: translate(200px, 200px) scale(1.1); }
        }
        @keyframes float2 {
          0% { transform: translate(100px, 200px) scale(1); }
          100% { transform: translate(-200px, -200px) scale(1.1); }
        }
      `}} />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 w-fit hover:opacity-85 transition-opacity cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
            <span className="material-symbols-outlined text-indigo-400">neurology</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>ResumeAI</span>
        </Link>

        {/* Main Copy */}
        <div className="max-w-md">
          <h1 className="text-[40px] font-bold leading-[1.2] tracking-tight mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Your AI-Powered Career Coach
          </h1>
          <p className="text-base leading-relaxed text-[#acaaae] mb-12">
            Accelerate your career journey with intelligent resume analysis, targeted mock interviews, and skill gap identification.
          </p>

          {/* Feature Rows */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-400/10 text-indigo-400 border border-indigo-400/20">
                <span className="material-symbols-outlined text-lg">description</span>
              </div>
              <span className="text-sm font-medium">Resume Analysis</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-400/10 text-pink-400 border border-pink-400/20">
                <span className="material-symbols-outlined text-lg">record_voice_over</span>
              </div>
              <span className="text-sm font-medium">Mock Interviews</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-400/10 text-violet-400 border border-violet-400/20">
                <span className="material-symbols-outlined text-lg">radar</span>
              </div>
              <span className="text-sm font-medium">Skill Gaps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSidebar;
