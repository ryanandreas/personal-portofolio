"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Printer, Mail, MapPin, Phone, Calendar, Sparkles, Globe } from 'lucide-react';

interface CvData {
  backBtn: string;
  printBtn: string;
  bannerTitle: string;
  bannerDesc: string;
  profileTitle: string;
  profileDesc: string;
  educationTitle: string;
  experienceTitle: string;
  contactTitle: string;
  skillsTitle: string;
  dob: string;
  education: {
    title: string;
    institution: string;
    period: string;
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
}

const translations: Record<'id' | 'en', CvData> = {
  id: {
    backBtn: "Kembali",
    printBtn: "Cetak",
    bannerTitle: "💡 Halaman CV Interaktif:",
    bannerDesc: "Halaman ini menampilkan CV Anda dalam format web modern. Anda dapat mengeklik tombol Cetak untuk mencetak langsung ke printer atau menyimpannya sebagai file PDF melalui dialog cetak browser.",
    profileTitle: "Profile",
    profileDesc: "Saya adalah seorang Web & Mobile Developer dengan latar belakang Teknik Informatika dan pengalaman dalam membangun serta memelihara aplikasi digital untuk kebutuhan bisnis dan organisasi. Berpengalaman dalam pengembangan sistem, integrasi layanan digital, serta pengelolaan infrastruktur aplikasi.",
    educationTitle: "Education",
    experienceTitle: "Work Experience",
    contactTitle: "Contact",
    skillsTitle: "Skills",
    dob: "Jakarta, 25 Juli 1999",
    education: [
      {
        title: "Sarjana Teknik Informatika",
        institution: "Universitas Esa Unggul",
        period: "2018 – 2024"
      },
      {
        title: "SMK Jurusan Akses",
        institution: "SMK Telkom Jakarta",
        period: "2014 – 2017"
      },
      {
        title: "Sekolah Dasar & Menengah Pertama",
        institution: "SD-SMP Seraphine Bakti Utama",
        period: "2005 – 2014"
      }
    ],
    experience: [
      {
        role: "Fullstack Developer",
        company: "PT LAB WELCOM PLAY",
        period: "Maret 2025 – Present",
        description: "Pengalaman sebagai Backend dan Frontend Developer aplikasi web menggunakan Next.js, Laravel, dan Flutter. Memiliki pengalaman dalam pengelolaan database menggunakan PostgreSQL dan NeonDB, serta integrasi payment gateway seperti Midtrans."
      },
      {
        role: "Freelance Front End Developer",
        company: "Aigorhythm Sdn. Bhd.",
        period: "Desember 2024 – Present",
        description: "Saya mendapat pengalaman dalam mengembangkan web app laravel, melakukan maintenance aplikasi mobile seperti pembaruan fitur, update versi, dan perbaikan bug, serta memahami pengelolaan infrastruktur berbasis cloud AWS untuk mendukung performa dan stabilitas sistem."
      },
      {
        role: "University Intern",
        company: "PT Citra Powerindo Sakti",
        period: "2023",
        description: "Berpengalaman sebagai IT Support yang bertanggung jawab atas pemeliharaan perangkat keras (hardware) kantor (PC, printer, kabel LAN, router) serta troubleshooting perangkat jaringan."
      },
      {
        role: "Vocational High School Intern",
        company: "PT Indonusa Telemedia (Wardiere Inc.)",
        period: "2017",
        description: "Berpengalaman sebagai Uplink Assistant dengan kompetensi dalam pemeliharaan infrastruktur stasiun bumi (earth station) pada sistem transmisi televisi kabel."
      }
    ]
  },
  en: {
    backBtn: "Back",
    printBtn: "Print",
    bannerTitle: "💡 Interactive CV Page:",
    bannerDesc: "This page displays your CV in a modern web format. You can click the Print button to print directly to a printer or save it as a PDF file through the browser print dialog.",
    profileTitle: "Profile",
    profileDesc: "I am a Web & Mobile Developer with an Informatics Engineering background and experience in building and maintaining digital applications for business and organizational needs. Experienced in system development, digital service integration, and application infrastructure management.",
    educationTitle: "Education",
    experienceTitle: "Work Experience",
    contactTitle: "Contact",
    skillsTitle: "Skills",
    dob: "Jakarta, July 25, 1999",
    education: [
      {
        title: "Bachelor of Informatics Engineering",
        institution: "Esa Unggul University",
        period: "2018 – 2024"
      },
      {
        title: "Vocational High School in Access Network",
        institution: "Telkom Vocational High School Jakarta",
        period: "2014 – 2017"
      },
      {
        title: "Elementary & Junior High School",
        institution: "Seraphine Bakti Utama School",
        period: "2005 – 2014"
      }
    ],
    experience: [
      {
        role: "Fullstack Developer",
        company: "PT LAB WELCOM PLAY",
        period: "March 2025 – Present",
        description: "Experienced as a Backend and Frontend Developer for web applications using Next.js, Laravel, and Flutter. Proficient in database management using PostgreSQL and NeonDB, as well as integrating payment gateways like Midtrans."
      },
      {
        role: "Freelance Front End Developer",
        company: "Aigorhythm Sdn. Bhd.",
        period: "December 2024 – Present",
        description: "Gained experience in developing Laravel web applications, maintaining mobile applications including feature updates, version upgrades, and bug fixes, and understanding AWS cloud-based infrastructure management to support system performance and stability."
      },
      {
        role: "University Intern",
        company: "PT Citra Powerindo Sakti",
        period: "2023",
        description: "Served as an IT Support intern responsible for office hardware maintenance (PCs, printers, LAN cables, routers) and network troubleshooting."
      },
      {
        role: "Vocational High School Intern",
        company: "PT Indonusa Telemedia (Wardiere Inc.)",
        period: "2017",
        description: "Worked as an Uplink Assistant intern with competence in earth station infrastructure maintenance for cable television transmission systems."
      }
    ]
  }
};

export default function CvClientPage() {
  const [siteUrl, setSiteUrl] = useState("ryanandreas.com");
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const cvContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSiteUrl(window.location.hostname);
    }
  }, []);

  useEffect(() => {
    document.title = lang === 'id' 
      ? "Curriculum Vitae - Ryan Andreas" 
      : "Resume - Ryan Andreas";
  }, [lang]);

  const handlePrint = () => {
    window.print();
  };

  // QR code content pointing to portfolio url
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://ryanandreas-portofolio.vercel.app/";

  const currentData = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-[#111111] antialiased flex flex-col relative overflow-hidden font-sans pb-16">
      
      {/* BACKGROUND DECORATIONS (SCREEN VIEW ONLY) */}
      <div className="absolute top-0 left-[30%] w-[600px] h-[400px] flex opacity-30 blur-[120px] z-0 pointer-events-none print:hidden">
        <div className="grow shrink basis-0 rounded-full bg-[#00E5FF]" />
        <div className="grow shrink basis-0 -ml-[100px] mt-[80px] rounded-full bg-[#FFE600]" />
        <div className="grow shrink basis-0 -ml-[100px] rounded-full bg-[#FF00EA]" />
      </div>

      {/* FLOATING ACTION BAR (SCREEN VIEW ONLY) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl border border-slate-200/80 px-6 py-4 rounded-full shadow-2xl flex items-center gap-6 z-50 print:hidden transition-all duration-300 hover:border-black/20 hover:shadow-xl">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-black transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>{currentData.backBtn}</span>
        </Link>
        
        <div className="w-px h-5 bg-slate-200" />

        {/* Language Selection Toggle */}
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-full border border-slate-200/50">
          <button
            onClick={() => setLang('id')}
            className={`px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-wider transition-all duration-200 ${lang === 'id' ? 'bg-black text-white shadow-sm' : 'text-slate-500 hover:text-black'}`}
            title="Bahasa Indonesia"
          >
            ID
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-wider transition-all duration-200 ${lang === 'en' ? 'bg-black text-white shadow-sm' : 'text-slate-500 hover:text-black'}`}
            title="English"
          >
            EN
          </button>
        </div>

        <div className="w-px h-5 bg-slate-200" />

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-black transition-colors cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>{currentData.printBtn}</span>
        </button>
      </div>

      {/* MAIN CONTAINER */}
      <main className="grow w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16 relative z-10 print:p-0 print:m-0">
        
        {/* INTERACTIVE PRINT TIP BANNER (SCREEN VIEW ONLY) */}
        <div className="mb-8 p-5 bg-[#F9F9F9] border border-slate-200 rounded-2xl flex items-start gap-4 print:hidden max-w-3xl mx-auto shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-black" />
          <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 leading-[1.7]">
            <span className="font-black text-black block mb-1">{currentData.bannerTitle}</span>
            {currentData.bannerDesc}
          </div>
        </div>

        {/* ==================== SCREEN VIEW PREVIEW (AESTHETIC DESKTOP WRAPPER) ==================== */}
        <div className="print:hidden max-w-[210mm] mx-auto bg-white shadow-2xl border border-slate-200 rounded-3xl overflow-hidden aspect-[210/297] flex">
          
          {/* Left Column (Sidebar) */}
          <div className="w-[33%] bg-slate-100 p-7 flex flex-col justify-between border-r border-slate-200">
            <div>
              {/* Profile Photo */}
              <div className="flex justify-center mb-6">
                <div className="w-44 h-44 rounded-full border-2 border-black bg-white p-1 shadow-md flex items-center justify-center">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image 
                      src="/photo-cv-circleframe.png" 
                      alt="Ryan Andreas" 
                      fill 
                      priority
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mb-6">
                <h3 className="text-[15px] font-black text-black uppercase tracking-wider border-b-2 border-black/80 pb-1 mb-3">
                  {currentData.contactTitle}
                </h3>
                <ul className="space-y-3 text-[13px] text-slate-700 leading-normal">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>Jl. Setia III RT 01 RW 16 No 64 Cengkareng, Jakarta Barat</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-black shrink-0" />
                    <span>+62 82258415911</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-black shrink-0" />
                    <a href="mailto:ryanguansin@gmail.com" className="hover:underline text-black font-medium">ryanguansin@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-black shrink-0" />
                    <a href="https://ryanandreas-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-black font-semibold">
                      ryanandreas-portofolio.vercel.app
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>{currentData.dob}</span>
                  </li>
                </ul>
              </div>

              {/* Skills Section */}
              <div>
                <h3 className="text-[15px] font-black text-black uppercase tracking-wider border-b-2 border-black/80 pb-1 mb-3">
                  {currentData.skillsTitle}
                </h3>
                <ul className="space-y-2.5 text-[13px] text-slate-700 leading-normal">
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>HTML, CSS, JavaScript, TypeScript</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>React.js & Next.js</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>Node.js & Express.js</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>PHP & Laravel</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>Flutter</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>MySQL, PostgreSQL</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>AWS Cloud & NeonDB</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>Git & GitHub</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center gap-1.5 mt-6">
              <div className="relative w-24 h-24 bg-white border border-slate-200 p-1 rounded-lg">
                <a href="https://ryanandreas-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={qrCodeUrl} 
                    alt="My Portfolio QR Code" 
                    className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
              <a 
                href="https://ryanandreas-portofolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[11px] font-black tracking-widest text-slate-800 uppercase hover:underline"
              >
                My Portfolio
              </a>
              <a 
                href="https://ryanandreas-portofolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[9.5px] text-slate-500 hover:underline mt-0.5"
              >
                ryanandreas-portofolio.vercel.app
              </a>
              <div className="w-10 h-0.5 bg-slate-300 mt-1" />
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="w-[67%] p-9 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-black m-0 uppercase leading-none">
                  Ryan Andreas
                </h1>
                <p className="text-[15px] font-bold text-slate-500 mt-2 mb-0 uppercase tracking-widest">
                  Web & Mobile Developer
                </p>
              </div>

              {/* Profile */}
              <div className="mb-6">
                <h3 className="text-[13px] font-black text-black uppercase tracking-widest border-b border-slate-200 pb-1 mb-2.5">
                  {currentData.profileTitle}
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-700 m-0">
                  {currentData.profileDesc}
                </p>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h3 className="text-[13px] font-black text-black uppercase tracking-widest border-b border-slate-200 pb-1 mb-2.5">
                  {currentData.educationTitle}
                </h3>
                <div className="space-y-3.5">
                  {currentData.education.map((edu, idx) => (
                    <div key={idx} className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-[13px] font-black text-black m-0 uppercase">
                          {edu.title}
                        </h4>
                        <span className="text-xs text-slate-500 italic block mt-0.5">
                          {edu.institution}
                        </span>
                      </div>
                      <span className="shrink-0 text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {edu.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-[13px] font-black text-black uppercase tracking-widest border-b border-slate-200 pb-1 mb-2.5">
                  {currentData.experienceTitle}
                </h3>
                <div className="space-y-4">
                  {currentData.experience.map((exp, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-start gap-4 mb-1.5">
                        <div>
                          <h4 className="text-[13px] font-black text-black m-0 uppercase">
                            {exp.role}
                          </h4>
                          <span className="text-xs text-slate-500 italic block mt-0.5">
                            {exp.company}
                          </span>
                        </div>
                        <span className="shrink-0 text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[13px] leading-relaxed text-slate-700 m-0">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-[9px] text-slate-400 border-t border-slate-100 pt-2 text-right mt-4">
              &copy; {new Date().getFullYear()}{" "}Ryan Andreas &bull; Curriculum Vitae
            </div>
          </div>

        </div>

        {/* ==================== A4 PRINT ENGINE LAYOUT (RENDERED ONLY FOR PDF AND PRINT) ==================== */}
        <div 
          ref={cvContainerRef}
          className="absolute -top-[99999px] -left-[99999px] opacity-0 pointer-events-none print:static print:opacity-100 print:pointer-events-auto"
          style={{ width: '210mm', height: '297mm' }}
        >
          <div className="flex w-full h-full bg-white text-black font-sans box-border" style={{ height: '297mm' }}>
            
            {/* Print Sidebar (Left 33%) */}
            <div className="w-[33%] bg-[#F3F4F6] p-[7mm] flex flex-col justify-between border-r border-[#E5E7EB]" style={{ height: '100%' }}>
              <div>
                {/* Profile Photo */}
                <div className="flex justify-center mb-[5mm]">
                  <div className="w-[42mm] h-[42mm] rounded-full border-[0.6mm] border-black bg-white p-[1mm] flex items-center justify-center">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="/photo-cv-circleframe.png" 
                        alt="Ryan Andreas" 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="mb-[6mm]">
                  <h3 className="text-[15px] font-black text-black uppercase tracking-wider border-b-2 border-black pb-[0.8mm] mb-[3mm]">
                    {currentData.contactTitle}
                  </h3>
                  <div className="space-y-[3mm] text-[13px] text-[#374151] leading-normal">
                    <div className="flex items-start gap-[1.5mm]">
                      <MapPin className="w-[3.2mm] h-[3.2mm] text-black shrink-0 mt-[0.5mm]" />
                      <span>Jl. Setia III RT 01 RW 16 No 64 Cengkareng, Jakarta Barat</span>
                    </div>
                    <div className="flex items-center gap-[1.5mm]">
                      <Phone className="w-[3.2mm] h-[3.2mm] text-black shrink-0" />
                      <span>+62 82258415911</span>
                    </div>
                    <div className="flex items-center gap-[1.5mm]">
                      <Mail className="w-[3.2mm] h-[3.2mm] text-black shrink-0" />
                      <span>ryanguansin@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-[1.5mm]">
                      <Globe className="w-[3.2mm] h-[3.2mm] text-black shrink-0" />
                      <a href="https://ryanandreas-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black font-semibold underline">
                        ryanandreas-portofolio.vercel.app
                      </a>
                    </div>
                    <div className="flex items-center gap-[1.5mm]">
                      <Calendar className="w-[3.2mm] h-[3.2mm] text-black shrink-0" />
                      <span>{currentData.dob}</span>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div>
                  <h3 className="text-[15px] font-black text-black uppercase tracking-wider border-b-2 border-black pb-[0.8mm] mb-[3mm]">
                    {currentData.skillsTitle}
                  </h3>
                  <ul className="space-y-[2.2mm] text-[13px] text-[#374151] leading-normal pl-[0.5mm]">
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>HTML, CSS, JavaScript, TypeScript</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>React.js & Next.js</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>Node.js & Express.js</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>PHP & Laravel</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>Flutter</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>MySQL, PostgreSQL</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>AWS Cloud & NeonDB</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>Git & GitHub</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center gap-[1mm] mt-auto">
                <div className="w-[22mm] h-[22mm] bg-white border border-[#E5E7EB] p-[1.2mm] rounded-lg">
                  <a href="https://ryanandreas-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={qrCodeUrl} 
                      alt="My Portfolio QR Code" 
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
                <a 
                  href="https://ryanandreas-portofolio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[11px] font-black tracking-widest text-[#1F2937] uppercase underline mt-[0.8mm]"
                >
                  My Portfolio
                </a>
                <a 
                  href="https://ryanandreas-portofolio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[9.5px] text-[#4B5563] underline mt-[0.3mm]"
                >
                  ryanandreas-portofolio.vercel.app
                </a>
                <div className="w-[6mm] h-[0.5mm] bg-[#D1D5DB] mt-[1mm]" />
              </div>
            </div>

            {/* Print Content (Right 67%) */}
            <div className="w-[67%] p-[8mm] flex flex-col justify-between" style={{ height: '100%' }}>
              <div>
                {/* Header */}
                <div className="mb-[5mm]">
                  <h1 className="text-4xl font-extrabold tracking-tight text-black m-0 uppercase leading-none">
                    Ryan Andreas
                  </h1>
                  <p className="text-[15px] font-bold text-[#6B7280] mt-[1.5mm] mb-0 uppercase tracking-widest">
                    Web & Mobile Developer
                  </p>
                </div>

                {/* Profile */}
                <div className="mb-[5mm]">
                  <h3 className="text-[13px] font-black text-black uppercase tracking-widest border-b border-[#E5E7EB] pb-[0.8mm] mb-[2mm]">
                    {currentData.profileTitle}
                  </h3>
                  <p className="text-[13px] leading-[1.5] text-[#374151] m-0">
                    {currentData.profileDesc}
                  </p>
                </div>

                {/* Education */}
                <div className="mb-[5mm]">
                  <h3 className="text-[13px] font-black text-black uppercase tracking-widest border-b border-[#E5E7EB] pb-[0.8mm] mb-[2mm]">
                    {currentData.educationTitle}
                  </h3>
                  <div className="space-y-[3.5mm]">
                    {currentData.education.map((edu, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-[3mm]">
                        <div>
                          <h4 className="text-[13px] font-black text-black m-0 uppercase">
                            {edu.title}
                          </h4>
                          <span className="text-xs text-[#6B7280] italic block mt-[0.3mm]">
                            {edu.institution}
                          </span>
                        </div>
                        <span className="shrink-0 text-[11px] font-bold text-[#4B5563] bg-[#F3F4F6] px-[2mm] py-[0.3mm] rounded border border-[#E5E7EB]">
                          {edu.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Work Experience */}
                <div>
                  <h3 className="text-[13px] font-black text-black uppercase tracking-widest border-b border-[#E5E7EB] pb-[0.8mm] mb-[2mm]">
                    {currentData.experienceTitle}
                  </h3>
                  <div className="space-y-[4.5mm]">
                    {currentData.experience.map((exp, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-start gap-[3mm] mb-[0.8mm]">
                          <div>
                            <h4 className="text-[13px] font-black text-black m-0 uppercase">
                              {exp.role}
                            </h4>
                            <span className="text-xs text-[#6B7280] italic block mt-[0.3mm]">
                              {exp.company}
                            </span>
                          </div>
                          <span className="shrink-0 text-[11px] font-bold text-[#4B5563] bg-[#F3F4F6] px-[2mm] py-[0.3mm] rounded border border-[#E5E7EB]">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-[13px] leading-[1.45] text-[#374151] m-0">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-[7.5pt] text-[#9CA3AF] border-t border-[#F3F4F6] pt-[1.5mm] text-right mt-auto">
                Ryan Andreas &bull; Curriculum Vitae
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* PRINT ENGINE SPECIFIC CUSTOM CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          html, body {
            background-color: white !important;
            color: black !important;
            font-family: system-ui, -apple-system, sans-serif !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          @page {
            size: A4;
            margin: 0;
          }

          .print\\:hidden {
            display: none !important;
          }
        }
      ` }} />
    </div>
  );
}
