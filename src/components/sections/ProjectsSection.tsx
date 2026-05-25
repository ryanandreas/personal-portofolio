"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  images: string[];
  description: string;
  longDescription: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Simple Badminton Academy Landing Page",
    category: "WEB DESIGN / LANDING PAGE",
    images: ["/sbaweb1.jpeg", "/sbaweb2.jpeg"],
    description: "A modern, high-conversion landing page designed for a badminton academy. Built with optimized assets, clean layouts, and responsive elements to capture student registrations.",
    longDescription: "A responsive landing page that profiles a badminton academy, highlighting its facilities, achievements, and coaching staff. The platform is equipped with an administrative dashboard panel, allowing easy content management to edit or delete site details in real time.",
    tech: ["NextJS", "Tailwind CSS", "Vercel", "NeonDB"],
    link: "https://simplebadmintonacademy.com",
    linkLabel: "simplebadmintonacademy.com"
  },
  {
    id: 2,
    title: "AC Tiam Web App",
    category: "WEB APP DEVELOPMENT",
    images: ["/tiamweb1.jpeg", "/tiamweb2.jpeg", "/tiamweb3.jpeg", "/tiamweb4.jpeg"],
    description: "A comprehensive administrative web dashboard built to manage scheduling, operational logs, invoicing, and service tracking. Featuring secure user authentication and interactive data analytics.",
    longDescription: "An enterprise-grade administration dashboard built for AC Tiam. It enables administrative staff to organize service tickets, dispatch technicians, generate invoices, track parts inventory, and monitor revenue with dynamic charts. The system includes strict role-based access control, secure API layers, and database optimization for rapid load times.",
    tech: ["Next.js", "React", "TypeScript", "Laravel", "PostgreSQL", "NeonDB", "Tailwind CSS"],
    link: "https://actiam.vercel.app/",
    linkLabel: "actiam.vercel.app"
  },
  {
    id: 3,
    title: "AC Tiam Customer Mobile App",
    category: "MOBILE APP DEVELOPMENT",
    images: ["/tiammobileapp1.jpeg", "/tiammobileapp2.jpeg", "/tiammobileapp3.jpeg"],
    description: "A sleek cross-platform customer mobile application enabling quick service bookings, real-time technician tracking, billing history access, and instant feedback.",
    longDescription: "A cross-platform mobile application developed using Flutter for the customer side. It enables users to seamlessly make bookings, view detailed order logs, and perform secure transactions integrated with the Midtrans payment gateway.",
    tech: ["Flutter", "Dart", "NeonDB", "Midtrans PG"]
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (proj: Project) => {
    setSelectedProject(proj);
    setCurrentSlide(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentSlide((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentSlide((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  return (
    <div id="projects" className="flex overflow-hidden w-full flex-col py-12 md:py-16 px-6 md:px-[108px] bg-white antialiased text-xs max-w-8xl mx-auto relative">
      
      {/* Header */}
      <div className="w-full flex flex-col items-center mb-12 md:mb-24 pt-6 relative">
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
          MY PROJECTS
        </h2>
        <p className="text-sm leading-[1.6] max-w-[480px] text-center text-[#555555] m-0">
          A showcase of recent client projects, combining modern technology with clean visual experiences.
        </p>

        {/* Dot pattern */}
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none" className="absolute left-4 md:left-[100px] top-0 opacity-20 md:opacity-40">
          <pattern id="dotPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle fill="#111" cx="2" cy="2" r="2"/>
          </pattern>
          <rect x="0" y="0" width="40" height="80" fill="url(#dotPattern)" />
        </svg>
      </div>

      {/* Projects list with alternating layout */}
      <div className="flex flex-col w-full px-0 sm:px-4 md:px-10 gap-16 md:gap-24">
        {projectsData.map((project, idx) => {
          const isAlternate = idx % 2 === 1;

          return (
            <div key={project.id} className="flex flex-col md:flex-row items-center w-full gap-8 md:gap-20">
              
              {/* Card (Displayed first on desktop if not alternate, or second if alternate) */}
              <div 
                onClick={() => openModal(project)}
                className={`grow shrink basis-0 w-full h-[240px] sm:h-[320px] md:h-[400px] flex flex-col items-center justify-center rounded-xl overflow-hidden bg-[#F8F8F8] border border-[#EBEBEB] shadow-sm relative group cursor-pointer ${
                  isAlternate ? 'order-1 md:order-2' : 'order-1'
                }`}
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Column */}
              <div className={`grow shrink basis-0 w-full flex flex-col items-start p-2 sm:p-5 ${
                isAlternate ? 'order-2 md:order-1' : 'order-2'
              }`}>
                <div className="mb-4 md:mb-6 rounded-full py-2 px-4 md:py-3 md:px-6 bg-[#111111]">
                  <span className="tracking-[0.05em] uppercase font-extrabold text-white text-[10px] md:text-xs">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-[36px] leading-[1.2] mt-0 mb-4 font-extrabold text-[#111111]">
                  {project.title}
                </h3>
                <p className="text-sm leading-[1.6] text-[#555555] mb-6 md:mb-8 max-w-[480px]">
                  {project.description}
                </p>
                <div 
                  onClick={() => openModal(project)}
                  className="flex items-center pb-2 gap-3 border-b-2 border-[#111111] cursor-pointer group w-fit"
                >
                  <span className="font-extrabold text-black text-base sm:text-lg">
                    See Details
                  </span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fadeIn"
          onClick={closeModal}
        >
          {/* Modal Container */}
          <div 
            className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative animate-scaleUp max-h-[92vh] md:max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-black border border-[#E0E0E0] hover:border-black flex items-center justify-center cursor-pointer transition-colors shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Left Column: Carousel */}
            <div className="w-full md:w-3/5 bg-[#F5F5F5] flex items-center justify-center relative select-none h-[200px] sm:h-[300px] md:h-auto min-h-[220px] sm:min-h-[300px] shrink-0">
              {/* Image */}
              <div className="w-full h-full relative">
                <Image
                  src={selectedProject.images[currentSlide]}
                  alt={`${selectedProject.title} screenshot ${currentSlide + 1}`}
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>

              {/* Prev Arrow */}
              {selectedProject.images.length > 1 && (
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-black border border-[#EBEBEB] hover:border-black flex items-center justify-center cursor-pointer transition-colors shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}

              {/* Next Arrow */}
              {selectedProject.images.length > 1 && (
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-black border border-[#EBEBEB] hover:border-black flex items-center justify-center cursor-pointer transition-colors shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}

              {/* Dots Indicator */}
              {selectedProject.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/10 backdrop-blur-sm py-1.5 px-3 rounded-full">
                  {selectedProject.images.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                      className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-all duration-300 ${idx === currentSlide ? 'bg-black w-3.5' : 'bg-black/30'}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Project Info */}
            <div className="w-full md:w-2/5 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto h-auto grow">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] tracking-widest font-black text-[#888888] uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111111] leading-tight m-0 uppercase">
                  {selectedProject.title}
                </h3>
                <p className="text-xs leading-[1.6] text-[#555555] m-0">
                  {selectedProject.longDescription}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-col gap-2 mt-2">
                  <span className="font-extrabold text-[10px] uppercase text-[#111111] tracking-wider">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="bg-[#F5F5F5] border border-[#EBEBEB] text-[#555555] text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Link CTA Button */}
              {selectedProject.link && (
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center rounded-full py-3 px-6 bg-[#111111] hover:bg-black text-white font-extrabold text-xs tracking-wider transition-colors cursor-pointer decoration-none shadow-sm w-full"
                >
                  VISIT LIVE SITE ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
