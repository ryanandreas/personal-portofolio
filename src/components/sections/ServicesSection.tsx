import React from 'react';

export default function ServicesSection() {
  return (
    <div className="flex overflow-hidden w-full flex-col py-16 px-20 bg-white antialiased text-xs max-w-7xl mx-auto">
      {/* Social Links Bar */}
      <div className="flex items-center w-full pb-20 gap-8">
        <div className="grow-0 shrink-0 basis-30 h-px bg-[#E0E0E0]" />
        <div className="flex gap-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer group">
            <span className="tracking-[0.05em] font-black text-[#555555] text-base group-hover:text-black transition-colors">
              f
            </span>
            <span className="tracking-[0.05em] font-bold text-[#555555] text-xs group-hover:text-black transition-colors">
              FACEBOOK
            </span>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer group">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555555" strokeWidth="2" className="shrink-0 group-hover:stroke-black transition-colors">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
            <span className="tracking-[0.05em] font-bold text-[#555555] text-xs group-hover:text-black transition-colors">
              YOUTUBE
            </span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer group">
            <span className="tracking-[0.05em] font-bold text-[#555555] text-base group-hover:text-black transition-colors">
              𝕏
            </span>
            <span className="tracking-[0.05em] font-bold text-[#555555] text-xs group-hover:text-black transition-colors">
              TWITTER
            </span>
          </a>
        </div>
        <div className="grow shrink basis-0 h-px bg-[#E0E0E0]" />
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" className="shrink-0">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span className="tracking-[0.05em] font-bold text-black text-xs">
            HELLO@RYANANDREAS.COM
          </span>
        </div>
      </div>

      {/* Main Services Header */}
      <div className="flex justify-between items-start w-full pb-20">
        <div className="flex flex-col max-w-[400px] gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-0.5 shrink-0 bg-[#111111]" />
            <span className="tracking-widest font-extrabold text-black text-sm">
              MY SERVICES ?
            </span>
          </div>
          <h2 className="text-[56px] leading-[1.1] uppercase font-black text-black m-0">
            WHAT I'M<br />OFFERING
          </h2>
        </div>
        <div className="max-w-[320px] pt-6 m-0">
          <p className="text-sm leading-[1.6] text-[#555555]">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="pt-4">
          <button className="flex items-center justify-center rounded-full py-4.5 px-9 bg-[#111111] hover:bg-black transition-colors cursor-pointer text-white">
            <span className="tracking-widest uppercase font-bold text-sm">
              ALL SERVICE
            </span>
          </button>
        </div>
      </div>

      {/* Services Cards and Scroll indicators */}
      <div className="flex w-full gap-12">
        {/* Scroll Bar Side */}
        <div className="flex flex-col items-center justify-end w-15 pb-6 gap-6 shrink-0">
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
        <div className="flex grow gap-6 flex-wrap md:flex-nowrap">
          {/* Card 1 - Black UI-UX */}
          <div className="flex flex-col justify-between p-10 shrink-0 bg-[#111111] w-[320px] h-[320px] hover:scale-[1.02] transition-transform duration-300">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" className="shrink-0">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <div className="flex flex-col gap-6">
              <h3 className="text-[20px] leading-[1.3] font-extrabold text-white m-0">
                UI-UX<br />CREATIVE<br />DESIGN
              </h3>
              <div className="flex items-center justify-between opacity-80 cursor-pointer group">
                <span className="tracking-widest font-bold text-white text-xs group-hover:underline">
                  READ MORE
                </span>
                <span className="tracking-widest font-bold text-white text-xs group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 - White Visual Design */}
          <div className="flex flex-col justify-between p-10 shrink-0 bg-white border border-[#111111] w-[320px] h-[320px] hover:scale-[1.02] transition-transform duration-300">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" className="shrink-0">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <div className="flex flex-col gap-6">
              <h3 className="text-[20px] leading-[1.3] font-extrabold text-[#111111] m-0">
                VISUAL<br />GRAPHIC DESIGN
              </h3>
              <div className="flex items-center justify-between opacity-80 cursor-pointer group">
                <span className="tracking-widest font-bold text-[#111111] text-xs group-hover:underline">
                  READ MORE
                </span>
                <span className="tracking-widest font-bold text-[#111111] text-xs group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 - White Strategy */}
          <div className="flex flex-col justify-between p-10 shrink-0 bg-white border border-[#111111] w-[320px] h-[320px] hover:scale-[1.02] transition-transform duration-300">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" className="shrink-0">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
            </svg>
            <div className="flex flex-col gap-6">
              <h3 className="text-[20px] leading-[1.3] font-extrabold text-[#111111] m-0">
                STRATEGY &<br />DIGITAL<br />MARKETING
              </h3>
              <div className="flex items-center justify-between opacity-80 cursor-pointer group">
                <span className="tracking-widest font-bold text-[#111111] text-xs group-hover:underline">
                  READ MORE
                </span>
                <span className="tracking-widest font-bold text-[#111111] text-xs group-hover:translate-x-1 transition-transform">
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
