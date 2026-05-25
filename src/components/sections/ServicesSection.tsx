import React from 'react';

export default function ServicesSection() {
  return (
    <div className="flex overflow-hidden w-full flex-col py-12 md:py-16 px-6 md:px-[108px] bg-white antialiased text-xs max-w-8xl mx-auto">
      {/* Email Bar */}
      <div className="flex items-center w-full pb-12 md:pb-20 gap-8">
        <div className="grow shrink basis-0 h-px bg-[#E0E0E0]" />
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" className="shrink-0">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span className="tracking-[0.05em] font-bold text-black text-xs">
            RYANGUANSIN@GMAIL.COM
          </span>
        </div>
      </div>

      {/* Main Services Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full pb-12 md:pb-20 gap-6 lg:gap-12">
        <div className="flex flex-col max-w-[400px] gap-4 md:gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-0.5 shrink-0 bg-[#111111]" />
            <span className="tracking-widest font-extrabold text-black text-xs md:text-sm">
              MY SERVICES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] uppercase font-black text-black m-0">
            WHAT I’M<br />OFFERING
          </h2>
        </div>
        <div className="max-w-[400px] pt-2 lg:pt-6 m-0">
          <p className="text-sm leading-[1.6] text-[#555555]">
            Designing and engineering tailor-made digital products that combine beautiful aesthetic patterns with top-tier performance, scalability, and usability.
          </p>
        </div>
        <div className="pt-2 lg:pt-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center rounded-full py-4 px-8 bg-[#111111] hover:bg-black transition-colors cursor-pointer text-white">
            <span className="tracking-widest uppercase font-bold text-sm">
              ALL SERVICES
            </span>
          </button>
        </div>
      </div>

      {/* Services Cards and Scroll indicators */}
      <div className="flex w-full gap-6 md:gap-12">
        {/* Scroll Bar Side */}
        <div className="hidden lg:flex flex-col items-center justify-end w-15 pb-6 gap-6 shrink-0">
          <span className="tracking-widest mb-10 w-max font-bold text-[#555555] -rotate-90 text-[10px] uppercase">
            SCROLL DOWN
          </span>
          <div className="w-px h-20 shrink-0 bg-[#111111]" />
          <div className="flex items-center justify-center rounded-full shrink-0 bg-[#111111] w-12 h-12">
            <span className="text-white text-base">
              ↓
            </span>
          </div>
        </div>

        {/* 3 Grid Cards */}
        <div className="flex grow gap-6 flex-wrap xl:flex-nowrap justify-center lg:justify-start">
          {/* Card 1 - Black Web/Mobile design */}
          <div className="flex flex-col justify-between p-8 sm:p-10 bg-[#111111] w-full sm:w-[320px] h-[320px] sm:shrink-0 hover:scale-[1.02] transition-all duration-300 rounded-xl group">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" className="shrink-0">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <div className="flex flex-col gap-4">
              <h3 className="text-[20px] leading-[1.3] font-black text-white m-0 uppercase">
                Web & Mobile<br />UI/UX Design
              </h3>
              <p className="text-[11px] leading-[1.6] text-[#999999] m-0">
                Crafting intuitive, aesthetically stunning interfaces that ensure smooth and delightful user experiences across all devices.
              </p>
              <div className="flex items-center justify-between opacity-80 cursor-pointer group/link mt-2">
                <span className="tracking-widest font-bold text-white text-xs group-hover/link:underline">
                  READ MORE
                </span>
                <span className="tracking-widest font-bold text-white text-xs group-hover/link:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 - White Website App Development */}
          <div className="flex flex-col justify-between p-8 sm:p-10 bg-white border border-[#EBEBEB] shadow-sm hover:border-[#111111] w-full sm:w-[320px] h-[320px] sm:shrink-0 hover:scale-[1.02] transition-all duration-300 rounded-xl group">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
              <line x1="2" y1="9" x2="22" y2="9" />
              <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
              <line x1="10" y1="6" x2="10.01" y2="6" strokeWidth="3" />
              <line x1="14" y1="6" x2="14.01" y2="6" strokeWidth="3" />
            </svg>
            <div className="flex flex-col gap-4">
              <h3 className="text-[20px] leading-[1.3] font-black text-[#111111] m-0 uppercase">
                Website App<br />Development
              </h3>
              <p className="text-[11px] leading-[1.6] text-[#666666] m-0">
                Building high-performance, responsive, and secure web applications using modern stacks like React, Next.js, and Laravel.
              </p>
              <div className="flex items-center justify-between opacity-80 cursor-pointer group/link mt-2">
                <span className="tracking-widest font-bold text-[#111111] text-xs group-hover/link:underline">
                  READ MORE
                </span>
                <span className="tracking-widest font-bold text-[#111111] text-xs group-hover/link:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 - White Mobile App Development */}
          <div className="flex flex-col justify-between p-8 sm:p-10 bg-white border border-[#EBEBEB] shadow-sm hover:border-[#111111] w-full sm:w-[320px] h-[320px] sm:shrink-0 hover:scale-[1.02] transition-all duration-300 rounded-xl group">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
            </svg>
            <div className="flex flex-col gap-4">
              <h3 className="text-[20px] leading-[1.3] font-black text-[#111111] m-0 uppercase">
                Mobile App<br />Development
              </h3>
              <p className="text-[11px] leading-[1.6] text-[#666666] m-0">
                Creating native-like cross-platform mobile apps with Flutter, providing seamless performance, animations, and offline support.
              </p>
              <div className="flex items-center justify-between opacity-80 cursor-pointer group/link mt-2">
                <span className="tracking-widest font-bold text-[#111111] text-xs group-hover/link:underline">
                  READ MORE
                </span>
                <span className="tracking-widest font-bold text-[#111111] text-xs group-hover/link:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
