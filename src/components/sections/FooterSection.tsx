import React from 'react';

export default function FooterSection() {
  return (
    <div id="contact" className="flex overflow-hidden w-full flex-col justify-center py-16 px-[108px] bg-white antialiased text-xs max-w-8xl mx-auto">
      <div className="flex flex-col w-full gap-8">
        
        {/* Outline 'X' Icon */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#111111" strokeWidth="2" className="ml-5 shrink-0">
          <path d="M14 20 L6 12 L14 4 L20 10 L26 4 L34 12 L26 20 L34 28 L26 36 L20 30 L14 36 L6 28 Z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>

        {/* Divider line */}
        <div className="w-full h-px opacity-30 shrink-0 bg-[#111111]" />

        {/* Bottom Row */}
        <div className="flex justify-center items-center w-full px-5 py-2">
          <div className="font-medium text-[#666666] text-sm tracking-wide">
            © 2026 Ryan Andreas. All rights reserved.
          </div>
        </div>

      </div>
    </div>
  );
}
