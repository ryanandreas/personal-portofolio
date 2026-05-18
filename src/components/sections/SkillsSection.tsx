"use client";

import React, { useState } from 'react';

interface Skill {
  name: string;
  shortName: string;
}

interface SkillCategory {
  title: string;
  id: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: SkillCategory[] = [
    {
      title: 'Languages & Core',
      id: '01 //',
      skills: [
        { name: 'PHP', shortName: 'PHP' },
        { name: 'JavaScript', shortName: 'JS' },
        { name: 'TypeScript', shortName: 'TS' },
        { name: 'HTML5', shortName: 'H5' },
        { name: 'CSS3 & Sass', shortName: 'C3' }
      ]
    },
    {
      title: 'Frameworks & Libs',
      id: '02 //',
      skills: [
        { name: 'React', shortName: 'RE' },
        { name: 'Next.js', shortName: 'NX' },
        { name: 'Laravel', shortName: 'LV' },
        { name: 'Tailwind CSS', shortName: 'TW' },
        { name: 'Node.js', shortName: 'NO' }
      ]
    },
    {
      title: 'Databases & Tools',
      id: '03 //',
      skills: [
        { name: 'PostgreSQL', shortName: 'PG' },
        { name: 'MongoDB', shortName: 'MG' },
        { name: 'Git & GitHub', shortName: 'GT' },
        { name: 'Figma / Creative', shortName: 'FG' },
        { name: 'Photoshop & Illustrator', shortName: 'AD' }
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
                        className={`w-6 h-6 flex items-center justify-center border rounded-[4px] text-[8px] font-black shrink-0 transition-colors duration-300 ${
                          isBlackCard
                            ? isHovered
                              ? 'bg-black text-white border-black'
                              : 'bg-[#333333] border-[#555555] text-white'
                            : isHovered
                              ? 'bg-white text-black border-white'
                              : 'bg-[#F5F5F5] border-[#E0E0E0] text-[#111111]'
                        }`}
                      >
                        {skill.shortName}
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


