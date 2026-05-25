"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex overflow-hidden w-full min-h-screen relative flex-col bg-white antialiased">
      {/* Background Blurs */}
      <div className="absolute top-0 left-[35%] w-[600px] h-[400px] flex opacity-60 blur-[80px] z-0">
        <div className="grow shrink basis-0 rounded-full bg-[#00E5FF]" />
        <div className="grow shrink basis-0 -ml-[100px] mt-[80px] rounded-full bg-[#FFE600]" />
        <div className="grow shrink basis-0 -ml-[100px] rounded-full bg-[#FF00EA]" />
      </div>

      {/* Navbar Area */}
      <div className="flex justify-between items-center w-full py-8 md:py-12 px-6 md:px-[108px] relative z-10 max-w-8xl mx-auto">
        <div className="flex flex-col relative">
          <div className="absolute -top-8 left-20 flex gap-2 origin-top-left rotate-45">
            <div className="w-0.5 h-15 shrink-0 bg-[#111111]" />
            <div className="w-px h-10 mt-5 shrink-0 bg-[#111111]" />
          </div>
          <div className="pb-1 relative">
            <div className="tracking-[-0.03em] font-medium text-black text-[28px] sm:text-[32px] leading-10">
              it’s me
            </div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#111111]" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12">
          <a href="#projects" className="flex flex-col w-40 gap-2 shrink-0 cursor-pointer group decoration-none">
            <div className="w-full h-px shrink-0 bg-[#111111]" />
            <div className="flex justify-between items-center">
              <div className="font-bold text-black text-base">
                My Projects
              </div>
              <div className="text-black text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                ↗
              </div>
            </div>
            <div className="text-xs leading-[1.4] text-[#666666]">
              See all of nice project i have done.
            </div>
          </a>
          <a href="#about" className="flex flex-col w-40 gap-2 shrink-0 cursor-pointer group decoration-none">
            <div className="w-full h-px shrink-0 bg-[#111111]" />
            <div className="flex justify-between items-center">
              <div className="font-bold text-black text-base">
                About Me
              </div>
              <div className="text-black text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                ↗
              </div>
            </div>
            <div className="text-xs leading-[1.4] text-[#666666]">
              Learn about my self what i do
            </div>
          </a>
          <a href="mailto:ryanguansin@gmail.com?subject=Let’s%20Work%20Together" className="flex flex-col w-40 gap-2 shrink-0 cursor-pointer group decoration-none">
            <div className="w-full h-px shrink-0 bg-[#111111]" />
            <div className="flex justify-between items-center">
              <div className="font-bold text-black text-base">
                Contact me
              </div>
              <div className="text-black text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                ↗
              </div>
            </div>
            <div className="text-xs leading-[1.4] text-[#666666]">
              ryanguansin@gmail.com
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden flex items-center justify-center p-2 text-black z-50 cursor-pointer focus:outline-none transition-transform active:scale-95"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Background blurs inside mobile menu */}
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#00E5FF]/20 blur-[50px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[#FF00EA]/20 blur-[50px] pointer-events-none" />
        
        <div className="flex flex-col items-center gap-8 text-center px-6 w-full z-10">
          <a 
            href="#projects" 
            onClick={() => setIsMenuOpen(false)}
            className="group flex flex-col items-center gap-1 text-2xl font-black text-[#111111] uppercase tracking-wide decoration-none"
          >
            <span>My Projects</span>
            <span className="w-12 h-0.5 bg-[#111111] transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          </a>
          <a 
            href="#about" 
            onClick={() => setIsMenuOpen(false)}
            className="group flex flex-col items-center gap-1 text-2xl font-black text-[#111111] uppercase tracking-wide decoration-none"
          >
            <span>About Me</span>
            <span className="w-12 h-0.5 bg-[#111111] transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          </a>
          <a 
            href="mailto:ryanguansin@gmail.com?subject=Let’s%20Work%20Together" 
            onClick={() => setIsMenuOpen(false)}
            className="group flex flex-col items-center gap-1 text-2xl font-black text-[#111111] uppercase tracking-wide decoration-none"
          >
            <span>Contact me</span>
            <span className="w-12 h-0.5 bg-[#111111] transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          </a>
          <div className="w-full max-w-[200px] h-px bg-[#EAEAEA] my-2" />
          <div className="text-sm font-medium text-[#555555]">
            ryanguansin@gmail.com
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row grow px-6 md:px-[108px] pt-8 md:pt-0 pb-20 md:pb-0 relative z-10 max-w-8xl mx-auto w-full gap-12 md:gap-8">
        <div className="flex flex-col justify-center w-full md:w-1/2 pb-8 md:pb-20 gap-6 md:gap-8">
          <div className="text-[32px] leading-10">
            👋
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-[-0.04em] leading-[1.1] text-[#111111] font-light m-0">
              Hello! <span className="font-black">I’m Ryan<br /> Andreas</span>
            </h1>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
              <div className="w-12 sm:w-20 h-px shrink-0 bg-[#111111]" />
              <div className="text-[#555555] text-lg sm:text-2xl font-medium">
                Web & Mobile Developer
              </div>
              <div className="text-black text-lg sm:text-2xl">
                ✨
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-base leading-[1.6] max-w-[480px] text-[#555555] m-0">
            Hello! I’m Ryan. I’m a passionate Full-Stack Developer specializing in building high-performance websites, mobile apps, and pixel-perfect UI/UX designs.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" className="shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <div className="font-medium text-[#333333] text-sm sm:text-base">
                High-performance & scalable architecture
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" className="shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <div className="font-medium text-[#333333] text-sm sm:text-base">
                Seamless user experiences & design fidelity
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" className="shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <div className="font-medium text-[#333333] text-sm sm:text-base">
                Robust backend & secure cloud solutions
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-4 gap-4 sm:gap-8">
            <a href="mailto:ryanguansin@gmail.com?subject=Let’s%20Work%20Together" className="rounded-full py-3.5 sm:py-4 px-6 sm:px-8 bg-[#111111] hover:bg-black transition-colors cursor-pointer text-white decoration-none flex items-center justify-center">
              <span className="font-medium text-sm sm:text-base">
                Let’s Talk
              </span>
            </a>
            <div className="flex flex-col items-start cursor-pointer group">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-black text-sm sm:text-base">
                  Download Cv
                </span>
                <span className="text-black text-sm sm:text-base group-hover:translate-y-1 transition-transform">
                  ↓
                </span>
              </div>
              <div className="w-full h-px mt-1 shrink-0 bg-[#111111]" />
            </div>
          </div>
        </div>

        {/* Right side graphics */}
        <div className="w-full md:w-1/2 flex justify-center items-end relative pb-8 md:pb-16">
          {/* Abstract elements */}
          <div className="hidden md:block absolute top-[20%] left-[10%] w-0.5 h-4 bg-[#111111] origin-top-left rotate-30" />
          <div className="hidden md:flex absolute -left-10 top-[40%] w-[120px] h-[120px] items-center justify-center rounded-full bg-[#111111]">
            <span className="font-light text-white text-2xl">
              Hello
            </span>
            <div className="absolute w-[160px] h-px bg-[#111111] origin-top-left -rotate-45" />
          </div>
          <svg width="40" height="80" viewBox="0 0 40 80" fill="none" className="hidden md:block absolute right-5 top-[30%]">
            <path d="M10 10C30 20 50 40 10 70" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
            <path d="M12 12C32 22 52 42 12 72" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </svg>
          
          {/* Portrait Image */}
          <div className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-none md:w-[600px] aspect-[6/7] md:h-[700px] md:aspect-auto relative shrink-0 md:shrink group/portrait">
            <Image
              src="/photo.png"
              alt="Ryan Andreas Portrait"
              width={600}
              height={700}
              priority
              className="object-cover w-full h-full object-top group-hover/portrait:scale-[1.03] transition-transform duration-700 ease-out rounded-2xl md:rounded-none"
            />
          </div>
        </div>
      </div>

      {/* Marquee Area */}
      <div className="absolute bottom-0 left-0 w-full h-16 flex items-center overflow-hidden bg-[#111111] border-t border-[#FFFFFF1A]">
        <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
          <span className="tracking-[0.05em] font-bold text-white text-lg">WEB DEVELOPMENT</span>
          <span className="text-[#999999] text-xl">✧</span>
          <span className="tracking-[0.05em] font-bold text-white text-lg">MOBILE DEVELOPMENT</span>
          <span className="text-[#999999] text-xl">✧</span>
          <span className="tracking-[0.05em] font-bold text-white text-lg">UI/UX DESIGN</span>
          <span className="text-[#999999] text-xl">✧</span>
          <span className="tracking-[0.05em] font-bold text-white text-lg">WEB DEVELOPMENT</span>
          <span className="text-[#999999] text-xl">✧</span>
          <span className="tracking-[0.05em] font-bold text-white text-lg">MOBILE DEVELOPMENT</span>
          <span className="text-[#999999] text-xl">✧</span>
          <span className="tracking-[0.05em] font-bold text-white text-lg">UI/UX DESIGN</span>
          <span className="text-[#999999] text-xl">✧</span>
          <span className="tracking-[0.05em] font-bold text-white text-lg">WEB DEVELOPMENT</span>
          <span className="text-[#999999] text-xl">✧</span>
          <span className="tracking-[0.05em] font-bold text-white text-lg">MOBILE DEVELOPMENT</span>
          <span className="text-[#999999] text-xl">✧</span>
          <span className="tracking-[0.05em] font-bold text-white text-lg">UI/UX DESIGN</span>
        </div>
      </div>
    </div>
  );
}
