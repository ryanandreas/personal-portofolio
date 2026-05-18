import React from 'react';

export default function ExperienceSection() {
  return (
    <div className="flex overflow-hidden w-full flex-col py-16 px-20 bg-white antialiased text-xs max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="w-full flex flex-col items-center mb-16 pt-6 relative">
        <div 
          className="flex items-center justify-center mb-4 rounded-full shrink-0 w-8 h-8"
          style={{ 
            backgroundImage: 'radial-gradient(circle farthest-corner at 50% 50% in oklab, oklab(100% 0 0) 0%, oklab(100% 0 0) 30%, oklab(0% 0 0 / 0%) 70%)',
            boxShadow: '0 0 20px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#111111" stroke="none" className="shrink-0">
            <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
          </svg>
        </div>
        <h2 className="text-[56px] leading-[1.1] mt-0 mb-4 uppercase tracking-[0.02em] text-center font-black text-black">
          EXPERIENCE
        </h2>
        <p className="text-sm leading-[1.6] max-w-[480px] text-center text-[#555555] m-0">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>

        {/* Decorative Grid Circles / Stripes on Right */}
        <svg width="60" height="60" viewBox="0 0 60 60" className="absolute right-0 top-0">
          <clipPath id="circleClip"><circle cx="30" cy="30" r="30"/></clipPath>
          <g clipPath="url(#circleClip)" stroke="#111111" strokeWidth="3" strokeLinecap="round">
            <line x1="-10" y1="-10" x2="70" y2="70" />
            <line x1="0" y1="-20" x2="80" y2="60" />
            <line x1="-20" y1="0" x2="60" y2="80" />
            <line x1="10" y1="-30" x2="90" y2="50" />
            <line x1="-30" y1="10" x2="50" y2="90" />
            <line x1="-40" y1="20" x2="40" y2="100" />
            <line x1="20" y1="-40" x2="100" y2="40" />
          </g>
        </svg>
      </div>

      {/* Experience List */}
      <div className="flex flex-col w-full gap-4 relative z-10">
        
        {/* Item 1 - Active/Black background */}
        <div className="flex justify-between items-center w-full py-6 px-10 bg-[#1A1A1A] hover:translate-x-1 transition-transform duration-300">
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center shrink-0 bg-[#333333] w-12 h-12">
              <span className="font-extrabold text-white text-base">
                1
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-extrabold text-white text-xl m-0">
                Micro-interactions Awwwards Team
              </h3>
              <span className="opacity-80 tracking-[-0.01em] text-white text-sm">
                Focus Lab Agency - United States
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-px h-8 opacity-20 shrink-0 bg-white" />
            <span className="tracking-[0.05em] uppercase font-bold text-white text-xs">
              JOB DURATION - 2 YEARS
            </span>
          </div>
        </div>

        {/* Item 2 - White border background */}
        <div className="flex justify-between items-center w-full py-6 px-10 bg-white border border-[#CCCCCC] hover:translate-x-1 transition-transform duration-300">
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center shrink-0 bg-[#111111] w-12 h-12">
              <span className="font-extrabold text-white text-base">
                2
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-extrabold text-[#111111] text-xl m-0">
                Senior UI Designer
              </h3>
              <span className="tracking-[-0.01em] text-[#555555] text-sm">
                User-Hub - Bangladesh
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-px h-8 opacity-20 shrink-0 bg-[#111111]" />
            <span className="tracking-[0.05em] uppercase font-bold text-[#111111] text-xs">
              JOB DURATION - 1 YEAR
            </span>
          </div>
        </div>

        {/* Item 3 - White border background */}
        <div className="flex justify-between items-center w-full py-6 px-10 bg-white border border-[#CCCCCC] hover:translate-x-1 transition-transform duration-300">
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center shrink-0 bg-[#111111] w-12 h-12">
              <span className="font-extrabold text-white text-base">
                3
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-extrabold text-[#111111] text-xl m-0">
                Product Design
              </h3>
              <span className="tracking-[-0.01em] text-[#555555] text-sm">
                Zomato Digital Agency - India
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-px h-8 opacity-20 shrink-0 bg-[#111111]" />
            <span className="tracking-[0.05em] uppercase font-bold text-[#111111] text-xs">
              JOB DURATION - 2 YEARS
            </span>
          </div>
        </div>

        {/* Item 4 - White border background */}
        <div className="flex justify-between items-center w-full py-6 px-10 bg-white border border-[#CCCCCC] hover:translate-x-1 transition-transform duration-300">
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center shrink-0 bg-[#111111] w-12 h-12">
              <span className="font-extrabold text-white text-base">
                4
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-extrabold text-[#111111] text-xl m-0">
                Webflow Team Manager
              </h3>
              <span className="tracking-[-0.01em] text-[#555555] text-sm">
                Google Team - UK
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-px h-8 opacity-20 shrink-0 bg-[#111111]" />
            <span className="tracking-[0.05em] uppercase font-bold text-[#111111] text-xs">
              JOB DURATION - 2 YEARS
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
