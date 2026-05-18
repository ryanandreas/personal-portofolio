import React from 'react';

export default function FooterSection() {
  return (
    <div className="flex overflow-hidden w-full flex-col justify-center py-16 px-20 bg-white antialiased text-xs max-w-7xl mx-auto">
      <div className="flex flex-col w-full gap-8">
        
        {/* Outline 'X' Icon */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#111111" strokeWidth="2" className="ml-5 shrink-0">
          <path d="M14 20 L6 12 L14 4 L20 10 L26 4 L34 12 L26 20 L34 28 L26 36 L20 30 L14 36 L6 28 Z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>

        {/* Divider line */}
        <div className="w-full h-px opacity-30 shrink-0 bg-[#111111]" />

        {/* Bottom Row */}
        <div className="flex justify-between items-center w-full px-5 flex-wrap gap-4">
          <div className="flex gap-10">
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[#111111] text-sm hover:underline cursor-pointer">
              Dribbble
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[#111111] text-sm hover:underline cursor-pointer">
              Linkedin
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[#111111] text-sm hover:underline cursor-pointer">
              Instagram
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="font-medium text-[#111111] text-sm hover:underline cursor-pointer">
              Behance
            </a>
          </div>
          <div className="font-medium text-[#111111] text-sm">
            Personal portfolio©2024
          </div>
        </div>

      </div>
    </div>
  );
}
