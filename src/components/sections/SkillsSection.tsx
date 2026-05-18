"use client";

import React, { useState } from 'react';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  id: string;
  skills: Skill[];
}

function getSkillIcon(name: string, isBlackCard: boolean, isHovered: boolean) {
  // Determine contrast coloring for monochrome brands (Next.js)
  const monoColor = isBlackCard
    ? isHovered ? '#000000' : '#ffffff'
    : isHovered ? '#ffffff' : '#111111';

  switch (name) {
    case 'PHP':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#777BB4">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 13.5H7.3v-2.1h1.2c.8 0 1.2-.4 1.2-1s-.4-1-1.2-1H7.3v6.2H6V7.5h2.5c1.5 0 2.5.8 2.5 2.2 0 1-.5 1.7-1.3 2 .9.3 1.3 1.1 1.3 2.1 0 1.4-1.1 2.2-2.5 2.2zm7.1 0h-1.2v-2.1h1.2c.8 0 1.2-.4 1.2-1s-.4-1-1.2-1h-1.2v6.2h-1.3V7.5h2.5c1.5 0 2.5.8 2.5 2.2 0 1-.5 1.7-1.3 2 .9.3 1.3 1.1 1.3 2.1 0 1.4-1.1 2.2-2.5 2.2z" />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path d="M14.5 16.5c0 .8-.7 1.5-1.5 1.5H10v-1.5h3v-1.5H9.5V11h5v1.5H11v1.5h3.5v2.5zm4.5 1.5h-1.5v-1.5h1.5v1.5zm0-3h-1.5V11H19v4.5z" fill="#000000" />
        </svg>
      );
    case 'TypeScript':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="3" fill="#3178C6" />
          <path d="M11.5 16.5H9v-4.5H7.5V11h4v1.5h-1.5v4zm5.5 0c0 .8-.7 1.5-1.5 1.5H13v-1.5h3.5v-1.5H13V11h4.5v1.5H14.5v1.5h2v2.5z" fill="#ffffff" />
        </svg>
      );
    case 'HTML5':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#E34F26">
          <path d="M3 2l1.6 17.8L12 22l7.4-2.2L21 2H3zm13.7 6H9.3l.2 2h6.8l-.6 6L12 17.1l-3.7-1.1-.2-2.5h2l.1 1.2 1.8.5 1.8-.5.2-2.2H8.7l-.4-4.5h8.8l-.4 3.5z"/>
        </svg>
      );
    case 'CSS3 & Sass':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#1572B6">
          <path d="M3 2l1.6 17.8L12 22l7.4-2.2L21 2H3zm13.5 5.5l-.2 2.2H9.5l.2 2.2h5.6l-.6 6L12 18.9l-2.7-.9-.2-1.8h2l.1.9 1 .3.9-.3.1-1.3H8.9l-.4-4.5h8.4l-.4 4.1z" />
        </svg>
      );
    case 'React':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="#61DAFB" strokeWidth="2.5" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      );
    case 'Next.js':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke={monoColor} strokeWidth="2.5" fill="none">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 16V8l8 8V8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'Laravel':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="#FF2D20" strokeWidth="2.5" fill="none">
          <path d="M4 4h8v8H4V4zm8 8h8v8h-8v-8zM8 8h8v8H8V8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"/>
        </svg>
      );
    case 'Node.js':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="#339933" strokeWidth="2.5" fill="none">
          <polygon points="12 2 22 8 22 16 12 22 2 16 2 8" />
          <polyline points="12 2 12 22" />
          <polyline points="2 8 12 13.5 22 8" />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="#336791" strokeWidth="2.5" fill="none">
          <path d="M12 2a10 10 0 0 1 10 10c0 4-3 7-7 8a4 4 0 0 1-6 0c-4-1-7-4-7-8A10 10 0 0 1 12 2z" />
          <path d="M12 6c-2 0-4 1.5-4 4 0 3 3 5 4 5s4-2 4-5c0-2.5-2-4-4-4z" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="#47A248" strokeWidth="2.5" fill="none">
          <path d="M12 2c0 0-5 5-5 10c0 3 2 6 5 10c3-4 5-7 5-10c0-5-5-10-5-10z" />
          <path d="M12 2v20" />
        </svg>
      );
    case 'Git & GitHub':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="#F1502F" strokeWidth="2.5" fill="none">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M6 9v6" />
          <path d="M9 15c2 0 4-1 6-4" />
        </svg>
      );
    case 'Figma / Creative':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
          <circle cx="8" cy="5" r="3" fill="#F24E1E" />
          <circle cx="14" cy="5" r="3" fill="#FF7262" />
          <circle cx="8" cy="11" r="3" fill="#A259FF" />
          <circle cx="14" cy="11" r="3" fill="#0ACF83" />
          <path d="M8 20a3 3 0 0 1-3-3h3v3zM8 20a3 3 0 0 0 3-3v-3H8v6z" fill="#1ABCFE" />
        </svg>
      );
    case 'Photoshop & Illustrator':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="3" fill="#31A8FF" />
          <text x="4" y="16" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="system-ui">Ps</text>
        </svg>
      );
    default:
      return null;
  }
}

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: SkillCategory[] = [
    {
      title: 'Languages & Core',
      id: '01 //',
      skills: [
        { name: 'PHP' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'HTML5' },
        { name: 'CSS3 & Sass' }
      ]
    },
    {
      title: 'Frameworks & Libs',
      id: '02 //',
      skills: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Laravel' },
        { name: 'Tailwind CSS' },
        { name: 'Node.js' }
      ]
    },
    {
      title: 'Databases & Tools',
      id: '03 //',
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'Git & GitHub' },
        { name: 'Figma / Creative' },
        { name: 'Photoshop & Illustrator' }
      ]
    }
  ];

  return (
    <div className="flex overflow-hidden w-full flex-col py-16 px-6 md:px-20 bg-white antialiased text-xs max-w-7xl mx-auto relative">
      
      {/* Header Block (Matches ServicesSection exactly) */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full pb-16 gap-6 z-10 relative">
        <div className="flex flex-col max-w-[500px] gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-0.5 shrink-0 bg-[#111111]" />
            <span className="tracking-widest font-extrabold text-black text-sm uppercase">
              MY ARSENAL
            </span>
          </div>
          <h2 className="text-[56px] leading-[1.1] uppercase font-black text-black m-0">
            LANGUAGES &<br />TECHNOLOGIES
          </h2>
        </div>
        <div className="max-w-[440px] pt-6 m-0">
          <p className="text-sm leading-[1.6] text-[#555555]">
            A curated collection of languages, frameworks, and design environments I have mastered to bring high-performance and visually stunning ideas to life.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full z-10 relative">
        {categories.map((category, catIndex) => {
          const isBlackCard = catIndex === 0; // First card is black, matching Services Section rhythm

          return (
            <div 
              key={category.title} 
              className={`flex flex-col p-10 border border-[#111111] hover:scale-[1.01] transition-transform duration-300 min-h-[500px] ${
                isBlackCard ? 'bg-[#111111] text-white' : 'bg-white text-[#111111]'
              }`}
            >
              {/* Category Header */}
              <div 
                className={`flex justify-between items-center w-full pb-5 border-b ${
                  isBlackCard ? 'border-[#333333]' : 'border-[#E0E0E0]'
                }`}
              >
                <h3 className="text-xl font-extrabold tracking-tight uppercase">
                  {category.title}
                </h3>
                <span className={`text-sm font-extrabold ${isBlackCard ? 'text-[#666666]' : 'text-[#999999]'}`}>
                  {category.id}
                </span>
              </div>

              {/* Pills Wrap Grid */}
              <div className="flex flex-wrap gap-3.5 mt-8 w-full">
                {category.skills.map((skill) => {
                  const isHovered = hoveredSkill === skill.name;

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`flex items-center gap-3.5 px-[18px] py-2.5 rounded-lg border cursor-pointer select-none whitespace-nowrap shrink-0 transition-all duration-300 ${
                        isBlackCard
                          ? isHovered
                            ? 'bg-white text-black border-white -translate-x-0.5 -translate-y-0.5 shadow-[3px_3px_0px_rgba(255,255,255,0.2)]'
                            : 'bg-[#222222] border-[#444444] text-[#E0E0E0]'
                          : isHovered
                            ? 'bg-[#111111] text-white border-[#111111] -translate-x-0.5 -translate-y-0.5 shadow-[3px_3px_0px_rgba(0,0,0,0.15)]'
                            : 'bg-white border-[#E0E0E0] text-[#555555]'
                      }`}
                    >
                      {/* Logo Badge inside Pill */}
                      <div 
                        className={`w-6 h-6 flex items-center justify-center border rounded-[4px] shrink-0 transition-colors duration-300 ${
                          isBlackCard
                            ? isHovered
                              ? 'bg-black text-white border-black'
                              : 'bg-[#333333] border-[#555555] text-white'
                            : isHovered
                              ? 'bg-white text-black border-white'
                              : 'bg-[#F5F5F5] border-[#E0E0E0] text-[#111111]'
                        }`}
                      >
                        {getSkillIcon(skill.name, isBlackCard, isHovered)}
                      </div>
                      <span className="text-[14px] font-bold tracking-tight">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


