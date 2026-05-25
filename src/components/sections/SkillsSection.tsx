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
  // Determine contrast coloring for monochrome brands (NextJs, Vercel)
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
    case 'JavaScript (ReactJs)':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="#61DAFB" strokeWidth="2.5" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      );
    case 'TypeScript':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="3" fill="#3178C6" />
          <path d="M11.5 16.5H9v-4.5H7.5V11h4v1.5h-1.5v4zm5.5 0c0 .8-.7 1.5-1.5 1.5H13v-1.5h3.5v-1.5H13V11h4.5v1.5H14.5v1.5h2v2.5z" fill="#ffffff" />
        </svg>
      );
    case 'Python':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#3776AB">
          <path d="M12 2c-3.1 0-4 .9-4 4v2h8V6c0-3.1-.9-4-4-4zm0 20c3.1 0 4-.9 4-4v-2H8v2c0 3.1.9 4 4 4z" />
          <path d="M6 10v4c0 3.1.9 4 4 4h2v-2H10c-.8 0-1-.2-1-1v-5H6zm12 4v-4c0-3.1-.9-4-4-4h-2v2h2c.8 0 1 .2 1 1v5h3z" />
        </svg>
      );
    case 'HTML':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#E34F26">
          <path d="M3 2l1.6 17.8L12 22l7.4-2.2L21 2H3zm13.7 6H9.3l.2 2h6.8l-.6 6L12 17.1l-3.7-1.1-.2-2.5h2l.1 1.2 1.8.5 1.8-.5.2-2.2H8.7l-.4-4.5h8.8l-.4 3.5z"/>
        </svg>
      );
    case 'NextJs':
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
    case 'NodeJs':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="#339933" strokeWidth="2.5" fill="none">
          <polygon points="12 2 22 8 22 16 12 22 2 16 2 8" />
          <polyline points="12 2 12 22" />
          <polyline points="2 8 12 13.5 22 8" />
        </svg>
      );
    case 'ExpressJs':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case 'Flutter':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#02569B">
          <polygon points="14.3,0 7.7,6.6 14.3,13.2 21,13.2 14.3,6.6 21,0" />
          <polygon points="14.3,10.8 5.7,19.4 0,13.7 14.3,28 20,22.3" />
        </svg>
      );
    case 'MySQL':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#00758F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
          <path d="M3 12A9 3 0 0 0 21 12"></path>
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="#336791" strokeWidth="2.5" fill="none">
          <path d="M12 2a10 10 0 0 1 10 10c0 4-3 7-7 8a4 4 0 0 1-6 0c-4-1-7-4-7-8A10 10 0 0 1 12 2z" />
          <path d="M12 6c-2 0-4 1.5-4 4 0 3 3 5 4 5s4-2 4-5c0-2.5-2-4-4-4z" />
        </svg>
      );
    case 'NeonDB':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" stroke="#47A248" strokeWidth="2.5" fill="none">
          <path d="M12 2c0 0-5 5-5 10c0 3 2 6 5 10c3-4 5-7 5-10c0-5-5-10-5-10z" />
          <path d="M12 2v20" />
        </svg>
      );
    case 'AWS Cloud':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case 'Vercel':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill={monoColor}>
          <polygon points="12 2 22 22 2 22" />
        </svg>
      );
    case 'RestAPI':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );
    case 'CSS Framework (Bulma, Bootstrap)':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#7952B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case 'Antigravity':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#FF00EA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          <path d="M12 2v5" />
          <path d="M9 5l3-3 3 3" />
          <circle cx="12" cy="15" r="3" />
        </svg>
      );
    case 'Cursor':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 3 10 21 13 13 21 10 3 3" />
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
      title: 'Languages & Frameworks',
      id: '01 //',
      skills: [
        { name: 'HTML' },
        { name: 'JavaScript (ReactJs)' },
        { name: 'TypeScript' },
        { name: 'Python' },
        { name: 'PHP' },
        { name: 'NodeJs' },
        { name: 'ExpressJs' },
        { name: 'Laravel' },
        { name: 'NextJs' },
        { name: 'Flutter' }
      ]
    },
    {
      title: 'Databases & Cloud',
      id: '02 //',
      skills: [
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'NeonDB' },
        { name: 'MongoDB' },
        { name: 'AWS Cloud' },
        { name: 'Vercel' }
      ]
    },
    {
      title: 'Tools & Design',
      id: '03 //',
      skills: [
        { name: 'RestAPI' },
        { name: 'CSS Framework (Bulma, Bootstrap)' },
        { name: 'Tailwind CSS' },
        { name: 'Git & GitHub' },
        { name: 'Antigravity' },
        { name: 'Cursor' },
        { name: 'Figma / Creative' },
        { name: 'Photoshop & Illustrator' }
      ]
    }
  ];

  return (
    <div className="flex overflow-hidden w-full flex-col py-12 md:py-16 px-6 md:px-[108px] bg-white antialiased text-xs max-w-8xl mx-auto relative">
      
      {/* Header Block */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full pb-10 md:pb-16 gap-6 z-10 relative">
        <div className="flex flex-col max-w-[600px] gap-4 md:gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-0.5 shrink-0 bg-[#111111]" />
            <span className="tracking-widest font-extrabold text-black text-xs md:text-sm uppercase">
              MY ARSENAL
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] uppercase font-black text-black m-0">
            LANGUAGES &<br />TECHNOLOGIES
          </h2>
        </div>
        <div className="max-w-[440px] pt-2 lg:pt-6 m-0">
          <p className="text-xs md:text-sm leading-[1.6] text-[#555555]">
            A curated collection of languages, frameworks, and cloud solutions I have mastered to bring high-performance and visually stunning ideas to life.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full z-10 relative">
        {categories.map((category) => {
          const isBlackCard = false; // All cards are premium white

          return (
            <div 
              key={category.title} 
              className={`flex flex-col p-6 md:p-10 border border-[#111111] hover:scale-[1.01] transition-transform duration-300 min-h-[380px] sm:min-h-[420px] lg:min-h-[500px] bg-white text-[#111111]`}
            >
              {/* Category Header */}
              <div className="flex justify-between items-center w-full pb-4 md:pb-5 border-b border-[#E0E0E0]">
                <h3 className="text-lg md:text-xl font-extrabold tracking-tight uppercase">
                  {category.title}
                </h3>
                <span className="text-xs md:text-sm font-extrabold text-[#999999]">
                  {category.id}
                </span>
              </div>

              {/* Pills Wrap Grid */}
              <div className="flex flex-wrap gap-2.5 md:gap-3.5 mt-6 md:mt-8 w-full">
                {category.skills.map((skill) => {
                  const isHovered = hoveredSkill === skill.name;

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`flex items-center gap-2.5 md:gap-3.5 px-3.5 md:px-[18px] py-2 md:py-2.5 rounded-lg border cursor-pointer select-none whitespace-nowrap shrink-0 transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#111111] text-white border-[#111111] -translate-x-0.5 -translate-y-0.5 shadow-[3px_3px_0px_rgba(0,0,0,0.15)]'
                          : 'bg-white border-[#E0E0E0] text-[#555555]'
                      }`}
                    >
                      {/* Logo Badge inside Pill */}
                      <div 
                        className={`w-6 h-6 flex items-center justify-center border rounded-[4px] shrink-0 transition-colors duration-300 ${
                          isHovered
                            ? 'bg-white text-black border-white'
                            : 'bg-[#F5F5F5] border-[#E0E0E0] text-[#111111]'
                        }`}
                      >
                        {getSkillIcon(skill.name, isBlackCard, isHovered)}
                      </div>
                      <span className="text-[13px] md:text-[14px] font-bold tracking-tight">
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
