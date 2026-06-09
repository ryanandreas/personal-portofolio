import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: "Fullstack Developer",
    company: "PT LAB WELCOM PLAY",
    duration: "March 2025 – Present",
    desc: "Experienced as a Backend and Frontend Developer for web applications using Next.js, Laravel, and Flutter. Experienced in database management using PostgreSQL and NeonDB, and integrating payment gateways like Midtrans."
  },
  {
    title: "Freelance Front End Developer",
    company: "Aigorhythm Sdn. Bhd.",
    duration: "December 2024 – Present",
    desc: "Gained experience in developing Laravel web apps, maintaining mobile apps (feature updates, version upgrades, bug fixes), and understanding AWS cloud infrastructure management to support system performance and stability."
  },
  {
    title: "University Intern",
    company: "PT Citra Powerindo Sakti",
    duration: "2023",
    desc: "Experienced as an IT Support Specialist responsible for corporate office hardware maintenance (PCs, printers, LAN cabling, routers) and network troubleshooting."
  },
  {
    title: "Vocational High School Intern",
    company: "PT Indonusa Telemedia (Wardiere Inc.)",
    duration: "2017",
    desc: "Experienced as an Uplink Assistant with competency in earth station infrastructure maintenance for cable television transmission systems."
  }
];

const educations = [
  {
    title: "Bachelor of Informatics Engineering",
    institution: "Universitas Esa Unggul",
    duration: "2018 – 2024",
    desc: "In-depth study of software engineering, web/mobile application development, database management, and computer algorithms."
  },
  {
    title: "Vocational High School - Access Network",
    institution: "SMK Telkom Jakarta",
    duration: "2014 – 2017",
    desc: "Focused learning on network administration, telecommunication infrastructure, computer systems, and installation of access transmission devices."
  },
  {
    title: "Elementary & Junior High School",
    institution: "SD-SMP Seraphine Bakti Utama",
    duration: "2005 – 2014",
    desc: "Built foundational academic competencies, character building, and early communication skill development."
  }
];

export default function ExperienceSection() {
  return (
    <div id="about" className="flex overflow-hidden w-full flex-col py-12 md:py-16 px-6 md:px-[108px] bg-white antialiased text-xs max-w-8xl mx-auto relative">
      {/* Header */}
      <div className="w-full flex flex-col items-center mb-12 md:mb-16 pt-6 relative">
        <div 
          className="flex items-center justify-center mb-4 rounded-full shrink-0 w-8 h-8"
          style={{ 
            backgroundImage: 'radial-gradient(circle farthest-corner at 50% 50% in oklab, oklab(100% 0 0) 0%, oklab(100% 0 0) 30%, oklab(0% 0 0 / 0%) 70%)',
            boxShadow: '0 0 20px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#111111" stroke="none" className="shrink-0">
            <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
          </svg>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-[56px] leading-[1.1] mt-0 mb-4 uppercase tracking-[0.02em] text-center font-black text-black">
          RESUME
        </h2>
        <p className="text-sm leading-[1.6] max-w-[480px] text-center text-[#555555] m-0">
          A summary of my professional work experience and educational background.
        </p>

        {/* Decorative Grid Circles / Stripes on Right */}
        <svg width="60" height="60" viewBox="0 0 60 60" className="absolute right-0 top-0 opacity-40 md:opacity-100">
          <clipPath id="circleClip"><circle cx="30" cy="30" r="30"/></clipPath>
          <g clipPath="url(#circleClip)" stroke="#111111" strokeWidth="3" strokeLinecap="round">
            <line x1="-10" y1="-10" x2="70" y2="70" />
            <line x1="0" y1="-20" x2="80" y2="60" />
            <line x1="-20" y1="0" x2="60" y2="80" />
            <line x1="10" y1="-30" x2="90" y2="50" />
            <line x1="-30" y1="10" x2="50" y2="90" />
            <line x1="-40" y1="20" x2="40" y2="100" />
            <line x1="20" y1="-40" x2="100" y2="40" />
          </g>
        </svg>
      </div>

      {/* Main Content: Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full relative z-10">
        
        {/* Education Column */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-center gap-3 pb-2 border-b-2 border-[#111111] w-fit">
            <GraduationCap className="w-6 h-6 text-black" strokeWidth={2.5} />
            <h3 className="text-xl md:text-2xl font-black text-black uppercase tracking-tight m-0">
              Education
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {educations.map((edu, idx) => (
              <div 
                key={idx} 
                className="flex gap-5 p-6 bg-white border border-[#EBEBEB] hover:border-[#111111] hover:-translate-y-0.5 transition-all duration-300 rounded-xl group relative"
              >
                {/* Visual accent left line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#111111] transition-colors rounded-l-xl" />

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
                    <h4 className="font-extrabold text-black text-lg m-0 leading-tight">
                      {edu.title}
                    </h4>
                    <span className="shrink-0 text-xs font-bold text-[#666666] bg-[#F5F5F5] py-1 px-3 rounded-full border border-[#EAEAEA]">
                      {edu.duration}
                    </span>
                  </div>
                  <span className="font-bold text-[#555555] text-sm">
                    {edu.institution}
                  </span>
                  <p className="text-xs leading-[1.6] text-[#777777] m-0">
                    {edu.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-center gap-3 pb-2 border-b-2 border-[#111111] w-fit">
            <Briefcase className="w-6 h-6 text-black" strokeWidth={2.5} />
            <h3 className="text-xl md:text-2xl font-black text-black uppercase tracking-tight m-0">
              Work Experience
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="flex gap-5 p-6 bg-white border border-[#EBEBEB] hover:border-[#111111] hover:-translate-y-0.5 transition-all duration-300 rounded-xl group relative"
              >
                {/* Visual accent left line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#111111] transition-colors rounded-l-xl" />

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
                    <h4 className="font-extrabold text-black text-lg m-0 leading-tight">
                      {exp.title}
                    </h4>
                    <span className="shrink-0 text-xs font-bold text-[#666666] bg-[#F5F5F5] py-1 px-3 rounded-full border border-[#EAEAEA]">
                      {exp.duration}
                    </span>
                  </div>
                  <span className="font-bold text-[#555555] text-sm">
                    {exp.company}
                  </span>
                  {exp.desc && (
                    <p className="text-xs leading-[1.6] text-[#777777] m-0">
                      {exp.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
