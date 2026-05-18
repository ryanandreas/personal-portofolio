import React from 'react';

export default function ProjectsSection() {
  return (
    <div className="flex overflow-hidden w-full flex-col py-16 px-20 bg-white antialiased text-xs max-w-7xl mx-auto relative">
      
      {/* Header */}
      <div className="w-full flex flex-col items-center mb-24 pt-6 relative">
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
          MY PROJECT
        </h2>
        <p className="text-sm leading-[1.6] max-w-[480px] text-center text-[#555555] m-0">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>

        {/* Dot pattern */}
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none" className="absolute left-[100px] top-0 opacity-40">
          <pattern id="dotPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle fill="#111" cx="2" cy="2" r="2"/>
          </pattern>
          <rect x="0" y="0" width="40" height="80" fill="url(#dotPattern)" />
        </svg>
      </div>

      {/* Projects list with alternating layout */}
      <div className="flex flex-col w-full px-10 gap-20">
        
        {/* Project 1: Mockup Left, Content Right */}
        <div className="flex flex-col md:flex-row items-center w-full gap-20">
          {/* Card left */}
          <div className="grow shrink basis-0 h-[400px] flex flex-col items-center justify-center rounded-xl overflow-hidden bg-[#F8F8F8] border border-[#E0E0E0] shadow-sm hover:scale-[1.01] transition-transform duration-300">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" strokeWidth="1.5" className="shrink-0">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="mt-4 font-bold text-[#999999] text-base">
              Mockup Placeholder
            </span>
          </div>

          {/* Content right */}
          <div className="grow shrink basis-0 flex flex-col items-start p-5">
            <div className="mb-6 rounded-full py-3 px-6 bg-[#111111]">
              <span className="tracking-[0.05em] uppercase font-extrabold text-white text-xs">
                WEB DESIGN
              </span>
            </div>
            <h3 className="text-[40px] leading-[1.2] mt-0 mb-8 font-extrabold text-[#111111]">
              Web Design for fintech payment solutions.
            </h3>
            <div className="flex items-center pb-2 gap-3 border-b-2 border-[#111111] cursor-pointer group">
              <span className="font-extrabold text-black text-lg">
                See Details 
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
        </div>

        {/* Project 2: Content Left, Mockup Right */}
        <div className="flex flex-col md:flex-row items-center w-full gap-20">
          {/* Content left */}
          <div className="grow shrink basis-0 flex flex-col items-start p-5 order-2 md:order-1">
            <div className="mb-6 rounded-full py-3 px-6 bg-[#111111]">
              <span className="tracking-[0.05em] uppercase font-extrabold text-white text-xs">
                WEB DESIGN
              </span>
            </div>
            <h3 className="text-[40px] leading-[1.2] mt-0 mb-8 font-extrabold text-[#111111]">
              Minimal Agency website for startups business.
            </h3>
            <div className="flex items-center pb-2 gap-3 border-b-2 border-[#111111] cursor-pointer group">
              <span className="font-extrabold text-black text-lg">
                See Details 
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>

          {/* Card right */}
          <div className="grow shrink basis-0 h-[400px] flex flex-col items-center justify-center rounded-xl overflow-hidden bg-[#F8F8F8] border border-[#E0E0E0] shadow-sm hover:scale-[1.01] transition-transform duration-300 order-1 md:order-2">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" strokeWidth="1.5" className="shrink-0">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="mt-4 font-bold text-[#999999] text-base">
              Mockup Placeholder
            </span>
          </div>
        </div>

        {/* Project 3: Mockup Left, Content Right */}
        <div className="flex flex-col md:flex-row items-center w-full gap-20">
          {/* Card left */}
          <div className="grow shrink basis-0 h-[400px] flex flex-col items-center justify-center rounded-xl overflow-hidden bg-[#F8F8F8] border border-[#E0E0E0] shadow-sm hover:scale-[1.01] transition-transform duration-300">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" strokeWidth="1.5" className="shrink-0">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="mt-4 font-bold text-[#999999] text-base">
              Mockup Placeholder
            </span>
          </div>

          {/* Content right */}
          <div className="grow shrink basis-0 flex flex-col items-start p-5">
            <div className="mb-6 rounded-full py-3 px-6 bg-[#111111]">
              <span className="tracking-[0.05em] uppercase font-extrabold text-white text-xs">
                WEB DESIGN
              </span>
            </div>
            <h3 className="text-[40px] leading-[1.2] mt-0 mb-8 font-extrabold text-[#111111]">
              Saas web and app design project.
            </h3>
            <div className="flex items-center pb-2 gap-3 border-b-2 border-[#111111] cursor-pointer group">
              <span className="font-extrabold text-black text-lg">
                See Details 
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
