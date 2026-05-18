import React from 'react';

export default function SkillsSection() {
  return (
    <div className="flex overflow-hidden w-full flex-col py-16 px-6 md:px-20 bg-white antialiased max-w-7xl mx-auto relative">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Dot Grid Top Right */}
        <div className="absolute top-10 right-10 w-24 h-24 hidden md:flex flex-wrap gap-2.5 opacity-15">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-[#111111] rounded-full" />
          ))}
        </div>

        {/* Rotating Cross Top Center */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute top-16 left-[45%] rotate-[15deg] opacity-80 hidden md:block">
          <path d="M10 10L30 30M30 10L10 30" stroke="#111111" strokeWidth="2" />
        </svg>

        {/* Sparkle Icon Bottom Right */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.5" className="absolute bottom-20 right-20 opacity-80 hidden md:block">
          <path d="M12 3v18M3 12h18M12 3l4 4M12 21l-4-4M3 12l4 4M21 12l-4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Wave Path Bottom Left */}
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none" className="absolute bottom-20 left-20 opacity-60 hidden md:block">
          <path d="M 0,20 C 20,40 20,0 40,20 C 60,40 60,0 80,20" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
          <path d="M 2,22 C 22,42 22,2 42,22 C 62,42 62,2 82,22" stroke="#FF00EA" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Header Block */}
      <div className="flex flex-col gap-5 z-10 w-full mb-16 relative">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rotate-45 shrink-0" />
          <span className="text-sm font-extrabold tracking-wider text-[#111111] uppercase">MY ARSENAL</span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 w-full">
          <h2 className="text-5xl md:text-6xl leading-[1.1] tracking-tighter font-black text-[#111111] uppercase">
            LANGUAGES & <br />
            <span className="text-[#FFE600] [-webkit-text-stroke:1.5px_#111111]" style={{ textShadow: '3px 3px 0px #111111' }}>TECHNOLOGIES</span>
          </h2>
          <p className="text-base leading-relaxed text-[#555555] max-w-[480px]">
            A curated collection of languages, frameworks, and design environments I have mastered to bring high-performance and visually stunning ideas to life.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full z-10 relative">
        
        {/* Column 1 (Frontend) */}
        <div className="flex flex-col gap-8 border-2 border-[#111111] rounded-[24px] p-8 md:p-10 bg-white shadow-[8px_8px_0px_#111111] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
          <div className="flex justify-between items-center w-full border-b-2 border-[#111111] pb-5">
            <h3 className="text-2xl font-black tracking-tight text-[#111111]">FRONTEND</h3>
            <span className="text-sm font-black text-[#00E5FF] [-webkit-text-stroke:1px_#111111]" style={{ textShadow: '1px 1px 0px #111111' }}>01 //</span>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* JavaScript & TypeScript */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Logo Box */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#f7f7f7] border-[1.5px] border-[#111111] rounded-lg shadow-[2px_2px_0px_#111111] shrink-0">
                    <div className="flex gap-[2px]">
                      <div className="w-4 h-4 bg-[#F7DF1E] border border-[#111111] rounded-[2px] flex items-center justify-center text-[8px] font-black text-[#111111]">JS</div>
                      <div className="w-4 h-4 bg-[#3178C6] border border-[#111111] rounded-[2px] flex items-center justify-center text-[8px] font-black text-white">TS</div>
                    </div>
                  </div>
                  <span className="text-base font-bold text-[#111111]">JavaScript &amp; TypeScript</span>
                </div>
                <span className="text-sm font-black text-[#111111]">90%</span>
              </div>
              <div className="flex gap-1.5 w-full">
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-white border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
              </div>
            </div>

            {/* React & Next.js */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Logo Box */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#f7f7f7] border-[1.5px] border-[#111111] rounded-lg shadow-[2px_2px_0px_#111111] shrink-0">
                    <div className="flex gap-[3px] items-center">
                      <svg width="16" height="16" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#00D8FF"/><g stroke="#00D8FF" strokeWidth="1.2" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
                      <div className="w-4 h-4 bg-black border border-[#111111] rounded-[2px] flex items-center justify-center text-[8px] font-black text-white">N</div>
                    </div>
                  </div>
                  <span className="text-base font-bold text-[#111111]">React / Next.js</span>
                </div>
                <span className="text-sm font-black text-[#111111]">95%</span>
              </div>
              <div className="flex gap-1.5 w-full">
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
              </div>
            </div>

            {/* CSS & Tailwind */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Logo Box */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#f7f7f7] border-[1.5px] border-[#111111] rounded-lg shadow-[2px_2px_0px_#111111] shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 6.018C12 4.01 13.916 2 17.584 2 21.25 2 22 4.417 22 6.018c0 3.203-2.933 6.018-7.333 8.024C14.667 14.042 12 12.024 12 10.018c0-2.008 1.916-4.018 5.584-4.018C21.25 6 22 8.417 22 10.018c0 3.203-2.933 6.018-7.333 8.024" fill="#38BDF8"/><path d="M2 13.982C2 11.974 3.916 9.964 7.584 9.964c3.666 0 4.416 2.417 4.416 4.018 0 3.203-2.933 6.018-7.333 8.024-4.4 2.006-7.333-.012-7.333-2.018 0-2.008 1.916-4.018 5.584-4.018 3.666 0 4.416 2.417 4.416 4.018 0 3.203-2.933 6.018-7.333 8.024" fill="#38BDF8"/></svg>
                  </div>
                  <span className="text-base font-bold text-[#111111]">Tailwind CSS / PostCSS</span>
                </div>
                <span className="text-sm font-black text-[#111111]">90%</span>
              </div>
              <div className="flex gap-1.5 w-full">
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#00E5FF] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-white border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 (Backend) */}
        <div className="flex flex-col gap-8 border-2 border-[#111111] rounded-[24px] p-8 md:p-10 bg-white shadow-[8px_8px_0px_#111111] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
          <div className="flex justify-between items-center w-full border-b-2 border-[#111111] pb-5">
            <h3 className="text-2xl font-black tracking-tight text-[#111111]">BACKEND &amp; INFRA</h3>
            <span className="text-sm font-black text-[#FF00EA] [-webkit-text-stroke:1px_#111111]" style={{ textShadow: '1px 1px 0px #111111' }}>02 //</span>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Node.js */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Logo Box */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#f7f7f7] border-[1.5px] border-[#111111] rounded-lg shadow-[2px_2px_0px_#111111] shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.75 14.25L12 20.25l-6.75-4V8.25L12 4.25l6.75 4v7.75z" fill="#339933"/><path d="M12 6.75L7.25 9.5v5L12 17.25l4.75-2.75v-5L12 6.75z" fill="#339933"/></svg>
                  </div>
                  <span className="text-base font-bold text-[#111111]">Node.js / Express</span>
                </div>
                <span className="text-sm font-black text-[#111111]">80%</span>
              </div>
              <div className="flex gap-1.5 w-full">
                <div className="flex-1 h-3 bg-[#FF00EA] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FF00EA] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FF00EA] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FF00EA] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-white border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
              </div>
            </div>

            {/* Database */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Logo Box */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#f7f7f7] border-[1.5px] border-[#111111] rounded-lg shadow-[2px_2px_0px_#111111] shrink-0">
                    <div className="flex gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#336791"/></svg>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C7.03 2 3 6.03 3 11c0 4.14 2.81 7.62 6.64 8.64L12 22l2.36-2.36" fill="#47A248"/></svg>
                    </div>
                  </div>
                  <span className="text-base font-bold text-[#111111]">PostgreSQL &amp; MongoDB</span>
                </div>
                <span className="text-sm font-black text-[#111111]">75%</span>
              </div>
              <div className="flex gap-1.5 w-full">
                <div className="flex-1 h-3 bg-[#FF00EA] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FF00EA] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FF00EA] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-white border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-white border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
              </div>
            </div>

            {/* Tooling & Git */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Logo Box */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#f7f7f7] border-[1.5px] border-[#111111] rounded-lg shadow-[2px_2px_0px_#111111] shrink-0">
                    <div className="flex gap-[3px] items-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F1502F" strokeWidth="3"><circle cx="18" cy="6" r="3" fill="#F1502F" /><circle cx="6" cy="18" r="3" fill="#F1502F" /><circle cx="6" cy="6" r="3" fill="#F1502F" /><path d="M6 9v6M18 9c0 4.5-12 3-12 9" /></svg>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#111111"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    </div>
                  </div>
                  <span className="text-base font-bold text-[#111111]">Git / GitHub / Docker</span>
                </div>
                <span className="text-sm font-black text-[#111111]">85%</span>
              </div>
              <div className="flex gap-1.5 w-full">
                <div className="flex-1 h-3 bg-[#FF00EA] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FF00EA] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FF00EA] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FF00EA] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-white border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 (Design) */}
        <div className="flex flex-col gap-8 border-2 border-[#111111] rounded-[24px] p-8 md:p-10 bg-white shadow-[8px_8px_0px_#111111] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
          <div className="flex justify-between items-center w-full border-b-2 border-[#111111] pb-5">
            <h3 className="text-2xl font-black tracking-tight text-[#111111]">DESIGN &amp; CREATIVE</h3>
            <span className="text-sm font-black text-[#FFE600] [-webkit-text-stroke:1px_#111111]" style={{ textShadow: '1px 1px 0px #111111' }}>03 //</span>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Figma & Paper */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Logo Box */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#f7f7f7] border-[1.5px] border-[#111111] rounded-lg shadow-[2px_2px_0px_#111111] shrink-0">
                    <div className="flex gap-[3px] items-center">
                      <svg width="12" height="18" viewBox="0 0 38 57" fill="none"><path d="M19 0C8.5 0 0 8.5 0 19C0 24.3 2.2 29.1 5.8 32.6C2.2 36.1 0 40.9 0 46.2C0 56.7 8.5 65.2 19 65.2C29.5 65.2 38 56.7 38 46.2V19C38 8.5 29.5 0 19 0Z" fill="none"/><path d="M9.5 19C9.5 13.8 13.8 9.5 19 9.5C24.2 9.5 28.5 13.8 28.5 19V28.5H19C13.8 28.5 9.5 24.2 9.5 19Z" fill="#F24E1E"/><path d="M9.5 46.2C9.5 41 13.8 36.7 19 36.7H28.5V46.2C28.5 51.4 24.2 55.7 19 55.7C13.8 55.7 9.5 51.4 9.5 46.2Z" fill="#0ACF83"/><path d="M28.5 28.5C28.5 23.3 32.8 19 38 19C43.2 19 47.5 23.3 47.5 28.5C47.5 33.7 43.2 38 38 38H28.5V28.5Z" fill="#1ABCFE" transform="translate(-9.5)"/><path d="M9.5 28.5H19V38H9.5C4.3 38 0 33.7 0 28.5C0 23.3 4.3 19 9.5 19V28.5Z" fill="#A259FF" transform="translate(0, 9.5)"/></svg>
                      <div className="w-4 h-4 bg-black border border-[#111111] rounded-[2px] flex items-center justify-center text-[8px] font-black text-[#FFE600]">P</div>
                    </div>
                  </div>
                  <span className="text-base font-bold text-[#111111]">Figma / Paper.design</span>
                </div>
                <span className="text-sm font-black text-[#111111]">95%</span>
              </div>
              <div className="flex gap-1.5 w-full">
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
              </div>
            </div>

            {/* UI/UX Systems */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Logo Box */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#f7f7f7] border-[1.5px] border-[#111111] rounded-lg shadow-[2px_2px_0px_#111111] shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFE600" strokeWidth="2"><rect x="3" y="3" width="7" height="9" rx="1" stroke="#111111" fill="#FFE600" /><rect x="14" y="3" width="7" height="5" rx="1" stroke="#111111" fill="#FFE600" /><rect x="3" y="16" width="7" height="5" rx="1" stroke="#111111" fill="#ffffff" /><rect x="14" y="12" width="7" height="9" rx="1" stroke="#111111" fill="#ffffff" /></svg>
                  </div>
                  <span className="text-base font-bold text-[#111111]">UI/UX Design &amp; Systems</span>
                </div>
                <span className="text-sm font-black text-[#111111]">90%</span>
              </div>
              <div className="flex gap-1.5 w-full">
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-white border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
              </div>
            </div>

            {/* Adobe Creative */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Logo Box */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#f7f7f7] border-[1.5px] border-[#111111] rounded-lg shadow-[2px_2px_0px_#111111] shrink-0">
                    <div className="flex gap-[2px]">
                      <div className="w-[18px] h-[18px] bg-[#001E36] border border-[#111111] rounded-[3px] flex items-center justify-center text-[8px] font-black text-[#00C8FF]">Ps</div>
                      <div className="w-[18px] h-[18px] bg-[#261300] border border-[#111111] rounded-[3px] flex items-center justify-center text-[8px] font-black text-[#FF9A00]">Ai</div>
                    </div>
                  </div>
                  <span className="text-base font-bold text-[#111111]">Adobe Photoshop / Illustrator</span>
                </div>
                <span className="text-sm font-black text-[#111111]">80%</span>
              </div>
              <div className="flex gap-1.5 w-full">
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-[#FFE600] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
                <div className="flex-1 h-3 bg-white border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] rounded-[4px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
