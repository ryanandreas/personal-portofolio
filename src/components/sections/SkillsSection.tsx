"use client";

import React, { useState } from 'react';

interface Skill {
  name: string;
  shortName: string;
  brandColor: string;
  textColor: 'text-white' | 'text-[#111111]';
  badgeBg: string;
  badgeTextColor: string;
}

interface SkillCategory {
  title: string;
  id: string;
  color: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: SkillCategory[] = [
    {
      title: 'Languages & Core',
      id: '01 //',
      color: '#00E5FF',
      skills: [
        { name: 'PHP', shortName: 'PHP', brandColor: '#777BB4', textColor: 'text-white', badgeBg: '#777BB4', badgeTextColor: '#ffffff' },
        { name: 'JavaScript', shortName: 'JS', brandColor: '#F7DF1E', textColor: 'text-[#111111]', badgeBg: '#F7DF1E', badgeTextColor: '#111111' },
        { name: 'TypeScript', shortName: 'TS', brandColor: '#3178C6', textColor: 'text-white', badgeBg: '#3178C6', badgeTextColor: '#ffffff' },
        { name: 'HTML5', shortName: 'H5', brandColor: '#E34F26', textColor: 'text-white', badgeBg: '#E34F26', badgeTextColor: '#ffffff' },
        { name: 'CSS3 & Sass', shortName: 'C3', brandColor: '#1572B6', textColor: 'text-white', badgeBg: '#1572B6', badgeTextColor: '#ffffff' }
      ]
    },
    {
      title: 'Frameworks & Libs',
      id: '02 //',
      color: '#FF00EA',
      skills: [
        { name: 'React', shortName: 'RE', brandColor: '#61DAFB', textColor: 'text-[#111111]', badgeBg: '#61DAFB', badgeTextColor: '#111111' },
        { name: 'Next.js', shortName: 'NX', brandColor: '#000000', textColor: 'text-white', badgeBg: '#000000', badgeTextColor: '#ffffff' },
        { name: 'Laravel', shortName: 'LV', brandColor: '#FF2D20', textColor: 'text-white', badgeBg: '#FF2D20', badgeTextColor: '#ffffff' },
        { name: 'Tailwind CSS', shortName: 'TW', brandColor: '#38BDF8', textColor: 'text-white', badgeBg: '#38BDF8', badgeTextColor: '#ffffff' },
        { name: 'Node.js', shortName: 'NO', brandColor: '#339933', textColor: 'text-white', badgeBg: '#339933', badgeTextColor: '#ffffff' }
      ]
    },
    {
      title: 'Databases & Tools',
      id: '03 //',
      color: '#FFE600',
      skills: [
        { name: 'PostgreSQL', shortName: 'PG', brandColor: '#336791', textColor: 'text-white', badgeBg: '#336791', badgeTextColor: '#ffffff' },
        { name: 'MongoDB', shortName: 'MG', brandColor: '#47A248', textColor: 'text-white', badgeBg: '#47A248', badgeTextColor: '#ffffff' },
        { name: 'Git & GitHub', shortName: 'GT', brandColor: '#F1502F', textColor: 'text-white', badgeBg: '#F1502F', badgeTextColor: '#ffffff' },
        { name: 'Figma / Creative', shortName: 'FG', brandColor: '#A259FF', textColor: 'text-white', badgeBg: '#A259FF', badgeTextColor: '#ffffff' },
        { name: 'Photoshop & Illustrator', shortName: 'AD', brandColor: '#FF9A00', textColor: 'text-white', badgeBg: '#FF9A00', badgeTextColor: '#ffffff' }
      ]
    }
  ];

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
          <h2 className="text-5xl md:text-6xl leading-[1.1] tracking-tighter font-black text-[#111111] uppercase shrink-0 lg:w-[700px]">
            LANGUAGES & <br />
            <span className="text-[#FFE600] [-webkit-text-stroke:1.5px_#111111]" style={{ textShadow: '3px 3px 0px #111111' }}>TECHNOLOGIES</span>
          </h2>
          <p className="text-base leading-relaxed text-[#555555] max-w-[440px] shrink-0">
            A curated collection of languages, frameworks, and design environments I have mastered to bring high-performance and visually stunning ideas to life.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full z-10 relative">
        {categories.map((category) => (
          <div 
            key={category.title} 
            className="flex flex-col gap-8 border-2 border-[#111111] rounded-[20px] p-8 md:p-10 bg-white shadow-[6px_6px_0px_#111111] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#111111]"
          >
            {/* Category Header */}
            <div className="flex justify-between items-center w-full border-b-2 border-[#111111] pb-5">
              <h3 className="text-xl font-black tracking-tight text-[#111111] uppercase">{category.title}</h3>
              <span 
                className="text-sm font-black [-webkit-text-stroke:1px_#111111]" 
                style={{ 
                  color: category.color,
                  textShadow: '1px 1px 0px #111111' 
                }}
              >
                {category.id}
              </span>
            </div>

            {/* Pills Wrap Grid */}
            <div className="flex flex-wrap gap-4 w-full">
              {category.skills.map((skill) => {
                const isHovered = hoveredSkill === skill.name;
                return (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="flex items-center gap-3.5 px-[18px] py-2.5 bg-white border-2 border-[#111111] rounded-xl shadow-[3px_3px_0px_#111111] cursor-pointer transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#111111]"
                    style={{
                      backgroundColor: isHovered ? skill.brandColor : '#ffffff',
                      color: isHovered ? (skill.textColor === 'text-white' ? '#ffffff' : '#111111') : '#111111'
                    }}
                  >
                    {/* Brand Letter Logo Badge */}
                    <div 
                      className="w-7 h-7 flex items-center justify-center border-[1.5px] border-[#111111] rounded-md shadow-[1px_1px_0px_#111111] text-[9px] font-black shrink-0 transition-colors duration-300"
                      style={{
                        backgroundColor: isHovered ? '#ffffff' : skill.badgeBg,
                        color: isHovered ? skill.badgeBg : skill.badgeTextColor,
                        borderColor: '#111111'
                      }}
                    >
                      {skill.shortName}
                    </div>
                    <span className="text-[15px] font-extrabold tracking-tight select-none">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

